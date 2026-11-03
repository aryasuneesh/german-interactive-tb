(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L5', n: 5, module: 2, level: 'A1.1', pages: '29–32',
  title: 'Was ist das? – Das ist ein F.',
  topic: 'Gegenstände – objects, colours, materials, forms',
  goals: [
    'Ask what something is called in German and how to spell it',
    'Ask someone to repeat',
    'Use ein / eine and kein / keine',
    'Describe an object: colour, material, shape',
    'Thank someone and react to thanks',
    'Fill in an order form',
  ],
  vocab: [
    { group: 'Gegenstände', items: [
      N('m', 'Schlüssel', 'Schlüssel', 'key'), N('m', 'Kugelschreiber', 'Kugelschreiber', 'ballpoint pen (der Kuli)'), N('m', 'Bleistift', 'Bleistifte', 'pencil'),
      N('m', 'Ring', 'Ringe', 'ring'), N('m', 'Teller', 'Teller', 'plate'), N('m', 'Regenschirm', 'Regenschirme', 'umbrella'), N('m', 'Koffer', 'Koffer', 'suitcase'),
      N('m', 'Schlüsselanhänger', 'Schlüsselanhänger', 'keyring'), N('m', 'Geldbeutel', 'Geldbeutel', 'wallet, purse'),
      N('n', 'Buch', 'Bücher', 'book'), N('n', 'Handy', 'Handys', 'mobile phone'), N('n', 'Feuerzeug', 'Feuerzeuge', 'lighter'), N('n', 'Glas', 'Gläser', 'glass'),
      N('n', 'Foto', 'Fotos', 'photo'), N('n', 'Handtuch', 'Handtücher', 'towel'), N('n', 'T-Shirt', 'T-Shirts', 'T-shirt'), N('n', 'Wörterbuch', 'Wörterbücher', 'dictionary'),
      N('f', 'Brille', 'Brillen', 'glasses (singular in German!)'), N('f', 'Uhr', 'Uhren', 'watch, clock'), N('f', 'Tasche', 'Taschen', 'bag'), N('f', 'Kette', 'Ketten', 'necklace, chain'),
      N('f', 'Tasse', 'Tassen', 'cup'), N('f', 'Flasche', 'Flaschen', 'bottle'), N('f', 'Kamera', 'Kameras', 'camera'), N('f', 'Puppe', 'Puppen', 'doll'),
      N('m', 'Gegenstand', 'Gegenstände', 'object, item'), N('m', 'Augenarzt', 'Augenärzte', 'eye doctor'), N('m', 'Buchstabe', 'Buchstaben', 'letter (of alphabet)'),
    ]},
    { group: 'Farben', items: [
      W('rot', 'red'), W('blau', 'blue'), W('gelb', 'yellow'), W('grün', 'green'), W('schwarz', 'black'), W('weiß', 'white'),
      W('braun', 'brown'), W('grau', 'grey'), W('orange', 'orange'), W('rosa', 'pink'), W('lila', 'purple'),
      W('hellblau', 'light blue'), W('dunkelgrün', 'dark green'), N('f', 'Farbe', 'Farben', 'colour'),
    ]},
    { group: 'Materialien & Formen', items: [
      N('n', 'Holz', '', 'wood', 'Der Tisch ist aus Holz.'), N('n', 'Metall', '', 'metal'), N('m', 'Kunststoff', '', 'plastic (synthetic)'), N('n', 'Plastik', '', 'plastic'),
      N('n', 'Papier', '', 'paper'), N('n', 'Leder', '', 'leather'), N('n', 'Gold', '', 'gold'), N('n', 'Silber', '', 'silver'), N('m', 'Stoff', '', 'fabric'),
      N('n', 'Material', 'Materialien', 'material'),
      W('rund', 'round'), W('eckig', 'angular, square'), W('oval', 'oval'), W('leicht', 'light; easy'), W('schwer', 'heavy; difficult'),
    ]},
    { group: 'Formular & Bestellung', items: [
      N('n', 'Formular', 'Formulare', 'form'), N('f', 'Bestellung', 'Bestellungen', 'order'), N('f', 'Bestellnummer', 'Bestellnummern', 'order number'),
      N('f', 'Menge', 'Mengen', 'quantity'), N('f', 'Anrede', 'Anreden', 'form of address (Herr/Frau)'),
      N('f', 'Straße', 'Straßen', 'street'), N('f', 'Hausnummer', 'Hausnummern', 'house number'), N('f', 'Postleitzahl (PLZ)', 'Postleitzahlen', 'postcode'),
      N('m', 'Ort', 'Orte', 'place, town'), N('n', 'Geburtsdatum', 'Geburtsdaten', 'date of birth'), N('f', 'Telefonnummer', 'Telefonnummern', 'phone number'),
      N('f', 'E-Mail-Adresse', 'E-Mail-Adressen', 'e-mail address'), V('bestellen', 'to order'), V('ausfüllen', 'to fill in (separable)', 'Füllen Sie das Formular aus.'),
    ]},
    { group: 'Redemittel-Wörter', items: [
      V('heißen', 'to be called', 'Wie heißt das auf Deutsch?'), V('schreiben', 'to write', 'Wie schreibt man das?'),
      V('glauben', 'to believe, think', 'Ich glaube, das ist ein P.'), V('sehen', 'to see (du siehst)', 'Was sehen Sie?'),
      W('noch einmal', 'once more'), W('Entschuldigung', 'excuse me / sorry'), W('kein / keine', 'no, not a'),
    ]},
  ],
  grammar: [
    { title: 'Indefinite article: ein / eine', html: `
      <table class="gtable"><tr><th></th><th>definite</th><th>indefinite</th></tr>
      <tr><td class="g-m">maskulin</td><td>der Schlüssel</td><td><b>ein</b> Schlüssel</td></tr>
      <tr><td class="g-n">neutral</td><td>das Buch</td><td><b>ein</b> Buch</td></tr>
      <tr><td class="g-f">feminin</td><td>die Brille</td><td><b>eine</b> Brille</td></tr>
      <tr><td class="g-pl">Plural</td><td>die Bücher</td><td><b>—</b> Bücher (no article)</td></tr></table>
      <p><b>ein</b> = a/an, for something new or unspecified: <i>Das ist <b>ein</b> Handy.</i><br>
      <b>der/das/die</b> = the, for something known: <i><b>Das</b> Handy ist neu.</i></p>` },
    { title: 'Negative article: kein / keine', html: `
      <p><b>kein</b> = "not a / no". It works exactly like <i>ein</i>, plus it has a plural.</p>
      <table class="gtable"><tr><th></th><th>positive</th><th>negative</th></tr>
      <tr><td class="g-m">maskulin</td><td>ein Schlüssel</td><td><b>kein</b> Schlüssel</td></tr>
      <tr><td class="g-n">neutral</td><td>ein Buch</td><td><b>kein</b> Buch</td></tr>
      <tr><td class="g-f">feminin</td><td>eine Brille</td><td><b>keine</b> Brille</td></tr>
      <tr><td class="g-pl">Plural</td><td>— Bücher</td><td><b>keine</b> Bücher</td></tr></table>` },
    { title: 'nicht or kein?', html: `
      <table class="gtable"><tr><th>use kein when …</th><th>use nicht when …</th></tr>
      <tr><td>the noun has <b>ein</b> or <b>no article</b><br><i>Das ist ein P. → Das ist <b>kein</b> P.</i><br><i>Ich habe Kinder. → Ich habe <b>keine</b> Kinder.</i></td>
      <td>you negate a verb, adjective, name, or noun with <b>der/das/die / mein</b><br><i>Das ist <b>nicht</b> mein Handy.</i><br><i>Die Uhr ist <b>nicht</b> teuer.</i><br><i>Das ist <b>nicht</b> Paco.</i></td></tr></table>
      <p>Quick test: could you say "ein" in the positive sentence? → then <b>kein</b>.</p>` },
    { title: 'Describing an object', html: `
      <ul><li>Colour: <i>Die Brille ist <b>rot</b>.</i> · <i>Sie ist <b>dunkelgrün-gelb</b>.</i></li>
      <li>Material: <i>Die Brille ist <b>aus</b> Kunststoff / Metall / Holz.</i> (aus + material, no article)</li>
      <li>Shape: <i>Sie ist <b>rund / eckig / oval</b>.</i></li>
      <li>Other: <i>Sie ist sehr <b>leicht</b> und <b>modern</b>.</i></li></ul>
      <p>Colours after <i>sein</i> have no ending, like all adjectives there.</p>` },
  ],
  phrases: [
    ['nach Wörtern fragen / Wörter nennen', ['Entschuldigung, wie heißt das auf Deutsch?', 'Das ist ein / eine …', 'Wie schreibt man das? – U-H-R.', 'Ich glaube, das ist ein … – Ja, das glaube ich auch. / Nein, das ist ein …']],
    ['um Wiederholung bitten', ['Wie bitte?', 'Noch einmal, bitte.']],
    ['sich bedanken und reagieren', ['Danke. / Vielen Dank! – Bitte. / Bitte schön. / Gern. / Kein Problem.']],
    ['einen Gegenstand beschreiben', ['Die Brille ist aus Kunststoff.', 'Sie ist rund / eckig.', 'Sie ist rot / braun und modern.']],
  ],
  exercises: [
    { type: 'gap', title: 'ein oder eine?', items: [
      'Das ist {ein} Schlüssel.', 'Das ist {eine} Brille.', 'Das ist {ein} Handy.', 'Das ist {eine} Uhr.', 'Das ist {ein} Feuerzeug.', 'Das ist {eine} Tasse.', 'Das ist {ein} Kugelschreiber.', 'Das ist {eine} Kamera.',
    ]},
    { type: 'gap', title: 'kein oder keine?', items: [
      'Das ist {kein} Ring, das ist eine Kette.', 'Das ist {keine} Tasse, das ist ein Glas.', 'Ich habe {keine} Kinder.', 'Das ist {kein} Buch, das ist ein Wörterbuch.', 'Das sind {keine} Bleistifte.', 'Das ist {keine} Uhr.',
    ]},
    { type: 'mc', title: 'nicht oder kein?', items: [
      { q: 'Das ist ___ Handy. Das ist eine Kamera.', options: ['nicht', 'kein', 'keine'], a: 1 },
      { q: 'Das ist ___ mein Handy.', options: ['nicht', 'kein', 'keine'], a: 0 },
      { q: 'Die Brille ist ___ teuer.', options: ['nicht', 'kein', 'keine'], a: 0 },
      { q: 'Ich habe ___ Brille.', options: ['nicht', 'kein', 'keine'], a: 2 },
      { q: 'Das ist ___ Frau Paulig.', options: ['nicht', 'kein', 'keine'], a: 0 },
      { q: 'Wir haben ___ Zeit.', options: ['nicht', 'kein', 'keine'], a: 2, explain: 'Zeit has no article in "Wir haben Zeit" → keine.' },
    ]},
    { type: 'match', title: 'Farben', pairs: [
      ['Schnee (snow)', 'weiß'], ['Gras', 'grün'], ['Banane', 'gelb'], ['Tomate', 'rot'], ['Himmel (sky)', 'blau'], ['Kaffee', 'braun'], ['Nacht', 'schwarz'],
    ]},
    { type: 'listen', title: 'Wie schreibt man das? Hören Sie die Buchstaben und schreiben Sie das Wort.', spell: true, items: ['Uhr', 'Brille', 'Tasche', 'Schlüssel', 'Handy', 'Kette'] },
    { type: 'tf', title: 'Lesen: Produktinformationen', text: 'Modell „Klassik": Die Brille ist ein Klassiker. Sie ist rund und aus Metall. Sie ist schwarz und sehr leicht.\nModell „Frühling": Die Brille ist eckig und aus Kunststoff. Sie ist orange oder dunkelgrün-gelb. Designer: Opuk Eicher.', items: [
      ['„Klassik" ist eckig.', false], ['„Klassik" ist aus Metall.', true], ['„Frühling" ist aus Holz.', false], ['„Frühling" gibt es in zwei Farben.', true],
    ]},
    { type: 'order', title: 'Fragen & bitten', items: [
      { words: ['Wie', 'heißt', 'das', 'auf', 'Deutsch', '?'], en: 'What is that called in German?' },
      { words: ['Wie', 'schreibt', 'man', 'das', '?'], en: 'How do you spell that?' },
      { words: ['Noch', 'einmal', ',', 'bitte', '.'], en: 'Once more, please.' },
      { words: ['Die', 'Uhr', 'ist', 'aus', 'Metall', '.'], en: 'The watch is made of metal.' },
    ]},
    { type: 'write', title: 'Schreiben: Produktinformation', prompt: 'Describe an object you own (bag, watch, glasses, phone) like a product text: what it is, colour, material, shape, one opinion.', checklist: ['Das ist ein/eine …', 'Er/Es/Sie ist … (colour)', 'aus … (material)', 'shape (rund / eckig)', 'opinion (praktisch, leicht, schön)'], model: 'Das ist meine Uhr. Sie ist aus Metall und sehr leicht. Sie ist rund und schwarz. Ich finde sie sehr praktisch.' },
    { type: 'speak', title: 'Sprechen: Wie heißt das auf Deutsch?', prompt: 'Point at 5 objects around you. For each: ask the question, answer with ein/eine, spell the word, and say thanks + reply.', keywords: ['Wie heißt das', 'Das ist ein', 'Danke', 'Bitte'], model: 'Entschuldigung, wie heißt das auf Deutsch? – Das ist eine Tasse. – Wie bitte? – Eine Tasse. – Wie schreibt man das? – T-A-S-S-E. – Danke! – Bitte schön.' },
  ],
  drill: [
    { de: 'Was ist das?', en: 'What is that?' },
    { de: 'Das ist ein Schlüssel.', en: 'That is a key.' },
    { de: 'Das ist eine Brille.', en: 'Those are glasses. (a pair of)' },
    { de: 'Das ist kein Handy.', en: 'That is not a mobile phone.' },
    { de: 'Das ist keine Uhr.', en: 'That is not a watch.' },
    { de: 'Wie heißt das auf Deutsch?', en: 'What is that called in German?' },
    { de: 'Wie schreibt man das?', en: 'How do you spell that?' },
    { de: 'Noch einmal, bitte.', en: 'Once more, please.' },
    { de: 'Ich glaube, das ist eine Kamera.', en: 'I think that is a camera.' },
    { de: 'Ja, das glaube ich auch.', en: 'Yes, I think so too.' },
    { de: 'Die Tasche ist aus Leder.', en: 'The bag is made of leather.' },
    { de: 'Sie ist rot und sehr leicht.', en: 'It is red and very light. (the bag)' },
    { de: 'Der Tisch ist aus Holz.', en: 'The table is made of wood.' },
    { de: 'Vielen Dank!', en: 'Many thanks!' },
    { de: 'Bitte schön.', en: 'You\'re welcome.' },
    { de: 'Kein Problem.', en: 'No problem.' },
    { de: 'Ich habe keine Kinder.', en: 'I have no children.' },
  ],
  exam: [
    { type: 'form', exam: 'Start Deutsch 1 · Schreiben Teil 1', title: 'Formular: Bestellung (5–7 Lücken)', text: 'Ihr Freund Jonas Becker möchte im Internet eine Wanduhr bestellen (Bestellnummer 08245, Farbe: weiß, aus Metall, 1 Stück). Er wohnt in der Gartenstraße 7 in 50672 Köln. Er ist am 14.03.1998 geboren. Seine Telefonnummer ist 0221 667788.', fields: [
      ['Anrede (Herr/Frau)', 'Herr'], ['Vorname', 'Jonas'], ['Straße, Hausnummer', 'Gartenstraße 7'], ['PLZ, Ort', '50672 Köln'], ['Geburtsdatum', '14.03.1998|14.3.1998'], ['Bestellnummer', '08245'], ['Farbe', 'weiß'],
    ]},
    { type: 'write', exam: 'Start Deutsch 1 · Schreiben Teil 2', title: 'Kurze Mitteilung (~30 Wörter)', prompt: 'Ihre Freundin hat am Freitag Geburtstag. Sie haben ein Geschenk (eine Uhr). Schreiben Sie ihr eine kurze E-Mail: Was ist das Geschenk? Wie ist es (Farbe, Material)? Fragen Sie: Hat sie am Freitag Zeit?', checklist: ['Greeting (Liebe … / Hallo …)', 'Point 1: the present', 'Point 2: describe it', 'Point 3: the question', 'Closing (Viele Grüße)', '~30 words'], model: 'Liebe Sara,\nam Freitag hast du Geburtstag! Ich habe ein Geschenk für dich: eine Uhr. Sie ist rund und aus Metall. Die Farbe ist blau. Hast du am Freitag Zeit?\nViele Grüße\nArya' },
    { type: 'listen', exam: 'Start Deutsch 1 · Sprechen Teil 1', title: 'Spell back: write the word the examiner spells.', spell: true, items: ['Bleistift', 'Feuerzeug', 'Flasche'] },
  ],
});
})();
