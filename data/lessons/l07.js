(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L7', n: 7, module: 3, level: 'A1.1', pages: '41–44',
  title: 'Du kannst wirklich toll …!',
  topic: 'Freizeit – hobbies, abilities, compliments, requests',
  goals: [
    'Pay compliments and thank someone for one',
    'Talk about your hobbies and what you do in your free time',
    'Say what you can do and how well (können)',
    'Say how often you do something (nie – manchmal – oft – immer)',
    'Ask for something / for permission (Kann ich …?) and react',
  ],
  vocab: [
    { group: 'Freizeitaktivitäten', items: [
      V('kochen', 'to cook'), V('backen', 'to bake'), V('singen', 'to sing'), V('tanzen', 'to dance'), V('malen', 'to paint, draw'),
      V('schwimmen', 'to swim'), V('fotografieren', 'to take photos'), V('wandern', 'to hike'),
      P('Schach spielen', 'to play chess'), P('Fußball spielen', 'to play football'), P('Tennis spielen', 'to play tennis'), P('Gitarre spielen', 'to play the guitar'), P('Klavier spielen', 'to play the piano'),
      P('Ski fahren', 'to ski'), P('Rad fahren', 'to cycle'), P('Musik hören', 'to listen to music'), P('Freunde treffen', 'to meet friends'),
      P('spazieren gehen', 'to go for a walk'), P('ins Kino gehen', 'to go to the cinema'), P('ins Theater gehen', 'to go to the theatre'), P('einen Ausflug machen', 'to go on a trip / outing'),
    ]},
    { group: 'Nomen', items: [
      N('n', 'Hobby', 'Hobbys', 'hobby'), N('f', 'Freizeit', '', 'free time'), N('m', 'Spaß', '', 'fun', 'Das macht Spaß!'), N('f', 'Natur', '', 'nature'),
      N('f', 'Musik', '', 'music'), N('n', 'Kino', 'Kinos', 'cinema'), N('n', 'Theater', 'Theater', 'theatre'), N('m', 'Ausflug', 'Ausflüge', 'trip, outing'),
      N('n', 'Kompliment', 'Komplimente', 'compliment'), N('m', 'Lieblingsfilm', 'Lieblingsfilme', 'favourite film'), N('m', 'Komponist', 'Komponisten', 'composer'),
      N('f', 'Gitarre', 'Gitarren', 'guitar'), N('n', 'Auge', 'Augen', 'eye', 'Deine Augen sind sehr schön.'), N('n', 'Feuer', '', 'fire; a light (for a cigarette)'),
    ]},
    { group: 'Verben', items: [
      V('können', 'can, to be able to (ich kann, du kannst)', 'Ich kann gut kochen.'),
      V('fahren', 'to drive, ride, go (du fährst, er fährt)', 'Fährst du gern Ski?'),
      V('lesen', 'to read (du liest, er liest)', 'Liest du gern?'),
      V('treffen', 'to meet (du triffst, er trifft)', 'Ich treffe Freunde.'),
      V('lieben', 'to love', 'Ich liebe die Natur.'), V('rauchen', 'to smoke', 'Kann ich hier rauchen?'), V('telefonieren', 'to phone'),
    ]},
    { group: 'Wie gut? Wie oft?', items: [
      W('gar nicht', 'not at all'), W('nicht so gut', 'not so well'), W('ein bisschen', 'a little'), W('gut', 'well'), W('sehr gut', 'very well'),
      W('nie', 'never'), W('fast nie', 'almost never'), W('manchmal', 'sometimes'), W('oft', 'often'), W('immer', 'always'),
      W('gern', 'gladly — (to like doing)', 'Ich koche gern.'), W('nicht gern', '(to not like doing)'), W('toll', 'great'), W('wirklich', 'really'), W('natürlich', 'of course'), W('klar', 'sure, clear'), W('leider', 'unfortunately'),
    ]},
  ],
  grammar: [
    { title: 'Modal verb können', html: `
      <table class="gtable"><tr><td>ich <b>kann</b></td><td>wir können</td></tr><tr><td>du <b>kannst</b></td><td>ihr könnt</td></tr><tr><td>er/sie/es <b>kann</b></td><td>sie/Sie können</td></tr></table>
      <p>⚠ <b>ich</b> and <b>er/sie/es</b> have <b>no ending</b>: <i>ich kann, er kann</i> (never "ich kanne" or "er kannt").</p>
      <p><b>können</b> = ability (<i>Ich kann schwimmen</i>) and permission/requests (<i>Kann ich mal telefonieren?</i>).</p>` },
    { title: 'Satzklammer: the sentence bracket', html: `
      <p>With a modal verb, the modal is in <b>position 2</b>, and the <b>infinitive goes to the very end</b>. Everything else sits inside the bracket.</p>
      <table class="gtable"><tr><th>Pos. 1</th><th>Pos. 2</th><th>middle</th><th>end</th></tr>
      <tr><td>Du</td><td class="verb">kannst</td><td>wirklich super Gitarre</td><td class="verb">spielen</td></tr>
      <tr><td>Ich</td><td class="verb">kann</td><td>ein bisschen Schach</td><td class="verb">spielen</td></tr>
      <tr><td class="verb">Kannst</td><td>du</td><td>das noch einmal</td><td class="verb">sagen?</td></tr>
      <tr><td>Wer</td><td class="verb">kann</td><td>gut</td><td class="verb">kochen?</td></tr></table>
      <p>The same bracket comes back with separable verbs (L10) and the Perfekt (L11–12). Get used to "verb 2 … verb at the end" now.</p>` },
    { title: 'Vowel change: fahren, lesen, treffen', html: `
      <table class="gtable"><tr><th></th><th>fahren</th><th>lesen</th><th>treffen</th><th>sprechen</th></tr>
      <tr><td>ich</td><td>fahre</td><td>lese</td><td>treffe</td><td>spreche</td></tr>
      <tr><td>du</td><td>f<b>ä</b>hrst</td><td>l<b>ie</b>st</td><td>tr<b>i</b>ffst</td><td>spr<b>i</b>chst</td></tr>
      <tr><td>er/sie</td><td>f<b>ä</b>hrt</td><td>l<b>ie</b>st</td><td>tr<b>i</b>fft</td><td>spr<b>i</b>cht</td></tr>
      <tr><td>wir</td><td>fahren</td><td>lesen</td><td>treffen</td><td>sprechen</td></tr></table>
      <p>Only <b>du</b> and <b>er/sie/es</b> change. Note <i>du liest</i> (stem ends in s → only -t).</p>` },
    { title: 'gern + verb · how often', html: `
      <p><b>gern</b> after the verb = you like doing it: <i>Ich koche <b>gern</b>.</i> (I like cooking.) <i>Ich tanze <b>nicht gern</b>.</i></p>
      <p>Frequency scale: <b>nie</b> → fast nie → <b>manchmal</b> → <b>oft</b> → <b>immer</b>. <i>Ich gehe oft ins Kino.</i></p>
      <p><b>Mein Hobby ist</b> Fußball. · <b>Meine Hobbys sind</b> Kochen und Lesen. (Verbs used as nouns are capitalised and neuter: das Kochen.)</p>` },
  ],
  phrases: [
    ['Komplimente machen & sich bedanken', ['Du kannst ja / wirklich / aber toll / super / sehr gut tanzen!', 'Sie können aber toll Ski fahren!', 'Vielen Dank! / Oh, danke! / Danke sehr! / Herzlichen Dank!']],
    ['über Hobbys & Fähigkeiten sprechen', ['Was sind deine Hobbys? – Meine Hobbys sind … und … / Mein Hobby ist …', 'Was machst du in der Freizeit? – Ich … gern. Das macht Spaß.', 'Fährst du gern Ski? – Nein, ich kann nicht Ski fahren.', 'Ich kann (gar) nicht / nicht so gut / ein bisschen / (sehr) gut singen.', 'Wie oft gehst du ins Kino? – Ich gehe oft / manchmal / nie ins Kino.']],
    ['um etwas bitten', ['Kann ich mal telefonieren / hier rauchen / das Auto haben?', 'Ja, klar. / Ja, natürlich. / Ja, gern.', 'Nein, das geht leider nicht. / Nein, tut mir leid.', 'Kannst du das noch einmal sagen, bitte?']],
  ],
  exercises: [
    { type: 'gap', title: 'können', items: [
      'Ich {kann} sehr gut kochen.', 'Du {kannst} wirklich super Gitarre spielen.', 'Er {kann} nicht schwimmen.', '{Könnt} ihr gut tanzen?', 'Wir {können} ein bisschen Schach spielen.', '{Können} Sie Ski fahren?', '{Kann} ich mal telefonieren?', 'Meine Eltern {können} kein Englisch.',
    ]},
    { type: 'order', title: 'Satzklammer: Verb 2 … Infinitiv am Ende', items: [
      { words: ['Du', 'kannst', 'wirklich', 'super', 'Gitarre', 'spielen', '.'], en: 'You can really play the guitar brilliantly.' },
      { words: ['Kannst', 'du', 'gut', 'tanzen', '?'], en: 'Can you dance well?' },
      { words: ['Ich', 'kann', 'ein', 'bisschen', 'Schach', 'spielen', '.'], en: 'I can play a little chess.' },
      { words: ['Sie', 'können', 'aber', 'toll', 'Ski', 'fahren', '!'], en: 'You can really ski brilliantly! (formal)' },
      { words: ['Kann', 'ich', 'hier', 'rauchen', '?'], en: 'Can I smoke here?' },
      { words: ['Kannst', 'du', 'das', 'noch', 'einmal', 'sagen', '?'], en: 'Can you say that again?' },
    ]},
    { type: 'gap', title: 'Vokalwechsel: fahren, lesen, treffen, sprechen', items: [
      '{Fährst} du gern Rad? (fahren)', 'Paula {liest} sehr gern. (lesen)', 'Am Wochenende {triffst} du Freunde, oder? (treffen)', 'Er {fährt} oft Ski. (fahren)', 'Was {liest} du gerade? (lesen)', 'Sie {trifft} ihre Oma im Café. (treffen)', 'Wir {fahren} am Sonntag nach Wien. (fahren)',
    ]},
    { type: 'mc', title: 'Wie reagieren Sie?', items: [
      { q: '„Du kannst wirklich toll singen!"', options: ['Vielen Dank!', 'Bitte schön.', 'Gute Nacht!'], a: 0 },
      { q: '„Kann ich mal telefonieren?" (yes)', options: ['Ja, klar.', 'Nein, danke.', 'Das macht Spaß.'], a: 0 },
      { q: '„Kann ich hier rauchen?" (no)', options: ['Ja, natürlich.', 'Nein, tut mir leid.', 'Gern geschehen.'], a: 1 },
      { q: '„Was sind deine Hobbys?"', options: ['Ich bin Student.', 'Meine Hobbys sind Lesen und Kochen.', 'Ich kann Tennis.'], a: 1 },
      { q: '„Wie oft gehst du ins Kino?" — once a year:', options: ['immer', 'oft', 'fast nie'], a: 2 },
    ]},
    { type: 'sort', title: 'Wie oft? Ordnen Sie (never → always)', buckets: ['nie', 'fast nie', 'manchmal', 'oft', 'immer'], items: [
      ['0×/Jahr', 'nie'], ['1×/Jahr', 'fast nie'], ['1×/Monat', 'manchmal'], ['3×/Woche', 'oft'], ['jeden Tag', 'immer'],
    ]},
    { type: 'dialogue', title: 'Hören: Mein Hobby ist …', lines: [
      ['A', 'Was machst du gern in der Freizeit, Jan?'],
      ['B', 'Ich liebe Musik. Mein Lieblingskomponist ist Johann Sebastian Bach. Ich spiele Klavier, aber nicht so gut.'],
      ['A', 'Und Sport? Fährst du gern Rad?'],
      ['B', 'Nein, nicht so gern. Aber ich gehe oft spazieren. Ich liebe die Natur. Und manchmal gehe ich ins Kino.'],
    ], questions: [
      { q: 'Jans Hobby ist …', options: ['Fußball', 'Musik', 'Kochen'], a: 1 },
      { q: 'Jan spielt Klavier …', options: ['sehr gut', 'nicht so gut', 'gar nicht'], a: 1 },
      { q: 'Wie oft geht Jan ins Kino?', options: ['nie', 'manchmal', 'immer'], a: 1 },
    ]},
    { type: 'speak', title: 'Sprechen: Komplimente machen', prompt: 'Imagine 3 friends: one cooks, one dances, one plays guitar. Make a compliment to each, then answer a compliment yourself. Then say 3 things you can do well and 2 you can\'t.', keywords: ['kannst', 'toll', 'Danke', 'kann', 'nicht'], model: 'Du kannst ja toll kochen! · Du kannst wirklich super tanzen! · Du kannst sehr gut Gitarre spielen! – Oh, danke! · Ich kann gut schwimmen und kochen. Ich kann ein bisschen Gitarre spielen. Ich kann gar nicht Ski fahren und nicht so gut singen.' },
    { type: 'write', title: 'Schreiben: Meine Freizeit', prompt: 'Write 5–6 sentences: your hobbies, what you can do (well / not well), how often you do things.', checklist: ['Meine Hobbys sind …', 'Ich … gern / nicht gern', 'Ich kann … (+ infinitive at the end)', 'nie / manchmal / oft / immer', 'Das macht Spaß.'], model: 'Meine Hobbys sind Musik und Fotografieren. Ich höre jeden Tag Musik. Ich kann ein bisschen Gitarre spielen, aber ich kann nicht singen. Ich gehe oft spazieren und manchmal ins Kino. Ich koche gern. Das macht Spaß!' },
  ],
  drill: [
    { de: 'Du kannst wirklich toll tanzen!', en: 'You can really dance brilliantly!' },
    { de: 'Vielen Dank!', en: 'Thanks a lot!' },
    { de: 'Ich kann gut kochen.', en: 'I can cook well.' },
    { de: 'Ich kann nicht schwimmen.', en: 'I can\'t swim.' },
    { de: 'Kannst du Gitarre spielen?', en: 'Can you play the guitar?' },
    { de: 'Ich kann ein bisschen Schach spielen.', en: 'I can play a little chess.' },
    { de: 'Was sind deine Hobbys?', en: 'What are your hobbies?' },
    { de: 'Mein Hobby ist Fußball.', en: 'My hobby is football.' },
    { de: 'Was machst du in der Freizeit?', en: 'What do you do in your free time?' },
    { de: 'Ich lese gern.', en: 'I like reading.' },
    { de: 'Das macht Spaß.', en: 'That\'s fun.' },
    { de: 'Fährst du gern Rad?', en: 'Do you like cycling?' },
    { de: 'Wie oft gehst du ins Kino?', en: 'How often do you go to the cinema?' },
    { de: 'Ich gehe manchmal ins Kino.', en: 'I sometimes go to the cinema.' },
    { de: 'Kann ich mal telefonieren?', en: 'Can I make a phone call?' },
    { de: 'Ja, klar.', en: 'Yes, sure.' },
    { de: 'Nein, das geht leider nicht.', en: 'No, unfortunately that\'s not possible.' },
    { de: 'Kannst du das noch einmal sagen?', en: 'Can you say that again?' },
  ],
  exam: [
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 3', title: 'Bitten formulieren', prompt: 'Picture cards: a phone · a window · a pen · a coffee. Make a polite request with "Kann ich …?" / "Können Sie …?" for each and react to it.', keywords: ['Kann ich', 'Können Sie', 'bitte', 'klar'], model: 'Kann ich mal telefonieren? – Ja, klar. · Können Sie bitte das Fenster öffnen? – Ja, gern. · Kann ich deinen Kuli haben? – Ja, natürlich. · Kann ich einen Kaffee haben, bitte? – Tut mir leid, wir haben keinen Kaffee.' },
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 2', title: 'Thema „Freizeit"', prompt: 'Cards: Hobby · Sport · Kino · Wochenende. Ask a question for each and answer it.', keywords: ['Was', 'gern', 'Wie oft'], model: 'Was ist dein Hobby? – Mein Hobby ist Lesen. · Machst du gern Sport? – Ja, ich schwimme oft. · Wie oft gehst du ins Kino? – Manchmal. · Was machst du am Wochenende? – Ich treffe Freunde.' },
  ],
});
})();
