/* Arbeitsbuch (Menschen A1.1 AB) — extra practice per lesson: Basistraining, Training (Lesen/Hören/Schreiben/Sprechen),
 * Aussprache and Test items, plus the extra words from each "Lernwortschatz". Appended after the Kursbuch exercises,
 * so existing exercise progress keys stay stable. */
(() => {
const { N, V, W, P } = DE;
const add = (id, { vocab = [], exercises = [], exam = [] }) => {
  const l = DE.lessons[id]; if (!l) return;
  if (vocab.length) l.vocab.push({ group: 'Arbeitsbuch: Lernwortschatz (extra)', items: vocab });
  exercises.forEach((e) => l.exercises.push(Object.assign({ ab: true }, e, { title: 'AB · ' + e.title })));
  exam.forEach((e) => l.exam.push(Object.assign({ ab: true }, e)));
};

add('L1', {
  vocab: [P('Hoi! / Salü!', 'Hi! (Switzerland)'), P('Adieu! / Ade!', 'Bye! (Switzerland / South)'), N('pl', 'Personalien', undefined, 'personal details')],
  exercises: [
    { type: 'mc', title: 'du oder Sie?', items: [
      { q: 'Woher kommen ___, Herr Svendson?', options: ['du', 'Sie'], a: 1 }, { q: 'Kolja, woher kommst ___?', options: ['du', 'Sie'], a: 0 },
      { q: 'Frau Klein, woher kommen ___?', options: ['du', 'Sie'], a: 1 }, { q: 'Hallo, ich bin Tine. Und wer bist ___?', options: ['du', 'Sie'], a: 0 },
    ]},
    { type: 'gap', title: 'Test: Verben in der richtigen Form', items: [
      'Woher {kommen} Sie? (kommen)', 'Wie {heißt} du? (heißen)', 'Ich {heiße} Marie. (heißen)', 'Ich {komme} aus Deutschland. (kommen)', 'Und woher {kommst} du? (kommen)',
      'Wer {bist} du? (sein)', 'Ich {bin} Paco. (sein)', 'Wer {ist} das? – Das ist Frau Delgado. (sein)', 'Sie {kommt} aus Spanien. (kommen)',
    ]},
    { type: 'order', title: 'Gespräch ordnen', items: [
      { words: ['Sind', 'Sie', 'Frau', 'Rode', '?'], en: 'Are you Mrs Rode?' },
      { words: ['Nein', ',', 'mein', 'Name', 'ist', 'Koch', '.'], en: 'No, my name is Koch.' },
      { words: ['Wie', 'bitte', '?', 'Obolanski', '?'], en: 'Pardon? Obolanski?' },
      { words: ['Ich', 'komme', 'aus', 'Italien', ',', 'und', 'du', '?'], en: 'I come from Italy, and you?' },
    ]},
  ],
});

add('L2', {
  vocab: [N('m', 'Mechatroniker', 'Mechatroniker', 'mechatronics technician'), N('m', 'Sekretär', 'Sekretäre', 'secretary (m)'), N('f', 'Sekretärin', 'Sekretärinnen', 'secretary (f)'),
    N('m', 'Programmierer', 'Programmierer', 'programmer'), N('m', 'Rentner', 'Rentner', 'pensioner (m)'), N('f', 'Rentnerin', 'Rentnerinnen', 'pensioner (f)'),
    N('f', 'Schule', 'Schulen', 'school'), N('f', 'Hochschule', 'Hochschulen', 'university, college'), N('f', 'Stelle', 'Stellen', 'job, position'), N('m', 'Arbeitgeber', 'Arbeitgeber', 'employer'),
    W('momentan', 'at the moment'), W('super', 'great')],
  exercises: [
    { type: 'gap', title: 'Rechenaufgaben: Lesen Sie laut und ergänzen Sie.', items: [
      'fünfzehn + siebenunddreißig = {zweiundfünfzig}', 'sechsundfünfzig + acht = {vierundsechzig}', 'dreiunddreißig + neun = {zweiundvierzig}', 'fünfundzwanzig + siebenundsechzig = {zweiundneunzig}', 'achtzehn + neunzehn = {siebenunddreißig}',
    ]},
    { type: 'listen', title: 'Wie ist die Telefonnummer? (Ziffern)', numbers: true, items: ['030 7527 99136', '0171 7856 70325', '06391 7324 467', '08233 253857'] },
    { type: 'tf', title: 'Training Lesen: Porträt', text: 'Ich heiße Marie Durant und komme aus Luxemburg. Momentan lebe ich in Heidelberg. Ich arbeite hier als Journalistin. Ich bin nicht verheiratet, aber ich lebe mit meinem Partner zusammen. Er heißt Steven und ist zurzeit arbeitslos. Wir haben ein Kind. Julie ist jetzt schon 3 Jahre alt.', items: [
      ['Marie ist Journalistin.', true], ['Steven arbeitet als Lehrer.', false], ['Marie und Steven sind verheiratet.', false], ['Sie haben zwei Kinder.', false], ['Sie wohnen in Heidelberg.', true], ['Julie ist drei.', true],
    ]},
    { type: 'mc', title: 'ich, er, sie, wir oder sie (pl.)?', items: [
      { q: 'Svenja und Torben sind verheiratet. ___ haben keine Kinder.', options: ['Sie', 'Ich', 'Er'], a: 0 }, { q: 'Herr Peters lebt allein. ___ ist geschieden.', options: ['Er', 'Sie', 'Wir'], a: 0 },
      { q: 'Melanie ist Single. ___ lebt allein.', options: ['Sie', 'Ich', 'Er'], a: 0 }, { q: 'Ich habe zwei Kinder. ___ heißen Finn und Mika.', options: ['Sie', 'Er', 'Wir'], a: 0 },
    ]},
    { type: 'pron', title: 'Aussprache: Wortakzent', rule: 'German words are usually stressed on the <b>first</b> syllable (<u>Leh</u>rer, <u>Kell</u>ner, <u>ar</u>beiten). Many international words are stressed at the <b>end</b>: Stu<u>dent</u>, Archi<u>tekt</u>, Journa<u>list</u>, Ingeni<u>eur</u>, stu<u>die</u>ren. -in doesn\'t move the stress: Stu<u>den</u>tin.', items: ['Lehrer', 'Kellnerin', 'arbeiten', 'Student', 'Architekt', 'Journalistin', 'Ingenieur', 'studieren', 'verheiratet'], quiz: [
      { q: 'Where is the stress in „Journalist"?', options: ['Jour-', '-na-', '-list'], a: 2 }, { q: 'Where is the stress in „Lehrerin"?', options: ['Leh-', '-rer-', '-in'], a: 0 },
    ]},
  ],
});

add('L3', {
  vocab: [N('n', 'Enkelkind', 'Enkelkinder', 'grandchild'), N('f', 'Ehefrau', 'Ehefrauen', 'wife (formal)'), N('m', 'Ehemann', 'Ehemänner', 'husband (formal)'), N('f', 'Hochzeit', 'Hochzeiten', 'wedding', 'die goldene Hochzeit')],
  exercises: [
    { type: 'gap', title: 'ja, nein oder doch? (mit „oder?")', items: [
      'Ist deine Schwester verheiratet? – {Ja}, meine Schwester ist verheiratet.', 'Leben deine Eltern in Kiel? – {Nein}, meine Eltern leben nicht in Kiel.',
      'Du studierst nicht, oder? – {Doch}, ich studiere Physik.', 'Deine Schwester ist auch Schauspielerin, oder? – {Ja}, sie ist auch Schauspielerin.',
      'Deine Frau heißt nicht Sandra, oder? – {Doch}, sie heißt Sandra.', 'Hannah ist nicht deine Tochter, oder? – {Doch}, Hannah ist meine Tochter.',
    ]},
    { type: 'match', title: 'Was spricht man wo?', pairs: [['Österreich', 'Deutsch'], ['Frankreich', 'Französisch'], ['England', 'Englisch'], ['Italien', 'Italienisch'], ['Russland', 'Russisch'], ['Spanien', 'Spanisch']] },
    { type: 'gap', title: 'mein / dein', items: [
      'Sind das {deine} Kinder auf dem Bild? – Ja, das sind {meine} Kinder.', 'Das hier ist {meine} Tochter Leonie und das ist {mein} Sohn Torben.', 'Was macht {dein} Bruder? – {Mein} Bruder lebt in Berlin.',
    ]},
    { type: 'pron', title: 'Aussprache: Satzmelodie bei Fragen', rule: 'W-questions (Wer? Wie? Was?) go <b>down</b> at the end ↘. Yes/no questions go <b>up</b> ↗. A statement with „…, oder?" also goes up at the end.', items: ['Wer ist das?', 'Ist das deine Frau?', 'Das ist deine Freundin, oder?', 'Wie heißt deine Frau?', 'Bist du verheiratet?', 'Wohnt sie auch in Deutschland?'], quiz: [
      { q: '„Wie heißt deine Frau?" – the melody goes …', options: ['up ↗', 'down ↘'], a: 1 }, { q: '„Heißt deine Frau Steffi?" – the melody goes …', options: ['up ↗', 'down ↘'], a: 0 },
    ]},
  ],
});

add('L4', {
  vocab: [N('n', 'Angebot', 'Angebote', 'offer'), N('n', 'Zimmer', 'Zimmer', 'room'), N('n', 'Geld', '', 'money'), W('kurz', 'short'), W('lang', 'long'), W('leicht', 'light; easy'), W('schwer', 'heavy; difficult'), P('Das macht 9,95 €.', 'That comes to €9.95.')],
  exercises: [
    { type: 'gap', title: 'Wie heißt das Gegenteil?', items: ['groß – {klein}', 'schön – {hässlich}', 'kurz – {lang}', 'billig – {teuer}', 'leicht – {schwer}', 'neu – {alt}', 'gut – {schlecht}', 'praktisch – {unpraktisch}'] },
    { type: 'gap', title: 'Test: Schreiben Sie die Zahlen.', items: [
      'achthundertdreiundzwanzig = {823}', 'dreitausendneunhundertachtundsiebzig = {3978}', 'achthundertvierundachtzigtausend = {884000|884.000}', 'fünfhunderttausendfünfundvierzig = {500045|500.045}', 'tausendzweihundert = {1200|1.200}',
    ]},
    { type: 'mc', title: 'Wie sagt man das?', items: [
      { q: '0,59 €', options: ['neunundfünfzig Cent', 'null Euro neunundfünfzig', 'fünfundneunzig Cent'], a: 0 }, { q: '18,95 €', options: ['achtzehn Euro fünfundneunzig', 'achtzig Euro neunzehn', 'achtzehn Komma neun fünf Euro'], a: 0 },
      { q: '1.200 €', options: ['zwölfhundert / tausendzweihundert Euro', 'eins Komma zwei Euro', 'hundertzwanzig Euro'], a: 0 },
    ]},
    { type: 'tf', title: 'Training Lesen: E-Mails', text: 'Hallo Johannes,\nich brauche ein Bett und ein Sofa für mein Zimmer. Weißt du, wo ich in Berlin günstige Möbel finde? Ich habe wirklich nicht viel Geld. Susi\n\nHallo Susi,\nbei MÖBEL AMRA in der Blücherstraße gibt es günstige Möbel. Ein Sofa kostet 199 € und ein Bett 149 €. Das finde ich nicht teuer, und die Möbel sind wirklich schön. Gruß Johannes', items: [
      ['Susi braucht Möbel.', true], ['MÖBEL AMRA hat billige Möbel.', true], ['Ein Sofa kostet 149 Euro.', false], ['Johannes findet die Möbel hässlich.', false],
    ]},
    { type: 'gap', title: 'Personalpronomen', items: ['Ich finde das Bett sehr schön. Was kostet {es}?', 'Der Schrank ist billig und {er} ist praktisch.', 'Das Bild ist sehr modern. {Es} ist von Pablo Picasso.', 'Die Lampe ist nicht schlecht. {Sie} kostet nur 78 Euro.', 'Der Tisch ist sehr teuer. {Er} kommt aus Italien.'] },
    { type: 'pron', title: 'Aussprache: lange und kurze Vokale', rule: 'A vowel before a <b>double consonant</b> (tt, ss, ll …) or several consonants is <b>short</b>: B<u>e</u>tt, S<u>e</u>ssel, T<u>i</u>sch, schl<u>e</u>cht. A vowel + <b>h</b>, a double vowel, or <b>ie</b> is <b>long</b>: s<u>eh</u>r, St<u>uh</u>l, w<u>ie</u> v<u>ie</u>l, T<u>ee</u>.', items: ['aber', 'Lampe', 'wie viel', 'Tisch', 'billig', 'sehr', 'Bett', 'Sofa', 'Stuhl', 'kurz', 'Der Stuhl ist gut. Nur hundert Euro.', 'Das Bett ist sehr schwer.'], quiz: [
      { q: 'The e in „Bett" is …', options: ['long', 'short'], a: 1 }, { q: 'The u in „Stuhl" is …', options: ['long', 'short'], a: 0 }, { q: 'The ie in „viel" is …', options: ['long', 'short'], a: 0 },
    ]},
  ],
});

add('L5', {
  vocab: [N('m', 'Fotoapparat', 'Fotoapparate', 'camera'), N('f', 'Geldbörse', 'Geldbörsen', 'purse, wallet (CH: das Portemonnaie)'), N('f', 'Seife', 'Seifen', 'soap'),
    N('n', 'Streichholz', 'Streichhölzer', 'match (CH: das Zündholz)'), N('n', 'Wort', 'Wörter', 'word'), N('n', 'Produkt', 'Produkte', 'product'), N('f', 'Adresse', 'Adressen', 'address'),
    N('n', 'Problem', 'Probleme', 'problem'), N('f', 'Form', 'Formen', 'shape, form'), W('jetzt', 'now'), W('jede / jeder', 'every, each'), V('bieten', 'to offer')],
  exercises: [
    { type: 'gap', title: 'ein/eine → der/das/die', items: [
      'Das ist {ein} Feuerzeug. {Das} Feuerzeug ist praktisch.', 'Das ist {eine} Kinderbrille. {Die} Brille ist sehr leicht.', 'Das ist {ein} Fotoapparat. {Der} Fotoapparat kostet 299 Euro.', 'Das ist {eine} Kette. {Die} Kette ist modern.', 'Das ist {ein} Buch. {Das} Buch ist interessant.',
    ]},
    { type: 'mc', title: 'nicht oder kein-?', items: [
      { q: 'Das ist ___ schwer.', options: ['nicht', 'kein'], a: 0 }, { q: 'Ich habe ___ Kinder.', options: ['nicht', 'keine'], a: 1 }, { q: 'Ich finde das Sofa ___ schön.', options: ['nicht', 'kein'], a: 0 },
      { q: 'Ich lebe ___ in Deutschland.', options: ['nicht', 'keine'], a: 0 }, { q: 'Das ist ___ richtig.', options: ['nicht', 'kein'], a: 0 }, { q: 'Das ist ___ Flasche.', options: ['nicht', 'keine'], a: 1 },
    ]},
    { type: 'form', title: 'Training Schreiben: Kundenkarte', text: 'Jurij Kulintsev kommt aus Russland. Jetzt wohnt er zusammen mit seiner Frau in der Schweiz, in der Helvetiastraße 18 in 3005 Bern. Er hat eine Ausbildung als Informatiker und arbeitet jetzt als Programmierer bei DATNET. Er findet Bern sehr schön.', fields: [
      ['Anrede (Herr/Frau)', 'Herr'], ['Name', 'Kulintsev'], ['Vorname', 'Jurij|Jurj'], ['Straße', 'Helvetiastraße 18'], ['PLZ, Ort', '3005 Bern'], ['Beruf', 'Programmierer'],
    ]},
    { type: 'pron', title: 'Aussprache: Satzakzent', rule: 'The sentence stress falls on the <b>important or new information</b>, not automatically on the last word: Das ist eine <u>Ket</u>te. – Nein. Das ist keine Kette, das ist ein <u>Ring</u>.', items: ['Wie heißt das auf Deutsch?', 'Das ist eine Uhr.', 'Sie ist aus Plastik.', 'Ist das eine Kette?', 'Nein. Das ist keine Kette, das ist ein Ring.'], quiz: [
      { q: 'The sentence stress is …', options: ['always on the last word', 'on the important / new information'], a: 1 },
    ]},
  ],
});

add('L6', {
  vocab: [N('m', 'See', 'Seen', 'lake'), N('m', 'Gruß', 'Grüße', 'greeting', 'Schöne Grüße'), N('f', 'Telefonnummer', 'Telefonnummern', 'phone number'), P('Achtung!', 'Attention!'), W('heute', 'today'), W('mit', 'with'), W('oder', 'or')],
  exercises: [
    { type: 'gap', title: 'Pluralform + Umlaut', items: [
      'Wir haben die {Tische}, {Stühle} und {Schränke}! (Tisch, Stuhl, Schrank)', 'Hier finden Sie {Handys}! Gut und günstig! (Handy)', 'Neu! Im Juli kommen die {Briefmarken} zur Fußball-WM. (Briefmarke)',
      'Die besten Sonderangebote für {Computer} und {Drucker}. (Computer, Drucker)', '{Geldbörsen} und {Taschen} aus Leder! (Geldbörse, Tasche)',
    ]},
    { type: 'gap', title: 'Ich finde … (Akkusativ)', items: [
      'Der Tisch ist praktisch! – Hm, ich finde {den} Tisch hässlich.', 'Die Couch ist nicht schlecht! – Ich finde {die} Couch zu groß.', 'Der Schrank ist super! – Ich finde {den} Schrank zu teuer.', 'Das Bett? – Ich finde {das} Bett zu klein.', 'Die Bilder sind schön. – Ja, ich finde {die} Bilder auch schön.',
    ]},
    { type: 'gap', title: 'Im Büro: … aber kein…', items: [
      'Jutta hat einen Computer, aber {keinen} Laptop.', 'Sie hat Bleistifte, aber {keine} Kugelschreiber.', 'Sie hat ein Handy, aber {kein} Telefon.', 'Sie hat einen Bildschirm, aber {keinen} Drucker.', 'Sie hat eine Rechnung, aber {keine} Briefmarken.',
    ]},
    { type: 'mc', title: 'Test: Was ist richtig?', items: [
      { q: 'Ich suche ___ Kalender.', options: ['der', 'den'], a: 1 }, { q: '___ Kalender ist hier.', options: ['Der', 'Den'], a: 0 }, { q: 'Sie haben um 10 Uhr ___ Termin mit Frau Berg.', options: ['ein', 'einen'], a: 1 },
      { q: 'Ich habe nur ___ Kugelschreiber.', options: ['ein', 'einen'], a: 1 }, { q: 'Hast du ___ Schlüssel?', options: ['kein', 'keinen'], a: 1 }, { q: 'Was kostet ___ Computer?', options: ['der', 'den'], a: 0 },
    ]},
    { type: 'tf', title: 'Lesen: E-Mail von Herrn Huber', text: 'Hallo Frau Söder,\nich habe um 10 Uhr einen Termin mit der Firma Grübel. Ich komme heute um 13 Uhr ins Büro. Schreiben Sie heute bitte auch die Rechnungen für die Firma Merz und die Firma Knapp? Ach ja, wie ist denn die Telefonnummer von Frau Pauli? Bitte schreiben Sie mir eine SMS. Vielen Dank.\nSchöne Grüße\nR. Huber', items: [
      ['Herr Huber hat heute einen Termin.', true], ['Er sucht eine Rechnung.', false], ['Er braucht eine Telefonnummer.', true], ['Er schreibt eine SMS.', false],
    ]},
    { type: 'pron', title: 'Aussprache: der Vokal „ü"', rule: 'Say <b>i</b> and round your lips as for <b>u</b>: that is <b>ü</b>. Long ü: Gr<u>ü</u>ße, St<u>ü</u>hle, gr<u>ü</u>n, B<u>ü</u>ro. Short ü: Schl<u>ü</u>ssel, f<u>ü</u>nf, tsch<u>ü</u>s.', items: ['Grüße', 'Schlüssel', 'Stühle', 'fünf', 'grün', 'tschüs', 'Büro', 'Fünf Stühle, grün und günstig!', 'Um vier Uhr im Büro.'], quiz: [
      { q: 'The ü in „Stühle" is …', options: ['long', 'short'], a: 0 }, { q: 'The ü in „fünf" is …', options: ['long', 'short'], a: 1 },
    ]},
  ],
  exam: [
    { type: 'dialogue', exam: 'Start Deutsch 1 · Hören Teil 1', title: 'Training Hören: Wer spricht mit wem?', lines: [
      ['A', 'Herr Winter, haben Sie die Rechnung von Firma Kloss?'], ['B', 'Nein, Frau Lenz. Die Rechnung hat doch der Chef.'],
    ], questions: [{ q: 'Herr Winter und Frau Lenz sind …', options: ['Freunde', 'Kollegen', 'Geschwister'], a: 1 }, { q: 'Wer hat die Rechnung?', options: ['Herr Winter', 'Frau Lenz', 'der Chef'], a: 2 }] },
  ],
});

add('L8', { exercises: [
  { type: 'pron', title: 'Aussprache: unbetontes „e"', rule: 'In <b>stressed</b> syllables you hear the e clearly (<u>E</u>ssen, <u>geh</u>en). In <b>unstressed</b> endings (-en, -el, -er) the e is very weak, almost swallowed: Morg<i>en</i> → „Morgn", Viert<i>el</i> → „Viertl", sieb<i>en</i> → „siebm".', items: ['Morgen', 'Abend', 'Essen', 'Viertel', 'sieben', 'Museum', 'gehen', 'Gehen wir morgen Abend essen?', 'Um Viertel vor sieben.'], quiz: [
    { q: 'In unstressed syllables you hear the e …', options: ['clearly', 'very weakly'], a: 1 },
  ]},
]});
add('L9', { exercises: [
  { type: 'pron', title: 'Aussprache: Wortakzent bei Komposita', rule: 'In compound nouns the <b>first</b> part carries the main stress: <u>Kä</u>sebrötchen, <u>Kar</u>toffelsalat, <u>Zwie</u>belsuppe, <u>Obst</u>kuchen.', items: ['Käse – Brötchen – Käsebrötchen', 'Kartoffel – Salat – Kartoffelsalat', 'Zwiebel – Suppe – Zwiebelsuppe', 'Obst – Kuchen – Obstkuchen', 'Zitrone – Eis – Zitroneneis'], quiz: [
    { q: 'Stress in „Obstkuchen":', options: ['Obst-', '-ku-', '-chen'], a: 0 },
  ]},
]});
add('L10', { exercises: [
  { type: 'pron', title: 'Aussprache: Wortakzent bei trennbaren Verben', rule: 'Separable verbs are stressed on the <b>prefix</b>: <u>ab</u>fahren, <u>an</u>kommen, <u>ein</u>kaufen, <u>fern</u>sehen, <u>mit</u>bringen, <u>ein</u>steigen, <u>um</u>steigen.', items: ['fahren – abfahren', 'kommen – ankommen', 'kaufen – einkaufen', 'sehen – fernsehen', 'bringen – mitbringen', 'Einsteigen! Aussteigen! Umsteigen!', 'Holst du mich bitte ab?'], quiz: [
    { q: 'The stress of separable verbs is on …', options: ['the prefix', 'the verb stem'], a: 0 },
  ]},
]});
add('L12', { exercises: [
  { type: 'pron', title: 'Aussprache: vokalisches „r"', rule: 'At the start of a syllable, r is a consonant (<u>R</u>eise, St<u>r</u>aße, F<u>r</u>eund). <b>After a vowel</b> or in <b>-er</b> it sounds almost like a short „a": Somm<b>er</b> → „Somma", Wint<b>er</b>, Bi<b>er</b>, Silvest<b>er</b>, Besuch<b>er</b>.', items: ['Straße', 'Frühling', 'Reise', 'Silvester', 'Sommer', 'Winter', 'Bier', 'Besucher', 'März, April, Mai', 'September, Oktober, November'], quiz: [
    { q: 'In „Sommer" the final -er sounds like …', options: ['a rolled r', 'a short a'], a: 1 },
  ]},
]});
})();
