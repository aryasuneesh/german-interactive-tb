/* cards.js — turns lesson content into spaced-repetition cards, builds review queues. */
(() => {
const { U, Store, FSRS } = App;

const clean = (s) => s.replace(/\s*\((pl\.|plural only|plural)\)\s*/g, '').trim();
const alts = (de) => {
  const base = clean(de);
  const parts = base.split(/\s+\/\s+/).map((x) => x.trim()).filter(Boolean);
  return [...new Set([base, ...parts])];
};

/* Card shapes:
 *  p: production  — English → German word/phrase (nouns need the article)
 *  g: grammar     — fill the gap in a sentence (from gap exercises)
 *  s: sentence    — say/type a whole sentence (from the audio drill) */
App.Cards = {
  forLesson(l) {
    const out = [];
    for (const grp of l.vocab || []) for (const v of grp.items) {
      const de = v.t === 'n' ? DE.nounDe(v) : v.w;
      let hint = v.t === 'n' ? (v.g === 'pl' ? 'noun · plural' : 'noun · with article') : v.t === 'v' ? 'verb (infinitive)' : v.t === 'p' ? 'phrase' : '';
      out.push({ id: `${l.id}:p:${U.hash(de)}`, lesson: l.id, kind: 'p', front: v.en, hint, answer: alts(de), de: clean(de), g: v.g, plural: v.t === 'n' ? DE.pluralDe(v) : '', ex: v.ex || '', group: grp.group });
    }
    (l.exercises || []).concat(l.exam || []).forEach((ex) => {
      if (ex.type !== 'gap') return;
      ex.items.forEach((it) => {
        const ms = [...it.matchAll(/\{([^}]+)\}/g)]; if (!ms.length) return;
        const front = it.replace(/\{[^}]+\}/g, '_____');
        const full = it.replace(/\{([^}|]+)[^}]*\}/g, '$1').replace(/\s*\([^)]*\)\s*$/, '');
        const answer = ms.length === 1 ? ms[0][1].split('|') : [ms.map((m) => m[1].split('|')[0]).join(' ')];
        const hint = (ex.title || '').replace(/^AB · /, 'Arbeitsbuch · ') + (ms.length > 1 ? ' — type all ' + ms.length + ' gaps, separated by spaces' : '');
        out.push({ id: `${l.id}:g:${U.hash(it)}`, lesson: l.id, kind: 'g', front, hint, answer, de: full });
      });
    });
    (l.drill || []).forEach((d) => out.push({ id: `${l.id}:s:${U.hash(d.de)}`, lesson: l.id, kind: 's', front: d.en, hint: 'say the whole sentence', answer: [d.de], de: d.de }));
    return out;
  },
  all() {
    if (this._all) return this._all;
    const map = {};
    for (const id of DE.order) for (const c of this.forLesson(DE.lessons[id])) map[c.id] = c;
    return (this._all = map);
  },
  stateOf(id) { return Store.data.cards[id] || null; },
  addLesson(id) {
    const L = Store.lesson(id); L.added = true; Store.save();
  },
  isAdded(id) { return !!(Store.data.lessons[id] && Store.data.lessons[id].added); },
  /* counts for a lesson */
  lessonStats(id) {
    const all = Object.values(this.all()).filter((c) => c.lesson === id);
    let seen = 0, mature = 0;
    for (const c of all) { const s = Store.data.cards[c.id]; if (s) { seen++; if (s.state === 'review' && s.s >= 21) mature++; } }
    return { total: all.length, seen, mature };
  },
  /* Build today's queue: due learning → due reviews → new cards (respecting daily limit) */
  queue({ lessons = null, extraNew = 0, cram = false } = {}) {
    const now = Date.now(), eod = U.endOfToday();
    const all = this.all();
    const pool = Object.values(all).filter((c) => (lessons ? lessons.includes(c.lesson) : this.isAdded(c.lesson)));
    const learning = [], review = [], fresh = [];
    for (const c of pool) {
      const s = Store.data.cards[c.id];
      if (!s) fresh.push(c);
      else if (cram) review.push(c);
      else if ((s.state === 'learning' || s.state === 'relearning') && s.due <= eod) learning.push(c);
      else if (s.state === 'review' && s.due <= eod) review.push(c);
    }
    review.sort((a, b) => Store.data.cards[a.id].due - Store.data.cards[b.id].due);
    learning.sort((a, b) => Store.data.cards[a.id].due - Store.data.cards[b.id].due);
    const order = DE.order;
    fresh.sort((a, b) => order.indexOf(a.lesson) - order.indexOf(b.lesson)); // lesson order; within lesson: vocab → grammar → sentences
    const left = Math.max(0, Store.data.settings.newPerDay - Store.day().newCards) + extraNew;
    return { learning, review, fresh: cram ? [] : fresh.slice(0, left), freshTotal: fresh.length, now };
  },
  dueCount() { const q = this.queue(); return q.learning.length + q.review.length + q.fresh.length; },
  grade(card, g) {
    const prev = Store.data.cards[card.id];
    const isNew = !prev;
    const next = FSRS.schedule(prev || FSRS.fresh(), g);
    Store.data.cards[card.id] = next;
    const d = Store.day(); d.reviews++; if (isNew) d.newCards++;
    Store.save();
    return next;
  },
  /* weakest items for targeted practice: lapses + low retrievability */
  weakest(n = 20) {
    const all = this.all(), now = Date.now();
    return Object.entries(Store.data.cards)
      .filter(([id]) => all[id])
      .map(([id, s]) => ({ c: all[id], score: (s.lapses || 0) * 2 + (s.state === 'review' ? 1 - (FSRS.retrievability(s, now) || 1) : 1) + (s.d || 5) / 10 }))
      .sort((a, b) => b.score - a.score).slice(0, n).map((x) => x.c);
  },
};
})();
