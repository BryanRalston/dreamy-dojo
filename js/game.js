// game.js — Main game engine for Dreamy Dojo

// ─── Save / Load ────────────────────────────────────────────────────────────
const SAVE_KEY = 'dreamy-dojo-save';

function defaultSave() {
  return {
    playerName: '',
    unlockedCharacters: ['boba'],
    levelProgress: {}, // { '1-1': { stars: 3 } }
    soundEnabled: true,
    totalStars: 0,
    coins: 0,
    house: {
      wallpaper: 'wp-pink-floral',
      flooring: 'fl-wood',
      ownedItems: ['wp-pink-floral', 'fl-wood'],
      placedItems: [],
    },
    stats: {
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      bySubject: {
        spelling: { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 },
        math:     { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 },
        science:  { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 },
      },
      longestStreak: 0,
      totalLevelsCompleted: 0,
      daysPlayed: [],       // array of 'YYYY-MM-DD' strings
      currentDayStreak: 0,
      lastPlayedDate: null, // 'YYYY-MM-DD'
      totalCoinsEarned: 0,
    },
    achievements: [],       // array of achievement IDs that have been earned
    rank: 'Sprout',
  };
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return { ...defaultSave(), ...JSON.parse(raw) };
  } catch (e) {}
  return defaultSave();
}

function writeSave(save) {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {}
}

// ─── Game State ──────────────────────────────────────────────────────────────
const STATE = {
  HOME: 'HOME',
  NAME_ENTRY: 'NAME_ENTRY',
  GAME_TYPE_SELECT: 'GAME_TYPE_SELECT',
  WORLD_SELECT: 'WORLD_SELECT',
  LEVEL_SELECT: 'LEVEL_SELECT',
  PLAYING: 'PLAYING',
  WORD_COMPLETE: 'WORD_COMPLETE',
  LEVEL_COMPLETE: 'LEVEL_COMPLETE',
  UNLOCK: 'UNLOCK',
  COLLECTION: 'COLLECTION',
  CHARACTER_DETAIL: 'CHARACTER_DETAIL',
  PROGRESS: 'PROGRESS',
};

let gameState = STATE.HOME;
let save = loadSave();

// ─── Achievements ─────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  // First Steps
  { id: 'first-spell',   title: 'First Spell!',           desc: 'Complete your first Spelling level',  icon: '✏️',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.spelling.levelsCompleted >= 1 },
  { id: 'first-math',    title: 'Math Starter!',           desc: 'Complete your first Math level',      icon: '➕',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.math.levelsCompleted >= 1 },
  { id: 'first-science', title: 'Science Explorer!',       desc: 'Complete your first Science level',   icon: '🔬',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.science.levelsCompleted >= 1 },
  { id: 'all-subjects',  title: 'All-Rounder!',            desc: 'Try all three subjects',              icon: '🌟',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.spelling.levelsCompleted >= 1 && s.stats.bySubject.math.levelsCompleted >= 1 && s.stats.bySubject.science.levelsCompleted >= 1 },

  // Stars
  { id: 'stars-10',   title: 'Star Collector',   desc: 'Earn 10 stars',    icon: '⭐',  condition: s => s.totalStars >= 10 },
  { id: 'stars-25',   title: 'Star Hoarder',     desc: 'Earn 25 stars',    icon: '🌟',  condition: s => s.totalStars >= 25 },
  { id: 'stars-50',   title: 'Star Seeker',      desc: 'Earn 50 stars',    icon: '💫',  condition: s => s.totalStars >= 50 },
  { id: 'stars-100',  title: 'Shooting Star',    desc: 'Earn 100 stars',   icon: '🌠',  condition: s => s.totalStars >= 100 },
  { id: 'stars-200',  title: 'Galaxy Brain',     desc: 'Earn 200 stars',   icon: '🔭',  condition: s => s.totalStars >= 200 },

  // Perfect levels
  { id: 'perfect-1',  title: 'Perfectionist',        desc: 'Get 3 stars on a level',        icon: '💎',  condition: s => (s.stats||{}).bySubject && (s.stats.bySubject.spelling.perfectLevels + s.stats.bySubject.math.perfectLevels + s.stats.bySubject.science.perfectLevels) >= 1 },
  { id: 'perfect-5',  title: 'Gold Star Getter',     desc: 'Get 3 stars on 5 levels',       icon: '🏅',  condition: s => (s.stats||{}).bySubject && (s.stats.bySubject.spelling.perfectLevels + s.stats.bySubject.math.perfectLevels + s.stats.bySubject.science.perfectLevels) >= 5 },
  { id: 'perfect-20', title: 'Master of Perfection', desc: 'Get 3 stars on 20 levels',      icon: '🥇',  condition: s => (s.stats||{}).bySubject && (s.stats.bySubject.spelling.perfectLevels + s.stats.bySubject.math.perfectLevels + s.stats.bySubject.science.perfectLevels) >= 20 },

  // Streaks
  { id: 'streak-3',  title: 'On Fire!',        desc: 'Get a 3-answer streak',   icon: '🔥',  condition: s => (s.stats||{}).longestStreak >= 3 },
  { id: 'streak-5',  title: 'Blazing!',        desc: 'Get a 5-answer streak',   icon: '🌋',  condition: s => (s.stats||{}).longestStreak >= 5 },
  { id: 'streak-10', title: 'Unstoppable!',    desc: 'Get a 10-answer streak',  icon: '⚡',  condition: s => (s.stats||{}).longestStreak >= 10 },

  // Questions answered
  { id: 'questions-25',  title: 'Curious Learner',  desc: 'Answer 25 questions',    icon: '📚',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 25 },
  { id: 'questions-100', title: 'Knowledge Seeker', desc: 'Answer 100 questions',   icon: '📖',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 100 },
  { id: 'questions-250', title: 'Brain Power',      desc: 'Answer 250 questions',   icon: '🧠',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 250 },
  { id: 'questions-500', title: 'Mega Mind',        desc: 'Answer 500 questions',   icon: '🤯',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 500 },

  // Accuracy
  { id: 'accuracy-80', title: 'Sharp Thinker',  desc: 'Reach 80% overall accuracy',   icon: '🎯',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 20 && (s.stats.totalCorrect / s.stats.totalQuestionsAnswered) >= 0.8 },
  { id: 'accuracy-90', title: 'Super Smart',    desc: 'Reach 90% overall accuracy',   icon: '🧩',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 30 && (s.stats.totalCorrect / s.stats.totalQuestionsAnswered) >= 0.9 },
  { id: 'accuracy-95', title: 'Genius!',        desc: 'Reach 95% overall accuracy',   icon: '👑',  condition: s => (s.stats||{}).totalQuestionsAnswered >= 50 && (s.stats.totalCorrect / s.stats.totalQuestionsAnswered) >= 0.95 },

  // Daily streak
  { id: 'daily-2',  title: 'Coming Back!',    desc: 'Play 2 days in a row',    icon: '📅',  condition: s => (s.stats||{}).currentDayStreak >= 2 },
  { id: 'daily-7',  title: 'Week Warrior',    desc: 'Play 7 days in a row',    icon: '🗓️',  condition: s => (s.stats||{}).currentDayStreak >= 7 },
  { id: 'daily-14', title: 'Dedicated Dojo',  desc: 'Play 14 days in a row',   icon: '🏯',  condition: s => (s.stats||{}).currentDayStreak >= 14 },
  { id: 'daily-30', title: 'Dojo Legend',     desc: 'Play 30 days in a row',   icon: '🐉',  condition: s => (s.stats||{}).currentDayStreak >= 30 },

  // Subject mastery
  { id: 'spell-master',   title: 'Spelling Champion', desc: 'Complete 10 Spelling levels',  icon: '📝',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.spelling.levelsCompleted >= 10 },
  { id: 'math-master',    title: 'Math Champion',     desc: 'Complete 10 Math levels',       icon: '🔢',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.math.levelsCompleted >= 10 },
  { id: 'science-master', title: 'Science Champion',  desc: 'Complete 10 Science levels',    icon: '🧪',  condition: s => (s.stats||{}).bySubject && s.stats.bySubject.science.levelsCompleted >= 10 },

  // Coins
  { id: 'coins-100',  title: 'Coin Collector',  desc: 'Earn 100 total coins',   icon: '🪙',  condition: s => ((s.stats||{}).totalCoinsEarned || 0) >= 100 },
  { id: 'coins-500',  title: 'Coin Hoarder',    desc: 'Earn 500 total coins',   icon: '💰',  condition: s => ((s.stats||{}).totalCoinsEarned || 0) >= 500 },

  // Levels
  { id: 'levels-10',  title: 'Level Up!',     desc: 'Complete 10 levels total',    icon: '🎮',  condition: s => (s.stats||{}).totalLevelsCompleted >= 10 },
  { id: 'levels-25',  title: 'Level Chaser',  desc: 'Complete 25 levels total',    icon: '🏃',  condition: s => (s.stats||{}).totalLevelsCompleted >= 25 },
  { id: 'levels-50',  title: 'Level Crusher', desc: 'Complete 50 levels total',    icon: '💪',  condition: s => (s.stats||{}).totalLevelsCompleted >= 50 },
];

// ─── Rank System ──────────────────────────────────────────────────────────────
const RANKS = [
  { min: 0,   title: 'Sprout',        icon: '🌱', color: '#90EE90' },
  { min: 10,  title: 'Star Seeker',   icon: '⭐', color: '#FFD700' },
  { min: 30,  title: 'Rising Star',   icon: '🌟', color: '#FFA500' },
  { min: 60,  title: 'Dojo Student',  icon: '💫', color: '#FF85A1' },
  { min: 100, title: 'Dojo Scholar',  icon: '🔥', color: '#FF6B35' },
  { min: 150, title: 'Dojo Expert',   icon: '🎯', color: '#C77DFF' },
  { min: 200, title: 'Dojo Champion', icon: '🏆', color: '#FFD700' },
  { min: 300, title: 'Dojo Master',   icon: '👑', color: '#FF4DA6' },
];

function getRank(totalStars) {
  let rank = RANKS[0];
  for (const r of RANKS) {
    if (totalStars >= r.min) rank = r;
  }
  return rank;
}

function checkAchievements() {
  if (!save.achievements) save.achievements = [];
  const newly = [];
  for (const ach of ACHIEVEMENTS) {
    if (!save.achievements.includes(ach.id) && ach.condition(save)) {
      save.achievements.push(ach.id);
      newly.push(ach);
    }
  }
  if (newly.length) {
    writeSave(save);
    newly.forEach(ach => showAchievementPopup(ach));
  }
}

function showAchievementPopup(ach) {
  const el = document.createElement('div');
  el.className = 'achievement-popup';
  el.innerHTML = `
    <div class="ach-pop-icon">${ach.icon}</div>
    <div class="ach-pop-text">
      <div class="ach-pop-label">Achievement Unlocked!</div>
      <div class="ach-pop-title">${ach.title}</div>
      <div class="ach-pop-desc">${ach.desc}</div>
    </div>
  `;
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add('ach-pop-visible'));
  });

  setTimeout(() => {
    el.classList.remove('ach-pop-visible');
    setTimeout(() => el.remove(), 400);
  }, 3500);
}

function checkDailyStreak() {
  if (!save.stats) save.stats = defaultSave().stats;
  const today = new Date().toISOString().slice(0, 10);
  if (save.stats.lastPlayedDate === today) return; // already counted today

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (save.stats.lastPlayedDate === yesterday) {
    save.stats.currentDayStreak++;
  } else {
    save.stats.currentDayStreak = 1; // reset streak but count today
  }

  save.stats.lastPlayedDate = today;
  if (!save.stats.daysPlayed.includes(today)) {
    save.stats.daysPlayed.push(today);
  }

  // Bonus coins for daily streak milestones
  const streak = save.stats.currentDayStreak;
  const bonus = streak >= 7 ? 20 : streak >= 3 ? 10 : 5;
  if (streak > 1) {
    awardCoins(bonus);
    showDayStreakToast(streak, bonus);
  }

  writeSave(save);
  checkAchievements();
}

function showDayStreakToast(streak, bonus) {
  const el = document.createElement('div');
  el.className = 'day-streak-toast';
  el.innerHTML = `📅 Day ${streak} streak! +${bonus} 🪙`;
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add('toast-visible'));
  });
  setTimeout(() => {
    el.classList.remove('toast-visible');
    setTimeout(() => el.remove(), 400);
  }, 2800);
}

// Current play session
let session = {
  world: null,
  level: null,
  words: [],
  wordIndex: 0,
  letterIndex: 0,
  wrongThisLetter: 0,
  wrongThisLevel: 0,
  hearts: 3,
  score: 0,
  startTime: 0,
  // Game type extensions
  gameType: 'spelling',   // 'spelling' | 'math' | 'science'
  questions: [],          // for math/science MCQ
  currentQuestionIdx: 0,
  wrongAnswers: 0,        // for star calculation in MCQ modes
};

// Word streak state
let wordStreak = 0;
let levelBestStreak = 0; // highest streak reached this level (for end screen)

// ─── Transition Screens ───────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  gameState = STATE[id.toUpperCase().replace(/-/g, '_')] || id;
}

// ─── DOM Helpers ─────────────────────────────────────────────────────────────
function q(sel) { return document.querySelector(sel); }
function qAll(sel) { return document.querySelectorAll(sel); }
function make(tag, cls, html) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

// renderCharacter and renderCharacterSilhouette are defined in characters.js
// (image-aware versions that fall back to SVG)

// ─── Home Screen ─────────────────────────────────────────────────────────────
function showHome() {
  showScreen('home');
  checkDailyStreak();
  buildHome();
  if (save.soundEnabled) {
    audio.init();
    audio.startHomeMusic();
  }
}

function buildHome() {
  const homeEl = q('#screen-home');
  const rank = getRank(save.totalStars || 0);
  const stats = save.stats || {};
  const dayStreak = stats.currentDayStreak || 0;
  const dayStreakHTML = dayStreak > 1
    ? `<div class="home-day-streak">📅 ${dayStreak}-day streak!</div>`
    : '';

  homeEl.innerHTML = `
    <div class="home-bg-chars" id="home-bg-chars"></div>
    <div class="home-content">
      <div class="home-greeting" id="home-greeting"></div>
      <div class="home-logo-wrap">
        <img src="images/logo.png" alt="Dreamy Dojo" class="home-logo">
      </div>
      <p class="home-tagline">Learn and play with your squishy friends!</p>
      <div class="home-buttons">
        <button class="btn-play" id="btn-play" onclick="onPlay()">
          <span>✨ Play</span>
        </button>
        <button class="btn-collection" id="btn-collection" onclick="showCollection()">
          <span>🧸 My Collection</span>
        </button>
        <button class="btn-cottage" id="btn-cottage" onclick="showHouse()">
          <span>🏠 My Cottage</span>
        </button>
        <button class="btn-progress" id="btn-progress" onclick="showProgress()">
          <span>🏆 My Progress</span>
        </button>
      </div>
      <div class="home-stats-row">
        <div class="home-rank-display" style="color:${rank.color}">
          ${rank.icon} <span class="home-rank-title">${rank.title}</span>
        </div>
        <div class="home-stars-display">
          <span class="star-icon">⭐</span>
          <span id="home-star-count">${save.totalStars}</span>
        </div>
        <div class="home-coins-display coin-display">
          🪙 ${save.coins || 0}
        </div>
      </div>
      ${dayStreakHTML}
    </div>
    <button class="sound-toggle" id="sound-toggle" onclick="toggleSound()" title="Toggle sound">
      ${save.soundEnabled ? '🔊' : '🔇'}
    </button>
  `;

  // Greeting
  if (save.playerName) {
    q('#home-greeting').textContent = `Hi ${save.playerName}! 🌟`;
  }

  // Floating bubbles — character bubbles for unlocked chars + decorative glass bubbles to fill the rest
  const bgChars = q('#home-bg-chars');
  const unlocked = save.unlockedCharacters;

  // Main positions — always all shown; unlocked chars fill from the top, rest are glass-only bubbles
  const positions = [
    { left: '4%',  top: '8%',   size: 130, delay: 0,    dur: 3.2 },
    { left: '74%', top: '5%',   size: 155, delay: -1.4,  dur: 3.7 },
    { left: '82%', top: '52%',  size: 112, delay: -2.1,  dur: 2.9 },
    { left: '2%',  top: '57%',  size: 148, delay: -0.8,  dur: 3.5 },
    { left: '40%', top: '2%',   size: 88,  delay: -1.9,  dur: 4.0 },
    { left: '57%', top: '66%',  size: 118, delay: -0.5,  dur: 3.3 },
    { left: '20%', top: '74%',  size: 96,  delay: -2.7,  dur: 2.8 },
    { left: '88%', top: '26%',  size: 102, delay: -1.2,  dur: 3.9 },
  ];

  // Tiny ambient bubbles — purely decorative, scattered for depth
  const ambientBubbles = [
    { left: '62%', top: '18%',  size: 44, delay: -0.6,  dur: 5.1 },
    { left: '14%', top: '42%',  size: 38, delay: -2.2,  dur: 4.6 },
    { left: '50%', top: '82%',  size: 52, delay: -1.1,  dur: 4.8 },
    { left: '92%', top: '72%',  size: 34, delay: -3.0,  dur: 5.5 },
    { left: '30%', top: '14%',  size: 42, delay: -0.3,  dur: 4.3 },
    { left: '70%', top: '84%',  size: 36, delay: -1.8,  dur: 5.0 },
  ];

  // All 10 character IDs in roster order
  const ALL_IDS = (typeof CharacterImages !== 'undefined') ? CharacterImages.IDS
    : ['boba','mochi','coco','nori','zara','puffy','luna','sunny','pearl','fizz'];

  // Shuffle the locked IDs so it varies each visit, keep unlocked at front
  const lockedIds = ALL_IDS.filter(id => !unlocked.includes(id));
  for (let i = lockedIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lockedIds[i], lockedIds[j]] = [lockedIds[j], lockedIds[i]];
  }

  // Build the display list: unlocked chars first, then locked (silhouette) to fill all 8 slots
  const displayIds = [...unlocked, ...lockedIds].slice(0, positions.length);

  // Render main positions
  positions.forEach((pos, i) => {
    const id = displayIds[i];
    const isUnlocked = unlocked.includes(id);
    const src = id && (typeof CharacterImages !== 'undefined') ? CharacterImages.get(id) : null;
    const char = id ? getCharacter(id) : null;

    let inner;
    if (isUnlocked && src) {
      inner = `<img src="${src}" class="bubble-char-img" alt="${char ? char.name : id}" draggable="false">`;
    } else if (isUnlocked && char && char.svgFn) {
      inner = char.svgFn(pos.size, 'idle');
    } else if (!isUnlocked && char) {
      // Locked character — silhouette with mystery overlay
      const silSrc = src
        ? `<img src="${src}" class="bubble-char-img bubble-char-locked" alt="???" draggable="false">`
        : (char.svgFn ? `<div style="width:100%;height:100%;filter:brightness(0) opacity(0.25)">${char.svgFn(pos.size)}</div>` : '');
      inner = silSrc + `<div class="bubble-locked-overlay"></div>`;
    } else {
      inner = `<div class="bubble-inner-glow"></div>`;
    }

    const div = make('div', 'home-float-char');
    const extraClass = !isUnlocked ? ' bubble-locked' : '';
    div.style.cssText = `left:${pos.left};top:${pos.top};width:${pos.size}px;height:${pos.size}px;animation-delay:${pos.delay}s;animation-duration:${pos.dur}s;`;
    div.innerHTML = `<div class="home-bubble${extraClass}" style="width:${pos.size}px;height:${pos.size}px">${inner}<div class="bubble-overlay"></div></div>`;
    bgChars.appendChild(div);
  });

  // Render tiny ambient bubbles (always decorative)
  ambientBubbles.forEach(pos => {
    const div = make('div', 'home-float-char');
    div.style.cssText = `left:${pos.left};top:${pos.top};width:${pos.size}px;height:${pos.size}px;animation-delay:${pos.delay}s;animation-duration:${pos.dur}s;`;
    div.innerHTML = `<div class="home-bubble bubble-empty bubble-tiny" style="width:${pos.size}px;height:${pos.size}px"><div class="bubble-inner-glow"></div><div class="bubble-overlay"></div></div>`;
    bgChars.appendChild(div);
  });
}

function onPlay() {
  audio.init();
  audio.stopMusic();
  if (!save.playerName) {
    showScreen('name-entry');
    buildNameEntry();
  } else {
    showGameTypeSelect();
  }
}

function showHouse() {
  audio.init();
  if (save.soundEnabled) audio.startCottageMusic();
  buildHouse();
  showScreen('house');
}

// ─── Name Entry ───────────────────────────────────────────────────────────────
function buildNameEntry() {
  q('#screen-name-entry').innerHTML = `
    <div class="name-entry-container">
      <div class="name-entry-char">${renderCharacter('boba', 160)}</div>
      <h2 class="name-entry-title">What's your name?</h2>
      <p class="name-entry-subtitle">Boba wants to know who she's adventuring with!</p>
      <div class="name-entry-form">
        <input type="text" id="name-input" class="name-input"
               placeholder="Your name..." maxlength="16" autocomplete="off"
               autofocus/>
        <button class="btn-play" onclick="saveName()">Let's Go! 🌟</button>
      </div>
    </div>
  `;
  const inp = q('#name-input');
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') saveName();
  });
  inp.focus();
}

function saveName() {
  const inp = q('#name-input');
  const name = (inp ? inp.value.trim() : '') || 'Friend';
  save.playerName = name;
  writeSave(save);
  showGameTypeSelect();
}

// ─── World Select ─────────────────────────────────────────────────────────────
function buildWorldSelect() {
  const el = q('#screen-world-select');
  const gt = session.gameType || 'spelling';

  // Pick worlds array based on game type
  let worldsList;
  if (gt === 'math') {
    worldsList = MATH_WORLDS;
  } else if (gt === 'science') {
    worldsList = SCIENCE_WORLDS;
  } else {
    worldsList = WORLDS;
  }

  // Spelling unlock logic uses level IDs; for math/science all worlds are unlocked
  const isSpelling = (gt === 'spelling');
  const w1done = isSpelling ? save.levelProgress['1-3'] : true;
  const w2done = isSpelling ? save.levelProgress['2-3'] : true;

  el.innerHTML = `
    <div class="world-select-header">
      <button class="btn-back" onclick="showGameTypeSelect()">← Back</button>
      <h2 class="world-select-title">Choose Your World</h2>
    </div>
    <div class="world-map">
      ${worldsList.map((w, i) => {
        const locked = isSpelling && ((i === 1 && !w1done) || (i === 2 && !w2done));
        const progress = worldProgress(w.id);
        return `
          <div class="world-card ${locked ? 'locked' : 'unlocked'}"
               onclick="${locked ? '' : `selectWorld('${w.id}')`}"
               style="--w-accent1: ${w.colors.accent1}; --w-border: ${w.colors.border}; --w-card: ${w.colors.card};">
            <div class="world-card-bg">${w.bgElements}</div>
            <div class="world-card-content">
              <div class="world-emoji">${w.emoji}</div>
              <h3 class="world-name">${w.name}</h3>
              <p class="world-desc">${w.description}</p>
              ${locked
                ? `<div class="world-locked-msg">🔒 Complete ${worldsList[i-1].name} first!</div>`
                : `<div class="world-progress">
                    ${'⭐'.repeat(progress.stars)}${'☆'.repeat(Math.max(0, progress.maxStars - progress.stars))}
                    <span class="world-progress-text">${progress.levelsComplete}/${w.levels.length} levels</span>
                  </div>`}
            </div>
          </div>`;
      }).join('')}
    </div>
  `;
}

function worldProgress(worldId) {
  const world = getWorld(worldId);
  let stars = 0, levelsComplete = 0;
  let maxStars = 0;
  world.levels.forEach(l => {
    maxStars += 3;
    const prog = save.levelProgress[l.id];
    if (prog) { stars += prog.stars; levelsComplete++; }
  });
  return { stars, levelsComplete, maxStars };
}

function selectWorld(worldId) {
  showScreen('level-select');
  buildLevelSelect(worldId);
}

// ─── Game Type Select ─────────────────────────────────────────────────────────
function showGameTypeSelect() {
  showScreen('game-type-select');
  buildGameTypeSelect();
}

function buildGameTypeSelect() {
  const el = q('#screen-game-type-select');
  el.innerHTML = `
    <div class="world-select-header">
      <button class="btn-back" onclick="showHome()">← Back</button>
      <h2 class="world-select-title">What do you want to play?</h2>
    </div>
    <div class="game-type-grid">
      <div class="game-type-card game-type-spelling" onclick="chooseGameType('spelling')">
        <div class="game-type-icon">✏️</div>
        <h3 class="game-type-name">Spelling</h3>
        <p class="game-type-desc">Spell words the right way!</p>
        <div class="game-type-badge">Classic</div>
      </div>
      <div class="game-type-card game-type-math" onclick="chooseGameType('math')">
        <div class="game-type-icon">➕</div>
        <h3 class="game-type-name">Math</h3>
        <p class="game-type-desc">Solve fun math puzzles!</p>
        <div class="game-type-badge">New!</div>
      </div>
      <div class="game-type-card game-type-science" onclick="chooseGameType('science')">
        <div class="game-type-icon">🔬</div>
        <h3 class="game-type-name">Science</h3>
        <p class="game-type-desc">Answer cool science questions!</p>
        <div class="game-type-badge">New!</div>
      </div>
    </div>
  `;
}

function chooseGameType(type) {
  audio.playButtonClick();
  session.gameType = type;
  showScreen('world-select');
  buildWorldSelect();
}

// ─── Level Select ─────────────────────────────────────────────────────────────
function buildLevelSelect(worldId) {
  const world = getWorld(worldId);
  const el = q('#screen-level-select');

  el.innerHTML = `
    <div class="level-select-header" style="--w-accent1:${world.colors.accent1};">
      <button class="btn-back" onclick="showScreen('world-select');buildWorldSelect()">← Back</button>
      <h2>${world.emoji} ${world.name}</h2>
    </div>
    <div class="level-grid">
      ${world.levels.map((level, i) => {
        const prevLevelId = i > 0 ? world.levels[i-1].id : null;
        const locked = prevLevelId && !save.levelProgress[prevLevelId];
        const prog = save.levelProgress[level.id];
        const char = getCharacter(level.character);
        return `
          <div class="level-card ${locked ? 'locked' : 'playable'} ${level.isBoss ? 'boss' : ''}"
               onclick="${locked ? '' : `startLevel('${level.id}')`}"
               style="--ch-primary:${char ? char.colors.primary : '#fff'};">
            <div class="level-card-num">${level.id}</div>
            <div class="level-card-char">${locked ? renderCharacterSilhouette(level.character, 80) : renderCharacter(level.character, 90)}</div>
            <div class="level-card-name">${level.name}</div>
            <div class="level-card-stars">
              ${prog ? '⭐'.repeat(prog.stars) + '☆'.repeat(3 - prog.stars) : locked ? '🔒' : '☆☆☆'}
            </div>
            ${level.isBoss ? '<div class="boss-tag">BOSS ✨</div>' : ''}
          </div>`;
      }).join('')}
    </div>
  `;
}

// ─── Playing Screen ───────────────────────────────────────────────────────────
function startLevel(levelId) {
  const levelData = getLevel(levelId);
  if (!levelData) return;

  const gt = session.gameType || 'spelling';
  const QUESTIONS_PER_LEVEL = 5;

  // Generate questions for math/science/spelling
  let questions = [];
  if (gt === 'math') {
    questions = generateMathQuestions(levelData, QUESTIONS_PER_LEVEL);
  } else if (gt === 'science') {
    const worldId = levelData.scienceWorld || levelData.world.id;
    questions = getScienceQuestions(worldId, QUESTIONS_PER_LEVEL);
  } else if (gt === 'spelling') {
    questions = generateSpellingQuestions(levelData.words, QUESTIONS_PER_LEVEL);
  }

  session = {
    world: levelData.world,
    level: levelData,
    // Spelling fields
    words: levelData.words ? [...levelData.words] : [],
    wordIndex: 0,
    letterIndex: 0,
    wrongThisLetter: 0,
    wrongThisLevel: 0,
    hearts: 3,
    score: 0,
    startTime: Date.now(),
    // Game type
    gameType: gt,
    questions: questions,
    currentQuestionIdx: 0,
    wrongAnswers: 0,
  };

  // Reset streak for new level
  wordStreak = 0;
  levelBestStreak = 0;

  audio.init();
  audio.resume();

  showScreen('playing');
  buildPlayingScreen();
}

function buildPlayingScreen() {
  const gt = session.gameType || 'spelling';
  if (gt === 'math' || gt === 'science' || gt === 'spelling') {
    buildMCQScreen();
  } else {
    buildSpellingScreen();
  }
}

function buildSpellingScreen() {
  const el = q('#screen-playing');
  const { level, world, words, wordIndex } = session;
  const char = getCharacter(level.character);
  const nextLevelIndex = world.levels.indexOf(world.levels.find(l => l.id === level.id)) + 1;
  const nextLevel = world.levels[nextLevelIndex];
  const nextChar = nextLevel ? getCharacter(nextLevel.character) : null;

  el.innerHTML = `
    <div class="play-bg" style="background: linear-gradient(135deg, ${world.colors.bg1}, ${world.colors.bg2});">
      ${world.bgElements}
    </div>
    <div class="play-hud">
      <div class="hud-left">
        <button class="btn-pause" onclick="pauseGame()">⏸</button>
        <span class="hud-level">${world.emoji} ${level.id}</span>
      </div>
      <div class="hud-hearts" id="hud-hearts">${renderHearts(session.hearts)}</div>
      <div class="hud-score">
        <span class="hud-score-val" id="hud-score">0</span> pts
      </div>
      <div class="streak-indicator hidden" id="streak-indicator">
        <span class="streak-flame">🔥</span><span class="streak-count" id="streak-count">0</span>
      </div>
    </div>
    <div class="play-area">
      <div class="play-character-area">
        <div class="play-char-wrap" id="play-char-wrap">
          <div class="char-shadow"></div>
          <div class="play-char" id="play-char">${renderCharacter(level.character, 220)}</div>
        </div>
        <div class="char-nameplate" style="color:${char ? char.colors.primary : '#fff'};">${char ? char.name : ''}</div>
      </div>
      <div class="play-center">
        <div class="play-instruction" id="play-instruction">Type the word!</div>
        <div class="word-display" id="word-display"></div>
        <div class="word-progress" id="word-progress"></div>
        <div class="hint-text" id="hint-text"></div>
        <div class="level-progress-bar">
          <div class="level-progress-fill" id="level-progress-fill" style="width:${(wordIndex/words.length)*100}%"></div>
          <span class="level-progress-label">${wordIndex}/${words.length} words</span>
        </div>
      </div>
      <div class="play-next-area">
        ${nextChar ? `
          <div class="next-char-preview">
            <div class="next-char-label">Next friend:</div>
            ${save.unlockedCharacters.includes(nextChar.id)
              ? `<div class="next-char-img">${renderCharacter(nextChar.id, 80)}</div><div class="next-char-name">${nextChar.name}</div>`
              : `<div class="next-char-mystery">${renderCharacterSilhouette(nextChar.id, 80)}<div class="next-char-name">???</div></div>`}
          </div>` : ''}
      </div>
    </div>
  `;

  renderWord();
  setupKeyListener();

  // Start playing music
  if (save.soundEnabled) audio.startPlayingMusic();
}

// ─── MCQ Screen (Math / Science) ──────────────────────────────────────────────
function buildMCQScreen() {
  const el = q('#screen-playing');
  const { level, world } = session;
  const char = getCharacter(level.character);

  el.innerHTML = `
    <div class="play-bg" style="background: linear-gradient(135deg, ${world.colors.bg1}, ${world.colors.bg2});">
      ${world.bgElements}
    </div>
    <div class="play-hud">
      <div class="hud-left">
        <button class="btn-pause" onclick="pauseGame()">⏸</button>
        <span class="hud-level">${world.emoji} ${level.id}</span>
      </div>
      <div class="hud-hearts" id="hud-hearts">${renderHearts(session.hearts)}</div>
      <div class="hud-score">
        <span class="hud-score-val" id="hud-score">0</span> pts
      </div>
    </div>
    <div class="mcq-play-area">
      <div class="mcq-char-side">
        <div class="play-char" id="play-char">${renderCharacter(level.character, 160)}</div>
        <div class="char-nameplate" style="color:${char ? char.colors.primary : '#fff'}; margin-top:8px;">${char ? char.name : ''}</div>
      </div>
      <div class="mcq-center" id="mcq-center">
        <!-- Filled by renderMCQ() -->
      </div>
    </div>
  `;

  // Disable keyboard for MCQ
  removeKeyListener();

  renderMCQ();

  if (save.soundEnabled) audio.startPlayingMusic();
}

function renderMCQ() {
  const center = q('#mcq-center');
  if (!center) return;

  const q_data = session.questions[session.currentQuestionIdx];
  if (!q_data) return;

  const total = session.questions.length;
  const current = session.currentQuestionIdx + 1;
  const gt = session.gameType;
  const world = session.world;

  center.innerHTML = `
    <div class="mcq-question-box" style="border-color: ${world.colors.accent1}; box-shadow: 0 0 20px ${world.colors.accent1}33;">
      <div class="mcq-question-text">${q_data.question}</div>
      ${q_data.hint ? `<div class="mcq-hint" id="mcq-hint" style="display:none">💡 ${q_data.hint}</div>` : ''}
    </div>
    <div class="mcq-choices-grid" id="mcq-choices">
      ${q_data.choices.map((choice, i) => `
        <button class="mcq-choice-btn" id="mcq-choice-${i}"
                style="border-color: ${world.colors.border};"
                onclick="handleMCQAnswer(${i})">
          ${choice}
        </button>
      `).join('')}
    </div>
    <div class="mcq-progress">Question ${current} of ${total}</div>
  `;
}

function handleMCQAnswer(choiceIdx) {
  const q_data = session.questions[session.currentQuestionIdx];
  if (!q_data) return;

  const choiceVal = q_data.choices[choiceIdx];
  const isCorrect = String(choiceVal) === String(q_data.answer);
  const btn = q(`#mcq-choice-${choiceIdx}`);
  const world = session.world;

  // Track stats for every answer
  if (!save.stats) save.stats = defaultSave().stats;
  if (!save.stats.bySubject) save.stats.bySubject = defaultSave().stats.bySubject;
  const gt = session.gameType || 'spelling';
  save.stats.totalQuestionsAnswered = (save.stats.totalQuestionsAnswered || 0) + 1;
  if (!save.stats.bySubject[gt]) save.stats.bySubject[gt] = { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 };
  save.stats.bySubject[gt].answered = (save.stats.bySubject[gt].answered || 0) + 1;
  if (isCorrect) {
    save.stats.totalCorrect = (save.stats.totalCorrect || 0) + 1;
    save.stats.bySubject[gt].correct = (save.stats.bySubject[gt].correct || 0) + 1;
    // Update streak tracking for MCQ
    wordStreak++;
    if (wordStreak > levelBestStreak) levelBestStreak = wordStreak;
    if (wordStreak > (save.stats.longestStreak || 0)) {
      save.stats.longestStreak = wordStreak;
    }
  } else {
    wordStreak = 0;
  }
  writeSave(save);

  // Disable all buttons immediately
  const allBtns = qAll('.mcq-choice-btn');
  allBtns.forEach(b => { b.onclick = null; b.style.pointerEvents = 'none'; });

  if (isCorrect) {
    // Correct!
    audio.playCorrectKey(session.currentQuestionIdx);
    if (btn) {
      btn.classList.add('mcq-correct');
    }

    // Particle burst
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const char = getCharacter(session.level.character);
      const colors = char
        ? [char.colors.primary, char.colors.accent, '#FFD700', '#FFFFFF']
        : [world.colors.accent1, world.colors.accent2, '#FFD700', '#FFFFFF'];
      particles.burst(cx, cy, colors, 12);
    }

    // Wiggle character
    const charEl = q('#play-char');
    if (charEl) {
      charEl.classList.remove('wiggling');
      void charEl.offsetWidth;
      charEl.classList.add('wiggling');
      setTimeout(() => charEl.classList.remove('wiggling'), 500);
    }

    session.score += 10;
    const hudScore = q('#hud-score');
    if (hudScore) hudScore.textContent = session.score;

    setTimeout(() => advanceMCQ(), 700);

  } else {
    // Wrong!
    audio.playWrongKey();
    session.wrongAnswers++;
    session.hearts = Math.max(0, session.hearts - 1);

    if (btn) {
      btn.classList.add('mcq-wrong');
      btn.disabled = true;
    }

    // Update hearts
    const heartsEl = q('#hud-hearts');
    if (heartsEl) heartsEl.innerHTML = renderHearts(session.hearts);
    audio.playHeartLoss();

    // Show hint if available
    const hintEl = q('#mcq-hint');
    if (hintEl) hintEl.style.display = 'block';

    // Re-enable remaining buttons (not the wrong one)
    allBtns.forEach(b => {
      if (b !== btn) b.style.pointerEvents = '';
      if (b !== btn) b.onclick = function() {
        const idx = parseInt(b.id.replace('mcq-choice-', ''));
        handleMCQAnswer(idx);
      };
    });

    if (session.hearts === 0) {
      setTimeout(() => {
        session.hearts = 3;
        const heartsEl2 = q('#hud-hearts');
        if (heartsEl2) heartsEl2.innerHTML = renderHearts(session.hearts);
        // Re-enable buttons fully
        allBtns.forEach(b => {
          if (!b.disabled) {
            b.style.pointerEvents = '';
            b.onclick = function() {
              const idx = parseInt(b.id.replace('mcq-choice-', ''));
              handleMCQAnswer(idx);
            };
          }
        });
      }, 1200);
    }
  }
}

function advanceMCQ() {
  session.currentQuestionIdx++;
  if (session.currentQuestionIdx >= session.questions.length) {
    // All questions answered
    onMCQLevelComplete();
  } else {
    renderMCQ();
  }
}

function onMCQLevelComplete() {
  gameState = STATE.LEVEL_COMPLETE;
  audio.stopAmbient();
  audio.playLevelComplete();

  const stars = computeMCQStars(session.wrongAnswers);
  const prevProg = save.levelProgress[session.level.id];
  const bestStars = prevProg ? Math.max(prevProg.stars, stars) : stars;
  const isNewCompletion = !prevProg;

  save.levelProgress[session.level.id] = { stars: bestStars };
  save.totalStars = Object.values(save.levelProgress).reduce((s, p) => s + (p.stars || 0), 0);

  const starCoins = stars === 3 ? 40 : stars === 2 ? 25 : 15;
  awardCoins(starCoins);

  // Update progress stats
  if (!save.stats) save.stats = defaultSave().stats;
  if (!save.stats.bySubject) save.stats.bySubject = defaultSave().stats.bySubject;
  const gt = session.gameType || 'spelling';
  if (!save.stats.bySubject[gt]) save.stats.bySubject[gt] = { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 };
  if (isNewCompletion) {
    save.stats.totalLevelsCompleted = (save.stats.totalLevelsCompleted || 0) + 1;
    save.stats.bySubject[gt].levelsCompleted = (save.stats.bySubject[gt].levelsCompleted || 0) + 1;
  }
  save.stats.bySubject[gt].stars = (save.stats.bySubject[gt].stars || 0) + stars;
  if (stars === 3) {
    save.stats.bySubject[gt].perfectLevels = (save.stats.bySubject[gt].perfectLevels || 0) + 1;
  }
  // Update longest streak from MCQ session
  if (levelBestStreak > (save.stats.longestStreak || 0)) {
    save.stats.longestStreak = levelBestStreak;
  }
  wordStreak = 0;
  levelBestStreak = 0;
  // Update rank
  save.rank = getRank(save.totalStars).title;

  writeSave(save);

  showLevelCompleteScreen(stars, false, null, 0);
}

function computeMCQStars(wrongAnswers) {
  if (wrongAnswers === 0) return 3;
  if (wrongAnswers <= 2) return 2;
  return 1;
}

function renderHearts(count) {
  return Array.from({length: 3}, (_, i) =>
    `<span class="heart ${i < count ? 'full' : 'empty'}" style="animation-delay:${i * 0.15}s">${i < count ? '❤️' : '🩶'}</span>`
  ).join('');
}

function renderWord() {
  const wordDisp = q('#word-display');
  if (!wordDisp) return;
  const word = session.words[session.wordIndex];
  const char = getCharacter(session.level.character);
  const accentColor = char ? char.colors.primary : '#FFD700';
  const accentGlow = char ? char.colors.accent : '#FFD700';

  wordDisp.innerHTML = word.split('').map((letter, i) => {
    let cls = 'letter-tile';
    let style = '';
    if (i < session.letterIndex) {
      cls += ' typed';
      style = `background: ${accentColor}; border-color: ${accentColor}; box-shadow: 0 0 12px ${accentGlow}88;`;
    } else if (i === session.letterIndex) {
      cls += ' current';
      style = `border-color: ${accentGlow}; box-shadow: 0 0 16px ${accentGlow}66;`;
    }
    return `<div class="${cls}" id="tile-${i}" style="${style}">${i < session.letterIndex ? letter.toUpperCase() : letter.toUpperCase()}</div>`;
  }).join('');

  // Word progress dots
  const progEl = q('#word-progress');
  if (progEl) {
    progEl.innerHTML = session.words.map((w, i) => {
      const done = i < session.wordIndex;
      const cur = i === session.wordIndex;
      return `<span class="word-dot ${done ? 'done' : cur ? 'current' : ''}">${done ? '✓' : (i + 1)}</span>`;
    }).join('');
  }
}

// ─── Keyboard Input ────────────────────────────────────────────────────────────
let _keyHandler = null;

function setupKeyListener() {
  if (_keyHandler) document.removeEventListener('keydown', _keyHandler);
  _keyHandler = (e) => {
    if (gameState !== STATE.PLAYING) return;
    // Only handle keyboard for spelling game type
    if ((session.gameType || 'spelling') !== 'spelling') return;
    if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
    e.preventDefault();
    handleKey(e.key.toLowerCase());
  };
  document.addEventListener('keydown', _keyHandler);
}

function removeKeyListener() {
  if (_keyHandler) {
    document.removeEventListener('keydown', _keyHandler);
    _keyHandler = null;
  }
}

function handleKey(key) {
  const word = session.words[session.wordIndex];
  const expected = word[session.letterIndex].toLowerCase();

  if (key === expected) {
    onCorrectKey();
  } else {
    onWrongKey();
  }
}

function onCorrectKey() {
  audio.playCorrectKey(session.letterIndex);
  // Track per-letter correct answers for spelling
  if (!save.stats) save.stats = defaultSave().stats;
  save.stats.totalQuestionsAnswered = (save.stats.totalQuestionsAnswered || 0) + 1;
  save.stats.totalCorrect = (save.stats.totalCorrect || 0) + 1;
  if (!save.stats.bySubject) save.stats.bySubject = defaultSave().stats.bySubject;
  if (!save.stats.bySubject.spelling) save.stats.bySubject.spelling = { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 };
  save.stats.bySubject.spelling.answered = (save.stats.bySubject.spelling.answered || 0) + 1;
  save.stats.bySubject.spelling.correct = (save.stats.bySubject.spelling.correct || 0) + 1;

  // Animate the tile
  const tile = q(`#tile-${session.letterIndex}`);
  if (tile) {
    tile.classList.add('popping');
    const char = getCharacter(session.level.character);
    tile.style.background = char ? char.colors.primary : '#FFD700';
    tile.style.borderColor = char ? char.colors.accent : '#FFD700';
    tile.style.boxShadow = `0 0 16px ${char ? char.colors.accent : '#FFD700'}88`;
    // Burst particles at tile
    const rect = tile.getBoundingClientRect();
    const colors = char ? [char.colors.primary, char.colors.accent, '#FFD700', '#FFFFFF'] : undefined;
    particles.burst(rect.left + rect.width/2, rect.top + rect.height/2, colors, 6);
    setTimeout(() => tile.classList.remove('popping'), 400);
  }

  // Wiggle character
  const charEl = q('#play-char');
  if (charEl) {
    charEl.classList.remove('wiggling');
    void charEl.offsetWidth; // reflow
    charEl.classList.add('wiggling');
    setTimeout(() => charEl.classList.remove('wiggling'), 500);
  }

  session.letterIndex++;
  session.wrongThisLetter = 0;
  session.score += 10;
  q('#hud-score') && (q('#hud-score').textContent = session.score);

  if (session.letterIndex >= session.words[session.wordIndex].length) {
    // Word complete!
    setTimeout(() => onWordComplete(), 150);
  } else {
    renderWord();
    q('#hint-text') && (q('#hint-text').textContent = '');
  }
}

function updateStreakDisplay() {
  const el = q('#streak-indicator');
  if (!el) return;
  if (wordStreak < 2) {
    el.classList.add('hidden');
    return;
  }
  el.classList.remove('hidden');
  el.classList.remove('streak-pulse');
  void el.offsetWidth; // reflow to restart animation
  el.classList.add('streak-pulse');
  const countEl = q('#streak-count');
  if (countEl) countEl.textContent = wordStreak;
  // Color tier: 6+ = red-gold, 3+ = orange
  if (wordStreak >= 6) {
    el.classList.add('streak-hot');
    el.classList.remove('streak-warm');
  } else {
    el.classList.add('streak-warm');
    el.classList.remove('streak-hot');
  }
}

function onWrongKey() {
  audio.playWrongKey();
  // Track wrong spelling key
  if (!save.stats) save.stats = defaultSave().stats;
  save.stats.totalQuestionsAnswered = (save.stats.totalQuestionsAnswered || 0) + 1;
  if (!save.stats.bySubject) save.stats.bySubject = defaultSave().stats.bySubject;
  if (!save.stats.bySubject.spelling) save.stats.bySubject.spelling = { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 };
  save.stats.bySubject.spelling.answered = (save.stats.bySubject.spelling.answered || 0) + 1;
  // Wrong key breaks the streak
  wordStreak = 0;
  updateStreakDisplay();
  session.wrongThisLetter++;
  session.wrongThisLevel++;

  // Flash current tile red
  const tile = q(`#tile-${session.letterIndex}`);
  if (tile) {
    tile.classList.add('wrong-flash');
    setTimeout(() => tile.classList.remove('wrong-flash'), 350);
  }

  // Hint after 3 wrong on same letter
  if (session.wrongThisLetter >= 3) {
    const word = session.words[session.wordIndex];
    const hint = q('#hint-text');
    if (hint) {
      hint.textContent = `Hint: Try pressing "${word[session.letterIndex].toUpperCase()}"`;
      hint.style.opacity = '1';
      audio.playHint();
    }
    // Gentle glow on current tile
    if (tile) {
      tile.style.borderColor = '#FFD700';
      tile.style.boxShadow = '0 0 20px #FFD700AA';
    }
  }

  // Lose heart after 10 wrong in a level (very forgiving)
  if (session.wrongThisLevel > 0 && session.wrongThisLevel % 10 === 0 && session.hearts > 0) {
    session.hearts = Math.max(0, session.hearts - 1);
    q('#hud-hearts') && (q('#hud-hearts').innerHTML = renderHearts(session.hearts));
    audio.playHeartLoss();
    if (session.hearts === 0) {
      // Very gentle — just regenerate hearts, keep playing (kid-friendly)
      setTimeout(() => {
        session.hearts = 3;
        q('#hud-hearts') && (q('#hud-hearts').innerHTML = renderHearts(session.hearts));
      }, 1200);
    }
  }
}

// ─── Word Complete ─────────────────────────────────────────────────────────────
function onWordComplete() {
  gameState = STATE.WORD_COMPLETE;
  audio.playWordComplete();

  const char = getCharacter(session.level.character);
  const colors = char ? [char.colors.primary, char.colors.accent, '#FFD700', '#FFFFFF', char.colors.highlight] : undefined;

  // Big particle burst from character
  const charEl = q('#play-char');
  if (charEl) {
    const rect = charEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    particles.wordCompleteBurst(cx, cy, colors);

    charEl.classList.remove('celebrating');
    void charEl.offsetWidth;
    charEl.classList.add('celebrating');
    setTimeout(() => charEl.classList.remove('celebrating'), 900);
  }

  session.score += 50;
  session.wordIndex++;
  session.letterIndex = 0;
  session.wrongThisLetter = 0;

  // Increment streak and award bonus coins
  wordStreak++;
  if (wordStreak > levelBestStreak) levelBestStreak = wordStreak;
  if (!save.stats) save.stats = defaultSave().stats;
  if (wordStreak > (save.stats.longestStreak || 0)) save.stats.longestStreak = wordStreak;
  updateStreakDisplay();

  // Award coins with streak multiplier
  const baseCoins = 2;
  let coinsEarned;
  if (wordStreak >= 6) {
    coinsEarned = Math.ceil(baseCoins * 2);  // 2× at streak 6+
  } else if (wordStreak >= 3) {
    coinsEarned = Math.ceil(baseCoins * 1.5); // 1.5× at streak 3–5
  } else {
    coinsEarned = baseCoins;
  }
  awardCoins(coinsEarned);

  if (session.wordIndex >= session.words.length) {
    // Level complete!
    setTimeout(() => onLevelComplete(), 900);
  } else {
    // Show brief "Great!" then next word
    const instruction = q('#play-instruction');
    if (instruction) {
      const msgs = ['Amazing! 🌟', 'Perfect! ✨', 'You\'re so smart! 💫', 'Keep going! 🎉', 'Wonderful! 🌈'];
      instruction.textContent = msgs[Math.floor(Math.random() * msgs.length)];
      instruction.classList.add('pop-in');
    }
    setTimeout(() => {
      gameState = STATE.PLAYING;
      if (instruction) {
        instruction.textContent = 'Type the word!';
        instruction.classList.remove('pop-in');
      }
      renderWord();
      // Update progress bar
      const fill = q('#level-progress-fill');
      if (fill) fill.style.width = `${(session.wordIndex / session.words.length) * 100}%`;
      const label = fill && fill.parentElement.querySelector('.level-progress-label');
      if (label) label.textContent = `${session.wordIndex}/${session.words.length} words`;
    }, 900);
  }
}

// ─── Level Complete ────────────────────────────────────────────────────────────
function onLevelComplete() {
  gameState = STATE.LEVEL_COMPLETE;
  removeKeyListener();
  audio.stopAmbient();
  audio.playLevelComplete();

  // Capture streak before resetting
  const endStreak = levelBestStreak;
  if (levelBestStreak > (save.stats && save.stats.longestStreak || 0)) {
    if (!save.stats) save.stats = defaultSave().stats;
    save.stats.longestStreak = levelBestStreak;
  }
  wordStreak = 0;
  levelBestStreak = 0;

  const stars = computeStars(session.wrongThisLevel, session.words.length);
  const prevProg = save.levelProgress[session.level.id];
  const bestStars = prevProg ? Math.max(prevProg.stars, stars) : stars;
  const isNewCompletion = !prevProg;

  save.levelProgress[session.level.id] = { stars: bestStars };
  save.score = (save.score || 0) + session.score;

  // Award coins based on stars earned this attempt
  const starCoins = stars === 3 ? 40 : stars === 2 ? 25 : 15;
  awardCoins(starCoins);

  // Unlock character
  const unlockId = session.level.unlocks;
  const isNewUnlock = unlockId && !save.unlockedCharacters.includes(unlockId);
  if (isNewUnlock) {
    save.unlockedCharacters.push(unlockId);
  }

  // Recount total stars
  save.totalStars = Object.values(save.levelProgress).reduce((s, p) => s + (p.stars || 0), 0);

  // Update progress stats
  if (!save.stats) save.stats = defaultSave().stats;
  if (!save.stats.bySubject) save.stats.bySubject = defaultSave().stats.bySubject;
  const gt = session.gameType || 'spelling';
  if (!save.stats.bySubject[gt]) save.stats.bySubject[gt] = { answered: 0, correct: 0, levelsCompleted: 0, stars: 0, perfectLevels: 0 };
  if (isNewCompletion) {
    save.stats.totalLevelsCompleted = (save.stats.totalLevelsCompleted || 0) + 1;
    save.stats.bySubject[gt].levelsCompleted = (save.stats.bySubject[gt].levelsCompleted || 0) + 1;
  }
  save.stats.bySubject[gt].stars = (save.stats.bySubject[gt].stars || 0) + stars;
  if (stars === 3) {
    save.stats.bySubject[gt].perfectLevels = (save.stats.bySubject[gt].perfectLevels || 0) + 1;
  }
  // Update rank
  save.rank = getRank(save.totalStars).title;

  writeSave(save);

  showLevelCompleteScreen(stars, isNewUnlock, unlockId, endStreak);
}

function showLevelCompleteScreen(stars, isNewUnlock, unlockId, bestStreak) {
  const el = q('#screen-level-complete');
  const char = getCharacter(session.level.character);
  const totalCoinsThisLevel = (save.coins || 0); // current total after all awardCoins calls

  // Stars animate in one-by-one — start hidden, add class after mount
  el.innerHTML = `
    <div class="level-complete-bg" style="background: linear-gradient(135deg, ${session.world.colors.bg1}, ${session.world.colors.bg2});">
      ${session.world.bgElements}
    </div>
    <div class="level-complete-content">
      <h2 class="level-complete-title">Level Complete! 🎉</h2>
      <div class="stars-row" id="stars-row">
        ${[0,1,2].map(i =>
          `<div class="star-big ${i < stars ? 'earned' : 'unearned'} star-pending" id="star-${i}">⭐</div>`
        ).join('')}
      </div>
      ${bestStreak >= 3
        ? `<div class="streak-bonus-badge" id="streak-bonus-badge">
            🔥 Streak Bonus! <span class="streak-bonus-count">×${bestStreak >= 6 ? 2 : 1.5}</span>
          </div>`
        : ''}
      <div class="level-complete-score">
        <span id="lc-coins-label">🪙</span>
        <span id="lc-coins-val">0</span> coins earned!
      </div>
      <div class="level-complete-char">${char ? renderCharacter(char.id, 180) : ''}</div>
      ${isNewUnlock
        ? `<div class="unlock-teaser" id="unlock-teaser">
            <div class="unlock-teaser-text">A new friend wants to meet you! 🌟</div>
            <button class="btn-play btn-meet" onclick="showUnlockScreen('${unlockId}')">Meet Them! ✨</button>
          </div>`
        : `<div class="level-complete-btns">
            <button class="btn-play" onclick="continueAfterLevel()">Continue 🌟</button>
            <button class="btn-secondary" onclick="showScreen('world-select');buildWorldSelect()">World Map</button>
          </div>`}
    </div>
  `;

  showScreen('level-complete');

  // 1) Stars animate in one by one, 300ms apart
  const earnedStars = stars;
  [0, 1, 2].forEach(i => {
    const starEl = q(`#star-${i}`);
    if (!starEl) return;
    if (i < earnedStars) {
      setTimeout(() => {
        starEl.classList.remove('star-pending');
        starEl.classList.add('star-animate-in');
        // Particle burst at each star
        const rect = starEl.getBoundingClientRect();
        particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2,
          ['#FFD700', '#FFF176', '#FF6B9D', '#FFFFFF'], 8);
      }, 300 + i * 300);
    } else {
      // Unearned stars appear dimly at the end
      setTimeout(() => starEl.classList.remove('star-pending'), 300 + earnedStars * 300);
    }
  });

  // 2) Coin counter animates from 0 up over ~800ms (starts after stars)
  const coinsThisRun = (() => {
    // Approximate coins earned this run: word coins + star bonus
    const wordCoins = session.words.length * 2; // conservative base estimate
    const starBonus = earnedStars === 3 ? 40 : earnedStars === 2 ? 25 : 15;
    return wordCoins + starBonus;
  })();
  const animStart = 300 + earnedStars * 300 + 200;
  setTimeout(() => {
    const valEl = q('#lc-coins-val');
    if (!valEl) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(coinsThisRun / 30));
    const interval = setInterval(() => {
      cur = Math.min(cur + step, coinsThisRun);
      valEl.textContent = cur;
      if (cur >= coinsThisRun) clearInterval(interval);
    }, 800 / 30);
  }, animStart);

  // 3) Fireworks + streak badge animate in
  particles.fireworks(4);
  if (bestStreak >= 3) {
    const badgeDelay = 300 + earnedStars * 300 + 100;
    setTimeout(() => {
      const badge = q('#streak-bonus-badge');
      if (badge) badge.classList.add('streak-badge-pop');
    }, badgeDelay);
  }

  // 4) Check achievements after stats are updated (slight delay so popups feel post-celebration)
  setTimeout(() => checkAchievements(), 1200);
}

function showUnlockScreen(charId) {
  const el = q('#unlock-modal');
  const char = getCharacter(charId);
  if (!char || !el) return;

  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="unlock-overlay" onclick="">
      <div class="unlock-box">
        <div class="unlock-sparkle-bg"></div>
        <div class="unlock-title">✨ New Friend! ✨</div>
        <div class="unlock-subtitle">A new friend wants to meet you!</div>
        <div class="unlock-char-reveal" id="unlock-char-reveal">
          <div id="unlock-char-svg">${renderCharacter(charId, 200)}</div>
        </div>
        <div class="unlock-char-name" id="unlock-char-name" style="color:${char.colors.primary}; opacity:0;">
          ${char.name}!
        </div>
        <div class="unlock-char-desc" id="unlock-char-desc" style="opacity:0;">
          ${char.description}
        </div>
        <button class="btn-play unlock-continue" id="unlock-continue" onclick="continueAfterLevel()" style="opacity:0;">
          Say Hi! 👋
        </button>
      </div>
    </div>
  `;

  audio.playUnlock();

  const charReveal = q('#unlock-char-svg');
  charReveal.style.transform = 'scale(0) rotate(-180deg)';
  charReveal.style.filter = 'brightness(3)';
  charReveal.style.transition = 'all 0s';

  setTimeout(() => {
    charReveal.style.transition = 'transform 1.2s cubic-bezier(0.34,1.56,0.64,1), filter 0.8s ease';
    charReveal.style.transform = 'scale(1) rotate(0deg)';
    charReveal.style.filter = 'brightness(1)';
  }, 200);

  // Float hearts from character position
  setTimeout(() => {
    const charEl = q('#unlock-char-svg');
    if (charEl) {
      const rect = charEl.getBoundingClientRect();
      particles.floatHearts(rect.left + rect.width/2, rect.top + rect.height/2, 16);
    }
    // Show name
    const nameEl = q('#unlock-char-name');
    if (nameEl) {
      nameEl.style.transition = 'opacity 0.5s ease';
      nameEl.style.opacity = '1';
    }
  }, 900);

  setTimeout(() => {
    const descEl = q('#unlock-char-desc');
    const btnEl = q('#unlock-continue');
    if (descEl) { descEl.style.transition = 'opacity 0.5s ease'; descEl.style.opacity = '1'; }
    if (btnEl) { btnEl.style.transition = 'opacity 0.5s ease'; btnEl.style.opacity = '1'; }
  }, 1400);
}

function continueAfterLevel() {
  q('#unlock-modal').classList.add('hidden');
  q('#unlock-modal').innerHTML = '';
  showScreen('world-select');
  buildWorldSelect();
}

function pauseGame() {
  // Simple pause: go back to level select
  audio.stopAmbient();
  removeKeyListener();
  const worldId = session.world ? session.world.id : 1;
  showScreen('level-select');
  buildLevelSelect(worldId);
}

// ─── Coins helper ─────────────────────────────────────────────────────────────

// ─── Progress Screen ──────────────────────────────────────────────────────────
function showProgress() {
  audio.stopMusic();
  showScreen('progress');
  buildProgressScreen();
}

function buildProgressScreen() {
  const el = q('#screen-progress');
  if (!el) return;

  const stats = save.stats || {};
  const bySubject = stats.bySubject || {};
  const rank = getRank(save.totalStars || 0);
  const nextRank = RANKS.find(r => r.min > (save.totalStars || 0));
  const totalStars = save.totalStars || 0;
  const accuracy = stats.totalQuestionsAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100)
    : 0;
  const achievements = save.achievements || [];

  // Count total levels across all worlds for each subject
  // Approximate — use known worlds structure if available
  const subjectMaxLevels = { spelling: 9, math: 9, science: 9 }; // 3 worlds × 3 levels each

  function progressBar(completed, max, color) {
    const pct = Math.min(100, Math.round((completed / Math.max(max, 1)) * 100));
    return `<div class="prog-bar-track"><div class="prog-bar-fill" style="width:${pct}%;background:${color}"></div></div>`;
  }

  const spellSubj = bySubject.spelling || {};
  const mathSubj  = bySubject.math    || {};
  const sciSubj   = bySubject.science  || {};

  const nextRankHTML = nextRank
    ? `<div class="prog-rank-next">Next: ${nextRank.icon} ${nextRank.title} at ${nextRank.min} ⭐</div>`
    : `<div class="prog-rank-next">🎉 Max rank achieved!</div>`;

  el.innerHTML = `
    <div class="progress-screen-bg"></div>
    <div class="progress-screen-wrap">
      <div class="progress-header">
        <button class="btn-back" onclick="showHome()">← Back</button>
        <h2 class="progress-title">🏆 My Progress</h2>
      </div>

      <!-- Rank Card -->
      <div class="prog-rank-card" style="border-color:${rank.color}44; box-shadow: 0 0 24px ${rank.color}22;">
        <div class="prog-rank-icon">${rank.icon}</div>
        <div class="prog-rank-info">
          <div class="prog-rank-label">Your Rank</div>
          <div class="prog-rank-title" style="color:${rank.color}">${rank.title}</div>
          ${nextRankHTML}
        </div>
        <div class="prog-rank-stars">⭐ ${totalStars}</div>
      </div>

      <!-- Stats Row -->
      <div class="prog-stats-grid">
        <div class="prog-stat-box">
          <div class="prog-stat-icon">🎯</div>
          <div class="prog-stat-val">${accuracy}%</div>
          <div class="prog-stat-lbl">Accuracy</div>
        </div>
        <div class="prog-stat-box">
          <div class="prog-stat-icon">🔥</div>
          <div class="prog-stat-val">${stats.longestStreak || 0}</div>
          <div class="prog-stat-lbl">Best Streak</div>
        </div>
        <div class="prog-stat-box">
          <div class="prog-stat-icon">📅</div>
          <div class="prog-stat-val">${stats.currentDayStreak || 0}</div>
          <div class="prog-stat-lbl">Day Streak</div>
        </div>
        <div class="prog-stat-box">
          <div class="prog-stat-icon">📚</div>
          <div class="prog-stat-val">${stats.totalQuestionsAnswered || 0}</div>
          <div class="prog-stat-lbl">Questions</div>
        </div>
      </div>

      <!-- Subject Progress -->
      <div class="prog-section-title">Progress by Subject</div>
      <div class="prog-subjects">
        <div class="prog-subject-row">
          <div class="prog-subject-icon">✏️</div>
          <div class="prog-subject-name">Spelling</div>
          ${progressBar(spellSubj.levelsCompleted || 0, subjectMaxLevels.spelling, 'linear-gradient(90deg,#FF6B9D,#FF85A1)')}
          <div class="prog-subject-count">${spellSubj.levelsCompleted || 0} levels</div>
        </div>
        <div class="prog-subject-row">
          <div class="prog-subject-icon">➕</div>
          <div class="prog-subject-name">Math</div>
          ${progressBar(mathSubj.levelsCompleted || 0, subjectMaxLevels.math, 'linear-gradient(90deg,#FFD700,#FFA500)')}
          <div class="prog-subject-count">${mathSubj.levelsCompleted || 0} levels</div>
        </div>
        <div class="prog-subject-row">
          <div class="prog-subject-icon">🔬</div>
          <div class="prog-subject-name">Science</div>
          ${progressBar(sciSubj.levelsCompleted || 0, subjectMaxLevels.science, 'linear-gradient(90deg,#5DE8E8,#4ECDC4)')}
          <div class="prog-subject-count">${sciSubj.levelsCompleted || 0} levels</div>
        </div>
      </div>

      <!-- Achievements -->
      <div class="prog-section-title">Achievements (${achievements.length}/${ACHIEVEMENTS.length})</div>
      <div class="prog-achievements-grid">
        ${ACHIEVEMENTS.map(ach => {
          const earned = achievements.includes(ach.id);
          return `
            <div class="prog-badge ${earned ? 'badge-earned' : 'badge-locked'}" title="${earned ? ach.desc : '???'}">
              <div class="prog-badge-icon">${earned ? ach.icon : '❓'}</div>
              <div class="prog-badge-title">${earned ? ach.title : '???'}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ─── Collection ───────────────────────────────────────────────────────────────
function showCollection() {
  audio.stopMusic();
  showScreen('collection');
  buildCollection();
}

function buildCollection() {
  const el = q('#screen-collection');
  el.innerHTML = `
    <div class="collection-header">
      <button class="btn-back" onclick="showHome()">← Back</button>
      <h2 class="collection-title">🧸 My Collection</h2>
      <span class="collection-count">${save.unlockedCharacters.length}/10 friends</span>
    </div>
    <div class="collection-grid" id="collection-grid">
      ${CHARACTERS.map(char => {
        const unlocked = save.unlockedCharacters.includes(char.id);
        const world = getWorld(char.world);
        return `
          <div class="collection-card ${unlocked ? 'unlocked' : 'locked'}"
               style="--ch-primary:${char.colors.primary}; --ch-border: ${char.colors.primary}44;"
               onclick="${unlocked ? `showCharDetail('${char.id}')` : ''}">
            <div class="card-world-tag" style="background:${world.colors.card}; border-color:${world.colors.border};">
              ${world.emoji} ${world.name}
            </div>
            <div class="card-char-img">
              ${unlocked
                ? renderCharacter(char.id, 120)
                : `<div class="locked-char">${renderCharacterSilhouette(char.id, 100)}<div class="lock-icon">🔒</div></div>`}
            </div>
            <div class="card-char-name">${unlocked ? char.name : '???'}</div>
            ${!unlocked ? `<div class="card-locked-hint">Complete ${char.world}-${char.level ? char.level.split('-')[1] : '?'}</div>` : ''}
          </div>`;
      }).join('')}
    </div>
  `;
}

function showCharDetail(charId) {
  const char = getCharacter(charId);
  if (!char) return;
  const world = getWorld(char.world);

  const el = q('#screen-character-detail');
  el.innerHTML = `
    <div class="char-detail-bg" style="background: linear-gradient(135deg, ${world.colors.bg1 || '#1a0a2e'}, ${world.colors.bg2 || '#2d1b4e'});">
    </div>
    <div class="char-detail-content">
      <button class="btn-back" onclick="showCollection()">← Collection</button>
      <div class="char-detail-main">
        <div class="char-detail-char celebrating-idle" id="char-detail-char">
          ${renderCharacter(charId, 240)}
        </div>
        <div class="char-detail-info">
          <h2 class="char-detail-name" style="color:${char.colors.primary};">${char.name}</h2>
          <div class="char-detail-world">${world.emoji} ${world.name}</div>
          <p class="char-detail-desc">${char.description}</p>
          <div class="char-detail-colors">
            ${Object.values(char.colors).map(c => `<span class="color-swatch" style="background:${c}"></span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  showScreen('character-detail');

  // Particle burst from character
  setTimeout(() => {
    const charEl = q('#char-detail-char');
    if (charEl) {
      const rect = charEl.getBoundingClientRect();
      const colors = [char.colors.primary, char.colors.accent, '#FFD700', '#FFFFFF'];
      particles.burst(rect.left + rect.width/2, rect.top + rect.height/2, colors, 16);
    }
  }, 300);
}

// ─── Sound Toggle ─────────────────────────────────────────────────────────────
function toggleSound() {
  save.soundEnabled = audio.toggle();
  writeSave(save);
  const btn = q('#sound-toggle');
  if (btn) btn.textContent = save.soundEnabled ? '🔊' : '🔇';
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  buildHome(); // initial paint — audio not yet safe (no user gesture)
  // Preload real character images in background; rebuild home when ready
  if (typeof CharacterImages !== 'undefined') {
    CharacterImages.preloadAll().then(() => {
      buildHome(); // repaint with real images now loaded
    });
  }

  // Set up unlock modal
  if (!q('#unlock-modal')) {
    const modal = make('div', 'modal hidden');
    modal.id = 'unlock-modal';
    document.body.appendChild(modal);
  }

  // Apply sound setting
  if (!save.soundEnabled) {
    // Don't init audio yet, wait for interaction
  }
}

// Start the game when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
