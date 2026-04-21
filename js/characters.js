// characters.js — All 10 Dreamy Dojo characters as SVG
// Each character: { id, name, world, colors, svgFn(size, state), description, unlockWord }

const CHARACTERS = [
  {
    id: 'boba',
    name: 'Boba',
    world: 1,
    level: '1-1',
    unlocked: true, // starter
    colors: { primary: '#FFB5C8', secondary: '#FF85A1', accent: '#5DE8E8', highlight: '#FFD6E7' },
    description: 'A sweet pink bunny who loves sipping boba and going on adventures!',
    unlockWord: null,
    svgFn: (size = 200, state = 'idle') => {
      const s = size;
      const cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="boba-body" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#FFD6E7"/>
              <stop offset="60%" stop-color="#FFB5C8"/>
              <stop offset="100%" stop-color="#FF85A1"/>
            </radialGradient>
            <radialGradient id="boba-ear-l" cx="30%" cy="20%" r="70%">
              <stop offset="0%" stop-color="#FFD6E7"/>
              <stop offset="100%" stop-color="#FFB5C8"/>
            </radialGradient>
            <radialGradient id="boba-belly" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stop-color="white" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#FFF0F5" stop-opacity="0.6"/>
            </radialGradient>
            <filter id="plush">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="softshadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="${s*0.04}" stdDeviation="${s*0.03}" flood-color="rgba(180,120,150,0.3)"/>
            </filter>
          </defs>
          <!-- Ground shadow -->
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.28}" ry="${s*0.05}" fill="rgba(180,100,130,0.18)" filter="url(#plush)"/>
          <!-- Left ear (floppy, behind body) -->
          <ellipse cx="${cx - s*0.18}" cy="${s*0.22}" rx="${s*0.08}" ry="${s*0.18}" fill="url(#boba-ear-l)" filter="url(#plush)" transform="rotate(-12, ${cx - s*0.18}, ${s*0.22})"/>
          <ellipse cx="${cx - s*0.18}" cy="${s*0.22}" rx="${s*0.04}" ry="${s*0.12}" fill="#FFD6E7" opacity="0.8" transform="rotate(-12, ${cx - s*0.18}, ${s*0.22})"/>
          <!-- Right ear (floppy, behind body) -->
          <ellipse cx="${cx + s*0.18}" cy="${s*0.22}" rx="${s*0.08}" ry="${s*0.18}" fill="url(#boba-ear-l)" filter="url(#plush)" transform="rotate(12, ${cx + s*0.18}, ${s*0.22})"/>
          <ellipse cx="${cx + s*0.18}" cy="${s*0.22}" rx="${s*0.04}" ry="${s*0.12}" fill="#FFD6E7" opacity="0.8" transform="rotate(12, ${cx + s*0.18}, ${s*0.22})"/>
          <!-- Body (slightly oval, rounded) -->
          <ellipse cx="${cx}" cy="${s*0.63}" rx="${s*0.29}" ry="${s*0.26}" fill="url(#boba-body)" filter="url(#plush)" filter="url(#softshadow)"/>
          <!-- Head (60% of total = big) -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#boba-body)" filter="url(#plush)"/>
          <!-- White belly patch -->
          <ellipse cx="${cx}" cy="${s*0.67}" rx="${s*0.16}" ry="${s*0.14}" fill="url(#boba-belly)"/>
          <!-- Heart on chest -->
          <g transform="translate(${cx - s*0.07}, ${s*0.60}) scale(${s*0.0012})">
            <path d="M50 30 C50 10, 20 0, 20 20 C20 30, 50 60, 50 60 C50 60, 80 30, 80 20 C80 0, 50 10, 50 30Z" fill="#FF6B9D" opacity="0.9"/>
          </g>
          <!-- Left eye -->
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.085}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.065}" fill="#5DE8E8"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.032}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.095}" cy="${s*0.318}" r="${s*0.022}" fill="white"/>
          <circle cx="${cx - s*0.104}" cy="${s*0.348}" r="${s*0.010}" fill="white"/>
          <!-- Right eye -->
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.085}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.065}" fill="#5DE8E8"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.032}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.135}" cy="${s*0.318}" r="${s*0.022}" fill="white"/>
          <circle cx="${cx + s*0.126}" cy="${s*0.348}" r="${s*0.010}" fill="white"/>
          <!-- Tiny nose -->
          <ellipse cx="${cx}" cy="${s*0.41}" rx="${s*0.025}" ry="${s*0.018}" fill="#FF85A1"/>
          <!-- W mouth -->
          <path d="M${cx - s*0.06} ${s*0.445} Q${cx - s*0.03} ${s*0.465} ${cx} ${s*0.448} Q${cx + s*0.03} ${s*0.465} ${cx + s*0.06} ${s*0.445}" stroke="#FF85A1" stroke-width="${s*0.015}" fill="none" stroke-linecap="round"/>
          <!-- Rosy cheeks -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.39}" rx="${s*0.055}" ry="${s*0.035}" fill="#FF85A1" opacity="0.35"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.39}" rx="${s*0.055}" ry="${s*0.035}" fill="#FF85A1" opacity="0.35"/>
          <!-- Boba cup (small, in right hand area) -->
          <rect x="${cx + s*0.18}" y="${s*0.70}" width="${s*0.10}" height="${s*0.12}" rx="${s*0.02}" fill="#FFF0F5" stroke="#FFB5C8" stroke-width="1.5"/>
          <rect x="${cx + s*0.185}" y="${s*0.70}" width="${s*0.09}" height="${s*0.04}" rx="${s*0.01}" fill="#FFD6E7" opacity="0.7"/>
          <circle cx="${cx + s*0.205}" cy="${s*0.755}" r="${s*0.008}" fill="#FF85A1"/>
          <circle cx="${cx + s*0.225}" cy="${s*0.765}" r="${s*0.008}" fill="#5DE8E8"/>
          <circle cx="${cx + s*0.245}" cy="${s*0.755}" r="${s*0.008}" fill="#FFD700"/>
          <line x1="${cx + s*0.228}" y1="${s*0.698}" x2="${cx + s*0.228}" y2="${s*0.67}" stroke="#FFB5C8" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`;
    }
  },

  {
    id: 'mochi',
    name: 'Mochi',
    world: 1,
    level: '1-2',
    unlocked: false,
    colors: { primary: '#D4B8E0', secondary: '#B89FCC', accent: '#8B5CF6', highlight: '#E8D5F5' },
    description: 'A dreamy lavender bear who loves stargazing and snuggling under cozy blankets.',
    unlockWord: 'soft',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mochi-body" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stop-color="#E8D5F5"/>
              <stop offset="60%" stop-color="#D4B8E0"/>
              <stop offset="100%" stop-color="#B89FCC"/>
            </radialGradient>
            <filter id="plush-m">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <!-- Shadow -->
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(140,100,180,0.18)" filter="url(#plush-m)"/>
          <!-- Bear ears -->
          <circle cx="${cx - s*0.20}" cy="${s*0.16}" r="${s*0.09}" fill="#D4B8E0" filter="url(#plush-m)"/>
          <circle cx="${cx - s*0.20}" cy="${s*0.16}" r="${s*0.055}" fill="#E8D5F5"/>
          <circle cx="${cx + s*0.20}" cy="${s*0.16}" r="${s*0.09}" fill="#D4B8E0" filter="url(#plush-m)"/>
          <circle cx="${cx + s*0.20}" cy="${s*0.16}" r="${s*0.055}" fill="#E8D5F5"/>
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#mochi-body)" filter="url(#plush-m)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#mochi-body)" filter="url(#plush-m)"/>
          <!-- Cream belly -->
          <ellipse cx="${cx}" cy="${s*0.67}" rx="${s*0.15}" ry="${s*0.13}" fill="white" opacity="0.55"/>
          <!-- 3 gold stars on tummy -->
          ${[[-s*0.08, s*0.63], [0, s*0.70], [s*0.08, s*0.63]].map(([ox, oy]) => `
            <g transform="translate(${cx+ox},${oy})">
              <polygon points="0,-6 1.8,-2 6,-2 2.4,1.5 3.7,6 0,3.5 -3.7,6 -2.4,1.5 -6,-2 -1.8,-2" fill="#FFD700" transform="scale(${s*0.006})"/>
            </g>`).join('')}
          <!-- Left eye (slightly squinted = sleepy) -->
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#8B5CF6"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.106}" cy="${s*0.330}" r="${s*0.020}" fill="white"/>
          <circle cx="${cx - s*0.115}" cy="${s*0.360}" r="${s*0.009}" fill="white"/>
          <!-- Sleepy lid left -->
          <path d="M${cx-s*0.205} ${s*0.33} Q${cx-s*0.12} ${s*0.285} ${cx-s*0.035} ${s*0.33}" stroke="#B89FCC" stroke-width="${s*0.018}" fill="none" stroke-linecap="round"/>
          <!-- Right eye -->
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#8B5CF6"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.330}" r="${s*0.020}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.360}" r="${s*0.009}" fill="white"/>
          <path d="M${cx+s*0.035} ${s*0.33} Q${cx+s*0.12} ${s*0.285} ${cx+s*0.205} ${s*0.33}" stroke="#B89FCC" stroke-width="${s*0.018}" fill="none" stroke-linecap="round"/>
          <!-- Round nose -->
          <ellipse cx="${cx}" cy="${s*0.415}" rx="${s*0.028}" ry="${s*0.022}" fill="#9B78C0"/>
          <!-- Gentle smile -->
          <path d="M${cx - s*0.055} ${s*0.445} Q${cx} ${s*0.470} ${cx + s*0.055} ${s*0.445}" stroke="#9B78C0" stroke-width="${s*0.014}" fill="none" stroke-linecap="round"/>
          <!-- Cheeks -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.40}" rx="${s*0.05}" ry="${s*0.032}" fill="#C8A2E0" opacity="0.4"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.40}" rx="${s*0.05}" ry="${s*0.032}" fill="#C8A2E0" opacity="0.4"/>
        </svg>`;
    }
  },

  {
    id: 'coco',
    name: 'Coco',
    world: 1,
    level: '1-3',
    unlocked: false,
    colors: { primary: '#C8956C', secondary: '#A0714F', accent: '#8B4513', highlight: '#E8C4A0' },
    description: 'A classic teddy bear who loves tea parties and keeping everyone cozy!',
    unlockWord: 'bunny',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="coco-body" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stop-color="#E8C4A0"/>
              <stop offset="55%" stop-color="#C8956C"/>
              <stop offset="100%" stop-color="#A0714F"/>
            </radialGradient>
            <radialGradient id="coco-muzzle" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#F0DEC8"/>
              <stop offset="100%" stop-color="#E0C4A0"/>
            </radialGradient>
            <filter id="plush-c">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(160,113,79,0.2)" filter="url(#plush-c)"/>
          <!-- Ears -->
          <circle cx="${cx - s*0.21}" cy="${s*0.155}" r="${s*0.095}" fill="#C8956C" filter="url(#plush-c)"/>
          <circle cx="${cx - s*0.21}" cy="${s*0.155}" r="${s*0.058}" fill="#E8C4A0"/>
          <circle cx="${cx + s*0.21}" cy="${s*0.155}" r="${s*0.095}" fill="#C8956C" filter="url(#plush-c)"/>
          <circle cx="${cx + s*0.21}" cy="${s*0.155}" r="${s*0.058}" fill="#E8C4A0"/>
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.29}" ry="${s*0.26}" fill="url(#coco-body)" filter="url(#plush-c)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#coco-body)" filter="url(#plush-c)"/>
          <!-- Cream belly -->
          <ellipse cx="${cx}" cy="${s*0.67}" rx="${s*0.17}" ry="${s*0.15}" fill="url(#coco-muzzle)" opacity="0.8"/>
          <!-- Heart patch on tummy -->
          <g transform="translate(${cx - s*0.05}, ${s*0.62}) scale(${s*0.0009})">
            <path d="M50 30 C50 10, 20 0, 20 20 C20 30, 50 60, 50 60 C50 60, 80 30, 80 20 C80 0, 50 10, 50 30Z" fill="#C8956C" opacity="0.7"/>
          </g>
          <!-- Muzzle area -->
          <ellipse cx="${cx}" cy="${s*0.415}" rx="${s*0.13}" ry="${s*0.095}" fill="url(#coco-muzzle)"/>
          <!-- Eyes -->
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.083}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.063}" fill="#8B4513"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.106}" cy="${s*0.320}" r="${s*0.021}" fill="white"/>
          <circle cx="${cx - s*0.115}" cy="${s*0.352}" r="${s*0.009}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.083}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.063}" fill="#8B4513"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.320}" r="${s*0.021}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.352}" r="${s*0.009}" fill="white"/>
          <!-- Nose -->
          <ellipse cx="${cx}" cy="${s*0.402}" rx="${s*0.028}" ry="${s*0.020}" fill="#7A4030"/>
          <!-- Smile -->
          <path d="M${cx-s*0.06} ${s*0.432} Q${cx} ${s*0.455} ${cx+s*0.06} ${s*0.432}" stroke="#7A4030" stroke-width="${s*0.015}" fill="none" stroke-linecap="round"/>
          <!-- Red bow tie -->
          <path d="M${cx - s*0.10} ${s*0.565} L${cx - s*0.04} ${s*0.545} L${cx - s*0.04} ${s*0.585}Z" fill="#E63946"/>
          <path d="M${cx + s*0.10} ${s*0.565} L${cx + s*0.04} ${s*0.545} L${cx + s*0.04} ${s*0.585}Z" fill="#E63946"/>
          <circle cx="${cx}" cy="${s*0.565}" r="${s*0.025}" fill="#C1121F"/>
          <!-- Cheeks -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.395}" rx="${s*0.052}" ry="${s*0.033}" fill="#C8956C" opacity="0.5"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.395}" rx="${s*0.052}" ry="${s*0.033}" fill="#C8956C" opacity="0.5"/>
        </svg>`;
    }
  },

  {
    id: 'nori',
    name: 'Nori',
    world: 2,
    level: '2-1',
    unlocked: false,
    colors: { primary: '#B5EAD7', secondary: '#81C9B0', accent: '#2ECC71', highlight: '#F0FFF8' },
    description: 'A mint green fox who loves exploring gardens and making new friends!',
    unlockWord: 'leaf',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nori-body" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stop-color="#D8F5EC"/>
              <stop offset="60%" stop-color="#B5EAD7"/>
              <stop offset="100%" stop-color="#81C9B0"/>
            </radialGradient>
            <filter id="plush-n">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(100,180,140,0.2)" filter="url(#plush-n)"/>
          <!-- Fox ears (pointed) -->
          <polygon points="${cx-s*0.24},${s*0.24} ${cx-s*0.18},${s*0.04} ${cx-s*0.10},${s*0.22}" fill="#B5EAD7" filter="url(#plush-n)"/>
          <polygon points="${cx-s*0.225},${s*0.22} ${cx-s*0.18},${s*0.08} ${cx-s*0.115},${s*0.21}" fill="#F0FFF8"/>
          <polygon points="${cx+s*0.24},${s*0.24} ${cx+s*0.18},${s*0.04} ${cx+s*0.10},${s*0.22}" fill="#B5EAD7" filter="url(#plush-n)"/>
          <polygon points="${cx+s*0.225},${s*0.22} ${cx+s*0.18},${s*0.08} ${cx+s*0.115},${s*0.21}" fill="#F0FFF8"/>
          <!-- Tail (behind, curling up) -->
          <path d="M${cx+s*0.20} ${s*0.85} Q${cx+s*0.45} ${s*0.70} ${cx+s*0.40} ${s*0.50} Q${cx+s*0.38} ${s*0.30} ${cx+s*0.28} ${s*0.38}" stroke="#81C9B0" stroke-width="${s*0.12}" fill="none" stroke-linecap="round" filter="url(#plush-n)"/>
          <path d="M${cx+s*0.20} ${s*0.85} Q${cx+s*0.45} ${s*0.70} ${cx+s*0.40} ${s*0.50} Q${cx+s*0.38} ${s*0.30} ${cx+s*0.28} ${s*0.38}" stroke="#D8F5EC" stroke-width="${s*0.05}" fill="none" stroke-linecap="round"/>
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#nori-body)" filter="url(#plush-n)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#nori-body)" filter="url(#plush-n)"/>
          <!-- White chest fluff (overlapping circles) -->
          <circle cx="${cx-s*0.06}" cy="${s*0.60}" r="${s*0.10}" fill="#F0FFF8" opacity="0.85"/>
          <circle cx="${cx+s*0.04}" cy="${s*0.58}" r="${s*0.09}" fill="#F0FFF8" opacity="0.75"/>
          <circle cx="${cx}" cy="${s*0.66}" r="${s*0.08}" fill="#F0FFF8" opacity="0.7"/>
          <!-- Eyes -->
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#2ECC71"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.105}" cy="${s*0.330}" r="${s*0.020}" fill="white"/>
          <circle cx="${cx - s*0.114}" cy="${s*0.362}" r="${s*0.009}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#2ECC71"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.330}" r="${s*0.020}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.362}" r="${s*0.009}" fill="white"/>
          <!-- Small orange nose (triangle) -->
          <polygon points="${cx},${s*0.406} ${cx-s*0.022},${s*0.430} ${cx+s*0.022},${s*0.430}" fill="#FF8C00"/>
          <!-- Smile -->
          <path d="M${cx-s*0.055} ${s*0.445} Q${cx} ${s*0.468} ${cx+s*0.055} ${s*0.445}" stroke="#81C9B0" stroke-width="${s*0.014}" fill="none" stroke-linecap="round"/>
          <!-- Cheeks -->
          <ellipse cx="${cx - s*0.215}" cy="${s*0.395}" rx="${s*0.050}" ry="${s*0.032}" fill="#81C9B0" opacity="0.45"/>
          <ellipse cx="${cx + s*0.215}" cy="${s*0.395}" rx="${s*0.050}" ry="${s*0.032}" fill="#81C9B0" opacity="0.45"/>
        </svg>`;
    }
  },

  {
    id: 'zara',
    name: 'Zara',
    world: 2,
    level: '2-2',
    unlocked: false,
    colors: { primary: '#C7CEEA', secondary: '#A8B4D8', accent: '#FFD700', highlight: '#E8ECFF' },
    description: 'A magical lavender unicorn who leaves rainbow trails wherever she goes!',
    unlockWord: 'magic',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="zara-body" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stop-color="#E8ECFF"/>
              <stop offset="60%" stop-color="#C7CEEA"/>
              <stop offset="100%" stop-color="#A8B4D8"/>
            </radialGradient>
            <linearGradient id="zara-horn" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FFA500"/>
              <stop offset="100%" stop-color="#FFD700"/>
            </linearGradient>
            <filter id="plush-z">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(140,150,200,0.2)" filter="url(#plush-z)"/>
          <!-- Rainbow mane (behind head) -->
          ${['#FF9AA2','#FFB7B2','#FFDAC1','#E2F0CB','#B5EAD7','#C7CEEA'].map((c, i) =>
            `<path d="M${cx-s*0.25+i*s*0.04} ${s*0.20} Q${cx-s*0.30+i*s*0.04} ${s*0.35} ${cx-s*0.22+i*s*0.04} ${s*0.50}" stroke="${c}" stroke-width="${s*0.035}" fill="none" stroke-linecap="round" opacity="0.85"/>`
          ).join('')}
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#zara-body)" filter="url(#plush-z)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#zara-body)" filter="url(#plush-z)"/>
          <!-- Horn (spiral) -->
          <polygon points="${cx},${s*0.055} ${cx-s*0.04},${s*0.175} ${cx+s*0.04},${s*0.175}" fill="url(#zara-horn)"/>
          <line x1="${cx-s*0.025}" y1="${s*0.085}" x2="${cx+s*0.025}" y2="${s*0.105}" stroke="white" stroke-width="1.5" opacity="0.6"/>
          <line x1="${cx-s*0.03}" y1="${s*0.115}" x2="${cx+s*0.03}" y2="${s*0.135}" stroke="white" stroke-width="1.5" opacity="0.6"/>
          <line x1="${cx-s*0.03}" y1="${s*0.148}" x2="${cx+s*0.03}" y2="${s*0.165}" stroke="white" stroke-width="1.5" opacity="0.5"/>
          <!-- Tiny round hooves -->
          <ellipse cx="${cx - s*0.15}" cy="${s*0.895}" rx="${s*0.06}" ry="${s*0.035}" fill="#A8B4D8"/>
          <ellipse cx="${cx + s*0.15}" cy="${s*0.895}" rx="${s*0.06}" ry="${s*0.035}" fill="#A8B4D8"/>
          <!-- Eyes with star pupils -->
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#C7CEEA"/>
          <!-- Star pupil left -->
          <g transform="translate(${cx-s*0.12},${s*0.35})">
            <polygon points="0,-${s*0.030} ${s*0.009},-${s*0.009} ${s*0.032},0 ${s*0.009},${s*0.009} 0,${s*0.030} -${s*0.009},${s*0.009} -${s*0.032},0 -${s*0.009},-${s*0.009}" fill="#FFD700"/>
          </g>
          <circle cx="${cx - s*0.105}" cy="${s*0.330}" r="${s*0.018}" fill="white" opacity="0.9"/>
          <!-- Eyes right -->
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#C7CEEA"/>
          <g transform="translate(${cx+s*0.12},${s*0.35})">
            <polygon points="0,-${s*0.030} ${s*0.009},-${s*0.009} ${s*0.032},0 ${s*0.009},${s*0.009} 0,${s*0.030} -${s*0.009},${s*0.009} -${s*0.032},0 -${s*0.009},-${s*0.009}" fill="#FFD700"/>
          </g>
          <circle cx="${cx + s*0.134}" cy="${s*0.330}" r="${s*0.018}" fill="white" opacity="0.9"/>
          <!-- Nose -->
          <ellipse cx="${cx}" cy="${s*0.415}" rx="${s*0.025}" ry="${s*0.018}" fill="#A8B4D8"/>
          <!-- Smile -->
          <path d="M${cx-s*0.055} ${s*0.445} Q${cx} ${s*0.468} ${cx+s*0.055} ${s*0.445}" stroke="#A8B4D8" stroke-width="${s*0.014}" fill="none" stroke-linecap="round"/>
          <!-- Sparkle marks on cheeks -->
          <text x="${cx-s*0.24}" y="${s*0.40}" font-size="${s*0.07}" text-anchor="middle" fill="#FFD700" opacity="0.8">✦</text>
          <text x="${cx+s*0.24}" y="${s*0.40}" font-size="${s*0.07}" text-anchor="middle" fill="#FFD700" opacity="0.8">✦</text>
        </svg>`;
    }
  },

  {
    id: 'puffy',
    name: 'Puffy',
    world: 2,
    level: '2-3',
    unlocked: false,
    colors: { primary: '#FFE066', secondary: '#FFC832', accent: '#FF8C00', highlight: '#FFF5CC' },
    description: 'A royal golden chick with her tiny crown, bossy but sweet!',
    unlockWord: 'garden',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="puffy-body" cx="38%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#FFF5CC"/>
              <stop offset="55%" stop-color="#FFE066"/>
              <stop offset="100%" stop-color="#FFC832"/>
            </radialGradient>
            <filter id="plush-p">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.26}" ry="${s*0.045}" fill="rgba(200,170,50,0.2)" filter="url(#plush-p)"/>
          <!-- Wing flaps -->
          <ellipse cx="${cx - s*0.32}" cy="${s*0.57}" rx="${s*0.12}" ry="${s*0.10}" fill="#FFC832" filter="url(#plush-p)" transform="rotate(-20, ${cx - s*0.32}, ${s*0.57})"/>
          <ellipse cx="${cx + s*0.32}" cy="${s*0.57}" rx="${s*0.12}" ry="${s*0.10}" fill="#FFC832" filter="url(#plush-p)" transform="rotate(20, ${cx + s*0.32}, ${s*0.57})"/>
          <!-- Body (very round) -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.30}" ry="${s*0.27}" fill="url(#puffy-body)" filter="url(#plush-p)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.37}" r="${s*0.30}" fill="url(#puffy-body)" filter="url(#plush-p)"/>
          <!-- Tiny feet -->
          <ellipse cx="${cx - s*0.08}" cy="${s*0.91}" rx="${s*0.055}" ry="${s*0.025}" fill="#FF8C00"/>
          <ellipse cx="${cx + s*0.08}" cy="${s*0.91}" rx="${s*0.055}" ry="${s*0.025}" fill="#FF8C00"/>
          <!-- Crown -->
          <rect x="${cx - s*0.10}" y="${s*0.075}" width="${s*0.20}" height="${s*0.065}" rx="${s*0.008}" fill="#FFD700"/>
          <polygon points="${cx-s*0.10},${s*0.075} ${cx-s*0.10},${s*0.030} ${cx-s*0.065},${s*0.065}" fill="#FFD700"/>
          <polygon points="${cx},${s*0.075} ${cx},${s*0.020} ${cx+s*0.02},${s*0.068}" fill="#FFD700"/>
          <polygon points="${cx+s*0.10},${s*0.075} ${cx+s*0.10},${s*0.030} ${cx+s*0.065},${s*0.065}" fill="#FFD700"/>
          <circle cx="${cx-s*0.065}" cy="${s*0.033}" r="${s*0.012}" fill="#FF4D6A"/>
          <circle cx="${cx}" cy="${s*0.022}" r="${s*0.012}" fill="#4DCFFF"/>
          <circle cx="${cx+s*0.065}" cy="${s*0.033}" r="${s*0.012}" fill="#FF4D6A"/>
          <!-- Eyes -->
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.062}" fill="#8B5E00"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.34}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.105}" cy="${s*0.318}" r="${s*0.022}" fill="white"/>
          <circle cx="${cx - s*0.114}" cy="${s*0.352}" r="${s*0.009}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.062}" fill="#8B5E00"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.34}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.318}" r="${s*0.022}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.352}" r="${s*0.009}" fill="white"/>
          <!-- Beak (forward triangle) -->
          <polygon points="${cx},${s*0.405} ${cx-s*0.030},${s*0.432} ${cx+s*0.030},${s*0.432}" fill="#FF8C00"/>
          <!-- Cheeks -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.385}" rx="${s*0.050}" ry="${s*0.032}" fill="#FFC832" opacity="0.55"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.385}" rx="${s*0.050}" ry="${s*0.032}" fill="#FFC832" opacity="0.55"/>
        </svg>`;
    }
  },

  {
    id: 'luna',
    name: 'Luna',
    world: 3,
    level: '3-1',
    unlocked: false,
    colors: { primary: '#9B5DE5', secondary: '#6B3BA8', accent: '#FFD700', highlight: '#C8A2FF' },
    description: 'A galaxy cat who prowls the night sky and collects fallen stars!',
    unlockWord: 'moon',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="luna-body" cx="38%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#C8A2FF"/>
              <stop offset="55%" stop-color="#9B5DE5"/>
              <stop offset="100%" stop-color="#6B3BA8"/>
            </radialGradient>
            <filter id="plush-l">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(100,50,180,0.22)" filter="url(#plush-l)"/>
          <!-- Cat ears (pointy) -->
          <polygon points="${cx-s*0.27},${s*0.26} ${cx-s*0.20},${s*0.06} ${cx-s*0.11},${s*0.23}" fill="#9B5DE5" filter="url(#plush-l)"/>
          <polygon points="${cx-s*0.255},${s*0.24} ${cx-s*0.20},${s*0.10} ${cx-s*0.125},${s*0.22}" fill="#C8A2FF"/>
          <polygon points="${cx+s*0.27},${s*0.26} ${cx+s*0.20},${s*0.06} ${cx+s*0.11},${s*0.23}" fill="#9B5DE5" filter="url(#plush-l)"/>
          <polygon points="${cx+s*0.255},${s*0.24} ${cx+s*0.20},${s*0.10} ${cx+s*0.125},${s*0.22}" fill="#C8A2FF"/>
          <!-- Curled tail -->
          <path d="M${cx+s*0.22} ${s*0.85} Q${cx+s*0.42} ${s*0.75} ${cx+s*0.38} ${s*0.55} Q${cx+s*0.36} ${s*0.38} ${cx+s*0.22} ${s*0.42}" stroke="#6B3BA8" stroke-width="${s*0.10}" fill="none" stroke-linecap="round" filter="url(#plush-l)"/>
          <path d="M${cx+s*0.22} ${s*0.85} Q${cx+s*0.42} ${s*0.75} ${cx+s*0.38} ${s*0.55} Q${cx+s*0.36} ${s*0.38} ${cx+s*0.22} ${s*0.42}" stroke="#9B5DE5" stroke-width="${s*0.055}" fill="none" stroke-linecap="round"/>
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#luna-body)" filter="url(#plush-l)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#luna-body)" filter="url(#plush-l)"/>
          <!-- Star pattern on tummy -->
          ${[[-s*0.08,s*0.64],[0,s*0.70],[s*0.10,s*0.63],[s*0.04,s*0.77],[-s*0.06,s*0.78]].map(([ox,oy]) =>
            `<circle cx="${cx+ox}" cy="${oy}" r="${s*0.016}" fill="#C8A2FF" opacity="0.7"/>`
          ).join('')}
          <!-- Crescent moon on forehead -->
          <path d="M${cx-s*0.06} ${s*0.155} A${s*0.10} ${s*0.10} 0 1 1 ${cx+s*0.06} ${s*0.155} A${s*0.07} ${s*0.07} 0 1 0 ${cx-s*0.06} ${s*0.155}" fill="#FFD700"/>
          <!-- Eyes (gold) -->
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.062}" fill="#FFD700"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.028}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.105}" cy="${s*0.333}" r="${s*0.021}" fill="white"/>
          <circle cx="${cx - s*0.114}" cy="${s*0.366}" r="${s*0.009}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.062}" fill="#FFD700"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.028}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.333}" r="${s*0.021}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.366}" r="${s*0.009}" fill="white"/>
          <!-- Nose -->
          <ellipse cx="${cx}" cy="${s*0.415}" rx="${s*0.022}" ry="${s*0.016}" fill="#C8A2FF"/>
          <!-- Smile -->
          <path d="M${cx-s*0.05} ${s*0.445} Q${cx} ${s*0.466} ${cx+s*0.05} ${s*0.445}" stroke="#C8A2FF" stroke-width="${s*0.014}" fill="none" stroke-linecap="round"/>
          <!-- Cheeks -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.40}" rx="${s*0.048}" ry="${s*0.030}" fill="#C8A2FF" opacity="0.4"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.40}" rx="${s*0.048}" ry="${s*0.030}" fill="#C8A2FF" opacity="0.4"/>
        </svg>`;
    }
  },

  {
    id: 'sunny',
    name: 'Sunny',
    world: 3,
    level: '3-2',
    unlocked: false,
    colors: { primary: '#FEE440', secondary: '#FFB703', accent: '#FF8C00', highlight: '#FFF5B4' },
    description: 'An enthusiastic sunshine dog who greets every day with a happy bark!',
    unlockWord: 'sunny',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sunny-body" cx="38%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#FFF5B4"/>
              <stop offset="55%" stop-color="#FEE440"/>
              <stop offset="100%" stop-color="#FFB703"/>
            </radialGradient>
            <filter id="plush-s">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(200,160,30,0.2)" filter="url(#plush-s)"/>
          <!-- Sun ray ruff around neck -->
          ${Array.from({length:12}, (_,i) => {
            const angle = (i * 30 - 90) * Math.PI / 180;
            const len = i % 2 === 0 ? s*0.14 : s*0.10;
            const x1 = cx + Math.cos(angle) * s*0.28;
            const y1 = s*0.60 + Math.sin(angle) * s*0.22;
            const x2 = cx + Math.cos(angle) * (s*0.28 + len);
            const y2 = s*0.60 + Math.sin(angle) * (s*0.22 + len*0.8);
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${i%2===0?'#FFB703':'#FEE440'}" stroke-width="${s*0.055}" stroke-linecap="round"/>`;
          }).join('')}
          <!-- Dog ears (floppy) -->
          <ellipse cx="${cx - s*0.24}" cy="${s*0.30}" rx="${s*0.10}" ry="${s*0.14}" fill="#FFB703" filter="url(#plush-s)" transform="rotate(-15, ${cx-s*0.24}, ${s*0.30})"/>
          <ellipse cx="${cx + s*0.24}" cy="${s*0.30}" rx="${s*0.10}" ry="${s*0.14}" fill="#FFB703" filter="url(#plush-s)" transform="rotate(15, ${cx+s*0.24}, ${s*0.30})"/>
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#sunny-body)" filter="url(#plush-s)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#sunny-body)" filter="url(#plush-s)"/>
          <!-- Raised paw -->
          <circle cx="${cx + s*0.32}" cy="${s*0.50}" r="${s*0.09}" fill="#FFB703" filter="url(#plush-s)"/>
          <circle cx="${cx + s*0.31}" cy="${s*0.50}" r="${s*0.065}" fill="#FEE440"/>
          <!-- Eyes (orange-brown) -->
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#CC7700"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.35}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.105}" cy="${s*0.328}" r="${s*0.022}" fill="white"/>
          <circle cx="${cx - s*0.114}" cy="${s*0.362}" r="${s*0.010}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.062}" fill="#CC7700"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.35}" r="${s*0.030}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.328}" r="${s*0.022}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.362}" r="${s*0.010}" fill="white"/>
          <!-- Big happy smile with tiny teeth -->
          <path d="M${cx-s*0.09} ${s*0.425} Q${cx} ${s*0.48} ${cx+s*0.09} ${s*0.425}" stroke="#CC7700" stroke-width="${s*0.016}" fill="none" stroke-linecap="round"/>
          <rect x="${cx-s*0.04}" y="${s*0.432}" width="${s*0.03}" height="${s*0.025}" rx="${s*0.005}" fill="white"/>
          <rect x="${cx+s*0.01}" y="${s*0.432}" width="${s*0.03}" height="${s*0.025}" rx="${s*0.005}" fill="white"/>
          <!-- Rosy cheeks -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.395}" rx="${s*0.055}" ry="${s*0.035}" fill="#FFB703" opacity="0.5"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.395}" rx="${s*0.055}" ry="${s*0.035}" fill="#FFB703" opacity="0.5"/>
          <!-- Nose -->
          <ellipse cx="${cx}" cy="${s*0.413}" rx="${s*0.028}" ry="${s*0.020}" fill="#CC7700"/>
        </svg>`;
    }
  },

  {
    id: 'pearl',
    name: 'Pearl',
    world: 3,
    level: '3-3',
    unlocked: false,
    colors: { primary: '#FFFFFF', secondary: '#E8F4FF', accent: '#87CEEB', highlight: '#FFE0F0' },
    description: 'A shimmery white seal with a magical pearl who loves splashing and singing!',
    unlockWord: 'pearl',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pearl-body" cx="38%" cy="28%" r="70%">
              <stop offset="0%" stop-color="white"/>
              <stop offset="40%" stop-color="#F0F8FF"/>
              <stop offset="100%" stop-color="#D8EEF8"/>
            </radialGradient>
            <radialGradient id="pearl-top" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stop-color="#FFE0F0" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="white" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="pearl-gem" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="white"/>
              <stop offset="30%" stop-color="#E0F0FF"/>
              <stop offset="60%" stop-color="#B0D8F8"/>
              <stop offset="100%" stop-color="#87CEEB"/>
            </radialGradient>
            <filter id="plush-pe">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(135,206,235,0.25)" filter="url(#plush-pe)"/>
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#pearl-body)" filter="url(#plush-pe)"/>
          <!-- Pink tint top of body -->
          <ellipse cx="${cx}" cy="${s*0.52}" rx="${s*0.22}" ry="${s*0.14}" fill="url(#pearl-top)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#pearl-body)" filter="url(#plush-pe)"/>
          <!-- Blue bottom tint on head -->
          <ellipse cx="${cx}" cy="${s*0.50}" rx="${s*0.22}" ry="${s*0.12}" fill="#E8F4FF" opacity="0.45"/>
          <!-- Flipper arms raised -->
          <ellipse cx="${cx - s*0.33}" cy="${s*0.52}" rx="${s*0.13}" ry="${s*0.08}" fill="#E8F4FF" filter="url(#plush-pe)" transform="rotate(-40, ${cx-s*0.33}, ${s*0.52})"/>
          <ellipse cx="${cx + s*0.33}" cy="${s*0.52}" rx="${s*0.13}" ry="${s*0.08}" fill="#E8F4FF" filter="url(#plush-pe)" transform="rotate(40, ${cx+s*0.33}, ${s*0.52})"/>
          <!-- Pearl gem on forehead (iridescent) -->
          <circle cx="${cx}" cy="${s*0.148}" r="${s*0.055}" fill="url(#pearl-gem)" stroke="#B0D8F8" stroke-width="1"/>
          <circle cx="${cx - s*0.018}" cy="${s*0.130}" r="${s*0.018}" fill="white" opacity="0.7"/>
          <!-- Eyes (sky blue) -->
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.062}" fill="#87CEEB"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.028}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.105}" cy="${s*0.333}" r="${s*0.021}" fill="white"/>
          <circle cx="${cx - s*0.114}" cy="${s*0.366}" r="${s*0.009}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.082}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.062}" fill="#87CEEB"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.028}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.134}" cy="${s*0.333}" r="${s*0.021}" fill="white"/>
          <circle cx="${cx + s*0.125}" cy="${s*0.366}" r="${s*0.009}" fill="white"/>
          <!-- Cute round nose -->
          <ellipse cx="${cx}" cy="${s*0.415}" rx="${s*0.026}" ry="${s*0.019}" fill="#B0C8D8"/>
          <!-- Smile -->
          <path d="M${cx-s*0.052} ${s*0.445} Q${cx} ${s*0.466} ${cx+s*0.052} ${s*0.445}" stroke="#B0C8D8" stroke-width="${s*0.014}" fill="none" stroke-linecap="round"/>
          <!-- Cheeks (very soft) -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.40}" rx="${s*0.050}" ry="${s*0.032}" fill="#FFB5C8" opacity="0.30"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.40}" rx="${s*0.050}" ry="${s*0.032}" fill="#FFB5C8" opacity="0.30"/>
        </svg>`;
    }
  },

  {
    id: 'fizz',
    name: 'Fizz',
    world: 3,
    level: '3-4',
    unlocked: false,
    colors: { primary: '#FF6B9D', secondary: '#FF4D8D', accent: '#FF85A1', highlight: '#FFB5D0' },
    description: 'The rarest squishee — a sparkly coral axolotl who brings rainbows wherever she swims!',
    unlockWord: 'rainbow',
    svgFn: (size = 200, state = 'idle') => {
      const s = size, cx = s / 2;
      return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="fizz-body" cx="38%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#FFB5D0"/>
              <stop offset="50%" stop-color="#FF6B9D"/>
              <stop offset="100%" stop-color="#FF4D8D"/>
            </radialGradient>
            <linearGradient id="fizz-gill1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FF4D8D"/>
              <stop offset="100%" stop-color="#FFB5D0"/>
            </linearGradient>
            <linearGradient id="fizz-gill2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FF6B9D"/>
              <stop offset="100%" stop-color="#FFC8DE"/>
            </linearGradient>
            <filter id="plush-f">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <filter id="fizz-shimmer">
              <feGaussianBlur stdDeviation="1.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <ellipse cx="${cx}" cy="${s*0.93}" rx="${s*0.27}" ry="${s*0.05}" fill="rgba(220,80,130,0.22)" filter="url(#plush-f)"/>
          <!-- Tail fin -->
          <path d="M${cx+s*0.15} ${s*0.82} Q${cx+s*0.40} ${s*0.80} ${cx+s*0.42} ${s*0.65} Q${cx+s*0.40} ${s*0.55} ${cx+s*0.28} ${s*0.60}" fill="#FF6B9D" filter="url(#plush-f)" opacity="0.85"/>
          <!-- Fin along back -->
          <path d="M${cx-s*0.12} ${s*0.15} Q${cx} ${s*0.08} ${cx+s*0.12} ${s*0.15}" stroke="#FF85A1" stroke-width="${s*0.04}" fill="none" stroke-linecap="round"/>
          <!-- Left gill fronds (3, feathery) -->
          ${[
            {ox: -s*0.32, oy: s*0.30, rot: -25},
            {ox: -s*0.34, oy: s*0.22, rot: -40},
            {ox: -s*0.30, oy: s*0.14, rot: -55},
          ].map(({ox, oy, rot}) => `
            <ellipse cx="${cx+ox}" cy="${oy}" rx="${s*0.045}" ry="${s*0.10}" fill="url(#fizz-gill1)" filter="url(#plush-f)" transform="rotate(${rot}, ${cx+ox}, ${oy})" opacity="0.9"/>
            <ellipse cx="${cx+ox}" cy="${oy}" rx="${s*0.020}" ry="${s*0.07}" fill="url(#fizz-gill2)" transform="rotate(${rot}, ${cx+ox}, ${oy})" opacity="0.8"/>
          `).join('')}
          <!-- Right gill fronds (3, feathery) -->
          ${[
            {ox: s*0.32, oy: s*0.30, rot: 25},
            {ox: s*0.34, oy: s*0.22, rot: 40},
            {ox: s*0.30, oy: s*0.14, rot: 55},
          ].map(({ox, oy, rot}) => `
            <ellipse cx="${cx+ox}" cy="${oy}" rx="${s*0.045}" ry="${s*0.10}" fill="url(#fizz-gill1)" filter="url(#plush-f)" transform="rotate(${rot}, ${cx+ox}, ${oy})" opacity="0.9"/>
            <ellipse cx="${cx+ox}" cy="${oy}" rx="${s*0.020}" ry="${s*0.07}" fill="url(#fizz-gill2)" transform="rotate(${rot}, ${cx+ox}, ${oy})" opacity="0.8"/>
          `).join('')}
          <!-- Body -->
          <ellipse cx="${cx}" cy="${s*0.64}" rx="${s*0.28}" ry="${s*0.25}" fill="url(#fizz-body)" filter="url(#plush-f)"/>
          <!-- Head -->
          <circle cx="${cx}" cy="${s*0.38}" r="${s*0.30}" fill="url(#fizz-body)" filter="url(#plush-f)"/>
          <!-- Sparkle shimmer body overlay -->
          <ellipse cx="${cx-s*0.06}" cy="${s*0.55}" rx="${s*0.12}" ry="${s*0.08}" fill="white" opacity="0.15" filter="url(#fizz-shimmer)"/>
          <ellipse cx="${cx+s*0.08}" cy="${s*0.68}" rx="${s*0.10}" ry="${s*0.07}" fill="white" opacity="0.12" filter="url(#fizz-shimmer)"/>
          <!-- Sparkle dots on body -->
          ${[[cx-s*0.05,s*0.62],[cx+s*0.10,s*0.66],[cx,s*0.73],[cx-s*0.12,s*0.70],[cx+s*0.04,s*0.58]].map(([x,y]) =>
            `<circle cx="${x}" cy="${y}" r="${s*0.012}" fill="white" opacity="0.55"/>`
          ).join('')}
          <!-- Eyes (sparkly, extra catchlights) -->
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.088}" fill="white"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.068}" fill="#FF85A1"/>
          <circle cx="${cx - s*0.12}" cy="${s*0.355}" r="${s*0.032}" fill="#1a1a2e"/>
          <circle cx="${cx - s*0.104}" cy="${s*0.330}" r="${s*0.023}" fill="white"/>
          <circle cx="${cx - s*0.134}" cy="${s*0.336}" r="${s*0.012}" fill="white" opacity="0.8"/>
          <circle cx="${cx - s*0.113}" cy="${s*0.366}" r="${s*0.010}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.088}" fill="white"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.068}" fill="#FF85A1"/>
          <circle cx="${cx + s*0.12}" cy="${s*0.355}" r="${s*0.032}" fill="#1a1a2e"/>
          <circle cx="${cx + s*0.136}" cy="${s*0.330}" r="${s*0.023}" fill="white"/>
          <circle cx="${cx + s*0.106}" cy="${s*0.336}" r="${s*0.012}" fill="white" opacity="0.8"/>
          <circle cx="${cx + s*0.127}" cy="${s*0.366}" r="${s*0.010}" fill="white"/>
          <!-- Small u smile -->
          <path d="M${cx-s*0.050} ${s*0.445} Q${cx} ${s*0.462} ${cx+s*0.050} ${s*0.445}" stroke="#FF4D8D" stroke-width="${s*0.016}" fill="none" stroke-linecap="round"/>
          <!-- Nose -->
          <ellipse cx="${cx}" cy="${s*0.416}" rx="${s*0.022}" ry="${s*0.016}" fill="#FF4D8D" opacity="0.8"/>
          <!-- Cheeks (extra bright) -->
          <ellipse cx="${cx - s*0.22}" cy="${s*0.40}" rx="${s*0.055}" ry="${s*0.035}" fill="#FFB5D0" opacity="0.55"/>
          <ellipse cx="${cx + s*0.22}" cy="${s*0.40}" rx="${s*0.055}" ry="${s*0.035}" fill="#FFB5D0" opacity="0.55"/>
          <!-- Extra sparkles around Fizz -->
          <text x="${cx-s*0.38}" y="${s*0.46}" font-size="${s*0.08}" fill="#FFD700" opacity="0.9">✦</text>
          <text x="${cx+s*0.28}" y="${s*0.44}" font-size="${s*0.07}" fill="#FFD700" opacity="0.8">✦</text>
          <text x="${cx-s*0.10}" y="${s*0.88}" font-size="${s*0.06}" fill="#FFD700" opacity="0.7">✦</text>
        </svg>`;
    }
  }
];

// Helper: get character by id
function getCharacter(id) {
  return CHARACTERS.find(c => c.id === id);
}

function getWorldCharacters(worldNum) {
  return CHARACTERS.filter(c => c.world === worldNum);
}

// Returns true only once images are confirmed loaded
function imagesReady() {
  return typeof CharacterImages !== 'undefined' && CharacterImages.get('boba') != null;
}

function renderCharacter(id, size = 200, state = 'idle') {
  const char = getCharacter(id);
  if (!char) return '';
  if (imagesReady()) {
    const src = CharacterImages.get(id);
    if (src) {
      return `<div class="char-img-wrap" style="width:${size}px;height:${size}px">` +
        `<img src="${src}" class="char-img" alt="${char.name}" draggable="false"/>` +
        `</div>`;
    }
  }
  return char.svgFn ? char.svgFn(size, state) : '';
}

function renderCharacterSilhouette(id, size = 100) {
  const char = getCharacter(id);
  if (!char) return '';
  if (imagesReady()) {
    const src = CharacterImages.get(id);
    if (src) {
      return `<div class="char-img-wrap char-img-silhouette" style="width:${size}px;height:${size}px">` +
        `<img src="${src}" class="char-img" alt="???" draggable="false"/>` +
        `</div>`;
    }
  }
  return `<div style="width:${size}px;height:${size}px;filter:brightness(0) saturate(0) opacity(0.35)">` +
    (char.svgFn ? char.svgFn(size) : '') + `</div>`;
}
