// worlds.js — World and level definitions for Dreamy Dojo

// ─── Math Worlds ─────────────────────────────────────────────────────────────
const MATH_WORLDS = [
  {
    id: 'm1',
    name: 'Addition Adventure',
    emoji: '➕',
    theme: 'math-add',
    colors: {
      bg1: '#1a0e00', bg2: '#2e1a00',
      accent1: '#FFB347', accent2: '#FFD700', accent3: '#FFA500',
      card: 'rgba(255,179,71,0.15)',
      border: 'rgba(255,179,71,0.4)',
    },
    description: 'Add numbers together to help your friends!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m1-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0e00"/>
      <stop offset="100%" stop-color="#2e1a00"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m1-sky)"/>
  <g fill="rgba(255,215,0,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="80" y="200">+</text><text x="300" y="350">+</text>
    <text x="600" y="150">+</text><text x="900" y="300">+</text>
    <text x="1100" y="200">+</text><text x="1200" y="500">+</text>
    <text x="200" y="600">+</text><text x="750" y="650">+</text>
  </g>
</svg>`,
    levels: [
      { id: 'm1-1', name: 'Easy Adds', character: 'boba', unlocks: null, mathType: 'add', maxNum: 5, isBoss: false },
      { id: 'm1-2', name: 'More Adding', character: 'mochi', unlocks: null, mathType: 'add', maxNum: 10, isBoss: false },
      { id: 'm1-3', name: 'Add to 15', character: 'coco', unlocks: null, mathType: 'add', maxNum: 15, isBoss: false },
      { id: 'm1-4', name: 'Add to 20', character: 'nori', unlocks: null, mathType: 'add', maxNum: 20, isBoss: false },
      { id: 'm1-5', name: 'Addition Boss!', character: 'zara', unlocks: null, mathType: 'add', maxNum: 25, isBoss: true },
    ]
  },
  {
    id: 'm2',
    name: 'Subtraction Safari',
    emoji: '➖',
    theme: 'math-sub',
    colors: {
      bg1: '#0a1a00', bg2: '#162800',
      accent1: '#7BC67E', accent2: '#FFD700', accent3: '#A8E6A3',
      card: 'rgba(123,198,126,0.15)',
      border: 'rgba(123,198,126,0.4)',
    },
    description: 'Take away numbers on a wild safari!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m2-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0a1a00"/>
      <stop offset="100%" stop-color="#162800"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m2-sky)"/>
  <g fill="rgba(123,198,126,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="100" y="200">−</text><text x="350" y="380">−</text>
    <text x="650" y="160">−</text><text x="950" y="320">−</text>
    <text x="1100" y="220">−</text><text x="220" y="620">−</text>
    <text x="780" y="700">−</text><text x="1180" y="520">−</text>
  </g>
</svg>`,
    levels: [
      { id: 'm2-1', name: 'Take Away', character: 'puffy', unlocks: null, mathType: 'sub', maxNum: 10, isBoss: false },
      { id: 'm2-2', name: 'Subtract!', character: 'luna', unlocks: null, mathType: 'sub', maxNum: 15, isBoss: false },
      { id: 'm2-3', name: 'Minus Magic', character: 'sunny', unlocks: null, mathType: 'sub', maxNum: 20, isBoss: false },
      { id: 'm2-4', name: 'Take More!', character: 'pearl', unlocks: null, mathType: 'sub', maxNum: 25, isBoss: false },
      { id: 'm2-5', name: 'Safari Boss!', character: 'fizz', unlocks: null, mathType: 'sub', maxNum: 30, isBoss: true },
    ]
  },
  {
    id: 'm3',
    name: 'Mixed Math',
    emoji: '🔀',
    theme: 'math-mix',
    colors: {
      bg1: '#0d0a1a', bg2: '#1a1030',
      accent1: '#C77DFF', accent2: '#FF85A1', accent3: '#9B5DE5',
      card: 'rgba(199,125,255,0.15)',
      border: 'rgba(199,125,255,0.4)',
    },
    description: 'Mix adding and subtracting together!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m3-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0d0a1a"/>
      <stop offset="100%" stop-color="#1a1030"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m3-sky)"/>
  <g fill="rgba(199,125,255,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="80" y="200">+</text><text x="300" y="350">−</text>
    <text x="600" y="150">+</text><text x="900" y="300">−</text>
    <text x="1100" y="200">+</text><text x="200" y="600">−</text>
    <text x="750" y="650">+</text><text x="1180" y="500">−</text>
  </g>
</svg>`,
    levels: [
      { id: 'm3-1', name: 'Mix It Up', character: 'boba', unlocks: null, mathType: 'mix', maxNum: 15, isBoss: false },
      { id: 'm3-2', name: 'Add or Take?', character: 'mochi', unlocks: null, mathType: 'mix', maxNum: 20, isBoss: false },
      { id: 'm3-3', name: 'Math Mixer', character: 'coco', unlocks: null, mathType: 'mix', maxNum: 25, isBoss: false },
      { id: 'm3-4', name: 'Super Mixer', character: 'nori', unlocks: null, mathType: 'mix', maxNum: 30, isBoss: false },
      { id: 'm3-5', name: 'Mix Boss!', character: 'zara', unlocks: null, mathType: 'mix', maxNum: 40, isBoss: true },
    ]
  },
  {
    id: 'm4',
    name: 'Times Tables',
    emoji: '✖️',
    theme: 'math-times',
    colors: {
      bg1: '#1a0800', bg2: '#2e1200',
      accent1: '#FF8C42', accent2: '#FFD166', accent3: '#FFBA08',
      card: 'rgba(255,140,66,0.15)',
      border: 'rgba(255,140,66,0.4)',
    },
    description: 'Learn your 2s and 5s times tables!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m4-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0800"/>
      <stop offset="100%" stop-color="#2e1200"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m4-sky)"/>
  <g fill="rgba(255,209,102,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="80" y="200">×</text><text x="320" y="370">×</text>
    <text x="620" y="160">×</text><text x="920" y="310">×</text>
    <text x="1110" y="220">×</text><text x="210" y="630">×</text>
    <text x="770" y="670">×</text><text x="1190" y="510">×</text>
  </g>
</svg>`,
    levels: [
      { id: 'm4-1', name: '2 Times!', character: 'puffy', unlocks: null, mathType: 'times2', maxNum: 5, isBoss: false },
      { id: 'm4-2', name: '5 Times!', character: 'luna', unlocks: null, mathType: 'times5', maxNum: 5, isBoss: false },
      { id: 'm4-3', name: '2s to 10!', character: 'sunny', unlocks: null, mathType: 'times2', maxNum: 10, isBoss: false },
      { id: 'm4-4', name: '5s to 10!', character: 'pearl', unlocks: null, mathType: 'times5', maxNum: 10, isBoss: false },
      { id: 'm4-5', name: 'Times Boss!', character: 'fizz', unlocks: null, mathType: 'timesMix', maxNum: 10, isBoss: true },
    ]
  },
  {
    id: 'm5',
    name: 'Multiply Masters',
    emoji: '🔢',
    theme: 'math-times34',
    colors: {
      bg1: '#1a0d00', bg2: '#2d1500',
      accent1: '#E07B00', accent2: '#FFAA00', accent3: '#CC6600',
      card: 'rgba(224,123,0,0.15)',
      border: 'rgba(224,123,0,0.4)',
    },
    description: 'Master the 3s and 4s times tables!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m5-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0d00"/>
      <stop offset="100%" stop-color="#2d1500"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m5-sky)"/>
  <g fill="rgba(224,123,0,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="80" y="200">3×</text><text x="320" y="370">4×</text>
    <text x="620" y="160">3×</text><text x="920" y="310">4×</text>
    <text x="1110" y="220">3×</text><text x="210" y="630">4×</text>
    <text x="770" y="670">3×</text><text x="1190" y="510">4×</text>
  </g>
</svg>`,
    levels: [
      { id: 'm5-1', name: '3 Times to 6', character: 'boba', unlocks: null, mathType: 'times3', maxNum: 6, isBoss: false },
      { id: 'm5-2', name: '4 Times to 6', character: 'mochi', unlocks: null, mathType: 'times4', maxNum: 6, isBoss: false },
      { id: 'm5-3', name: '3 Times to 10', character: 'coco', unlocks: null, mathType: 'times3', maxNum: 10, isBoss: false },
      { id: 'm5-4', name: '4 Times to 10', character: 'nori', unlocks: null, mathType: 'times4', maxNum: 10, isBoss: false },
      { id: 'm5-5', name: 'Masters Boss!', character: 'zara', unlocks: null, mathType: 'times34', maxNum: 10, isBoss: true },
    ]
  },
  {
    id: 'm6',
    name: 'Times Table Turbo',
    emoji: '⚡',
    theme: 'math-times678',
    colors: {
      bg1: '#0d0020', bg2: '#1a0040',
      accent1: '#A855F7', accent2: '#C084FC', accent3: '#7C3AED',
      card: 'rgba(168,85,247,0.15)',
      border: 'rgba(168,85,247,0.4)',
    },
    description: 'Supercharge your 6s, 7s, and 8s!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m6-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0d0020"/>
      <stop offset="100%" stop-color="#1a0040"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m6-sky)"/>
  <g fill="rgba(168,85,247,0.14)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="60" y="200">6×</text><text x="310" y="360">7×</text>
    <text x="610" y="155">8×</text><text x="910" y="305">6×</text>
    <text x="1105" y="225">7×</text><text x="205" y="625">8×</text>
    <text x="765" y="665">6×</text><text x="1185" y="515">7×</text>
  </g>
  <g fill="rgba(192,132,252,0.3)" font-size="40" font-family="sans-serif">
    <text x="150" y="420">⚡</text><text x="500" y="480">⚡</text>
    <text x="850" y="430">⚡</text><text x="1100" y="600">⚡</text>
  </g>
</svg>`,
    levels: [
      { id: 'm6-1', name: '6 Times to 8', character: 'puffy', unlocks: null, mathType: 'times6', maxNum: 8, isBoss: false },
      { id: 'm6-2', name: '7 Times to 8', character: 'luna', unlocks: null, mathType: 'times7', maxNum: 8, isBoss: false },
      { id: 'm6-3', name: '8 Times to 8', character: 'sunny', unlocks: null, mathType: 'times8', maxNum: 8, isBoss: false },
      { id: 'm6-4', name: '6 Times to 12', character: 'pearl', unlocks: null, mathType: 'times6', maxNum: 12, isBoss: false },
      { id: 'm6-5', name: 'Turbo Boss!', character: 'fizz', unlocks: null, mathType: 'times678', maxNum: 12, isBoss: true },
    ]
  },
  {
    id: 'm7',
    name: 'Division Dojo',
    emoji: '➗',
    theme: 'math-division',
    colors: {
      bg1: '#001a18', bg2: '#002e2a',
      accent1: '#2DD4BF', accent2: '#5EEAD4', accent3: '#0D9488',
      card: 'rgba(45,212,191,0.15)',
      border: 'rgba(45,212,191,0.4)',
    },
    description: 'Split numbers apart in the Division Dojo!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m7-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#001a18"/>
      <stop offset="100%" stop-color="#002e2a"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m7-sky)"/>
  <g fill="rgba(45,212,191,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="80" y="200">÷</text><text x="300" y="350">÷</text>
    <text x="600" y="150">÷</text><text x="900" y="300">÷</text>
    <text x="1100" y="200">÷</text><text x="1200" y="500">÷</text>
    <text x="200" y="600">÷</text><text x="750" y="650">÷</text>
  </g>
</svg>`,
    levels: [
      { id: 'm7-1', name: 'Divide by 2', character: 'boba', unlocks: null, mathType: 'div2', maxNum: 20, isBoss: false },
      { id: 'm7-2', name: 'Divide by 5', character: 'mochi', unlocks: null, mathType: 'div5', maxNum: 50, isBoss: false },
      { id: 'm7-3', name: 'Divide by 3', character: 'coco', unlocks: null, mathType: 'div3', maxNum: 30, isBoss: false },
      { id: 'm7-4', name: 'Divide by 4', character: 'nori', unlocks: null, mathType: 'div4', maxNum: 40, isBoss: false },
      { id: 'm7-5', name: 'Division Boss!', character: 'zara', unlocks: null, mathType: 'divMix', maxNum: 50, isBoss: true },
    ]
  },
  {
    id: 'm8',
    name: 'Challenge Zone',
    emoji: '🏆',
    theme: 'math-challenge',
    colors: {
      bg1: '#1a0500', bg2: '#2e0800',
      accent1: '#EF4444', accent2: '#FCD34D', accent3: '#B91C1C',
      card: 'rgba(239,68,68,0.15)',
      border: 'rgba(239,68,68,0.4)',
    },
    description: 'The ultimate math challenge — big numbers, all operations!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="m8-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0500"/>
      <stop offset="100%" stop-color="#2e0800"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#m8-sky)"/>
  <g fill="rgba(239,68,68,0.12)" font-size="80" font-family="sans-serif" font-weight="bold">
    <text x="60" y="200">+</text><text x="300" y="350">−</text>
    <text x="600" y="150">×</text><text x="900" y="300">÷</text>
    <text x="1100" y="200">+</text><text x="200" y="600">×</text>
    <text x="750" y="650">−</text><text x="1180" y="500">÷</text>
  </g>
  <g fill="rgba(252,211,77,0.25)" font-size="50" font-family="sans-serif">
    <text x="120" y="430">🏆</text><text x="580" y="490">🏆</text>
    <text x="1030" y="440">🏆</text>
  </g>
</svg>`,
    levels: [
      { id: 'm8-1', name: 'Big Addition', character: 'puffy', unlocks: null, mathType: 'bigAdd', maxNum: 500, isBoss: false },
      { id: 'm8-2', name: 'Big Subtraction', character: 'luna', unlocks: null, mathType: 'bigSub', maxNum: 500, isBoss: false },
      { id: 'm8-3', name: 'Times Two Digits', character: 'sunny', unlocks: null, mathType: 'bigMult', maxNum: 19, isBoss: false },
      { id: 'm8-4', name: 'Mixed Hard', character: 'pearl', unlocks: null, mathType: 'mixHard', maxNum: 500, isBoss: false },
      { id: 'm8-5', name: 'Challenge Boss!', character: 'fizz', unlocks: null, mathType: 'mixHard', maxNum: 999, isBoss: true },
    ]
  },
];

// ─── Science Worlds ───────────────────────────────────────────────────────────
const SCIENCE_WORLDS = [
  {
    id: 's1',
    name: 'Animal Kingdom',
    emoji: '🐾',
    theme: 'science-animals',
    colors: {
      bg1: '#001a0d', bg2: '#002e1a',
      accent1: '#4ECDC4', accent2: '#45B7D1', accent3: '#96E6A1',
      card: 'rgba(78,205,196,0.15)',
      border: 'rgba(78,205,196,0.4)',
    },
    description: 'Learn amazing facts about animals!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s1-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#001a0d"/>
      <stop offset="100%" stop-color="#002e1a"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s1-sky)"/>
  <g fill="rgba(78,205,196,0.10)" font-size="64" font-family="sans-serif">
    <text x="60" y="180">🐾</text><text x="300" y="320">🦋</text>
    <text x="600" y="140">🐾</text><text x="880" y="280">🦋</text>
    <text x="1080" y="200">🐾</text><text x="180" y="580">🦋</text>
    <text x="720" y="640">🐾</text><text x="1160" y="480">🦋</text>
  </g>
</svg>`,
    levels: [
      { id: 's1-1', name: 'Bug Facts', character: 'boba', unlocks: null, scienceWorld: 's1', isBoss: false },
      { id: 's1-2', name: 'Sea Animals', character: 'mochi', unlocks: null, scienceWorld: 's1', isBoss: false },
      { id: 's1-3', name: 'Land Animals', character: 'coco', unlocks: null, scienceWorld: 's1', isBoss: false },
      { id: 's1-4', name: 'Bird Facts', character: 'nori', unlocks: null, scienceWorld: 's1', isBoss: false },
      { id: 's1-5', name: 'Animal Boss!', character: 'zara', unlocks: null, scienceWorld: 's1', isBoss: true },
    ]
  },
  {
    id: 's2',
    name: 'Planet Earth',
    emoji: '🌍',
    theme: 'science-earth',
    colors: {
      bg1: '#000f1a', bg2: '#001a2e',
      accent1: '#45B7D1', accent2: '#4ECDC4', accent3: '#74C0FC',
      card: 'rgba(69,183,209,0.15)',
      border: 'rgba(69,183,209,0.4)',
    },
    description: 'Explore nature, weather and plants!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s2-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#000f1a"/>
      <stop offset="100%" stop-color="#001a2e"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s2-sky)"/>
  <g fill="rgba(69,183,209,0.10)" font-size="64" font-family="sans-serif">
    <text x="60" y="180">🌿</text><text x="300" y="320">☁️</text>
    <text x="600" y="140">🌿</text><text x="880" y="280">☁️</text>
    <text x="1080" y="200">🌿</text><text x="180" y="580">☁️</text>
    <text x="720" y="640">🌿</text><text x="1160" y="480">☁️</text>
  </g>
</svg>`,
    levels: [
      { id: 's2-1', name: 'Weather Watch', character: 'puffy', unlocks: null, scienceWorld: 's2', isBoss: false },
      { id: 's2-2', name: 'Plant Power', character: 'luna', unlocks: null, scienceWorld: 's2', isBoss: false },
      { id: 's2-3', name: 'Earth Facts', character: 'sunny', unlocks: null, scienceWorld: 's2', isBoss: false },
      { id: 's2-4', name: 'Nature Quiz', character: 'pearl', unlocks: null, scienceWorld: 's2', isBoss: false },
      { id: 's2-5', name: 'Earth Boss!', character: 'fizz', unlocks: null, scienceWorld: 's2', isBoss: true },
    ]
  },
  {
    id: 's3',
    name: 'Our Solar System',
    emoji: '🚀',
    theme: 'science-space',
    colors: {
      bg1: '#050820', bg2: '#0a0f2e',
      accent1: '#9B5DE5', accent2: '#F15BB5', accent3: '#FEE440',
      card: 'rgba(155,93,229,0.15)',
      border: 'rgba(155,93,229,0.4)',
    },
    description: 'Blast off and explore space!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s3-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050820"/>
      <stop offset="100%" stop-color="#0a0f2e"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s3-sky)"/>
  <g fill="white" opacity="0.5">
    <circle cx="100" cy="80" r="2"/><circle cx="250" cy="40" r="1.5"/><circle cx="420" cy="100" r="2"/>
    <circle cx="600" cy="50" r="1.8"/><circle cx="800" cy="90" r="2.2"/><circle cx="1000" cy="45" r="1.6"/>
    <circle cx="1150" cy="85" r="2"/><circle cx="1220" cy="30" r="1.5"/>
    <circle cx="180" cy="200" r="1.4"/><circle cx="500" cy="180" r="1.8"/><circle cx="750" cy="220" r="2"/>
    <circle cx="1050" cy="170" r="1.5"/><circle cx="1200" cy="210" r="1.7"/>
  </g>
  <g fill="rgba(155,93,229,0.10)" font-size="64" font-family="sans-serif">
    <text x="80" y="200">🪐</text><text x="600" y="150">⭐</text>
    <text x="1050" y="200">🪐</text><text x="300" y="600">⭐</text>
    <text x="900" y="650">🪐</text>
  </g>
</svg>`,
    levels: [
      { id: 's3-1', name: 'Sun and Moon', character: 'boba', unlocks: null, scienceWorld: 's3', isBoss: false },
      { id: 's3-2', name: 'The Planets', character: 'mochi', unlocks: null, scienceWorld: 's3', isBoss: false },
      { id: 's3-3', name: 'Stars!', character: 'coco', unlocks: null, scienceWorld: 's3', isBoss: false },
      { id: 's3-4', name: 'Space Facts', character: 'nori', unlocks: null, scienceWorld: 's3', isBoss: false },
      { id: 's3-5', name: 'Space Boss!', character: 'zara', unlocks: null, scienceWorld: 's3', isBoss: true },
    ]
  },
  {
    id: 's4',
    name: 'Human Body',
    emoji: '💪',
    theme: 'science-body',
    colors: {
      bg1: '#1a000f', bg2: '#2e001a',
      accent1: '#FF85A1', accent2: '#FF6B9D', accent3: '#FFB5C8',
      card: 'rgba(255,133,161,0.15)',
      border: 'rgba(255,133,161,0.4)',
    },
    description: 'Learn about your amazing body!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s4-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a000f"/>
      <stop offset="100%" stop-color="#2e001a"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s4-sky)"/>
  <g fill="rgba(255,133,161,0.10)" font-size="64" font-family="sans-serif">
    <text x="80" y="200">❤️</text><text x="320" y="360">💪</text>
    <text x="620" y="160">❤️</text><text x="920" y="310">💪</text>
    <text x="1100" y="220">❤️</text><text x="200" y="620">💪</text>
    <text x="760" y="660">❤️</text><text x="1170" y="510">💪</text>
  </g>
</svg>`,
    levels: [
      { id: 's4-1', name: 'Bones!', character: 'puffy', unlocks: null, scienceWorld: 's4', isBoss: false },
      { id: 's4-2', name: 'Your Senses', character: 'luna', unlocks: null, scienceWorld: 's4', isBoss: false },
      { id: 's4-3', name: 'Stay Healthy', character: 'sunny', unlocks: null, scienceWorld: 's4', isBoss: false },
      { id: 's4-4', name: 'Body Parts', character: 'pearl', unlocks: null, scienceWorld: 's4', isBoss: false },
      { id: 's4-5', name: 'Body Boss!', character: 'fizz', unlocks: null, scienceWorld: 's4', isBoss: true },
    ]
  },
  {
    id: 's5',
    name: 'Life Science',
    emoji: '🌿',
    theme: 'science-life',
    colors: {
      bg1: '#011a07', bg2: '#022e0d',
      accent1: '#4ADE80', accent2: '#86EFAC', accent3: '#16A34A',
      card: 'rgba(74,222,128,0.15)',
      border: 'rgba(74,222,128,0.4)',
    },
    description: 'Explore cells, food chains, and ecosystems!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s5-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#011a07"/>
      <stop offset="100%" stop-color="#022e0d"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s5-sky)"/>
  <g fill="rgba(74,222,128,0.10)" font-size="64" font-family="sans-serif">
    <text x="60" y="180">🌿</text><text x="300" y="320">🍃</text>
    <text x="600" y="140">🌿</text><text x="880" y="280">🍃</text>
    <text x="1080" y="200">🌿</text><text x="180" y="580">🍃</text>
    <text x="720" y="640">🌿</text><text x="1160" y="480">🍃</text>
  </g>
</svg>`,
    levels: [
      { id: 's5-1', name: 'Food Chains', character: 'nori', unlocks: null, scienceWorld: 's5', isBoss: false },
      { id: 's5-2', name: 'Living Cells', character: 'zara', unlocks: null, scienceWorld: 's5', isBoss: false },
      { id: 's5-3', name: 'Ecosystems', character: 'puffy', unlocks: null, scienceWorld: 's5', isBoss: false },
      { id: 's5-4', name: 'Plants & Pollinators', character: 'luna', unlocks: null, scienceWorld: 's5', isBoss: false },
      { id: 's5-5', name: 'Life Science Boss!', character: 'sunny', unlocks: null, scienceWorld: 's5', isBoss: true },
    ]
  },
  {
    id: 's6',
    name: 'Matter & Energy',
    emoji: '⚗️',
    theme: 'science-matter',
    colors: {
      bg1: '#000d1a', bg2: '#001a33',
      accent1: '#38BDF8', accent2: '#7DD3FC', accent3: '#0EA5E9',
      card: 'rgba(56,189,248,0.15)',
      border: 'rgba(56,189,248,0.4)',
    },
    description: 'Discover states of matter, heat, light, and electricity!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s6-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#000d1a"/>
      <stop offset="100%" stop-color="#001a33"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s6-sky)"/>
  <g fill="rgba(56,189,248,0.10)" font-size="64" font-family="sans-serif">
    <text x="60" y="180">⚡</text><text x="300" y="320">💧</text>
    <text x="600" y="140">🔥</text><text x="880" y="280">⚡</text>
    <text x="1080" y="200">💧</text><text x="180" y="580">🔥</text>
    <text x="720" y="640">⚡</text><text x="1160" y="480">💧</text>
  </g>
</svg>`,
    levels: [
      { id: 's6-1', name: 'States of Matter', character: 'pearl', unlocks: null, scienceWorld: 's6', isBoss: false },
      { id: 's6-2', name: 'Heat & Temperature', character: 'fizz', unlocks: null, scienceWorld: 's6', isBoss: false },
      { id: 's6-3', name: 'Light & Sound', character: 'nori', unlocks: null, scienceWorld: 's6', isBoss: false },
      { id: 's6-4', name: 'Electricity', character: 'zara', unlocks: null, scienceWorld: 's6', isBoss: false },
      { id: 's6-5', name: 'Matter Boss!', character: 'puffy', unlocks: null, scienceWorld: 's6', isBoss: true },
    ]
  },
  {
    id: 's7',
    name: 'Forces & Motion',
    emoji: '🚀',
    theme: 'science-forces',
    colors: {
      bg1: '#1a0d00', bg2: '#2d1800',
      accent1: '#FB923C', accent2: '#FDBA74', accent3: '#EA580C',
      card: 'rgba(251,146,60,0.15)',
      border: 'rgba(251,146,60,0.4)',
    },
    description: 'Push, pull, and zoom through forces and motion!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s7-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0d00"/>
      <stop offset="100%" stop-color="#2d1800"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s7-sky)"/>
  <g fill="rgba(251,146,60,0.10)" font-size="64" font-family="sans-serif">
    <text x="60" y="180">🚀</text><text x="300" y="320">⬆️</text>
    <text x="600" y="140">🚀</text><text x="880" y="280">➡️</text>
    <text x="1080" y="200">🚀</text><text x="180" y="580">⬆️</text>
    <text x="720" y="640">🚀</text><text x="1160" y="480">➡️</text>
  </g>
</svg>`,
    levels: [
      { id: 's7-1', name: 'Gravity!', character: 'luna', unlocks: null, scienceWorld: 's7', isBoss: false },
      { id: 's7-2', name: 'Friction & Magnets', character: 'sunny', unlocks: null, scienceWorld: 's7', isBoss: false },
      { id: 's7-3', name: 'Simple Machines', character: 'pearl', unlocks: null, scienceWorld: 's7', isBoss: false },
      { id: 's7-4', name: 'Speed & Motion', character: 'fizz', unlocks: null, scienceWorld: 's7', isBoss: false },
      { id: 's7-5', name: 'Forces Boss!', character: 'nori', unlocks: null, scienceWorld: 's7', isBoss: true },
    ]
  },
  {
    id: 's8',
    name: 'Earth Science',
    emoji: '🌋',
    theme: 'science-earth2',
    colors: {
      bg1: '#1a0400', bg2: '#2e0800',
      accent1: '#F87171', accent2: '#FCA5A5', accent3: '#B91C1C',
      card: 'rgba(248,113,113,0.15)',
      border: 'rgba(248,113,113,0.4)',
    },
    description: 'Explore rocks, volcanoes, the water cycle, and more!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="s8-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0400"/>
      <stop offset="100%" stop-color="#2e0800"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#s8-sky)"/>
  <g fill="rgba(248,113,113,0.10)" font-size="64" font-family="sans-serif">
    <text x="60" y="180">🌋</text><text x="300" y="320">🪨</text>
    <text x="600" y="140">🌋</text><text x="880" y="280">💧</text>
    <text x="1080" y="200">🌋</text><text x="180" y="580">🪨</text>
    <text x="720" y="640">🌋</text><text x="1160" y="480">💧</text>
  </g>
</svg>`,
    levels: [
      { id: 's8-1', name: 'Rocks & Fossils', character: 'zara', unlocks: null, scienceWorld: 's8', isBoss: false },
      { id: 's8-2', name: 'Volcanoes & Quakes', character: 'puffy', unlocks: null, scienceWorld: 's8', isBoss: false },
      { id: 's8-3', name: 'The Water Cycle', character: 'luna', unlocks: null, scienceWorld: 's8', isBoss: false },
      { id: 's8-4', name: 'Climate & Sky', character: 'sunny', unlocks: null, scienceWorld: 's8', isBoss: false },
      { id: 's8-5', name: 'Earth Science Boss!', character: 'pearl', unlocks: null, scienceWorld: 's8', isBoss: true },
    ]
  },
];

// ─── Science Question Bank ────────────────────────────────────────────────────
const SCIENCE_QUESTIONS = {
  's1': [
    { question: 'How many legs does a spider have?', answer: '8', choices: ['8', '6', '4', '2'], hint: 'More than a bug!' },
    { question: 'What do butterflies start out as?', answer: 'A caterpillar', choices: ['A caterpillar', 'An egg only', 'A bee', 'A worm'], hint: 'They look very different when young!' },
    { question: 'How many legs does an insect have?', answer: '6', choices: ['6', '8', '4', '10'], hint: 'Spiders have more legs than insects!' },
    { question: 'What do bees make?', answer: 'Honey', choices: ['Honey', 'Milk', 'Butter', 'Juice'], hint: 'It is sweet and sticky!' },
    { question: 'What is a baby frog called?', answer: 'A tadpole', choices: ['A tadpole', 'A kitten', 'A cub', 'A foal'], hint: 'It lives in water and has a tail!' },
    { question: 'Which animal has a shell on its back?', answer: 'Turtle', choices: ['Turtle', 'Rabbit', 'Dog', 'Lion'], hint: 'It is very slow!' },
    { question: 'What do fish use to breathe?', answer: 'Gills', choices: ['Gills', 'Lungs', 'Nose', 'Skin'], hint: 'They are on the sides of their head!' },
    { question: 'How many legs does a cat have?', answer: '4', choices: ['4', '2', '6', '8'], hint: 'Same as a dog!' },
    { question: 'What is the fastest land animal?', answer: 'Cheetah', choices: ['Cheetah', 'Lion', 'Horse', 'Zebra'], hint: 'It has spots!' },
    { question: 'Where do penguins live?', answer: 'Antarctica', choices: ['Antarctica', 'Africa', 'Australia', 'The Moon'], hint: 'It is very, very cold there!' },
    { question: 'What do caterpillars turn into?', answer: 'Butterflies or moths', choices: ['Butterflies or moths', 'Bees', 'Dragonflies', 'Beetles'], hint: 'They grow beautiful wings!' },
    { question: 'Which bird cannot fly?', answer: 'Penguin', choices: ['Penguin', 'Eagle', 'Robin', 'Sparrow'], hint: 'It swims instead!' },
    { question: 'What is a baby dog called?', answer: 'A puppy', choices: ['A puppy', 'A kitten', 'A cub', 'A foal'], hint: 'Sounds cute and fluffy!' },
    { question: 'What animal makes a web?', answer: 'Spider', choices: ['Spider', 'Ant', 'Bee', 'Fly'], hint: 'It has 8 legs!' },
  ],
  's2': [
    { question: 'What do plants need to make food?', answer: 'Sunlight, water, and air', choices: ['Sunlight, water, and air', 'Only water', 'Only sunlight', 'Soil alone'], hint: 'Plants need a few things together!' },
    { question: 'What causes thunder?', answer: 'Lightning heating the air', choices: ['Lightning heating the air', 'Clouds bumping', 'Wind blowing hard', 'Rain falling fast'], hint: 'It always comes with lightning!' },
    { question: 'What is the center of the Earth called?', answer: 'The core', choices: ['The core', 'The crust', 'The mantle', 'The shell'], hint: 'It is super hot in there!' },
    { question: 'What do we call water that falls from clouds?', answer: 'Rain', choices: ['Rain', 'Fog', 'Dew', 'Steam'], hint: 'You need an umbrella for this!' },
    { question: 'What part of a plant soaks up water from the soil?', answer: 'Roots', choices: ['Roots', 'Leaves', 'Stem', 'Flowers'], hint: 'They are underground!' },
    { question: 'What is frozen rain called?', answer: 'Snow or hail', choices: ['Snow or hail', 'Fog', 'Dew', 'Mist'], hint: 'It can be fluffy or icy!' },
    { question: 'What gas do plants release that we breathe?', answer: 'Oxygen', choices: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Steam'], hint: 'We need this gas to stay alive!' },
    { question: 'What is a rainbow made of?', answer: 'Sunlight and rain', choices: ['Sunlight and rain', 'Clouds and wind', 'Stars and dust', 'Fire and smoke'], hint: 'You see it after rain when the sun comes out!' },
    { question: 'What do you call the top layer of Earth we walk on?', answer: 'The crust', choices: ['The crust', 'The core', 'The mantle', 'The shell'], hint: 'It is like the outside of a pizza!' },
    { question: 'Which season has the most sunlight?', answer: 'Summer', choices: ['Summer', 'Winter', 'Spring', 'Autumn'], hint: 'It is the hottest season!' },
    { question: 'What makes wind?', answer: 'Moving air', choices: ['Moving air', 'Moving water', 'Clouds moving', 'The sun spinning'], hint: 'You cannot see it but you can feel it!' },
    { question: 'What do seeds need to start growing?', answer: 'Water and warmth', choices: ['Water and warmth', 'Only soil', 'Only sunlight', 'Only rain'], hint: 'They wake up when they get cozy and wet!' },
    { question: 'What is a very big storm with spinning winds called?', answer: 'A tornado', choices: ['A tornado', 'A blizzard', 'A drizzle', 'A breeze'], hint: 'It spins like a top!' },
    { question: 'Where does rain come from?', answer: 'Clouds', choices: ['Clouds', 'The ocean', 'Rivers', 'The ground'], hint: 'Look up when it rains!' },
  ],
  's3': [
    { question: 'What is the closest star to Earth?', answer: 'The Sun', choices: ['The Sun', 'Mars', 'Pluto', 'The Moon'], hint: 'It gives us light every day!' },
    { question: 'How many planets are in our solar system?', answer: '8', choices: ['8', '9', '7', '10'], hint: 'Pluto is no longer counted!' },
    { question: 'What is the biggest planet?', answer: 'Jupiter', choices: ['Jupiter', 'Saturn', 'Earth', 'Mars'], hint: 'It has a big red spot!' },
    { question: 'What planet do we live on?', answer: 'Earth', choices: ['Earth', 'Mars', 'Venus', 'Jupiter'], hint: 'It is the only one with oceans and people!' },
    { question: 'What goes around Earth in the sky?', answer: 'The Moon', choices: ['The Moon', 'The Sun', 'A star', 'A comet'], hint: 'We see it at night and it changes shape!' },
    { question: 'What is the red planet called?', answer: 'Mars', choices: ['Mars', 'Jupiter', 'Venus', 'Mercury'], hint: 'It looks orange-red in the sky!' },
    { question: 'Which planet has big beautiful rings?', answer: 'Saturn', choices: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'], hint: 'Its rings are made of ice and rock!' },
    { question: 'What do we call a shooting star?', answer: 'A meteor', choices: ['A meteor', 'A comet', 'A planet', 'A moon'], hint: 'It is actually a rock burning up!' },
    { question: 'How long does Earth take to go around the Sun?', answer: 'One year', choices: ['One year', 'One month', 'One week', 'One day'], hint: 'That is 365 days!' },
    { question: 'What is it called when the Moon blocks the Sun?', answer: 'A solar eclipse', choices: ['A solar eclipse', 'A lunar eclipse', 'A rainbow', 'A supernova'], hint: 'The sky goes dark in daytime!' },
    { question: 'What are stars made of?', answer: 'Hot gas', choices: ['Hot gas', 'Ice', 'Rock', 'Water'], hint: 'They are like giant balls of fire!' },
    { question: 'Which planet is smallest?', answer: 'Mercury', choices: ['Mercury', 'Mars', 'Venus', 'Pluto'], hint: 'It is the closest to the Sun!' },
    { question: 'What do astronauts wear in space?', answer: 'A spacesuit', choices: ['A spacesuit', 'A raincoat', 'Swim goggles', 'A wetsuit'], hint: 'It keeps them safe in space!' },
    { question: 'What is our group of planets called?', answer: 'The Solar System', choices: ['The Solar System', 'The Milky Way', 'The Universe', 'The Galaxy'], hint: 'It is named after our star, the Sun!' },
  ],
  's4': [
    { question: 'How many bones does an adult human have?', answer: '206', choices: ['206', '100', '350', '150'], hint: 'You have more bones than you think!' },
    { question: 'What pumps blood around your body?', answer: 'Your heart', choices: ['Your heart', 'Your brain', 'Your lungs', 'Your stomach'], hint: 'You can feel it beating in your chest!' },
    { question: 'What do your lungs do?', answer: 'Help you breathe', choices: ['Help you breathe', 'Pump your blood', 'Digest food', 'Move your arms'], hint: 'You have two of them!' },
    { question: 'How many senses do humans have?', answer: '5', choices: ['5', '3', '7', '4'], hint: 'Sight, hearing, smell, taste, and touch!' },
    { question: 'What is the biggest organ in your body?', answer: 'Skin', choices: ['Skin', 'Brain', 'Heart', 'Liver'], hint: 'It covers your whole body!' },
    { question: 'What do you use to taste food?', answer: 'Your tongue', choices: ['Your tongue', 'Your nose', 'Your eyes', 'Your fingers'], hint: 'It helps you say words too!' },
    { question: 'What food helps your bones grow strong?', answer: 'Milk and dairy', choices: ['Milk and dairy', 'Candy', 'Juice', 'Chips'], hint: 'It has lots of calcium!' },
    { question: 'Which body part controls everything you do?', answer: 'Brain', choices: ['Brain', 'Heart', 'Stomach', 'Lungs'], hint: 'It is inside your head!' },
    { question: 'How many teeth do grown-ups have?', answer: '32', choices: ['32', '20', '28', '40'], hint: 'That includes wisdom teeth!' },
    { question: 'What do your kidneys do?', answer: 'Clean your blood', choices: ['Clean your blood', 'Pump blood', 'Help you breathe', 'Digest food'], hint: 'You have two of them, one on each side!' },
    { question: 'What keeps your bones together at joints?', answer: 'Ligaments', choices: ['Ligaments', 'Muscles', 'Skin', 'Veins'], hint: 'They are like strong rubber bands!' },
    { question: 'How many chambers does your heart have?', answer: '4', choices: ['4', '2', '6', '1'], hint: 'Two on the left, two on the right!' },
    { question: 'Which vitamin do you get from sunlight?', answer: 'Vitamin D', choices: ['Vitamin D', 'Vitamin C', 'Vitamin A', 'Vitamin B'], hint: 'Go outside and soak it up!' },
    { question: 'What is the hard white stuff covering your teeth called?', answer: 'Enamel', choices: ['Enamel', 'Bone', 'Calcium', 'Ivory'], hint: 'It is the hardest thing in your body!' },
  ],
  's5': [
    { question: 'What do you call an animal that eats only plants?', answer: 'Herbivore', choices: ['Herbivore', 'Carnivore', 'Omnivore', 'Parasite'], hint: 'Think "herbs" — plants!' },
    { question: 'What is the tiny unit that all living things are made of?', answer: 'Cell', choices: ['Cell', 'Atom', 'Molecule', 'Organ'], hint: 'Even your skin is made of millions of these!' },
    { question: 'What do you call animals that eat both plants and animals?', answer: 'Omnivores', choices: ['Omnivores', 'Herbivores', 'Carnivores', 'Decomposers'], hint: 'Humans are one of these!' },
    { question: 'In a food chain, what are animals that eat other animals called?', answer: 'Predators', choices: ['Predators', 'Prey', 'Producers', 'Scavengers'], hint: 'They hunt for their food!' },
    { question: 'What do decomposers do?', answer: 'Break down dead things', choices: ['Break down dead things', 'Make food from sunlight', 'Hunt prey', 'Pollinate flowers'], hint: 'Mushrooms and worms are decomposers!' },
    { question: 'What is it called when bees help plants reproduce by carrying pollen?', answer: 'Pollination', choices: ['Pollination', 'Photosynthesis', 'Germination', 'Hibernation'], hint: 'Bees get nectar and the plant gets help!' },
    { question: 'What do plants convert sunlight into?', answer: 'Food and energy', choices: ['Food and energy', 'Water', 'Air', 'Soil'], hint: 'This process is called photosynthesis!' },
    { question: 'What is a community of living things and their environment called?', answer: 'An ecosystem', choices: ['An ecosystem', 'A food chain', 'A habitat', 'A species'], hint: 'A pond, a forest, and a desert are all examples!' },
    { question: 'In a food chain, what do we call living things that make their own food?', answer: 'Producers', choices: ['Producers', 'Consumers', 'Predators', 'Scavengers'], hint: 'Plants are the main ones — they use sunlight!' },
    { question: 'What do we call it when a bear sleeps all winter to save energy?', answer: 'Hibernation', choices: ['Hibernation', 'Migration', 'Pollination', 'Adaptation'], hint: 'The bear wakes up in spring!' },
    { question: 'What is a plant part that protects seeds and often attracts animals?', answer: 'Fruit', choices: ['Fruit', 'Root', 'Stem', 'Leaf'], hint: 'Apples, berries, and peaches are all this!' },
    { question: 'What gas do plants take in from the air to make food?', answer: 'Carbon dioxide', choices: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Steam'], hint: 'We breathe OUT this gas and plants use it!' },
    { question: 'What do we call it when an animal looks like its surroundings to hide?', answer: 'Camouflage', choices: ['Camouflage', 'Migration', 'Adaptation', 'Hibernation'], hint: 'A stick insect is a great example!' },
    { question: 'What is the process by which a seed starts to grow into a plant?', answer: 'Germination', choices: ['Germination', 'Pollination', 'Photosynthesis', 'Hibernation'], hint: 'Add water and warmth to a seed to make this happen!' },
    { question: 'What do we call an animal that only eats meat?', answer: 'Carnivore', choices: ['Carnivore', 'Herbivore', 'Omnivore', 'Scavenger'], hint: 'Lions and wolves are these!' },
    { question: 'What is the place where an animal naturally lives called?', answer: 'A habitat', choices: ['A habitat', 'An ecosystem', 'A food chain', 'A cell'], hint: 'A fish\'s is the ocean; a bird\'s might be a forest!' },
  ],
  's6': [
    { question: 'What are the three main states of matter?', answer: 'Solid, liquid, gas', choices: ['Solid, liquid, gas', 'Hot, cold, warm', 'Fire, water, air', 'Metal, wood, plastic'], hint: 'Ice, water, and steam are all the same thing in different states!' },
    { question: 'What happens to water when it freezes?', answer: 'It becomes a solid', choices: ['It becomes a solid', 'It becomes a gas', 'It disappears', 'It gets lighter'], hint: 'Think of ice cubes!' },
    { question: 'What is the main source of energy for life on Earth?', answer: 'The Sun', choices: ['The Sun', 'The ocean', 'The wind', 'The moon'], hint: 'It warms us and helps plants grow!' },
    { question: 'What do we call it when a liquid turns into a gas by heating?', answer: 'Evaporation', choices: ['Evaporation', 'Freezing', 'Condensation', 'Melting'], hint: 'Watch a puddle disappear on a sunny day!' },
    { question: 'What tiny particles carry electricity through a wire?', answer: 'Electrons', choices: ['Electrons', 'Protons', 'Atoms', 'Neutrons'], hint: 'These are found on the outside of atoms!' },
    { question: 'What colors make up white light in a rainbow?', answer: 'Red, orange, yellow, green, blue, indigo, violet', choices: ['Red, orange, yellow, green, blue, indigo, violet', 'Only red, blue, yellow', 'Black and white', 'Green and purple only'], hint: 'Remember the name Roy G. Biv!' },
    { question: 'What do we call it when a gas cools down and becomes a liquid?', answer: 'Condensation', choices: ['Condensation', 'Evaporation', 'Melting', 'Freezing'], hint: 'Water droplets on a cold glass of juice!' },
    { question: 'What type of energy does a stretched rubber band have?', answer: 'Stored energy', choices: ['Stored energy', 'Heat energy', 'Sound energy', 'Light energy'], hint: 'It is ready to be released when you let go!' },
    { question: 'What happens to most metals when you heat them?', answer: 'They expand (get bigger)', choices: ['They expand (get bigger)', 'They shrink', 'They melt right away', 'They turn into gas'], hint: 'Bridges have gaps to allow for this!' },
    { question: 'What is the path that electricity travels around called?', answer: 'A circuit', choices: ['A circuit', 'A wire', 'A battery', 'A socket'], hint: 'It must be a complete loop for electricity to flow!' },
    { question: 'What form of energy does the Sun send to us as light and warmth?', answer: 'Radiant energy', choices: ['Radiant energy', 'Sound energy', 'Chemical energy', 'Electrical energy'], hint: 'It travels through space to reach us!' },
    { question: 'What do we call matter that has a definite shape and volume?', answer: 'A solid', choices: ['A solid', 'A liquid', 'A gas', 'Plasma'], hint: 'A rock and an ice cube are examples!' },
    { question: 'What type of energy is stored in food?', answer: 'Chemical energy', choices: ['Chemical energy', 'Heat energy', 'Light energy', 'Sound energy'], hint: 'Your body converts this into energy to move and grow!' },
    { question: 'What happens to water at exactly 100 degrees Celsius?', answer: 'It boils and becomes steam', choices: ['It boils and becomes steam', 'It freezes', 'It disappears', 'It becomes heavier'], hint: 'You can see this when a kettle is on!' },
  ],
  's7': [
    { question: 'What force pulls all objects toward the ground?', answer: 'Gravity', choices: ['Gravity', 'Magnetism', 'Friction', 'Wind'], hint: 'It keeps us from floating off into space!' },
    { question: 'What do we call a force that slows things down when surfaces rub together?', answer: 'Friction', choices: ['Friction', 'Gravity', 'Inertia', 'Pressure'], hint: 'It\'s why a sliding hockey puck eventually stops!' },
    { question: 'What is a ramp that makes lifting heavy things easier called?', answer: 'An inclined plane', choices: ['An inclined plane', 'A lever', 'A pulley', 'A wheel'], hint: 'A wheelchair ramp is a great example!' },
    { question: 'Which poles of two magnets attract each other?', answer: 'Opposite poles', choices: ['Opposite poles', 'Same poles', 'North poles only', 'South poles only'], hint: 'North attracts South, South attracts North!' },
    { question: 'What would happen to a ball dropped on the Moon compared to Earth?', answer: 'It falls more slowly', choices: ['It falls more slowly', 'It falls faster', 'It stays still in the air', 'It floats forever'], hint: 'The Moon has weaker gravity than Earth!' },
    { question: 'What simple machine is a seesaw an example of?', answer: 'A lever', choices: ['A lever', 'A pulley', 'A wheel', 'An inclined plane'], hint: 'It balances or lifts things using a pivot point!' },
    { question: 'What do we call the tendency of a moving object to keep moving?', answer: 'Inertia', choices: ['Inertia', 'Gravity', 'Friction', 'Force'], hint: 'It is also why a still object stays still!' },
    { question: 'What force does a magnet use to pull iron objects toward it?', answer: 'Magnetic force', choices: ['Magnetic force', 'Gravity', 'Friction', 'Air resistance'], hint: 'Magnets only work on certain metals!' },
    { question: 'What do we measure speed as?', answer: 'Distance divided by time', choices: ['Distance divided by time', 'Weight times height', 'Force times mass', 'Size times color'], hint: 'Like kilometres per hour or metres per second!' },
    { question: 'What simple machine uses a rope over a wheel to lift heavy loads?', answer: 'A pulley', choices: ['A pulley', 'A lever', 'A wedge', 'A gear'], hint: 'Cranes and flagpoles use these!' },
    { question: 'What happens to an object when forces acting on it are balanced?', answer: 'It stays still or keeps moving the same way', choices: ['It stays still or keeps moving the same way', 'It speeds up', 'It changes direction', 'It spins'], hint: 'Balance means no change in motion!' },
    { question: 'What is the force that slows down objects moving through air called?', answer: 'Air resistance', choices: ['Air resistance', 'Gravity', 'Friction', 'Magnetism'], hint: 'A parachute uses this to fall slowly!' },
    { question: 'What do we call a push or a pull that can change an object\'s motion?', answer: 'A force', choices: ['A force', 'An energy', 'A wave', 'A power'], hint: 'Kicking a ball is applying one of these!' },
    { question: 'Which tool uses a screw mechanism to drill into wood?', answer: 'A screw', choices: ['A screw', 'A nail', 'A lever', 'A pulley'], hint: 'Turn it and it moves forward into the material!' },
    { question: 'What would a heavier ball and a lighter ball do if dropped at the same time from the same height?', answer: 'Hit the ground at the same time', choices: ['Hit the ground at the same time', 'Heavy one lands first', 'Light one lands first', 'Neither lands'], hint: 'Galileo proved this with an experiment!' },
  ],
  's8': [
    { question: 'What are the three types of rocks?', answer: 'Igneous, sedimentary, metamorphic', choices: ['Igneous, sedimentary, metamorphic', 'Hard, soft, crystal', 'Volcano, sand, coal', 'Granite, marble, diamond'], hint: 'Each type forms in a different way!' },
    { question: 'What do we call it when water vapor in the air cools and turns back into liquid?', answer: 'Condensation', choices: ['Condensation', 'Evaporation', 'Precipitation', 'Transpiration'], hint: 'This is how clouds form!' },
    { question: 'What causes earthquakes?', answer: 'Moving tectonic plates', choices: ['Moving tectonic plates', 'Volcanoes erupting', 'Heavy rain', 'Strong winds'], hint: 'The ground cracks along fault lines!' },
    { question: 'What is a fossil?', answer: 'Remains or traces of ancient living things preserved in rock', choices: ['Remains or traces of ancient living things preserved in rock', 'A type of crystal', 'A type of volcano', 'A type of cloud'], hint: 'Dinosaur bones found in rock are examples!' },
    { question: 'What layer of the atmosphere protects us from the Sun\'s harmful UV rays?', answer: 'The ozone layer', choices: ['The ozone layer', 'The stratosphere', 'The crust', 'The ionosphere'], hint: 'Scientists are worried about holes in it!' },
    { question: 'What is the step in the water cycle when water falls from clouds as rain or snow?', answer: 'Precipitation', choices: ['Precipitation', 'Evaporation', 'Condensation', 'Transpiration'], hint: 'Grab an umbrella — here it comes!' },
    { question: 'What is molten rock called when it is still underground?', answer: 'Magma', choices: ['Magma', 'Lava', 'Granite', 'Obsidian'], hint: 'Once it erupts from a volcano it gets a different name!' },
    { question: 'What type of rock is formed when magma cools and hardens?', answer: 'Igneous rock', choices: ['Igneous rock', 'Sedimentary rock', 'Metamorphic rock', 'Crystal rock'], hint: 'The word igneous comes from the Latin for fire!' },
    { question: 'What do scientists call the large moving pieces of Earth\'s outer layer?', answer: 'Tectonic plates', choices: ['Tectonic plates', 'Continents', 'Fault lines', 'Crusts'], hint: 'They float on the hot mantle underneath!' },
    { question: 'What is the name for water that soaks into the ground and is stored underground?', answer: 'Groundwater', choices: ['Groundwater', 'Rainfall', 'Surface water', 'Runoff'], hint: 'Wells pump this up for people to use!' },
    { question: 'What type of rock forms when layers of sand and mud pile up and harden?', answer: 'Sedimentary rock', choices: ['Sedimentary rock', 'Igneous rock', 'Metamorphic rock', 'Lava rock'], hint: 'Sandstone and limestone are examples!' },
    { question: 'What is the water cycle step where plants release water vapor into the air?', answer: 'Transpiration', choices: ['Transpiration', 'Evaporation', 'Condensation', 'Precipitation'], hint: 'Forests release huge amounts of water this way!' },
    { question: 'What scale do scientists use to measure the strength of earthquakes?', answer: 'The Richter scale', choices: ['The Richter scale', 'The Beaufort scale', 'The Celsius scale', 'The Kelvin scale'], hint: 'Higher numbers mean stronger earthquakes!' },
    { question: 'What do we call the long-term weather patterns of an area?', answer: 'Climate', choices: ['Climate', 'Weather', 'Season', 'Temperature'], hint: 'A rainforest has a wet tropical one; a desert has a dry one!' },
    { question: 'What is the solid outer layer of the Earth called?', answer: 'The crust', choices: ['The crust', 'The core', 'The mantle', 'The shell'], hint: 'It is what we walk on every day!' },
  ],
};

// ─── Math Question Generator ──────────────────────────────────────────────────
function generateMathQuestion(level) {
  const mathType = level.mathType;
  const maxNum = level.maxNum || 10;
  let a, b, question, answer;

  if (mathType === 'add') {
    a = Math.floor(Math.random() * (maxNum / 2 + 1));
    b = Math.floor(Math.random() * (maxNum - a + 1));
    answer = a + b;
    question = `${a} + ${b} = ?`;
  } else if (mathType === 'sub') {
    a = Math.floor(Math.random() * maxNum) + 1;
    b = Math.floor(Math.random() * a);
    answer = a - b;
    question = `${a} − ${b} = ?`;
  } else if (mathType === 'mix') {
    const isAdd = Math.random() > 0.5;
    if (isAdd) {
      a = Math.floor(Math.random() * (maxNum / 2 + 1));
      b = Math.floor(Math.random() * (maxNum - a + 1));
      answer = a + b;
      question = `${a} + ${b} = ?`;
    } else {
      a = Math.floor(Math.random() * maxNum) + 1;
      b = Math.floor(Math.random() * a);
      answer = a - b;
      question = `${a} − ${b} = ?`;
    }
  } else if (mathType === 'times2') {
    b = Math.floor(Math.random() * maxNum) + 1;
    a = 2;
    answer = a * b;
    question = `${a} × ${b} = ?`;
  } else if (mathType === 'times5') {
    b = Math.floor(Math.random() * maxNum) + 1;
    a = 5;
    answer = a * b;
    question = `${a} × ${b} = ?`;
  } else if (mathType === 'timesMix') {
    a = Math.random() > 0.5 ? 2 : 5;
    b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b;
    question = `${a} × ${b} = ?`;
  } else if (mathType === 'times3') {
    a = 3; b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'times4') {
    a = 4; b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'times34') {
    a = Math.random() > 0.5 ? 3 : 4;
    b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'times6') {
    a = 6; b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'times7') {
    a = 7; b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'times8') {
    a = 8; b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'times678') {
    a = [6, 7, 8][Math.floor(Math.random() * 3)];
    b = Math.floor(Math.random() * maxNum) + 1;
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'div2') {
    // a must be divisible by 2, range 2–maxNum
    const maxMultiple = Math.floor(maxNum / 2);
    b = Math.floor(Math.random() * maxMultiple) + 1;
    a = 2 * b;
    answer = b; question = `${a} ÷ 2 = ?`;
  } else if (mathType === 'div3') {
    const maxMultiple = Math.floor(maxNum / 3);
    b = Math.floor(Math.random() * maxMultiple) + 1;
    a = 3 * b;
    answer = b; question = `${a} ÷ 3 = ?`;
  } else if (mathType === 'div4') {
    const maxMultiple = Math.floor(maxNum / 4);
    b = Math.floor(Math.random() * maxMultiple) + 1;
    a = 4 * b;
    answer = b; question = `${a} ÷ 4 = ?`;
  } else if (mathType === 'div5') {
    const maxMultiple = Math.floor(maxNum / 5);
    b = Math.floor(Math.random() * maxMultiple) + 1;
    a = 5 * b;
    answer = b; question = `${a} ÷ 5 = ?`;
  } else if (mathType === 'divMix') {
    const divisor = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
    const maxMultiple = Math.floor(maxNum / divisor);
    b = Math.floor(Math.random() * maxMultiple) + 1;
    a = divisor * b;
    answer = b; question = `${a} ÷ ${divisor} = ?`;
  } else if (mathType === 'bigAdd') {
    const cap = Math.min(maxNum, 999);
    a = Math.floor(Math.random() * (cap - 100)) + 100;
    b = Math.floor(Math.random() * (cap - 100)) + 100;
    answer = a + b; question = `${a} + ${b} = ?`;
  } else if (mathType === 'bigSub') {
    const cap = Math.min(maxNum, 999);
    a = Math.floor(Math.random() * (cap - 100)) + 200;
    b = Math.floor(Math.random() * (a - 100)) + 50;
    answer = a - b; question = `${a} − ${b} = ?`;
  } else if (mathType === 'bigMult') {
    a = Math.floor(Math.random() * 9) + 11; // 11–19
    b = Math.floor(Math.random() * 8) + 2;  // 2–9
    answer = a * b; question = `${a} × ${b} = ?`;
  } else if (mathType === 'mixHard') {
    const op = Math.floor(Math.random() * 4);
    if (op === 0) {
      // big add
      const cap = Math.min(maxNum, 999);
      a = Math.floor(Math.random() * (cap - 100)) + 100;
      b = Math.floor(Math.random() * (cap - 100)) + 100;
      answer = a + b; question = `${a} + ${b} = ?`;
    } else if (op === 1) {
      // big sub
      const cap = Math.min(maxNum, 999);
      a = Math.floor(Math.random() * (cap - 100)) + 200;
      b = Math.floor(Math.random() * (a - 100)) + 50;
      answer = a - b; question = `${a} − ${b} = ?`;
    } else if (op === 2) {
      // bigMult
      a = Math.floor(Math.random() * 9) + 11;
      b = Math.floor(Math.random() * 8) + 2;
      answer = a * b; question = `${a} × ${b} = ?`;
    } else {
      // divMix
      const divisor = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
      const maxMultiple = Math.floor(50 / divisor);
      b = Math.floor(Math.random() * maxMultiple) + 1;
      a = divisor * b;
      answer = b; question = `${a} ÷ ${divisor} = ?`;
    }
  } else {
    a = Math.floor(Math.random() * maxNum);
    b = Math.floor(Math.random() * maxNum);
    answer = a + b;
    question = `${a} + ${b} = ?`;
  }

  // Spread for wrong answers: bigger for big-number types
  const isBigNum = ['bigAdd', 'bigSub', 'bigMult', 'mixHard'].includes(mathType);
  const isDivision = ['div2', 'div3', 'div4', 'div5', 'divMix'].includes(mathType);
  const wrongSpread = isBigNum ? 20 : isDivision ? 5 : 5;

  // Build 3 wrong answers: plausible, nearby, no negatives, no duplicates
  const wrongSet = new Set();
  let attempts = 0;
  while (wrongSet.size < 3 && attempts < 60) {
    attempts++;
    const offset = Math.floor(Math.random() * wrongSpread) + 1;
    const sign = Math.random() > 0.5 ? 1 : -1;
    const candidate = answer + sign * offset;
    if (candidate !== answer && candidate >= 0 && !wrongSet.has(candidate)) {
      wrongSet.add(candidate);
    }
  }
  // Fallback: if still not 3, just add offsets
  [1, 2, 3].forEach(d => {
    if (wrongSet.size < 3) wrongSet.add(answer + d + wrongSet.size);
  });

  const wrongAnswers = Array.from(wrongSet).slice(0, 3);
  const choices = fisherYates([answer, ...wrongAnswers]);

  return { question, answer, choices };
}

// Generate N unique math questions for a level (no duplicate question strings)
function generateMathQuestions(level, count) {
  const questions = [];
  const seen = new Set();
  let attempts = 0;
  while (questions.length < count && attempts < count * 20) {
    attempts++;
    const q = generateMathQuestion(level);
    if (!seen.has(q.question)) {
      seen.add(q.question);
      questions.push(q);
    }
  }
  // Safety: if pool too small, allow repeats rather than infinite loop
  while (questions.length < count) {
    questions.push(generateMathQuestion(level));
  }
  return questions;
}

// ─── Spelling Question Generator ─────────────────────────────────────────────

// Generate a Format A question: word with one letter blanked, 4 letter choices
function generateFormatA(word) {
  const upper = word.toUpperCase();
  const letters = upper.split('');

  // Choose which letter to blank:
  // - Not the first letter
  // - Prefer vowels for short words (≤4), prefer consonants mid-word for longer
  const VOWELS = 'AEIOU';
  const isVowel = (c) => VOWELS.includes(c);

  let candidateIndices = [];
  if (upper.length <= 4) {
    // Prefer vowel indices (not first)
    for (let i = 1; i < letters.length; i++) {
      if (isVowel(letters[i])) candidateIndices.push(i);
    }
    // Fallback: any non-first index
    if (candidateIndices.length === 0) {
      for (let i = 1; i < letters.length; i++) candidateIndices.push(i);
    }
  } else {
    // Prefer non-first, non-last consonants (tricky middle letters)
    for (let i = 1; i < letters.length - 1; i++) {
      if (!isVowel(letters[i])) candidateIndices.push(i);
    }
    // Fallback: any non-first index
    if (candidateIndices.length === 0) {
      for (let i = 1; i < letters.length; i++) candidateIndices.push(i);
    }
  }

  const blankIdx = candidateIndices[Math.floor(Math.random() * candidateIndices.length)];
  const correctLetter = letters[blankIdx];
  const blankedDisplay = letters.map((l, i) => i === blankIdx ? '_' : l).join(' ');

  // Build 3 wrong letter choices
  let wrongPool;
  if (isVowel(correctLetter)) {
    wrongPool = 'AEIOU'.split('').filter(c => c !== correctLetter);
  } else {
    // Common consonants, not the correct one
    wrongPool = 'BCDFGHJKLMNPQRSTVWXYZ'.split('').filter(c => c !== correctLetter && !letters.includes(c));
    // If pool too small (word uses many consonants), relax the "not in word" constraint
    if (wrongPool.length < 3) {
      wrongPool = 'BCDFGHJKLMNPQRSTVWXYZ'.split('').filter(c => c !== correctLetter);
    }
  }
  fisherYates(wrongPool);
  const wrongLetters = wrongPool.slice(0, 3);

  const choices = fisherYates([correctLetter, ...wrongLetters]);

  return {
    question: blankedDisplay,
    answer: correctLetter,
    choices,
    format: 'A',
  };
}

// Generate a Format B question: choose the correct spelling from 4 options
function generateFormatB(word) {
  const correct = word.toUpperCase();
  const misspellings = [];
  const seen = new Set([correct]);

  const tryAdd = (c) => {
    if (c && c.length >= 2 && c !== correct && !seen.has(c)) {
      seen.add(c); misspellings.push(c); return true;
    }
    return false;
  };

  const w = correct;
  const n = w.length;

  // Strategy 1: Double the first letter — CCAT, SSUN, RROSE
  // No English word starts with a doubled letter. Guaranteed safe.
  tryAdd(w[0] + w);

  // Strategy 2: Reverse the inner letters (keep first + last, scramble middle)
  // e.g. WARM→WRAM, STAR→SATR, SHINE→SNIHE, GENTLE→GLTNEE
  // Always looks wrong; never a real word.
  if (n >= 4) {
    const inner = w.slice(1, n - 1).split('').reverse().join('');
    tryAdd(w[0] + inner + w[n - 1]);
  }

  // Strategy 3: Swap first and last characters — TAC, NUS, NOOM, EOSR
  if (w[0] !== w[n - 1]) {
    tryAdd(w[n - 1] + w.slice(1, n - 1) + w[0]);
  }

  // Strategy 4 (fallback): Swap positions 1 and 2 — SNU, CTA, RSOE
  if (misspellings.length < 3 && n >= 3 && w[1] !== w[2]) {
    tryAdd(w[0] + w[2] + w[1] + w.slice(3));
  }

  // Strategy 5 (last resort): Insert doubled first letter in the middle
  if (misspellings.length < 3) {
    const mid = Math.floor(n / 2);
    tryAdd(w.slice(0, mid) + w[0] + w.slice(mid));
  }

  const choices = fisherYates([correct, ...misspellings.slice(0, 3)]);

  return {
    question: 'Which is spelled correctly?',
    answer: correct,
    choices,
    format: 'B',
  };
}

// Main entry point: generate N spelling questions — each word used exactly once
// Always uses Format B (choose the correctly spelled word) — unambiguous for children.
function generateSpellingQuestions(words, count) {
  if (!words || words.length === 0) return [];

  const upper = fisherYates(words.map(w => w.toUpperCase()));
  const pool = upper.map(word => generateFormatB(word));

  // Pad if we need more questions than unique words
  let extra = 0;
  while (pool.length < count && extra < count * 2) {
    pool.push(generateFormatB(upper[extra % upper.length]));
    extra++;
  }

  return pool.slice(0, count);
}

// Fisher-Yates shuffle — unbiased, unlike .sort(() => Math.random() - 0.5)
function fisherYates(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Get a shuffled set of science questions for a world (5 questions per level session)
function getScienceQuestions(worldId, count) {
  const pool = SCIENCE_QUESTIONS[worldId] || [];
  return fisherYates(pool).slice(0, count).map(q => ({
    ...q,
    choices: fisherYates(q.choices)  // shuffle choices so correct answer isn't always first
  }));
}

// Helper: get a math/science world by id
function getMathWorld(worldId) {
  return MATH_WORLDS.find(w => w.id === worldId);
}

function getScienceWorld(worldId) {
  return SCIENCE_WORLDS.find(w => w.id === worldId);
}

// Helper: get a math/science level by id
function getMathLevel(levelId) {
  for (const w of MATH_WORLDS) {
    const level = w.levels.find(l => l.id === levelId);
    if (level) return { ...level, world: w };
  }
  return null;
}

function getScienceLevel(levelId) {
  for (const w of SCIENCE_WORLDS) {
    const level = w.levels.find(l => l.id === levelId);
    if (level) return { ...level, world: w };
  }
  return null;
}

const WORLDS = [
  {
    id: 1,
    name: 'Cozy Cottage',
    emoji: '🏡',
    theme: 'cottage',
    colors: {
      bg1: '#1e0812', bg2: '#3d1428',
      accent1: '#FFB5C8', accent2: '#FFF0F5', accent3: '#FFD6E7',
      card: 'rgba(255,182,200,0.15)',
      border: 'rgba(255,182,200,0.4)',
    },
    description: 'A warm and cozy cottage full of soft pillows and baking smells!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="w1-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e0812"/>
      <stop offset="100%" stop-color="#5a1a30"/>
    </linearGradient>
    <radialGradient id="w1-moon-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,220,200,0.25)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#w1-sky)"/>

  <!-- Warm moon -->
  <circle cx="960" cy="110" r="80" fill="url(#w1-moon-glow)"/>
  <circle cx="960" cy="110" r="44" fill="rgba(255,230,210,0.18)"/>
  <circle cx="960" cy="110" r="30" fill="rgba(255,210,180,0.22)"/>

  <!-- Soft warm stars -->
  <g fill="rgba(255,230,210,0.7)">
    <circle cx="80" cy="60" r="2.5"/>
    <circle cx="210" cy="40" r="1.8"/>
    <circle cx="340" cy="80" r="2.2"/>
    <circle cx="500" cy="30" r="2.0"/>
    <circle cx="640" cy="55" r="1.6"/>
    <circle cx="720" cy="25" r="2.4"/>
    <circle cx="820" cy="70" r="1.9"/>
    <circle cx="1050" cy="45" r="2.1"/>
    <circle cx="1150" cy="80" r="1.7"/>
    <circle cx="1220" cy="35" r="2.3"/>
    <circle cx="160" cy="130" r="1.5"/>
    <circle cx="440" cy="120" r="2.0"/>
    <circle cx="580" cy="100" r="1.6"/>
    <circle cx="1100" cy="140" r="1.8"/>
  </g>

  <!-- Warm pink clouds -->
  <g opacity="0.3">
    <!-- Cloud 1 left -->
    <ellipse cx="130" cy="200" rx="100" ry="48" fill="rgba(255,182,200,0.55)"/>
    <ellipse cx="90" cy="185" rx="60" ry="40" fill="rgba(255,200,215,0.5)"/>
    <ellipse cx="170" cy="185" rx="65" ry="38" fill="rgba(255,200,215,0.5)"/>
    <!-- Cloud 2 right -->
    <ellipse cx="1050" cy="150" rx="110" ry="50" fill="rgba(255,180,195,0.45)"/>
    <ellipse cx="1000" cy="135" rx="65" ry="40" fill="rgba(255,200,215,0.45)"/>
    <ellipse cx="1110" cy="138" rx="70" ry="38" fill="rgba(255,200,215,0.45)"/>
    <!-- Cloud 3 center-left -->
    <ellipse cx="400" cy="170" rx="85" ry="40" fill="rgba(255,195,210,0.35)"/>
    <ellipse cx="360" cy="157" rx="50" ry="33" fill="rgba(255,210,225,0.35)"/>
    <ellipse cx="445" cy="158" rx="55" ry="32" fill="rgba(255,210,225,0.35)"/>
  </g>

  <!-- Cozy cottage silhouette -->
  <g opacity="0.28" transform="translate(520, 430)">
    <!-- Main house body -->
    <rect x="30" y="120" width="180" height="130" rx="6" fill="#6B2D3A"/>
    <!-- Roof -->
    <polygon points="10,120 120,40 230,120" fill="#8B2040"/>
    <!-- Chimney -->
    <rect x="155" y="50" width="28" height="70" rx="3" fill="#5C1A2A"/>
    <!-- Smoke puffs -->
    <circle cx="169" cy="42" r="10" fill="rgba(255,200,180,0.3)"/>
    <circle cx="178" cy="30" r="8" fill="rgba(255,200,180,0.25)"/>
    <circle cx="163" cy="20" r="7" fill="rgba(255,200,180,0.2)"/>
    <!-- Door -->
    <rect x="95" y="175" width="50" height="75" rx="8" fill="#3D1020"/>
    <!-- Door knob -->
    <circle cx="140" cy="215" r="4" fill="rgba(255,215,0,0.6)"/>
    <!-- Windows -->
    <rect x="40" y="150" width="44" height="44" rx="5" fill="rgba(255,230,180,0.35)"/>
    <rect x="156" y="150" width="44" height="44" rx="5" fill="rgba(255,230,180,0.35)"/>
    <!-- Window cross-bars -->
    <line x1="62" y1="150" x2="62" y2="194" stroke="rgba(80,20,40,0.5)" stroke-width="2"/>
    <line x1="40" y1="172" x2="84" y2="172" stroke="rgba(80,20,40,0.5)" stroke-width="2"/>
    <line x1="178" y1="150" x2="178" y2="194" stroke="rgba(80,20,40,0.5)" stroke-width="2"/>
    <line x1="156" y1="172" x2="200" y2="172" stroke="rgba(80,20,40,0.5)" stroke-width="2"/>
    <!-- Ground/base -->
    <rect x="0" y="248" width="240" height="12" rx="4" fill="rgba(80,20,40,0.4)"/>
    <!-- Little garden bushes -->
    <ellipse cx="20" cy="250" rx="22" ry="14" fill="rgba(100,50,70,0.5)"/>
    <ellipse cx="220" cy="250" rx="22" ry="14" fill="rgba(100,50,70,0.5)"/>
  </g>

  <!-- Warm ground glow at bottom -->
  <rect x="0" y="720" width="1280" height="80" fill="rgba(80,20,40,0.3)" rx="0"/>
</svg>`,
    levels: [
      {
        id: '1-1',
        name: 'Boba\'s Garden',
        words: ['cat', 'sun', 'hug', 'fun', 'big'],
        character: 'boba',
        unlocks: 'boba',
        stars: 0,
      },
      {
        id: '1-2',
        name: 'Mochi\'s Nap',
        words: ['soft', 'cozy', 'warm', 'cute', 'pink'],
        character: 'mochi',
        unlocks: 'mochi',
        stars: 0,
      },
      {
        id: '1-3',
        name: 'Coco\'s Tea Party',
        words: ['bunny', 'happy', 'sweet', 'fluffy'],
        character: 'coco',
        unlocks: 'coco',
        stars: 0,
        isBoss: true,
      }
    ]
  },

  {
    id: 2,
    name: 'Enchanted Garden',
    emoji: '🌸',
    theme: 'garden',
    colors: {
      bg1: '#071a12', bg2: '#0e3020',
      accent1: '#B5EAD7', accent2: '#C7CEEA', accent3: '#E2F0CB',
      card: 'rgba(181,234,215,0.15)',
      border: 'rgba(181,234,215,0.4)',
    },
    description: 'A magical garden where flowers sing and butterflies carry wishes!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="w2-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#071a12"/>
      <stop offset="100%" stop-color="#1a4530"/>
    </linearGradient>
    <radialGradient id="w2-lantern1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(181,234,215,0.4)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <radialGradient id="w2-lantern2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(226,240,203,0.35)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <radialGradient id="w2-moon" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(200,240,220,0.3)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#w2-sky)"/>

  <!-- Soft moon -->
  <circle cx="200" cy="100" r="90" fill="url(#w2-moon)"/>
  <circle cx="200" cy="100" r="50" fill="rgba(200,240,200,0.15)"/>
  <circle cx="200" cy="100" r="32" fill="rgba(180,230,200,0.18)"/>

  <!-- Floating lanterns -->
  <g opacity="0.55">
    <!-- Lantern 1 -->
    <circle cx="320" cy="200" r="36" fill="url(#w2-lantern1)"/>
    <rect x="306" y="188" width="28" height="20" rx="5" fill="rgba(181,234,215,0.5)"/>
    <line x1="320" y1="208" x2="320" y2="220" stroke="rgba(181,234,215,0.4)" stroke-width="1.5"/>
    <!-- Lantern 2 -->
    <circle cx="900" cy="170" r="30" fill="url(#w2-lantern2)"/>
    <rect x="888" y="160" width="24" height="18" rx="4" fill="rgba(226,240,203,0.45)"/>
    <line x1="900" y1="178" x2="900" y2="188" stroke="rgba(226,240,203,0.4)" stroke-width="1.5"/>
    <!-- Lantern 3 -->
    <circle cx="640" cy="140" r="25" fill="url(#w2-lantern1)"/>
    <rect x="630" y="132" width="20" height="14" rx="3" fill="rgba(181,234,215,0.4)"/>
  </g>

  <!-- Fireflies (glowing dots scattered) -->
  <g>
    <circle cx="150" cy="450" r="3.5" fill="rgba(181,234,215,0.9)"/>
    <circle cx="150" cy="450" r="8" fill="rgba(181,234,215,0.2)"/>
    <circle cx="380" cy="380" r="3" fill="rgba(226,240,203,0.9)"/>
    <circle cx="380" cy="380" r="7" fill="rgba(226,240,203,0.2)"/>
    <circle cx="520" cy="500" r="3.5" fill="rgba(181,234,215,0.9)"/>
    <circle cx="520" cy="500" r="8" fill="rgba(181,234,215,0.2)"/>
    <circle cx="700" cy="420" r="3" fill="rgba(199,206,234,0.9)"/>
    <circle cx="700" cy="420" r="7" fill="rgba(199,206,234,0.2)"/>
    <circle cx="860" cy="350" r="4" fill="rgba(226,240,203,0.9)"/>
    <circle cx="860" cy="350" r="9" fill="rgba(226,240,203,0.2)"/>
    <circle cx="1050" cy="480" r="3.5" fill="rgba(181,234,215,0.9)"/>
    <circle cx="1050" cy="480" r="8" fill="rgba(181,234,215,0.2)"/>
    <circle cx="1180" cy="400" r="3" fill="rgba(226,240,203,0.85)"/>
    <circle cx="1180" cy="400" r="7" fill="rgba(226,240,203,0.2)"/>
    <circle cx="260" cy="540" r="2.5" fill="rgba(181,234,215,0.8)"/>
    <circle cx="260" cy="540" r="6" fill="rgba(181,234,215,0.2)"/>
    <circle cx="950" cy="560" r="3" fill="rgba(199,206,234,0.85)"/>
    <circle cx="950" cy="560" r="7" fill="rgba(199,206,234,0.2)"/>
  </g>

  <!-- Flower silhouettes at bottom -->
  <g opacity="0.35">
    <!-- Stems -->
    <line x1="60" y1="800" x2="60" y2="680" stroke="#1a4530" stroke-width="4"/>
    <line x1="140" y1="800" x2="140" y2="700" stroke="#1a4530" stroke-width="3.5"/>
    <line x1="240" y1="800" x2="240" y2="660" stroke="#1a4530" stroke-width="5"/>
    <line x1="350" y1="800" x2="350" y2="710" stroke="#1a4530" stroke-width="3"/>
    <line x1="1050" y1="800" x2="1050" y2="690" stroke="#1a4530" stroke-width="4"/>
    <line x1="1140" y1="800" x2="1140" y2="670" stroke="#1a4530" stroke-width="3.5"/>
    <line x1="1230" y1="800" x2="1230" y2="700" stroke="#1a4530" stroke-width="5"/>
    <!-- Leaves -->
    <ellipse cx="48" cy="730" rx="20" ry="10" fill="#1a4530" transform="rotate(-30,48,730)"/>
    <ellipse cx="72" cy="720" rx="18" ry="9" fill="#1a4530" transform="rotate(25,72,720)"/>
    <ellipse cx="228" cy="710" rx="22" ry="10" fill="#1a4530" transform="rotate(-25,228,710)"/>
    <ellipse cx="252" cy="700" rx="18" ry="9" fill="#1a4530" transform="rotate(30,252,700)"/>
    <!-- Flower heads — various styles -->
    <!-- Flower at 60: round clustered petals -->
    <circle cx="60" cy="665" r="18" fill="#B5EAD7"/>
    <circle cx="42" cy="655" r="12" fill="#B5EAD7"/>
    <circle cx="78" cy="655" r="12" fill="#B5EAD7"/>
    <circle cx="60" cy="648" r="12" fill="#B5EAD7"/>
    <circle cx="60" cy="663" r="8" fill="rgba(255,215,0,0.7)"/>
    <!-- Flower at 140: daisy style -->
    <circle cx="140" cy="690" r="14" fill="#C7CEEA"/>
    <circle cx="125" cy="680" r="9" fill="#C7CEEA"/>
    <circle cx="155" cy="680" r="9" fill="#C7CEEA"/>
    <circle cx="140" cy="675" r="9" fill="#C7CEEA"/>
    <circle cx="140" cy="690" r="6" fill="rgba(255,215,0,0.6)"/>
    <!-- Flower at 240: bigger -->
    <circle cx="240" cy="648" r="22" fill="#E2F0CB"/>
    <circle cx="218" cy="636" r="15" fill="#E2F0CB"/>
    <circle cx="262" cy="636" r="15" fill="#E2F0CB"/>
    <circle cx="240" cy="628" r="15" fill="#E2F0CB"/>
    <circle cx="240" cy="645" r="10" fill="rgba(255,215,0,0.65)"/>
    <!-- Flower at 350 -->
    <circle cx="350" cy="700" r="14" fill="#B5EAD7"/>
    <circle cx="336" cy="690" r="9" fill="#B5EAD7"/>
    <circle cx="364" cy="690" r="9" fill="#B5EAD7"/>
    <circle cx="350" cy="684" r="9" fill="#B5EAD7"/>
    <circle cx="350" cy="700" r="6" fill="rgba(255,215,0,0.6)"/>
    <!-- Right side flowers -->
    <circle cx="1050" cy="678" r="18" fill="#C7CEEA"/>
    <circle cx="1032" cy="668" r="12" fill="#C7CEEA"/>
    <circle cx="1068" cy="668" r="12" fill="#C7CEEA"/>
    <circle cx="1050" cy="661" r="12" fill="#C7CEEA"/>
    <circle cx="1050" cy="676" r="8" fill="rgba(255,215,0,0.65)"/>
    <circle cx="1140" cy="658" r="22" fill="#B5EAD7"/>
    <circle cx="1118" cy="646" r="15" fill="#B5EAD7"/>
    <circle cx="1162" cy="646" r="15" fill="#B5EAD7"/>
    <circle cx="1140" cy="638" r="15" fill="#B5EAD7"/>
    <circle cx="1140" cy="656" r="10" fill="rgba(255,215,0,0.65)"/>
    <circle cx="1230" cy="688" r="14" fill="#E2F0CB"/>
    <circle cx="1216" cy="678" r="9" fill="#E2F0CB"/>
    <circle cx="1244" cy="678" r="9" fill="#E2F0CB"/>
    <circle cx="1230" cy="672" r="9" fill="#E2F0CB"/>
    <circle cx="1230" cy="688" r="6" fill="rgba(255,215,0,0.6)"/>
    <!-- Ground line -->
    <rect x="0" y="780" width="1280" height="20" rx="0" fill="rgba(20,60,35,0.5)"/>
  </g>
</svg>`,
    levels: [
      {
        id: '2-1',
        name: 'Nori\'s Path',
        words: ['leaf', 'rose', 'mint', 'bloom', 'grow'],
        character: 'nori',
        unlocks: 'nori',
        stars: 0,
      },
      {
        id: '2-2',
        name: 'Zara\'s Rainbow',
        words: ['magic', 'spark', 'dream', 'light', 'cloud'],
        character: 'zara',
        unlocks: 'zara',
        stars: 0,
      },
      {
        id: '2-3',
        name: 'Puffy\'s Kingdom',
        words: ['garden', 'flower', 'sparkle', 'magical'],
        character: 'puffy',
        unlocks: 'puffy',
        stars: 0,
        isBoss: true,
      }
    ]
  },

  {
    id: 3,
    name: 'Starlight Sky',
    emoji: '🌙',
    theme: 'space',
    colors: {
      bg1: '#050820', bg2: '#1a0a3d',
      accent1: '#9B5DE5', accent2: '#F15BB5', accent3: '#FEE440',
      card: 'rgba(155,93,229,0.15)',
      border: 'rgba(155,93,229,0.4)',
    },
    description: 'Float among the stars with the most magical squishees of all!',
    bgElements: `<svg viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <defs>
    <linearGradient id="w3-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050820"/>
      <stop offset="100%" stop-color="#1a0a3d"/>
    </linearGradient>
    <radialGradient id="w3-moon-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(254,228,64,0.35)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(155,93,229,0)" />
      <stop offset="30%" stop-color="rgba(93,232,232,0.18)" />
      <stop offset="60%" stop-color="rgba(155,93,229,0.22)" />
      <stop offset="100%" stop-color="rgba(241,91,181,0)" />
    </linearGradient>
    <linearGradient id="aurora2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(93,232,232,0)" />
      <stop offset="40%" stop-color="rgba(241,91,181,0.15)" />
      <stop offset="70%" stop-color="rgba(93,232,232,0.18)" />
      <stop offset="100%" stop-color="rgba(155,93,229,0)" />
    </linearGradient>
    <linearGradient id="aurora3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(254,228,64,0)" />
      <stop offset="35%" stop-color="rgba(155,93,229,0.12)" />
      <stop offset="65%" stop-color="rgba(254,228,64,0.1)" />
      <stop offset="100%" stop-color="rgba(93,232,232,0)" />
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#w3-sky)"/>

  <!-- Aurora borealis bands -->
  <ellipse cx="640" cy="180" rx="750" ry="90" fill="url(#aurora1)" opacity="0.9"/>
  <ellipse cx="640" cy="240" rx="700" ry="75" fill="url(#aurora2)" opacity="0.85"/>
  <ellipse cx="640" cy="290" rx="680" ry="60" fill="url(#aurora3)" opacity="0.8"/>
  <ellipse cx="640" cy="330" rx="620" ry="48" fill="url(#aurora1)" opacity="0.6"/>

  <!-- Large soft moon -->
  <circle cx="1080" cy="130" r="120" fill="url(#w3-moon-glow)"/>
  <circle cx="1080" cy="130" r="68" fill="rgba(254,228,64,0.15)"/>
  <circle cx="1080" cy="130" r="48" fill="rgba(255,235,100,0.18)"/>
  <circle cx="1080" cy="130" r="34" fill="rgba(255,240,130,0.2)"/>

  <!-- Many twinkling stars — various sizes -->
  <g fill="white">
    <circle cx="40"  cy="35"  r="1.8" opacity="0.9"/>
    <circle cx="110" cy="18"  r="2.5" opacity="0.85"/>
    <circle cx="180" cy="55"  r="1.4" opacity="0.8"/>
    <circle cx="240" cy="25"  r="2.2" opacity="0.9"/>
    <circle cx="310" cy="60"  r="1.6" opacity="0.75"/>
    <circle cx="390" cy="20"  r="2.0" opacity="0.88"/>
    <circle cx="450" cy="50"  r="1.3" opacity="0.8"/>
    <circle cx="520" cy="30"  r="2.4" opacity="0.9"/>
    <circle cx="590" cy="70"  r="1.7" opacity="0.75"/>
    <circle cx="660" cy="15"  r="2.1" opacity="0.85"/>
    <circle cx="730" cy="45"  r="1.5" opacity="0.78"/>
    <circle cx="800" cy="28"  r="2.3" opacity="0.9"/>
    <circle cx="860" cy="65"  r="1.6" opacity="0.8"/>
    <circle cx="930" cy="22"  r="1.9" opacity="0.85"/>
    <circle cx="1000" cy="55" r="1.4" opacity="0.75"/>
    <circle cx="1140" cy="48" r="2.0" opacity="0.8"/>
    <circle cx="1200" cy="20" r="2.5" opacity="0.9"/>
    <circle cx="1250" cy="65" r="1.6" opacity="0.78"/>
    <!-- Second row -->
    <circle cx="70"  cy="110" r="1.9" opacity="0.75"/>
    <circle cx="150" cy="130" r="1.4" opacity="0.8"/>
    <circle cx="280" cy="120" r="2.0" opacity="0.85"/>
    <circle cx="420" cy="140" r="1.6" opacity="0.78"/>
    <circle cx="560" cy="115" r="2.2" opacity="0.88"/>
    <circle cx="680" cy="145" r="1.5" opacity="0.75"/>
    <circle cx="760" cy="105" r="1.8" opacity="0.8"/>
    <circle cx="930" cy="120" r="1.4" opacity="0.78"/>
    <circle cx="1160" cy="115" r="2.0" opacity="0.82"/>
    <circle cx="1240" cy="130" r="1.6" opacity="0.75"/>
    <!-- Third row -->
    <circle cx="30"  cy="200" r="1.5" opacity="0.7"/>
    <circle cx="200" cy="210" r="2.0" opacity="0.78"/>
    <circle cx="340" cy="195" r="1.4" opacity="0.72"/>
    <circle cx="480" cy="220" r="1.8" opacity="0.75"/>
    <circle cx="615" cy="200" r="1.3" opacity="0.7"/>
    <circle cx="740" cy="215" r="2.1" opacity="0.78"/>
    <circle cx="1000" cy="200" r="1.5" opacity="0.72"/>
    <circle cx="1190" cy="210" r="1.7" opacity="0.75"/>
    <!-- Scattered larger accent stars -->
    <circle cx="155" cy="78"  r="3.2" opacity="0.95"/>
    <circle cx="475" cy="38"  r="3.0" opacity="0.92"/>
    <circle cx="640" cy="88"  r="2.8" opacity="0.9"/>
    <circle cx="910" cy="42"  r="3.1" opacity="0.93"/>
    <circle cx="1210" cy="85" r="2.9" opacity="0.9"/>
  </g>

  <!-- Star sparkle cross-hairs on a few bright ones -->
  <g stroke="rgba(255,255,255,0.6)" stroke-width="1">
    <line x1="155" y1="70" x2="155" y2="86"/>
    <line x1="147" y1="78" x2="163" y2="78"/>
    <line x1="475" y1="30" x2="475" y2="46"/>
    <line x1="467" y1="38" x2="483" y2="38"/>
    <line x1="910" y1="34" x2="910" y2="50"/>
    <line x1="902" y1="42" x2="918" y2="42"/>
  </g>

  <!-- Purple/indigo nebula clouds -->
  <ellipse cx="200" cy="380" rx="200" ry="80" fill="rgba(155,93,229,0.06)" opacity="1"/>
  <ellipse cx="1100" cy="450" rx="180" ry="70" fill="rgba(93,232,232,0.05)" opacity="1"/>
  <ellipse cx="640" cy="500" rx="280" ry="90" fill="rgba(241,91,181,0.04)" opacity="1"/>
</svg>`,
    levels: [
      {
        id: '3-1',
        name: 'Luna\'s Moon Walk',
        words: ['moon', 'star', 'glow', 'night', 'shine'],
        character: 'luna',
        unlocks: 'luna',
        stars: 0,
      },
      {
        id: '3-2',
        name: 'Sunny\'s Sunrise',
        words: ['sunny', 'bright', 'golden', 'warmth'],
        character: 'sunny',
        unlocks: 'sunny',
        stars: 0,
      },
      {
        id: '3-3',
        name: 'Pearl\'s Ocean Sky',
        words: ['pearl', 'ocean', 'silver', 'gentle'],
        character: 'pearl',
        unlocks: 'pearl',
        stars: 0,
      },
      {
        id: '3-4',
        name: 'Fizz\'s Final Dance',
        words: ['rainbow', 'sparkle', 'squishee', 'adventure'],
        character: 'fizz',
        unlocks: 'fizz',
        stars: 0,
        isBoss: true,
        isFinal: true,
      }
    ]
  }
];

// Flatten all levels for easy lookup
function getAllLevels() {
  return WORLDS.flatMap(w => w.levels.map(l => ({ ...l, world: w })));
}

function getLevel(levelId) {
  for (const w of WORLDS) {
    const level = w.levels.find(l => l.id === levelId);
    if (level) return { ...level, world: w };
  }
  for (const w of MATH_WORLDS) {
    const level = w.levels.find(l => l.id === levelId);
    if (level) return { ...level, world: w };
  }
  for (const w of SCIENCE_WORLDS) {
    const level = w.levels.find(l => l.id === levelId);
    if (level) return { ...level, world: w };
  }
  return null;
}

function getWorld(worldId) {
  // Support both numeric and string IDs (spelling worlds use numbers)
  const id = (typeof worldId === 'string' && /^\d+$/.test(worldId)) ? parseInt(worldId) : worldId;
  return WORLDS.find(w => w.id === id || w.id === worldId)
    || MATH_WORLDS.find(w => w.id === worldId)
    || SCIENCE_WORLDS.find(w => w.id === worldId)
    || null;
}

// Star rating logic
function computeStars(wrongPresses, wordCount) {
  if (wrongPresses === 0) return 3;
  if (wrongPresses <= wordCount) return 2;
  return 1;
}
