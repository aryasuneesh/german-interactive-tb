/* app.js — router and views. */
(() => {
const { U, Store, Speech, Cards, FSRS } = App;
const $main = () => document.getElementById('main');
const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const builtIds = () => DE.order.slice();
const label = (l) => (l.test ? 'Probetest' : l.plus ? 'Modul ' + l.module + ' Plus' : 'Lektion ' + l.n);
const pagesOf = (l) => (l.test ? 'L1–12' : 'p. ' + l.pages);
const L = (id) => DE.lessons[id];
const MILESTONES = [
  { date: '2026-11-30', label: 'Uni test (A1.1)' },
  { date: '2027-02-15', label: 'Enrolment for next course — target A2.2' },
];

function lessonProgress(id) {
  const l = L(id), st = Store.data.lessons[id] || { ex: {} };
  const exs = (l.exercises || []).concat(l.exam || []);
  const keys = exs.map((_, i) => (i < (l.exercises || []).length ? 'e' + i : 'x' + (i - (l.exercises || []).length)));
  const done = keys.filter((k) => st.ex && st.ex[k] != null);
  const avg = done.length ? done.reduce((a, k) => a + st.ex[k], 0) / done.length : 0;
  const cs = Cards.lessonStats(id);
  return { exTotal: keys.length, exDone: done.length, exAvg: avg, cards: cs, added: !!st.added, drills: st.drills || 0 };
}
function streak() {
  let n = 0; const d = new Date(Date.now() - 4 * 3600e3);
  for (;;) {
    const k = d.toISOString().slice(0, 10), x = Store.data.log[k];
    if (x && (x.reviews || x.drillItems || x.exercises)) { n++; d.setDate(d.getDate() - 1); }
    else if (n === 0 && k === U.today()) { d.setDate(d.getDate() - 1); }
    else break;
  }
  return n;
}
function currentWeek() {
  const t = U.today();
  return DE.plan.weeks.findIndex((w) => t >= w.from && t <= w.to);
}
function greet() { const hr = new Date().getHours(); return hr < 11 ? 'Guten Morgen' : hr < 18 ? 'Guten Tag' : 'Guten Abend'; }
function setNav(name) {
  document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('active', a.dataset.nav === name));
  const due = Cards.dueCount(); const b = document.getElementById('due-badge'); if (b) { b.textContent = due; b.hidden = !due; }
}

/* ───────────────── Dashboard ───────────────── */
function viewHome() {
  setNav('home');
  const q = Cards.queue();
  const due = q.learning.length + q.review.length;
  const wk = currentWeek(); const week = DE.plan.weeks[wk];
  const today = Store.day();
  const anyAdded = builtIds().some((id) => Cards.isAdded(id));
  const nextLesson = builtIds().find((id) => { const p = lessonProgress(id); return p.exDone < p.exTotal; }) || builtIds()[0];
  const ms = MILESTONES.map((m) => ({ ...m, days: U.daysBetween(U.today(), m.date) })).filter((m) => m.days >= 0);
  const last14 = [...Array(14)].map((_, i) => { const d = new Date(Date.now() - 4 * 3600e3 - (13 - i) * 864e5).toISOString().slice(0, 10); const x = Store.data.log[d] || {}; return { d, n: (x.reviews || 0) + (x.drillItems || 0) + (x.exercises || 0) * 3 }; });
  const max = Math.max(10, ...last14.map((x) => x.n));
  $main().innerHTML = `
    <h1>${greet()}, ${U.esc(Store.data.settings.name || '')}!</h1>
    <p class="sub">${ms.map((m) => `<b>${m.days}</b> days to ${U.esc(m.label)}`).join(' · ')}</p>
    ${!anyAdded ? `<div class="notice"><b>Start here.</b> You've already done L1–6 in class. Add them to your spaced-repetition deck now, then do each lesson's exercises to find your gaps. Add L7–12 one by one as you study them (button on each lesson's Überblick tab).
      <div class="row" style="margin-top:8px"><button class="btn primary" data-addall>Add L1–6 + Modul Plus to my reviews</button><a class="btn" href="#/lesson/L1">Start with L1 instead</a></div></div>` : ''}
    ${!Speech.hasGerman() ? `<div class="notice">⚠ No German text-to-speech voice detected (yet). Audio is essential here. See <a href="#/settings">Settings</a> for how to install one (Windows: Settings → Time & Language → Speech → Add voices → Deutsch). Best results in Microsoft Edge.</div>` : ''}
    <div class="grid">
      <div class="card"><h3>1 · Reviews</h3><div class="big">${due}</div><div class="muted small">due now · +${q.fresh.length} new today (${q.freshTotal} unseen in deck)</div>
        <div class="row" style="margin-top:10px"><a class="btn primary" href="#/review">${due + q.fresh.length ? 'Start reviews' : 'Nothing due'}</a></div></div>
      <div class="card"><h3>2 · Audio drill</h3><div class="big">${today.drillItems}</div><div class="muted small">recalls today. Aim for 60+ (~15 min)</div>
        <div class="row" style="margin-top:10px"><a class="btn primary" href="#/drill/${nextLesson}">Drill ${U.esc(L(nextLesson).id)}</a><a class="btn" href="#/drill">Choose…</a></div></div>
      <div class="card"><h3>3 · Textbook</h3><div class="big">${U.esc(nextLesson)}</div><div class="muted small">${U.esc(L(nextLesson).title)}</div>
        <div class="row" style="margin-top:10px"><a class="btn primary" href="#/lesson/${nextLesson}">Continue</a></div></div>
      <div class="card"><h3>4 · Exam skill</h3><div class="big">${streak()}🔥</div><div class="muted small">day streak · ${today.exercises} exercises today</div>
        <div class="row" style="margin-top:10px"><a class="btn primary" href="#/exam">Prüfungstraining</a></div></div>
    </div>
    ${week ? `<h2>This week (${week.from.slice(5)} → ${week.to.slice(5)})</h2><div class="card"><b>${U.esc(week.goal)}</b>
      <div class="row" style="margin-top:8px">${week.lessons.map((n) => { const id = 'L' + n; return DE.lessons[id] ? `<a class="pill on" href="#/lesson/${id}">L${n}</a>` : `<span class="pill">L${n}</span>`; }).join(' ')}</div>
      <p class="small muted" style="margin-bottom:0">Daily (30–60 min): ${DE.plan.daily.map((d) => `${d.min}′ ${U.esc(d.what)}`).join(' → ')}</p></div>` : ''}
    <h2>Your lessons</h2>
    <div class="grid">${builtIds().map(tile).join('')}</div>
    <h2>Last 14 days</h2>
    <div class="card"><div style="display:flex;gap:4px;align-items:flex-end;height:80px">${last14.map((x) => `<div title="${x.d}: ${x.n}" style="flex:1;background:${x.n ? 'var(--ok)' : 'var(--line)'};height:${Math.max(4, (x.n / max) * 80)}px;border-radius:3px"></div>`).join('')}</div>
    <div class="row small muted"><span>${last14[0].d}</span><span class="spacer"></span><span>today</span></div></div>
    <p class="small muted">${Store.memoryOnly ? '⚠ Browser storage is blocked, so progress will NOT be saved. Use a normal (non-private) window.' : 'Progress is saved in this browser. Back it up regularly in Settings → Export.'}</p>`;
  const b = $main().querySelector('[data-addall]');
  if (b) b.onclick = () => { builtIds().filter((id) => L(id).n <= 6.5).forEach((id) => Cards.addLesson(id)); Store.data.settings.newPerDay = Math.max(Store.data.settings.newPerDay, 40); Store.save(); viewHome(); };
}
function tile(id) {
  const l = L(id), p = lessonProgress(id);
  const pct = p.exTotal ? Math.round((p.exDone / p.exTotal) * 100) : 0;
  return `<a class="card lesson-tile" href="#/lesson/${id}"><div class="row"><span class="num">${label(l)}</span><span class="spacer"></span><span class="pill">${pagesOf(l)}</span></div>
    <h3 style="margin:6px 0">${U.esc(l.title)}</h3><div class="small muted">${U.esc(l.topic)}</div>
    <div class="small" style="margin-top:8px">Exercises ${p.exDone}/${p.exTotal}${p.exDone ? ` · ⌀ ${Math.round(p.exAvg * 100)}%` : ''}</div><div class="bar"><i style="width:${pct}%"></i></div>
    <div class="small" style="margin-top:6px">Cards ${p.cards.seen}/${p.cards.total}${p.added ? '' : ' · <span class="muted">not in deck</span>'} · drills ${p.drills}</div></a>`;
}

/* ───────────────── Lesson ───────────────── */
const TABS = [['overview', 'Überblick'], ['vocab', 'Wortschatz'], ['grammar', 'Grammatik'], ['phrases', 'Redemittel'], ['exercises', 'Übungen'], ['drill', 'Audio-Drill'], ['exam', 'Prüfung']];
function viewLesson(id, tab = 'overview') {
  setNav('lessons');
  const l = L(id); if (!l) return viewPlan();
  Store.lesson(id).visited = Date.now(); Store.save();
  const idx = builtIds().indexOf(id), prev = builtIds()[idx - 1], next = builtIds()[idx + 1];
  const tabs = TABS.filter(([k]) => k !== 'vocab' || (l.vocab && l.vocab.length)).filter(([k]) => k !== 'phrases' || (l.phrases && l.phrases.length)).filter(([k]) => k !== 'drill' || (l.drill && l.drill.length)).filter(([k]) => k !== 'exam' || (l.exam && l.exam.length));
  $main().innerHTML = `
    <div class="row small muted"><a href="#/">Home</a> › <a href="#/plan">Syllabus</a> › ${U.esc(label(l))} <span class="spacer"></span>
      ${prev ? `<a href="#/lesson/${prev}">← ${prev}</a>` : ''} ${next ? `<a href="#/lesson/${next}">${next} →</a>` : ''}</div>
    <h1>${U.esc(l.title)}</h1><p class="sub">${U.esc(l.topic)} · ${l.test ? 'covers' : 'Menschen A1.1 Kursbuch'} ${pagesOf(l)}${l.test ? '' : ' + Arbeitsbuch'} · ${l.level}</p>
    <nav class="tabs">${tabs.map(([k, t]) => `<a href="#/lesson/${id}/${k}" class="${k === tab ? 'active' : ''}">${t}</a>`).join('')}</nav>
    <div id="tab"></div>`;
  const T = document.getElementById('tab');
  ({ overview: tabOverview, vocab: tabVocab, grammar: tabGrammar, phrases: tabPhrases, exercises: tabExercises, drill: tabDrill, exam: tabExam }[tab] || tabOverview)(l, T);
}
function tabOverview(l, T) {
  const p = lessonProgress(l.id);
  T.innerHTML = `<div class="grid">
    <div class="card"><h3>Lernziele: you can …</h3><ul>${l.goals.map((g) => `<li>${U.esc(g)}</li>`).join('')}</ul></div>
    <div class="card"><h3>Work through it in this order</h3><ol>
      <li><a href="#/lesson/${l.id}/vocab">Wortschatz</a>: listen to every word, say it out loud</li>
      <li><a href="#/lesson/${l.id}/grammar">Grammatik</a>: read, then say the example sentences</li>
      <li><a href="#/lesson/${l.id}/exercises">Übungen</a>: aim for ≥ 80 %</li>
      <li><a href="#/lesson/${l.id}/drill">Audio-Drill</a>: 15 min, out loud, 2 days in a row</li>
      ${l.exam && l.exam.length ? `<li><a href="#/lesson/${l.id}/exam">Prüfung</a>: Goethe-format tasks</li>` : ''}</ol>
      <p class="small muted">Then reviews take over: the deck brings every word and sentence back right before you'd forget it.</p></div>
    <div class="card"><h3>Status</h3>
      <p>Exercises: ${p.exDone}/${p.exTotal}${p.exDone ? ` (⌀ ${Math.round(p.exAvg * 100)}%)` : ''}<br>Cards: ${p.cards.seen}/${p.cards.total} seen · ${p.cards.mature} solid (21d+)<br>Drill sessions: ${p.drills}</p>
      ${p.added ? '<span class="pill on">in your review deck</span>' : `<button class="btn primary" data-add>Add ${p.cards.total} cards to my reviews</button>`}</div></div>`;
  const b = T.querySelector('[data-add]'); if (b) b.onclick = () => { Cards.addLesson(l.id); tabOverview(l, T); setNav('lessons'); };
}
function tabVocab(l, T) {
  const coreN = l.vocab.filter((g) => !g.extra).reduce((a, g) => a + g.items.length, 0), extraN = l.vocab.filter((g) => g.extra).reduce((a, g) => a + g.items.length, 0);
  T.innerHTML = `<div class="row"><button class="btn" data-playall>▶ Play all (listen & repeat)</button><button class="btn ghost" data-allforms>▾ Show all forms</button><span class="small muted"><span class="g-m">der</span> · <span class="g-n">das</span> · <span class="g-f">die</span> · <span class="g-pl">plural</span>. Click <b>Formen</b> for all cases / conjugations.</span><span class="spacer"></span>
    ${Cards.isAdded(l.id) ? '<span class="pill on">in review deck</span>' : '<button class="btn primary sm" data-add>Add to reviews</button>'}</div>
    <p class="small muted">${coreN} words from the book${extraN ? ` + ${extraN} in the Themenwortschatz` : ''}.</p>
    ${l.vocab.map((g, gi) => `<details class="vgroup" open><summary><h2 style="display:inline">${U.esc(g.group)}</h2>${g.extra ? ' <span class="pill">extra</span>' : ''} <span class="small muted">(${g.items.length})</span></summary><div class="card" style="padding:4px 8px"><table class="vocab">${g.items.map((v, vi) => {
      const de = v.t === 'n' ? DE.nounDe(v) : v.w;
      const cls = v.t === 'n' ? 'g-' + v.g : '';
      const fk = App.Forms.hasForms(v);
      return `<tr><td><button class="icon-btn" data-say="${U.esc(de)}">▶</button></td><td><span class="de ${cls}">${U.esc(de)}</span>${v.t === 'n' && v.pl !== undefined ? `<div class="pl">${U.esc(DE.pluralDe(v))}</div>` : ''}</td>
        <td>${U.esc(v.en)}${v.ex ? `<div class="ex"><button class="icon-btn" data-say="${U.esc(v.ex)}">▶</button>${U.esc(v.ex)}</div>` : ''}</td>
        <td style="width:80px;text-align:right">${fk ? `<button class="btn sm ghost" data-forms="${gi}:${vi}">Formen ▾</button>` : ''}</td></tr><tr class="forms-row" data-fr="${gi}:${vi}" hidden><td></td><td colspan="3"></td></tr>`;
    }).join('')}</table></div></details>`).join('')}`;
  const toggle = (key, force) => {
    const row = T.querySelector(`[data-fr="${key}"]`); if (!row) return;
    const [gi, vi] = key.split(':').map(Number); const g = l.vocab[gi];
    const open = force != null ? force : row.hidden;
    if (open && !row.dataset.filled) { row.lastElementChild.innerHTML = App.Forms.panel(g.items[vi], g.group); row.dataset.filled = 1; }
    row.hidden = !open;
    const b = T.querySelector(`[data-forms="${key}"]`); if (b) b.textContent = open ? 'Formen ▴' : 'Formen ▾';
  };
  T.addEventListener('click', (e) => {
    const s = e.target.closest('[data-say]'); if (s) return Speech.speak(s.dataset.say);
    const f = e.target.closest('[data-forms]'); if (f) toggle(f.dataset.forms);
  });
  let allOpen = false;
  T.querySelector('[data-allforms]').onclick = (e) => { allOpen = !allOpen; T.querySelectorAll('[data-forms]').forEach((b) => toggle(b.dataset.forms, allOpen)); e.target.textContent = allOpen ? '▴ Hide all forms' : '▾ Show all forms'; };
  let playing = false;
  T.querySelector('[data-playall]').onclick = async (e) => {
    if (playing) { playing = false; Speech.cancel(); e.target.textContent = '▶ Play all (listen & repeat)'; return; }
    playing = true; e.target.textContent = '■ Stop';
    for (const g of l.vocab) for (const v of g.items) {
      if (!playing) return;
      const de = v.t === 'n' ? DE.nounDe(v) : v.w;
      await Speech.speak(v.en, 'en'); await Speech.speak(de, 'de'); await new Promise((r) => setTimeout(r, 1300 + de.length * 40));
    }
    playing = false; e.target.textContent = '▶ Play all (listen & repeat)';
  };
  const a = T.querySelector('[data-add]'); if (a) a.onclick = () => { Cards.addLesson(l.id); tabVocab(l, T); setNav('lessons'); };
}
function tabGrammar(l, T) {
  T.innerHTML = l.grammar.map((g) => `<div class="card gram" style="margin-bottom:14px"><h3>${U.esc(g.title)}</h3>${g.html}</div>`).join('') +
    '<p class="small muted">Tip: click any table cell or list item to hear it.</p>';
  const al = T.querySelector('[data-alphabet]');
  if (al) {
    const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä Ö Ü ß'.split(' ');
    al.innerHTML = letters.map((c) => `<button type="button">${c}</button>`).join('');
    al.onclick = (e) => { const b = e.target.closest('button'); if (b) Speech.speak(b.textContent === 'ß' ? 'Eszett' : b.textContent, 'de', { rate: 0.8 }); };
  }
  T.addEventListener('click', (e) => {
    const c = e.target.closest('.gtable td, .gram li, .gram i'); if (!c || e.target.closest('[data-alphabet]')) return;
    const txt = c.textContent.replace(/\(.*?\)/g, '').replace(/[*⚠→]/g, '').trim(); if (txt && /[a-zäöüß]/i.test(txt)) Speech.speak(txt);
  });
}
function tabPhrases(l, T) {
  T.innerHTML = l.phrases.map(([title, list]) => `<div class="card" style="margin-bottom:12px"><h3>${U.esc(title)}</h3>${list.map((p) => `<div class="ex-item row"><button class="icon-btn" data-say="${U.esc(p.replace(/…/g, ''))}">▶</button><span>${U.esc(p)}</span></div>`).join('')}</div>`).join('');
  T.addEventListener('click', (e) => { const b = e.target.closest('[data-say]'); if (b) Speech.speak(b.dataset.say.split(' / ')[0]); });
}
function tabExercises(l, T) {
  T.innerHTML = '';
  (l.exercises || []).forEach((ex, i) => T.appendChild(App.Exercises.render(ex, { key: 'e' + i, lessonId: l.id })));
  // Mix & Match: generated from this lesson (weighted) + all earlier lessons, only grammar taught so far
  const upto = builtIds().slice(0, builtIds().indexOf(l.id) + 1).filter((id) => !L(id).test);
  const n = Math.floor(l.n + 0.01);
  T.appendChild(h(`<div><h2>Mix &amp; Match <span class="small muted">(this lesson's words + review of ${U.esc(upto[0])}–${U.esc(l.id)} · new items on every Reset)</span></h2>
    <p class="small muted">Generated from ${upto.length} lesson(s): genders, plurals, cases, kein/nicht, possessives, conjugation${n >= 11 ? ', Perfekt' : ''} and the sentence builder. Endless practice on the <a href="#/mix">Mix page</a>.</p></div>`));
  for (const kind of App.Mix.unlocked(n)) {
    const regen = () => App.Mix.make(kind, upto, l.id);
    const ex = regen(); if (ex) T.appendChild(App.Exercises.render(ex, { key: 'mix-' + kind, lessonId: l.id, regen, mix: kind }));
  }
}

/* ───────────────── Mix page ───────────────── */
function viewMix() {
  setNav('mix');
  const ids = builtIds().filter((id) => !L(id).test);
  const saved = Store.data.mixSel || {};
  const st = Store.data.mixStats || {};
  const defUpto = saved.upto || ids.filter((id) => Store.data.lessons[id] && (Store.data.lessons[id].added || Store.data.lessons[id].visited)).pop() || 'L6';
  $main().innerHTML = `<h1>Grammatik-Mix</h1><p class="sub">Endless, adaptive mix-and-match drills from the words and grammar of every lesson up to the one you choose. Weak drill types come up more often.</p>
    <div class="card"><div class="row"><label>Up to <select data-upto>${ids.map((id) => `<option ${id === defUpto ? 'selected' : ''}>${id}</option>`).join('')}</select></label>
      <label>Focus <select data-focus><option value="">all equally</option>${ids.map((id) => `<option ${id === saved.focus ? 'selected' : ''}>${id}</option>`).join('')}</select></label>
      <label>Exercises per round <select data-count>${[4, 6, 8, 10].map((x) => `<option ${x === (saved.count || 6) ? 'selected' : ''}>${x}</option>`).join('')}</select></label>
      <button class="btn primary" data-go>▶ New round</button></div>
      <div class="row small" style="margin-top:8px" data-kinds></div></div><div id="mixout"></div>`;
  const M = $main();
  const kindsBox = M.querySelector('[data-kinds]');
  const renderKinds = () => {
    const n = Math.floor(L(M.querySelector('[data-upto]').value).n + 0.01);
    kindsBox.innerHTML = Object.entries(App.Mix.GEN).map(([k, g]) => { const on = g.min <= n; const s = st[k]; return `<label class="pill" style="opacity:${on ? 1 : 0.4}" title="${on ? '' : 'unlocks at L' + g.min}"><input type="checkbox" value="${k}" ${on && (!saved.kinds || saved.kinds.includes(k)) ? 'checked' : ''} ${on ? '' : 'disabled'}> ${U.esc(g.title.split(':')[0])}${s ? ` · ${Math.round((s.ok / s.n) * 100)}%` : ''}</label>`; }).join(' ');
  };
  renderKinds();
  M.querySelector('[data-upto]').onchange = renderKinds;
  const go = () => {
    const upto = M.querySelector('[data-upto]').value, focus = M.querySelector('[data-focus]').value || upto, count = +M.querySelector('[data-count]').value;
    const kinds = [...kindsBox.querySelectorAll('input:checked')].map((x) => x.value);
    Store.data.mixSel = { upto, focus: M.querySelector('[data-focus]').value, count, kinds }; Store.save();
    const lessonIds = ids.slice(0, ids.indexOf(upto) + 1);
    const out = M.querySelector('#mixout'); out.innerHTML = '';
    const w = App.Mix.weights(kinds); const tot = w.reduce((a, x) => a + x.w, 0);
    const chosen = [];
    for (let i = 0; i < count * 3 && chosen.length < count; i++) {
      let r = Math.random() * tot, k = w[0].k; for (const x of w) { r -= x.w; if (r <= 0) { k = x.k; break; } }
      if (chosen.filter((c) => c === k).length < 2) chosen.push(k);
    }
    chosen.forEach((kind, i) => {
      const regen = () => App.Mix.make(kind, lessonIds, focus);
      const ex = regen(); if (ex) out.appendChild(App.Exercises.render(ex, { key: 'mix-' + kind, lessonId: focus, regen, mix: kind }));
    });
    out.appendChild(h('<div class="row" style="justify-content:center"><button class="btn primary" data-again>▶ Next round</button></div>'));
    out.querySelector('[data-again]').onclick = () => { go(); window.scrollTo(0, 0); };
  };
  M.querySelector('[data-go]').onclick = go;
}
function tabExam(l, T) {
  T.innerHTML = `<p class="sub">Goethe-format tasks using only this lesson's material. The full exam structure is on the <a href="#/exam">Prüfung page</a>.</p>`;
  (l.exam || []).forEach((ex, i) => T.appendChild(App.Exercises.render(ex, { key: 'x' + i, lessonId: l.id })));
}
function tabDrill(l, T) {
  T.innerHTML = `<div class="card"><h3>Pimsleur-style audio drill: ${l.drill.length} sentences</h3>
    <p>Headphones on, eyes off the screen if you can. You hear English, <b>say the German out loud before the voice does</b>, then repeat after it. Sentences return after 5 s, 25 s, 2 min, 10 min… and reset if you miss.</p>
    ${drillControls()}
    <details><summary class="small muted">Show all sentences</summary>${l.drill.map((d) => `<div class="ex-item row"><button class="icon-btn" data-say="${U.esc(d.de)}">▶</button><b>${U.esc(d.de)}</b><span class="muted">${U.esc(d.en)}</span></div>`).join('')}</details></div><div id="drill-root" style="margin-top:12px"></div>`;
  T.addEventListener('click', (e) => { const b = e.target.closest('[data-say]'); if (b) Speech.speak(b.dataset.say); });
  wireDrill(T, [l.id], builtIds().slice(0, builtIds().indexOf(l.id)));
}
function drillControls() {
  const s = Store.data.settings;
  return `<div class="row"><label>Minutes <select data-min>${[5, 10, 15, 20, 30].map((m) => `<option ${m === s.drillMinutes ? 'selected' : ''}>${m}</option>`).join('')}</select></label>
    <label><input type="checkbox" data-hf ${s.handsFree ? 'checked' : ''}> Hands-free</label>
    <label><input type="checkbox" data-ao> Audio only (no text)</label>
    <label title="Chrome/Edge only"><input type="checkbox" data-mic ${Speech.canListen() ? '' : 'disabled'}> Check me with the mic</label>
    <button class="btn primary" data-go>▶ Start drill</button></div>`;
}
function wireDrill(T, lessonIds, reviewIds) {
  T.querySelector('[data-go]').onclick = () => {
    const s = Store.data.settings;
    s.drillMinutes = +T.querySelector('[data-min]').value; s.handsFree = T.querySelector('[data-hf]').checked; Store.save();
    const root = T.querySelector('#drill-root');
    root.scrollIntoView({ behavior: 'smooth' });
    App.Drill.mount(root, { lessonIds, reviewIds, minutes: s.drillMinutes, handsFree: s.handsFree, audioOnly: T.querySelector('[data-ao]').checked, useMic: T.querySelector('[data-mic]').checked });
  };
}

/* ───────────────── Drill picker ───────────────── */
function viewDrill(id) {
  setNav('drill');
  if (id && L(id)) { location.hash = `#/lesson/${id}/drill`; return; }
  $main().innerHTML = `<h1>Audio-Drill</h1><p class="sub">Pick what to drill. Older lessons are mixed in as review automatically.</p>
    <div class="card"><div class="row">${builtIds().map((x) => `<label class="pill"><input type="checkbox" value="${x}"> ${x}</label>`).join(' ')}</div><div style="margin-top:10px">${drillControls()}</div></div><div id="drill-root" style="margin-top:12px"></div>`;
  const T = $main();
  T.querySelector('[data-go]').onclick = () => {
    const picked = [...T.querySelectorAll('input[type=checkbox][value]:checked')].map((x) => x.value);
    if (!picked.length) return alert('Pick at least one lesson.');
    const first = builtIds().indexOf(picked[0]);
    const s = Store.data.settings; s.drillMinutes = +T.querySelector('[data-min]').value; s.handsFree = T.querySelector('[data-hf]').checked; Store.save();
    App.Drill.mount(T.querySelector('#drill-root'), { lessonIds: picked, reviewIds: builtIds().slice(0, first), minutes: s.drillMinutes, handsFree: s.handsFree, audioOnly: T.querySelector('[data-ao]').checked, useMic: T.querySelector('[data-mic]').checked });
  };
}

/* ───────────────── Review session ───────────────── */
function viewReview(param) {
  setNav('review');
  const cram = param === 'weak';
  const q = cram ? { learning: [], review: Cards.weakest(25), fresh: [] } : Cards.queue();
  if (!cram && !builtIds().some((id) => Cards.isAdded(id))) {
    $main().innerHTML = `<h1>Reviews</h1><div class="notice">Your deck is empty. Add lessons from the <a href="#/">home page</a> or a lesson's Überblick tab.</div>`; return;
  }
  // interleave: learning first, then reviews with a new card every 4th slot
  const list = [...q.learning];
  const rv = q.review.slice(), fr = q.fresh.slice();
  while (rv.length || fr.length) { for (let i = 0; i < 4 && rv.length; i++) list.push(rv.shift()); if (fr.length) list.push(fr.shift()); }
  const again = []; // cards relearning this session
  let i = 0, startT = Date.now(), n = 0;
  const S = Store.data.settings;

  const next = () => {
    let card = null;
    const ready = again.filter((x) => x.at <= Date.now()).sort((a, b) => a.at - b.at)[0];
    if (ready) { again.splice(again.indexOf(ready), 1); card = ready.c; }
    else if (i < list.length) card = list[i++];
    else if (again.length) { const x = again.sort((a, b) => a.at - b.at).shift(); card = x.c; }
    if (!card) return doneView();
    show(card);
  };
  const doneView = () => {
    Store.day().seconds += Math.round((Date.now() - startT) / 1000); Store.save(); setNav('review');
    $main().innerHTML = `<div class="flash card"><h1>Fertig! 🎉</h1><p>${n} cards reviewed in ${Math.round((Date.now() - startT) / 60000)} min.</p>
      <div class="row" style="justify-content:center"><a class="btn primary" href="#/drill">Now: audio drill</a><a class="btn" href="#/review/weak">Drill my weakest 25</a><a class="btn" href="#/">Home</a></div></div>`;
  };
  const show = (card) => {
    const st = Store.data.cards[card.id];
    const remaining = list.length - i + again.length;
    const isNew = !st;
    const canMic = Speech.canListen() && (card.kind === 's' || card.kind === 'p');
    $main().innerHTML = `<div class="flash">
      <div class="row small muted"><span>${remaining} left</span><span class="spacer"></span><span>${isNew ? '<span class="pill on">new</span>' : ''} ${U.esc(card.lesson)} · ${card.kind === 'p' ? 'Wort' : card.kind === 'g' ? 'Grammatik' : 'Satz'}</span></div>
      <div class="card" style="margin-top:8px">
        <div class="hint small">${U.esc(card.hint || '')}</div>
        <div class="face">${U.esc(card.front)}</div>
        <div class="row" style="justify-content:center;margin-top:12px">
          <input type="text" class="inp" id="ans" style="min-width:260px;flex:1;max-width:460px;font-size:18px" placeholder="${card.kind === 'p' && card.g ? 'der / das / die …' : 'type the German …'}" autocomplete="off" autocapitalize="off" spellcheck="false">
          ${canMic ? '<button class="btn" id="mic" title="Say it">🎙</button>' : ''}</div>
        <div id="ub" style="margin-top:6px"></div>
        <div id="back" hidden></div>
        <div class="row" style="justify-content:center;margin-top:12px" id="checkrow"><button class="btn primary" id="check">Check <span class="kbd">Enter</span></button><button class="btn ghost" id="reveal">I said it out loud. Show answer</button></div>
        <div class="grades" id="grades" hidden></div>
      </div>
      <p class="small muted">Keys: Enter = check · 1–4 = grade · Space (outside the box) = replay audio</p></div>`;
    document.getElementById('ub').appendChild(App.umlautBar());
    const inp = document.getElementById('ans'); inp.focus();
    let revealed = false, suggested = 3;
    const sayAns = () => Speech.speak(card.de);
    const reveal = (given) => {
      if (revealed) return; revealed = true;
      let verdict = '';
      if (given != null && given.trim()) {
        const r = U.check(given, card.answer);
        if (r.ok) { suggested = r.umlaut ? 2 : 3; verdict = `<div class="fb ok">✓ Richtig${r.umlaut ? ' (but write ä/ö/ü/ß)' : ''}</div>`; inp.classList.add('ok'); }
        else { suggested = r.close ? 2 : 1; verdict = `<div class="fb bad">${r.close ? 'Almost.' : '✗'} You wrote: <s>${U.esc(given)}</s></div>`; inp.classList.add('bad'); }
        if (card.kind === 'p' && card.g && r.ok === false) {
          const art = U.norm(given).split(' ')[0]; const want = DE.ART[card.g];
          if (['der', 'das', 'die'].includes(art) && art !== want && U.norm(given).split(' ').slice(1).join(' ') === U.norm(card.answer[0]).split(' ').slice(1).join(' ')) verdict = `<div class="fb bad">Wrong article. It's <b>${want}</b>.</div>`;
        }
      }
      const cls = card.g ? 'g-' + card.g : '';
      const back = document.getElementById('back'); back.hidden = false;
      back.innerHTML = `${verdict}<div class="answer ${cls}"><button class="icon-btn" id="replay">▶</button> <b>${U.esc(card.de)}</b></div>
        ${card.plural ? `<div class="muted">${U.esc(card.plural)}</div>` : ''}${card.ex ? `<div class="muted small"><i>${U.esc(card.ex)}</i></div>` : ''}`;
      document.getElementById('replay').onclick = sayAns;
      document.getElementById('checkrow').hidden = true;
      const pv = FSRS.preview(st || FSRS.fresh());
      const g = document.getElementById('grades'); g.hidden = false;
      g.innerHTML = ['Again', 'Hard', 'Good', 'Easy'].map((t, k) => `<button data-g="${k + 1}" class="${k === 0 ? 'again' : ''} ${k + 1 === suggested ? 'good' : ''}">${k + 1} · ${t}<small>${U.fmtIvl(pv[k])}</small></button>`).join('');
      g.onclick = (e) => { const b = e.target.closest('[data-g]'); if (b) doGrade(+b.dataset.g); };
      if (S.autoplay) sayAns();
      inp.blur();
    };
    const doGrade = (g) => {
      const nx = Cards.grade(card, g); n++;
      if (nx.due - Date.now() < 30 * 60e3) again.push({ c: card, at: nx.due });
      setNav('review');
      next();
    };
    document.getElementById('check').onclick = () => reveal(inp.value);
    document.getElementById('reveal').onclick = () => reveal(null);
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); reveal(inp.value); } });
    const mic = document.getElementById('mic');
    if (mic) mic.onclick = async () => { mic.textContent = '●'; const r = await Speech.listen({ timeout: 6000 }); mic.textContent = '🎙'; if (r.text) { const best = [r.text, ...(r.alts || [])].sort((a, b) => Speech.similarity(b, card.de) - Speech.similarity(a, card.de))[0]; inp.value = best; } };
    App._reviewKeys = (e) => {
      if (!revealed) return;
      if (/^[1-4]$/.test(e.key)) { e.preventDefault(); doGrade(+e.key); }
      else if (e.code === 'Space' && !e.target.matches('input,textarea')) { e.preventDefault(); sayAns(); }
      else if (e.key === 'Enter') { e.preventDefault(); doGrade(suggested); }
    };
  };
  if (!list.length) {
    $main().innerHTML = `<div class="flash card"><h1>Nothing due 👌</h1><p>Come back later, or:</p><div class="row" style="justify-content:center"><a class="btn primary" href="#/review/weak">Practise my weakest 25</a><a class="btn" href="#/drill">Audio drill</a></div></div>`;
    return;
  }
  next();
}
document.addEventListener('keydown', (e) => { if (location.hash.startsWith('#/review') && App._reviewKeys) App._reviewKeys(e); });

/* ───────────────── Exam ───────────────── */
function viewExam() {
  setNav('exam');
  const all = [];
  builtIds().forEach((id) => (L(id).exam || []).forEach((ex, i) => all.push({ ex, id, key: 'x' + i })));
  const skills = ['Hören', 'Lesen', 'Schreiben', 'Sprechen'];
  const bySkill = (s) => all.filter((x) => (x.ex.exam || '').includes(s));
  $main().innerHTML = `<h1>Prüfungstraining</h1>
    <p class="sub">All four skills, in Goethe format. Right now the tasks use L1–12 material (Kursbuch + Arbeitsbuch). A full Start Deutsch 1 mock unlocks at L24 and a Goethe A2 mock at L48.</p>
    <div class="grid">${['A1', 'A2'].map((k) => { const e = DE.exams[k]; return `<div class="card"><h3>${U.esc(e.name)}</h3>${e.parts.map((p) => `<p class="small"><b>${p.skill}</b> (${p.time}): ${U.esc(p.detail)}</p>`).join('')}<p class="small muted">Pass: ${U.esc(e.pass)}</p></div>`; }).join('')}</div>
    <nav class="tabs">${skills.map((s, i) => `<a href="#" data-skill="${s}" class="${i === 0 ? 'active' : ''}">${s} (${bySkill(s).length})</a>`).join('')}</nav><div id="tab"></div>`;
  const T = document.getElementById('tab');
  const show = (s) => {
    T.innerHTML = '';
    $main().querySelectorAll('[data-skill]').forEach((a) => a.classList.toggle('active', a.dataset.skill === s));
    bySkill(s).forEach(({ ex, id, key }) => { const w = h(`<div><div class="small muted" style="margin:8px 0 4px">${id} · ${U.esc(L(id).title)}</div></div>`); w.appendChild(App.Exercises.render(ex, { key, lessonId: id })); T.appendChild(w); });
  };
  $main().querySelectorAll('[data-skill]').forEach((a) => (a.onclick = (e) => { e.preventDefault(); show(a.dataset.skill); }));
  show('Hören');
}

/* ───────────────── Plan / Syllabus ───────────────── */
function viewPlan() {
  setNav('plan');
  const wk = currentWeek();
  const levels = ['A1.1', 'A1.2', 'A2.1', 'A2.2'];
  $main().innerHTML = `<h1>Syllabus & 15-week plan</h1>
    <p class="sub">A1.1 → A2.2 by 15 Feb 2027. A1.1 mirrors your Menschen A1.1 Kursbuch exactly. A1.2–A2.2 follow the Goethe A1/A2 grammar & topic inventory, in the same order Menschen / Netzwerk / Schritte teach it. Lessons with a ✓ are built.</p>
    <div class="notice"><b>Straight talk:</b> Goethe estimates roughly 150–200 hours of instruction for A1+A2. You have ~15 weeks × (5 × 45 min + 2 × 100 min) ≈ <b>105 hours</b> in the app, plus your uni classes. That's enough only if you <b>don't skip days</b> and keep reviews at zero every day. Fall a week behind and you won't finish A2.2.</div>
    <h2>Week by week</h2><div class="card">${DE.plan.weeks.map((w, i) => `<div class="week ${i === wk ? 'now' : ''}"><div><b>W${i + 1}</b> <span class="small muted">${w.from.slice(5)} – ${w.to.slice(5)}</span></div><div>${U.esc(w.goal)}</div><div>${w.lessons.map((n) => DE.lessons['L' + n] ? `<a class="pill on" href="#/lesson/L${n}">L${n}</a>` : `<span class="pill">L${n}</span>`).join(' ')}</div></div>`).join('')}</div>
    ${levels.map((lv) => `<h2>${lv}</h2><div class="grid">${DE.syllabus.filter((s) => s.level === lv).map((s) => {
      const built = DE.lessons['L' + s.n];
      return `<${built ? `a href="#/lesson/L${s.n}"` : 'div'} class="card lesson-tile ${built ? '' : 'locked'}"><div class="row"><span class="num">L${s.n}</span>${s.pages ? `<span class="pill">p. ${s.pages}</span>` : ''}<span class="spacer"></span>${built ? '<span class="pill on">✓ built</span>' : s.exam ? '<span class="pill">exam</span>' : ''}</div>
        <h3 style="margin:6px 0">${U.esc(s.title)}</h3><div class="small muted">${U.esc(s.topic)}</div>
        <div class="small" style="margin-top:6px"><b>Grammatik:</b> ${s.grammar.map(U.esc).join(' · ')}</div>
        <div class="small"><b>Can-do:</b> ${s.can.map(U.esc).join(' · ')}</div></${built ? 'a' : 'div'}>`;
    }).join('')}</div>`).join('')}
    <p class="small muted">Full research notes: docs/SYLLABUS.md in the repository.</p>`;
}

/* ───────────────── Settings ───────────────── */
function viewSettings() {
  setNav('settings');
  const s = Store.data.settings;
  const gv = Speech.germanVoices(), ev = Speech.englishVoices();
  $main().innerHTML = `<h1>Settings</h1>
    <div class="grid">
    <div class="card"><h3>Voice</h3>
      <label>German voice<br><select data-k="voiceDe" style="width:100%"><option value="">Auto (best available)</option>${gv.map((v) => `<option ${v.name === s.voiceDe ? 'selected' : ''}>${U.esc(v.name)}</option>`).join('')}</select></label>
      <p class="small muted">${gv.length ? gv.length + ' German voice(s) found.' : '<b>No German voice found.</b>'} Best: Microsoft Edge "… Online (Natural)" voices (Katja, Conrad, Amala) or Chrome "Google Deutsch". Windows: Settings → Time & Language → Speech → Manage voices → Add → Deutsch (Deutschland).</p>
      <label>English voice<br><select data-k="voiceEn" style="width:100%"><option value="">Auto</option>${ev.map((v) => `<option ${v.name === s.voiceEn ? 'selected' : ''}>${U.esc(v.name)}</option>`).join('')}</select></label>
      <p><label>Speed: <input type="range" min="0.6" max="1.2" step="0.05" value="${s.rate}" data-k="rate"> <span data-rate>${s.rate}</span></label></p>
      <button class="btn" data-test>▶ Test: „Guten Tag! Ich heiße Arya und komme aus Indien."</button></div>
    <div class="card"><h3>Learning</h3>
      <label>Your name <input type="text" data-k="name" value="${U.esc(s.name)}"></label>
      <p><label>New cards per day <input type="number" min="5" max="200" data-k="newPerDay" value="${s.newPerDay}" style="width:90px"></label></p>
      <p class="small muted">Revising L1–6 before the 30 Nov test: 40–60/day gets you through the deck in ~2 weeks. Each new card costs ~3–4 reviews over the following week.</p>
      <label><input type="checkbox" data-k="autoplay" ${s.autoplay ? 'checked' : ''}> Auto-play German on answer</label><br>
      <label><input type="checkbox" data-k="extraVocab" ${s.extraVocab !== false ? 'checked' : ''}> Include Themenwortschatz (extra words) in reviews. They come after the book's words.</label>
      <p><label>Theme <select data-k="theme">${['auto', 'light', 'dark'].map((t) => `<option ${t === s.theme ? 'selected' : ''}>${t}</option>`).join('')}</select></label></p></div>
    <div class="card"><h3>Backup</h3><p class="small muted">Progress lives in this browser only. Export it weekly, and to move between laptop and phone.</p>
      <div class="row"><button class="btn" data-export>Export progress</button><label class="btn">Import<input type="file" accept=".json" data-import hidden></label><button class="btn ghost" data-reset style="color:var(--bad)">Reset everything</button></div></div>
    </div>`;
  const M = $main();
  M.querySelectorAll('[data-k]').forEach((el) => el.addEventListener('change', () => {
    const k = el.dataset.k; s[k] = el.type === 'checkbox' ? el.checked : el.type === 'range' || el.type === 'number' ? +el.value : el.value; Store.save();
    if (k === 'theme') applyTheme();
  }));
  M.querySelector('[data-k=rate]').addEventListener('input', (e) => (M.querySelector('[data-rate]').textContent = e.target.value));
  M.querySelector('[data-test]').onclick = () => Speech.speak('Guten Tag! Ich heiße Arya und komme aus Indien.');
  M.querySelector('[data-export]').onclick = () => {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([Store.export()], { type: 'application/json' })); a.download = `deutsch-progress-${U.today()}.json`; a.click();
  };
  M.querySelector('[data-import]').onchange = async (e) => { try { Store.import(await e.target.files[0].text()); alert('Imported.'); viewSettings(); } catch (err) { alert('Import failed: ' + err.message); } };
  M.querySelector('[data-reset]').onclick = () => { if (confirm('Delete ALL progress? Export first if unsure.')) { Store.reset(); viewSettings(); } };
}
function applyTheme() { const t = Store.data.settings.theme; if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t); }

/* ───────────────── Router ───────────────── */
function route() {
  Speech.cancel(); App._reviewKeys = null;
  const [, a, b, c] = (location.hash || '#/').split('/');
  window.scrollTo(0, 0);
  switch (a) {
    case 'lesson': return viewLesson(b, c);
    case 'review': return viewReview(b);
    case 'drill': return viewDrill(b);
    case 'exam': return viewExam();
    case 'mix': return viewMix();
    case 'plan': return viewPlan();
    case 'settings': return viewSettings();
    default: return viewHome();
  }
}
App.start = () => {
  Store.load(); applyTheme(); Speech.init();
  window.addEventListener('hashchange', route);
  route();
  // Voices load asynchronously; refresh home once they arrive so the warning disappears.
  setTimeout(() => { if ((location.hash || '#/') === '#/' && Speech.hasGerman()) route(); }, 1200);
};
})();
