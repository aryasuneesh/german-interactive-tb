/* core.js — storage, FSRS scheduler, text utilities, speech (TTS + recognition). */
(() => {
const App = (window.App = window.App || {});

/* ───────────────── utils ───────────────── */
const U = (App.U = {
  esc: (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
  shuffle: (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  today: (d = new Date()) => { const x = new Date(d.getTime() - 4 * 3600e3); return x.toISOString().slice(0, 10); }, // day rolls over at 04:00
  endOfToday: () => { const d = new Date(); d.setHours(4, 0, 0, 0); if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1); return d.getTime(); },
  hash: (s) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); },
  // Normalise an answer for comparison. strict=false ignores case, punctuation and spacing.
  norm: (s, strict) => {
    let x = String(s || '').trim().replace(/[’`´]/g, "'").replace(/\s+/g, ' ');
    if (!strict) x = x.toLowerCase().replace(/[.,!?;:¿¡"„“”–—-]/g, ' ').replace(/\s+/g, ' ').trim();
    return x;
  },
  // umlaut fallbacks so ae/oe/ue/ss count (with a warning)
  deUmlaut: (s) => s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss'),
  lev: (a, b) => {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
    return prev[n];
  },
  /* Compare a typed answer against one or more accepted answers.
   * Returns {ok, close, umlaut, caseOnly, best} */
  check: (given, accepted) => {
    const list = (Array.isArray(accepted) ? accepted : String(accepted).split('|')).map((a) => a.trim()).filter(Boolean);
    const g = U.norm(given);
    let best = list[0] || '', bestD = 1e9;
    for (const a of list) {
      const n = U.norm(a);
      if (g === n) return { ok: true, best: a };
      if (U.deUmlaut(g) === U.deUmlaut(n) && g !== n) return { ok: true, umlaut: true, best: a };
      const d = U.lev(g, n); if (d < bestD) { bestD = d; best = a; }
    }
    const len = U.norm(best).length;
    return { ok: false, close: bestD <= Math.max(1, Math.floor(len / 8)), best };
  },
  fmtIvl: (days) => days < 1 / 24 ? Math.max(1, Math.round(days * 1440)) + 'm' : days < 1 ? Math.round(days * 24) + 'h' : days < 31 ? Math.round(days) + 'd' : days < 365 ? (days / 30).toFixed(1) + 'mo' : (days / 365).toFixed(1) + 'y',
  daysBetween: (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5),
});

/* ───────────────── storage ───────────────── */
const KEY = 'deutsch-tb.v1';
const defaults = () => ({
  version: 1,
  cards: {},                  // id -> scheduling state
  lessons: {},                // id -> { added: bool, ex: {key: score 0..1}, drills: n, visited: ts }
  log: {},                    // 'YYYY-MM-DD' -> { reviews, newCards, drillItems, exercises, seconds }
  settings: { rate: 0.9, voiceDe: '', voiceEn: '', newPerDay: 25, drillMinutes: 15, autoplay: true, handsFree: false, theme: 'auto', name: 'Arya' },
});
let memoryOnly = false;
const Store = (App.Store = {
  data: null,
  load() {
    try { const raw = localStorage.getItem(KEY); this.data = raw ? Object.assign(defaults(), JSON.parse(raw)) : defaults(); }
    catch (e) { memoryOnly = true; this.data = defaults(); }
    this.data.settings = Object.assign(defaults().settings, this.data.settings);
    return this.data;
  },
  save() { if (memoryOnly) return; try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { memoryOnly = true; } },
  get memoryOnly() { return memoryOnly; },
  lesson(id) { return (this.data.lessons[id] = this.data.lessons[id] || { added: false, ex: {}, drills: 0 }); },
  day(d = U.today()) { return (this.data.log[d] = this.data.log[d] || { reviews: 0, newCards: 0, drillItems: 0, exercises: 0, seconds: 0 }); },
  bump(field, n = 1) { this.day()[field] += n; this.save(); },
  export() { return JSON.stringify(this.data, null, 1); },
  import(json) { const d = JSON.parse(json); if (!d || !d.cards) throw new Error('Not a backup file'); this.data = Object.assign(defaults(), d); this.save(); },
  reset() { this.data = defaults(); this.save(); },
});

/* ───────────────── FSRS-4.5 scheduler ─────────────────
 * Grades: 1 Again, 2 Hard, 3 Good, 4 Easy. Target retention 0.9.
 * Same-day learning steps are handled outside FSRS (1m / 10m), as Anki does. */
const FSRS = (App.FSRS = (() => {
  const w = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
  const DECAY = -0.5, FACTOR = 19 / 81, RET = 0.9, MAX_IVL = 365, DAY = 864e5, MIN = 6e4;
  const clampD = (d) => Math.min(10, Math.max(1, d));
  const initS = (g) => Math.max(0.1, w[g - 1]);
  const initD = (g) => clampD(w[4] - w[5] * (g - 3));
  const R = (t, s) => Math.pow(1 + FACTOR * t / s, DECAY);
  const ivl = (s) => Math.min(MAX_IVL, Math.max(1, Math.round((s / FACTOR) * (Math.pow(RET, 1 / DECAY) - 1))));
  const nextD = (d, g) => clampD(w[7] * initD(4) + (1 - w[7]) * (d - w[6] * (g - 3)));
  const sOk = (d, s, r, g) => s * (1 + Math.exp(w[8]) * (11 - d) * Math.pow(s, -w[9]) * (Math.exp(w[10] * (1 - r)) - 1) * (g === 2 ? w[15] : 1) * (g === 4 ? w[16] : 1));
  const sFail = (d, s, r) => Math.min(s, w[11] * Math.pow(d, -w[12]) * (Math.pow(s + 1, w[13]) - 1) * Math.exp(w[14] * (1 - r)));

  function fresh() { return { state: 'new', due: 0, s: 0, d: 0, reps: 0, lapses: 0, last: 0, step: 0 }; }

  /* Returns the new card state. Does not mutate. */
  function schedule(c, g, now = Date.now()) {
    c = Object.assign(fresh(), c);
    const n = Object.assign({}, c, { reps: c.reps + 1, last: now });
    if (c.state === 'new') { n.s = initS(g); n.d = initD(g); }
    if (c.state === 'new' || c.state === 'learning') {
      if (g === 1) { n.state = 'learning'; n.step = 0; n.due = now + 1 * MIN; }
      else if (g === 2) { n.state = 'learning'; n.due = now + 6 * MIN; }
      else if (g === 3 && (c.state === 'new' || c.step < 1)) { n.state = 'learning'; n.step = 1; n.due = now + 10 * MIN; }
      else { n.state = 'review'; n.step = 0; if (g === 4 && c.state === 'new') n.s = initS(4); n.due = now + ivl(n.s) * DAY; }
      return n;
    }
    if (c.state === 'relearning') {
      if (g === 1) { n.due = now + 1 * MIN; }
      else if (g === 2) { n.due = now + 6 * MIN; }
      else { n.state = 'review'; n.due = now + ivl(n.s) * DAY; }
      return n;
    }
    // review
    const t = Math.max(0, (now - c.last) / DAY);
    const r = R(t, c.s);
    n.d = nextD(c.d, g);
    if (g === 1) { n.s = sFail(c.d, c.s, r); n.lapses = c.lapses + 1; n.state = 'relearning'; n.due = now + 10 * MIN; }
    else { n.s = sOk(c.d, c.s, r, g); let days = ivl(n.s); if (g === 2) days = Math.max(1, Math.min(days, Math.round(t * 1.2) || 1)); n.due = now + days * DAY; }
    return n;
  }
  function preview(c, now = Date.now()) {
    return [1, 2, 3, 4].map((g) => (schedule(c, g, now).due - now) / DAY);
  }
  const retrievability = (c, now = Date.now()) => (c.state === 'review' ? R((now - c.last) / DAY, c.s) : null);
  return { schedule, preview, fresh, retrievability };
})());

/* ───────────────── Speech ───────────────── */
const Speech = (App.Speech = {
  voices: [],
  ready: false,
  init() {
    if (!('speechSynthesis' in window)) return;
    const load = () => { this.voices = speechSynthesis.getVoices(); this.ready = this.voices.length > 0; };
    load();
    speechSynthesis.onvoiceschanged = load;
  },
  rank(v, lang) {
    let s = 0; const n = v.name.toLowerCase();
    if (v.lang.replace('_', '-').toLowerCase().startsWith(lang)) s += 100;
    if (lang === 'de' && /de-de/i.test(v.lang.replace('_', '-'))) s += 10;
    if (/natural|neural|online|premium|enhanced/.test(n)) s += 30;   // Edge natural voices, Apple premium
    if (/google/.test(n)) s += 20;
    if (/katja|conrad|amala|killian|anna|petra|markus|helena|hedda|stefan|vicki/.test(n)) s += 5;
    return s;
  },
  pick(lang) {
    const pref = Store.data.settings[lang === 'de' ? 'voiceDe' : 'voiceEn'];
    const v = this.voices.find((x) => x.name === pref);
    if (v) return v;
    return this.voices.filter((x) => x.lang.toLowerCase().startsWith(lang)).sort((a, b) => this.rank(b, lang) - this.rank(a, lang))[0] || null;
  },
  germanVoices() { return this.voices.filter((v) => v.lang.toLowerCase().startsWith('de')).sort((a, b) => this.rank(b, 'de') - this.rank(a, 'de')); },
  englishVoices() { return this.voices.filter((v) => v.lang.toLowerCase().startsWith('en')).sort((a, b) => this.rank(b, 'en') - this.rank(a, 'en')); },
  hasGerman() { return this.voices.some((v) => v.lang.toLowerCase().startsWith('de')); },
  cancel() { if ('speechSynthesis' in window) speechSynthesis.cancel(); },
  /* speak(text, lang, {rate, voiceIndex}) → Promise resolved when finished */
  speak(text, lang = 'de', opt = {}) {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window) || !text) return resolve();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === 'de' ? 'de-DE' : 'en-US';
      let voice = this.pick(lang);
      if (opt.alt && lang === 'de') { const g = this.germanVoices(); if (g.length > 1) voice = g.find((x) => x !== voice) || voice; else u.pitch = 0.8; }
      if (voice) u.voice = voice;
      u.rate = (opt.rate || Store.data.settings.rate || 0.9) * (lang === 'en' ? 1.05 : 1);
      let done = false; const fin = () => { if (!done) { done = true; clearTimeout(t); resolve(); } };
      u.onend = fin; u.onerror = fin;
      // Safety: some engines never fire onend
      const t = setTimeout(fin, 1500 + text.length * 140 / u.rate);
      speechSynthesis.speak(u);
    });
  },
  spell(word) { return this.speak(word.split('').map((c) => (c === ' ' ? ',' : c.toUpperCase() === 'ß' ? 'Eszett' : c.toUpperCase())).join(', '), 'de', { rate: 0.75 }); },
  digits(s) { return this.speak(s.replace(/\s+/g, '').split('').join(' '), 'de', { rate: 0.8 }); },

  /* Recognition */
  canListen() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
  listen({ lang = 'de-DE', timeout = 7000 } = {}) {
    return new Promise((resolve) => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) return resolve({ error: 'unsupported', text: '' });
      const r = new SR(); r.lang = lang; r.interimResults = false; r.maxAlternatives = 5;
      let best = { text: '', alts: [] }, settled = false;
      const fin = (x) => { if (!settled) { settled = true; clearTimeout(t); try { r.stop(); } catch (e) {} resolve(x); } };
      r.onresult = (e) => { const res = e.results[0]; best = { text: res[0].transcript, alts: Array.from(res).map((a) => a.transcript) }; fin(best); };
      r.onerror = (e) => fin({ error: e.error, text: '' });
      r.onend = () => fin(best);
      const t = setTimeout(() => fin(best), timeout);
      try { r.start(); } catch (e) { fin({ error: 'start', text: '' }); }
    });
  },
  /* similarity 0..1 between heard speech and target */
  similarity(heard, target) {
    const a = U.norm(heard), b = U.norm(target);
    if (!a || !b) return 0;
    return 1 - U.lev(a, b) / Math.max(a.length, b.length);
  },
});
})();
