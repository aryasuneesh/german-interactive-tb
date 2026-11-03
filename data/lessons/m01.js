(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'M1', n: 3.5, module: 1, level: 'A1.1', pages: '21–24', plus: true,
  title: 'Modul 1 Plus – Wiederholung L1–3',
  topic: 'Lesemagazin · Film-Stationen · Projekt Landeskunde · Ausklang',
  goals: [
    'Read short personal texts and correct false statements',
    'Recognise regional greetings in Germany, Austria and Switzerland',
    'Read a family text and fill in a family tree',
    'Name the neighbouring countries of Germany',
    'Mixed review test of L1–3',
  ],
  vocab: [
    { group: 'Regionale Grüße (Film-Stationen)', items: [
      P('Grüß Gott!', 'Hello (Bavaria, Austria)'), P('Servus!', 'Hi / Bye (Bavaria, Austria)'),
      P('Moin!', 'Hi (North Germany)'), P('Grüezi!', 'Hello (Switzerland, formal)'),
      P('Auf Wiederschauen!', 'Goodbye (Bavaria, Austria)'), P('Uf Wiederluege!', 'Goodbye (Swiss German)'),
    ]},
    { group: 'Nachbarländer (Ausklang)', items: [
      W('Belgien', 'Belgium'), W('Dänemark', 'Denmark'), W('Liechtenstein', 'Liechtenstein'), W('Luxemburg', 'Luxembourg'),
      W('die Niederlande (pl.)', 'the Netherlands'), W('Polen', 'Poland'), W('Tschechien', 'Czechia'),
      W('die Slowakei', 'Slovakia'), W('Slowenien', 'Slovenia'), W('Ungarn', 'Hungary'),
    ]},
    { group: 'Lesemagazin', items: [
      N('n', 'Hobby', 'Hobbys', 'hobby', 'Meine Hobbys sind Kochen und Musik.'),
      N('n', 'Sternzeichen', 'Sternzeichen', 'star sign'),
      W('zurzeit', 'at the moment', 'Er lebt zurzeit in Spanien.'),
      N('m', 'Stammbaum', 'Stammbäume', 'family tree'),
      W('geboren', 'born', 'Sie ist 1973 in Bergisch Gladbach geboren.'),
      W('bekannt', 'famous, well-known'),
    ]},
  ],
  grammar: [
    { title: 'Review: what you must know cold after Modul 1', html: `
      <table class="gtable"><tr><th>topic</th><th>key forms</th></tr>
      <tr><td>sein</td><td>bin, bist, ist, sind, seid, sind</td></tr>
      <tr><td>haben</td><td>habe, hast, hat, haben, habt, haben</td></tr>
      <tr><td>regular endings</td><td>-e, -st, -t, -en, -t, -en (arbeit<b>e</b>st, arbeit<b>e</b>t)</td></tr>
      <tr><td>sprechen</td><td>du spr<b>i</b>chst, er spr<b>i</b>cht</td></tr>
      <tr><td>word order</td><td>statement & W-question: verb pos. 2 · yes/no question: verb pos. 1</td></tr>
      <tr><td>ja / nein / doch</td><td>doch = yes after a negative question</td></tr>
      <tr><td>mein/dein</td><td>mein Vater, mein Kind, mein<b>e</b> Mutter, mein<b>e</b> Eltern</td></tr>
      <tr><td>nicht</td><td>Wir sind <b>nicht</b> verheiratet.</td></tr>
      <tr><td>als / bei / in</td><td>als Ärztin · bei Siemens · in Köln</td></tr></table>` },
  ],
  phrases: [],
  exercises: [
    { type: 'tf', title: 'Lesemagazin: Das bin ich', text: 'Ich heiße Paco Rodriguez, ich bin 23 Jahre alt und komme aus Mexiko. Ich wohne in München und studiere Biochemie. Ich bin nicht verheiratet. Meine Hobbys sind Fußball und Fotografieren. Das ist mein Bruder Miguel. Er ist 31 und lebt in den USA. Er ist Ingenieur und arbeitet in Palo Alto. Miguel ist verheiratet und hat ein Kind. Seine Frau Patricia arbeitet als Krankenschwester.', items: [
      ['Paco kommt aus Spanien.', false], ['Paco studiert in München.', true], ['Paco ist verheiratet.', false], ['Miguel lebt in den USA.', true], ['Miguel hat zwei Kinder.', false], ['Patricia ist Verkäuferin.', false],
    ]},
    { type: 'tf', title: 'Lesemagazin: Nicole', text: 'Ich bin Nicole und komme aus Österreich, aus Wien. Zurzeit lebe und studiere ich aber in München. Ich bin nicht verheiratet. Meine Hobbys sind Kochen, Musik machen und Singen. Das ist mein Bruder Florian. Er ist 24 und lebt zurzeit in Spanien. Er spricht vier Fremdsprachen perfekt: Englisch, Französisch, Spanisch und Italienisch.', items: [
      ['Nicole kommt aus Graz.', false], ['Nicole studiert in München.', true], ['Florian lebt in Spanien.', true], ['Florian spricht zwei Fremdsprachen.', false],
    ]},
    { type: 'match', title: 'Film-Stationen: Wo sagt man das?', pairs: [
      ['Grüß Gott! (formal hello)', 'Bayern / Österreich'], ['Moin!', 'Norddeutschland'], ['Grüezi!', 'die Schweiz'], ['Guten Tag!', 'überall (everywhere)'],
    ]},
    { type: 'form', title: 'Projekt Landeskunde: Stammbaum ergänzen', text: 'Lena Brandt ist die Tochter von Ute und Klaus Brandt und kommt aus Deutschland. Sie ist Moderatorin und wohnt in Hamburg. Ihr Vater Klaus ist Ingenieur, ihre Mutter Ute ist Friseurin. Lena ist mit Tom verheiratet. Tom ist Sänger und kommt aus London. Sie haben zwei Kinder: Mia und Ben.', fields: [
      ['Mutter (Name)', 'Ute'], ['Vater: Beruf', 'Ingenieur'], ['Lena: Beruf', 'Moderatorin'], ['Lena: Wohnort', 'Hamburg'], ['Mann (Name)', 'Tom'], ['Toms Herkunft', 'London|England|Großbritannien'], ['Kinder (Anzahl)', '2|zwei'],
    ]},
    { type: 'mc', title: 'Ausklang: Nachbarländer', items: [
      { q: 'Germany\'s neighbour to the north:', options: ['Dänemark', 'Polen', 'Ungarn'], a: 0 },
      { q: 'Which is NOT a neighbour of Germany?', options: ['Belgien', 'Ungarn', 'Tschechien', 'Luxemburg'], a: 1 },
      { q: 'In Liechtenstein spricht man …', options: ['Französisch', 'Deutsch', 'Italienisch'], a: 1 },
      { q: 'Die Schweiz hat vier Sprachen: Deutsch, Französisch, Italienisch und …', options: ['Rätoromanisch', 'Niederländisch', 'Englisch'], a: 0 },
    ]},
    { type: 'mc', title: 'Test L1–3 (gemischt)', items: [
      { q: 'Woher ___ ihr?', options: ['kommt', 'kommen', 'kommst'], a: 0 },
      { q: '___ du Kinder?', options: ['Hat', 'Hast', 'Habt'], a: 1 },
      { q: 'Er ___ Französisch.', options: ['sprecht', 'sprichst', 'spricht'], a: 2 },
      { q: 'Das ist ___ Bruder.', options: ['meine', 'mein', 'meinen'], a: 1 },
      { q: '„Ist das nicht dein Vater?" – „___, das ist mein Vater."', options: ['Ja', 'Doch', 'Nein'], a: 1 },
      { q: 'Ich arbeite ___ Lehrerin.', options: ['bei', 'als', 'in'], a: 1 },
      { q: 'Wir sind ___ verheiratet.', options: ['kein', 'nicht', 'keine'], a: 1 },
      { q: 'Wie ___ es Ihnen?', options: ['geht', 'gehen', 'ist'], a: 0 },
      { q: 'Correct word order:', options: ['Woher du kommst?', 'Woher kommst du?', 'Kommst woher du?'], a: 1 },
      { q: '58 = ?', options: ['fünfzigacht', 'achtundfünfzig', 'fünfundachtzig'], a: 1 },
      { q: 'Ihr ___ in Berlin. (arbeiten)', options: ['arbeitet', 'arbeitt', 'arbeiten'], a: 0 },
      { q: 'Sie kommt aus ___ Türkei.', options: ['—', 'die', 'der'], a: 2 },
    ]},
    { type: 'write', title: 'Schreiben: Sie und ein Familienmitglied', prompt: 'Like the Lesemagazin: write about yourself (6 sentences) and one family member (4 sentences).', checklist: ['Name, age, origin, residence', 'Job / studies', 'Marital status', 'Hobbys (Meine Hobbys sind …)', 'Family member with mein/meine', 'Languages'], model: 'Ich heiße Arya und bin 25 Jahre alt. Ich komme aus Indien und wohne in Deutschland. Ich studiere Informatik. Ich bin nicht verheiratet. Meine Hobbys sind Musik und Kochen. Das ist meine Schwester. Sie heißt Diya. Sie ist 22 und studiert Medizin. Sie spricht vier Sprachen.' },
  ],
  drill: [
    { de: 'Grüß Gott!', en: 'Hello! (in Bavaria or Austria)' },
    { de: 'Meine Hobbys sind Musik und Kochen.', en: 'My hobbies are music and cooking.' },
    { de: 'Er lebt zurzeit in Spanien.', en: 'He is currently living in Spain.' },
    { de: 'Sie ist nicht verheiratet.', en: 'She is not married.' },
    { de: 'Er spricht vier Fremdsprachen.', en: 'He speaks four foreign languages.' },
    { de: 'Habt ihr Kinder?', en: 'Do you (all) have children?' },
    { de: 'Seid ihr verheiratet?', en: 'Are you (all) married?' },
  ],
  exam: [
    { type: 'tf', exam: 'Start Deutsch 1 · Lesen Teil 1', title: 'Kurze E-Mail – richtig oder falsch?', text: 'Liebe Anna,\nich bin jetzt in Köln! Ich wohne bei meiner Tante Ulla. Sie ist Ärztin und hat zwei Kinder, Max und Sophie. Max ist 12, Sophie ist 8. Mein Kurs ist super. Wir sind 14 Studenten aus 9 Ländern. Mein Lehrer heißt Herr Kraus, er kommt aus Bonn.\nViele Grüße\nMette', items: [
      ['Mette wohnt bei ihrer Tante.', true], ['Ulla hat drei Kinder.', false], ['Im Kurs sind 14 Studenten.', true], ['Herr Kraus kommt aus Köln.', false], ['Sophie ist acht Jahre alt.', true],
    ]},
  ],
});
})();
