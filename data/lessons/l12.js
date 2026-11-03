(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L12', n: 12, module: 4, level: 'A1.1', pages: '65–68',
  title: 'Was ist denn hier passiert?',
  topic: 'Feste & Reisen – months, seasons, Perfekt with sein, war/hatte',
  goals: [
    'Name the months and seasons; say years and dates of birthdays',
    'Talk about festivals and trips in the past',
    'Use the Perfekt with sein (movement and change)',
    'Choose haben or sein correctly',
    'Use war / hatte, and aus / in / nach with places',
  ],
  vocab: [
    { group: 'Monate & Jahreszeiten', items: [
      N('m', 'Januar', '', 'January (A: der Jänner)'), N('m', 'Februar', '', 'February'), N('m', 'März', '', 'March'), N('m', 'April', '', 'April'),
      N('m', 'Mai', '', 'May'), N('m', 'Juni', '', 'June'), N('m', 'Juli', '', 'July'), N('m', 'August', '', 'August'),
      N('m', 'September', '', 'September'), N('m', 'Oktober', '', 'October'), N('m', 'November', '', 'November'), N('m', 'Dezember', '', 'December'),
      N('m', 'Frühling', 'Frühlinge', 'spring'), N('m', 'Sommer', 'Sommer', 'summer'), N('m', 'Herbst', 'Herbste', 'autumn'), N('m', 'Winter', 'Winter', 'winter'),
      N('f', 'Jahreszeit', 'Jahreszeiten', 'season'), W('im Januar / im Sommer', 'in January / in summer'),
    ]},
    { group: 'Feste & Feiern', items: [
      N('n', 'Fest', 'Feste', 'festival, celebration'), N('f', 'Feier', 'Feiern', 'party, celebration'), N('f', 'Hochzeit', 'Hochzeiten', 'wedding'),
      N('m', 'Geburtstag', 'Geburtstage', 'birthday'), N('m', 'Karneval', '', 'carnival (Fasching, Fasnacht)'), N('n', 'Silvester', '', 'New Year\'s Eve'),
      N('n', 'Neujahr', '', 'New Year\'s Day'), N('n', 'Weihnachten', '', 'Christmas'), N('n', 'Ostern', '', 'Easter'), N('n', 'Festival', 'Festivals', 'festival (music)'),
      N('pl', 'Leute', undefined, 'people'), N('f', 'Person', 'Personen', 'person'), N('n', 'Erlebnis', 'Erlebnisse', 'experience'), N('m', 'Besucher', 'Besucher', 'visitor'),
      P('Herzlichen Glückwunsch zum Geburtstag!', 'Happy birthday!'), P('Frohes neues Jahr!', 'Happy New Year!'), P('Frohe Weihnachten!', 'Merry Christmas!'),
    ]},
    { group: 'Verben', items: [
      V('feiern', 'to celebrate → hat gefeiert'), V('dauern', 'to last → hat gedauert', 'Das Fest dauert drei Tage.'), V('gefallen', 'to please (es gefällt mir) → hat gefallen', 'Wie hat es dir gefallen?'),
      V('anfangen', 'to begin (fängt an) → hat angefangen'), V('aufhören', 'to stop → hat aufgehört'), V('passieren', 'to happen → ist passiert'),
      V('gehen', 'to go → ist gegangen'), V('fahren', 'to go, drive → ist gefahren'), V('fliegen', 'to fly → ist geflogen'), V('kommen', 'to come → ist gekommen'),
      V('ankommen', 'to arrive → ist angekommen'), V('abfahren', 'to depart → ist abgefahren'), V('umsteigen', 'to change → ist umgestiegen'), V('aufstehen', 'to get up → ist aufgestanden'),
      V('schwimmen', 'to swim → ist geschwommen'), V('springen', 'to jump → ist gesprungen'), V('bleiben', 'to stay → ist geblieben'), V('sein', 'to be → ist gewesen (usually: war)'),
      V('geben', 'to give; es gibt = there is/are (gibt) → hat gegeben', 'Es gibt viele Feste.'), V('studieren', 'to study → hat studiert'),
    ]},
    { group: 'Andere Wörter', items: [
      W('war / hatte', 'was / had (Präteritum)', 'Die Party war toll. Ich hatte viel Spaß.'), W('seit', 'since, for', 'seit 15 Jahren'), W('ungefähr', 'about, approximately'),
      W('dieses Jahr', 'this year'), W('jedes Jahr', 'every year'), W('aus / in / nach', 'from / in / to (cities, countries)'),
    ]},
  ],
  grammar: [
    { title: 'Perfekt with sein', html: `
      <p>Verbs of <b>movement from A to B</b> and <b>change of state</b> form the Perfekt with <b>sein</b>. Everything else uses haben.</p>
      <table class="gtable"><tr><th>Pos. 1</th><th>Pos. 2</th><th>middle</th><th>end</th></tr>
      <tr><td>Marc</td><td class="verb">ist</td><td>nach New York</td><td class="verb">geflogen.</td></tr>
      <tr><td>Ich</td><td class="verb">bin</td><td>mit Daniel in ein Konzert</td><td class="verb">gegangen.</td></tr>
      <tr><td class="verb">Seid</td><td>ihr schon einmal nach Zürich</td><td></td><td class="verb">gefahren?</td></tr>
      <tr><td>Was</td><td class="verb">ist</td><td>denn hier</td><td class="verb">passiert?</td></tr></table>
      <p><b>sein</b>-verbs at A1: gehen, fahren, fliegen, kommen, ankommen, abfahren, einsteigen, aussteigen, umsteigen, laufen, schwimmen, springen, aufstehen, passieren, bleiben, sein (gewesen).</p>
      <p>Test: does the subject <b>move from one place to another</b> or <b>change state</b>? → sein. <i>Ich bin geschwommen</i> (moved through water). <i>Ich habe gegessen</i> (no movement) → haben.</p>` },
    { title: 'haben or sein? Side by side', html: `
      <table class="gtable"><tr><th>haben</th><th>sein</th></tr>
      <tr><td>Ich habe gefeiert / getanzt / gegessen.</td><td>Ich bin gegangen / gefahren / geflogen.</td></tr>
      <tr><td>Wir haben Freunde getroffen.</td><td>Wir sind in eine Bar gegangen.</td></tr>
      <tr><td>Sie hat eingekauft.</td><td>Sie ist abgefahren / angekommen.</td></tr>
      <tr><td>Er hat lange geschlafen.</td><td>Er ist um 7 Uhr aufgestanden.</td></tr></table>` },
    { title: 'war and hatte (Präteritum of sein / haben)', html: `
      <p>For <b>sein</b> and <b>haben</b>, Germans use the simple past (Präteritum) even in speech:</p>
      <table class="gtable"><tr><th></th><th>sein</th><th>haben</th></tr>
      <tr><td>ich</td><td>war</td><td>hatte</td></tr><tr><td>du</td><td>warst</td><td>hattest</td></tr><tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr>
      <tr><td>wir</td><td>waren</td><td>hatten</td></tr><tr><td>ihr</td><td>wart</td><td>hattet</td></tr><tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr></table>
      <p><i>Wie war die Party? – Schön. Ich hatte viel Spaß.</i></p>` },
    { title: 'im + month/season · years · aus/in/nach', html: `
      <ul><li><b>im</b> Mai, <b>im</b> Sommer, <b>im</b> Winter (in dem → im)</li>
      <li>Years: <b>1789</b> = siebzehnhundertneunundachtzig · <b>1980</b> = neunzehnhundertachtzig · <b>2001</b> = zweitausendeins · <b>2026</b> = zweitausendsechsundzwanzig. Say "<i>2026</i>" or "<i>im Jahr 2026</i>", never <s>in 2026</s>.</li>
      <li>Dates: <i>Ich habe am 26.04. Geburtstag</i> (am sechsundzwanzigsten April). Ordinals come properly in A1.2.</li>
      <li><b>aus</b> = from (origin): aus Paris · <b>in</b> = in (location): in Berlin · <b>nach</b> = to (cities/countries without article): nach Genf, nach Deutschland. With article countries: <i>in die Schweiz</i> (to), <i>in der Schweiz</i> (in), <i>aus der Schweiz</i>.</li></ul>` },
  ],
  phrases: [
    ['über Reisen sprechen', ['Letztes Jahr war ich in … / bin ich nach … gefahren.', 'Dieses Jahr fahre ich wieder nach …', 'Wie hat es dir gefallen? – Es war super / toll / langweilig.']],
    ['über Feste sprechen', ['Das Oktoberfest ist jedes Jahr im Herbst in München.', 'Es dauert ungefähr zwei Wochen.', 'Es gibt viele nette Leute und gute Musik.', 'Wann hast du Geburtstag? – Im Juni. / Am 26. April.', 'Herzlichen Glückwunsch!']],
  ],
  exercises: [
    { type: 'gap', title: 'sein im Perfekt', items: [
      'Marc {ist} nach New York geflogen.', 'Ich {bin} mit Daniel in ein Konzert gegangen.', '{Seid} ihr schon einmal nach Zürich gefahren?',
      'Oksana und Marijana {sind} am Montag nicht in den Deutschkurs gekommen.', '{Bist} du nach Hamburg gefahren oder geflogen?', 'Was {ist} denn hier passiert?',
    ]},
    { type: 'mc', title: 'haben oder sein?', items: [
      { q: 'Ich ___ am Wochenende meinen Geburtstag gefeiert.', options: ['habe', 'bin'], a: 0 },
      { q: 'Meine Freundin aus Wien ___ auch gekommen.', options: ['hat', 'ist'], a: 1 },
      { q: 'Am Abend ___ wir in eine Bar gegangen.', options: ['haben', 'sind'], a: 1 },
      { q: 'Wir ___ Freunde getroffen.', options: ['haben', 'sind'], a: 0 },
      { q: 'Später in der Nacht ___ wir auch getanzt.', options: ['haben', 'sind'], a: 0 },
      { q: 'Heute ___ meine Freundin leider wieder abgefahren.', options: ['hat', 'ist'], a: 1 },
      { q: 'Ich ___ im Atlantik geschwommen.', options: ['habe', 'bin'], a: 1 },
      { q: 'Er ___ um 6 Uhr aufgestanden.', options: ['hat', 'ist'], a: 1 },
      { q: 'Wie oft ___ du umgestiegen?', options: ['hast', 'bist'], a: 1 },
    ]},
    { type: 'gap', title: 'Partizip + Hilfsverb', items: [
      'Isabella und Tom {sind} {gekommen}. (kommen)', 'Wir {haben} zusammen {gekocht}. (kochen)', 'Später {sind} wir noch in die Disco {gegangen}. (gehen)',
      'Was {habt} ihr gestern {gemacht}? (machen)', 'Wir {sind} in die Stadt {gefahren}. (fahren)', 'Ich {bin} in Hamburg {umgestiegen}. (umsteigen)',
    ]},
    { type: 'order', title: 'Schreiben Sie im Perfekt', items: [
      { words: ['Lucia', 'ist', 'nach', 'Lübeck', 'gekommen', '.'], en: 'Lucia came to Lübeck.' },
      { words: ['Wir', 'sind', 'im', 'Juli', 'nach', 'Hamburg', 'gefahren', '.'], en: 'We went to Hamburg in July.' },
      { words: ['Der', 'Zug', 'ist', 'um', '12:30', 'Uhr', 'abgefahren', '.'], en: 'The train left at 12:30.' },
      { words: ['Ich', 'bin', 'mit', 'Carla', 'ins', 'Kino', 'gegangen', '.'], en: 'I went to the cinema with Carla.' },
    ]},
    { type: 'gap', title: 'war oder hatte?', items: [
      'Heute {war} ich im Kino. – Und wie {war} der Film?', 'Hast du eingekauft? – Nein, ich {hatte} kein Geld.', 'Wie {war} die Party? – Schön. Ich {hatte} viel Spaß.', 'Gestern {waren} wir in Köln.', '{Warst} du schon einmal in Wien?', 'Ihr {hattet} keine Zeit, oder?',
    ]},
    { type: 'match', title: 'Monate und Jahreszeiten', pairs: [
      ['Dezember, Januar, Februar', 'der Winter'], ['März, April, Mai', 'der Frühling'], ['Juni, Juli, August', 'der Sommer'], ['September, Oktober, November', 'der Herbst'],
    ]},
    { type: 'listen', title: 'Jahreszahlen: Schreiben Sie die Zahl.', numbers: true, items: ['1789', '2001', '1980', '2026', '1966', '1255'] },
    { type: 'mc', title: 'aus, in oder nach?', items: [
      { q: 'Monique und Jules leben zusammen ___ Berlin.', options: ['aus', 'in', 'nach'], a: 1 },
      { q: 'Sie kommt ___ der Schweiz.', options: ['aus', 'in', 'nach'], a: 0 },
      { q: 'Letzten Monat ist sie ___ Genf geflogen.', options: ['aus', 'in', 'nach'], a: 2 },
      { q: 'Antoine ist im September ___ Deutschland gekommen.', options: ['aus', 'in', 'nach'], a: 2 },
      { q: 'Er kommt ___ Paris.', options: ['aus', 'in', 'nach'], a: 0 },
    ]},
    { type: 'tf', title: 'Lesen: Chiemsee Reggae Summer', text: 'nicky1980: Hallo Leute! Ich komme im Sommer nach Deutschland. Wo gibt es ein gutes Musikfestival?\nsunsammy: Es gibt viele. Ein Fest heißt „Chiemsee Reggae Summer". Es ist sehr groß, es gibt ungefähr 30 000 Besucher. Das Fest gibt es seit 15 Jahren und es dauert 3 Tage, im August.\nnicky1980: Danke! Ich war schon auf dem Festival. Es war wirklich super. Ich habe viele nette Leute getroffen und gute Musik gehört.', items: [
      ['Das Festival ist im Winter.', false], ['Es dauert drei Tage.', true], ['Es gibt das Fest seit 15 Jahren.', true], ['nicky1980 war noch nie auf dem Festival.', false],
    ]},
    { type: 'speak', title: 'Sprechen: Über eine Party erzählen', prompt: 'Tell about a party/festival you went to: when & where, who was there, who invited, what you ate/drank, what you liked. Perfekt + war/hatte.', keywords: ['war', 'haben', 'sind', 'gefeiert', 'gefallen'], model: 'Die Party war letztes Jahr an Silvester bei Marion. Es waren ungefähr zwanzig Personen dort. Wir haben gegessen, getrunken und getanzt. Um Mitternacht sind wir auf die Straße gegangen. Die Musik hat mir sehr gut gefallen. Ich hatte viel Spaß!' },
    { type: 'write', title: 'Schreiben: Ein Fest in meinem Land', prompt: 'Describe a festival in your country: name, where, since when, month, how long, what people do. Then 2 sentences about when you were there last (Perfekt).', checklist: ['Das Fest heißt …', 'Es ist jedes Jahr im … in …', 'Es dauert …', 'Es gibt …', 'Letztes Jahr bin ich … / habe ich … (Perfekt)'], model: 'Das Fest heißt Diwali. Es ist jedes Jahr im Oktober oder November in ganz Indien. Es dauert fünf Tage. Es gibt viele Lichter, Süßigkeiten und Feuerwerk. Letztes Jahr bin ich nach Hause gefahren. Wir haben mit der Familie gefeiert und viel gegessen.' },
  ],
  drill: [
    { de: 'Was ist denn hier passiert?', en: 'What happened here?' },
    { de: 'Ich bin nach Berlin gefahren.', en: 'I went to Berlin. (by car/train)' },
    { de: 'Sie ist nach New York geflogen.', en: 'She flew to New York.' },
    { de: 'Wir sind ins Kino gegangen.', en: 'We went to the cinema.' },
    { de: 'Wann bist du angekommen?', en: 'When did you arrive?' },
    { de: 'Ich bin um sieben Uhr aufgestanden.', en: 'I got up at seven o\'clock.' },
    { de: 'Wir haben Geburtstag gefeiert.', en: 'We celebrated a birthday.' },
    { de: 'Wie war die Party?', en: 'How was the party?' },
    { de: 'Die Party war toll.', en: 'The party was great.' },
    { de: 'Ich hatte viel Spaß.', en: 'I had a lot of fun.' },
    { de: 'Wie hat es dir gefallen?', en: 'How did you like it?' },
    { de: 'Wann hast du Geburtstag?', en: 'When is your birthday?' },
    { de: 'Ich habe im Juni Geburtstag.', en: 'My birthday is in June.' },
    { de: 'Im Winter ist es kalt.', en: 'In winter it\'s cold.' },
    { de: 'Das Fest dauert drei Tage.', en: 'The festival lasts three days.' },
    { de: 'Es gibt viele Leute.', en: 'There are lots of people.' },
    { de: 'Letztes Jahr war ich in Wien.', en: 'Last year I was in Vienna.' },
    { de: 'Herzlichen Glückwunsch!', en: 'Congratulations! / Happy birthday!' },
  ],
  exam: [
    { type: 'tf', exam: 'Start Deutsch 1 · Lesen Teil 1', title: 'E-Mail aus Portugal', text: 'Liebe Freunde,\nich bin wieder zu Hause! Portugal war wirklich toll. Ich bin viel Rad gefahren und im Atlantik geschwommen. In Porto gibt es sehr guten Wein. Leider war die Fahrt sehr lang: Ich bin um 6 Uhr in Porto abgefahren und dreimal umgestiegen. Erst am Sonntagmittag bin ich in Frankfurt angekommen. Nächste Woche feiern wir zusammen, okay?\nEure Lena', items: [
      ['Lena ist jetzt in Portugal.', false], ['Sie ist im Atlantik geschwommen.', true], ['Sie ist zweimal umgestiegen.', false], ['Sie ist am Sonntag in Frankfurt angekommen.', true], ['Nächste Woche gibt es ein Fest.', true],
    ]},
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 2', title: 'Thema „Feste / Reisen"', prompt: 'Cards: Geburtstag · Urlaub · Weihnachten · Wochenende. Ask and answer (Perfekt where it fits).', keywords: ['Wann', 'Wo', 'hast du', 'bist du'], model: 'Wann hast du Geburtstag? – Im März. · Wo warst du im Urlaub? – Ich war in Spanien. · Was machst du an Weihnachten? – Ich fahre zu meiner Familie. · Was hast du am Wochenende gemacht? – Ich bin nach Heidelberg gefahren.' },
  ],
});
})();
