// particles.js — Canvas particle system for Dreamy Dojo

class ParticleSystem {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-canvas';
    this.canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:100;';
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this._raf = null;
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._loop();
  }

  _resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = this.particles.filter(p => p.life > 0);
    for (const p of this.particles) {
      p.update();
      p.draw(ctx);
    }
  }

  // Burst from screen position: mix of stars, circles, hearts
  burst(x, y, colors = ['#FFD700', '#FF6B9D', '#5DE8E8', '#FFB5C8'], count = 14) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.6;
      const speed = 3 + Math.random() * 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const type = ['star', 'circle', 'heart'][Math.floor(Math.random() * 3)];
      const size = 6 + Math.random() * 10;
      this.particles.push(new Particle({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        gravity: 0.18,
        color,
        type,
        size,
        life: 1.0,
        decay: 0.013 + Math.random() * 0.010,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.18,
      }));
    }
  }

  // Burst at element's center (pass element ref)
  burstAt(el, colors) {
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    this.burst(x, y, colors);
  }

  // Celebration trail from position
  celebrate(x, y, colors) {
    if (Math.random() < 0.4) {
      this.particles.push(new Particle({
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 3,
        vy: -2 - Math.random() * 3,
        gravity: 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'star',
        size: 5 + Math.random() * 7,
        life: 1.0,
        decay: 0.022 + Math.random() * 0.014,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.14,
      }));
    }
  }

  // Floating hearts (for unlock)
  floatHearts(x, y, count = 12) {
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle({
        x: x + (Math.random() - 0.5) * 80,
        y: y + Math.random() * 30,
        vx: (Math.random() - 0.5) * 2.5,
        vy: -2.5 - Math.random() * 3.5,
        gravity: -0.04, // hearts float UP
        color: ['#FF6B9D', '#FFB5C8', '#FF85A1', '#FFD6E7'][Math.floor(Math.random() * 4)],
        type: 'heart',
        size: 10 + Math.random() * 14,
        life: 1.0,
        decay: 0.008 + Math.random() * 0.007,
        rotation: (Math.random() - 0.5) * 0.4,
        rotSpeed: (Math.random() - 0.5) * 0.04,
      }));
    }
  }

  // Word complete: big burst around character
  wordCompleteBurst(x, y, colors) {
    this.burst(x, y, colors, 18);
    // Ring of stars
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 / 8) * i;
      const dist = 60 + Math.random() * 30;
      setTimeout(() => {
        this.particles.push(new Particle({
          x: x + Math.cos(angle) * dist,
          y: y + Math.sin(angle) * dist,
          vx: Math.cos(angle) * 1.5,
          vy: Math.sin(angle) * 1.5,
          gravity: 0.12,
          color: '#FFD700',
          type: 'star',
          size: 8 + Math.random() * 8,
          life: 1.0,
          decay: 0.012,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: 0.12,
        }));
      }, i * 35);
    }
  }

  // Fireworks for level complete
  fireworks(count = 5) {
    const colors = ['#FFD700','#FF6B9D','#5DE8E8','#9B5DE5','#FEE440','#FF85A1'];
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const x = 100 + Math.random() * (window.innerWidth - 200);
        const y = 80 + Math.random() * (window.innerHeight * 0.5);
        const col = colors[Math.floor(Math.random() * colors.length)];
        this.burst(x, y, [col, '#FFD700', 'white'], 20);
      }, i * 280);
    }
  }
}

class Particle {
  constructor(opts) {
    Object.assign(this, opts);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.vx *= 0.98;
    this.rotation += this.rotSpeed;
    this.life -= this.decay;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.color;

    if (this.type === 'star') {
      this._drawStar(ctx, this.size);
    } else if (this.type === 'heart') {
      this._drawHeart(ctx, this.size);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  _drawStar(ctx, size) {
    const spikes = 5;
    const outer = size * 0.5;
    const inner = size * 0.22;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const angle = (i * Math.PI) / spikes - Math.PI / 2;
      if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
      else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fill();
  }

  _drawHeart(ctx, size) {
    const s = size * 0.5;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s * 0.05, s * 0.1, -s, s * 0.1, -s, -s * 0.2);
    ctx.bezierCurveTo(-s, -s * 0.7, -s * 0.3, -s * 0.9, 0, -s * 0.4);
    ctx.bezierCurveTo(s * 0.3, -s * 0.9, s, -s * 0.7, s, -s * 0.2);
    ctx.bezierCurveTo(s, s * 0.1, s * 0.05, s * 0.1, 0, s * 0.3);
    ctx.closePath();
    ctx.fill();
  }
}

// Global instance
const particles = new ParticleSystem();
