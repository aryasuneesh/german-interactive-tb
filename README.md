# Deutsch A1 → A2: interactive textbook

An interactive textbook that follows **Menschen A1.1** (Hueber) and leads on to A2.2. It has three parts:

- **Spaced repetition** (FSRS)
- **Pimsleur-style audio drills**
- **Goethe exam training** (Start Deutsch 1 / Goethe-Zertifikat A2)

Built so far: **Lektion 1–12 + Modul 1–4 Plus + Probetest L1–12** (all of Menschen A1.1, Kursbuch + Arbeitsbuch). The full 48-lesson syllabus and the 15-week plan are in the app under *Syllabus* and in [`docs/SYLLABUS.md`](docs/SYLLABUS.md).

## Run it (Windows)

```bat
cd C:\Users\aryasuneesh\dev
git clone -b claude/adoring-lovelace-lg6n3j https://github.com/aryasuneesh/german-interactive-tb.git
cd german-interactive-tb
start msedge index.html
```

No install and no server: just open `index.html`. **Use Microsoft Edge.** Its "Natural" German voices (Katja, Conrad, Amala) are by far the best free TTS, and Edge supports the speech recognition the drill can use. Chrome works too.

If you have no German voice: *Windows Settings → Time & Language → Speech → Manage voices → Add voices → Deutsch (Deutschland)*.

Want the microphone to work from `file://` in every browser? Run `serve.bat` (needs Python) and open http://localhost:8000.

## Daily routine (30–60 min)

1. **Reviews**: clear everything that's due. Never skip this.
2. **Audio drill**: 15 min, out loud.
3. **Textbook**: next lesson, in tab order: Wortschatz → Grammatik → Übungen.
4. **Prüfung**: one exam-format task.

## Your data

Progress is stored in your browser (localStorage). Use **Settings → Export** weekly to back it up, or to move it to another device.

## Structure

```
index.html            app shell
css/style.css
js/core.js            utils, storage, FSRS-4.5 scheduler, speech (TTS + recognition)
js/cards.js           lesson → flashcards, daily queue
js/exercises.js       13 exercise types (incl. pronunciation)
js/drill.js           Pimsleur engine
js/grammar.js         rule-based declension (4 cases, der/ein/kein, weak nouns), conjugation (Präsens/Präteritum/Perfekt/Imperativ), comparison
js/forms.js           "Formen" panels + generated Kasus/Konjugation drills
js/mix.js             13 generated mix & match drill types + sentence builder, Mix page (adaptive)
js/app.js             views + router
data/syllabus.js      48-lesson syllabus, weekly plan, exam formats
data/themes.js        Themenwortschatz: extra words per Modul theme (wave 1)
data/themes2.js       Themenwortschatz wave 2
data/lessons/*.js     lesson content (one file per Lektion; arbeitsbuch.js adds the AB tasks)
docs/SYLLABUS.md      research & method
```

To add a lesson: copy `data/lessons/l06.js`, edit it, and add a `<script>` line in `index.html`. Cards, drills and exam tasks are generated from it automatically.
