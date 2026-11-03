(() => {
DE.addLesson({
  id: 'T1', n: 12.5, module: 4, level: 'A1.1', pages: 'L1–12', plus: true, test: true,
  title: 'Probetest A1.1 (L1–12) – Uni-Test 30.11.',
  topic: 'Mock test in Arbeitsbuch format: Wörter · Strukturen · Kommunikation + 4 skills',
  goals: [
    'Simulate the A1.1 end-of-semester test under time pressure (45–60 min)',
    'Find weak spots: every wrong answer → go back to that lesson\'s tab',
    'Do it once in week 3, once again 2–3 days before the test',
  ],
  vocab: [],
  grammar: [
    { title: 'Grammatikübersicht A1.1 (one page)', html: `
      <table class="gtable"><tr><th>topic</th><th>rule</th><th>example</th><th>L</th></tr>
      <tr><td>present tense</td><td>-e, -st, -t, -en, -t, -en; -t/-d stems + e</td><td>du arbeit<b>e</b>st</td><td>1–2</td></tr>
      <tr><td>vowel change</td><td>du/er only: e→i, e→ie, a→ä</td><td>sprichst, liest, fährt, isst, nimmt</td><td>3,7,9,10</td></tr>
      <tr><td>sein / haben</td><td>bin bist ist sind seid sind · habe hast hat haben habt haben</td><td></td><td>1–2</td></tr>
      <tr><td>word order</td><td>statement/W-question V2 · yes/no V1 · time first → still V2</td><td>Heute <b>habe</b> ich keine Zeit.</td><td>1,3,8</td></tr>
      <tr><td>Satzklammer</td><td>V2 … V-end (modal + inf. · separable prefix · Perfekt participle)</td><td>Ich <b>kann</b> … <b>kommen</b> · Ich <b>rufe</b> dich <b>an</b> · Ich <b>habe</b> … <b>gemacht</b></td><td>7,10,11</td></tr>
      <tr><td>articles</td><td>der/das/die · ein/ein/eine · kein/kein/keine/keine</td><td></td><td>4–5</td></tr>
      <tr><td>accusative</td><td>m only: den / einen / keinen</td><td>Ich brauche <b>einen</b> Laptop.</td><td>6,9</td></tr>
      <tr><td>plural</td><td>-e/¨e · -(e)n · -s · -er/¨er · –/¨</td><td>Stühle, Rechnungen, Handys, Bücher, Kalender</td><td>6</td></tr>
      <tr><td>possessive</td><td>mein/dein, mein<b>e</b> (f + pl)</td><td>meine Eltern</td><td>3</td></tr>
      <tr><td>pronouns for things</td><td>der→er, das→es, die→sie</td><td>Die Lampe … <b>Sie</b> kostet …</td><td>4</td></tr>
      <tr><td>negation</td><td>kein for ein/zero-article nouns, else nicht</td><td>kein Auto · nicht teuer</td><td>2,5</td></tr>
      <tr><td>ja/nein/doch</td><td>doch = yes to a negative question</td><td>Kommst du nicht? – Doch!</td><td>3</td></tr>
      <tr><td>können, mögen, möchten, wissen</td><td>ich/er: kann, mag, möchte, weiß</td><td></td><td>7–9</td></tr>
      <tr><td>time prepositions</td><td>um + clock · am + day/part · in der Nacht · im + month/season · von … bis · ab</td><td></td><td>8,11,12</td></tr>
      <tr><td>Perfekt</td><td>haben/sein + ge…t / ge…en / prefix-ge- / -iert; sein = movement / change</td><td>Ich <b>bin</b> gefahren · Ich <b>habe</b> gegessen</td><td>11–12</td></tr>
      <tr><td>war / hatte</td><td>Präteritum of sein/haben</td><td>Die Party war toll.</td><td>12</td></tr>
      <tr><td>compounds</td><td>last word = gender, first word = stress</td><td>der Kartoffelsalat</td><td>9</td></tr></table>` },
  ],
  phrases: [],
  exercises: [
    { type: 'mc', title: 'Teil 1 · Wörter', items: [
      { q: 'Die Mutter von meinem Vater ist meine …', options: ['Tante', 'Oma', 'Schwester'], a: 1 },
      { q: 'Das Gegenteil von „teuer":', options: ['billig', 'schwer', 'klein'], a: 0 },
      { q: 'Was passt nicht?', options: ['Kuchen', 'Schokolade', 'Salat', 'Eis'], a: 2, explain: 'Salat is not sweet.' },
      { q: 'Was passt nicht?', options: ['Bus', 'Zug', 'Gleis', 'Taxi'], a: 2, explain: 'Gleis is a platform, not a vehicle.' },
      { q: 'Nach dem Winter kommt der …', options: ['Sommer', 'Frühling', 'Herbst'], a: 1 },
      { q: 'Man schwimmt im …', options: ['Museum', 'Schwimmbad', 'Kino'], a: 1 },
      { q: 'Heute ist Sonntag. Gestern war …', options: ['Montag', 'Freitag', 'Samstag'], a: 2 },
      { q: 'Der 1. Monat im Jahr heißt …', options: ['Juni', 'Januar', 'Juli'], a: 1 },
      { q: 'Ein Gegenstand im Büro:', options: ['Drucker', 'Herd', 'Badewanne'], a: 0 },
      { q: 'Die Zeitung ist nicht interessant, sie ist …', options: ['langweilig', 'lecker', 'leicht'], a: 0 },
      { q: '14:30 im Gespräch:', options: ['halb drei', 'halb zwei', 'Viertel nach zwei'], a: 0 },
      { q: 'Kai ist erst zwei Monate alt. Er ist noch ein …', options: ['Enkel', 'Baby', 'Schüler'], a: 1 },
    ]},
    { type: 'gap', title: 'Teil 2 · Strukturen: Verben', items: [
      'Woher {kommst} du? (kommen)', 'Er {spricht} drei Sprachen. (sprechen)', 'Ihr {arbeitet} bei Siemens. (arbeiten)', '{Kannst} du gut kochen? (können)',
      'Was {isst} du gern? (essen)', 'Das {weiß} ich nicht. (wissen)', 'Er {nimmt} den Bus. (nehmen)', '{Magst} du Fisch? (mögen)', 'Ich {möchte} einen Tee. (möchten)', 'Sie {fährt} gern Rad. (fahren)',
    ]},
    { type: 'gap', title: 'Teil 2 · Strukturen: Artikel & Akkusativ', items: [
      'Ich habe {einen} Laptop. (ein)', 'Wir brauchen {keinen} Drucker. (kein)', 'Ich finde {den} Schrank zu teuer. (der)', 'Das ist {keine} Uhr. (kein)', 'Die Lampe ist schön. {Sie} kostet 30 Euro.',
      'Das Bett ist bequem. {Es} ist neu.', 'Das sind {meine} Eltern. (mein)', 'Ich mag {keinen} Kaffee. (kein)',
    ]},
    { type: 'gap', title: 'Teil 2 · Strukturen: Plural', items: ['der Stuhl → die {Stühle}', 'die Rechnung → die {Rechnungen}', 'das Buch → die {Bücher}', 'das Handy → die {Handys}', 'der Schlüssel → die {Schlüssel}', 'der Apfel → die {Äpfel}'] },
    { type: 'gap', title: 'Teil 2 · Strukturen: Perfekt', items: [
      'Ich {habe} gestern lange {geschlafen}. (schlafen)', 'Wir {sind} nach Berlin {gefahren}. (fahren)', '{Hast} du schon {eingekauft}? (einkaufen)', 'Sie {ist} um 7 Uhr {aufgestanden}. (aufstehen)',
      'Er {hat} mit seiner Mutter {telefoniert}. (telefonieren)', 'Wann {bist} du {angekommen}? (ankommen)', 'Was {habt} ihr {gegessen}? (essen)',
    ]},
    { type: 'order', title: 'Teil 2 · Strukturen: Satzbau', items: [
      { words: ['Heute', 'Abend', 'habe', 'ich', 'keine', 'Zeit', '.'], en: 'This evening I have no time.' },
      { words: ['Kannst', 'du', 'mich', 'am', 'Bahnhof', 'abholen', '?'], en: 'Can you pick me up at the station?' },
      { words: ['Der', 'Zug', 'fährt', 'um', '9', 'Uhr', 'ab', '.'], en: 'The train leaves at 9.' },
      { words: ['Am', 'Wochenende', 'bin', 'ich', 'nach', 'Wien', 'gefahren', '.'], en: 'At the weekend I went to Vienna.' },
      { words: ['Ist', 'das', 'nicht', 'deine', 'Schwester', '?'], en: 'Isn\'t that your sister?' },
      { words: ['Ich', 'kann', 'leider', 'nicht', 'kommen', '.'], en: 'Unfortunately I can\'t come.' },
    ]},
    { type: 'mc', title: 'Teil 2 · Strukturen: Präpositionen & Partikeln', items: [
      { q: 'Wir treffen uns ___ 8 Uhr.', options: ['am', 'um', 'im'], a: 1 }, { q: '___ Montag habe ich Deutschkurs.', options: ['Am', 'Um', 'Im'], a: 0 },
      { q: 'Ich habe ___ Juli Geburtstag.', options: ['am', 'um', 'im'], a: 2 }, { q: 'Er arbeitet oft ___ Nacht.', options: ['am', 'in der', 'um'], a: 1 },
      { q: 'Sie arbeitet ___ Ärztin.', options: ['als', 'bei', 'in'], a: 0 }, { q: 'Ich fliege ___ London.', options: ['in', 'nach', 'aus'], a: 1 },
      { q: '„Du kommst nicht mit?" – „___, ich komme mit!"', options: ['Ja', 'Nein', 'Doch'], a: 2 }, { q: 'Das ist ___ teuer.', options: ['kein', 'nicht', 'keine'], a: 1 },
      { q: '___ 9 ___ 17 Uhr arbeite ich.', options: ['Von … bis', 'Um … am', 'Ab … bis'], a: 0 }, { q: 'Wir ___ im Atlantik geschwommen.', options: ['haben', 'sind'], a: 1 },
    ]},
    { type: 'match', title: 'Teil 3 · Kommunikation: Was passt?', pairs: [
      ['Wie geht es Ihnen?', 'Sehr gut, danke. Und Ihnen?'], ['Du kannst toll tanzen!', 'Oh, danke!'], ['Guten Appetit!', 'Danke, gleichfalls!'], ['Hast du am Freitag Zeit?', 'Leider nicht. Ich arbeite.'],
      ['Wie viel kostet der Tisch?', '199 Euro. Ein Sonderangebot.'], ['Brauchen Sie Hilfe?', 'Nein, danke.'], ['Wie schreibt man das?', 'U-H-R.'], ['Wann fährt der Zug ab?', 'Um 12:48 Uhr auf Gleis 10.'],
      ['Kann ich mal telefonieren?', 'Ja, klar.'], ['Wie war die Party?', 'Super! Ich hatte viel Spaß.'],
    ]},
    { type: 'dialogue', title: 'Teil 4 · Hören', twice: true, lines: [
      ['A', 'Hallo Paul, hier ist Annalena. Hast du am Freitag Zeit? Vielleicht können wir ins Kino gehen.'],
      ['B', 'Leider kann ich nicht. Ich arbeite am Freitag. Und am Samstag?'],
      ['A', 'Samstag ist gut. Der Film beginnt um halb neun.'],
      ['B', 'Super. Treffen wir uns um acht am Kino?'],
      ['A', 'Okay, bis Samstag!'],
    ], questions: [
      { q: 'Paul hat am Freitag …', options: ['Zeit', 'keine Zeit', 'Geburtstag'], a: 1 },
      { q: 'Der Film beginnt um …', options: ['8:00', '8:30', '9:30'], a: 1 },
      { q: 'Sie treffen sich …', options: ['am Bahnhof', 'am Kino', 'im Café'], a: 1 },
    ]},
    { type: 'tf', title: 'Teil 5 · Lesen', text: 'Hallo Marion,\nwir haben am Samstag leider keine Zeit. Thomas spielt am Vormittag Tennis und ich treffe um 14 Uhr Anna. Am Abend gehen wir ins Kino. Können wir vielleicht am Sonntag nach Graz fahren? Der Zug fährt um 9:15 Uhr ab und kommt um 11:30 Uhr an. Ich habe schon zwei Fahrkarten gekauft!\nLiebe Grüße\nSabine', items: [
      ['Sabine und Thomas haben am Samstag Zeit.', false], ['Thomas spielt am Samstag Tennis.', true], ['Sabine möchte am Sonntag nach Graz fahren.', true], ['Der Zug kommt um 9:15 Uhr in Graz an.', false], ['Sabine hat die Fahrkarten schon.', true],
    ]},
    { type: 'write', title: 'Teil 6 · Schreiben (~40 Wörter)', prompt: 'Ihre Freundin Lisa hat Sie zu ihrer Geburtstagsparty am Samstag eingeladen. Sie können nicht kommen. Schreiben Sie: Dank für die Einladung · warum Sie nicht kommen können · was Sie am Wochenende gemacht haben (Perfekt) · Vorschlag für ein Treffen.', checklist: ['Liebe Lisa,', 'Danke für die Einladung!', 'Leider kann ich nicht kommen, …', '2+ Perfekt sentences (haben/sein!)', 'a suggestion with day + um … Uhr', 'Liebe Grüße', '~40 words, V2 everywhere'], model: 'Liebe Lisa,\nvielen Dank für die Einladung! Leider kann ich am Samstag nicht kommen. Meine Eltern kommen nach Mannheim. Letztes Wochenende bin ich nach Heidelberg gefahren und habe viel fotografiert. Hast du am Montag Zeit? Wir können um 18 Uhr ins Café gehen.\nLiebe Grüße\nArya' },
    { type: 'speak', title: 'Teil 7 · Sprechen', prompt: '(1) Introduce yourself with all 7 points. (2) Say what you did last weekend (3 sentences, Perfekt). (3) Make an appointment: suggest, react, agree on a time.', keywords: ['heiße', 'komme aus', 'Jahre alt', 'habe', 'bin', 'Zeit', 'um'], model: 'Ich heiße Arya, ich bin 25 Jahre alt und komme aus Indien. Ich wohne in Mannheim. Ich spreche Englisch, Hindi und ein bisschen Deutsch. Ich bin Student. Mein Hobby ist Musik. – Am Wochenende habe ich lange geschlafen. Dann bin ich in die Stadt gefahren und habe eingekauft. Am Abend habe ich Freunde getroffen. – Hast du am Mittwoch Zeit? – Nein, leider nicht. – Und am Donnerstag um vier? – Gute Idee!' },
  ],
  drill: [
    { de: 'Heute Abend habe ich keine Zeit.', en: 'This evening I have no time. (start with the time)' },
    { de: 'Ich habe keinen Laptop.', en: 'I don\'t have a laptop.' },
    { de: 'Ich kann leider nicht kommen.', en: 'Unfortunately I can\'t come.' },
    { de: 'Kannst du mich abholen?', en: 'Can you pick me up?' },
    { de: 'Ich bin nach Hamburg gefahren.', en: 'I went to Hamburg.' },
    { de: 'Wir haben Pizza gegessen.', en: 'We ate pizza.' },
    { de: 'Er spricht sehr gut Englisch.', en: 'He speaks English very well.' },
    { de: 'Die Lampe kostet neunzehn Euro.', en: 'The lamp costs nineteen euros.' },
    { de: 'Sie ist sehr schön.', en: 'It is very beautiful. (the lamp)' },
    { de: 'Ich mag keinen Fisch.', en: 'I don\'t like fish.' },
    { de: 'Der Zug kommt um halb zehn an.', en: 'The train arrives at half past nine.' },
    { de: 'Wann hast du Geburtstag?', en: 'When is your birthday?' },
    { de: 'Doch, das ist meine Schwester!', en: 'Yes it is, that\'s my sister! (contradicting)' },
    { de: 'Ich habe im Mai Geburtstag.', en: 'My birthday is in May.' },
    { de: 'Was hast du am Wochenende gemacht?', en: 'What did you do at the weekend?' },
  ],
  exam: [],
});
})();
