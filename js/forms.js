/* forms.js — UI for word forms (declension / conjugation / comparison) + auto-generated drills. */
(() => {
const { U } = App;
const G = window.Grammar;
const PRON = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const NAMES = ['Ich', 'Du', 'Anna', 'Wir', 'Ihr', 'Anna und Tom'];
const NAMES_INV = ['ich', 'du', 'Anna', 'wir', 'ihr', 'Anna und Tom'];
const say = (t) => `<button class="icon-btn" data-say="${U.esc(t.replace(/<[^>]+>/g, ''))}">▶</button>`;
const gcls = (g) => 'g-' + g;

function nounPanel(v, groupName) {
  const t = G.table(v), ex = G.examples(v, groupName);
  const kind = t.kind === 'weak' ? '<span class="pill" title="masculine n-Deklination: -(e)n in every case except Nominativ Singular">weak noun (n-Deklination)</span>'
    : t.kind === 'mixed' ? '<span class="pill" title="-n in Akk/Dat, -ns in Genitiv">mixed noun</span>' : '';
  const head = `<tr><th></th>${t.def.sg ? '<th>Singular · bestimmt</th><th>unbestimmt</th><th>negativ</th>' : ''}${t.def.pl ? '<th>Plural · bestimmt</th><th>negativ</th>' : ''}</tr>`;
  const rows = G.CASES.map((c, i) => `<tr><td><b>${c}</b></td>${t.def.sg ? `<td class="${gcls(v.g)}">${say(t.def.sg[i])}${U.esc(t.def.sg[i])}</td><td>${U.esc(t.indef.sg[i])}</td><td>${U.esc(t.neg.sg[i])}</td>` : ''}${t.def.pl ? `<td class="g-pl">${say(t.def.pl[i])}${U.esc(t.def.pl[i])}</td><td>${U.esc(t.neg.pl[i])}</td>` : ''}</tr>`).join('');
  const exRows = G.CASES.map((c, i) => `<tr><td><b>${c}</b><div class="small muted">${['wer? was? (subject)', 'wen? was? (object)', 'wem? (indirect obj.)', 'wessen? (possession)'][i]}</div></td><td>${ex.sg ? ex.sg[i].split(' · ').map((s) => say(s) + s).join('<br>') : ''}</td><td>${ex.pl ? ex.pl[i].split(' · ').map((s) => say(s) + s).join('<br>') : ''}</td></tr>`).join('');
  const notes = [];
  if (t.kind === 'weak') notes.push(`Weak masculine noun: <b>${U.esc(t.def.sg[1])}</b>, <b>${U.esc(t.def.sg[2])}</b>, <b>${U.esc(t.def.sg[3])}</b>. Everything except Nominativ singular gets -(e)n.`);
  if (t.def.pl && t.forms.pl[2] !== t.forms.pl[0]) notes.push(`Dativ plural adds <b>-n</b>: mit den <b>${U.esc(t.forms.pl[2])}</b>.`);
  if (v.g === 'm' || v.g === 'n') if (t.kind === 'strong' && t.def.sg) notes.push(`Genitiv singular (m/n) adds -(e)s: <b>${U.esc(t.def.sg[3])}</b>. Spoken alternative: von ${U.esc(t.def.sg[2])}.`);
  if (v.g === 'm') notes.push('Only masculine changes in the Akkusativ: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>.');
  if (v.g === 'f') notes.push('Feminine nouns never change their ending in the singular. Only the article changes: die – die – der – der.');
  return `<div class="forms">${kind}<div class="gram"><table class="gtable">${head}${rows}</table></div>
    <h4>Beispiele</h4><div class="gram"><table class="gtable"><tr><th>Kasus</th><th>Singular</th><th>Plural</th></tr>${exRows}</table></div>
    ${notes.length ? `<ul class="small">${notes.map((n) => `<li>${n}</li>`).join('')}</ul>` : ''}
    <p class="small muted">Dativ-Präpositionen: aus, bei, mit, nach, seit, von, zu (zum = zu dem, zur = zu der, beim, vom). Akkusativ-Präpositionen: durch, für, gegen, ohne, um. Genitiv (A2/B1): wegen, trotz, während.</p></div>`;
}

function verbPanel(v) {
  const c = G.conjugate(v.w);
  const obj = c.obj ? c.obj + ' ' : '';
  const perf = G.AUX[c.aux === 'sein' ? 'sein' : 'haben'];
  const rows = PRON.map((p, i) => `<tr><td>${p}</td><td>${say(p.split('/')[0] + ' ' + c.pres[i])}<b>${U.esc(c.pres[i])}</b></td><td>${U.esc(c.prat[i])}</td><td>${U.esc(perf[i])} … <b>${U.esc(c.part)}</b></td></tr>`).join('');
  const ex1 = `${c.sep ? `Ich ${c.pres[0].split(' ')[0]} heute ${obj}${c.sep}.` : `Ich ${c.pres[0]} ${obj}heute.`}`.replace(/\s+/g, ' ');
  const ex2 = `Gestern ${perf[2]} Anna ${obj}${c.part}.`.replace(/\s+/g, ' ');
  return `<div class="forms">${c.aux === 'sein' ? '<span class="pill">Perfekt mit sein</span> ' : ''}${c.sep ? `<span class="pill">trennbar: ${U.esc(c.sep)}-</span> ` : ''}${c.strong ? '<span class="pill">unregelmäßig</span> ' : ''}${c.modal ? '<span class="pill">Modalverb</span>' : ''}
    <div class="gram"><table class="gtable"><tr><th></th><th>Präsens</th><th>Präteritum</th><th>Perfekt</th></tr>${rows}</table></div>
    ${c.imp ? `<p><b>Imperativ:</b> ${c.imp.map((x) => say(x + '!') + U.esc(x) + '!').join(' · ')}</p>` : ''}
    <p><b>Beispiele:</b><br>${say(ex1)}${U.esc(ex1)}<br>${say(ex2)}${U.esc(ex2)}${v.ex ? `<br>${say(v.ex)}${U.esc(v.ex)}` : ''}</p>
    ${c.note ? `<p class="small muted">${U.esc(c.note)}</p>` : ''}
    <p class="small muted">Präteritum: in speech, used for sein, haben and modal verbs (war, hatte, konnte); for other verbs mainly in writing. A2 topic.</p></div>`;
}

function adjPanel(v) {
  const a = v.w.split(' ')[0];
  const [cmp, sup] = G.compare(a);
  return `<div class="forms"><p><b>${U.esc(a)}</b> → <b>${U.esc(cmp)}</b> (Komparativ) → <b>${U.esc(sup)}</b> (Superlativ)</p>
    <p>${say(`Der Tisch ist ${a}.`)}Der Tisch ist <b>${U.esc(a)}</b>. (after sein: no ending)<br>
    ${say(`Das Sofa ist ${cmp} als der Sessel.`)}Das Sofa ist <b>${U.esc(cmp)}</b> als der Sessel.<br>
    ${say(`Die Lampe ist ${sup}.`)}Die Lampe ist <b>${U.esc(sup)}</b>.</p>
    <div class="gram"><table class="gtable"><tr><th>before a noun</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
    <tr><td>der (m)</td><td>der ${a}<b>e</b> Tisch</td><td>den ${a}<b>en</b> Tisch</td><td>dem ${a}<b>en</b> Tisch</td></tr>
    <tr><td>ein (m)</td><td>ein ${a}<b>er</b> Tisch</td><td>einen ${a}<b>en</b> Tisch</td><td>einem ${a}<b>en</b> Tisch</td></tr>
    <tr><td>das / ein (n)</td><td>das ${a}<b>e</b> / ein ${a}<b>es</b> Bett</td><td>das ${a}<b>e</b> / ein ${a}<b>es</b> Bett</td><td>dem ${a}<b>en</b> Bett</td></tr>
    <tr><td>die / eine (f)</td><td>die / eine ${a}<b>e</b> Lampe</td><td>die / eine ${a}<b>e</b> Lampe</td><td>der / einer ${a}<b>en</b> Lampe</td></tr></table></div>
    <p class="small muted">Adjective endings before nouns are an A2 topic (L29–30). Spot the pattern now, drill it later.</p></div>`;
}

App.Forms = {
  hasForms: (v) => (G.declinable(v) ? 'n' : G.isVerb(v) ? 'v' : v.adj ? 'a' : null),
  panel(v, groupName) {
    const k = this.hasForms(v);
    return k === 'n' ? nounPanel(v, groupName) : k === 'v' ? verbPanel(v) : k === 'a' ? adjPanel(v) : '';
  },

  /* ─── generated drills ─── */
  nouns(l) { const out = []; for (const g of l.vocab) for (const v of g.items) if (G.declinable(v)) out.push({ v, group: g.group }); return out; },
  verbs(l) { const out = []; for (const g of l.vocab) for (const v of g.items) if (G.isVerb(v) && !/[A-Z]/.test(v.w)) out.push(v); return out; },
  kasusDrill(l, n = 10) {
    const items = [];
    for (const { v, group } of U.shuffle(this.nouns(l))) {
      if (items.length >= n) break;
      const cat = G.category(v, group), t = G.table(v);
      const frames = U.shuffle(G.frames[cat].filter(([, num]) => (num === 'sg' ? t.def.sg : t.def.pl)));
      if (!frames.length) continue;
      const [ci, num, tpl] = frames[0];
      let type = G.FRAME_ARTICLE[tpl] || 'def';
      if (type === 'indef' && (num === 'pl' || v.pl === '')) type = 'def';
      const phrase = t[type][num][ci];
      const ans = tpl.startsWith('{X}') ? phrase.charAt(0).toUpperCase() + phrase.slice(1) : phrase;
      const base = num === 'pl' ? 'die ' + (v.g === 'pl' ? v.w : v.pl) : DE.ART[v.g] + ' ' + v.w;
      items.push(tpl.replace('{X}', `{${ans}}`) + ` (${G.CASES[ci]}${num === 'pl' ? ' Plural' : ''} · ${type === 'indef' ? 'ein-' : 'der/das/die'} · ${base})`);
    }
    return { type: 'gap', title: 'Kasus-Training: article + noun in the right case (new set on every Reset)', items };
  },
  konjDrill(l, n = 8) {
    const verbs = this.verbs(l); if (!verbs.length) return null;
    const perfekt = l.n >= 11;
    const items = [];
    for (let k = 0; k < n * 3 && items.length < n; k++) {
      const v = verbs[Math.floor(Math.random() * verbs.length)];
      const c = G.conjugate(v.w); const i = Math.floor(Math.random() * 6);
      const obj = c.obj ? ' ' + c.obj : '';
      const usePerf = perfekt && Math.random() < 0.5;
      let s;
      if (usePerf) s = `Gestern {${G.AUX[c.aux === 'sein' ? 'sein' : 'haben'][i]}} ${NAMES_INV[i]}${obj} {${c.part}}. (${c.inf} → Perfekt)`;
      else if (c.sep) { const [f, pre] = c.pres[i].split(' '); s = `Heute {${f}} ${NAMES_INV[i]}${obj} {${pre}}. (${c.inf} → Präsens)`; }
      else s = `${NAMES[i]} {${c.pres[i]}}${obj}. (${c.inf} → Präsens)`;
      if (!items.includes(s)) items.push(s);
    }
    return { type: 'gap', title: `Konjugations-Training: ${perfekt ? 'Präsens + Perfekt' : 'Präsens'} (new set on every Reset)`, items };
  },
};
})();
