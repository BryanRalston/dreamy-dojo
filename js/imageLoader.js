// imageLoader.js — Loads character images, preloads for instant display
// Prefers transparent .png (background-removed), falls back to .jpg

const CharacterImages = (() => {
  const cache = {};
  const IDS = ['boba','mochi','coco','nori','zara','puffy','luna','sunny','pearl','fizz'];

  function load(id) {
    if (cache[id] !== undefined) return Promise.resolve(cache[id]);
    return new Promise((resolve) => {
      const png = new Image();
      png.onload = () => { cache[id] = 'images/' + id + '.png'; resolve(cache[id]); };
      png.onerror = () => {
        // PNG not found — fall back to jpg
        const jpg = new Image();
        jpg.onload  = () => { cache[id] = 'images/' + id + '.jpg'; resolve(cache[id]); };
        jpg.onerror = () => { cache[id] = null; resolve(null); };
        jpg.src = 'images/' + id + '.jpg';
      };
      png.src = 'images/' + id + '.png';
    });
  }

  function get(id) {
    return cache.hasOwnProperty(id) ? cache[id] : undefined;
  }

  function preloadAll() {
    return Promise.all(IDS.map(id => load(id)));
  }

  return { load, get, preloadAll, IDS };
})();
