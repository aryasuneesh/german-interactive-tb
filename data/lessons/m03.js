(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'M3', n: 9.5, module: 3, level: 'A1.1', pages: '53–56', plus: true,
  title: 'Modul 3 Plus – Wiederholung L7–9',
  topic: 'Lesemagazin · Film-Stationen · Projekt Landeskunde · Ausklang',
  goals: [
    'Read a weekend blog with invitations (Anja Ebner)',
    'Understand a short report about a hobby and a restaurant',
    'Read a simple recipe (Labskaus) and write your own',
    'Use können / möchten / mögen + time expressions in one text',
    'Mixed review test of L7–9',
  ],
  vocab: [
    { group: 'Lesemagazin & Projekt', items: [
      N('m', 'Blog', 'Blogs', 'blog'), N('n', 'Musikfrühstück', 'Musikfrühstücke', 'breakfast with live music'), N('n', 'Seebad', 'Seebäder', 'lido, lake bath'),
      V('grillen', 'to barbecue'), P('Beachvolleyball spielen', 'to play beach volleyball'), P('im Internet surfen', 'to surf the internet'), N('f', 'Flöte', 'Flöten', 'flute'), N('n', 'Cello', 'Cellos', 'cello'),
      N('n', 'Rezept', 'Rezepte', 'recipe'), N('f', 'Spezialität', 'Spezialitäten', 'speciality'), N('f', 'Zutat', 'Zutaten', 'ingredient'), N('n', 'Spiegelei', 'Spiegeleier', 'fried egg'),
      N('f', 'Gewürzgurke', 'Gewürzgurken', 'pickled gherkin'), N('m', 'Pfeffer', '', 'pepper'), W('frisch', 'fresh'), W('traditionell', 'traditional'), N('m', 'Gasthof', 'Gasthöfe', 'inn, traditional restaurant'),
      N('pl', 'Pommes frites', undefined, 'chips, French fries'), N('m', 'Erdäpfelsalat', '', 'potato salad (A)'), N('n', 'Gulasch', '', 'goulash'), N('m', 'Knödel', 'Knödel', 'dumpling'),
    ]},
  ],
  grammar: [
    { title: 'Review: what you must know cold after Modul 3', html: `
      <table class="gtable"><tr><th>topic</th><th>key forms</th></tr>
      <tr><td>können + Satzklammer</td><td>Ich <b>kann</b> gut <b>tanzen</b>. · <b>Kannst</b> du mal <b>kommen</b>?</td></tr>
      <tr><td>vowel change</td><td>fährst, liest, triffst, isst, siehst</td></tr>
      <tr><td>inversion</td><td>Heute Nachmittag <b>gehe</b> ich ins Museum.</td></tr>
      <tr><td>time</td><td>um 4 Uhr · am Montag · am Abend · in der Nacht · halb fünf = 4:30</td></tr>
      <tr><td>wissen</td><td>ich weiß, du weißt, er weiß</td></tr>
      <tr><td>mögen / möchten</td><td>ich mag, du magst · ich möchte, du möchtest</td></tr>
      <tr><td>compounds</td><td>der Käse + das Brot = <b>das</b> Käsebrot</td></tr>
      <tr><td>at the table</td><td>Guten Appetit! – Danke, gleichfalls! · Möchten Sie noch …? – Nein, danke!</td></tr></table>` },
  ],
  phrases: [],
  exercises: [
    { type: 'tf', title: 'Lesemagazin: Anja Ebners Blog', text: 'Samstag, 29. Mai, 14:30 Uhr: Möchtest Du grillen, schwimmen und Beachvolleyball spielen? Marlene, Gis, Vera und ich machen heute einen Frauen-Ausflug. Wir fahren mit dem Rad zum Seebad. Hast Du Zeit? Warum kommst Du nicht auch?\nSonntag, 30. Mai, 10 Uhr: Was machst Du am Sonntag um 10 Uhr? Schlafen? Im Internet surfen? Wir machen wieder ein „Musikfrühstück" bei uns im Garten. Andi (Flöte) und ich (Cello) machen Musik (Jazz). Es gibt Brötchen, Marmelade, Honig, Wurst, Käse, Obst, Kaffee, Tee und Orangensaft. Bitte melden!\nDonnerstag, 3. Juni, 20 Uhr: Einmal im Jahr kommt mein absoluter Lieblingsfilm im Kino: „Haben und Nichthaben" mit Humphrey Bogart und Lauren Bacall. Magst Du ihn auch? Dann sehen wir uns um 20 Uhr im Kino!', items: [
      ['Der Ausflug am Samstag ist nur für Frauen.', true], ['Sie fahren mit dem Auto zum Seebad.', false], ['Anja spielt Cello.', true], ['Beim Musikfrühstück gibt es keine Getränke.', false], ['Der Film läuft am Donnerstag um 20 Uhr.', true],
    ]},
    { type: 'match', title: 'Lesemagazin: Welche Überschrift passt?', pairs: [['Samstag, 29. Mai', 'Nur für Frauen!'], ['Sonntag, 30. Mai', 'Frühstück mit Musik'], ['Donnerstag, 3. Juni', 'Endlich wieder Kino!']] },
    { type: 'tf', title: 'Film-Stationen: Mein Hobby ist Inlineskaten', text: 'Lilian ist 37 Jahre alt und wohnt in Wien. Sie ist Friseurin von Beruf. In der Freizeit skatet Lilian sehr gern. Sie skatet schon vier Jahre. Sie übt sehr oft. Skaten macht ihr viel Spaß.', items: [
      ['Lilian wohnt in Wien.', true], ['Lilian ist Lehrerin.', false], ['Lilian skatet nicht gern.', false], ['Skaten macht ihr Spaß.', true],
    ]},
    { type: 'tf', title: 'Projekt Landeskunde: Labskaus – eine norddeutsche Spezialität', text: 'Labskaus kommt aus Norddeutschland und ist ein traditionelles Seefahreressen. Früher war Labskaus ein Resteessen. Resteessen bedeutet: Was hat man zu Hause? Daraus kocht man dann etwas. Man kauft nicht extra ein. Heute macht man Labskaus aber nicht mehr aus Resten. Man verwendet frische Zutaten.\nSie brauchen: 500 g Kartoffeln, 350 g Corned Beef, Zwiebeln, Salz, Pfeffer, Spiegelei, Gewürzgurke.\nStampfen Sie Corned Beef und Kartoffeln und würzen Sie mit Salz und Pfeffer. Dazu essen Sie Spiegelei und Gewürzgurke.', items: [
      ['Labskaus kommt aus Süddeutschland.', false], ['Heute macht man Labskaus aus frischen Zutaten.', true], ['Für Labskaus brauchen Sie keine Kartoffeln.', false], ['Zum Labskaus isst man ein Spiegelei.', true],
    ]},
    { type: 'write', title: 'Projekt: Ein typisches Gericht', prompt: 'Choose a typical dish from Germany, Austria or Switzerland (or your country). Name, origin, what you need.', checklist: ['Mein Gericht heißt …', 'Es kommt aus …', 'Du brauchst: … (accusative / no article)', 'one sentence about how/when you eat it'], model: 'Mein Gericht heißt Käsefondue. Es kommt aus der Schweiz. Du brauchst: Käse, Wein und Brot. Man isst es oft im Winter mit Freunden.' },
    { type: 'gap', title: 'Ausklang: Heute ist der Tag!', items: [
      'Tina, wann {kann} ich dich heute sehen? (können)', 'Tina, {möchtest} du spazieren gehen? (möchten)', 'Tina, was {machst} du heute Abend? (machen)', 'Ich {möchte} dich heute Abend sehen. (möchten)', 'Wir {können} essen, {können} trinken. (können)', 'Oh, Tina! Ich {weiß} es ganz genau: Heute ist der Tag! (wissen)',
    ]},
    { type: 'mc', title: 'Test L7–9 (gemischt)', items: [
      { q: 'Er ___ sehr gut Gitarre spielen.', options: ['kannt', 'kann', 'können'], a: 1 }, { q: 'Correct word order:', options: ['Heute ich habe keine Zeit.', 'Heute habe ich keine Zeit.', 'Heute habe keine Zeit ich.'], a: 1 },
      { q: '16:30 im Gespräch:', options: ['halb fünf', 'halb vier', 'Viertel nach vier'], a: 0 }, { q: '___ Wochenende schlafe ich lange.', options: ['Um', 'Am', 'Im'], a: 1 },
      { q: '___ du Fisch? (mögen)', options: ['Magst', 'Möchtest', 'Mögst'], a: 0 }, { q: 'Ich möchte ___ Kaffee.', options: ['ein', 'einen', 'eine'], a: 1 },
      { q: 'der Apfel + der Kuchen = ___ Apfelkuchen', options: ['das', 'der', 'die'], a: 1 }, { q: '„Guten Appetit!" – „…"', options: ['Bitte sehr!', 'Danke, gleichfalls!', 'Ja, gern.'], a: 1 },
      { q: 'Was ___ du gern? (lesen)', options: ['lest', 'liest', 'liesst'], a: 1 }, { q: 'Das ___ ich nicht. (wissen)', options: ['weiß', 'wisse', 'weißt'], a: 0 },
      { q: 'Du kannst toll tanzen! – …', options: ['Gleichfalls!', 'Vielen Dank!', 'Bitte sehr!'], a: 1 }, { q: 'Er ___ immer ein Brötchen. (essen)', options: ['esst', 'isst', 'eßt'], a: 1 },
    ]},
  ],
  drill: [
    { de: 'Möchtest du grillen und schwimmen?', en: 'Would you like to barbecue and swim?' },
    { de: 'Warum kommst du nicht auch?', en: 'Why don\'t you come too?' },
    { de: 'Wir fahren mit dem Rad.', en: 'We\'re going by bike.' },
    { de: 'Es gibt Brötchen und Kaffee.', en: 'There are rolls and coffee.' },
    { de: 'Magst du den Film auch?', en: 'Do you like the film too?' },
    { de: 'Mein Gericht kommt aus der Schweiz.', en: 'My dish comes from Switzerland.' },
  ],
  exam: [],
});
})();
