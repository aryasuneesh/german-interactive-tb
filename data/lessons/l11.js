(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L11', n: 11, module: 4, level: 'A1.1', pages: '61–64',
  title: 'Was hast du heute gemacht?',
  topic: 'Alltag – daily routine and the Perfekt with haben',
  goals: [
    'Describe your daily routine with times (von … bis, ab, um, am)',
    'Talk about what you did (Perfekt with haben)',
    'Form regular, irregular, separable and -ieren participles',
    'Read a diary / calendar and an e-mail about someone\'s day',
  ],
  vocab: [
    { group: 'Mein Tag', items: [
      N('f', 'Arbeit', 'Arbeiten', 'work'), N('f', 'Hausaufgabe', 'Hausaufgaben', 'homework', 'Hausaufgaben machen'), N('f', 'Pause', 'Pausen', 'break', 'Pause machen'),
      N('f', 'Zeitung', 'Zeitungen', 'newspaper', 'Zeitung lesen'), N('n', 'Fahrrad', 'Fahrräder', 'bicycle (CH: das Velo)', 'Fahrrad fahren'), N('n', 'Geschenk', 'Geschenke', 'present'),
      N('f', 'Party', 'Partys', 'party'), N('f', 'Reise', 'Reisen', 'trip', 'Dienstreise / Privatreise'), N('m', 'Sport', '', 'sport'), N('m', 'Monat', 'Monate', 'month'),
      N('n', 'Paar', 'Paare', 'couple, pair'), N('n', 'Baby', 'Babys', 'baby'), N('n', 'Mittagessen', 'Mittagessen', 'lunch'), N('f', 'Mittagspause', 'Mittagspausen', 'lunch break'),
    ]},
    { group: 'Verben (mit Partizip)', items: [
      V('aufräumen', 'to tidy up → hat aufgeräumt'), V('einladen', 'to invite (du lädst ein) → hat eingeladen'), V('kaufen', 'to buy → hat gekauft'),
      V('lachen', 'to laugh → hat gelacht'), V('denken', 'to think → hat gedacht'), V('lernen', 'to learn → hat gelernt'), V('meinen', 'to mean, think → hat gemeint'),
      V('reden', 'to talk → hat geredet'), V('schlafen', 'to sleep (du schläfst) → hat geschlafen'), V('frühstücken', 'to have breakfast → hat gefrühstückt'),
      V('arbeiten', 'to work → hat gearbeitet'), V('essen', 'to eat → hat gegessen'), V('trinken', 'to drink → hat getrunken'), V('lesen', 'to read → hat gelesen'),
      V('schreiben', 'to write → hat geschrieben'), V('sehen', 'to see → hat gesehen'), V('treffen', 'to meet → hat getroffen'), V('finden', 'to find → hat gefunden'),
      V('nehmen', 'to take → hat genommen'), V('sprechen', 'to speak → hat gesprochen'), V('telefonieren', 'to phone → hat telefoniert'), V('backen', 'to bake → hat gebacken'),
    ]},
    { group: 'Zeitangaben', items: [
      W('von … bis', 'from … to', 'von 8 bis 17 Uhr'), W('ab', 'from … on', 'ab 19 Uhr'), W('gestern', 'yesterday'), W('heute Morgen', 'this morning'),
      W('letzte Woche', 'last week'), W('letzten Freitag', 'last Friday'), W('letztes Jahr', 'last year'), W('täglich', 'daily'), W('lange', 'for a long time'),
      W('fertig', 'finished, ready'), W('interessant', 'interesting'), W('langweilig', 'boring'), W('mal (zweimal, dreimal)', 'times (twice, three times)'), W('wirklich?', 'really?'),
    ]},
  ],
  grammar: [
    { title: 'Perfekt = haben (pos. 2) + Partizip II (end)', html: `
      <p>Spoken German uses the <b>Perfekt</b> for the past. <b>haben</b> is conjugated in position 2; the <b>participle</b> goes to the end, the same bracket again.</p>
      <table class="gtable"><tr><th>Pos. 1</th><th>Pos. 2</th><th>middle</th><th>end</th></tr>
      <tr><td>Ich</td><td class="verb">habe</td><td>heute lange</td><td class="verb">geschlafen.</td></tr>
      <tr><td>Was</td><td class="verb">hast</td><td>du heute</td><td class="verb">gemacht?</td></tr>
      <tr><td>Gestern</td><td class="verb">haben</td><td>wir Pizza</td><td class="verb">gegessen.</td></tr>
      <tr><td class="verb">Hast</td><td>du die Zeitung</td><td></td><td class="verb">gelesen?</td></tr></table>` },
    { title: 'Building the Partizip II', html: `
      <table class="gtable"><tr><th>type</th><th>pattern</th><th>examples</th></tr>
      <tr><td>regular</td><td><b>ge</b>- stem -<b>t</b></td><td>machen → <b>ge</b>mach<b>t</b> · kaufen → gekauft · lernen → gelernt · arbeiten → gearbeit<b>et</b> · reden → geredet</td></tr>
      <tr><td>irregular</td><td><b>ge</b>- (changed) stem -<b>en</b></td><td>schlafen → geschlaf<b>en</b> · essen → ge<b>g</b>essen · trinken → getr<b>u</b>nken · lesen → gelesen · schreiben → geschr<b>ie</b>ben · sehen → gesehen · treffen → getr<b>o</b>ffen · finden → gef<b>u</b>nden · nehmen → gen<b>o</b>mmen · sprechen → gespr<b>o</b>chen</td></tr>
      <tr><td>separable</td><td>prefix + <b>ge</b> + …</td><td>einkaufen → ein<b>ge</b>kauft · aufräumen → auf<b>ge</b>räumt · einladen → ein<b>ge</b>laden · fernsehen → fern<b>ge</b>sehen · anrufen → an<b>ge</b>rufen</td></tr>
      <tr><td>-ieren</td><td><b>no ge</b>, -t</td><td>telefonieren → telefonier<b>t</b> · studieren → studiert · fotografieren → fotografiert</td></tr>
      <tr><td>be-/ver-/er-</td><td><b>no ge</b></td><td>bekommen → bekommen · besuchen → besucht</td></tr></table>
      <p>Irregular participles must be learned as vocabulary. They're in your review deck as "→ hat …".</p>` },
    { title: 'Time: von … bis, ab, um, am', html: `
      <ul><li><b>von</b> 8 <b>bis</b> 17 Uhr arbeitet sie. (from … to)</li><li><b>ab</b> 19 Uhr hat sie Zeit. (from … onwards)</li><li><b>um</b> 7 Uhr frühstückt sie. (at)</li><li><b>am</b> Montag / <b>am</b> Abend (on / in the)</li></ul>` },
  ],
  phrases: [
    ['über Vergangenes sprechen', ['Was hast du heute / gestern / am Wochenende gemacht?', 'Ich habe lange geschlafen. Dann habe ich gefrühstückt.', 'Am Nachmittag habe ich gearbeitet.', 'Hast du schon die Hausaufgaben gemacht? – Nein, noch nicht.', 'Wann hast du heute gearbeitet? – Von 9 bis 15 Uhr.']],
    ['den Tagesablauf beschreiben', ['Um 7 Uhr stehe ich auf. Dann frühstücke ich.', 'Von 8 bis 16 Uhr arbeite ich.', 'Ab 18 Uhr habe ich Zeit.']],
  ],
  exercises: [
    { type: 'gap', title: 'haben + Partizip', items: [
      'Am Sonntag {habe} ich lange {geschlafen}. (schlafen)', 'Wo {haben} Sie Deutsch {gelernt}? (lernen)', 'Ich {habe} Kuchen {gebacken}. (backen)',
      '{Hast} du deine Schwester auch zu deiner Party {eingeladen}? (einladen)', 'Was {habt} ihr zum Mittagessen {gegessen}? (essen)', 'Gestern {habe} ich ein neues Fahrrad {gekauft}. (kaufen)',
      'Ich {habe} heute noch nicht Zeitung {gelesen}. (lesen)', 'Dennis {hat} eine E-Mail {geschrieben}. (schreiben)',
    ]},
    { type: 'gap', title: 'Partizip II bilden', items: [
      'machen → {gemacht}', 'arbeiten → {gearbeitet}', 'trinken → {getrunken}', 'einkaufen → {eingekauft}', 'telefonieren → {telefoniert}', 'aufräumen → {aufgeräumt}',
      'treffen → {getroffen}', 'sehen → {gesehen}', 'fernsehen → {ferngesehen}', 'anrufen → {angerufen}', 'schreiben → {geschrieben}', 'nehmen → {genommen}',
      'frühstücken → {gefrühstückt}', 'finden → {gefunden}', 'sprechen → {gesprochen}', 'studieren → {studiert}',
    ]},
    { type: 'sort', title: 'Welcher Typ?', buckets: ['ge-…-t', 'ge-…-en', 'Präfix+ge', 'ohne ge'], items: [
      ['gekauft', 'ge-…-t'], ['geschlafen', 'ge-…-en'], ['eingeladen', 'Präfix+ge'], ['telefoniert', 'ohne ge'], ['gelernt', 'ge-…-t'], ['getrunken', 'ge-…-en'],
      ['aufgeräumt', 'Präfix+ge'], ['studiert', 'ohne ge'], ['geredet', 'ge-…-t'], ['gelesen', 'ge-…-en'], ['angerufen', 'Präfix+ge'], ['bekommen', 'ohne ge'],
    ]},
    { type: 'order', title: 'Sätze im Perfekt', items: [
      { words: ['Hast', 'du', 'heute', 'gearbeitet', '?'], en: 'Did you work today?' },
      { words: ['Am', 'Nachmittag', 'habe', 'ich', 'Fußball', 'gespielt', '.'], en: 'In the afternoon I played football.' },
      { words: ['Ich', 'habe', 'die', 'Hausaufgaben', 'gemacht', '.'], en: 'I did the homework.' },
      { words: ['Was', 'hast', 'du', 'zum', 'Frühstück', 'gegessen', '?'], en: 'What did you eat for breakfast?' },
      { words: ['Gestern', 'haben', 'wir', 'lange', 'gefeiert', '.'], en: 'Yesterday we celebrated for a long time.' },
    ]},
    { type: 'gap', title: 'um, am, von … bis, ab', items: [
      '{Um} 7 Uhr frühstückt Lisa.', '{Am} Montag arbeitet sie.', '{Von} 8 {bis} 16 Uhr arbeitet sie.', '{Ab} 19 Uhr hat sie Zeit.', '{Am} Abend geht sie mit Klaus ins Kino.',
    ]},
    { type: 'tf', title: 'Lesen: Eine E-Mail aus Hamburg', text: 'Liebe Sophie,\nwie geht es dir? Ich habe im Mai bei einer neuen Firma als Marketing-Assistentin angefangen. Der Job ist sehr interessant und meine Kollegen sind sehr nett und lustig. In der Mittagspause essen wir immer zusammen. Ich arbeite täglich von 8:30 bis 17:30 Uhr, manchmal auch länger. Nach der Arbeit gehe ich oft mit meiner Kollegin Tamara in eine Kneipe oder ins Kino. Sie hat einen netten Freund, Rainer. Mehr zu Rainer in der nächsten Mail!\nHerzliche Grüße\nChiara', items: [
      ['Chiara hat eine neue Arbeit.', true], ['Chiara hat viel Spaß mit ihren Kollegen.', true], ['Chiara arbeitet jeden Tag bis 19 Uhr.', false], ['Chiara geht am Abend immer in Kneipen.', false], ['Rainer ist Tamaras Freund.', true],
    ]},
    { type: 'write', title: 'Schreiben: Teresas Tagebuch', prompt: 'Write what you did in the last 3 days (diary style). At least 6 Perfekt sentences, start some sentences with a time (inversion).', checklist: ['≥ 6 sentences with haben + participle at the end', 'one separable verb (eingekauft, aufgeräumt …)', 'one -ieren verb (telefoniert)', 'time first + verb 2 (Am Montag habe ich …)', 'von … bis'], model: 'Am Freitag habe ich Monas Geburtstag gefeiert. Wir haben getanzt und viel gelacht. Am Samstag habe ich lange geschlafen. Dann habe ich die Wohnung aufgeräumt und eingekauft. Am Sonntag habe ich von 10 bis 13 Uhr Deutsch gelernt und meine Mutter angerufen. Am Abend habe ich einen Film gesehen.' },
    { type: 'speak', title: 'Sprechen: Was hast du heute gemacht?', prompt: 'Tell your day so far in the Perfekt: morning, lunch, afternoon. 5+ sentences.', keywords: ['habe', 'gemacht', 'gegessen', 'gearbeitet', 'gelernt'], model: 'Heute Morgen habe ich um sieben Uhr gefrühstückt. Dann habe ich zwei Stunden gelernt. Am Mittag habe ich mit Freunden in der Mensa gegessen. Am Nachmittag habe ich gearbeitet und meine Mutter angerufen. Jetzt habe ich Zeit!' },
  ],
  drill: [
    { de: 'Was hast du heute gemacht?', en: 'What did you do today?' },
    { de: 'Ich habe lange geschlafen.', en: 'I slept for a long time.' },
    { de: 'Dann habe ich gefrühstückt.', en: 'Then I had breakfast.' },
    { de: 'Ich habe Deutsch gelernt.', en: 'I learned German.' },
    { de: 'Hast du die Hausaufgaben gemacht?', en: 'Have you done the homework?' },
    { de: 'Nein, noch nicht.', en: 'No, not yet.' },
    { de: 'Ich habe eingekauft.', en: 'I did the shopping.' },
    { de: 'Wir haben die Wohnung aufgeräumt.', en: 'We tidied the flat.' },
    { de: 'Ich habe dich angerufen.', en: 'I called you.' },
    { de: 'Er hat Freunde eingeladen.', en: 'He invited friends.' },
    { de: 'Was habt ihr gegessen?', en: 'What did you (all) eat?' },
    { de: 'Wir haben Pizza gegessen.', en: 'We ate pizza.' },
    { de: 'Ich habe einen Film gesehen.', en: 'I saw a film.' },
    { de: 'Sie hat mit ihrer Mutter telefoniert.', en: 'She phoned her mother.' },
    { de: 'Von acht bis vier Uhr habe ich gearbeitet.', en: 'From eight to four I worked. (start with the time)' },
    { de: 'Gestern habe ich ein Buch gelesen.', en: 'Yesterday I read a book.' },
  ],
  exam: [
    { type: 'write', exam: 'Start Deutsch 1 · Schreiben Teil 2', title: 'SMS an eine Freundin (~30 Wörter)', prompt: 'Sie waren gestern nicht im Deutschkurs. Schreiben Sie Ihrer Freundin Anna: Warum waren Sie nicht da? Was haben Sie gemacht? Fragen Sie nach den Hausaufgaben.', checklist: ['Liebe Anna / Hallo Anna', 'reason', 'what you did (Perfekt)', 'question about homework', 'Grüße'], model: 'Hallo Anna,\ngestern war ich nicht im Kurs. Ich habe von 9 bis 17 Uhr gearbeitet. Am Abend habe ich meine Eltern angerufen. Was haben wir gemacht? Was sind die Hausaufgaben?\nLiebe Grüße\nArya' },
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 2', title: 'Thema „Alltag / Wochenende"', prompt: 'Cards: Wochenende · Frühstück · Arbeit · Abend. Ask in the Perfekt and answer.', keywords: ['Was hast du', 'gemacht', 'habe'], model: 'Was hast du am Wochenende gemacht? – Ich habe Freunde getroffen. · Was hast du heute gefrühstückt? – Ich habe Müsli gegessen. · Hast du heute gearbeitet? – Ja, von 8 bis 14 Uhr. · Was hast du gestern Abend gemacht? – Ich habe ferngesehen.' },
  ],
});
})();
