/* drill.js — Pimsleur-style audio drill.
 * Principles implemented:
 *  1. Anticipation: you hear the English cue and must produce the German BEFORE you hear it.
 *  2. Graduated-interval recall: each item comes back after ~5s, 25s, 2min, 10min, 30min (reset on a miss).
 *  3. Backward build-up: new sentences are taught from the END (… Schweiz → aus der Schweiz → Ich komme aus der Schweiz).
 *  4. Core vocabulary in context + organic review: old lessons' sentences are mixed in.
 *  5. Audio first: German text is shown only after you've answered (or never, in audio-only mode). */
(() => {
const { U, Store, Speech, Cards } = App;
const INTERVALS = [5, 25, 120, 600, 1800];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function fragments(de) {
  const words = de.replace(/[.!?]+$/, '').split(/\s+/);
  if (words.length < 3) return [];
  const out = [];
  const ks = words.length <= 4 ? [1, 2] : [1, Math.ceil(words.length / 2)];
  for (const k of ks) if (k < words.length) out.push(words.slice(-k).join(' ').replace(/,$/, ''));
  return [...new Set(out)];
}
const wc = (s) => s.split(/\s+/).length;

App.Drill = {
  fragments,
  build({ lessonIds, reviewIds = [], maxNew = 12 }) {
    const fresh = [], review = [];
    for (const id of lessonIds) (DE.lessons[id].drill || []).forEach((d) => fresh.push({ ...d, lesson: id }));
    for (const id of reviewIds) (DE.lessons[id].drill || []).forEach((d) => review.push({ ...d, lesson: id }));
    return { fresh: fresh.slice(0, maxNew + 100), review: U.shuffle(review) };
  },

  mount(root, { lessonIds, reviewIds, minutes = 15, handsFree = false, audioOnly = false, useMic = false, onEnd }) {
    const S = Store.data.settings;
    const { fresh, review } = this.build({ lessonIds, reviewIds });
    const items = fresh.map((d) => ({ d, stage: 0, next: 0, misses: 0, isNew: true }));
    const reviews = review.slice(0, 15).map((d, i) => ({ d, stage: 2, next: 60 + i * 45, misses: 0, isNew: false })); // old material sprinkled in from minute 1
    let t0 = performance.now(), paused = false, stopped = false, pausedAt = 0, pausedTotal = 0, done = 0, correct = 0;
    const now = () => (performance.now() - t0 - pausedTotal) / 1000;
    const endAt = minutes * 60;

    root.innerHTML = `<div class="card drill-stage">
      <div class="row"><span class="pill" data-clock>0:00</span><span class="pill" data-count>0 items</span><span class="spacer"></span>
      <button class="btn sm" data-pause>⏸ Pause</button><button class="btn sm ghost" data-stop>■ End</button></div>
      <div class="phase" data-phase>Get ready</div>
      <div class="en" data-en>Speak out loud. Every time.</div>
      <div class="de" data-de></div>
      <div data-wait></div>
      <div class="heard" data-heard></div>
      <div class="row" style="justify-content:center;margin-top:8px" data-grade hidden>
        <button class="btn" data-miss>✗ Missed it <span class="kbd">←</span></button>
        <button class="btn primary" data-hit>✓ Got it <span class="kbd">→</span></button>
      </div>
      <p class="small muted" style="margin-top:16px">${handsFree ? 'Hands-free: it keeps going on its own. Tap ✗ only when you missed an answer.' : 'After each answer, grade yourself honestly.'} Space = pause.</p>
    </div>`;
    const $ = (s) => root.querySelector(s);
    const set = (k, v) => ($(`[data-${k}]`).textContent = v);
    let gradeResolve = null;
    const grade = (v) => { if (gradeResolve) { const r = gradeResolve; gradeResolve = null; r(v); } };
    $('[data-hit]').onclick = () => grade(true);
    $('[data-miss]').onclick = () => grade(false);
    const togglePause = () => {
      paused = !paused;
      if (paused) { pausedAt = performance.now(); Speech.cancel(); $('[data-pause]').textContent = '▶ Resume'; set('phase', 'Paused'); }
      else { pausedTotal += performance.now() - pausedAt; $('[data-pause]').textContent = '⏸ Pause'; }
    };
    $('[data-pause]').onclick = togglePause;
    $('[data-stop]').onclick = () => { stopped = true; Speech.cancel(); grade(true); };
    const key = (e) => {
      if (!document.body.contains(root)) return document.removeEventListener('keydown', key);
      if (e.target.matches('input,textarea')) return;
      if (e.code === 'Space') { e.preventDefault(); togglePause(); }
      if (e.key === 'ArrowRight') grade(true);
      if (e.key === 'ArrowLeft') grade(false);
    };
    document.addEventListener('keydown', key);
    const clock = setInterval(() => {
      if (!document.body.contains(root)) return clearInterval(clock);
      const s = Math.floor(now()); set('clock', `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')} / ${minutes}:00`);
    }, 500);

    const waitWhilePaused = async () => { while (paused && !stopped) await sleep(200); };
    const say = async (txt, lang, opt) => { await waitWhilePaused(); if (stopped) return; await Speech.speak(txt, lang, opt); };
    const pause = async (sec, label) => {
      const w = $('[data-wait]'); w.innerHTML = label ? `<div class="ring"></div><div class="small muted">${label}</div>` : '';
      const until = performance.now() + sec * 1000;
      while (performance.now() < until && !stopped) { if (paused) { const p0 = performance.now(); await waitWhilePaused(); } await sleep(100); }
      w.innerHTML = '';
    };

    const introduce = async (it) => {
      const { de, en } = it.d;
      set('phase', 'New'); set('en', en); set('de', audioOnly ? '' : de); set('heard', '');
      await say(en, 'en');
      await sleep(300);
      await say(de, 'de', { rate: S.rate * 0.85 });
      await pause(1.2 + wc(de) * 0.35, 'Repeat');
      for (const f of fragments(de)) {
        set('de', audioOnly ? '' : '… ' + f);
        await say(f, 'de', { rate: S.rate * 0.85 });
        await pause(1 + wc(f) * 0.4, 'Repeat');
      }
      set('de', audioOnly ? '' : de);
      await say(de, 'de');
      await pause(1.5 + wc(de) * 0.4, 'Repeat the whole thing');
      it.stage = 1; it.next = now() + INTERVALS[0];
    };

    const recall = async (it) => {
      const { de, en } = it.d;
      set('phase', it.isNew ? 'Say it' : 'Review — say it'); set('en', en); set('de', ''); set('heard', '');
      await say(en, 'en');
      let heardOk = null;
      if (useMic && Speech.canListen()) {
        $('[data-wait]').innerHTML = '<div class="ring"></div><div class="small muted">Speak now …</div>';
        const r = await Speech.listen({ timeout: 2500 + wc(de) * 900 });
        $('[data-wait]').innerHTML = '';
        if (r.text) { const sim = Math.max(...[r.text, ...(r.alts || [])].map((x) => Speech.similarity(x, de))); heardOk = sim >= 0.75; set('heard', `Heard: „${r.text}" ${heardOk ? '✓' : ''}`); }
      } else await pause(2.2 + wc(de) * 0.45, 'Say it in German');
      if (stopped) return;
      if (!audioOnly) set('de', de);
      await say(de, 'de');
      await pause(1 + wc(de) * 0.3, 'Repeat');
      let ok;
      if (heardOk === true && handsFree) ok = true;
      else if (handsFree) {
        $('[data-grade]').hidden = false;
        ok = await Promise.race([new Promise((r) => (gradeResolve = r)), sleep(1800).then(() => true)]);
        gradeResolve = null;
      } else {
        $('[data-grade]').hidden = false;
        ok = await new Promise((r) => (gradeResolve = r));
      }
      $('[data-grade]').hidden = true;
      done++; if (ok) correct++;
      Store.bump('drillItems');
      set('count', `${done} recalls · ${Math.round((correct / done) * 100)}%`);
      if (ok) { it.next = now() + (INTERVALS[it.stage] || 3600); it.stage++; }
      else { it.misses++; it.stage = Math.max(1, it.stage - 1); it.next = now() + 5; if (it.misses >= 2) await introduce(it); }
    };

    (async () => {
      await sleep(400);
      if (!Speech.hasGerman()) set('heard', '⚠ No German voice installed — open Settings for how to add one.');
      while (!stopped && now() < endAt) {
        await waitWhilePaused();
        const t = now();
        const active = items.filter((x) => x.stage > 0 && x.stage <= INTERVALS.length);
        const due = active.concat(reviews.filter((r) => r.stage <= INTERVALS.length)).filter((x) => x.next <= t).sort((a, b) => a.next - b.next);
        const learningCount = active.filter((x) => x.stage <= 2).length;
        const nextNew = items.find((x) => x.stage === 0);
        if (due.length) await recall(due[0]);
        else if (nextNew && learningCount < 3) await introduce(nextNew);
        else {
          if (nextNew) await introduce(nextNew);
          else {
            const soon = active.concat(reviews).filter((x) => x.stage <= INTERVALS.length).sort((a, b) => a.next - b.next)[0];
            if (!soon) break;
            soon.next = t; await recall(soon); // nothing due: pull the closest one forward
          }
        }
        await sleep(250);
      }
      Speech.cancel();
      clearInterval(clock);
      document.removeEventListener('keydown', key);
      for (const id of lessonIds) { Store.lesson(id).drills = (Store.lesson(id).drills || 0) + 1; }
      Store.day().seconds += Math.round(now()); Store.save();
      const learned = items.filter((x) => x.stage >= 3).length;
      root.innerHTML = `<div class="card drill-stage"><div class="phase">Session complete</div>
        <div class="de">${done} recalls · ${done ? Math.round((correct / done) * 100) : 0}% correct</div>
        <p>${learned} of ${items.length} new sentences reached stage 3+ (survived the 2-minute gap).</p>
        <p class="muted">Tomorrow: run the same drill once more before moving on. Pimsleur's rule: move on at ~80% recall.</p>
        <button class="btn primary" data-again>Run again</button></div>`;
      root.querySelector('[data-again]').onclick = () => App.Drill.mount(root, { lessonIds, reviewIds, minutes, handsFree, audioOnly, useMic, onEnd });
      onEnd && onEnd({ done, correct });
    })();
  },
};
})();
