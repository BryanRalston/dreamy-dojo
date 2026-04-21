// audio.js — Web Audio API sound synthesis for Dreamy Dojo
// Every sound crafted to be delightful for a 7-year-old
// Pure synthesis only — no external files (supports file:// protocol)

class AudioSystem {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.enabled = true;

    // Music state
    this._musicGain = null;        // dedicated gain for music bus
    this._musicOscs = [];          // oscillators currently playing in music
    this._musicLoopTimer = null;   // setTimeout handle for next loop
    this._musicRunning = false;
    this._currentMusic = null;     // 'home' | 'playing' | 'cottage' | null

    // Legacy compat aliases
    this._ambientRunning = false;
    this.ambientGain = null;
    this._ambientOscs = null;
  }

  // ─── Init / Resume ────────────────────────────────────────────────────────────

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Music sub-bus (kept quieter than SFX)
      this._musicGain = this.ctx.createGain();
      this._musicGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this._musicGain.connect(this.masterGain);
    } catch (e) {
      console.warn('AudioContext unavailable:', e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      try { this.ctx.resume(); } catch (e) {}
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(
        this.enabled ? 0.35 : 0,
        this.ctx.currentTime, 0.1
      );
    }
    if (!this.enabled) this.stopMusic();
    return this.enabled;
  }

  // ─── Private helpers ─────────────────────────────────────────────────────────

  // Lightweight impulse reverb
  _createReverb() {
    if (!this.ctx) return null;
    try {
      const convolver = this.ctx.createConvolver();
      const rate = this.ctx.sampleRate;
      const length = rate * 0.8;
      const impulse = this.ctx.createBuffer(2, length, rate);
      for (let ch = 0; ch < 2; ch++) {
        const data = impulse.getChannelData(ch);
        for (let i = 0; i < length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.5);
        }
      }
      convolver.buffer = impulse;
      return convolver;
    } catch (e) { return null; }
  }

  // Play a tone with full ADSR envelope
  _playTone(freq, type, startTime, duration, gainPeak, vibrato = false) {
    if (!this.ctx || !this.enabled) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);

      if (vibrato) {
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(5.5, startTime);
        lfoGain.gain.setValueAtTime(freq * 0.012, startTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(startTime);
        lfo.stop(startTime + duration);
      }

      // ADSR
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(gainPeak, startTime + 0.005);
      gain.gain.setTargetAtTime(gainPeak * 0.7, startTime + 0.005, 0.04);
      gain.gain.setTargetAtTime(0, startTime + duration * 0.6, duration * 0.18);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.1);
    } catch (e) {}
  }

  // Play a tone routed through the music bus (for melodic bg music)
  _playMusicTone(freq, type, startTime, duration, gainPeak) {
    if (!this.ctx || !this.enabled || !this._musicGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);

      // Soft music-box envelope — quick attack, gentle decay
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(gainPeak, startTime + 0.008);
      gain.gain.setTargetAtTime(gainPeak * 0.6, startTime + 0.012, 0.05);
      gain.gain.setTargetAtTime(0, startTime + duration * 0.5, duration * 0.3);

      osc.connect(gain);
      gain.connect(this._musicGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.15);
      this._musicOscs.push(osc);
    } catch (e) {}
  }

  // C major pentatonic notes (Hz): C D E G A, two octaves
  _pentatonicMajorNote(index) {
    const notes = [
      261.63, 293.66, 329.63, 392.00, 440.00,  // C4 D4 E4 G4 A4
      523.25, 587.33, 659.25, 783.99, 880.00,   // C5 D5 E5 G5 A5
      1046.5, 1174.66, 1318.51,                 // C6 D6 E6
    ];
    return notes[index % notes.length];
  }

  // Minor pentatonic for typing tones (C D Eb G Ab)
  _pentatonicNote(index) {
    const notes = [523.25, 587.33, 622.25, 783.99, 830.61, 1046.5, 1174.66, 1244.51];
    return notes[index % notes.length];
  }

  // ─── Background Music System ─────────────────────────────────────────────────

  // Stop and clean up all music
  stopMusic() {
    this._musicRunning = false;
    this._currentMusic = null;
    if (this._musicLoopTimer) {
      clearTimeout(this._musicLoopTimer);
      this._musicLoopTimer = null;
    }
    // Fade music gain to silence quickly
    if (this._musicGain && this.ctx) {
      try {
        this._musicGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.3);
        // Restore after fade so music can start again later
        setTimeout(() => {
          if (this._musicGain && this.ctx && !this._musicRunning) {
            try { this._musicGain.gain.setValueAtTime(0.08, this.ctx.currentTime); } catch(e) {}
          }
        }, 1200);
      } catch (e) {}
    }
    // Kill oscillators
    this._musicOscs.forEach(osc => { try { osc.stop(); } catch(e) {} });
    this._musicOscs = [];

    // Legacy compat
    this._ambientRunning = false;
    if (this.ambientGain && this.ctx) {
      try { this.ambientGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.3); } catch(e) {}
    }
    if (this._ambientOscs) {
      this._ambientOscs.forEach(osc => { try { osc.stop(this.ctx.currentTime + 0.5); } catch(e) {} });
      this._ambientOscs = null;
    }
  }

  // ── HOME MUSIC: Gentle, welcoming, 80 BPM ────────────────────────────────────
  // 8-bar phrase, C major pentatonic, music-box / glockenspiel feel
  startHomeMusic() {
    this.init();
    if (!this.ctx || !this.enabled) return;
    if (this._currentMusic === 'home' && this._musicRunning) return;
    this.stopMusic();
    this._currentMusic = 'home';
    this._musicRunning = true;
    if (this._musicGain) {
      try { this._musicGain.gain.setValueAtTime(0.08, this.ctx.currentTime); } catch(e) {}
    }
    this._scheduleHomeLoop();
  }

  _scheduleHomeLoop() {
    if (!this._musicRunning || this._currentMusic !== 'home') return;
    try {
      this.resume();
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const beat = 60 / 80; // 0.75s per beat at 80 BPM

      // 8-bar melody (each note = one beat, rests coded as 0)
      // C major pentatonic: C4=0, D4=1, E4=2, G4=3, A4=4, C5=5, D5=6, E5=7, G5=8, A5=9
      const seq = [
        // Bar 1-2: gentle opening, mostly middle register
        { n: 5, d: 1.0 }, { n: 6, d: 0.5 }, { n: 7, d: 0.5 }, { n: 8, d: 1.5 }, { n: 0, d: 0.5 },
        // Bar 3-4: climb up
        { n: 5, d: 0.5 }, { n: 6, d: 0.5 }, { n: 7, d: 0.5 }, { n: 9, d: 1.0 }, { n: 8, d: 1.0 },
        // Bar 5-6: playful skip
        { n: 7, d: 0.5 }, { n: 5, d: 0.5 }, { n: 6, d: 1.0 }, { n: 7, d: 0.5 }, { n: 5, d: 0.5 }, { n: 3, d: 1.0 },
        // Bar 7-8: resolve gently home
        { n: 4, d: 0.5 }, { n: 3, d: 0.5 }, { n: 2, d: 0.5 }, { n: 1, d: 0.5 }, { n: 0, d: 2.0 },
      ];

      // Bass drone: soft C2/G2 foundation
      const bassDrone = [{ f: 65.41, d: 0.5 }, { f: 98.00, d: 0.5 }]; // C2 G2
      let bassTime = now;
      const totalBars = 8;
      const phraseLength = seq.reduce((s, n) => s + n.d, 0) * beat;
      for (let b = 0; b < totalBars * 4; b++) {
        const bd = bassDrone[b % 2];
        const bg = this.ctx.createGain();
        const bo = this.ctx.createOscillator();
        bo.type = 'sine';
        bo.frequency.setValueAtTime(bd.f, bassTime);
        bg.gain.setValueAtTime(0, bassTime);
        bg.gain.linearRampToValueAtTime(0.18, bassTime + 0.04);
        bg.gain.setTargetAtTime(0, bassTime + bd.d * beat * 0.6, bd.d * beat * 0.2);
        bo.connect(bg);
        bg.connect(this._musicGain);
        bo.start(bassTime);
        bo.stop(bassTime + bd.d * beat + 0.1);
        this._musicOscs.push(bo);
        bassTime += bd.d * beat;
      }

      // Melody
      let t = now;
      seq.forEach(({ n, d }) => {
        if (n > 0 || n === 0) {
          const freq = this._pentatonicMajorNote(n);
          this._playMusicTone(freq, 'sine', t, d * beat * 0.75, 0.55);
          // Faint harmonic shimmer
          this._playMusicTone(freq * 2, 'sine', t, d * beat * 0.4, 0.12);
        }
        t += d * beat;
      });

      // Schedule next loop just before phrase ends
      const loopDelay = (phraseLength - 0.15) * 1000;
      this._musicLoopTimer = setTimeout(() => this._scheduleHomeLoop(), loopDelay);
    } catch (e) {
      console.warn('Home music error:', e);
    }
  }

  // ── PLAYING MUSIC: Soft rhythmic pad, doesn't clash with typing tones ────────
  // Gentle quarter-note pulse in C, stays low-pitched and unobtrusive
  startPlayingMusic() {
    this.init();
    if (!this.ctx || !this.enabled) return;
    if (this._currentMusic === 'playing' && this._musicRunning) return;
    this.stopMusic();
    this._currentMusic = 'playing';
    this._musicRunning = true;
    if (this._musicGain) {
      try { this._musicGain.gain.setValueAtTime(0.06, this.ctx.currentTime); } catch(e) {}
    }
    this._schedulePlayingLoop();
  }

  _schedulePlayingLoop() {
    if (!this._musicRunning || this._currentMusic !== 'playing') return;
    try {
      this.resume();
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const beat = 60 / 90; // 0.667s at 90 BPM

      // Soft low pad: C2 + G2 alternating, 8 beats
      const padPattern = [
        { f: 65.41, d: 2 }, // C2, 2 beats
        { f: 98.00, d: 2 }, // G2
        { f: 65.41, d: 2 }, // C2
        { f: 73.42, d: 2 }, // D2
      ];
      let pt = now;
      padPattern.forEach(({ f, d }) => {
        const pg = this.ctx.createGain();
        const po = this.ctx.createOscillator();
        po.type = 'sine';
        po.frequency.setValueAtTime(f, pt);
        pg.gain.setValueAtTime(0, pt);
        pg.gain.linearRampToValueAtTime(0.22, pt + 0.12);
        pg.gain.setTargetAtTime(0, pt + d * beat * 0.7, d * beat * 0.2);
        po.connect(pg);
        pg.connect(this._musicGain);
        po.start(pt);
        po.stop(pt + d * beat + 0.2);
        this._musicOscs.push(po);
        pt += d * beat;
      });

      const phraseLength = padPattern.reduce((s, n) => s + n.d, 0) * beat;
      const loopDelay = (phraseLength - 0.1) * 1000;
      this._musicLoopTimer = setTimeout(() => this._schedulePlayingLoop(), loopDelay);
    } catch (e) {
      console.warn('Playing music error:', e);
    }
  }

  // ── COTTAGE MUSIC: Cozy, warm, slower (76 BPM) ───────────────────────────────
  startCottageMusic() {
    this.init();
    if (!this.ctx || !this.enabled) return;
    if (this._currentMusic === 'cottage' && this._musicRunning) return;
    this.stopMusic();
    this._currentMusic = 'cottage';
    this._musicRunning = true;
    if (this._musicGain) {
      try { this._musicGain.gain.setValueAtTime(0.08, this.ctx.currentTime); } catch(e) {}
    }
    this._scheduleCottageLoop();
  }

  _scheduleCottageLoop() {
    if (!this._musicRunning || this._currentMusic !== 'cottage') return;
    try {
      this.resume();
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const beat = 60 / 76; // ~0.789s per beat

      // Warm cozy melody — lower register, gentle, like a music box lullaby
      const seq = [
        // Phrase A
        { n: 5, d: 1.5 }, { n: 7, d: 0.5 }, { n: 6, d: 1.0 }, { n: 5, d: 1.0 },
        // Phrase B
        { n: 3, d: 1.0 }, { n: 4, d: 1.0 }, { n: 5, d: 2.0 },
        // Phrase C: gentle descend
        { n: 7, d: 0.5 }, { n: 6, d: 0.5 }, { n: 5, d: 1.0 }, { n: 3, d: 1.5 }, { n: 2, d: 0.5 },
        // Phrase D: resolve
        { n: 1, d: 0.5 }, { n: 2, d: 0.5 }, { n: 0, d: 1.0 }, { n: 0, d: 2.0 },
      ];

      // Warm pad: triangle waves layered for coziness
      const padNotes = [130.81, 196.00, 261.63]; // C3 G3 C4
      padNotes.forEach((f, pi) => {
        const phraseLen = seq.reduce((s, n) => s + n.d, 0) * beat;
        const pg = this.ctx.createGain();
        const po = this.ctx.createOscillator();
        po.type = 'triangle';
        po.frequency.setValueAtTime(f, now);
        pg.gain.setValueAtTime(0, now);
        pg.gain.linearRampToValueAtTime(0.12 - pi * 0.03, now + 1.5);
        pg.gain.setTargetAtTime(0, now + phraseLen - 2, 1.0);
        po.connect(pg);
        pg.connect(this._musicGain);
        po.start(now);
        po.stop(now + phraseLen + 0.5);
        this._musicOscs.push(po);
      });

      // Melody (triangle for warmth, not tinkling)
      let t = now;
      seq.forEach(({ n, d }) => {
        const freq = this._pentatonicMajorNote(n);
        this._playMusicTone(freq, 'triangle', t, d * beat * 0.8, 0.5);
        t += d * beat;
      });

      const phraseLength = seq.reduce((s, n) => s + n.d, 0) * beat;
      const loopDelay = (phraseLength - 0.15) * 1000;
      this._musicLoopTimer = setTimeout(() => this._scheduleCottageLoop(), loopDelay);
    } catch (e) {
      console.warn('Cottage music error:', e);
    }
  }

  // ─── Legacy Ambient Compat ───────────────────────────────────────────────────
  // Keep old API working — startAmbient maps to startPlayingMusic
  startAmbient() {
    this.startPlayingMusic();
    this._ambientRunning = true;
  }

  stopAmbient() {
    this.stopMusic();
    this._ambientRunning = false;
  }

  // ─── Sound Effects ───────────────────────────────────────────────────────────

  // Correct key: squishy pentatonic pop with pitch envelope
  playCorrectKey(letterIndex) {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      const targetFreq = this._pentatonicNote(letterIndex);
      const sharpFreq = targetFreq * 1.05; // start 5% sharp → settle

      // Main squishy tone with pitch envelope
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(sharpFreq, now);
      osc.frequency.linearRampToValueAtTime(targetFreq, now + 0.03); // settle in 30ms
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.38, now + 0.006);
      gain.gain.setTargetAtTime(0.26, now + 0.01, 0.04);
      gain.gain.setTargetAtTime(0, now + 0.13, 0.07);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.35);

      // Gentle harmonic (octave above, softer)
      this._playTone(targetFreq * 2, 'sine', now, 0.15, 0.08, false);

      // Reverb shimmer
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      const reverb = this._createReverb();
      if (reverb) {
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(targetFreq * 1.5, now);
        gain2.gain.setValueAtTime(0.06, now);
        gain2.gain.setTargetAtTime(0, now + 0.05, 0.08);
        osc2.connect(gain2);
        gain2.connect(reverb);
        reverb.connect(this.masterGain);
        osc2.start(now);
        osc2.stop(now + 0.4);
      }
    } catch (e) {}
  }

  // Wrong key: gentle soft thud — white noise burst through bandpass (not harsh)
  playWrongKey() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;

      // Bandpass-filtered noise burst
      const bufferSize = this.ctx.sampleRate * 0.08; // 80ms of noise
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(200, now);
      bandpass.Q.setValueAtTime(1.5, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.10, now + 0.008);
      gain.gain.setTargetAtTime(0, now + 0.025, 0.025);

      noise.connect(bandpass);
      bandpass.connect(gain);
      gain.connect(this.masterGain);
      noise.start(now);
    } catch (e) {}
  }

  // Word complete: rising arpeggio + fairy dust sparkle cascade
  playWordComplete() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C (major arp)
      const reverb = this._createReverb();

      notes.forEach((freq, i) => {
        const t = now + i * 0.12;
        this._playTone(freq, 'sine', t, 0.35, 0.30, true);
        this._playTone(freq * 2.756, 'sine', t, 0.20, 0.06); // bell overtone
      });

      // Original shimmer
      [2093, 2349, 2637].forEach((freq, i) => {
        this._playTone(freq, 'sine', now + 0.45 + i * 0.08, 0.18, 0.08);
      });

      if (reverb) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.frequency.setValueAtTime(1046.5, now + 0.36);
        osc.type = 'sine';
        g.gain.setValueAtTime(0.12, now + 0.36);
        g.gain.setTargetAtTime(0, now + 0.5, 0.15);
        osc.connect(g);
        g.connect(reverb);
        reverb.connect(this.masterGain);
        osc.start(now + 0.36);
        osc.stop(now + 1.2);
      }

      // Fairy dust sparkle cascade — 6 high notes descending (added)
      const sparkle = [2637, 2349, 2093, 1760, 1567, 1319];
      sparkle.forEach((freq, i) => {
        const t = now + 0.65 + i * 0.06;
        this._playTone(freq, 'sine', t, 0.10, 0.07, false);
      });
    } catch (e) {}
  }

  // Level complete: drum thump intro + ascending fanfare
  playLevelComplete() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;

      // Triumphant drum-like thump: sine sweep 200→50Hz over 0.15s
      const drum = this.ctx.createOscillator();
      const drumGain = this.ctx.createGain();
      drum.type = 'sine';
      drum.frequency.setValueAtTime(200, now);
      drum.frequency.exponentialRampToValueAtTime(50, now + 0.15);
      drumGain.gain.setValueAtTime(0, now);
      drumGain.gain.linearRampToValueAtTime(0.30, now + 0.006);
      drumGain.gain.setTargetAtTime(0, now + 0.04, 0.05);
      drum.connect(drumGain);
      drumGain.connect(this.masterGain);
      drum.start(now);
      drum.stop(now + 0.3);

      // Fanfare starts after brief thump offset
      const fanfareStart = now + 0.08;
      const melody = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5];
      melody.forEach((freq, i) => {
        const t = fanfareStart + i * 0.11;
        this._playTone(freq, 'sine', t, 0.28, 0.28, true);
        if (i > 4) {
          this._playTone(freq * 1.5, 'sine', t, 0.22, 0.10);
        }
      });

      // Final chord
      const chordStart = fanfareStart + 0.95;
      [523.25, 659.25, 783.99, 1046.5].forEach(freq => {
        this._playTone(freq, 'sine', chordStart, 0.8, 0.22, true);
      });
      [2093, 2637, 3136].forEach((freq, i) => {
        this._playTone(freq, 'sine', chordStart + i * 0.07, 0.25, 0.07);
      });
    } catch (e) {}
  }

  // Unlock: warm 3-note chime — magical discovery (unchanged, it's good)
  playUnlock() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      const reverb = this._createReverb();

      const unlockNotes = [
        { freq: 659.25, t: 0,    dur: 0.9 },
        { freq: 880.00, t: 0.22, dur: 0.8 },
        { freq: 1174.66, t: 0.48, dur: 1.2 },
      ];

      unlockNotes.forEach(({freq, t, dur}) => {
        const st = now + t;
        this._playTone(freq, 'sine',     st, dur,       0.32, true);
        this._playTone(freq, 'triangle', st, dur * 0.7, 0.12);
        this._playTone(freq * 2.756, 'sine', st, dur * 0.4, 0.08);

        if (reverb) {
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, st);
          g.gain.setValueAtTime(0.10, st);
          g.gain.setTargetAtTime(0, st + 0.2, 0.25);
          osc.connect(g);
          g.connect(reverb);
          reverb.connect(this.masterGain);
          osc.start(st);
          osc.stop(st + dur + 0.5);
        }
      });

      // Final sparkle run
      [1396.91, 1661.22, 2093.00, 2637.02].forEach((freq, i) => {
        this._playTone(freq, 'sine', now + 0.75 + i * 0.08, 0.20, 0.07);
      });
    } catch (e) {}
  }

  // ─── New Sound Effects ───────────────────────────────────────────────────────

  // Streak milestone — level 1 (3 streak), 2 (6 streak), 3 (9+ streak)
  playStreak(level) {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      if (level === 1) {
        // Two quick rising tones — uplifting
        this._playTone(880,    'sine', now,        0.12, 0.28);
        this._playTone(1174.66,'sine', now + 0.11, 0.18, 0.32);
      } else if (level === 2) {
        // Three quick chimes + shimmer
        [880, 1046.5, 1318.51].forEach((f, i) => {
          this._playTone(f, 'sine', now + i * 0.10, 0.18, 0.28);
        });
        // Shimmer burst
        [2093, 2349, 2637].forEach((f, i) => {
          this._playTone(f, 'sine', now + 0.32 + i * 0.06, 0.12, 0.09);
        });
      } else {
        // Level 3: full sparkle fanfare (mini unlock feel)
        [659.25, 783.99, 880, 1046.5, 1174.66].forEach((f, i) => {
          this._playTone(f, 'sine', now + i * 0.09, 0.22, 0.28, i > 2);
        });
        [2093, 2349, 2637, 3136].forEach((f, i) => {
          this._playTone(f, 'sine', now + 0.5 + i * 0.07, 0.15, 0.08);
        });
      }
    } catch (e) {}
  }

  // Coin collect: bright clean ding
  playCoinCollect() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1567, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.30, now + 0.005);  // clean attack
      gain.gain.setTargetAtTime(0, now + 0.025, 0.030);       // fast decay
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {}
  }

  // Place item in cottage: soft thwump — plush toy landing
  playPlaceItem() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      // Sine sweep 400→200Hz over 100ms
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.10);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.008);
      gain.gain.setTargetAtTime(0, now + 0.04, 0.04);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.22);

      // Tiny reverb tail for the "soft" feel
      const reverb = this._createReverb();
      if (reverb) {
        const osc2 = this.ctx.createOscillator();
        const g2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(300, now);
        g2.gain.setValueAtTime(0.06, now);
        g2.gain.setTargetAtTime(0, now + 0.03, 0.06);
        osc2.connect(g2);
        g2.connect(reverb);
        reverb.connect(this.masterGain);
        osc2.start(now);
        osc2.stop(now + 0.4);
      }
    } catch (e) {}
  }

  // Button click: tiny "tck" UI feedback
  playButtonClick() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.14, now + 0.003);
      gain.gain.setTargetAtTime(0, now + 0.008, 0.012);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  // ─── Existing utility SFX (unchanged signatures) ─────────────────────────────

  // Hint sound: gentle chime
  playHint() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      this._playTone(880, 'sine', now, 0.3, 0.15, true);
      this._playTone(1108.73, 'sine', now + 0.15, 0.25, 0.10);
    } catch (e) {}
  }

  // Heart loss: soft descending sad tones
  playHeartLoss() {
    this.init();
    this.resume();
    if (!this.ctx || !this.enabled) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 466.16, 415.30].forEach((freq, i) => {
        this._playTone(freq, 'sine', now + i * 0.14, 0.28, 0.18);
      });
    } catch (e) {}
  }
}

// Global instance
const audio = new AudioSystem();
