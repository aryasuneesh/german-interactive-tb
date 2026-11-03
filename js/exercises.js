/* exercises.js — interactive exercise renderers. Each returns a DOM element. */
(() => {
const { U, Store, Speech } = App;
const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const play = (txt, opt) => Speech.speak(txt, 'de', opt);
let lastInput = null;
document.addEventListener('focusin', (e) => { if (e.target.matches('input[type=text], textarea')) lastInput = e.target; });
const umlautBar = () => {
  const el = h(`<span class="umlauts" title="Insert special characters">${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((c) => `<button type="button" tabindex="-1">${c}</button>`).join('')}</span>`);
  el.addEventListener('mousedown', (e) => e.preventDefault());
  el.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b || !lastInput) return;
    const i = lastInput, s = i.selectionStart ?? i.value.length, en = i.selectionEnd ?? s;
    i.value = i.value.slice(0, s) + b.textContent + i.value.slice(en); i.selectionStart = i.selectionEnd = s + 1; i.focus();
    i.dispatchEvent(new Event('input'));
  });
  return el;
};
App.umlautBar = umlautBar;

function shell(ex, ctx, bodyHtml) {
  const prev = Store.lesson(ctx.lessonId).ex[ctx.key];
  const el = h(`<div class="card ex">
    <div class="ex-head"><h3>${U.esc(ex.title || '')}</h3>${ex.exam ? `<span class="pill">${U.esc(ex.exam)}</span>` : ''}
    <span class="spacer"></span><span class="score small muted">${prev != null ? 'last: ' + Math.round(prev * 100) + '%' : ''}</span></div>
    <div class="ex-body">${bodyHtml}</div>
    <div class="row" style="margin-top:10px"><button class="btn primary sm" data-check>Check</button><button class="btn ghost sm" data-reset>Reset</button><span class="spacer"></span><span class="result score"></span></div>
  </div>`);
  el.querySelector('[data-reset]').onclick = () => el.replaceWith(App.Exercises.render(ctx.regen ? ctx.regen() : ex, ctx));
  return el;
}
function finish(el, ctx, score, total) {
  const pct = total ? score / total : 1;
  el.querySelector('.result').textContent = `${score} / ${total}`;
  el.querySelector('.result').style.color = pct >= 0.8 ? 'var(--ok)' : pct >= 0.5 ? 'var(--warn)' : 'var(--bad)';
  const L = Store.lesson(ctx.lessonId);
  L.ex[ctx.key] = Math.max(L.ex[ctx.key] || 0, pct);
  Store.bump('exercises');
  ctx.onScore && ctx.onScore(pct);
}
const fb = (ok, msg) => `<div class="fb ${ok ? 'ok' : 'bad'}">${msg}</div>`;

const R = {
  gap(ex, ctx) {
    const rows = ex.items.map((it, i) => {
      const html = U.esc(it).replace(/\{([^}]+)\}/g, (_, a) => `<input type="text" class="gap-in" data-a="${U.esc(a)}" autocomplete="off" autocapitalize="off" spellcheck="false">`);
      return `<div class="ex-item" data-i="${i}">${html}<div class="fbx"></div></div>`;
    }).join('');
    const el = shell(ex, ctx, rows);
    el.querySelector('.ex-head').appendChild(umlautBar());
    el.querySelectorAll('.gap-in').forEach((inp) => inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') el.querySelector('[data-check]').click(); }));
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0, n = 0;
      el.querySelectorAll('.ex-item').forEach((row) => {
        const msgs = [];
        row.querySelectorAll('.gap-in').forEach((inp) => {
          n++; const r = U.check(inp.value, inp.dataset.a.split('|'));
          inp.classList.toggle('ok', r.ok); inp.classList.toggle('bad', !r.ok);
          if (r.ok) { ok++; if (r.umlaut) msgs.push(fb(true, `✓ (write it with umlaut/ß: <b>${U.esc(r.best)}</b>)`)); }
          else msgs.push(fb(false, `→ <b>${U.esc(inp.dataset.a.split('|')[0])}</b>${r.close ? ' (almost!)' : ''}`));
        });
        row.querySelector('.fbx').innerHTML = msgs.join('');
      });
      finish(el, ctx, ok, n);
    };
    return el;
  },

  mc(ex, ctx) {
    const rows = ex.items.map((it, i) => `<div class="ex-item" data-i="${i}"><div>${U.esc(it.q)}</div>
      ${it.options.map((o, j) => `<span class="opt"><button type="button" data-j="${j}">${U.esc(o)}</button></span>`).join('')}<div class="fbx"></div></div>`).join('');
    const el = shell(ex, ctx, rows);
    const sel = {};
    el.querySelectorAll('.ex-item').forEach((row) => row.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-j]'); if (!b) return;
      row.querySelectorAll('button').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel[row.dataset.i] = +b.dataset.j;
    }));
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.items.forEach((it, i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`); const s = sel[i];
        row.querySelectorAll('button').forEach((b) => { b.classList.remove('ok', 'bad'); if (+b.dataset.j === it.a) b.classList.add('ok'); else if (+b.dataset.j === s) b.classList.add('bad'); });
        if (s === it.a) ok++;
        row.querySelector('.fbx').innerHTML = it.explain && s !== it.a ? fb(false, U.esc(it.explain)) : '';
      });
      finish(el, ctx, ok, ex.items.length);
    };
    return el;
  },

  order(ex, ctx) {
    const rows = ex.items.map((it, i) => `<div class="ex-item" data-i="${i}"><div class="muted small">${U.esc(it.en)}</div>
      <div class="chips built" data-built></div><div class="chips" data-pool>${U.shuffle(it.words.map((w, k) => [w, k])).map(([w, k]) => `<button type="button" class="chip" data-k="${k}">${U.esc(w)}</button>`).join('')}</div><div class="fbx"></div></div>`).join('');
    const el = shell(ex, ctx, '<p class="small muted">Click the words in the right order. Click a placed word to remove it.</p>' + rows);
    el.querySelectorAll('.ex-item').forEach((row) => {
      const built = row.querySelector('[data-built]'), pool = row.querySelector('[data-pool]');
      pool.addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b || b.classList.contains('used')) return; b.classList.add('used'); const c = b.cloneNode(true); c.classList.remove('used'); built.appendChild(c); });
      built.addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; pool.querySelector(`.chip[data-k="${b.dataset.k}"]`).classList.remove('used'); b.remove(); });
    });
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.items.forEach((it, i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`);
        const got = [...row.querySelectorAll('[data-built] .chip')].map((c) => c.textContent).join(' ');
        const want = it.words.join(' ');
        const good = got === want; if (good) ok++;
        row.querySelector('.fbx').innerHTML = good ? fb(true, '✓') : fb(false, '→ ' + U.esc(want.replace(/ ([.,!?])/g, '$1')));
        if (good) play(want.replace(/ ([.,!?])/g, '$1'));
      });
      finish(el, ctx, ok, ex.items.length);
    };
    return el;
  },

  match(ex, ctx) {
    const rights = U.shuffle(ex.pairs.map((p) => p[1]));
    const rows = ex.pairs.map((p, i) => `<div class="ex-item row" data-i="${i}"><span style="min-width:220px">${U.esc(p[0])}</span>
      <select><option value="">—</option>${rights.map((r) => `<option>${U.esc(r)}</option>`).join('')}</select><span class="fbx"></span></div>`).join('');
    const el = shell(ex, ctx, rows);
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.pairs.forEach((p, i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`); const v = row.querySelector('select').value;
        const good = v === p[1]; if (good) ok++;
        row.querySelector('.fbx').innerHTML = good ? fb(true, '✓') : fb(false, '→ ' + U.esc(p[1]));
      });
      finish(el, ctx, ok, ex.pairs.length);
    };
    return el;
  },

  sort(ex, ctx) {
    const rows = U.shuffle(ex.items.map((x, i) => [x, i])).map(([[w], i]) => `<div class="ex-item row" data-i="${i}"><span style="min-width:150px;font-weight:650">${U.esc(w)}</span>
      ${ex.buckets.map((b) => `<span class="opt"><button type="button" data-b="${U.esc(b)}">${U.esc(b)}</button></span>`).join('')}<span class="fbx"></span></div>`).join('');
    const el = shell(ex, ctx, rows);
    const sel = {};
    el.querySelectorAll('.ex-item').forEach((row) => row.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-b]'); if (!b) return;
      row.querySelectorAll('button').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel[row.dataset.i] = b.dataset.b;
      if (ex.buckets[0] === 'der') play(b.dataset.b + ' ' + ex.items[row.dataset.i][0]);
    }));
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.items.forEach(([w, ans], i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`);
        row.querySelectorAll('button').forEach((b) => { b.classList.remove('ok', 'bad'); if (b.dataset.b === ans) b.classList.add('ok'); else if (b.dataset.b === sel[i]) b.classList.add('bad'); });
        if (sel[i] === ans) ok++;
      });
      finish(el, ctx, ok, ex.items.length);
    };
    return el;
  },

  listen(ex, ctx) {
    const how = ex.spell ? 'spelled letter by letter' : ex.times ? 'a time (write it like 14:30)' : ex.numbers ? 'a number (digits only)' : 'a sentence';
    const sayOf = (it) => (typeof it === 'object' ? it.say : it);
    const ansOf = (it) => (typeof it === 'object' ? it.a : it);
    const rows = ex.items.map((it, i) => `<div class="ex-item row" data-i="${i}"><button type="button" class="btn sm" data-play>▶ ${i + 1}</button><button type="button" class="icon-btn small" data-slow title="slower">🐢</button>
      <input type="text" class="inp" style="flex:1;min-width:180px" autocomplete="off" spellcheck="false"><span class="fbx"></span></div>`).join('');
    const el = shell(ex, ctx, `<p class="small muted">You hear ${how}. Press ▶ as often as you need (in the exam: twice). ${Speech.hasGerman() ? '' : '<b>No German voice found — see Settings.</b>'}</p>` + rows);
    el.querySelector('.ex-head').appendChild(umlautBar());
    const say = (it, slow) => {
      const t = sayOf(it);
      if (ex.spell) return Speech.spell(t);
      if (typeof it === 'object') return play(t, slow ? { rate: 0.65 } : {});
      if (ex.times) { const [hh, mm] = t.split(':'); return play(`${+hh} Uhr ${+mm ? +mm : ''}`.trim(), slow ? { rate: 0.65 } : {}); }
      if (ex.numbers && (/\s/.test(t) || t.startsWith('0'))) return Speech.digits(t);
      return play(t, slow ? { rate: 0.6 } : {});
    };
    el.querySelectorAll('.ex-item').forEach((row) => {
      const it = ex.items[row.dataset.i];
      row.querySelector('[data-play]').onclick = () => say(it);
      row.querySelector('[data-slow]').onclick = () => say(it, true);
      row.querySelector('input').addEventListener('keydown', (e) => { if (e.key === 'Enter') el.querySelector('[data-check]').click(); });
    });
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.items.forEach((it, i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`); const inp = row.querySelector('input');
        let given = inp.value, want = String(ansOf(it));
        if (ex.times) { const f = (x) => x.replace(/[^\d]/g, ' ').trim().split(/\s+/).map((n) => String(+n)).join(':'); given = f(given); want = f(want); }
        else if (ex.numbers) { given = given.replace(/[\s.,€]/g, ''); want = want.replace(/[\s.]/g, ''); }
        if (ex.spell) { given = given.trim(); }
        const r = ex.spell ? { ok: given.toLowerCase() === want.toLowerCase(), umlaut: false } : U.check(given, want.split('|'));
        inp.classList.toggle('ok', r.ok); inp.classList.toggle('bad', !r.ok);
        if (r.ok) ok++;
        row.querySelector('.fbx').innerHTML = r.ok ? fb(true, r.umlaut ? '✓ (umlaut!)' : '✓') : fb(false, '→ ' + U.esc(String(ansOf(it)).split('|')[0]) + (typeof it === 'object' ? ` <span class="muted small">(${U.esc(it.say)})</span>` : ''));
      });
      finish(el, ctx, ok, ex.items.length);
    };
    return el;
  },

  dialogue(ex, ctx) {
    const transcript = ex.lines.map(([s, t]) => `<div class="dlg-line"><b>${s}:</b> ${U.esc(t)}</div>`).join('');
    const qs = ex.questions.map((it, i) => `<div class="ex-item" data-i="${i}"><div>${U.esc(it.q)}</div>${it.options.map((o, j) => `<span class="opt"><button type="button" data-j="${j}">${U.esc(o)}</button></span>`).join('')}</div>`).join('');
    const el = shell(ex, ctx, `<div class="row"><button type="button" class="btn" data-play>▶ Play dialogue</button><span class="small muted" data-count>${ex.twice ? 'Exam: you hear it twice.' : 'Listen first — then read only if you must.'}</span><span class="spacer"></span><button type="button" class="btn ghost sm" data-tr>Show transcript</button></div>
      <div class="textbox" data-transcript hidden>${transcript}</div>${qs}`);
    let playing = false, plays = 0;
    el.querySelector('[data-play]').onclick = async () => {
      if (playing) { Speech.cancel(); playing = false; return; }
      playing = true; plays++;
      el.querySelector('[data-count]').textContent = `Played ${plays}×`;
      for (const [s, t] of ex.lines) { if (!playing) break; await play(t, { alt: s === 'B' }); await new Promise((r) => setTimeout(r, 350)); }
      playing = false;
    };
    el.querySelector('[data-tr]').onclick = () => { const t = el.querySelector('[data-transcript]'); t.hidden = !t.hidden; };
    const sel = {};
    el.querySelectorAll('.ex-item').forEach((row) => row.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-j]'); if (!b) return;
      row.querySelectorAll('button').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel[row.dataset.i] = +b.dataset.j;
    }));
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.questions.forEach((it, i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`);
        row.querySelectorAll('button').forEach((b) => { b.classList.remove('ok', 'bad'); if (+b.dataset.j === it.a) b.classList.add('ok'); else if (+b.dataset.j === sel[i]) b.classList.add('bad'); });
        if (sel[i] === it.a) ok++;
      });
      finish(el, ctx, ok, ex.questions.length);
    };
    return el;
  },

  tf(ex, ctx) {
    const rows = ex.items.map(([s], i) => `<div class="ex-item" data-i="${i}">${U.esc(s)}<br>
      <span class="opt"><button type="button" data-v="1">richtig</button></span><span class="opt"><button type="button" data-v="0">falsch</button></span></div>`).join('');
    const el = shell(ex, ctx, `<div class="textbox">${U.esc(ex.text)}</div><div class="row"><button type="button" class="btn ghost sm" data-play>▶ Listen to the text</button></div>${rows}`);
    const pb = el.querySelector('[data-play]');
    if (ex.audioOnce) { el.querySelector('.textbox').hidden = true; pb.textContent = '▶ Play announcement (only once — like the exam)'; }
    pb.onclick = () => { if (ex.audioOnce) { pb.disabled = true; pb.textContent = 'Played. Answer now; the text appears after Check.'; } play(ex.text.replace(/\n/g, '. ')); };
    const sel = {};
    el.querySelectorAll('.ex-item').forEach((row) => row.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-v]'); if (!b) return;
      row.querySelectorAll('button').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel[row.dataset.i] = b.dataset.v === '1';
    }));
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.items.forEach(([, ans], i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`);
        row.querySelectorAll('button').forEach((b) => { b.classList.remove('ok', 'bad'); const v = b.dataset.v === '1'; if (v === ans) b.classList.add('ok'); else if (sel[i] === v) b.classList.add('bad'); });
        if (sel[i] === ans) ok++;
      });
      el.querySelector('.textbox').hidden = false;
      finish(el, ctx, ok, ex.items.length);
    };
    return el;
  },

  pron(ex, ctx) {
    const canSR = Speech.canListen();
    const rows = ex.items.map((it, i) => `<div class="ex-item row" data-i="${i}"><button type="button" class="icon-btn" data-play>▶</button><button type="button" class="icon-btn" data-slow title="slower">🐢</button>
      ${canSR ? '<button type="button" class="icon-btn" data-rec title="Say it">🎙</button>' : ''}<span style="font-weight:600">${U.esc(it)}</span><span class="spacer"></span><span class="small muted" data-heard></span></div>`).join('');
    const quiz = (ex.quiz || []).map((q, i) => `<div class="ex-item" data-q="${i}"><div>${U.esc(q.q)}</div>${q.options.map((o, j) => `<span class="opt"><button type="button" data-j="${j}">${U.esc(o)}</button></span>`).join('')}</div>`).join('');
    const el = shell(ex, ctx, `<div class="notice">${ex.rule}</div><p class="small muted">Listen, then repeat each line out loud${canSR ? ', and press 🎙 to check yourself' : ''}.</p>${rows}${quiz ? '<h3>Regel-Check</h3>' + quiz : ''}`);
    el.querySelectorAll('[data-i]').forEach((row) => {
      const it = ex.items[row.dataset.i];
      row.querySelector('[data-play]').onclick = () => play(it.replace(/ – /g, ', '));
      row.querySelector('[data-slow]').onclick = () => play(it.replace(/ – /g, ', '), { rate: 0.6 });
      const rb = row.querySelector('[data-rec]');
      if (rb) rb.onclick = async () => { rb.textContent = '●'; const r = await Speech.listen({ timeout: 5000 }); rb.textContent = '🎙';
        const sim = r.text ? Math.max(...[r.text, ...(r.alts || [])].map((x) => Speech.similarity(x, it.replace(/ – /g, ' ')))) : 0;
        row.querySelector('[data-heard]').innerHTML = r.text ? `„${U.esc(r.text)}" <b style="color:${sim > 0.8 ? 'var(--ok)' : sim > 0.6 ? 'var(--warn)' : 'var(--bad)'}">${Math.round(sim * 100)}%</b>` : 'nothing heard'; };
    });
    const sel = {};
    el.querySelectorAll('[data-q]').forEach((row) => row.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-j]'); if (!b) return;
      row.querySelectorAll('button').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel[row.dataset.q] = +b.dataset.j;
    }));
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      (ex.quiz || []).forEach((q, i) => {
        const row = el.querySelector(`[data-q="${i}"]`);
        row.querySelectorAll('button').forEach((b) => { b.classList.remove('ok', 'bad'); if (+b.dataset.j === q.a) b.classList.add('ok'); else if (+b.dataset.j === sel[i]) b.classList.add('bad'); });
        if (sel[i] === q.a) ok++;
      });
      finish(el, ctx, ok, (ex.quiz || []).length);
    };
    return el;
  },

  form(ex, ctx) {
    const rows = ex.fields.map(([label], i) => `<div class="ex-item row" data-i="${i}"><label style="min-width:190px">${U.esc(label)}</label><input type="text" class="inp" style="flex:1;min-width:160px" autocomplete="off" spellcheck="false"><span class="fbx"></span></div>`).join('');
    const el = shell(ex, ctx, `<div class="textbox">${U.esc(ex.text)}</div>${rows}`);
    el.querySelector('.ex-head').appendChild(umlautBar());
    el.querySelector('[data-check]').onclick = () => {
      let ok = 0;
      ex.fields.forEach(([, ans], i) => {
        const row = el.querySelector(`.ex-item[data-i="${i}"]`); const inp = row.querySelector('input');
        const r = U.check(inp.value, ans.split('|'));
        inp.classList.toggle('ok', r.ok); inp.classList.toggle('bad', !r.ok); if (r.ok) ok++;
        row.querySelector('.fbx').innerHTML = r.ok ? fb(true, '✓') : fb(false, '→ ' + U.esc(ans.split('|')[0]));
      });
      finish(el, ctx, ok, ex.fields.length);
    };
    return el;
  },

  write(ex, ctx) {
    const draftKey = 'draft:' + ctx.lessonId + ':' + ctx.key;
    let draft = ''; try { draft = localStorage.getItem(draftKey) || ''; } catch (e) {}
    const el = shell(ex, ctx, `<p>${U.esc(ex.prompt)}</p><textarea spellcheck="false" placeholder="Schreiben Sie hier …">${U.esc(draft)}</textarea>
      <div class="small muted" data-wc>0 words</div><div data-after hidden><h3>Self-check</h3>${ex.checklist.map((c, i) => `<label style="display:block"><input type="checkbox" data-c="${i}"> ${U.esc(c)}</label>`).join('')}
      <h3>Model answer</h3><div class="model">${U.esc(ex.model)}</div><button type="button" class="btn ghost sm" data-play style="margin-top:6px">▶ Listen to the model</button></div>`);
    el.querySelector('.ex-head').appendChild(umlautBar());
    const ta = el.querySelector('textarea'), wc = el.querySelector('[data-wc]');
    const upd = () => { wc.textContent = (ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0) + ' words'; try { localStorage.setItem(draftKey, ta.value); } catch (e) {} };
    ta.addEventListener('input', upd); upd();
    el.querySelector('[data-check]').textContent = 'Done – compare';
    el.querySelector('[data-play]').onclick = () => play(ex.model.replace(/\n/g, '. '));
    el.querySelector('[data-check]').onclick = () => {
      const after = el.querySelector('[data-after]'); after.hidden = false;
      const boxes = [...el.querySelectorAll('[data-c]')];
      const upd2 = () => finish(el, ctx, boxes.filter((b) => b.checked).length, boxes.length);
      boxes.forEach((b) => (b.onchange = upd2)); upd2();
    };
    return el;
  },

  speak(ex, ctx) {
    const canSR = Speech.canListen();
    const el = shell(ex, ctx, `<p>${U.esc(ex.prompt)}</p>
      <div class="row"><button type="button" class="btn" data-rec>${canSR ? '🎙 Speak (German)' : '🎙 Speech recognition needs Chrome or Edge'}</button><button type="button" class="btn ghost sm" data-model>▶ Model answer</button><button type="button" class="btn ghost sm" data-show>Show model text</button></div>
      <div class="heard" data-heard></div><div class="model" data-modeltext hidden>${U.esc(ex.model)}</div>
      <p class="small muted">Say it out loud even if recognition is off. Speaking is what the exam tests and what your brain needs. Recognition is a rough guide; it mishears accents.</p>`);
    let heardAll = '';
    el.querySelector('[data-model]').onclick = () => play(ex.model.replace(/ · /g, '. '));
    el.querySelector('[data-show]').onclick = () => { const m = el.querySelector('[data-modeltext]'); m.hidden = !m.hidden; };
    const rec = el.querySelector('[data-rec]');
    rec.disabled = !canSR;
    rec.onclick = async () => {
      rec.textContent = '● Listening …'; rec.disabled = true;
      const r = await Speech.listen({ timeout: 15000 });
      rec.textContent = '🎙 Speak again (adds to transcript)'; rec.disabled = false;
      if (r.text) heardAll += (heardAll ? ' · ' : '') + r.text;
      el.querySelector('[data-heard]').textContent = heardAll ? 'Heard: „' + heardAll + '"' : r.error ? 'Mic error: ' + r.error : 'Nothing heard.';
    };
    el.querySelector('[data-check]').textContent = 'Check keywords';
    el.querySelector('[data-check]').onclick = () => {
      const t = U.norm(heardAll);
      const hits = (ex.keywords || []).filter((k) => t.includes(U.norm(k)));
      el.querySelector('[data-heard]').innerHTML = `Heard: „${U.esc(heardAll)}"<br>Keywords used: ${(ex.keywords || []).map((k) => hits.includes(k) ? `<b style="color:var(--ok)">${U.esc(k)}</b>` : `<s>${U.esc(k)}</s>`).join(' · ')}`;
      el.querySelector('[data-modeltext]').hidden = false;
      finish(el, ctx, hits.length, (ex.keywords || []).length || 1);
    };
    return el;
  },
};

App.Exercises = {
  render(ex, ctx) { const f = R[ex.type]; if (!f) return h(`<div class="card">Unknown exercise type ${U.esc(ex.type)}</div>`); return f(ex, ctx); },
  types: Object.keys(R),
};
})();
