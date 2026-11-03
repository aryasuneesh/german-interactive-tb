(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L4', n: 4, module: 2, level: 'A1.1', pages: '25–28',
  title: 'Der Tisch ist schön!',
  topic: 'Möbel – furniture, prices, opinions',
  goals: [
    'Name furniture with the correct article (der/das/die)',
    'Refer to things with er / es / sie',
    'Ask for prices and say prices (numbers up to 1,000,000)',
    'Say what you think of something (Ich finde … schön)',
    'Handle a shop-assistant conversation (Brauchen Sie Hilfe?)',
  ],
  vocab: [
    { group: 'Möbel', items: [
      N('pl', 'Möbel', undefined, 'furniture (plural)'),
      N('m', 'Tisch', 'Tische', 'table'), N('m', 'Stuhl', 'Stühle', 'chair'), N('m', 'Schrank', 'Schränke', 'cupboard, wardrobe'),
      N('m', 'Sessel', 'Sessel', 'armchair'), N('m', 'Teppich', 'Teppiche', 'carpet, rug'), N('m', 'Spiegel', 'Spiegel', 'mirror'),
      N('m', 'Kühlschrank', 'Kühlschränke', 'fridge'), N('m', 'Herd', 'Herde', 'stove, cooker'),
      N('n', 'Bett', 'Betten', 'bed'), N('n', 'Sofa', 'Sofas', 'sofa'), N('n', 'Regal', 'Regale', 'shelf'), N('n', 'Bild', 'Bilder', 'picture'),
      N('n', 'Waschbecken', 'Waschbecken', 'washbasin'),
      N('f', 'Lampe', 'Lampen', 'lamp'), N('f', 'Couch', 'Couches', 'couch'), N('f', 'Kommode', 'Kommoden', 'chest of drawers'),
      N('f', 'Badewanne', 'Badewannen', 'bathtub'), N('f', 'Dusche', 'Duschen', 'shower'),
    ]},
    { group: 'Bewerten – adjectives', items: [
      W('schön', 'beautiful, nice'), W('hässlich', 'ugly'), W('groß', 'big'), W('klein', 'small'),
      W('teuer', 'expensive'), W('billig', 'cheap'), W('günstig', 'good value, inexpensive'),
      W('modern', 'modern'), W('alt', 'old'), W('neu', 'new'), W('praktisch', 'practical'), W('unpraktisch', 'impractical'),
      W('bequem', 'comfortable'), W('gut', 'good'), W('schlecht', 'bad'), W('toll', 'great'), W('super', 'super'),
      W('zu', 'too', 'Der Tisch ist zu groß.'), W('sehr', 'very'), W('aber', 'but; (really — emphasis)', 'Das ist aber teuer!'), W('wirklich', 'really'),
    ]},
    { group: 'Einkaufen & Preise', items: [
      N('m', 'Euro', 'Euro', 'euro (no plural ending with numbers)', '5 Euro'), N('m', 'Cent', 'Cent', 'cent'),
      N('m', 'Preis', 'Preise', 'price'), N('n', 'Sonderangebot', 'Sonderangebote', 'special offer'),
      N('m', 'Verkäufer', 'Verkäufer', 'salesperson'), N('m', 'Designer', 'Designer', 'designer'),
      N('f', 'Hilfe', '', 'help'),
      V('kosten', 'to cost', 'Wie viel kostet der Tisch?'), V('finden', 'to find; to think (opinion)', 'Ich finde die Lampe schön.'),
      V('brauchen', 'to need', 'Brauchen Sie Hilfe?'),
      W('wie viel?', 'how much?'), W('nur', 'only'), W('denn', '(softens questions)', 'Wie viel kostet denn der Tisch?'),
    ]},
    { group: 'Zahlen ab 100', items: [
      W('hundert / einhundert', '100'), W('zweihundert', '200'), W('tausend / eintausend', '1,000'), W('zehntausend', '10,000'),
      W('hunderttausend', '100,000'), W('eine Million', '1,000,000'),
    ]},
  ],
  grammar: [
    { title: 'Definite article: der / das / die', html: `
      <p>Every German noun has a gender. <b>Always learn the noun with its article.</b> The colour code in this app: <span class="g-m">der = blue</span>, <span class="g-n">das = green</span>, <span class="g-f">die = red</span>, <span class="g-pl">plural die = grey</span>.</p>
      <table class="gtable"><tr><th>maskulin</th><th>neutral</th><th>feminin</th><th>Plural</th></tr>
      <tr><td class="g-m">der Tisch</td><td class="g-n">das Bett</td><td class="g-f">die Lampe</td><td class="g-pl">die Möbel</td></tr></table>
      <p><b>Rules of thumb that are actually reliable:</b></p>
      <ul><li><b>die</b>: most nouns ending in <b>-e</b> (die Lampe, die Kommode), and <i>always</i> -ung, -heit, -keit, -ion, -tät, -in</li>
      <li><b>das</b>: always <b>-chen, -lein</b>, -ment, -um; most -o loanwords (das Sofa, das Büro, das Foto)</li>
      <li><b>der</b>: male people, days, months, seasons, most <b>-er</b> tools/machines (der Computer, der Drucker), -ismus, -ling</li></ul>` },
    { title: 'Pronouns for things: er / es / sie', html: `
      <p>In German, things are not "it". The pronoun follows the <b>grammatical gender</b>.</p>
      <table class="gtable"><tr><th>noun</th><th>pronoun</th><th>example</th></tr>
      <tr><td class="g-m">der Tisch</td><td><b>er</b></td><td>Der Tisch ist schön. <b>Er</b> kostet 1478 Euro.</td></tr>
      <tr><td class="g-n">das Bett</td><td><b>es</b></td><td>Das Bett ist toll. <b>Es</b> ist sehr bequem.</td></tr>
      <tr><td class="g-f">die Lampe</td><td><b>sie</b></td><td>Die Lampe ist modern. <b>Sie</b> kommt aus Italien.</td></tr>
      <tr><td class="g-pl">die Stühle</td><td><b>sie</b></td><td>Die Stühle sind alt. <b>Sie</b> kosten nur 20 Euro.</td></tr></table>
      <p>⚠ English speakers want to say "es" for everything. A lamp is <b>sie</b>, a table is <b>er</b>.</p>` },
    { title: 'Adjectives after sein / finden: no ending', html: `
      <p>When an adjective comes after the noun (with <i>sein</i>, <i>finden</i>), it has <b>no ending</b>:</p>
      <ul><li>Der Tisch ist <b>schön</b>. · Die Lampe ist <b>teuer</b>. · Ich finde das Sofa <b>praktisch</b>.</li></ul>
      <p>Modifiers: <b>sehr</b> (very) · <b>zu</b> (too, negative!) · <b>nicht</b> · <b>aber</b> (surprise: <i>Das ist aber teuer!</i>)</p>
      <p><i>Der Schrank ist zu groß</i> = it's too big (it won't fit). <i>sehr groß</i> = just very big.</p>` },
    { title: 'Big numbers & prices', html: `
      <p>German writes numbers <b>as one word</b>: 1478 = <i>(ein)tausendvierhundertachtundsiebzig</i>.</p>
      <p>Punctuation is the opposite of English: <b>1.000</b> = one thousand · <b>9,95 €</b> = nine euros ninety-five.</p>
      <table class="gtable"><tr><td>119 €</td><td>hundertneunzehn Euro</td></tr>
      <tr><td>9,95 €</td><td>neun Euro fünfundneunzig</td></tr>
      <tr><td>0,50 €</td><td>fünfzig Cent</td></tr>
      <tr><td>2.500 €</td><td>zweitausendfünfhundert Euro</td></tr>
      <tr><td>1.000.000</td><td>eine Million</td></tr></table>` },
  ],
  phrases: [
    ['Beratungsgespräch', ['Brauchen Sie Hilfe? – Ja, bitte. / Nein, danke.', 'Wie viel kostet (denn) der Tisch? / Was kostet die Lampe?', 'Er kostet 1478 Euro. / Die Lampe kostet nur 119 Euro.', 'Das ist ein Sonderangebot.']],
    ['etwas bewerten', ['Das ist (sehr / zu / aber) teuer / günstig / billig.', 'Der Tisch ist zu groß / zu klein.', 'Ich finde die Lampe (wirklich) sehr schön.', 'Das finde ich auch. / Das finde ich nicht.', 'Finden Sie? / Findest du?']],
  ],
  exercises: [
    { type: 'sort', title: 'der, das oder die?', buckets: ['der', 'das', 'die'], items: [
      ['Tisch', 'der'], ['Bett', 'das'], ['Lampe', 'die'], ['Stuhl', 'der'], ['Sofa', 'das'], ['Kommode', 'die'], ['Schrank', 'der'], ['Regal', 'das'],
      ['Couch', 'die'], ['Sessel', 'der'], ['Bild', 'das'], ['Dusche', 'die'], ['Teppich', 'der'], ['Spiegel', 'der'], ['Badewanne', 'die'],
    ]},
    { type: 'gap', title: 'er, es oder sie?', items: [
      'Der Tisch ist schön. {Er} kostet 200 Euro.', 'Das Sofa ist modern. {Es} ist sehr bequem.', 'Die Lampe ist toll. {Sie} kommt aus Italien.',
      'Wie findest du den Schrank? – {Er} ist zu groß.', 'Das Bett ist super, aber {es} ist teuer.', 'Die Stühle sind alt. {Sie} kosten nur 20 Euro.',
      'Wie viel kostet die Kommode? – {Sie} kostet 340 Euro.',
    ]},
    { type: 'listen', title: 'Preise: Hören Sie und schreiben Sie die Zahl (nur Ziffern, ohne €).', numbers: true, items: ['119', '1478', '250', '999', '3500', '45', '780', '12000'] },
    { type: 'gap', title: 'Zahlen schreiben', items: [
      '300 = {dreihundert}', '1.000 = {tausend|eintausend}', '450 = {vierhundertfünfzig}', '2.000 = {zweitausend}', '777 = {siebenhundertsiebenundsiebzig}',
    ]},
    { type: 'order', title: 'Im Möbelhaus', items: [
      { words: ['Brauchen', 'Sie', 'Hilfe', '?'], en: 'Do you need help?' },
      { words: ['Wie', 'viel', 'kostet', 'der', 'Schrank', '?'], en: 'How much is the wardrobe?' },
      { words: ['Das', 'ist', 'aber', 'teuer', '!'], en: 'That\'s really expensive!' },
      { words: ['Ich', 'finde', 'die', 'Lampe', 'sehr', 'schön', '.'], en: 'I find the lamp very beautiful.' },
      { words: ['Der', 'Tisch', 'ist', 'zu', 'groß', '.'], en: 'The table is too big.' },
    ]},
    { type: 'mc', title: 'Bewerten: Was passt?', items: [
      { q: 'The sofa costs 99 €. It\'s good value. →', options: ['Das ist günstig.', 'Das ist zu teuer.', 'Das ist hässlich.'], a: 0 },
      { q: 'The wardrobe does not fit in your room. →', options: ['Er ist zu klein.', 'Er ist zu groß.', 'Er ist praktisch.'], a: 1 },
      { q: '„Ich finde den Tisch schön." – You agree:', options: ['Das finde ich nicht.', 'Das finde ich auch.', 'Finden Sie?'], a: 1 },
      { q: '„Ich finde die Lampe toll." – You are doubtful:', options: ['Finden Sie?', 'Ja, bitte.', 'Gute Nacht.'], a: 0 },
      { q: 'Shop assistant: „Brauchen Sie Hilfe?" – You just want to look:', options: ['Ja, bitte.', 'Nein, danke.', 'Bitte schön.'], a: 1 },
    ]},
    { type: 'dialogue', title: 'Hören: Im Möbelhaus', lines: [
      ['A', 'Guten Tag. Brauchen Sie Hilfe?'],
      ['B', 'Ja, bitte. Wie viel kostet denn der Tisch?'],
      ['A', 'Der Tisch kostet 1478 Euro.'],
      ['B', 'Das ist aber sehr teuer!'],
      ['A', 'Finden Sie? Der Designer heißt Enzo Ferrari. Und die Lampe hier kostet nur 119 Euro. Das ist ein Sonderangebot.'],
      ['B', 'Die Lampe ist wirklich sehr schön und nicht teuer!'],
    ], questions: [
      { q: 'Der Tisch kostet …', options: ['147,80 €', '1478 €', '1748 €'], a: 1 },
      { q: 'Die Lampe kostet …', options: ['190 €', '119 €', '911 €'], a: 1 },
      { q: 'Die Kundin findet die Lampe …', options: ['zu teuer', 'schön und günstig', 'hässlich'], a: 1 },
    ]},
    { type: 'speak', title: 'Sprechen: Rollenspiel im Möbelhaus', prompt: 'You are the customer. Ask the price of 2 items, react to the price, and give your opinion. Use: Wie viel kostet …? · Das ist (zu) teuer / günstig · Ich finde … · er/es/sie.', keywords: ['kostet', 'finde', 'teuer'], model: 'Entschuldigung, wie viel kostet das Sofa? – 899 Euro. – Das ist zu teuer. Und was kostet der Sessel? – 249 Euro. – Oh, er ist sehr schön und günstig. Ich finde den Sessel toll.' },
    { type: 'write', title: 'Schreiben: Meine Möbel', prompt: 'Describe 4 pieces of furniture in your room. Use the article, a pronoun, and an opinion for each.', checklist: ['Correct der/das/die', 'er/es/sie to refer back', 'An adjective after ist (no ending)', 'One price'], model: 'Mein Tisch ist klein. Er ist alt, aber praktisch. Das Bett ist neu. Es ist sehr bequem. Die Lampe ist modern. Sie kostet nur 15 Euro. Der Stuhl ist hässlich, aber praktisch.' },
  ],
  drill: [
    { de: 'Brauchen Sie Hilfe?', en: 'Do you need help? (formal)' },
    { de: 'Ja, bitte.', en: 'Yes, please.' },
    { de: 'Nein, danke.', en: 'No, thank you.' },
    { de: 'Wie viel kostet der Tisch?', en: 'How much does the table cost?' },
    { de: 'Er kostet zweihundert Euro.', en: 'It costs two hundred euros. (the table)' },
    { de: 'Was kostet die Lampe?', en: 'What does the lamp cost?' },
    { de: 'Sie kostet nur neunzehn Euro.', en: 'It costs only nineteen euros. (the lamp)' },
    { de: 'Das ist aber teuer!', en: 'That\'s really expensive!' },
    { de: 'Das ist sehr günstig.', en: 'That is very good value.' },
    { de: 'Das Bett ist zu groß.', en: 'The bed is too big.' },
    { de: 'Es ist sehr bequem.', en: 'It is very comfortable. (the bed)' },
    { de: 'Ich finde das Sofa schön.', en: 'I find the sofa beautiful.' },
    { de: 'Das finde ich auch.', en: 'I think so too.' },
    { de: 'Das finde ich nicht.', en: 'I don\'t think so.' },
    { de: 'Findest du?', en: 'Do you think so? (informal)' },
    { de: 'Das ist ein Sonderangebot.', en: 'That is a special offer.' },
    { de: 'Der Stuhl ist praktisch.', en: 'The chair is practical.' },
  ],
  exam: [
    { type: 'dialogue', exam: 'Start Deutsch 1 · Hören Teil 1', title: 'Short dialogue, a/b/c (you hear it twice)', twice: true, lines: [
      ['A', 'Entschuldigung, was kostet das Regal?'],
      ['B', 'Das Regal? Normal kostet es 89 Euro, aber heute ist es ein Sonderangebot. Nur 59 Euro.'],
      ['A', '59? Super, das nehme ich.'],
    ], questions: [{ q: 'Wie viel kostet das Regal heute?', options: ['89 Euro', '59 Euro', '95 Euro'], a: 1 }] },
    { type: 'tf', exam: 'Start Deutsch 1 · Lesen Teil 3', title: 'Schild im Möbelhaus — richtig oder falsch?', text: 'MÖBEL-MARKT KRAUSE\nAlle Sofas: −30 %!\nÖffnungszeiten: Montag – Freitag 10 – 20 Uhr, Samstag 10 – 18 Uhr\nSonntag geschlossen', items: [
      ['Die Sofas sind heute billiger.', true], ['Am Sonntag kann man Möbel kaufen.', false], ['Am Samstag ist das Geschäft bis 20 Uhr offen.', false],
    ]},
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 2', title: 'Thema „Möbel / Wohnung": fragen und antworten', prompt: 'Cards: Tisch · Preis · Lampe · Bett. Make a question for each card, then answer it yourself.', keywords: ['Wie viel kostet', 'Wie findest du', 'Hast du'], model: 'Wie findest du den Tisch? – Er ist schön. · Wie viel kostet die Lampe? – Sie kostet 30 Euro. · Ist dein Bett bequem? – Ja, es ist sehr bequem.' },
  ],
});
})();
