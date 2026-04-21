// house.js — My Cottage: house building and decoration feature for Dreamy Dojo

// ─── SVG Icon Builders ────────────────────────────────────────────────────────
// Each returns an SVG string. size = pixel square.

function svgCozyBed(size) {
  const s = size;
  const hw = s * 0.88, hx = s * 0.06;
  const headH = s * 0.30, headY = s * 0.06;
  const mattH = s * 0.38, mattY = headY + headH - s * 0.04;
  const blanketH = s * 0.22, blanketY = mattY + mattH * 0.45;
  const pillarW = hw * 0.42, pillarH = mattH * 0.36;
  const p1x = hx + hw * 0.07, p2x = hx + hw * 0.52;
  const pillY = mattY + s * 0.04;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bed-head-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFB5C8"/>
      <stop offset="100%" stop-color="#FF85A1"/>
    </linearGradient>
    <linearGradient id="bed-blanket-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D4B8F0"/>
      <stop offset="100%" stop-color="#C8A8E8"/>
    </linearGradient>
    <radialGradient id="bed-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.94}" rx="${hw*0.48}" ry="${s*0.04}" fill="url(#bed-shadow-${s})"/>
  <!-- Mattress -->
  <rect x="${hx}" y="${mattY}" width="${hw}" height="${mattH}" rx="${s*0.05}" fill="#FFF5F8" stroke="#F0D8E0" stroke-width="1.2"/>
  <!-- Headboard -->
  <rect x="${hx}" y="${headY}" width="${hw}" height="${headH}" rx="${s*0.10}" fill="url(#bed-head-${s})" stroke="#FF6B9D" stroke-width="1.2"/>
  <!-- Headboard highlight -->
  <ellipse cx="${hx + hw*0.22}" cy="${headY + headH*0.28}" rx="${hw*0.1}" ry="${headH*0.18}" fill="rgba(255,255,255,0.42)"/>
  <!-- Blanket -->
  <rect x="${hx + s*0.03}" y="${blanketY}" width="${hw - s*0.06}" height="${blanketH}" rx="${s*0.06}" fill="url(#bed-blanket-${s})"/>
  <!-- Blanket stripe lines -->
  <line x1="${hx+s*0.04}" y1="${blanketY + blanketH*0.33}" x2="${hx+hw-s*0.04}" y2="${blanketY + blanketH*0.33}" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
  <line x1="${hx+s*0.04}" y1="${blanketY + blanketH*0.66}" x2="${hx+hw-s*0.04}" y2="${blanketY + blanketH*0.66}" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
  <!-- Pillow 1 -->
  <ellipse cx="${p1x + pillarW*0.5}" cy="${pillY + pillarH*0.5}" rx="${pillarW*0.46}" ry="${pillarH*0.44}" fill="white" stroke="#EDD8E8" stroke-width="1"/>
  <ellipse cx="${p1x + pillarW*0.32}" cy="${pillY + pillarH*0.3}" rx="${pillarW*0.14}" ry="${pillarH*0.13}" fill="rgba(255,255,255,0.7)"/>
  <!-- Pillow 2 -->
  <ellipse cx="${p2x + pillarW*0.5}" cy="${pillY + pillarH*0.5}" rx="${pillarW*0.46}" ry="${pillarH*0.44}" fill="white" stroke="#EDD8E8" stroke-width="1"/>
  <ellipse cx="${p2x + pillarW*0.32}" cy="${pillY + pillarH*0.3}" rx="${pillarW*0.14}" ry="${pillarH*0.13}" fill="rgba(255,255,255,0.7)"/>
</svg>`;
}

function svgRoundTable(size) {
  const s = size;
  const cx = s * 0.5, cy = s * 0.42;
  const rx = s * 0.38, ry = s * 0.13;
  const legW = s * 0.06, legH = s * 0.28;
  const legX = cx - legW / 2;
  const baseRx = s * 0.18, baseY = cy + legH + ry * 0.4;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="tbl-top-${s}" cx="38%" cy="35%" r="62%">
      <stop offset="0%" stop-color="#E8B88A"/>
      <stop offset="60%" stop-color="#D4956A"/>
      <stop offset="100%" stop-color="#C07A50"/>
    </radialGradient>
    <radialGradient id="tbl-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Floor shadow -->
  <ellipse cx="${cx}" cy="${baseY + s*0.05}" rx="${baseRx*0.9}" ry="${s*0.04}" fill="url(#tbl-shadow-${s})"/>
  <!-- Base feet -->
  <ellipse cx="${cx}" cy="${baseY}" rx="${baseRx}" ry="${s*0.045}" fill="#A86848"/>
  <!-- Leg -->
  <rect x="${legX}" y="${cy + ry*0.6}" width="${legW}" height="${legH}" rx="${legW*0.5}" fill="#C07A50"/>
  <!-- Table surface edge (darker ring) -->
  <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#C07A50"/>
  <!-- Table surface -->
  <ellipse cx="${cx}" cy="${cy - s*0.012}" rx="${rx*0.94}" ry="${ry*0.82}" fill="url(#tbl-top-${s})"/>
  <!-- Surface glint -->
  <ellipse cx="${cx - rx*0.25}" cy="${cy - ry*0.55 - s*0.012}" rx="${rx*0.18}" ry="${ry*0.28}" fill="rgba(255,255,255,0.38)" opacity="0.7"/>
</svg>`;
}

function svgPlushSofa(size) {
  const s = size;
  const sw = s * 0.90, sx = s * 0.05;
  const backH = s * 0.44, backY = s * 0.14;
  const seatH = s * 0.26, seatY = backY + backH * 0.62;
  const armW = s * 0.11, armH = s * 0.35, armY = backY + s * 0.02;
  const cushW = (sw - armW * 2) / 3 - s * 0.015;
  const legSize = s * 0.06;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sofa-back-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFC8D8"/>
      <stop offset="100%" stop-color="#FFB5C8"/>
    </linearGradient>
    <linearGradient id="sofa-seat-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFD4E2"/>
      <stop offset="100%" stop-color="#FFC0D4"/>
    </linearGradient>
    <radialGradient id="sofa-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.95}" rx="${sw*0.47}" ry="${s*0.035}" fill="url(#sofa-shadow-${s})"/>
  <!-- Legs -->
  <rect x="${sx + s*0.06}" y="${seatY+seatH}" width="${legSize}" height="${legSize}" rx="${legSize*0.35}" fill="#C8906A"/>
  <rect x="${sx + sw - s*0.06 - legSize}" y="${seatY+seatH}" width="${legSize}" height="${legSize}" rx="${legSize*0.35}" fill="#C8906A"/>
  <!-- Backrest -->
  <rect x="${sx}" y="${backY}" width="${sw}" height="${backH}" rx="${s*0.08}" fill="url(#sofa-back-${s})"/>
  <!-- Backrest highlight -->
  <ellipse cx="${sx + sw*0.22}" cy="${backY + backH*0.25}" rx="${sw*0.1}" ry="${backH*0.14}" fill="rgba(255,255,255,0.38)"/>
  <!-- Arms -->
  <rect x="${sx}" y="${armY}" width="${armW}" height="${armH}" rx="${s*0.06}" fill="#FF9CB8"/>
  <rect x="${sx + sw - armW}" y="${armY}" width="${armW}" height="${armH}" rx="${s*0.06}" fill="#FF9CB8"/>
  <!-- Seat -->
  <rect x="${sx + armW - s*0.01}" y="${seatY}" width="${sw - armW*2 + s*0.02}" height="${seatH}" rx="${s*0.06}" fill="url(#sofa-seat-${s})"/>
  <!-- Seat cushions (3) -->
  ${[0,1,2].map(i => {
    const cx2 = sx + armW + s*0.01 + i*(cushW + s*0.015);
    return `<rect x="${cx2}" y="${seatY + s*0.02}" width="${cushW}" height="${seatH - s*0.04}" rx="${s*0.05}" fill="rgba(255,255,255,0.22)" stroke="rgba(255,200,220,0.4)" stroke-width="1"/>`;
  }).join('')}
</svg>`;
}

function svgBookshelf(size) {
  const s = size;
  const fw = s * 0.82, fx = s * 0.09;
  const fh = s * 0.82, fy = s * 0.10;
  const shelfY1 = fy + fh * 0.45;
  const shelfY2 = fy + fh * 0.75;
  const boardH = s * 0.032;
  const bookColors = ['#FF8FA0','#7EC8E3','#90E0B4','#D4A8F0','#FFCC66','#FF9080','#A0D0FF'];
  function books(y, count) {
    const bookH = shelfY1 - fy - boardH * 1.2;
    const totalW = fw - s * 0.06;
    const bw = totalW / count - s * 0.012;
    return Array.from({length: count}, (_, i) => {
      const bx = fx + s * 0.03 + i * (bw + s * 0.012);
      const col = bookColors[i % bookColors.length];
      const h = bookH * (0.78 + Math.sin(i * 1.7) * 0.18);
      const by = y - h;
      return `<rect x="${bx}" y="${by}" width="${bw}" height="${h}" rx="${s*0.02}" fill="${col}" opacity="0.9"/>
<ellipse cx="${bx + bw*0.5}" cy="${by + h*0.35}" rx="${bw*0.18}" ry="${h*0.055}" fill="rgba(255,255,255,0.35)"/>`;
    }).join('');
  }
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shelf-frame-${s}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C07840"/>
      <stop offset="50%" stop-color="#D4956A"/>
      <stop offset="100%" stop-color="#B86C38"/>
    </linearGradient>
    <radialGradient id="shelf-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.2)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${fw*0.48}" ry="${s*0.035}" fill="url(#shelf-shadow-${s})"/>
  <!-- Frame -->
  <rect x="${fx}" y="${fy}" width="${fw}" height="${fh}" rx="${s*0.06}" fill="url(#shelf-frame-${s})"/>
  <!-- Inner back panel -->
  <rect x="${fx+s*0.035}" y="${fy+s*0.035}" width="${fw-s*0.07}" height="${fh-s*0.07}" rx="${s*0.04}" fill="#F8E8D8"/>
  <!-- Shelf 1 (top section books) -->
  ${books(shelfY1 - boardH * 0.5, 4)}
  <!-- Shelf board 1 -->
  <rect x="${fx+s*0.02}" y="${shelfY1}" width="${fw-s*0.04}" height="${boardH}" rx="${s*0.01}" fill="#C07840"/>
  <!-- Shelf 2 (bottom section books) -->
  ${(() => {
    const bookH2 = shelfY2 - shelfY1 - boardH * 2.2;
    const totalW = fw - s * 0.06;
    const count = 5;
    const bw = totalW / count - s * 0.010;
    return Array.from({length: count}, (_, i) => {
      const bx = fx + s * 0.03 + i * (bw + s * 0.010);
      const col = bookColors[(i + 2) % bookColors.length];
      const h = bookH2 * (0.8 + Math.sin(i * 2.1) * 0.16);
      const by = shelfY2 - boardH * 0.5 - h;
      return `<rect x="${bx}" y="${by}" width="${bw}" height="${h}" rx="${s*0.02}" fill="${col}" opacity="0.9"/>
<ellipse cx="${bx + bw*0.5}" cy="${by + h*0.35}" rx="${bw*0.18}" ry="${h*0.055}" fill="rgba(255,255,255,0.35)"/>`;
    }).join('');
  })()}
  <!-- Shelf board 2 -->
  <rect x="${fx+s*0.02}" y="${shelfY2}" width="${fw-s*0.04}" height="${boardH}" rx="${s*0.01}" fill="#C07840"/>
</svg>`;
}

function svgToyChest(size) {
  const s = size;
  const bw = s * 0.84, bx = s * 0.08;
  const bodyH = s * 0.46, bodyY = s * 0.44;
  const lidH = s * 0.22, lidY = s * 0.22;
  const stripeH = s * 0.08;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="chest-body-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F5C84A"/>
      <stop offset="100%" stop-color="#E0A82A"/>
    </linearGradient>
    <linearGradient id="chest-lid-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFDC6A"/>
      <stop offset="100%" stop-color="#F0C040"/>
    </linearGradient>
    <radialGradient id="chest-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${bw*0.47}" ry="${s*0.035}" fill="url(#chest-shadow-${s})"/>
  <!-- Body -->
  <rect x="${bx}" y="${bodyY}" width="${bw}" height="${bodyH}" rx="${s*0.07}" fill="url(#chest-body-${s})"/>
  <!-- Decorative stripe -->
  <rect x="${bx+s*0.02}" y="${bodyY + bodyH*0.35}" width="${bw-s*0.04}" height="${stripeH}" rx="${s*0.02}" fill="rgba(255,255,255,0.18)"/>
  <rect x="${bx+s*0.02}" y="${bodyY + bodyH*0.35}" width="${(bw-s*0.04)/6}" height="${stripeH}" rx="${s*0.02}" fill="rgba(255,107,157,0.55)"/>
  <rect x="${bx+s*0.02+(bw-s*0.04)/6}" y="${bodyY + bodyH*0.35}" width="${(bw-s*0.04)/6}" height="${stripeH}" fill="rgba(107,200,255,0.55)"/>
  <rect x="${bx+s*0.02+(bw-s*0.04)/6*2}" y="${bodyY + bodyH*0.35}" width="${(bw-s*0.04)/6}" height="${stripeH}" fill="rgba(255,220,80,0.55)"/>
  <rect x="${bx+s*0.02+(bw-s*0.04)/6*3}" y="${bodyY + bodyH*0.35}" width="${(bw-s*0.04)/6}" height="${stripeH}" fill="rgba(144,224,180,0.55)"/>
  <rect x="${bx+s*0.02+(bw-s*0.04)/6*4}" y="${bodyY + bodyH*0.35}" width="${(bw-s*0.04)/6}" height="${stripeH}" fill="rgba(212,168,240,0.55)"/>
  <rect x="${bx+s*0.02+(bw-s*0.04)/6*5}" y="${bodyY + bodyH*0.35}" width="${(bw-s*0.04)/6}" height="${stripeH}" rx="0 ${s*0.02} ${s*0.02} 0" fill="rgba(255,160,100,0.55)"/>
  <!-- Gold latch -->
  <rect x="${s*0.5 - s*0.055}" y="${bodyY - s*0.03}" width="${s*0.11}" height="${s*0.07}" rx="${s*0.025}" fill="#C8A030"/>
  <circle cx="${s*0.5}" cy="${bodyY + s*0.015}" r="${s*0.032}" fill="#D4B040" stroke="#A87820" stroke-width="1.2"/>
  <!-- Lid -->
  <rect x="${bx}" y="${lidY}" width="${bw}" height="${lidH}" rx="${s*0.08}" fill="url(#chest-lid-${s})"/>
  <!-- Lid top edge depth -->
  <rect x="${bx}" y="${lidY}" width="${bw}" height="${s*0.025}" rx="${s*0.08} ${s*0.08} 0 0" fill="rgba(255,255,255,0.3)"/>
  <!-- Lid highlight -->
  <ellipse cx="${bx + bw*0.25}" cy="${lidY + lidH*0.3}" rx="${bw*0.12}" ry="${lidH*0.2}" fill="rgba(255,255,255,0.35)"/>
</svg>`;
}

function svgLamp(size) {
  const s = size;
  const cx = s * 0.5;
  const shadeW = s * 0.58, shadeTop = s * 0.12, shadeBot = s * 0.44;
  const shadeH = shadeBot - shadeTop;
  const poleX = cx - s * 0.04, poleW = s * 0.08;
  const poleY = shadeBot - s * 0.02, poleH = s * 0.35;
  const baseY = poleY + poleH;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lamp-shade-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFB8A0"/>
      <stop offset="100%" stop-color="#FF9080"/>
    </linearGradient>
    <radialGradient id="lamp-glow-${s}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="rgba(255,240,180,0.38)"/>
      <stop offset="100%" stop-color="rgba(255,240,180,0)"/>
    </radialGradient>
    <radialGradient id="lamp-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Warm glow behind shade -->
  <ellipse cx="${cx}" cy="${shadeTop + shadeH*0.6}" rx="${shadeW*0.7}" ry="${shadeH*0.8}" fill="url(#lamp-glow-${s})"/>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${s*0.2}" ry="${s*0.03}" fill="url(#lamp-shadow-${s})"/>
  <!-- Pole -->
  <rect x="${poleX}" y="${poleY}" width="${poleW}" height="${poleH}" rx="${poleW*0.4}" fill="#C8A040"/>
  <!-- Base -->
  <ellipse cx="${cx}" cy="${baseY + s*0.02}" rx="${s*0.16}" ry="${s*0.055}" fill="#B88C30"/>
  <ellipse cx="${cx}" cy="${baseY}" rx="${s*0.14}" ry="${s*0.04}" fill="#C8A040"/>
  <!-- Shade (trapezoid via polygon) -->
  <polygon points="${cx-shadeW*0.22},${shadeTop} ${cx+shadeW*0.22},${shadeTop} ${cx+shadeW*0.5},${shadeBot} ${cx-shadeW*0.5},${shadeBot}" fill="url(#lamp-shade-${s})" rx="8"/>
  <!-- Shade highlight line -->
  <line x1="${cx-shadeW*0.14}" y1="${shadeTop + shadeH*0.15}" x2="${cx-shadeW*0.38}" y2="${shadeBot - shadeH*0.12}" stroke="rgba(255,255,255,0.38)" stroke-width="${s*0.016}"/>
  <!-- Bulb peek -->
  <ellipse cx="${cx}" cy="${shadeBot - s*0.03}" rx="${s*0.065}" ry="${s*0.045}" fill="rgba(255,248,200,0.75)"/>
</svg>`;
}

function svgFlowerPot(size) {
  const s = size;
  const cx = s * 0.5;
  const potTopW = s * 0.62, potBotW = s * 0.46;
  const potTopY = s * 0.54, potBotY = s * 0.86;
  const rimH = s * 0.06;
  const soilY = potTopY + rimH * 0.6;
  const flowerColors = ['#FF6B9D','#FFD700','#D4A8F0'];
  const stems = [
    { x: cx - s*0.15, angle: -28 },
    { x: cx,          angle:   0 },
    { x: cx + s*0.15, angle:  24 },
  ];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pot-body-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D8724A"/>
      <stop offset="100%" stop-color="#B85A34"/>
    </linearGradient>
    <radialGradient id="pot-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.2)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${potBotW*0.52}" ry="${s*0.032}" fill="url(#pot-shadow-${s})"/>
  <!-- Stems -->
  ${stems.map((st, i) => {
    const stemTopX = st.x + Math.sin(st.angle * Math.PI/180) * s * 0.14;
    const stemTopY = soilY - s * 0.22 - i * s * 0.04;
    return `<path d="M${st.x},${soilY + s*0.01} Q${(st.x+stemTopX)/2 + Math.cos(st.angle*Math.PI/180)*s*0.04},${(soilY+stemTopY)/2} ${stemTopX},${stemTopY}" stroke="#78C878" stroke-width="${s*0.028}" fill="none" stroke-linecap="round"/>`;
  }).join('')}
  <!-- Flowers -->
  ${stems.map((st, i) => {
    const stemTopX = st.x + Math.sin(st.angle * Math.PI/180) * s * 0.14;
    const stemTopY = soilY - s * 0.22 - i * s * 0.04;
    const fr = s * 0.075;
    const col = flowerColors[i];
    return `<circle cx="${stemTopX}" cy="${stemTopY}" r="${fr}" fill="${col}" opacity="0.92"/>
<circle cx="${stemTopX}" cy="${stemTopY}" r="${fr*0.42}" fill="white" opacity="0.88"/>`;
  }).join('')}
  <!-- Pot body (trapezoid) -->
  <polygon points="${cx-potTopW/2},${potTopY} ${cx+potTopW/2},${potTopY} ${cx+potBotW/2},${potBotY} ${cx-potBotW/2},${potBotY}" fill="url(#pot-body-${s})"/>
  <!-- Rim -->
  <rect x="${cx-potTopW/2 - s*0.02}" y="${potTopY}" width="${potTopW + s*0.04}" height="${rimH}" rx="${s*0.03}" fill="#C06040"/>
  <!-- Soil -->
  <ellipse cx="${cx}" cy="${soilY}" rx="${potTopW*0.44}" ry="${rimH*0.55}" fill="#6B4226"/>
  <!-- Pot highlight -->
  <ellipse cx="${cx - potTopW*0.22}" cy="${potTopY + (potBotY-potTopY)*0.25}" rx="${potTopW*0.06}" ry="${(potBotY-potTopY)*0.1}" fill="rgba(255,255,255,0.25)"/>
</svg>`;
}

function svgRainbowRug(size) {
  const s = size;
  const cx = s * 0.5, cy = s * 0.52;
  const rx = s * 0.44, ry = s * 0.34;
  const arcColors = ['#FF6B6B','#FFB347','#FFD700','#90EE90','#87CEFA','#DDA0DD'];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rug-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.15)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.94}" rx="${rx*0.8}" ry="${s*0.04}" fill="url(#rug-shadow-${s})"/>
  <!-- Base oval -->
  <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#FFF8F0"/>
  <!-- Concentric arcs (inside to outside order) -->
  ${arcColors.slice().reverse().map((col, i) => {
    const orx = rx * (0.55 + i * 0.086);
    const ory = ry * (0.55 + i * 0.086);
    return `<ellipse cx="${cx}" cy="${cy}" rx="${orx}" ry="${ory}" fill="none" stroke="${col}" stroke-width="${s*0.028}" opacity="0.55"/>`;
  }).join('')}
  <!-- Center oval accent -->
  <ellipse cx="${cx}" cy="${cy}" rx="${rx*0.28}" ry="${ry*0.28}" fill="#FFB5C8" opacity="0.35"/>
  <!-- Fringe dashes (16 around perimeter) -->
  ${Array.from({length:20}, (_,i) => {
    const angle = (i / 20) * Math.PI * 2;
    const x1 = cx + Math.cos(angle) * rx * 0.96;
    const y1 = cy + Math.sin(angle) * ry * 0.96;
    const x2 = cx + Math.cos(angle) * rx * 1.1;
    const y2 = cy + Math.sin(angle) * ry * 1.1;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#D4A8C0" stroke-width="${s*0.018}" stroke-linecap="round" opacity="0.7"/>`;
  }).join('')}
</svg>`;
}

function svgBalloon(size) {
  const s = size;
  const cx = s * 0.5, cy = s * 0.4;
  const br = s * 0.34;
  const knotY = cy + br + s * 0.01;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="balloon-${s}" cx="38%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FF9FC4"/>
      <stop offset="55%" stop-color="#FF6B9D"/>
      <stop offset="100%" stop-color="#D94080"/>
    </radialGradient>
    <radialGradient id="balloon-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.12)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- String (wavy) -->
  <path d="M${cx},${knotY + s*0.04} Q${cx + s*0.07},${knotY + s*0.22} ${cx - s*0.04},${knotY + s*0.38} Q${cx + s*0.06},${knotY + s*0.54} ${cx},${s*0.96}" stroke="#C87090" stroke-width="${s*0.018}" fill="none" stroke-linecap="round"/>
  <!-- Balloon body -->
  <circle cx="${cx}" cy="${cy}" r="${br}" fill="url(#balloon-${s})"/>
  <!-- Shine spot -->
  <ellipse cx="${cx - br*0.28}" cy="${cy - br*0.32}" rx="${br*0.2}" ry="${br*0.14}" fill="rgba(255,255,255,0.58)"/>
  <!-- Small heart decoration -->
  <text x="${cx}" y="${cy + s*0.04}" text-anchor="middle" font-size="${s*0.2}" fill="rgba(255,255,255,0.65)">♥</text>
  <!-- Knot triangle -->
  <polygon points="${cx},${knotY} ${cx - s*0.045},${knotY + s*0.05} ${cx + s*0.045},${knotY + s*0.05}" fill="#D94080"/>
</svg>`;
}

function svgPiano(size) {
  const s = size;
  const bw = s * 0.88, bx = s * 0.06;
  const bodyH = s * 0.60, bodyY = s * 0.12;
  const keysH = s * 0.20, keysY = bodyY + bodyH - keysH;
  const legW = s * 0.07, legH = s * 0.14;
  const keyW = (bw - s * 0.04) / 7;
  const blackKeyW = keyW * 0.55, blackKeyH = keysH * 0.58;
  const blackKeyOffsets = [1, 2, 4, 5, 6]; // which of 7 positions get a black key to the left
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="piano-body-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3D2560"/>
      <stop offset="100%" stop-color="#1E1035"/>
    </linearGradient>
    <radialGradient id="piano-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.22)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.97}" rx="${bw*0.46}" ry="${s*0.03}" fill="url(#piano-shadow-${s})"/>
  <!-- Legs -->
  <rect x="${bx + s*0.05}" y="${bodyY+bodyH}" width="${legW}" height="${legH}" rx="${legW*0.35}" fill="#2A1448"/>
  <rect x="${bx + bw - s*0.05 - legW}" y="${bodyY+bodyH}" width="${legW}" height="${legH}" rx="${legW*0.35}" fill="#2A1448"/>
  <!-- Body -->
  <rect x="${bx}" y="${bodyY}" width="${bw}" height="${bodyH}" rx="${s*0.06}" fill="url(#piano-body-${s})"/>
  <!-- Piano lid top shine -->
  <rect x="${bx+s*0.02}" y="${bodyY+s*0.02}" width="${bw-s*0.04}" height="${s*0.03}" rx="${s*0.04}" fill="rgba(255,255,255,0.12)"/>
  <!-- Keys panel background -->
  <rect x="${bx+s*0.02}" y="${keysY}" width="${bw-s*0.04}" height="${keysH}" rx="${s*0.03}" fill="white"/>
  <!-- White keys -->
  ${Array.from({length:7}, (_,i) => {
    const kx = bx + s*0.02 + i * keyW + i * s*0.002;
    return `<rect x="${kx + s*0.004}" y="${keysY + s*0.01}" width="${keyW - s*0.01}" height="${keysH - s*0.02}" rx="${s*0.02}" fill="white" stroke="#E0D0F0" stroke-width="1"/>`;
  }).join('')}
  <!-- Black keys: 2+3 pattern = positions 1,2,4,5,6 (0-based: after white keys 0,1,3,4,5) -->
  ${[0,1,3,4,5].map((wi) => {
    const kx = bx + s*0.02 + wi * keyW + wi * s*0.002 + keyW * 0.72 - blackKeyW/2;
    return `<rect x="${kx}" y="${keysY}" width="${blackKeyW}" height="${blackKeyH}" rx="${s*0.015}" fill="#1A0830"/>`;
  }).join('')}
  <!-- Music notes floating above -->
  <text x="${bx + bw*0.28}" y="${bodyY + bodyH*0.38}" font-size="${s*0.14}" fill="rgba(200,180,255,0.65)">♪</text>
  <text x="${bx + bw*0.58}" y="${bodyY + bodyH*0.26}" font-size="${s*0.18}" fill="rgba(200,180,255,0.55)">♫</text>
</svg>`;
}

function svgWardrobe(size) {
  const s = size;
  const bw = s * 0.80, bx = s * 0.10;
  const bodyH = s * 0.74, bodyY = s * 0.14;
  const crownH = s * 0.07, crownY = bodyY - crownH * 0.5;
  const footH = s * 0.06, footY = bodyY + bodyH;
  const doorW = (bw - s * 0.02) * 0.5;
  const handleR = s * 0.025;
  const handle1X = bx + doorW - handleR * 2.5;
  const handle2X = bx + doorW + s * 0.02 + handleR * 2.5;
  const handleY = bodyY + bodyH * 0.5;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ward-body-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0D4F8"/>
      <stop offset="100%" stop-color="#C8B8EC"/>
    </linearGradient>
    <radialGradient id="ward-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.97}" rx="${bw*0.46}" ry="${s*0.03}" fill="url(#ward-shadow-${s})"/>
  <!-- Feet -->
  <rect x="${bx+s*0.06}" y="${footY}" width="${s*0.09}" height="${footH}" rx="${s*0.03}" fill="#B0A0D8"/>
  <rect x="${bx+bw-s*0.06-s*0.09}" y="${footY}" width="${s*0.09}" height="${footH}" rx="${s*0.03}" fill="#B0A0D8"/>
  <!-- Body -->
  <rect x="${bx}" y="${bodyY}" width="${bw}" height="${bodyH}" rx="${s*0.06}" fill="url(#ward-body-${s})"/>
  <!-- Crown molding -->
  <rect x="${bx - s*0.015}" y="${crownY}" width="${bw + s*0.03}" height="${crownH}" rx="${s*0.035}" fill="#D0C0F0"/>
  <!-- Door divider -->
  <line x1="${bx + doorW + s*0.01}" y1="${bodyY + s*0.03}" x2="${bx + doorW + s*0.01}" y2="${bodyY + bodyH - s*0.03}" stroke="#B0A0D8" stroke-width="${s*0.018}"/>
  <!-- Door panels (inset rect on each door) -->
  <rect x="${bx+s*0.06}" y="${bodyY+s*0.07}" width="${doorW-s*0.08}" height="${bodyH-s*0.14}" rx="${s*0.04}" fill="rgba(255,255,255,0.18)"/>
  <rect x="${bx+doorW+s*0.04}" y="${bodyY+s*0.07}" width="${doorW-s*0.08}" height="${bodyH-s*0.14}" rx="${s*0.04}" fill="rgba(255,255,255,0.18)"/>
  <!-- Handles -->
  <circle cx="${handle1X}" cy="${handleY}" r="${handleR}" fill="#D4A830" stroke="#A87820" stroke-width="1"/>
  <circle cx="${handle2X}" cy="${handleY}" r="${handleR}" fill="#D4A830" stroke="#A87820" stroke-width="1"/>
  <!-- Decorative hearts above handles -->
  <text x="${handle1X}" y="${handleY - handleR*2.8}" text-anchor="middle" font-size="${s*0.09}" fill="rgba(255,120,160,0.7)">♥</text>
  <text x="${handle2X}" y="${handleY - handleR*2.8}" text-anchor="middle" font-size="${s*0.09}" fill="rgba(255,120,160,0.7)">♥</text>
</svg>`;
}

function svgVanityMirror(size) {
  const s = size;
  const cx = s * 0.5;
  const mirrorRx = s * 0.28, mirrorRy = s * 0.34;
  const mirrorCy = s * 0.38;
  const shelfW = s * 0.72, shelfH = s * 0.07, shelfY = mirrorCy + mirrorRy - s * 0.03;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="van-mirror-${s}" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#EFE8FF"/>
      <stop offset="60%" stop-color="#D8CCFF"/>
      <stop offset="100%" stop-color="#C0B0F0"/>
    </radialGradient>
    <linearGradient id="van-frame-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5DC60"/>
      <stop offset="50%" stop-color="#E8C840"/>
      <stop offset="100%" stop-color="#D4A820"/>
    </linearGradient>
    <radialGradient id="van-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.97}" rx="${shelfW*0.46}" ry="${s*0.03}" fill="url(#van-shadow-${s})"/>
  <!-- Shelf surface -->
  <rect x="${cx - shelfW/2}" y="${shelfY}" width="${shelfW}" height="${shelfH}" rx="${s*0.035}" fill="url(#van-frame-${s})"/>
  <!-- Mirror frame -->
  <ellipse cx="${cx}" cy="${mirrorCy}" rx="${mirrorRx + s*0.038}" ry="${mirrorRy + s*0.038}" fill="url(#van-frame-${s})"/>
  <!-- Mirror glass -->
  <ellipse cx="${cx}" cy="${mirrorCy}" rx="${mirrorRx}" ry="${mirrorRy}" fill="url(#van-mirror-${s})"/>
  <!-- Glass sparkle dots -->
  <circle cx="${cx - mirrorRx*0.32}" cy="${mirrorCy - mirrorRy*0.45}" r="${s*0.022}" fill="rgba(255,255,255,0.72)"/>
  <circle cx="${cx + mirrorRx*0.50}" cy="${mirrorCy - mirrorRy*0.28}" r="${s*0.015}" fill="rgba(255,255,255,0.55)"/>
  <circle cx="${cx + mirrorRx*0.18}" cy="${mirrorCy + mirrorRy*0.55}" r="${s*0.012}" fill="rgba(255,255,255,0.45)"/>
  <!-- Perfume bottle 1 -->
  <rect x="${cx - shelfW*0.3}" y="${shelfY - s*0.13}" width="${s*0.08}" height="${s*0.13}" rx="${s*0.025}" fill="#FF9DC0" opacity="0.85"/>
  <ellipse cx="${cx - shelfW*0.3 + s*0.04}" cy="${shelfY - s*0.14}" rx="${s*0.04}" ry="${s*0.025}" fill="#FFB5D0" opacity="0.9"/>
  <!-- Perfume bottle 2 -->
  <rect x="${cx + shelfW*0.2}" y="${shelfY - s*0.10}" width="${s*0.072}" height="${s*0.10}" rx="${s*0.022}" fill="#C8A8F0" opacity="0.85"/>
  <ellipse cx="${cx + shelfW*0.2 + s*0.036}" cy="${shelfY - s*0.11}" rx="${s*0.036}" ry="${s*0.022}" fill="#D8C0FF" opacity="0.9"/>
</svg>`;
}

function svgHeartFrame(size) {
  const s = size;
  const fw = s * 0.78, fh = s * 0.74;
  const fx = (s - fw) / 2, fy = (s - fh) / 2;
  const iw = fw - s * 0.10, ih = fh - s * 0.10;
  const ix = (s - iw) / 2, iy = (s - ih) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="frame-grad-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8DC60"/>
      <stop offset="50%" stop-color="#E8C440"/>
      <stop offset="100%" stop-color="#D4A820"/>
    </linearGradient>
    <radialGradient id="frame-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.97}" rx="${fw*0.44}" ry="${s*0.03}" fill="url(#frame-shadow-${s})"/>
  <!-- Frame -->
  <rect x="${fx}" y="${fy}" width="${fw}" height="${fh}" rx="${s*0.07}" fill="url(#frame-grad-${s})"/>
  <!-- Inner picture area -->
  <rect x="${ix}" y="${iy}" width="${iw}" height="${ih}" rx="${s*0.04}" fill="#FFEEF5"/>
  <!-- Picture: soft landscape (clouds + hills) -->
  <rect x="${ix}" y="${iy + ih*0.6}" width="${iw}" height="${ih*0.4}" rx="0 0 ${s*0.04} ${s*0.04}" fill="#B8E8A0" opacity="0.7"/>
  <ellipse cx="${ix + iw*0.3}" cy="${iy + ih*0.35}" rx="${iw*0.22}" ry="${ih*0.16}" fill="rgba(255,255,255,0.8)"/>
  <ellipse cx="${ix + iw*0.7}" cy="${iy + ih*0.28}" rx="${iw*0.18}" ry="${ih*0.13}" fill="rgba(255,255,255,0.7)"/>
  <!-- Corner hearts on frame -->
  <text x="${fx + fw*0.1}" y="${fy + fh*0.18}" font-size="${s*0.10}" fill="rgba(255,120,160,0.75)">♥</text>
  <text x="${fx + fw*0.80}" y="${fy + fh*0.18}" font-size="${s*0.10}" fill="rgba(255,120,160,0.75)">♥</text>
  <text x="${fx + fw*0.1}" y="${fy + fh*0.92}" font-size="${s*0.10}" fill="rgba(255,120,160,0.75)">♥</text>
  <text x="${fx + fw*0.80}" y="${fy + fh*0.92}" font-size="${s*0.10}" fill="rgba(255,120,160,0.75)">♥</text>
</svg>`;
}

function svgStarBunting(size) {
  const s = size;
  const stringY = s * 0.22;
  const starColors = ['#FFD700','#FF9DC0','#D4A8F0','#90E8B4','#FF9DC0'];
  const starPositions = [0.12, 0.30, 0.50, 0.70, 0.88];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <!-- String -->
  <path d="M${s*0.04},${stringY} Q${s*0.25},${stringY + s*0.06} ${s*0.5},${stringY} Q${s*0.75},${stringY - s*0.04} ${s*0.96},${stringY}" stroke="#C0A0B0" stroke-width="${s*0.018}" fill="none"/>
  <!-- Stars on strings -->
  ${starPositions.map((xf, i2) => {
    const sx = s * xf;
    const sy = stringY + s * (0.12 + (i2 % 2) * 0.08);
    const r = s * 0.072;
    const col = starColors[i2 % starColors.length];
    const pts = Array.from({length:10}, (_,j) => {
      const angle = (j * Math.PI / 5) - Math.PI / 2;
      const radius = j % 2 === 0 ? r : r * 0.42;
      return `${(sx + Math.cos(angle) * radius).toFixed(2)},${(sy + Math.sin(angle) * radius).toFixed(2)}`;
    }).join(' ');
    return `<line x1="${sx.toFixed(1)}" y1="${stringY}" x2="${sx.toFixed(1)}" y2="${(sy - r).toFixed(1)}" stroke="#C0A0B0" stroke-width="${s*0.014}"/>
<polygon points="${pts}" fill="${col}" opacity="0.92"/>`;
  }).join('')}
  <!-- Circle decorations between stars -->
  ${[0.21, 0.40, 0.60, 0.79].map((xf, i) => {
    const cx2 = s * xf;
    return `<circle cx="${cx2}" cy="${stringY}" r="${s*0.028}" fill="${starColors[(i+2) % starColors.length]}" opacity="0.65"/>`;
  }).join('')}
</svg>`;
}

function svgCloudShelf(size) {
  const s = size;
  const cx = s * 0.5;
  const cloudCy = s * 0.38;
  const shelfY = cloudCy + s * 0.22;
  const shelfH = s * 0.065;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cloud-blur-${s}">
      <feGaussianBlur stdDeviation="${s*0.012}" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="cloud-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.15)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Drop shadow under cloud -->
  <ellipse cx="${cx}" cy="${shelfY + shelfH + s*0.04}" rx="${s*0.33}" ry="${s*0.04}" fill="url(#cloud-shadow-${s})"/>
  <!-- Cloud puffs -->
  <circle cx="${cx - s*0.18}" cy="${cloudCy + s*0.05}" r="${s*0.14}" fill="white" filter="url(#cloud-blur-${s})"/>
  <circle cx="${cx}" cy="${cloudCy - s*0.04}" r="${s*0.20}" fill="white" filter="url(#cloud-blur-${s})"/>
  <circle cx="${cx + s*0.19}" cy="${cloudCy + s*0.06}" r="${s*0.15}" fill="white" filter="url(#cloud-blur-${s})"/>
  <circle cx="${cx - s*0.31}" cy="${cloudCy + s*0.1}" r="${s*0.10}" fill="white"/>
  <circle cx="${cx + s*0.30}" cy="${cloudCy + s*0.1}" r="${s*0.10}" fill="white"/>
  <!-- Shelf surface -->
  <rect x="${cx - s*0.36}" y="${shelfY}" width="${s*0.72}" height="${shelfH}" rx="${s*0.025}" fill="rgba(220,215,240,0.85)"/>
  <!-- Items on shelf: tiny star + tiny heart -->
  <text x="${cx - s*0.16}" y="${shelfY - s*0.03}" text-anchor="middle" font-size="${s*0.14}" fill="#FFD700" opacity="0.85">★</text>
  <text x="${cx + s*0.16}" y="${shelfY - s*0.03}" text-anchor="middle" font-size="${s*0.12}" fill="#FF9DC0" opacity="0.85">♥</text>
</svg>`;
}

function svgPlushBear(size) {
  const s = size;
  const cx = s * 0.5, cy = s * 0.5;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bear-body-${s}" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#F0C890"/>
      <stop offset="100%" stop-color="#D4A060"/>
    </radialGradient>
    <radialGradient id="bear-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.95}" rx="${s*0.26}" ry="${s*0.04}" fill="url(#bear-shadow-${s})"/>
  <!-- Body -->
  <ellipse cx="${cx}" cy="${cy + s*0.08}" rx="${s*0.28}" ry="${s*0.34}" fill="url(#bear-body-${s})"/>
  <!-- Belly patch -->
  <ellipse cx="${cx}" cy="${cy + s*0.16}" rx="${s*0.16}" ry="${s*0.20}" fill="rgba(255,240,210,0.65)"/>
  <!-- Head -->
  <circle cx="${cx}" cy="${cy - s*0.14}" r="${s*0.24}" fill="url(#bear-body-${s})"/>
  <!-- Ears -->
  <circle cx="${cx - s*0.17}" cy="${cy - s*0.32}" r="${s*0.09}" fill="#D4A060"/>
  <circle cx="${cx - s*0.17}" cy="${cy - s*0.32}" r="${s*0.055}" fill="#F0C890"/>
  <circle cx="${cx + s*0.17}" cy="${cy - s*0.32}" r="${s*0.09}" fill="#D4A060"/>
  <circle cx="${cx + s*0.17}" cy="${cy - s*0.32}" r="${s*0.055}" fill="#F0C890"/>
  <!-- Eyes -->
  <circle cx="${cx - s*0.088}" cy="${cy - s*0.17}" r="${s*0.04}" fill="#3A2010"/>
  <circle cx="${cx + s*0.088}" cy="${cy - s*0.17}" r="${s*0.04}" fill="#3A2010"/>
  <circle cx="${cx - s*0.075}" cy="${cy - s*0.19}" r="${s*0.014}" fill="white"/>
  <circle cx="${cx + s*0.102}" cy="${cy - s*0.19}" r="${s*0.014}" fill="white"/>
  <!-- Nose -->
  <ellipse cx="${cx}" cy="${cy - s*0.09}" rx="${s*0.055}" ry="${s*0.038}" fill="#7A4020"/>
  <!-- Smile -->
  <path d="M${cx - s*0.06},${cy - s*0.05} Q${cx},${cy + s*0.01} ${cx + s*0.06},${cy - s*0.05}" stroke="#7A4020" stroke-width="${s*0.025}" fill="none" stroke-linecap="round"/>
  <!-- Arms -->
  <ellipse cx="${cx - s*0.30}" cy="${cy + s*0.06}" rx="${s*0.065}" ry="${s*0.12}" fill="#D4A060" transform="rotate(-20,${cx - s*0.30},${cy + s*0.06})"/>
  <ellipse cx="${cx + s*0.30}" cy="${cy + s*0.06}" rx="${s*0.065}" ry="${s*0.12}" fill="#D4A060" transform="rotate(20,${cx + s*0.30},${cy + s*0.06})"/>
</svg>`;
}

function svgCake(size) {
  const s = size;
  const cx = s * 0.5;
  const cw = s * 0.72, ch1 = s * 0.20, ch2 = s * 0.18;
  const cx0 = (s - cw) / 2;
  const tier1Y = s * 0.60, tier2Y = tier1Y - ch1 - s * 0.01;
  const tier2W = cw * 0.72, tier2X = (s - tier2W) / 2;
  const frostingColors = ['#FF9DC0','#C8A8F0','#90E8B4'];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cake-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${cw*0.46}" ry="${s*0.03}" fill="url(#cake-shadow-${s})"/>
  <!-- Tier 1 (bottom) -->
  <rect x="${cx0}" y="${tier1Y}" width="${cw}" height="${ch1}" rx="${s*0.04}" fill="#FFB5C8"/>
  <!-- Tier 1 frosting drips -->
  ${[-0.28,-0.12,0.04,0.20,0.36].map(dx => `<ellipse cx="${cx + dx*cw}" cy="${tier1Y}" rx="${cw*0.06}" ry="${s*0.028}" fill="white" opacity="0.85"/>`).join('')}
  <!-- Tier 1 sprinkles -->
  ${Array.from({length:8}, (_,i) => `<rect x="${cx0+cw*0.1+i*cw*0.1}" y="${tier1Y+ch1*0.45}" width="${s*0.025}" height="${s*0.06}" rx="${s*0.01}" fill="${frostingColors[i%3]}" transform="rotate(${-30+i*10},${cx0+cw*0.1+i*cw*0.1+s*0.012},${tier1Y+ch1*0.45+s*0.03})"/>`).join('')}
  <!-- Tier 2 -->
  <rect x="${tier2X}" y="${tier2Y}" width="${tier2W}" height="${ch2}" rx="${s*0.04}" fill="#C8A8F0"/>
  <!-- Tier 2 frosting -->
  ${[-0.3,-0.1,0.12,0.32].map(dx => `<ellipse cx="${cx + dx*tier2W}" cy="${tier2Y}" rx="${tier2W*0.07}" ry="${s*0.025}" fill="white" opacity="0.85"/>`).join('')}
  <!-- Candles (3) -->
  ${[-0.18,0,0.18].map((dx,i) => {
    const candleX = cx + dx * tier2W - s * 0.022;
    const candleY = tier2Y - s * 0.18;
    const col = frostingColors[i % 3];
    return `<rect x="${candleX}" y="${candleY}" width="${s*0.044}" height="${s*0.18}" rx="${s*0.014}" fill="${col}"/>
<ellipse cx="${candleX + s*0.022}" cy="${candleY}" rx="${s*0.028}" ry="${s*0.018}" fill="#FFDC50"/>
<ellipse cx="${candleX + s*0.022}" cy="${candleY - s*0.03}" rx="${s*0.014}" ry="${s*0.026}" fill="#FF8020" opacity="0.85"/>`;
  }).join('')}
</svg>`;
}

// ─── New Furniture/Decor SVG Builders ─────────────────────────────────────────

function svgDresser(size) {
  const s = size;
  const bw = s * 0.80, bx = s * 0.10;
  const bodyH = s * 0.64, bodyY = s * 0.22;
  const drawerH = (bodyH - s * 0.08) / 3;
  const handleW = s * 0.14, handleH = s * 0.04;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dresser-body-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFE4EF"/>
      <stop offset="100%" stop-color="#F5C8D8"/>
    </linearGradient>
    <linearGradient id="dresser-drawer-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF0F6"/>
      <stop offset="100%" stop-color="#F8D8E8"/>
    </linearGradient>
    <radialGradient id="dresser-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${bw*0.47}" ry="${s*0.034}" fill="url(#dresser-shadow-${s})"/>
  <!-- Body -->
  <rect x="${bx}" y="${bodyY}" width="${bw}" height="${bodyH}" rx="${s*0.06}" fill="url(#dresser-body-${s})" stroke="#E8B8D0" stroke-width="1.2"/>
  <!-- Top surface highlight -->
  <rect x="${bx+s*0.02}" y="${bodyY+s*0.01}" width="${bw-s*0.04}" height="${s*0.025}" rx="${s*0.04}" fill="rgba(255,255,255,0.5)"/>
  <!-- 3 Drawers -->
  ${[0,1,2].map(i => {
    const dy = bodyY + s*0.04 + i*(drawerH + s*0.013);
    const hx = bx + (bw - handleW)/2;
    const hy = dy + drawerH/2 - handleH/2;
    return `<rect x="${bx+s*0.04}" y="${dy}" width="${bw-s*0.08}" height="${drawerH}" rx="${s*0.035}" fill="url(#dresser-drawer-${s})" stroke="#E0C0D0" stroke-width="1"/>
<ellipse cx="${s*0.5}" cy="${hy + handleH*0.5}" rx="${handleW*0.38}" ry="${handleH*0.9}" fill="#D4A840" stroke="#B88020" stroke-width="0.8"/>`;
  }).join('')}
  <!-- Body highlight -->
  <ellipse cx="${bx + bw*0.18}" cy="${bodyY + bodyH*0.22}" rx="${bw*0.07}" ry="${bodyH*0.07}" fill="rgba(255,255,255,0.32)"/>
</svg>`;
}

function svgVanityTable(size) {
  const s = size;
  const cx = s * 0.5;
  const tableW = s * 0.76, tableH = s * 0.12, tableY = s * 0.70;
  const tableX = (s - tableW) / 2;
  const mirR = s * 0.22;
  const mirCy = tableY - mirR - s * 0.04;
  const legH = s * 0.14, legW = s * 0.045;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="vnty-mirror-${s}" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#EFE0FF"/>
      <stop offset="60%" stop-color="#D8C0FF"/>
      <stop offset="100%" stop-color="#C8A8F8"/>
    </radialGradient>
    <linearGradient id="vnty-table-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E8D0F8"/>
      <stop offset="100%" stop-color="#D0B0EC"/>
    </linearGradient>
    <radialGradient id="vnty-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${tableW*0.46}" ry="${s*0.034}" fill="url(#vnty-shadow-${s})"/>
  <!-- Legs -->
  <rect x="${tableX + tableW*0.10}" y="${tableY+tableH}" width="${legW}" height="${legH}" rx="${legW*0.45}" fill="#C0A0E0"/>
  <rect x="${tableX + tableW*0.85 - legW}" y="${tableY+tableH}" width="${legW}" height="${legH}" rx="${legW*0.45}" fill="#C0A0E0"/>
  <!-- Table top -->
  <rect x="${tableX}" y="${tableY}" width="${tableW}" height="${tableH}" rx="${s*0.04}" fill="url(#vnty-table-${s})" stroke="#C8A8E0" stroke-width="1.2"/>
  <!-- Table top highlight -->
  <ellipse cx="${tableX + tableW*0.22}" cy="${tableY + tableH*0.35}" rx="${tableW*0.09}" ry="${tableH*0.28}" fill="rgba(255,255,255,0.42)"/>
  <!-- Mirror stand post -->
  <rect x="${cx - s*0.022}" y="${mirCy + mirR - s*0.01}" width="${s*0.044}" height="${tableY - (mirCy+mirR) + s*0.02}" rx="${s*0.02}" fill="#C0A0E0"/>
  <!-- Mirror frame -->
  <circle cx="${cx}" cy="${mirCy}" r="${mirR + s*0.032}" fill="#C8A040" stroke="#B08030" stroke-width="1"/>
  <!-- Mirror glass -->
  <circle cx="${cx}" cy="${mirCy}" r="${mirR}" fill="url(#vnty-mirror-${s})"/>
  <!-- Mirror glint -->
  <ellipse cx="${cx - mirR*0.3}" cy="${mirCy - mirR*0.38}" rx="${mirR*0.18}" ry="${mirR*0.12}" fill="rgba(255,255,255,0.62)"/>
  <circle cx="${cx + mirR*0.48}" cy="${mirCy - mirR*0.5}" r="${s*0.018}" fill="rgba(255,255,255,0.48)"/>
  <!-- Perfume bottle on table -->
  <rect x="${tableX + tableW*0.68}" y="${tableY - s*0.10}" width="${s*0.07}" height="${s*0.10}" rx="${s*0.02}" fill="#FF9DC0" opacity="0.85"/>
  <ellipse cx="${tableX + tableW*0.68 + s*0.035}" cy="${tableY - s*0.10}" rx="${s*0.035}" ry="${s*0.018}" fill="#FFB5D0" opacity="0.9"/>
</svg>`;
}

function svgRockingChair(size) {
  const s = size;
  const cx = s * 0.5;
  const seatW = s * 0.54, seatH = s * 0.10, seatY = s * 0.54, seatX = (s - seatW) / 2;
  const backH = s * 0.34, backY = seatY - backH + s * 0.02;
  const rockerRx = s * 0.42, rockerRy = s * 0.08;
  const rockerY = seatY + seatH + s * 0.12;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rocker-wood-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4956A"/>
      <stop offset="100%" stop-color="#B87848"/>
    </linearGradient>
    <linearGradient id="rocker-cushion-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFB5C8"/>
      <stop offset="100%" stop-color="#FF9DB8"/>
    </linearGradient>
    <radialGradient id="rocker-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${rockerRx*0.82}" ry="${s*0.032}" fill="url(#rocker-shadow-${s})"/>
  <!-- Rockers (arcs) -->
  <path d="M${cx - rockerRx},${rockerY} Q${cx},${rockerY - rockerRy*1.4} ${cx + rockerRx},${rockerY}" stroke="url(#rocker-wood-${s})" stroke-width="${s*0.045}" fill="none" stroke-linecap="round"/>
  <!-- Legs -->
  <line x1="${seatX + seatW*0.15}" y1="${seatY+seatH}" x2="${cx - rockerRx*0.6}" y2="${rockerY}" stroke="#C07848" stroke-width="${s*0.04}" stroke-linecap="round"/>
  <line x1="${seatX + seatW*0.85}" y1="${seatY+seatH}" x2="${cx + rockerRx*0.6}" y2="${rockerY}" stroke="#C07848" stroke-width="${s*0.04}" stroke-linecap="round"/>
  <!-- Back slats -->
  ${[0.2,0.5,0.8].map(f => {
    const bx2 = seatX + seatW*f;
    return `<line x1="${bx2}" y1="${seatY+s*0.02}" x2="${bx2 + (f-0.5)*s*0.06}" y2="${backY}" stroke="#C07848" stroke-width="${s*0.033}" stroke-linecap="round"/>`;
  }).join('')}
  <!-- Back top rail -->
  <rect x="${seatX - s*0.02}" y="${backY}" width="${seatW + s*0.04}" height="${s*0.042}" rx="${s*0.02}" fill="url(#rocker-wood-${s})"/>
  <!-- Seat -->
  <rect x="${seatX}" y="${seatY}" width="${seatW}" height="${seatH}" rx="${s*0.04}" fill="url(#rocker-wood-${s})"/>
  <!-- Cushion -->
  <rect x="${seatX + s*0.03}" y="${seatY - s*0.045}" width="${seatW - s*0.06}" height="${seatH*0.8}" rx="${s*0.035}" fill="url(#rocker-cushion-${s})"/>
  <ellipse cx="${seatX + seatW*0.25}" cy="${seatY - s*0.022}" rx="${seatW*0.1}" ry="${seatH*0.3}" fill="rgba(255,255,255,0.35)"/>
</svg>`;
}

function svgBunkBed(size) {
  const s = size;
  const bw = s * 0.86, bx = s * 0.07;
  const postW = s * 0.055, postH = s * 0.80, postY = s * 0.14;
  const mattH = s * 0.13;
  const bed1Y = postY + postH * 0.52;
  const bed2Y = postY + s * 0.04;
  const guardrailH = s * 0.10;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bunk-frame-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#90E0C8"/>
      <stop offset="100%" stop-color="#68C8A8"/>
    </linearGradient>
    <linearGradient id="bunk-bedding-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFD0E0"/>
      <stop offset="100%" stop-color="#FFB8CE"/>
    </linearGradient>
    <radialGradient id="bunk-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${bw*0.46}" ry="${s*0.032}" fill="url(#bunk-shadow-${s})"/>
  <!-- Posts (4 corners) -->
  <rect x="${bx}" y="${postY}" width="${postW}" height="${postH}" rx="${postW*0.35}" fill="url(#bunk-frame-${s})"/>
  <rect x="${bx+bw-postW}" y="${postY}" width="${postW}" height="${postH}" rx="${postW*0.35}" fill="url(#bunk-frame-${s})"/>
  <!-- Middle rail (ladder side) -->
  <rect x="${bx + bw - postW*1.5}" y="${postY + postH*0.25}" width="${postW*0.6}" height="${postH*0.2}" rx="${s*0.01}" fill="#68C8A8" opacity="0.7"/>
  <rect x="${bx + bw - postW*1.5}" y="${postY + postH*0.40}" width="${postW*0.6}" height="${postH*0.2}" rx="${s*0.01}" fill="#68C8A8" opacity="0.7"/>
  <!-- Bottom bed frame -->
  <rect x="${bx + postW*0.5}" y="${bed1Y}" width="${bw - postW}" height="${s*0.038}" rx="${s*0.018}" fill="#68C8A8"/>
  <!-- Bottom mattress -->
  <rect x="${bx + postW*0.6}" y="${bed1Y - mattH}" width="${bw - postW*1.2}" height="${mattH}" rx="${s*0.04}" fill="#FFF5F8" stroke="#F0D8E0" stroke-width="1"/>
  <!-- Bottom bedding -->
  <rect x="${bx + postW*0.6}" y="${bed1Y - mattH*0.55}" width="${bw - postW*1.2}" height="${mattH*0.48}" rx="${s*0.03}" fill="url(#bunk-bedding-${s})"/>
  <!-- Bottom pillow -->
  <ellipse cx="${bx + postW*1.5 + (bw-postW*2)*0.22}" cy="${bed1Y - mattH*0.78}" rx="${(bw-postW*2)*0.16}" ry="${mattH*0.22}" fill="white" stroke="#EDD8E8" stroke-width="0.8"/>
  <!-- Top bed frame -->
  <rect x="${bx + postW*0.5}" y="${bed2Y + mattH + s*0.01}" width="${bw - postW}" height="${s*0.038}" rx="${s*0.018}" fill="#68C8A8"/>
  <!-- Top mattress -->
  <rect x="${bx + postW*0.6}" y="${bed2Y}" width="${bw - postW*1.2}" height="${mattH}" rx="${s*0.04}" fill="#FFF5F8" stroke="#F0D8E0" stroke-width="1"/>
  <!-- Top bedding -->
  <rect x="${bx + postW*0.6}" y="${bed2Y + mattH*0.46}" width="${bw - postW*1.2}" height="${mattH*0.48}" rx="${s*0.03}" fill="url(#bunk-bedding-${s})"/>
  <!-- Top pillow -->
  <ellipse cx="${bx + postW*1.5 + (bw-postW*2)*0.22}" cy="${bed2Y + mattH*0.22}" rx="${(bw-postW*2)*0.16}" ry="${mattH*0.22}" fill="white" stroke="#EDD8E8" stroke-width="0.8"/>
  <!-- Guardrail top bunk -->
  <rect x="${bx + postW*0.6}" y="${bed2Y - guardrailH}" width="${(bw-postW*1.2)*0.55}" height="${s*0.032}" rx="${s*0.015}" fill="#90E0C8"/>
</svg>`;
}

function svgCozyArmchair(size) {
  const s = size;
  const bw = s * 0.72, bx = s * 0.14;
  const backH = s * 0.44, backY = s * 0.18;
  const seatH = s * 0.24, seatY = backY + backH * 0.60;
  const armW = s * 0.10, armH = s * 0.32, armY = backY + s * 0.04;
  const legH = s * 0.07;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="achair-back-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFCCA0"/>
      <stop offset="100%" stop-color="#F0B080"/>
    </linearGradient>
    <linearGradient id="achair-seat-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFD8B0"/>
      <stop offset="100%" stop-color="#F8C090"/>
    </linearGradient>
    <radialGradient id="achair-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${bw*0.46}" ry="${s*0.032}" fill="url(#achair-shadow-${s})"/>
  <!-- Legs -->
  <rect x="${bx + s*0.05}" y="${seatY+seatH}" width="${s*0.06}" height="${legH}" rx="${s*0.025}" fill="#D4956A"/>
  <rect x="${bx + bw - s*0.05 - s*0.06}" y="${seatY+seatH}" width="${s*0.06}" height="${legH}" rx="${s*0.025}" fill="#D4956A"/>
  <!-- Backrest -->
  <rect x="${bx}" y="${backY}" width="${bw}" height="${backH}" rx="${s*0.10}" fill="url(#achair-back-${s})"/>
  <!-- Backrest highlight -->
  <ellipse cx="${bx + bw*0.24}" cy="${backY + backH*0.26}" rx="${bw*0.11}" ry="${backH*0.15}" fill="rgba(255,255,255,0.38)"/>
  <!-- Arms -->
  <rect x="${bx - s*0.01}" y="${armY}" width="${armW}" height="${armH}" rx="${s*0.06}" fill="#E8A870"/>
  <rect x="${bx + bw - armW + s*0.01}" y="${armY}" width="${armW}" height="${armH}" rx="${s*0.06}" fill="#E8A870"/>
  <!-- Seat cushion -->
  <rect x="${bx + armW - s*0.01}" y="${seatY}" width="${bw - armW*2 + s*0.02}" height="${seatH}" rx="${s*0.07}" fill="url(#achair-seat-${s})"/>
  <!-- Seat highlight -->
  <ellipse cx="${bx + armW + (bw-armW*2)*0.28}" cy="${seatY + seatH*0.3}" rx="${(bw-armW*2)*0.18}" ry="${seatH*0.2}" fill="rgba(255,255,255,0.28)"/>
  <!-- Small decorative button in backrest center -->
  <circle cx="${bx + bw*0.5}" cy="${backY + backH*0.55}" r="${s*0.028}" fill="#D4956A" stroke="#C07840" stroke-width="0.8"/>
</svg>`;
}

function svgFlowerPotBig(size) {
  const s = size;
  const cx = s * 0.5;
  const potTopW = s * 0.66, potBotW = s * 0.48;
  const potTopY = s * 0.52, potBotY = s * 0.88;
  const rimH = s * 0.07;
  const soilY = potTopY + rimH * 0.55;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fpbig-pot-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E07848"/>
      <stop offset="100%" stop-color="#C05828"/>
    </linearGradient>
    <radialGradient id="fpbig-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.2)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${potBotW*0.54}" ry="${s*0.032}" fill="url(#fpbig-shadow-${s})"/>
  <!-- Stems -->
  <path d="M${cx-s*0.12},${soilY} Q${cx-s*0.18},${soilY-s*0.18} ${cx-s*0.14},${soilY-s*0.32}" stroke="#60B860" stroke-width="${s*0.03}" fill="none" stroke-linecap="round"/>
  <path d="M${cx},${soilY} Q${cx+s*0.04},${soilY-s*0.24} ${cx},${soilY-s*0.40}" stroke="#60B860" stroke-width="${s*0.03}" fill="none" stroke-linecap="round"/>
  <path d="M${cx+s*0.12},${soilY} Q${cx+s*0.20},${soilY-s*0.16} ${cx+s*0.16},${soilY-s*0.30}" stroke="#60B860" stroke-width="${s*0.03}" fill="none" stroke-linecap="round"/>
  <!-- Flowers -->
  ${[
    {x: cx-s*0.14, y: soilY-s*0.32, c: '#FF7BAD', r: s*0.085},
    {x: cx,        y: soilY-s*0.40, c: '#FFD740', r: s*0.082},
    {x: cx+s*0.16, y: soilY-s*0.30, c: '#FF9DC0', r: s*0.078},
  ].map(f => `<circle cx="${f.x}" cy="${f.y}" r="${f.r}" fill="${f.c}" opacity="0.93"/>
<circle cx="${f.x}" cy="${f.y}" r="${f.r*0.4}" fill="white" opacity="0.9"/>
<ellipse cx="${f.x - f.r*0.32}" cy="${f.y - f.r*0.32}" rx="${f.r*0.18}" ry="${f.r*0.12}" fill="rgba(255,255,255,0.5)"/>`).join('')}
  <!-- Pot body -->
  <polygon points="${cx-potTopW/2},${potTopY} ${cx+potTopW/2},${potTopY} ${cx+potBotW/2},${potBotY} ${cx-potBotW/2},${potBotY}" fill="url(#fpbig-pot-${s})"/>
  <!-- Rim -->
  <rect x="${cx-potTopW/2 - s*0.022}" y="${potTopY}" width="${potTopW + s*0.044}" height="${rimH}" rx="${s*0.035}" fill="#C05828"/>
  <!-- Soil -->
  <ellipse cx="${cx}" cy="${soilY}" rx="${potTopW*0.43}" ry="${rimH*0.52}" fill="#5A3820"/>
  <!-- Pot highlight -->
  <ellipse cx="${cx - potTopW*0.24}" cy="${potTopY + (potBotY-potTopY)*0.22}" rx="${potTopW*0.07}" ry="${(potBotY-potTopY)*0.09}" fill="rgba(255,255,255,0.22)"/>
</svg>`;
}

function svgRainbowArch(size) {
  const s = size;
  const cx = s * 0.5, arcCy = s * 0.82;
  const arcColors = ['#FF6B6B','#FFB347','#FFD700','#90EE90','#87CEFA','#DDA0DD'];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rarch-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.14)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${s*0.40}" ry="${s*0.032}" fill="url(#rarch-shadow-${s})"/>
  <!-- Rainbow arcs (outside to inside) -->
  ${arcColors.slice().reverse().map((col, i) => {
    const rx = s * (0.42 - i * 0.054);
    const ry = s * (0.52 - i * 0.065);
    const thick = s * 0.038;
    return `<path d="M${cx - rx},${arcCy} A${rx},${ry} 0 0,1 ${cx + rx},${arcCy}" stroke="${col}" stroke-width="${thick}" fill="none" stroke-linecap="round" opacity="0.88"/>`;
  }).join('')}
  <!-- Cloud puffs left -->
  <circle cx="${cx - s*0.38}" cy="${arcCy + s*0.01}" r="${s*0.09}" fill="white"/>
  <circle cx="${cx - s*0.46}" cy="${arcCy - s*0.01}" r="${s*0.07}" fill="white"/>
  <circle cx="${cx - s*0.30}" cy="${arcCy - s*0.02}" r="${s*0.07}" fill="white"/>
  <!-- Cloud puffs right -->
  <circle cx="${cx + s*0.38}" cy="${arcCy + s*0.01}" r="${s*0.09}" fill="white"/>
  <circle cx="${cx + s*0.46}" cy="${arcCy - s*0.01}" r="${s*0.07}" fill="white"/>
  <circle cx="${cx + s*0.30}" cy="${arcCy - s*0.02}" r="${s*0.07}" fill="white"/>
</svg>`;
}

function svgMushroomCluster(size) {
  const s = size;
  function mushroom(cx2, cy2, capR, stemH, stemW, capCol) {
    const stemY = cy2;
    const capCy = cy2 - stemH;
    return `<rect x="${cx2 - stemW/2}" y="${stemY - stemH}" width="${stemW}" height="${stemH}" rx="${stemW*0.4}" fill="#F5E8D0"/>
<ellipse cx="${cx2}" cy="${capCy}" rx="${capR}" ry="${capR*0.62}" fill="${capCol}"/>
<ellipse cx="${cx2 - capR*0.28}" cy="${capCy - capR*0.22}" rx="${capR*0.16}" ry="${capR*0.11}" fill="rgba(255,255,255,0.7)"/>
<circle cx="${cx2 - capR*0.30}" cy="${capCy + capR*0.10}" r="${capR*0.11}" fill="white" opacity="0.85"/>
<circle cx="${cx2 + capR*0.20}" cy="${capCy + capR*0.22}" r="${capR*0.09}" fill="white" opacity="0.80"/>
<circle cx="${cx2 + capR*0.42}" cy="${capCy - capR*0.08}" r="${capR*0.08}" fill="white" opacity="0.75"/>`;
  }
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="mush-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${s*0.38}" ry="${s*0.032}" fill="url(#mush-shadow-${s})"/>
  <!-- Grass patch -->
  <ellipse cx="${s*0.5}" cy="${s*0.88}" rx="${s*0.40}" ry="${s*0.06}" fill="#90D870" opacity="0.5"/>
  <!-- 3 mushrooms -->
  ${mushroom(s*0.22, s*0.88, s*0.13, s*0.14, s*0.058, '#E83030')}
  ${mushroom(s*0.52, s*0.84, s*0.17, s*0.19, s*0.072, '#E82020')}
  ${mushroom(s*0.80, s*0.89, s*0.12, s*0.13, s*0.052, '#D82828')}
</svg>`;
}

function svgWallClock(size) {
  const s = size;
  const cx = s * 0.5, cy = s * 0.48;
  const outerR = s * 0.40, innerR = s * 0.32;
  const romanNums = ['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="clock-face-${s}" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FFFDE0"/>
      <stop offset="70%" stop-color="#FFF5B0"/>
      <stop offset="100%" stop-color="#F8E880"/>
    </radialGradient>
    <linearGradient id="clock-frame-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD8E8"/>
      <stop offset="100%" stop-color="#F0B8D0"/>
    </linearGradient>
    <radialGradient id="clock-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.95}" rx="${outerR*0.7}" ry="${s*0.032}" fill="url(#clock-shadow-${s})"/>
  <!-- Outer frame -->
  <circle cx="${cx}" cy="${cy}" r="${outerR}" fill="url(#clock-frame-${s})" stroke="#E098B8" stroke-width="1.5"/>
  <!-- Face -->
  <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="url(#clock-face-${s})"/>
  <!-- Face highlight -->
  <ellipse cx="${cx - innerR*0.28}" cy="${cy - innerR*0.32}" rx="${innerR*0.18}" ry="${innerR*0.12}" fill="rgba(255,255,255,0.62)"/>
  <!-- Hour tick marks -->
  ${Array.from({length:12}, (_,i) => {
    const angle = (i / 12) * Math.PI * 2 - Math.PI/2;
    const x1 = cx + Math.cos(angle) * innerR * 0.88;
    const y1 = cy + Math.sin(angle) * innerR * 0.88;
    const x2 = cx + Math.cos(angle) * innerR * 0.72;
    const y2 = cy + Math.sin(angle) * innerR * 0.72;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#C080A0" stroke-width="${i%3===0?s*0.025:s*0.014}" stroke-linecap="round"/>`;
  }).join('')}
  <!-- Hands -->
  <line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(-Math.PI/2 + Math.PI*0.3)*innerR*0.55).toFixed(1)}" y2="${(cy + Math.sin(-Math.PI/2 + Math.PI*0.3)*innerR*0.55).toFixed(1)}" stroke="#7A3058" stroke-width="${s*0.036}" stroke-linecap="round"/>
  <line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(-Math.PI/2 + Math.PI*1.1)*innerR*0.70).toFixed(1)}" y2="${(cy + Math.sin(-Math.PI/2 + Math.PI*1.1)*innerR*0.70).toFixed(1)}" stroke="#9A3070" stroke-width="${s*0.024}" stroke-linecap="round"/>
  <!-- Center cap -->
  <circle cx="${cx}" cy="${cy}" r="${s*0.032}" fill="#E098B8"/>
  <!-- Decorative bow at top -->
  <ellipse cx="${cx - s*0.055}" cy="${cy - outerR - s*0.01}" rx="${s*0.055}" ry="${s*0.032}" fill="#FF9DC0" opacity="0.85" transform="rotate(-25,${cx - s*0.055},${cy - outerR - s*0.01})"/>
  <ellipse cx="${cx + s*0.055}" cy="${cy - outerR - s*0.01}" rx="${s*0.055}" ry="${s*0.032}" fill="#FF9DC0" opacity="0.85" transform="rotate(25,${cx + s*0.055},${cy - outerR - s*0.01})"/>
  <circle cx="${cx}" cy="${cy - outerR - s*0.01}" r="${s*0.028}" fill="#FF7BAD"/>
</svg>`;
}

function svgPictureFrame(size) {
  const s = size;
  const fw = s * 0.80, fh = s * 0.76;
  const fx = (s - fw) / 2, fy = (s - fh) / 2;
  const iw = fw - s * 0.11, ih = fh - s * 0.11;
  const ix = (s - iw) / 2, iy = (s - ih) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pframe-grad-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFB5D0"/>
      <stop offset="50%" stop-color="#FF85B0"/>
      <stop offset="100%" stop-color="#E86090"/>
    </linearGradient>
    <radialGradient id="pframe-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.97}" rx="${fw*0.44}" ry="${s*0.028}" fill="url(#pframe-shadow-${s})"/>
  <!-- Frame outer -->
  <rect x="${fx}" y="${fy}" width="${fw}" height="${fh}" rx="${s*0.07}" fill="url(#pframe-grad-${s})"/>
  <!-- Frame inner bevel -->
  <rect x="${fx + s*0.026}" y="${fy + s*0.026}" width="${fw - s*0.052}" height="${fh - s*0.052}" rx="${s*0.055}" fill="rgba(255,255,255,0.22)"/>
  <!-- Picture area -->
  <rect x="${ix}" y="${iy}" width="${iw}" height="${ih}" rx="${s*0.038}" fill="#FFF0F8"/>
  <!-- Painted scene: sky + meadow -->
  <rect x="${ix}" y="${iy + ih*0.55}" width="${iw}" height="${ih*0.45}" rx="0 0 ${s*0.038} ${s*0.038}" fill="#B8E8A0" opacity="0.65"/>
  <ellipse cx="${ix + iw*0.35}" cy="${iy + ih*0.32}" rx="${iw*0.20}" ry="${ih*0.14}" fill="rgba(255,255,255,0.82)"/>
  <ellipse cx="${ix + iw*0.68}" cy="${iy + ih*0.25}" rx="${iw*0.16}" ry="${ih*0.11}" fill="rgba(255,255,255,0.72)"/>
  <!-- Heart details on frame corners -->
  <text x="${fx + fw*0.09}" y="${fy + fh*0.20}" font-size="${s*0.11}" fill="rgba(255,255,255,0.78)">♥</text>
  <text x="${fx + fw*0.77}" y="${fy + fh*0.20}" font-size="${s*0.11}" fill="rgba(255,255,255,0.78)">♥</text>
  <text x="${fx + fw*0.09}" y="${fy + fh*0.93}" font-size="${s*0.11}" fill="rgba(255,255,255,0.78)">♥</text>
  <text x="${fx + fw*0.77}" y="${fy + fh*0.93}" font-size="${s*0.11}" fill="rgba(255,255,255,0.78)">♥</text>
  <!-- Frame top highlight -->
  <ellipse cx="${fx + fw*0.25}" cy="${fy + fh*0.08}" rx="${fw*0.12}" ry="${fh*0.04}" fill="rgba(255,255,255,0.38)"/>
</svg>`;
}

function svgStarMobile(size) {
  const s = size;
  const cx = s * 0.5;
  const barY = s * 0.16, barW = s * 0.74, barH = s * 0.04;
  const barX = (s - barW) / 2;
  const starColors = ['#FFD700','#FF9DC0','#D4A8F0','#90E8B4','#FFD700'];
  const positions = [0.08, 0.26, 0.50, 0.74, 0.92];
  const stringLengths = [s*0.28, s*0.38, s*0.32, s*0.40, s*0.26];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <!-- Hanger string -->
  <line x1="${cx}" y1="${s*0.02}" x2="${cx}" y2="${barY}" stroke="#C0A0B0" stroke-width="${s*0.018}" stroke-linecap="round"/>
  <!-- Bar -->
  <rect x="${barX}" y="${barY}" width="${barW}" height="${barH}" rx="${barH*0.5}" fill="#D4956A"/>
  <ellipse cx="${barX + barW*0.25}" cy="${barY + barH*0.38}" rx="${barW*0.06}" ry="${barH*0.32}" fill="rgba(255,255,255,0.32)"/>
  <!-- Stars on strings -->
  ${positions.map((xf, i) => {
    const sx = barX + barW * xf;
    const sy = barY + barH + stringLengths[i];
    const r = s * 0.065;
    const col = starColors[i];
    const pts = Array.from({length:10}, (_,j) => {
      const angle = (j * Math.PI / 5) - Math.PI / 2;
      const radius = j % 2 === 0 ? r : r * 0.42;
      return `${(sx + Math.cos(angle) * radius).toFixed(2)},${(sy + Math.sin(angle) * radius).toFixed(2)}`;
    }).join(' ');
    return `<line x1="${sx.toFixed(1)}" y1="${(barY+barH).toFixed(1)}" x2="${sx.toFixed(1)}" y2="${(sy - r).toFixed(1)}" stroke="#C0A0B0" stroke-width="${s*0.013}"/>
<polygon points="${pts}" fill="${col}" opacity="0.92"/>
<ellipse cx="${(sx - r*0.25).toFixed(1)}" cy="${(sy - r*0.28).toFixed(1)}" rx="${(r*0.18).toFixed(1)}" ry="${(r*0.12).toFixed(1)}" fill="rgba(255,255,255,0.55)"/>`;
  }).join('')}
</svg>`;
}

function svgTrophyShelf(size) {
  const s = size;
  const shelfW = s * 0.80, shelfH = s * 0.07, shelfY = s * 0.70;
  const shelfX = (s - shelfW) / 2;
  const bracketH = s * 0.18;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tshelf-wood-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D4956A"/>
      <stop offset="100%" stop-color="#B87848"/>
    </linearGradient>
    <radialGradient id="tshelf-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.15)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${shelfW*0.44}" ry="${s*0.028}" fill="url(#tshelf-shadow-${s})"/>
  <!-- Wall brackets -->
  <rect x="${shelfX + shelfW*0.10}" y="${shelfY}" width="${s*0.038}" height="${bracketH}" rx="${s*0.018}" fill="#B87848"/>
  <rect x="${shelfX + shelfW*0.86}" y="${shelfY}" width="${s*0.038}" height="${bracketH}" rx="${s*0.018}" fill="#B87848"/>
  <!-- Shelf board -->
  <rect x="${shelfX}" y="${shelfY - shelfH}" width="${shelfW}" height="${shelfH}" rx="${s*0.025}" fill="url(#tshelf-wood-${s})" stroke="#A06838" stroke-width="1"/>
  <ellipse cx="${shelfX + shelfW*0.22}" cy="${shelfY - shelfH*0.55}" rx="${shelfW*0.08}" ry="${shelfH*0.3}" fill="rgba(255,255,255,0.28)"/>
  <!-- Trophy cup -->
  <rect x="${s*0.36}" y="${shelfY - shelfH - s*0.24}" width="${s*0.08}" height="${s*0.10}" rx="${s*0.02}" fill="#F0C030"/>
  <ellipse cx="${s*0.40}" cy="${shelfY - shelfH - s*0.24}" rx="${s*0.055}" ry="${s*0.030}" fill="#F8D850"/>
  <ellipse cx="${s*0.40}" cy="${shelfY - shelfH - s*0.14}" rx="${s*0.042}" ry="${s*0.022}" fill="#D4A020"/>
  <rect x="${s*0.375}" y="${shelfY - shelfH - s*0.14}" width="${s*0.05}" height="${s*0.06}" rx="${s*0.01}" fill="#E0B028"/>
  <rect x="${s*0.355}" y="${shelfY - shelfH - s*0.08}" width="${s*0.09}" height="${s*0.018}" rx="${s*0.008}" fill="#C8A020"/>
  <!-- Trophy handles -->
  <path d="M${s*0.36},${shelfY - shelfH - s*0.20} Q${s*0.32},${shelfY - shelfH - s*0.17} ${s*0.36},${shelfY - shelfH - s*0.14}" stroke="#D4A020" stroke-width="${s*0.018}" fill="none"/>
  <path d="M${s*0.44},${shelfY - shelfH - s*0.20} Q${s*0.48},${shelfY - shelfH - s*0.17} ${s*0.44},${shelfY - shelfH - s*0.14}" stroke="#D4A020" stroke-width="${s*0.018}" fill="none"/>
  <!-- Star on trophy -->
  <text x="${s*0.40}" y="${shelfY - shelfH - s*0.16}" text-anchor="middle" font-size="${s*0.065}" fill="rgba(255,255,255,0.85)">★</text>
  <!-- Decorative star beside trophy -->
  <text x="${s*0.66}" y="${shelfY - shelfH - s*0.04}" text-anchor="middle" font-size="${s*0.13}" fill="#FFD700" opacity="0.9">★</text>
  <!-- Small book lying flat -->
  <rect x="${shelfX + shelfW*0.62}" y="${shelfY - shelfH - s*0.055}" width="${shelfW*0.18}" height="${s*0.055}" rx="${s*0.018}" fill="#90C8F0" stroke="#70A8D0" stroke-width="0.8"/>
</svg>`;
}

function svgTeaSet(size) {
  const s = size;
  const cx = s * 0.5;
  const trayW = s * 0.82, trayH = s * 0.09, trayY = s * 0.80;
  const trayX = (s - trayW) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tset-tray-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#B8E8F8"/>
      <stop offset="100%" stop-color="#90C8E0"/>
    </linearGradient>
    <linearGradient id="tset-pot-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C8F0FF"/>
      <stop offset="100%" stop-color="#90D4F0"/>
    </linearGradient>
    <radialGradient id="tset-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${trayW*0.44}" ry="${s*0.03}" fill="url(#tset-shadow-${s})"/>
  <!-- Tray -->
  <rect x="${trayX}" y="${trayY}" width="${trayW}" height="${trayH}" rx="${s*0.04}" fill="url(#tset-tray-${s})" stroke="#70B8D0" stroke-width="1.2"/>
  <ellipse cx="${trayX + trayW*0.22}" cy="${trayY + trayH*0.4}" rx="${trayW*0.07}" ry="${trayH*0.3}" fill="rgba(255,255,255,0.38)"/>
  <!-- Teapot body -->
  <ellipse cx="${cx}" cy="${trayY - s*0.15}" rx="${s*0.15}" ry="${s*0.13}" fill="url(#tset-pot-${s})" stroke="#70B8D0" stroke-width="1.2"/>
  <!-- Lid -->
  <ellipse cx="${cx}" cy="${trayY - s*0.28}" rx="${s*0.075}" ry="${s*0.028}" fill="#90D4F0" stroke="#70B8D0" stroke-width="1"/>
  <circle cx="${cx}" cy="${trayY - s*0.31}" r="${s*0.024}" fill="#B8E8FF"/>
  <!-- Spout -->
  <path d="M${cx + s*0.15},${trayY - s*0.17} Q${cx + s*0.26},${trayY - s*0.22} ${cx + s*0.28},${trayY - s*0.14}" stroke="#70B8D0" stroke-width="${s*0.04}" fill="none" stroke-linecap="round"/>
  <!-- Handle -->
  <path d="M${cx - s*0.15},${trayY - s*0.20} Q${cx - s*0.26},${trayY - s*0.15} ${cx - s*0.15},${trayY - s*0.10}" stroke="#70B8D0" stroke-width="${s*0.032}" fill="none"/>
  <!-- Pot highlight -->
  <ellipse cx="${cx - s*0.06}" cy="${trayY - s*0.19}" rx="${s*0.06}" ry="${s*0.04}" fill="rgba(255,255,255,0.5)"/>
  <!-- Dot pattern on pot -->
  <circle cx="${cx + s*0.04}" cy="${trayY - s*0.14}" r="${s*0.018}" fill="#5090B0" opacity="0.5"/>
  <circle cx="${cx - s*0.04}" cy="${trayY - s*0.10}" r="${s*0.018}" fill="#5090B0" opacity="0.5"/>
  <!-- Cup 1 -->
  <rect x="${trayX + trayW*0.07}" y="${trayY - s*0.12}" width="${s*0.13}" height="${s*0.115}" rx="${s*0.03}" fill="#C8F0FF" stroke="#70B8D0" stroke-width="1"/>
  <path d="M${trayX + trayW*0.07 + s*0.13},${trayY - s*0.09} Q${trayX + trayW*0.07 + s*0.17},${trayY - s*0.06} ${trayX + trayW*0.07 + s*0.13},${trayY - s*0.02}" stroke="#70B8D0" stroke-width="${s*0.025}" fill="none"/>
  <ellipse cx="${trayX + trayW*0.07 + s*0.035}" cy="${trayY - s*0.115}" rx="${s*0.04}" ry="${s*0.016}" fill="rgba(255,255,255,0.55)"/>
  <!-- Cup 2 -->
  <rect x="${trayX + trayW*0.76}" y="${trayY - s*0.12}" width="${s*0.13}" height="${s*0.115}" rx="${s*0.03}" fill="#C8F0FF" stroke="#70B8D0" stroke-width="1"/>
  <path d="M${trayX + trayW*0.76},${trayY - s*0.09} Q${trayX + trayW*0.76 - s*0.04},${trayY - s*0.06} ${trayX + trayW*0.76},${trayY - s*0.02}" stroke="#70B8D0" stroke-width="${s*0.025}" fill="none"/>
</svg>`;
}

function svgCupcakeStand(size) {
  const s = size;
  const cx = s * 0.5;
  const standW = s * 0.70, standY = s * 0.76;
  const tier2W = s * 0.52, tier2Y = s * 0.56;
  const postW = s * 0.05;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cstand-plate-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F8D0E8"/>
      <stop offset="100%" stop-color="#E8B0D0"/>
    </linearGradient>
    <radialGradient id="cstand-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${standW*0.44}" ry="${s*0.03}" fill="url(#cstand-shadow-${s})"/>
  <!-- Bottom plate -->
  <ellipse cx="${cx}" cy="${standY}" rx="${standW*0.5}" ry="${s*0.04}" fill="url(#cstand-plate-${s})" stroke="#D090B8" stroke-width="1"/>
  <!-- Post -->
  <rect x="${cx - postW/2}" y="${tier2Y + s*0.038}" width="${postW}" height="${standY - tier2Y - s*0.038}" rx="${postW*0.45}" fill="#D8A8C8"/>
  <!-- Top plate -->
  <ellipse cx="${cx}" cy="${tier2Y}" rx="${tier2W*0.5}" ry="${s*0.035}" fill="url(#cstand-plate-${s})" stroke="#D090B8" stroke-width="1"/>
  <!-- Cupcake helper function inline -->
  <!-- Cupcake 1 (bottom-left) -->
  <rect x="${cx - standW*0.36}" y="${standY - s*0.16}" width="${s*0.12}" height="${s*0.10}" rx="${s*0.025}" fill="#FF9DC0"/>
  <ellipse cx="${cx - standW*0.36 + s*0.06}" cy="${standY - s*0.16}" rx="${s*0.07}" ry="${s*0.045}" fill="#FFD4E8"/>
  <path d="M${cx - standW*0.36},${standY - s*0.16} Q${cx - standW*0.36 + s*0.06},${standY - s*0.22} ${cx - standW*0.36 + s*0.12},${standY - s*0.16}" fill="#FFB5D0"/>
  <circle cx="${cx - standW*0.36 + s*0.06}" cy="${standY - s*0.215}" r="${s*0.018}" fill="#FF6BAD"/>
  <!-- Cupcake 2 (bottom-right) -->
  <rect x="${cx + standW*0.24}" y="${standY - s*0.16}" width="${s*0.12}" height="${s*0.10}" rx="${s*0.025}" fill="#FFD700"/>
  <ellipse cx="${cx + standW*0.24 + s*0.06}" cy="${standY - s*0.16}" rx="${s*0.07}" ry="${s*0.045}" fill="#FFF0A0"/>
  <path d="M${cx + standW*0.24},${standY - s*0.16} Q${cx + standW*0.24 + s*0.06},${standY - s*0.22} ${cx + standW*0.24 + s*0.12},${standY - s*0.16}" fill="#FFE44A"/>
  <circle cx="${cx + standW*0.24 + s*0.06}" cy="${standY - s*0.215}" r="${s*0.018}" fill="#FF9DC0"/>
  <!-- Cupcake 3 (top center) -->
  <rect x="${cx - s*0.06}" y="${tier2Y - s*0.16}" width="${s*0.12}" height="${s*0.10}" rx="${s*0.025}" fill="#D4A8F0"/>
  <ellipse cx="${cx}" cy="${tier2Y - s*0.16}" rx="${s*0.07}" ry="${s*0.045}" fill="#EDD4FF"/>
  <path d="M${cx - s*0.06},${tier2Y - s*0.16} Q${cx},${tier2Y - s*0.22} ${cx + s*0.06},${tier2Y - s*0.16}" fill="#C898E8"/>
  <circle cx="${cx}" cy="${tier2Y - s*0.215}" r="${s*0.018}" fill="#FFD700"/>
</svg>`;
}

function svgHotCocoa(size) {
  const s = size;
  const cx = s * 0.5;
  const mugW = s * 0.54, mugH = s * 0.48, mugY = s * 0.40;
  const mugX = (s - mugW) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cocoa-mug-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8B4513"/>
      <stop offset="100%" stop-color="#6B3008"/>
    </linearGradient>
    <radialGradient id="cocoa-top-${s}" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#F8F0E8"/>
      <stop offset="60%" stop-color="#F0E0D0"/>
      <stop offset="100%" stop-color="#E8D0B8"/>
    </radialGradient>
    <radialGradient id="cocoa-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${mugW*0.46}" ry="${s*0.032}" fill="url(#cocoa-shadow-${s})"/>
  <!-- Handle -->
  <path d="M${mugX + mugW},${mugY + mugH*0.25} Q${mugX + mugW + mugW*0.38},${mugY + mugH*0.5} ${mugX + mugW},${mugY + mugH*0.75}" stroke="#6B3008" stroke-width="${mugW*0.14}" fill="none" stroke-linecap="round"/>
  <!-- Mug body -->
  <rect x="${mugX}" y="${mugY}" width="${mugW}" height="${mugH}" rx="${s*0.06}" fill="url(#cocoa-mug-${s})"/>
  <!-- Mug highlight -->
  <ellipse cx="${mugX + mugW*0.24}" cy="${mugY + mugH*0.28}" rx="${mugW*0.1}" ry="${mugH*0.12}" fill="rgba(255,255,255,0.22)"/>
  <!-- Cocoa surface -->
  <ellipse cx="${cx}" cy="${mugY + s*0.03}" rx="${mugW*0.44}" ry="${s*0.04}" fill="#6B3008"/>
  <!-- Whipped cream swirl -->
  <ellipse cx="${cx}" cy="${mugY - s*0.02}" rx="${mugW*0.38}" ry="${s*0.06}" fill="url(#cocoa-top-${s})"/>
  <path d="M${cx - mugW*0.2},${mugY - s*0.03} Q${cx},${mugY - s*0.10} ${cx + mugW*0.2},${mugY - s*0.03}" fill="rgba(255,255,255,0.5)"/>
  <!-- Marshmallows -->
  <rect x="${cx - mugW*0.14}" y="${mugY - s*0.06}" width="${s*0.08}" height="${s*0.055}" rx="${s*0.02}" fill="white" stroke="rgba(240,220,200,0.8)" stroke-width="0.8"/>
  <rect x="${cx + s*0.02}" y="${mugY - s*0.065}" width="${s*0.075}" height="${s*0.052}" rx="${s*0.018}" fill="white" stroke="rgba(240,220,200,0.8)" stroke-width="0.8"/>
  <!-- Steam wisps -->
  <path d="M${cx - mugW*0.14},${mugY - s*0.06} Q${cx - mugW*0.20},${mugY - s*0.18} ${cx - mugW*0.12},${mugY - s*0.26}" stroke="rgba(200,180,160,0.45)" stroke-width="${s*0.022}" fill="none" stroke-linecap="round"/>
  <path d="M${cx + mugW*0.06},${mugY - s*0.07} Q${cx + mugW*0.14},${mugY - s*0.20} ${cx + mugW*0.04},${mugY - s*0.28}" stroke="rgba(200,180,160,0.38)" stroke-width="${s*0.018}" fill="none" stroke-linecap="round"/>
</svg>`;
}

function svgLavaLamp(size) {
  const s = size;
  const cx = s * 0.5;
  const bottleW = s * 0.36, bottleX = (s - bottleW) / 2;
  const bottleTopY = s * 0.10, bottleH = s * 0.68;
  const baseH = s * 0.10, baseW = s * 0.44, baseX = (s - baseW) / 2;
  const baseY = bottleTopY + bottleH;
  const neckH = s * 0.06, neckW = s * 0.18;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lava-body-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(60,10,90,0.85)"/>
      <stop offset="100%" stop-color="rgba(30,5,60,0.95)"/>
    </linearGradient>
    <radialGradient id="lava-glow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,80,200,0.55)"/>
      <stop offset="100%" stop-color="rgba(255,80,200,0)"/>
    </radialGradient>
    <linearGradient id="lava-base-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#C060E0"/>
      <stop offset="100%" stop-color="#8030A8"/>
    </linearGradient>
    <radialGradient id="lava-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.20)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <clipPath id="lava-clip-${s}">
      <rect x="${bottleX}" y="${bottleTopY + neckH}" width="${bottleW}" height="${bottleH - neckH}"/>
    </clipPath>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${baseW*0.46}" ry="${s*0.032}" fill="url(#lava-shadow-${s})"/>
  <!-- Glow behind lamp -->
  <ellipse cx="${cx}" cy="${bottleTopY + bottleH*0.5}" rx="${bottleW*1.2}" ry="${bottleH*0.55}" fill="url(#lava-glow-${s})"/>
  <!-- Lamp bottle body -->
  <rect x="${bottleX}" y="${bottleTopY + neckH}" width="${bottleW}" height="${bottleH - neckH}" rx="${bottleW*0.42}" fill="url(#lava-body-${s})"/>
  <!-- Blobs -->
  <ellipse cx="${cx - bottleW*0.12}" cy="${bottleTopY + bottleH*0.60}" rx="${bottleW*0.22}" ry="${bottleH*0.10}" fill="#FF40C8" opacity="0.88" clip-path="url(#lava-clip-${s})"/>
  <ellipse cx="${cx + bottleW*0.08}" cy="${bottleTopY + bottleH*0.38}" rx="${bottleW*0.18}" ry="${bottleH*0.08}" fill="#FF80E0" opacity="0.82" clip-path="url(#lava-clip-${s})"/>
  <circle cx="${cx}" cy="${bottleTopY + bottleH*0.72}" r="${bottleW*0.15}" fill="#E020B0" opacity="0.75" clip-path="url(#lava-clip-${s})"/>
  <ellipse cx="${cx + bottleW*0.12}" cy="${bottleTopY + bottleH*0.18}" rx="${bottleW*0.14}" ry="${bottleH*0.065}" fill="#FF60D8" opacity="0.70" clip-path="url(#lava-clip-${s})"/>
  <!-- Glass highlight strip -->
  <rect x="${bottleX + bottleW*0.12}" y="${bottleTopY + neckH + s*0.03}" width="${bottleW*0.12}" height="${bottleH*0.75}" rx="${bottleW*0.06}" fill="rgba(255,255,255,0.14)"/>
  <!-- Neck top -->
  <rect x="${cx - neckW/2}" y="${bottleTopY}" width="${neckW}" height="${neckH + s*0.02}" rx="${neckW*0.35}" fill="#C060E0"/>
  <!-- Cap -->
  <ellipse cx="${cx}" cy="${bottleTopY}" rx="${neckW*0.62}" ry="${s*0.025}" fill="#D880F0"/>
  <!-- Base -->
  <rect x="${baseX}" y="${baseY - s*0.02}" width="${baseW}" height="${baseH}" rx="${s*0.04}" fill="url(#lava-base-${s})"/>
  <ellipse cx="${cx}" cy="${baseY - s*0.01}" rx="${baseW*0.44}" ry="${s*0.022}" fill="rgba(255,255,255,0.18)"/>
</svg>`;
}

function svgSnowGlobe(size) {
  const s = size;
  const cx = s * 0.5, glassCy = s * 0.42;
  const glassR = s * 0.36;
  const baseW = s * 0.58, baseH = s * 0.10, baseY = glassCy + glassR - s * 0.01;
  const baseX = (s - baseW) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="globe-glass-${s}" cx="38%" cy="30%" r="70%">
      <stop offset="0%" stop-color="rgba(220,245,255,0.90)"/>
      <stop offset="55%" stop-color="rgba(180,225,250,0.70)"/>
      <stop offset="100%" stop-color="rgba(140,200,240,0.80)"/>
    </radialGradient>
    <radialGradient id="globe-sky-${s}" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#D0EEFF"/>
      <stop offset="100%" stop-color="#A8D8F8"/>
    </radialGradient>
    <linearGradient id="globe-base-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D090D0"/>
      <stop offset="100%" stop-color="#A060A0"/>
    </linearGradient>
    <clipPath id="globe-clip-${s}">
      <circle cx="${cx}" cy="${glassCy}" r="${glassR - s*0.02}"/>
    </clipPath>
    <radialGradient id="globe-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${baseW*0.46}" ry="${s*0.03}" fill="url(#globe-shadow-${s})"/>
  <!-- Base -->
  <rect x="${baseX}" y="${baseY}" width="${baseW}" height="${baseH}" rx="${s*0.04}" fill="url(#globe-base-${s})" stroke="#9050A0" stroke-width="1.2"/>
  <ellipse cx="${cx}" cy="${baseY + s*0.01}" rx="${baseW*0.44}" ry="${s*0.022}" fill="rgba(255,255,255,0.25)"/>
  <!-- Globe connector -->
  <rect x="${cx - s*0.055}" y="${baseY - s*0.03}" width="${s*0.11}" height="${s*0.05}" rx="${s*0.02}" fill="#B870B8"/>
  <!-- Sky background inside globe -->
  <circle cx="${cx}" cy="${glassCy}" r="${glassR - s*0.02}" fill="url(#globe-sky-${s})"/>
  <!-- Snow ground -->
  <ellipse cx="${cx}" cy="${glassCy + glassR*0.62}" rx="${glassR*0.80}" ry="${glassR*0.22}" fill="white" clip-path="url(#globe-clip-${s})"/>
  <!-- Tiny house -->
  <rect x="${cx - s*0.10}" y="${glassCy + glassR*0.28}" width="${s*0.20}" height="${s*0.16}" rx="${s*0.018}" fill="#E8E0D8" clip-path="url(#globe-clip-${s})"/>
  <polygon points="${cx - s*0.13},${glassCy + glassR*0.28} ${cx},${glassCy + glassR*0.10} ${cx + s*0.13},${glassCy + glassR*0.28}" fill="#D4706A" clip-path="url(#globe-clip-${s})"/>
  <rect x="${cx - s*0.03}" y="${glassCy + glassR*0.36}" width="${s*0.06}" height="${s*0.08}" rx="${s*0.014}" fill="#9B5A38" clip-path="url(#globe-clip-${s})"/>
  <rect x="${cx - s*0.085}" y="${glassCy + glassR*0.30}" width="${s*0.04}" height="${s*0.04}" rx="${s*0.01}" fill="#A8D8F0" opacity="0.7" clip-path="url(#globe-clip-${s})"/>
  <!-- Snowflakes -->
  ${[
    {x:cx - glassR*0.5, y:glassCy - glassR*0.3},
    {x:cx + glassR*0.4, y:glassCy - glassR*0.5},
    {x:cx - glassR*0.2, y:glassCy - glassR*0.6},
    {x:cx + glassR*0.15, y:glassCy - glassR*0.2},
    {x:cx + glassR*0.55, y:glassCy},
    {x:cx - glassR*0.58, y:glassCy + glassR*0.1},
  ].map(p => `<text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}" font-size="${s*0.07}" fill="rgba(255,255,255,0.82)" clip-path="url(#globe-clip-${s})">❄</text>`).join('')}
  <!-- Glass dome overlay -->
  <circle cx="${cx}" cy="${glassCy}" r="${glassR}" fill="url(#globe-glass-${s})"/>
  <!-- Glass rim -->
  <circle cx="${cx}" cy="${glassCy}" r="${glassR}" fill="none" stroke="rgba(180,230,255,0.6)" stroke-width="${s*0.03}"/>
  <!-- Shine spots -->
  <ellipse cx="${cx - glassR*0.32}" cy="${glassCy - glassR*0.38}" rx="${glassR*0.16}" ry="${glassR*0.10}" fill="rgba(255,255,255,0.62)"/>
  <circle cx="${cx + glassR*0.48}" cy="${glassCy - glassR*0.52}" r="${s*0.018}" fill="rgba(255,255,255,0.50)"/>
</svg>`;
}

function svgMagicWand(size) {
  const s = size;
  const cx = s * 0.5;
  const wandTipX = s * 0.72, wandTipY = s * 0.18;
  const wandBaseX = s * 0.28, wandBaseY = s * 0.72;
  const standW = s * 0.38, standH = s * 0.10, standY = s * 0.82;
  const standX = (s - standW) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wand-stick-${s}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0D060"/>
      <stop offset="100%" stop-color="#C8A020"/>
    </linearGradient>
    <linearGradient id="wand-stand-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D0D0E8"/>
      <stop offset="100%" stop-color="#A8A8C8"/>
    </linearGradient>
    <radialGradient id="wand-star-${s}" cx="40%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FFEE80"/>
      <stop offset="60%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#F0B000"/>
    </radialGradient>
    <radialGradient id="wand-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <radialGradient id="wand-glow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,240,100,0.50)"/>
      <stop offset="100%" stop-color="rgba(255,240,100,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${standW*0.46}" ry="${s*0.028}" fill="url(#wand-shadow-${s})"/>
  <!-- Stand -->
  <rect x="${standX}" y="${standY}" width="${standW}" height="${standH}" rx="${s*0.04}" fill="url(#wand-stand-${s})" stroke="#9898B8" stroke-width="1"/>
  <ellipse cx="${cx}" cy="${standY + s*0.01}" rx="${standW*0.42}" ry="${s*0.02}" fill="rgba(255,255,255,0.28)"/>
  <!-- Stand cradle for wand -->
  <path d="M${cx - s*0.06},${standY} Q${cx},${standY - s*0.04} ${cx + s*0.06},${standY}" stroke="#A8A8C8" stroke-width="${s*0.025}" fill="none"/>
  <!-- Sparkle glow at tip -->
  <ellipse cx="${wandTipX}" cy="${wandTipY}" rx="${s*0.12}" ry="${s*0.12}" fill="url(#wand-glow-${s})"/>
  <!-- Wand stick -->
  <line x1="${wandTipX}" y1="${wandTipY + s*0.04}" x2="${wandBaseX}" y2="${wandBaseY}" stroke="url(#wand-stick-${s})" stroke-width="${s*0.055}" stroke-linecap="round"/>
  <!-- Black tip of wand -->
  <line x1="${wandBaseX}" y1="${wandBaseY}" x2="${wandBaseX - s*0.04}" y2="${wandBaseY + s*0.04}" stroke="#222222" stroke-width="${s*0.055}" stroke-linecap="round"/>
  <!-- Star at tip -->
  ${(() => {
    const r = s * 0.092;
    const pts = Array.from({length:10}, (_,j) => {
      const angle = (j * Math.PI / 5) - Math.PI / 2;
      const radius = j % 2 === 0 ? r : r * 0.42;
      return `${(wandTipX + Math.cos(angle) * radius).toFixed(2)},${(wandTipY + Math.sin(angle) * radius).toFixed(2)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="url(#wand-star-${s})" stroke="#D4A800" stroke-width="1"/>`;
  })()}
  <!-- Star highlight -->
  <ellipse cx="${(wandTipX - s*0.032).toFixed(1)}" cy="${(wandTipY - s*0.030).toFixed(1)}" rx="${s*0.028}" ry="${s*0.018}" fill="rgba(255,255,255,0.62)"/>
  <!-- Sparkle particles -->
  <circle cx="${wandTipX + s*0.11}" cy="${wandTipY - s*0.08}" r="${s*0.018}" fill="#FFD700" opacity="0.80"/>
  <circle cx="${wandTipX - s*0.08}" cy="${wandTipY + s*0.10}" r="${s*0.014}" fill="#FFE840" opacity="0.70"/>
  <circle cx="${wandTipX + s*0.08}" cy="${wandTipY + s*0.10}" r="${s*0.012}" fill="#FFEE80" opacity="0.65"/>
  <circle cx="${wandTipX - s*0.12}" cy="${wandTipY - s*0.04}" r="${s*0.010}" fill="#FFF0A0" opacity="0.60"/>
</svg>`;
}

function svgButterflyGarden(size) {
  const s = size;
  const cx = s * 0.5;
  const groundY = s * 0.80;
  function butterfly(bx, by, col1, col2, scale) {
    const w = s * 0.15 * scale, h = s * 0.10 * scale;
    return `<ellipse cx="${bx - w*0.5}" cy="${by - h*0.3}" rx="${w*0.6}" ry="${h*0.7}" fill="${col1}" opacity="0.88" transform="rotate(-20,${bx},${by})"/>
<ellipse cx="${bx + w*0.5}" cy="${by - h*0.3}" rx="${w*0.6}" ry="${h*0.7}" fill="${col1}" opacity="0.88" transform="rotate(20,${bx},${by})"/>
<ellipse cx="${bx - w*0.42}" cy="${by + h*0.3}" rx="${w*0.45}" ry="${h*0.55}" fill="${col2}" opacity="0.80" transform="rotate(-15,${bx},${by})"/>
<ellipse cx="${bx + w*0.42}" cy="${by + h*0.3}" rx="${w*0.45}" ry="${h*0.55}" fill="${col2}" opacity="0.80" transform="rotate(15,${bx},${by})"/>
<ellipse cx="${bx}" cy="${by}" rx="${w*0.08}" ry="${h*0.72}" fill="#3A2010"/>
<circle cx="${bx}" cy="${by - h*0.75}" r="${w*0.07}" fill="#3A2010"/>
<line x1="${bx}" y1="${by - h*0.72}" x2="${bx - w*0.3}" y2="${by - h*1.1}" stroke="#3A2010" stroke-width="${s*0.012}"/>
<line x1="${bx}" y1="${by - h*0.72}" x2="${bx + w*0.3}" y2="${by - h*1.1}" stroke="#3A2010" stroke-width="${s*0.012}"/>`;
  }
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bfly-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${cx}" cy="${s*0.96}" rx="${s*0.38}" ry="${s*0.028}" fill="url(#bfly-shadow-${s})"/>
  <!-- Garden patch (soil) -->
  <ellipse cx="${cx}" cy="${groundY + s*0.04}" rx="${s*0.42}" ry="${s*0.08}" fill="#8B6240"/>
  <!-- Grass tufts -->
  <ellipse cx="${cx}" cy="${groundY}" rx="${s*0.40}" ry="${s*0.062}" fill="#70C050"/>
  <ellipse cx="${cx - s*0.16}" cy="${groundY - s*0.01}" rx="${s*0.12}" ry="${s*0.04}" fill="#88D068"/>
  <ellipse cx="${cx + s*0.18}" cy="${groundY - s*0.01}" rx="${s*0.11}" ry="${s*0.038}" fill="#88D068"/>
  <!-- Small flowers -->
  <circle cx="${cx - s*0.22}" cy="${groundY - s*0.05}" r="${s*0.04}" fill="#FF9DC0"/>
  <circle cx="${cx - s*0.22}" cy="${groundY - s*0.05}" r="${s*0.02}" fill="white"/>
  <circle cx="${cx + s*0.28}" cy="${groundY - s*0.04}" r="${s*0.038}" fill="#FFD700"/>
  <circle cx="${cx + s*0.28}" cy="${groundY - s*0.04}" r="${s*0.018}" fill="white"/>
  <line x1="${cx - s*0.22}" y1="${groundY - s*0.05}" x2="${cx - s*0.22}" y2="${groundY + s*0.01}" stroke="#60B040" stroke-width="${s*0.022}"/>
  <line x1="${cx + s*0.28}" y1="${groundY - s*0.04}" x2="${cx + s*0.28}" y2="${groundY + s*0.01}" stroke="#60B040" stroke-width="${s*0.022}"/>
  <!-- Butterfly 1 -->
  ${butterfly(cx - s*0.14, groundY - s*0.28, '#FF9DC0', '#FFD0E8', 1.0)}
  <!-- Butterfly 2 -->
  ${butterfly(cx + s*0.22, groundY - s*0.42, '#D4A8F0', '#EED0FF', 0.82)}
</svg>`;
}

function svgStuffedShelf(size) {
  const s = size;
  const shelfW = s * 0.84, shelfH = s * 0.065, shelfY = s * 0.72;
  const shelfX = (s - shelfW) / 2;
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sshelf-wood-${s}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D4956A"/>
      <stop offset="100%" stop-color="#B87848"/>
    </linearGradient>
    <radialGradient id="sshelf-shadow-${s}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.16)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <!-- Shadow -->
  <ellipse cx="${s*0.5}" cy="${s*0.96}" rx="${shelfW*0.44}" ry="${s*0.028}" fill="url(#sshelf-shadow-${s})"/>
  <!-- Wall mount brackets -->
  <rect x="${shelfX + shelfW*0.12}" y="${shelfY}" width="${s*0.035}" height="${s*0.18}" rx="${s*0.016}" fill="#B87848"/>
  <rect x="${shelfX + shelfW*0.85}" y="${shelfY}" width="${s*0.035}" height="${s*0.18}" rx="${s*0.016}" fill="#B87848"/>
  <!-- Shelf board -->
  <rect x="${shelfX}" y="${shelfY - shelfH}" width="${shelfW}" height="${shelfH}" rx="${s*0.025}" fill="url(#sshelf-wood-${s})" stroke="#A06838" stroke-width="1"/>
  <ellipse cx="${shelfX + shelfW*0.22}" cy="${shelfY - shelfH*0.55}" rx="${shelfW*0.08}" ry="${shelfH*0.3}" fill="rgba(255,255,255,0.28)"/>
  <!-- Plushie 1: bear (left) -->
  <circle cx="${shelfX + shelfW*0.18}" cy="${shelfY - shelfH - s*0.14}" r="${s*0.12}" fill="#F0C890"/>
  <circle cx="${shelfX + shelfW*0.18 - s*0.08}" cy="${shelfY - shelfH - s*0.24}" r="${s*0.055}" fill="#E0B878"/>
  <circle cx="${shelfX + shelfW*0.18 + s*0.08}" cy="${shelfY - shelfH - s*0.24}" r="${s*0.055}" fill="#E0B878"/>
  <circle cx="${shelfX + shelfW*0.18 - s*0.045}" cy="${shelfY - shelfH - s*0.16}" r="${s*0.022}" fill="#3A2010"/>
  <circle cx="${shelfX + shelfW*0.18 + s*0.045}" cy="${shelfY - shelfH - s*0.16}" r="${s*0.022}" fill="#3A2010"/>
  <ellipse cx="${shelfX + shelfW*0.18}" cy="${shelfY - shelfH - s*0.10}" rx="${s*0.038}" ry="${s*0.025}" fill="#D4956A"/>
  <!-- Plushie 2: bunny (center) -->
  <ellipse cx="${s*0.5}" cy="${shelfY - shelfH - s*0.13}" rx="${s*0.10}" ry="${s*0.12}" fill="#F8E0F8"/>
  <ellipse cx="${s*0.5 - s*0.055}" cy="${shelfY - shelfH - s*0.28}" rx="${s*0.032}" ry="${s*0.082}" fill="#F8E0F8" stroke="#E8C8E8" stroke-width="0.8"/>
  <ellipse cx="${s*0.5 + s*0.055}" cy="${shelfY - shelfH - s*0.28}" rx="${s*0.032}" ry="${s*0.082}" fill="#F8E0F8" stroke="#E8C8E8" stroke-width="0.8"/>
  <ellipse cx="${s*0.5 - s*0.055}" cy="${shelfY - shelfH - s*0.28}" rx="${s*0.015}" ry="${s*0.055}" fill="#FFB5D0" opacity="0.7"/>
  <ellipse cx="${s*0.5 + s*0.055}" cy="${shelfY - shelfH - s*0.28}" rx="${s*0.015}" ry="${s*0.055}" fill="#FFB5D0" opacity="0.7"/>
  <circle cx="${s*0.5 - s*0.038}" cy="${shelfY - shelfH - s*0.15}" r="${s*0.020}" fill="#3A2010"/>
  <circle cx="${s*0.5 + s*0.038}" cy="${shelfY - shelfH - s*0.15}" r="${s*0.020}" fill="#3A2010"/>
  <circle cx="${s*0.5}" cy="${shelfY - shelfH - s*0.10}" r="${s*0.020}" fill="#FF9DC0"/>
  <!-- Plushie 3: cat (right) -->
  <circle cx="${shelfX + shelfW*0.82}" cy="${shelfY - shelfH - s*0.14}" r="${s*0.11}" fill="#D0E8F8"/>
  <polygon points="${shelfX + shelfW*0.82 - s*0.065},${shelfY - shelfH - s*0.24} ${shelfX + shelfW*0.82 - s*0.095},${shelfY - shelfH - s*0.32} ${shelfX + shelfW*0.82 - s*0.025},${shelfY - shelfH - s*0.26}" fill="#D0E8F8"/>
  <polygon points="${shelfX + shelfW*0.82 + s*0.065},${shelfY - shelfH - s*0.24} ${shelfX + shelfW*0.82 + s*0.095},${shelfY - shelfH - s*0.32} ${shelfX + shelfW*0.82 + s*0.025},${shelfY - shelfH - s*0.26}" fill="#D0E8F8"/>
  <circle cx="${shelfX + shelfW*0.82 - s*0.040}" cy="${shelfY - shelfH - s*0.16}" r="${s*0.020}" fill="#3A2010"/>
  <circle cx="${shelfX + shelfW*0.82 + s*0.040}" cy="${shelfY - shelfH - s*0.16}" r="${s*0.020}" fill="#3A2010"/>
  <ellipse cx="${shelfX + shelfW*0.82}" cy="${shelfY - shelfH - s*0.11}" rx="${s*0.025}" ry="${s*0.018}" fill="#FFB5D0"/>
</svg>`;
}

function svgWallpaperSwatch(wallClass, size) {
  const s = size;
  const patterns = {
    'wp-pink-floral': `<rect width="${s}" height="${s}" fill="#FDE8EF"/>
      <circle cx="${s*0.14}" cy="${s*0.14}" r="${s*0.07}" fill="#FF9DC0" opacity="0.6"/>
      <circle cx="${s*0.45}" cy="${s*0.06}" r="${s*0.05}" fill="#FFB5C8" opacity="0.6"/>
      <circle cx="${s*0.72}" cy="${s*0.20}" r="${s*0.065}" fill="#FF85A1" opacity="0.6"/>
      <circle cx="${s*0.25}" cy="${s*0.55}" r="${s*0.06}" fill="#FF9DC0" opacity="0.5"/>
      <circle cx="${s*0.80}" cy="${s*0.70}" r="${s*0.07}" fill="#FFB5C8" opacity="0.5"/>`,
    'wp-mint-stars': `<rect width="${s}" height="${s}" fill="#E0F5EC"/>
      <text x="${s*0.15}" y="${s*0.38}" font-size="${s*0.28}" fill="#FFD700" opacity="0.7">★</text>
      <text x="${s*0.52}" y="${s*0.72}" font-size="${s*0.22}" fill="#2ECC71" opacity="0.6">★</text>
      <text x="${s*0.70}" y="${s*0.30}" font-size="${s*0.18}" fill="#FFD700" opacity="0.55">★</text>`,
    'wp-purple-dream': `<rect width="${s}" height="${s}" fill="#EDE0FF"/>
      <circle cx="${s*0.25}" cy="${s*0.25}" r="${s*0.16}" fill="rgba(155,93,229,0.25)"/>
      <circle cx="${s*0.72}" cy="${s*0.65}" r="${s*0.13}" fill="rgba(200,160,255,0.25)"/>
      <circle cx="${s*0.55}" cy="${s*0.18}" r="${s*0.10}" fill="rgba(155,93,229,0.18)"/>`,
    'wp-rainbow': `<rect width="${s}" height="${s}" fill="#FFF0F5"/>
      <rect x="0" y="0" width="${s}" height="${s/6}" fill="rgba(255,107,157,0.3)"/>
      <rect x="0" y="${s/6}" width="${s}" height="${s/6}" fill="rgba(255,183,107,0.3)"/>
      <rect x="0" y="${s/6*2}" width="${s}" height="${s/6}" fill="rgba(255,215,0,0.3)"/>
      <rect x="0" y="${s/6*3}" width="${s}" height="${s/6}" fill="rgba(107,229,107,0.3)"/>
      <rect x="0" y="${s/6*4}" width="${s}" height="${s/6}" fill="rgba(107,182,255,0.3)"/>
      <rect x="0" y="${s/6*5}" width="${s}" height="${s/6}" fill="rgba(155,93,229,0.3)"/>`,
    'wp-ocean': `<rect width="${s}" height="${s}" fill="#E0F4FF"/>
      <path d="M0,${s*0.3} Q${s*0.25},${s*0.2} ${s*0.5},${s*0.3} Q${s*0.75},${s*0.4} ${s},${s*0.3}" stroke="rgba(100,180,240,0.55)" stroke-width="${s*0.06}" fill="none"/>
      <path d="M0,${s*0.6} Q${s*0.25},${s*0.5} ${s*0.5},${s*0.6} Q${s*0.75},${s*0.7} ${s},${s*0.6}" stroke="rgba(100,180,240,0.4)" stroke-width="${s*0.05}" fill="none"/>`,
    'wp-stars': `<rect width="${s}" height="${s}" fill="#1A1050"/>
      <circle cx="${s*0.15}" cy="${s*0.18}" r="${s*0.032}" fill="#FFE870" opacity="0.85"/>
      <circle cx="${s*0.48}" cy="${s*0.10}" r="${s*0.024}" fill="white" opacity="0.75"/>
      <circle cx="${s*0.78}" cy="${s*0.22}" r="${s*0.028}" fill="#FFE870" opacity="0.80"/>
      <circle cx="${s*0.30}" cy="${s*0.60}" r="${s*0.020}" fill="white" opacity="0.65"/>
      <circle cx="${s*0.65}" cy="${s*0.50}" r="${s*0.026}" fill="#FFE870" opacity="0.70"/>
      <circle cx="${s*0.88}" cy="${s*0.72}" r="${s*0.018}" fill="white" opacity="0.60"/>
      <text x="${s*0.60}" y="${s*0.42}" font-size="${s*0.22}" fill="#FFE870" opacity="0.7">★</text>
      <text x="${s*0.08}" y="${s*0.78}" font-size="${s*0.18}" fill="white" opacity="0.6">★</text>`,
    'wp-clouds': `<rect width="${s}" height="${s}" fill="#D8EEFF"/>
      <circle cx="${s*0.22}" cy="${s*0.30}" r="${s*0.16}" fill="rgba(255,255,255,0.72)"/>
      <circle cx="${s*0.34}" cy="${s*0.22}" r="${s*0.13}" fill="rgba(255,255,255,0.65)"/>
      <circle cx="${s*0.10}" cy="${s*0.38}" r="${s*0.10}" fill="rgba(255,255,255,0.60)"/>
      <circle cx="${s*0.72}" cy="${s*0.60}" r="${s*0.14}" fill="rgba(255,255,255,0.68)"/>
      <circle cx="${s*0.60}" cy="${s*0.68}" r="${s*0.11}" fill="rgba(255,255,255,0.62)"/>`,
    'wp-galaxy': `<rect width="${s}" height="${s}" fill="#0A0820"/>
      <circle cx="${s*0.5}" cy="${s*0.5}" r="${s*0.38}" fill="rgba(120,60,200,0.25)"/>
      <circle cx="${s*0.5}" cy="${s*0.5}" r="${s*0.20}" fill="rgba(180,120,255,0.20)"/>
      <circle cx="${s*0.18}" cy="${s*0.20}" r="${s*0.018}" fill="white" opacity="0.80"/>
      <circle cx="${s*0.50}" cy="${s*0.12}" r="${s*0.014}" fill="#C8A8FF" opacity="0.75"/>
      <circle cx="${s*0.82}" cy="${s*0.25}" r="${s*0.016}" fill="white" opacity="0.70"/>
      <circle cx="${s*0.70}" cy="${s*0.70}" r="${s*0.022}" fill="#FFE870" opacity="0.75"/>
      <circle cx="${s*0.25}" cy="${s*0.75}" r="${s*0.014}" fill="white" opacity="0.65"/>
      <text x="${s*0.60}" y="${s*0.55}" font-size="${s*0.16}" fill="rgba(200,160,255,0.55)">★</text>`,
    'wp-strawberry': `<rect width="${s}" height="${s}" fill="#FFF0F5"/>
      <ellipse cx="${s*0.20}" cy="${s*0.28}" rx="${s*0.10}" ry="${s*0.12}" fill="#FF4060" opacity="0.72"/>
      <polygon points="${s*0.20},${s*0.16} ${s*0.16},${s*0.22} ${s*0.24},${s*0.22}" fill="#60C040" opacity="0.75"/>
      <circle cx="${s*0.18}" cy="${s*0.30}" r="${s*0.018}" fill="rgba(255,255,200,0.8)"/>
      <circle cx="${s*0.24}" cy="${s*0.26}" r="${s*0.016}" fill="rgba(255,255,200,0.7)"/>
      <ellipse cx="${s*0.70}" cy="${s*0.65}" rx="${s*0.09}" ry="${s*0.11}" fill="#FF4060" opacity="0.68"/>
      <polygon points="${s*0.70},${s*0.54} ${s*0.66},${s*0.60} ${s*0.74},${s*0.60}" fill="#60C040" opacity="0.72"/>
      <circle cx="${s*0.68}" cy="${s*0.67}" r="${s*0.015}" fill="rgba(255,255,200,0.75)"/>`,
    'wp-mint': `<rect width="${s}" height="${s}" fill="#E8FFF5"/>
      <circle cx="${s*0.15}" cy="${s*0.15}" r="${s*0.06}" fill="rgba(60,200,140,0.28)"/>
      <circle cx="${s*0.50}" cy="${s*0.08}" r="${s*0.05}" fill="rgba(60,200,140,0.22)"/>
      <circle cx="${s*0.80}" cy="${s*0.20}" r="${s*0.055}" fill="rgba(60,200,140,0.26)"/>
      <circle cx="${s*0.25}" cy="${s*0.55}" r="${s*0.058}" fill="rgba(60,200,140,0.24)"/>
      <circle cx="${s*0.70}" cy="${s*0.65}" r="${s*0.050}" fill="rgba(60,200,140,0.22)"/>
      <circle cx="${s*0.45}" cy="${s*0.80}" r="${s*0.048}" fill="rgba(60,200,140,0.20)"/>`,
  };
  const content = patterns[wallClass] || patterns['wp-pink-floral'];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;">${content}</svg>`;
}

function svgFloorSwatch(floorClass, size) {
  const s = size;
  const patterns = {
    'fl-wood': `<rect width="${s}" height="${s}" fill="#DEB887"/>
      <rect x="0" y="0" width="${s}" height="${s/4}" fill="#D4A87A"/>
      <rect x="0" y="${s/4*2}" width="${s}" height="${s/4}" fill="#D4A87A"/>
      <line x1="${s*0.33}" y1="0" x2="${s*0.33}" y2="${s/4}" stroke="#B8905A" stroke-width="1.2" opacity="0.55"/>
      <line x1="${s*0.66}" y1="${s/4}" x2="${s*0.66}" y2="${s/4*2}" stroke="#B8905A" stroke-width="1.2" opacity="0.55"/>`,
    'fl-pink-tile': `<rect width="${s}" height="${s}" fill="#FFCCD8"/>
      <rect x="0" y="0" width="${s/2}" height="${s/2}" fill="rgba(255,150,180,0.2)" stroke="rgba(255,100,150,0.4)" stroke-width="1"/>
      <rect x="${s/2}" y="${s/2}" width="${s/2}" height="${s/2}" fill="rgba(255,150,180,0.2)" stroke="rgba(255,100,150,0.4)" stroke-width="1"/>`,
    'fl-cloud': `<rect width="${s}" height="${s}" fill="#EAF4FF"/>
      <circle cx="${s*0.25}" cy="${s*0.35}" r="${s*0.18}" fill="rgba(255,255,255,0.65)"/>
      <circle cx="${s*0.70}" cy="${s*0.65}" r="${s*0.15}" fill="rgba(255,255,255,0.55)"/>`,
    'fl-rainbow': `<rect width="${s}" height="${s}" fill="#FFE8F0"/>
      <rect x="0" y="0" width="${s/6}" height="${s}" fill="rgba(255,107,157,0.3)"/>
      <rect x="${s/6}" y="0" width="${s/6}" height="${s}" fill="rgba(255,183,107,0.3)"/>
      <rect x="${s/6*2}" y="0" width="${s/6}" height="${s}" fill="rgba(255,215,0,0.3)"/>
      <rect x="${s/6*3}" y="0" width="${s/6}" height="${s}" fill="rgba(107,229,107,0.3)"/>
      <rect x="${s/6*4}" y="0" width="${s/6}" height="${s}" fill="rgba(107,182,255,0.3)"/>
      <rect x="${s/6*5}" y="0" width="${s/6}" height="${s}" fill="rgba(155,93,229,0.3)"/>`,
    'fl-pink-carpet': `<rect width="${s}" height="${s}" fill="#FFAAC8"/>
      <rect x="0" y="0" width="${s}" height="${s/5}" fill="rgba(255,160,200,0.35)"/>
      <rect x="0" y="${s/5*2}" width="${s}" height="${s/5}" fill="rgba(255,160,200,0.35)"/>
      <rect x="0" y="${s/5*4}" width="${s}" height="${s/5}" fill="rgba(255,160,200,0.35)"/>
      <circle cx="${s*0.25}" cy="${s*0.25}" r="${s*0.04}" fill="rgba(255,80,140,0.18)"/>
      <circle cx="${s*0.75}" cy="${s*0.75}" r="${s*0.04}" fill="rgba(255,80,140,0.18)"/>`,
    'fl-purple-carpet': `<rect width="${s}" height="${s}" fill="#C8A0F0"/>
      <rect x="0" y="0" width="${s}" height="${s/5}" fill="rgba(180,120,240,0.35)"/>
      <rect x="0" y="${s/5*2}" width="${s}" height="${s/5}" fill="rgba(180,120,240,0.35)"/>
      <rect x="0" y="${s/5*4}" width="${s}" height="${s/5}" fill="rgba(180,120,240,0.35)"/>
      <circle cx="${s*0.25}" cy="${s*0.25}" r="${s*0.04}" fill="rgba(140,60,220,0.18)"/>
      <circle cx="${s*0.75}" cy="${s*0.75}" r="${s*0.04}" fill="rgba(140,60,220,0.18)"/>`,
    'fl-marble': `<rect width="${s}" height="${s}" fill="#F4F0EE"/>
      <path d="M0,${s*0.35} Q${s*0.3},${s*0.28} ${s*0.6},${s*0.42} Q${s*0.8},${s*0.50} ${s},${s*0.38}" stroke="rgba(180,170,165,0.45)" stroke-width="${s*0.06}" fill="none"/>
      <path d="M0,${s*0.65} Q${s*0.4},${s*0.58} ${s*0.7},${s*0.72} Q${s*0.85},${s*0.78} ${s},${s*0.68}" stroke="rgba(200,190,185,0.35)" stroke-width="${s*0.04}" fill="none"/>
      <rect x="0" y="0" width="${s}" height="${s/2}" fill="rgba(255,255,255,0.18)"/>`,
    'fl-grass': `<rect width="${s}" height="${s}" fill="#72C850"/>
      <rect x="0" y="0" width="${s}" height="${s/4}" fill="#60B840"/>
      <rect x="0" y="${s/4*2}" width="${s}" height="${s/4}" fill="#60B840"/>
      <circle cx="${s*0.2}" cy="${s*0.2}" r="${s*0.06}" fill="rgba(255,255,255,0.10)"/>
      <circle cx="${s*0.70}" cy="${s*0.65}" r="${s*0.05}" fill="rgba(255,255,255,0.10)"/>
      <line x1="${s*0.15}" y1="0" x2="${s*0.15}" y2="${s}" stroke="rgba(80,160,40,0.3)" stroke-width="1.5"/>
      <line x1="${s*0.45}" y1="0" x2="${s*0.45}" y2="${s}" stroke="rgba(80,160,40,0.3)" stroke-width="1.2"/>
      <line x1="${s*0.75}" y1="0" x2="${s*0.75}" y2="${s}" stroke="rgba(80,160,40,0.3)" stroke-width="1.2"/>`,
  };
  const content = patterns[floorClass] || patterns['fl-wood'];
  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;">${content}</svg>`;
}

// ─── Shop Items ────────────────────────────────────────────────────────────────
const SHOP_ITEMS = [
  // FURNITURE (floor items)
  { id: 'cozy-bed',    name: 'Cozy Bed',       svgIcon: svgCozyBed,       type: 'furniture',   cost: 20, slot: 'floor',     desc: 'A super soft bed for napping!' },
  { id: 'round-table', name: 'Round Table',    svgIcon: svgRoundTable,    type: 'furniture',   cost: 10, slot: 'floor',     desc: 'A cute little table.' },
  { id: 'plush-sofa',  name: 'Plush Sofa',     svgIcon: svgPlushSofa,     type: 'furniture',   cost: 15, slot: 'floor',     desc: 'Perfectly squishy!' },
  { id: 'bookshelf',   name: 'Bookshelf',      svgIcon: svgBookshelf,     type: 'furniture',   cost: 18, slot: 'floor',     desc: 'Full of fun stories.' },
  { id: 'toy-chest',   name: 'Toy Chest',      svgIcon: svgToyChest,      type: 'furniture',   cost: 12, slot: 'floor',     desc: 'For storing treasures!' },
  { id: 'wardrobe',    name: 'Wardrobe',       svgIcon: svgWardrobe,      type: 'furniture',   cost: 25, slot: 'floor',     desc: 'A magical wardrobe.' },
  { id: 'piano',       name: 'Toy Piano',      svgIcon: svgPiano,         type: 'furniture',   cost: 30, slot: 'floor',     desc: 'Play a little tune!' },
  { id: 'vanity',      name: 'Vanity Mirror',  svgIcon: svgVanityMirror,  type: 'furniture',   cost: 22, slot: 'floor',     desc: 'So glamorous!' },

  // FLOOR DECOR
  { id: 'flower-pot',  name: 'Flower Pot',     svgIcon: svgFlowerPot,     type: 'floor-decor', cost: 5,  slot: 'floor',     desc: 'Pretty blooms!' },
  { id: 'rainbow-rug', name: 'Rainbow Rug',    svgIcon: svgRainbowRug,    type: 'floor-decor', cost: 8,  slot: 'floor',     desc: 'Colorful and cozy.' },
  { id: 'lamp',        name: 'Cute Lamp',      svgIcon: svgLamp,          type: 'floor-decor', cost: 8,  slot: 'floor',     desc: 'Warm glowing light.' },
  { id: 'plush-bear',  name: 'Plush Bear',     svgIcon: svgPlushBear,     type: 'floor-decor', cost: 6,  slot: 'floor',     desc: 'A cuddly friend.' },
  { id: 'cake',        name: 'Birthday Cake',  svgIcon: svgCake,          type: 'floor-decor', cost: 15, slot: 'floor',     desc: 'Yummy cake!' },
  { id: 'balloon',     name: 'Balloons',       svgIcon: svgBalloon,       type: 'floor-decor', cost: 5,  slot: 'floor',     desc: 'Festive and fun!' },

  // WALL DECOR
  { id: 'heart-frame',    name: 'Heart Frame',    svgIcon: svgHeartFrame,    type: 'wall-decor', cost: 8,  slot: 'wall',      desc: 'A sweet picture frame.' },
  { id: 'star-bunting',   name: 'Star Bunting',   svgIcon: svgStarBunting,   type: 'wall-decor', cost: 10, slot: 'wall',      desc: 'Twinkly decorations!' },
  { id: 'cloud-shelf',    name: 'Cloud Shelf',    svgIcon: svgCloudShelf,    type: 'wall-decor', cost: 12, slot: 'wall',      desc: 'Floaty cloud shelf.' },
  { id: 'rainbow-window', name: 'Rainbow Window', svgIcon: (s) => svgWallpaperSwatch('wp-rainbow', s), type: 'wall-decor', cost: 15, slot: 'wall', desc: 'A sunny window!' },
  { id: 'fairy-lights',   name: 'Fairy Lights',   svgIcon: svgStarBunting,   type: 'wall-decor', cost: 12, slot: 'wall',      desc: 'Magical sparkles!' },

  // WALLPAPERS
  { id: 'wp-pink-floral',  name: 'Pink Floral',    svgIcon: (s) => svgWallpaperSwatch('wp-pink-floral', s),  type: 'wallpaper', cost: 0,  slot: 'wallpaper', desc: 'Sweet pink flowers.',    wallClass: 'wp-pink-floral' },
  { id: 'wp-mint-stars',   name: 'Mint Stars',     svgIcon: (s) => svgWallpaperSwatch('wp-mint-stars', s),   type: 'wallpaper', cost: 20, slot: 'wallpaper', desc: 'Mint with gold stars.',   wallClass: 'wp-mint-stars' },
  { id: 'wp-purple-dream', name: 'Purple Dream',   svgIcon: (s) => svgWallpaperSwatch('wp-purple-dream', s), type: 'wallpaper', cost: 20, slot: 'wallpaper', desc: 'Soft purple clouds.',     wallClass: 'wp-purple-dream' },
  { id: 'wp-rainbow',      name: 'Rainbow Magic',  svgIcon: (s) => svgWallpaperSwatch('wp-rainbow', s),      type: 'wallpaper', cost: 35, slot: 'wallpaper', desc: 'Full rainbow stripes!',   wallClass: 'wp-rainbow' },
  { id: 'wp-ocean',        name: 'Ocean Waves',    svgIcon: (s) => svgWallpaperSwatch('wp-ocean', s),        type: 'wallpaper', cost: 30, slot: 'wallpaper', desc: 'Calm blue waves.',        wallClass: 'wp-ocean' },

  // FLOORING
  { id: 'fl-wood',      name: 'Wood Floor',   svgIcon: (s) => svgFloorSwatch('fl-wood', s),      type: 'flooring', cost: 0,  slot: 'flooring', desc: 'Warm wooden planks.',    floorClass: 'fl-wood' },
  { id: 'fl-pink-tile', name: 'Pink Tile',    svgIcon: (s) => svgFloorSwatch('fl-pink-tile', s), type: 'flooring', cost: 15, slot: 'flooring', desc: 'Pretty pink tiles!',     floorClass: 'fl-pink-tile' },
  { id: 'fl-cloud',     name: 'Cloud Fluff',  svgIcon: (s) => svgFloorSwatch('fl-cloud', s),     type: 'flooring', cost: 25, slot: 'flooring', desc: 'Walk on clouds!',        floorClass: 'fl-cloud' },
  { id: 'fl-rainbow',   name: 'Rainbow Path', svgIcon: (s) => svgFloorSwatch('fl-rainbow', s),   type: 'flooring', cost: 30, slot: 'flooring', desc: 'A rainbow to walk on!',  floorClass: 'fl-rainbow' },

  // ─── New Furniture ────────────────────────────────────────────────────────────
  { id: 'dresser',       name: 'Dresser',       svgIcon: svgDresser,       type: 'furniture',   cost: 22, slot: 'floor',    desc: 'A pink dresser with brass handles.' },
  { id: 'vanity-table',  name: 'Vanity',         svgIcon: svgVanityTable,   type: 'furniture',   cost: 28, slot: 'floor',    desc: 'A dressing table with mirror.' },
  { id: 'rocking-chair', name: 'Rocking Chair',  svgIcon: svgRockingChair,  type: 'furniture',   cost: 20, slot: 'floor',    desc: 'Rock gently back and forth!' },
  { id: 'bunk-bed',      name: 'Bunk Bed',       svgIcon: svgBunkBed,       type: 'furniture',   cost: 35, slot: 'floor',    desc: 'Two beds stacked up high!' },
  { id: 'cozy-armchair', name: 'Armchair',       svgIcon: svgCozyArmchair,  type: 'furniture',   cost: 18, slot: 'floor',    desc: 'A plump and cozy armchair.' },

  // ─── New Garden/Nature (floor-decor) ─────────────────────────────────────────
  { id: 'flower-pot-big',   name: 'Flower Pot',      svgIcon: svgFlowerPotBig,    type: 'floor-decor', cost: 12, slot: 'floor', desc: 'Big pot with pink and yellow blooms!' },
  { id: 'rainbow-arch',     name: 'Rainbow Arch',    svgIcon: svgRainbowArch,     type: 'floor-decor', cost: 25, slot: 'floor', desc: 'A pastel rainbow arch with clouds.' },
  { id: 'mushroom-cluster', name: 'Mushrooms',       svgIcon: svgMushroomCluster, type: 'floor-decor', cost: 14, slot: 'floor', desc: 'Three cute spotted mushrooms.' },

  // ─── New Accessories (wall-decor) ────────────────────────────────────────────
  { id: 'wall-clock',    name: 'Wall Clock',   svgIcon: svgWallClock,    type: 'wall-decor', cost: 15, slot: 'wall', desc: 'A round pastel clock!' },
  { id: 'picture-frame', name: 'Heart Frame',  svgIcon: svgPictureFrame, type: 'wall-decor', cost: 10, slot: 'wall', desc: 'Ornate frame with pink hearts.' },
  { id: 'star-mobile',   name: 'Star Mobile',  svgIcon: svgStarMobile,   type: 'wall-decor', cost: 18, slot: 'wall', desc: 'Hanging mobile with 5 stars.' },
  { id: 'trophy-shelf',  name: 'Trophy Shelf', svgIcon: svgTrophyShelf,  type: 'wall-decor', cost: 20, slot: 'wall', desc: 'A shelf with a golden trophy!' },

  // ─── New Cozy/Food (floor-decor) ─────────────────────────────────────────────
  { id: 'tea-set',        name: 'Tea Set',       svgIcon: svgTeaSet,       type: 'floor-decor', cost: 16, slot: 'floor', desc: 'Tray with teapot and cups.' },
  { id: 'cupcake-stand',  name: 'Cupcake Stand', svgIcon: svgCupcakeStand, type: 'floor-decor', cost: 14, slot: 'floor', desc: 'Tiered stand with yummy cupcakes!' },
  { id: 'hot-cocoa',      name: 'Hot Cocoa',     svgIcon: svgHotCocoa,     type: 'floor-decor', cost: 10, slot: 'floor', desc: 'Mug with whipped cream and marshmallows.' },

  // ─── New Special/Magical (floor-decor) ───────────────────────────────────────
  { id: 'lava-lamp',        name: 'Lava Lamp',        svgIcon: svgLavaLamp,        type: 'floor-decor', cost: 20, slot: 'floor', desc: 'Purple and pink floating blobs.' },
  { id: 'snow-globe',       name: 'Snow Globe',       svgIcon: svgSnowGlobe,       type: 'floor-decor', cost: 22, slot: 'floor', desc: 'A tiny house inside a glass dome.' },
  { id: 'magic-wand',       name: 'Magic Wand',       svgIcon: svgMagicWand,       type: 'floor-decor', cost: 24, slot: 'floor', desc: 'A glowing gold wand on a stand.' },
  { id: 'butterfly-garden', name: 'Butterfly Garden', svgIcon: svgButterflyGarden, type: 'floor-decor', cost: 18, slot: 'floor', desc: 'Garden patch with two butterflies.' },
  { id: 'stuffed-shelf',    name: 'Plushie Shelf',    svgIcon: svgStuffedShelf,    type: 'floor-decor', cost: 26, slot: 'floor', desc: 'Shelf with 3 tiny stuffed animals!' },

  // ─── New Wallpapers ───────────────────────────────────────────────────────────
  { id: 'wp-stars',      name: 'Starry Night',    svgIcon: (s) => svgWallpaperSwatch('wp-stars', s),      type: 'wallpaper', cost: 20, slot: 'wallpaper', desc: 'Deep night sky with golden stars.',  wallClass: 'wp-stars' },
  { id: 'wp-rainbow-stripes', name: 'Rainbow Stripes', svgIcon: (s) => svgWallpaperSwatch('wp-rainbow', s), type: 'wallpaper', cost: 18, slot: 'wallpaper', desc: 'Soft rainbow stripe wall.',        wallClass: 'wp-rainbow' },
  { id: 'wp-clouds',     name: 'Cloudy Sky',      svgIcon: (s) => svgWallpaperSwatch('wp-clouds', s),     type: 'wallpaper', cost: 16, slot: 'wallpaper', desc: 'Dreamy blue sky with clouds.',       wallClass: 'wp-clouds' },
  { id: 'wp-galaxy',     name: 'Galaxy',          svgIcon: (s) => svgWallpaperSwatch('wp-galaxy', s),     type: 'wallpaper', cost: 25, slot: 'wallpaper', desc: 'A swirling purple galaxy.',          wallClass: 'wp-galaxy' },
  { id: 'wp-strawberry', name: 'Strawberry',      svgIcon: (s) => svgWallpaperSwatch('wp-strawberry', s), type: 'wallpaper', cost: 18, slot: 'wallpaper', desc: 'Sweet strawberry pattern.',          wallClass: 'wp-strawberry' },
  { id: 'wp-mint',       name: 'Mint Dots',       svgIcon: (s) => svgWallpaperSwatch('wp-mint', s),       type: 'wallpaper', cost: 15, slot: 'wallpaper', desc: 'Fresh mint with dot pattern.',       wallClass: 'wp-mint' },

  // ─── New Flooring ─────────────────────────────────────────────────────────────
  { id: 'fl-pink-carpet',   name: 'Pink Carpet',   svgIcon: (s) => svgFloorSwatch('fl-pink-carpet', s),   type: 'flooring', cost: 20, slot: 'flooring', desc: 'Soft fluffy pink carpet!',      floorClass: 'fl-pink-carpet' },
  { id: 'fl-purple-carpet', name: 'Purple Carpet', svgIcon: (s) => svgFloorSwatch('fl-purple-carpet', s), type: 'flooring', cost: 20, slot: 'flooring', desc: 'Cozy purple carpet.',            floorClass: 'fl-purple-carpet' },
  { id: 'fl-marble',        name: 'Marble',        svgIcon: (s) => svgFloorSwatch('fl-marble', s),        type: 'flooring', cost: 28, slot: 'flooring', desc: 'Shiny marble floor.',            floorClass: 'fl-marble' },
  { id: 'fl-grass',         name: 'Garden Grass',  svgIcon: (s) => svgFloorSwatch('fl-grass', s),         type: 'flooring', cost: 22, slot: 'flooring', desc: 'Fresh green garden grass!',     floorClass: 'fl-grass' },
];

// ─── Old Slot Map (for backward-compat migration only) ────────────────────────
const LEGACY_ROOM_SLOTS = {
  'wall-1':  { x: 0.10, y: 0.28 },
  'wall-2':  { x: 0.50, y: 0.22 },
  'wall-3':  { x: 0.82, y: 0.28 },
  'char-1':  { x: 0.14, y: 0.66 },
  'char-2':  { x: 0.42, y: 0.66 },
  'char-3':  { x: 0.70, y: 0.66 },
  'floor-1': { x: 0.08, y: 0.82 },
  'floor-2': { x: 0.28, y: 0.82 },
  'floor-3': { x: 0.50, y: 0.82 },
  'floor-4': { x: 0.70, y: 0.82 },
  'floor-5': { x: 0.88, y: 0.82 },
};

// ─── Snap Rules ────────────────────────────────────────────────────────────────
// Returns snapped {x, y} given raw fractional coords and item kind.
// kind: 'wall' | 'floor' | 'char'
function snapPosition(rawX, rawY, kind) {
  // No snapping — place exactly where clicked, just clamp to room bounds
  const x = Math.max(0.02, Math.min(0.98, rawX));
  const y = Math.max(0.02, Math.min(0.98, rawY));
  return { x, y };
}

// Derive snap kind from SHOP_ITEMS type string
function snapKindForType(type) {
  if (type === 'wall-decor') return 'wall';
  if (type === 'furniture' || type === 'floor-decor') return 'floor';
  return 'floor'; // fallback
}

// Icon size based on kind
function iconSizeForKind(kind) {
  if (kind === 'char') return 160;
  if (kind === 'wall') return 90;
  return 110;
}

// ─── Backward-Compat Migration ─────────────────────────────────────────────────
// Detects old format (has slotId) and converts to new {id, kind, x, y, z} format.
function migratePlacedItems(placedItems) {
  if (!placedItems || placedItems.length === 0) return placedItems;
  const needsMigration = placedItems.some(p => 'slotId' in p);
  if (!needsMigration) return placedItems;

  let zCounter = 1;
  return placedItems.map(p => {
    const legacySlot = LEGACY_ROOM_SLOTS[p.slotId] || { x: 0.5, y: 0.82 };
    if (p.charId) {
      return { id: p.charId, kind: 'char', x: legacySlot.x, y: legacySlot.y, z: zCounter++ };
    } else {
      const item = SHOP_ITEMS.find(i => i.id === p.itemId);
      const kind = item ? snapKindForType(item.type) : 'floor';
      return { id: p.itemId, kind, x: legacySlot.x, y: legacySlot.y, z: zCounter++ };
    }
  });
}

// ─── State ─────────────────────────────────────────────────────────────────────
let houseEditMode = false;
let houseShopFilterSlot = null;
let houseShopTab = 'all';

// Free-placement state
let housePendingItem = null;  // { id, kind } — item selected from tray, awaiting click-to-place
let houseDragState = null;    // active drag: { placedIndex, startX, startY, origX, origY }

// ─── Coins ─────────────────────────────────────────────────────────────────────
function awardCoins(amount) {
  save.coins = (save.coins || 0) + amount;
  if (!save.stats) save.stats = {};
  save.stats.totalCoinsEarned = (save.stats.totalCoinsEarned || 0) + amount;
  writeSave(save);
  const displays = document.querySelectorAll('.coin-display');
  displays.forEach(el => { el.textContent = '🪙 ' + save.coins; });
}

// ─── Wallpaper helpers ─────────────────────────────────────────────────────────
function getActiveWallpaperId() {
  if (!save.house) return 'wp-pink-floral';
  return save.house.wallpaper || 'wp-pink-floral';
}

function getActiveFlooringId() {
  if (!save.house) return 'fl-wood';
  return save.house.flooring || 'fl-wood';
}

// ─── Room SVG ──────────────────────────────────────────────────────────────────
function buildRoomSVG(wallClass, floorClass) {
  const wallColors = {
    'wp-pink-floral':  { wall: '#FDE8EF', wallDark: '#F7C8D8', ceiling: '#FFF0F5' },
    'wp-mint-stars':   { wall: '#E0F5EC', wallDark: '#BEE9D4', ceiling: '#F0FFF8' },
    'wp-purple-dream': { wall: '#EDE0FF', wallDark: '#D4BAFF', ceiling: '#F5F0FF' },
    'wp-rainbow':      { wall: '#FFF8FF', wallDark: '#F0D0FF', ceiling: '#FFFAFF' },
    'wp-ocean':        { wall: '#E0F4FF', wallDark: '#B8E0F7', ceiling: '#F0FAFF' },
    'wp-stars':        { wall: '#1A1050', wallDark: '#2A1870', ceiling: '#100830' },
    'wp-clouds':       { wall: '#D8EEFF', wallDark: '#B8D8F8', ceiling: '#EEF8FF' },
    'wp-galaxy':       { wall: '#0A0820', wallDark: '#1A1040', ceiling: '#050414' },
    'wp-strawberry':   { wall: '#FFF0F5', wallDark: '#FFD0E0', ceiling: '#FFF8FC' },
    'wp-mint':         { wall: '#E8FFF5', wallDark: '#C0EED8', ceiling: '#F4FFFB' },
  };
  const floorColors = {
    'fl-wood':          { main: '#DEB887', dark: '#C8A06B', line: '#B8905A' },
    'fl-pink-tile':     { main: '#FFCCD8', dark: '#FFB0C2', line: '#FF9DB5' },
    'fl-cloud':         { main: '#EAF4FF', dark: '#D0E8FF', line: '#B8D8F8' },
    'fl-rainbow':       { main: '#FFE8F0', dark: '#FFD0E4', line: '#FFBAD6' },
    'fl-pink-carpet':   { main: '#FFAAC8', dark: '#FF90B4', line: '#FF78A0' },
    'fl-purple-carpet': { main: '#C8A0F0', dark: '#B088D8', line: '#9870C0' },
    'fl-marble':        { main: '#F4F0EE', dark: '#E8E2DE', line: '#D8D0CA' },
    'fl-grass':         { main: '#72C850', dark: '#60B840', line: '#50A030' },
  };

  const wc = wallColors[wallClass] || wallColors['wp-pink-floral'];
  const fc = floorColors[floorClass] || floorColors['fl-wood'];

  // Room viewBox: 1100 x 550 (16/10 taller feel)
  // Wall: top 58% = 0..319, Floor: bottom 42% = 319..550
  const VW = 1100, VH = 550;
  const wallH = Math.round(VH * 0.58); // 319
  const floorY = wallH;
  const floorH = VH - floorY;          // 231

  // Floor planks
  const plankH = Math.round(floorH / 8);
  const plankColors = [fc.main, fc.dark, fc.main, fc.dark, fc.main, fc.dark, fc.main, fc.main];
  const planks = plankColors.map((c, i) =>
    `<rect x="0" y="${floorY + i * plankH}" width="${VW}" height="${plankH}" fill="${c}"/>`
  ).join('');
  const plankLines = [110, 220, 330, 440, 550, 660, 770, 880, 990].map(x =>
    `<line x1="${x}" y1="${floorY}" x2="${x}" y2="${VH}" stroke="${fc.line}" stroke-width="1.5" opacity="0.45"/>`
  ).join('');
  const plankJoins = plankColors.map((_, i) =>
    `<line x1="0" y1="${floorY + i * plankH}" x2="${VW}" y2="${floorY + i * plankH}" stroke="${fc.line}" stroke-width="1" opacity="0.3"/>`
  ).join('');

  // Window position: larger, upper-right
  const winX = 800, winY = 22, winW = 230, winH = 205;

  return `<svg class="room-svg" viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="room-ceiling-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${wc.ceiling}"/>
      <stop offset="100%" stop-color="${wc.wall}"/>
    </linearGradient>
    <linearGradient id="room-wall-side-l" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.13)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </linearGradient>
    <linearGradient id="room-wall-side-r" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.13)"/>
    </linearGradient>
    <linearGradient id="room-floor-top" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.22)"/>
      <stop offset="30%" stop-color="rgba(0,0,0,0)"/>
    </linearGradient>
    <linearGradient id="room-baseboard" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${wc.wallDark}"/>
      <stop offset="100%" stop-color="${wc.wallDark}" stop-opacity="0.7"/>
    </linearGradient>
    <linearGradient id="room-window-glass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(200,240,255,0.85)"/>
      <stop offset="50%" stop-color="rgba(180,225,250,0.65)"/>
      <stop offset="100%" stop-color="rgba(160,205,245,0.75)"/>
    </linearGradient>
    <radialGradient id="room-ambient" cx="78%" cy="22%" r="52%">
      <stop offset="0%" stop-color="rgba(255,250,230,0.20)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <!-- Window light cone on floor -->
    <radialGradient id="room-light-cone" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
      <stop offset="0%" stop-color="rgba(255,248,210,0.22)"/>
      <stop offset="100%" stop-color="rgba(255,248,210,0)"/>
    </radialGradient>
    <filter id="room-glow">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="room-clip"><rect width="${VW}" height="${VH}"/></clipPath>
  </defs>

  <!-- Wall background -->
  <rect width="${VW}" height="${wallH}" fill="url(#room-ceiling-grad)" clip-path="url(#room-clip)"/>

  <!-- Floor planks -->
  <g clip-path="url(#room-clip)">
    ${planks}
    ${plankLines}
    ${plankJoins}
  </g>

  <!-- Floor top shadow strip (depth at wall-floor join) -->
  <rect x="0" y="${floorY}" width="${VW}" height="${Math.round(floorH * 0.18)}" fill="url(#room-floor-top)" clip-path="url(#room-clip)"/>

  <!-- Baseboard trim -->
  <rect x="0" y="${wallH - 12}" width="${VW}" height="12" fill="url(#room-baseboard)" opacity="0.92"/>
  <rect x="0" y="${wallH}" width="${VW}" height="4" fill="rgba(255,255,255,0.38)"/>

  <!-- Corner shadow left -->
  <rect x="0" y="0" width="90" height="${VH}" fill="url(#room-wall-side-l)" clip-path="url(#room-clip)"/>
  <!-- Corner shadow right -->
  <rect x="${VW - 90}" y="0" width="90" height="${VH}" fill="url(#room-wall-side-r)" clip-path="url(#room-clip)"/>

  <!-- Ambient window glow on wall -->
  <rect x="0" y="0" width="${VW}" height="${wallH}" fill="url(#room-ambient)"/>

  <!-- Window light cone on floor -->
  <polygon points="${winX + winW*0.1},${wallH} ${winX + winW*0.9},${wallH} ${winX + winW*1.4},${VH} ${winX - winW*0.4},${VH}" fill="url(#room-light-cone)" clip-path="url(#room-clip)" opacity="0.8"/>

  <!-- Window outer glow halo -->
  <rect x="${winX - 8}" y="${winY - 8}" width="${winW + 16}" height="${winH + 16}" rx="14" fill="rgba(255,248,200,0.22)" filter="url(#room-glow)"/>

  <!-- Window frame -->
  <rect x="${winX}" y="${winY}" width="${winW}" height="${winH}" rx="10" fill="white" stroke="${wc.wallDark}" stroke-width="3.5"/>
  <!-- Glass -->
  <rect x="${winX + 9}" y="${winY + 9}" width="${winW - 18}" height="${winH - 18}" rx="6" fill="url(#room-window-glass)"/>
  <!-- Sky top half -->
  <rect x="${winX + 10}" y="${winY + 10}" width="${winW - 20}" height="${(winH - 20) * 0.52}" rx="5" fill="rgba(135,206,235,0.5)"/>
  <!-- Greenery lower half -->
  <rect x="${winX + 10}" y="${winY + 10 + (winH - 20) * 0.52}" width="${winW - 20}" height="${(winH - 20) * 0.48}" rx="0 0 5 5" fill="rgba(180,230,160,0.35)"/>
  <!-- Sun -->
  <circle cx="${winX + winW * 0.28}" cy="${winY + winH * 0.24}" r="22" fill="rgba(255,240,140,0.55)"/>
  <circle cx="${winX + winW * 0.28}" cy="${winY + winH * 0.24}" r="13" fill="rgba(255,230,100,0.75)"/>
  <!-- Window cross bars -->
  <line x1="${winX + winW/2}" y1="${winY + 9}" x2="${winX + winW/2}" y2="${winY + winH - 9}" stroke="white" stroke-width="6" opacity="0.95"/>
  <line x1="${winX + 9}" y1="${winY + winH/2}" x2="${winX + winW - 9}" y2="${winY + winH/2}" stroke="white" stroke-width="6" opacity="0.95"/>
  <!-- Window sill -->
  <rect x="${winX - 6}" y="${winY + winH - 2}" width="${winW + 12}" height="13" rx="4" fill="${wc.wallDark}" opacity="0.95"/>

  <!-- Left curtain (draped elegantly) -->
  <path d="M${winX - 2},${winY - 2}
           Q${winX - 22},${winY + winH*0.22} ${winX + 14},${winY + winH*0.48}
           Q${winX + 5},${winY + winH*0.68} ${winX + 20},${winY + winH - 4}"
        fill="rgba(255,190,215,0.72)" stroke="rgba(255,160,195,0.85)" stroke-width="2.5"/>
  <path d="M${winX - 2},${winY - 2}
           Q${winX + 18},${winY + winH*0.18} ${winX + 8},${winY + winH*0.40}"
        fill="rgba(255,220,235,0.55)"/>
  <!-- Right curtain -->
  <path d="M${winX + winW + 2},${winY - 2}
           Q${winX + winW + 22},${winY + winH*0.22} ${winX + winW - 14},${winY + winH*0.48}
           Q${winX + winW - 5},${winY + winH*0.68} ${winX + winW - 20},${winY + winH - 4}"
        fill="rgba(255,190,215,0.72)" stroke="rgba(255,160,195,0.85)" stroke-width="2.5"/>
  <path d="M${winX + winW + 2},${winY - 2}
           Q${winX + winW - 18},${winY + winH*0.18} ${winX + winW - 8},${winY + winH*0.40}"
        fill="rgba(255,220,235,0.55)"/>
  <!-- Curtain rod -->
  <rect x="${winX - 22}" y="${winY - 10}" width="${winW + 44}" height="11" rx="5.5" fill="#C8956C"/>
  <circle cx="${winX - 22}" cy="${winY - 5}" r="7" fill="#B8856B"/>
  <circle cx="${winX + winW + 22}" cy="${winY - 5}" r="7" fill="#B8856B"/>
</svg>`;
}

// ─── Build House Screen ────────────────────────────────────────────────────────
function buildHouse() {
  const el = document.getElementById('screen-house');
  if (!el) return;

  if (!save.house) {
    save.house = { wallpaper: 'wp-pink-floral', flooring: 'fl-wood', ownedItems: ['wp-pink-floral', 'fl-wood'], placedItems: [] };
    writeSave(save);
  }
  if (!save.house.ownedItems.includes('wp-pink-floral')) save.house.ownedItems.push('wp-pink-floral');
  if (!save.house.ownedItems.includes('fl-wood')) save.house.ownedItems.push('fl-wood');

  // Migrate legacy slot format to free-placement format
  const migrated = migratePlacedItems(save.house.placedItems || []);
  if (migrated !== save.house.placedItems) {
    save.house.placedItems = migrated;
    writeSave(save);
  }

  const wallClass = getActiveWallpaperId();
  const floorClass = getActiveFlooringId();
  const wallItem = SHOP_ITEMS.find(i => i.id === wallClass);
  const floorItem = SHOP_ITEMS.find(i => i.id === floorClass);
  const wallCssClass = wallItem ? wallItem.wallClass : 'wp-pink-floral';
  const floorCssClass = floorItem ? floorItem.floorClass : 'fl-wood';

  el.innerHTML = `
    <!-- HUD -->
    <div class="house-hud">
      <button class="btn-back" onclick="showScreen('home');buildHome()">← Back</button>
      <div class="house-hud-title">🏠 My Cottage</div>
      <div class="house-hud-coins coin-display">🪙 ${save.coins || 0}</div>
    </div>

    <!-- Room -->
    <div class="room-outer">
      <div class="room-container ${wallCssClass} ${floorCssClass}" id="room-container">
        ${buildRoomSVG(wallCssClass, floorCssClass)}
        <div class="room-items-layer" id="room-items-layer">
          <!-- Items and slots rendered here -->
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="house-bottom-bar">
      <button class="house-btn ${houseEditMode ? 'active' : ''}" id="house-edit-btn" onclick="toggleEditMode()">
        ${houseEditMode ? '✅ Done' : '✏️ Decorate'}
      </button>
      <button class="house-btn house-btn-shop" onclick="openShop()">
        🛍️ Shop
      </button>
      <div class="house-coins-large coin-display">🪙 ${save.coins || 0} coins</div>
    </div>
  `;

  renderRoomItems();
}

// ─── Render Items In Room ──────────────────────────────────────────────────────
function renderRoomItems() {
  const layer = document.getElementById('room-items-layer');
  const container = document.getElementById('room-container');
  if (!layer || !container) return;

  layer.innerHTML = '';

  // Always use getBoundingClientRect so click coords and render coords share the same reference
  const rect = container.getBoundingClientRect();
  const W = rect.width || 900;
  const H = rect.height || 506;

  const placedItems = save.house.placedItems || [];

  // Sort by z so lower z renders first (behind)
  const sorted = placedItems.slice().sort((a, b) => (a.z || 0) - (b.z || 0));

  sorted.forEach((placed, sortedIdx) => {
    // Find original index in placedItems for removal/dragging
    const origIdx = placedItems.indexOf(placed);

    const px = placed.x * W;
    const py = placed.y * H;
    const iconSize = iconSizeForKind(placed.kind);

    const el = document.createElement('div');
    el.className = 'room-slot-item';
    el.style.left = px + 'px';
    el.style.top = py + 'px';
    el.dataset.idx = origIdx;

    if (placed.kind === 'char') {
      const char = getCharacter(placed.id);
      const imgSrc = (typeof CharacterImages !== 'undefined') ? CharacterImages.get(placed.id) : null;
      el.classList.add('room-slot-char');
      el.style.width = iconSize + 'px';
      el.style.height = iconSize + 'px';
      const delay = (Math.random() * 1.5).toFixed(1);
      const content = imgSrc
        ? `<img src="${imgSrc}" class="room-char-img" alt="${char ? char.name : placed.id}" draggable="false">`
        : (char && char.svgFn ? char.svgFn(iconSize, 'idle') : '');
      el.innerHTML = `
        <div class="room-char-figure">
          <div style="animation: float 3s ease-in-out infinite; animation-delay: ${delay}s; display:flex; align-items:flex-end;">
            ${content}
          </div>
        </div>
      `;
    } else {
      const item = SHOP_ITEMS.find(i => i.id === placed.id);
      if (item && item.svgIcon) {
        const card = document.createElement('div');
        card.className = 'room-item-card';
        card.innerHTML = item.svgIcon(iconSize);
        el.appendChild(card);
      }
    }

    if (houseEditMode) {
      el.classList.add('room-item-editable');

      // × remove button (appears on hover via CSS)
      const removeBtn = document.createElement('button');
      removeBtn.className = 'room-item-remove-btn';
      removeBtn.textContent = '×';
      removeBtn.title = 'Remove';
      removeBtn.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removePlacedItem(origIdx);
      });
      el.appendChild(removeBtn);

      // Right-click to remove
      el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        removePlacedItem(origIdx);
      });

      // Drag to reposition — Pointer Events API handles both mouse and touch
      el.style.touchAction = 'none';
      el.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        if (housePendingItem) return;
        e.preventDefault();
        el.setPointerCapture(e.pointerId);
        houseDragState = {
          placedIndex: origIdx,
          startX: e.clientX,
          startY: e.clientY,
          origX: placed.x,
          origY: placed.y,
          el,
          moved: false,
        };
        el.style.transition = 'none';
        el.style.zIndex = '20';
      });

      el.addEventListener('pointermove', (e) => {
        if (!houseDragState || houseDragState.el !== el) return;
        const dx = e.clientX - houseDragState.startX;
        const dy = e.clientY - houseDragState.startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) houseDragState.moved = true;
        if (!houseDragState.moved) return;
        e.preventDefault();
        const rect = container.getBoundingClientRect();
        const newX = Math.max(0, Math.min(rect.width,  houseDragState.origX * rect.width  + dx));
        const newY = Math.max(0, Math.min(rect.height, houseDragState.origY * rect.height + dy));
        el.style.left = newX + 'px';
        el.style.top  = newY + 'px';
      });

      const finishDrag = () => {
        if (!houseDragState || houseDragState.el !== el) return;
        if (houseDragState.moved) {
          const rect = container.getBoundingClientRect();
          const rawX = parseFloat(el.style.left)  / rect.width;
          const rawY = parseFloat(el.style.top)   / rect.height;
          const p = save.house.placedItems[houseDragState.placedIndex];
          if (p) {
            const snapped = snapPosition(rawX, rawY, p.kind);
            p.x = snapped.x; p.y = snapped.y;
            writeSave(save);
          }
        }
        houseDragState = null;
        renderRoomItems();
      };
      el.addEventListener('pointerup',     finishDrag);
      el.addEventListener('pointercancel', finishDrag);
    }

    layer.appendChild(el);
  });

  // ─── Item Tray (edit mode) ────────────────────────────────────────────────
  if (houseEditMode) {
    renderItemTray(layer, W, H);
  }

  // ─── Room tap/click handler for placement ────────────────────────────────
  if (layer._roomPlaceHandler) {
    layer.removeEventListener('pointerup', layer._roomPlaceHandler);
    layer._roomPlaceHandler = null;
  }
  layer.style.pointerEvents = houseEditMode ? 'all' : 'none';
  layer.style.touchAction   = houseEditMode ? 'none' : '';

  if (houseEditMode && housePendingItem) {
    layer.style.cursor = 'crosshair';
    layer._roomPlaceHandler = (e) => {
      if (e.target.closest('.room-item-tray') || e.target.closest('.room-item-remove-btn')) return;
      if (houseDragState && houseDragState.moved) return; // was a drag, not a tap
      if (!housePendingItem) return;

      const rect = container.getBoundingClientRect();
      const rawX = (e.clientX - rect.left) / rect.width;
      const rawY = (e.clientY - rect.top)  / rect.height;
      const { x, y } = snapPosition(rawX, rawY, housePendingItem.kind);

      const nextZ = save.house.placedItems.length > 0
        ? Math.max(...save.house.placedItems.map(p => p.z || 0)) + 1
        : 1;

      if (housePendingItem.kind === 'char') {
        save.house.placedItems = save.house.placedItems.filter(p => p.id !== housePendingItem.id);
      }

      save.house.placedItems.push({ id: housePendingItem.id, kind: housePendingItem.kind, x, y, z: nextZ });
      writeSave(save);
      housePendingItem = null;
      layer.style.cursor = '';
      renderRoomItems();
    };
    layer.addEventListener('pointerup', layer._roomPlaceHandler);
  } else {
    layer.style.cursor = '';
  }
}

// ─── Item Tray ─────────────────────────────────────────────────────────────────
// Renders owned but unplaced items as a tray pinned to the bottom of the room.
function renderItemTray(layer, W, H) {
  const placedIds = new Set((save.house.placedItems || []).map(p => p.id));
  const ownedItems = save.house.ownedItems || [];

  // Collect unplaced owned shop items (exclude wallpaper/flooring — those aren't room objects)
  const unplacedItems = SHOP_ITEMS.filter(item =>
    ownedItems.includes(item.id) &&
    item.type !== 'wallpaper' &&
    item.type !== 'flooring' &&
    !placedIds.has(item.id)
  );

  // Collect unplaced owned characters
  const unplacedChars = (save.unlockedCharacters || []).filter(charId => !placedIds.has(charId));

  const tray = document.createElement('div');
  tray.className = 'room-item-tray';

  if (unplacedItems.length === 0 && unplacedChars.length === 0) {
    tray.innerHTML = '<span class="room-tray-empty">All items placed! Shop for more 🛍️</span>';
  } else {
    // Items
    unplacedItems.forEach(item => {
      const btn = document.createElement('div');
      btn.className = 'room-tray-item' + (housePendingItem && housePendingItem.id === item.id ? ' pending' : '');
      btn.title = item.name;
      btn.innerHTML = item.svgIcon(48);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (housePendingItem && housePendingItem.id === item.id) {
          // Deselect
          housePendingItem = null;
        } else {
          housePendingItem = { id: item.id, kind: snapKindForType(item.type) };
        }
        renderRoomItems();
      });
      tray.appendChild(btn);
    });

    // Characters — show real image if available, SVG fallback
    unplacedChars.forEach(charId => {
      const char = getCharacter(charId);
      if (!char) return;
      const imgSrc = (typeof CharacterImages !== 'undefined') ? CharacterImages.get(charId) : null;
      const btn = document.createElement('div');
      btn.className = 'room-tray-item' + (housePendingItem && housePendingItem.id === charId ? ' pending' : '');
      btn.title = char.name;
      btn.innerHTML = imgSrc
        ? `<img src="${imgSrc}" style="width:52px;height:52px;object-fit:contain;display:block;" alt="${char.name}" draggable="false">`
        : `<div style="line-height:0">${char.svgFn(48, 'idle')}</div>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (housePendingItem && housePendingItem.id === charId) {
          housePendingItem = null;
        } else {
          housePendingItem = { id: charId, kind: 'char' };
        }
        renderRoomItems();
      });
      tray.appendChild(btn);
    });
  }

  layer.appendChild(tray);
}

// ─── Remove Placed Item ─────────────────────────────────────────────────────────
function removePlacedItem(idx) {
  if (!save.house) return;
  save.house.placedItems.splice(idx, 1);
  writeSave(save);
  renderRoomItems();
}

// ─── Edit Mode ─────────────────────────────────────────────────────────────────
function toggleEditMode() {
  houseEditMode = !houseEditMode;
  housePendingItem = null;
  houseDragState = null;
  const btn = document.getElementById('house-edit-btn');
  if (btn) btn.textContent = houseEditMode ? '✅ Done' : '✏️ Decorate';
  if (btn) btn.classList.toggle('active', houseEditMode);
  renderRoomItems();
}

// ─── Shop ──────────────────────────────────────────────────────────────────────
function openShopForSlot(slotId, slotType) {
  // Legacy — no longer used for slot-based placement but kept for compat
  const tabMap = { wall: 'wall-decor', char: 'characters', floor: 'furniture' };
  houseShopTab = tabMap[slotType] || 'all';
  openShop(slotType);
}

function openShop(filterSlot) {
  houseShopFilterSlot = filterSlot || null;
  const modal = document.getElementById('shop-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderShop();
}

function closeShop() {
  const modal = document.getElementById('shop-modal');
  if (modal) modal.classList.add('hidden');
  houseShopFilterSlot = null;
}

function setShopTab(tab) {
  houseShopTab = tab;
  renderShop();
}

function renderShop() {
  const modal = document.getElementById('shop-modal');
  if (!modal) return;

  const tabs = [
    { id: 'all',        label: '✨ All' },
    { id: 'furniture',  label: '🛋️ Furniture' },
    { id: 'wall-decor', label: '🖼️ Wall Decor' },
    { id: 'wallpaper',  label: '🌸 Wallpapers' },
    { id: 'flooring',   label: '🪵 Flooring' },
    { id: 'characters', label: '🐰 Characters' },
  ];

  const activeWp = getActiveWallpaperId();
  const activeFl = getActiveFlooringId();

  let items;
  if (houseShopTab === 'all') {
    items = SHOP_ITEMS;
  } else if (houseShopTab === 'characters') {
    items = [];
  } else {
    items = SHOP_ITEMS.filter(i => i.type === houseShopTab);
  }

  function buildItemCard(item) {
    const owned = save.house.ownedItems.includes(item.id);
    const isActiveWp = item.type === 'wallpaper' && activeWp === item.id;
    const isActiveFl = item.type === 'flooring' && activeFl === item.id;
    const canAfford = (save.coins || 0) >= item.cost;
    const needMore = item.cost - (save.coins || 0);

    let btnText, btnClass, btnAction;
    if (isActiveWp || isActiveFl) {
      btnText = '✓ Active';
      btnClass = 'shop-item-btn active-item';
      btnAction = '';
    } else if (owned) {
      if (item.type === 'wallpaper') {
        btnText = 'Use It!';
        btnClass = 'shop-item-btn owned';
        btnAction = `applyWallpaper('${item.id}')`;
      } else if (item.type === 'flooring') {
        btnText = 'Use It!';
        btnClass = 'shop-item-btn owned';
        btnAction = `applyFlooring('${item.id}')`;
      } else {
        // Non-wallpaper/flooring: owned → place in room via tray
        btnText = 'Place in Room';
        btnClass = 'shop-item-btn owned';
        btnAction = `placeItem('${item.id}')`;
      }
    } else if (!canAfford) {
      btnText = `Need ${needMore} more 🪙`;
      btnClass = 'shop-item-btn';
      btnAction = '';
    } else {
      btnText = `Buy 🪙 ${item.cost}`;
      btnClass = 'shop-item-btn';
      if (item.type !== 'wallpaper' && item.type !== 'flooring') {
        btnAction = `purchaseAndPlace('${item.id}')`;
      } else {
        btnAction = `purchaseItem('${item.id}')`;
      }
    }

    const disabled = (!owned && !canAfford && item.cost > 0) ? 'disabled' : (isActiveWp || isActiveFl) ? 'disabled' : '';

    // Icon container: SVG illustrated icon at 64px in a soft rounded container
    const iconHtml = item.svgIcon
      ? `<div class="shop-item-icon-wrap">${item.svgIcon(64)}</div>`
      : '';

    // Checkmark overlay if owned
    const ownedOverlay = owned
      ? `<div class="shop-item-owned-check">✓</div>`
      : '';

    return `
      <div class="shop-item-card">
        <div class="shop-item-icon-container">
          ${iconHtml}
          ${ownedOverlay}
        </div>
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-desc">${item.desc}</div>
        ${item.cost > 0 ? `<div class="shop-item-cost">🪙 ${item.cost}</div>` : `<div class="shop-item-cost" style="color:#2ECC71;">Free!</div>`}
        <button class="${btnClass}" ${disabled} onclick="${btnAction}">${btnText}</button>
      </div>
    `;
  }

  function buildCharCards() {
    return save.unlockedCharacters.map(charId => {
      const char = getCharacter(charId);
      if (!char) return '';
      // Use new format: id field (not charId)
      const alreadyPlaced = save.house.placedItems.find(p => p.id === charId && p.kind === 'char');
      let btnText, btnClass, btnAction;

      if (alreadyPlaced) {
        btnText = 'In Room ✓';
        btnClass = 'shop-item-btn active-item';
        btnAction = '';
      } else {
        btnText = 'Place in Room';
        btnClass = 'shop-item-btn owned';
        btnAction = `openCharPlacementPicker('${charId}')`;
      }

      const disabled = alreadyPlaced ? 'disabled' : '';

      return `
        <div class="shop-item-card">
          <div class="shop-item-icon-container">
            <div class="shop-item-icon-wrap" style="width:64px;height:64px;background:none;">
              ${(typeof CharacterImages !== 'undefined' && CharacterImages.get(charId))
                ? `<img src="${CharacterImages.get(charId)}" style="width:64px;height:64px;object-fit:contain;" draggable="false" alt="${char.name}">`
                : char.svgFn(64, 'idle')}
            </div>
          </div>
          <div class="shop-item-name">${char.name}</div>
          <div class="shop-item-desc">${char.description}</div>
          <div class="shop-item-cost" style="color:#2ECC71;">Unlocked!</div>
          <button class="${btnClass}" ${disabled} onclick="${btnAction}">${btnText}</button>
        </div>
      `;
    }).join('');
  }

  const itemsHTML = houseShopTab === 'characters'
    ? buildCharCards()
    : items.map(buildItemCard).join('');

  modal.innerHTML = `
    <div class="shop-box">
      <div class="shop-header">
        <div class="shop-header-title">🛍️ Shop</div>
        <div class="shop-header-coins coin-display" style="color:#FFD700;font-weight:900;font-size:1rem;">🪙 ${save.coins || 0}</div>
        <button class="shop-close-btn" onclick="closeShop()">✕</button>
      </div>
      <div class="shop-tabs">
        ${tabs.map(t => `
          <button class="shop-tab ${houseShopTab === t.id ? 'active' : ''}" onclick="setShopTab('${t.id}')">${t.label}</button>
        `).join('')}
      </div>
      <div class="shop-grid">
        ${itemsHTML || '<div style="padding:40px;color:rgba(255,255,255,0.4);text-align:center;grid-column:1/-1;">Nothing here yet!</div>'}
      </div>
    </div>
  `;
}

// ─── Purchase & Placement ──────────────────────────────────────────────────────
function purchaseItem(itemId) {
  const item = SHOP_ITEMS.find(i => i.id === itemId);
  if (!item) return;
  if ((save.coins || 0) < item.cost) return;

  if (!save.house) save.house = { wallpaper: 'wp-pink-floral', flooring: 'fl-wood', ownedItems: ['wp-pink-floral', 'fl-wood'], placedItems: [] };

  save.coins = (save.coins || 0) - item.cost;
  if (!save.house.ownedItems.includes(itemId)) save.house.ownedItems.push(itemId);

  if (item.type === 'wallpaper') {
    save.house.wallpaper = itemId;
  } else if (item.type === 'flooring') {
    save.house.flooring = itemId;
  }

  writeSave(save);
  renderShop();
  buildHouse();
  openShop();
}

// purchaseAndPlace: buy item and immediately queue it for placement in the room
function purchaseAndPlace(itemId) {
  const item = SHOP_ITEMS.find(i => i.id === itemId);
  if (!item) return;
  if ((save.coins || 0) < item.cost) return;

  if (!save.house) save.house = { wallpaper: 'wp-pink-floral', flooring: 'fl-wood', ownedItems: ['wp-pink-floral', 'fl-wood'], placedItems: [] };

  save.coins = (save.coins || 0) - item.cost;
  if (!save.house.ownedItems.includes(itemId)) save.house.ownedItems.push(itemId);
  writeSave(save);

  closeShop();
  // Enter edit mode and queue item for placement
  houseEditMode = true;
  housePendingItem = { id: itemId, kind: snapKindForType(item.type) };
  renderRoomItems();
  const btn = document.getElementById('house-edit-btn');
  if (btn) { btn.textContent = '✅ Done'; btn.classList.add('active'); }
}

// placeItem: direct place from shop (owned item, slot-less) — queues for click placement
function placeItem(itemId) {
  const item = SHOP_ITEMS.find(i => i.id === itemId);
  if (!item || !save.house) return;
  closeShop();
  houseEditMode = true;
  housePendingItem = { id: itemId, kind: snapKindForType(item.type) };
  const btn = document.getElementById('house-edit-btn');
  if (btn) { btn.textContent = '✅ Done'; btn.classList.add('active'); }
  renderRoomItems();
}

// placeCharacter: queue character for click-placement
function placeCharacter(charId) {
  if (!save.house) return;
  closeShop();
  houseEditMode = true;
  housePendingItem = { id: charId, kind: 'char' };
  const btn = document.getElementById('house-edit-btn');
  if (btn) { btn.textContent = '✅ Done'; btn.classList.add('active'); }
  renderRoomItems();
}

// openCharPlacementPicker: clicking "Place in Room" from characters tab
function openCharPlacementPicker(charId) {
  placeCharacter(charId);
}

function applyWallpaper(itemId) {
  if (!save.house) return;
  save.house.wallpaper = itemId;
  writeSave(save);
  closeShop();
  buildHouse();
}

function applyFlooring(itemId) {
  if (!save.house) return;
  save.house.flooring = itemId;
  writeSave(save);
  closeShop();
  buildHouse();
}

// ─── Coin award hook (called from game.js) ────────────────────────────────────
// awardCoins(amount) is already defined above; game.js calls it.
