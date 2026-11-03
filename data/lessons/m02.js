(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'M2', n: 6.5, module: 2, level: 'A1.1', pages: '37–40', plus: true,
  title: 'Modul 2 Plus – Wiederholung L4–6',
  topic: 'Lesemagazin · Film-Stationen · Projekt Landeskunde · Ausklang',
  goals: [
    'Read short texts about objects and their owners',
    'Bargain at a flea market (Trödler / Flohmarkt)',
    'Read an event notice and correct false statements',
    'Use brauchen / suchen / haben / kaufen + accusative fluently',
    'Mixed review test of L4–6',
  ],
  vocab: [
    { group: 'Flohmarkt', items: [
      N('m', 'Flohmarkt', 'Flohmärkte', 'flea market'), N('m', 'Trödler', 'Trödler', 'second-hand dealer'), N('m', 'Händler', 'Händler', 'trader'),
      N('m', 'Eintritt', '', 'admission (fee)'), N('m', 'Stand', 'Stände', 'stall'), N('f', 'Neuware', '', 'new goods'), N('m', 'Zentimeter (cm)', 'Zentimeter', 'centimetre'),
      N('n', 'Souvenir', 'Souvenirs', 'souvenir'), N('n', 'Bierglas', 'Biergläser', 'beer glass'), N('f', 'Puppe', 'Puppen', 'doll'), N('m', 'König', 'Könige', 'king'),
      V('handeln', 'to bargain, haggle'), V('stöbern', 'to browse, rummage'), V('mitbringen', 'to bring along'),
      P('Sagen wir 4 Euro?', 'Shall we say 4 euros?'), P('Na gut, okay!', 'Fine, OK!'), P('Das ist zu teuer. Dann sage ich 3 Euro.', 'That\'s too expensive. Then I say 3 euros.'),
    ]},
  ],
  grammar: [
    { title: 'Review: what you must know cold after Modul 2', html: `
      <table class="gtable"><tr><th>topic</th><th>key forms</th></tr>
      <tr><td>der/das/die → er/es/sie</td><td>Der Tisch → <b>er</b> · das Bett → <b>es</b> · die Lampe → <b>sie</b></td></tr>
      <tr><td>ein / kein</td><td>ein Stift, ein Buch, ein<b>e</b> Uhr · kein<b>e</b> Stifte</td></tr>
      <tr><td>nicht vs. kein</td><td>Das ist <b>kein</b> Handy. · Das ist <b>nicht</b> mein Handy. · Das ist <b>nicht</b> teuer.</td></tr>
      <tr><td>Plural</td><td>-e/¨e · -(e)n · -s · -er/¨er · –/¨ (always <b>die</b>)</td></tr>
      <tr><td>Akkusativ (m only!)</td><td>Ich brauche <b>den / einen / keinen</b> Drucker.</td></tr>
      <tr><td>prices</td><td>1.478 € · 9,95 € = neun Euro fünfundneunzig</td></tr>
      <tr><td>phone</td><td>Hier ist … · … hier · Auf Wiederhören!</td></tr></table>` },
  ],
  phrases: [],
  exercises: [
    { type: 'tf', title: 'Lesemagazin: Und das ist … meine Uhr!', text: 'Sylvia (25): Ich arbeite als Sekretärin. Meine Uhr ist schon sehr alt, aber sie ist schön, finde ich.\nClaudio (31): Ich bin Autor. Ich habe viele Uhren, sieben oder acht Stück. Die hier ist modern. Sie ist nur schwarz und weiß, aber ich finde sie super.\nKim (20): Ich mache eine Ausbildung. Meine Uhr? Ich habe keine Uhr. Oder doch – da, das ist meine Uhr. Sie ist groß und praktisch.\nTheresa (22): Ich studiere Psychologie. Das ist eine Männeruhr. Sie ist zu groß, aber die Farbe ist richtig cool!', items: [
      ['Sylvias Uhr ist neu.', false], ['Claudio hat nur eine Uhr.', false], ['Kim macht eine Ausbildung.', true], ['Theresa findet ihre Uhr zu groß.', true], ['Claudio arbeitet als Autor.', true],
    ]},
    { type: 'dialogue', title: 'Film-Stationen: Beim Trödler', lines: [
      ['A', 'Guten Tag. Was kostet das Bild?'],
      ['B', 'Das Bild? Zwanzig Euro.'],
      ['A', 'Zwanzig Euro? Das ist zu teuer. Es ist sehr klein, nur 33 mal 43 Zentimeter.'],
      ['B', 'Klein, aber schön! Na gut, sagen wir fünfzehn Euro.'],
      ['A', 'Zehn Euro?'],
      ['B', 'Fünfzehn. Das ist mein letzter Preis.'],
      ['A', 'Na gut, okay!'],
    ], questions: [
      { q: 'Das Bild ist … cm groß.', options: ['35 × 43', '33 × 45', '33 × 43'], a: 2 },
      { q: 'Am Ende kostet das Bild …', options: ['20 Euro', '15 Euro', '10 Euro'], a: 1 },
      { q: 'Anne findet das Bild am Anfang …', options: ['okay', 'zu teuer', 'zu groß'], a: 1 },
    ]},
    { type: 'tf', title: 'Projekt Landeskunde: Der Nachtflohmarkt Leipzig', text: 'Deutschlands schönster Trödelmarkt bei Nacht! In Leipzig ist der Nachtflohmarkt schon Tradition. Sie stöbern und handeln gern? Dann sind Sie hier richtig. Von 16 bis 24 Uhr kommen 200 Händler und zwischen 2000 und 3000 Besucher. Hier finden Sie alles aus Omas Zeiten: Bücher, Taschen, Uhren, Möbel, Kleidung und vieles mehr.\nFür Verkäufer: KEINE NEUWARE! Aufbau ab 13 Uhr. Standpreis: 7 Euro pro Meter (Tische bitte selbst mitbringen!)\nEintritt: 2 Euro, Kinder bis 12 Jahre frei.', items: [
      ['Der Nachtflohmarkt ist in Dresden.', false], ['Die Waren auf dem Flohmarkt sind neu.', false], ['Der Eintritt kostet 7 Euro.', false], ['Kinder bis 12 Jahre bezahlen nichts.', true], ['Der Flohmarkt ist bis Mitternacht offen.', true],
    ]},
    { type: 'gap', title: 'Ausklang: Hubertus Grille braucht eine Brille (Akkusativ)', items: [
      'Hubertus Grille braucht {eine} Brille. (die Brille)', 'Marina Hartner sucht {einen} Kalender. (der Kalender)', 'Benjamin Rüssel hat {keinen} Schlüssel. (der Schlüssel)',
      'Janina Rift kauft {einen} Stift. (der Stift)', 'Larissa Nuhr hat {eine} Uhr. (die Uhr)', 'Florian Masche braucht {eine} Tasche. (die Tasche)', 'Mario Klinge hat {keine} Ringe. (die Ringe, pl.)',
    ]},
    { type: 'write', title: 'Klassenflohmarkt: Produktbeschreibung', prompt: 'Choose an object you own and write a flea-market ad: what it is, colour/material, why it\'s great, the price.', checklist: ['Das ist ein/eine …', 'Er/Es/Sie ist … (colour, material)', 'praktisch / leicht / schön …', 'Er/Es/Sie kostet nur … Euro'], model: 'SUPER KUGELSCHREIBER! Er ist sehr praktisch und leicht. Er schreibt blau und macht keine Fehler. Er kostet nur 5 Euro!' },
    { type: 'speak', title: 'Sprechen: Handeln auf dem Flohmarkt', prompt: 'Sell your object from the ad. Your partner says it\'s too expensive; negotiate a price.', keywords: ['kostet', 'teuer', 'sagen wir', 'okay'], model: 'Hier habe ich einen Kugelschreiber. Er ist sehr praktisch und leicht und er kostet nur 5 Euro. – Das ist zu teuer. Dann sage ich 3 Euro. – Sagen wir 4 Euro? – Na gut, okay!' },
    { type: 'mc', title: 'Test L4–6 (gemischt)', items: [
      { q: 'Die Lampe ist schön. ___ kommt aus Italien.', options: ['Er', 'Es', 'Sie'], a: 2 },
      { q: 'Das ist ___ Schlüssel, das ist ein Ring.', options: ['nicht', 'kein', 'keine'], a: 1 },
      { q: 'Ich brauche ___ Drucker.', options: ['ein', 'einen', 'eine'], a: 1 },
      { q: 'Plural: das Notizbuch → die …', options: ['Notizbuchs', 'Notizbücher', 'Notizbuchen'], a: 1 },
      { q: '9,95 € = ?', options: ['neun Komma neunzig fünf Euro', 'neun Euro fünfundneunzig', 'neunundneunzig Euro fünf'], a: 1 },
      { q: 'End a business phone call:', options: ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Gute Nacht!'], a: 1 },
      { q: 'Wo ___ die Rechnungen?', options: ['ist', 'sind', 'seid'], a: 1 },
      { q: 'Die Brille ist ___ Kunststoff.', options: ['von', 'aus', 'mit'], a: 1 },
      { q: 'Ich finde ___ Schrank zu teuer.', options: ['der', 'den', 'die'], a: 1 },
      { q: 'Plural: die Maus → die …', options: ['Mause', 'Mäuse', 'Mäusen'], a: 1 },
      { q: 'Das Sofa ist ___ groß. Es passt nicht in mein Zimmer.', options: ['sehr', 'zu', 'aber'], a: 1 },
      { q: 'Herr Brenner sucht ___ Formulare.', options: ['den', 'die', 'das'], a: 1 },
    ]},
  ],
  drill: [
    { de: 'Was kostet das Bild?', en: 'What does the picture cost?' },
    { de: 'Das ist zu teuer.', en: 'That\'s too expensive.' },
    { de: 'Sagen wir zehn Euro?', en: 'Shall we say ten euros?' },
    { de: 'Na gut, okay!', en: 'Fine, OK!' },
    { de: 'Er braucht eine Brille.', en: 'He needs glasses.' },
    { de: 'Sie sucht einen Schlüssel.', en: 'She is looking for a key.' },
    { de: 'Wir haben keine Stifte.', en: 'We have no pens.' },
  ],
  exam: [],
});
})();
