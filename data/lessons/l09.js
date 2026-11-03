(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L9', n: 9, module: 3, level: 'A1.1', pages: '49–52',
  title: 'Ich möchte was essen, Onkel Harry.',
  topic: 'Essen & Trinken – food, eating habits, at the table',
  goals: [
    'Name food and drinks with their articles',
    'Talk about what you like to eat and drink (mögen, gern)',
    'Offer, accept and decline food politely (möchten)',
    'Make small talk at the table (Guten Appetit! – Danke, gleichfalls!)',
    'Build compound nouns (Kartoffel + Salat = der Kartoffelsalat)',
  ],
  vocab: [
    { group: 'Lebensmittel', items: [
      N('n', 'Brot', 'Brote', 'bread'), N('n', 'Brötchen', 'Brötchen', 'bread roll (A: die Semmel)'), N('f', 'Butter', '', 'butter'),
      N('m', 'Käse', '', 'cheese'), N('f', 'Wurst', 'Würste', 'sausage; cold cuts'), N('m', 'Schinken', 'Schinken', 'ham'),
      N('n', 'Ei', 'Eier', 'egg'), N('f', 'Milch', '', 'milk'), N('n', 'Müsli', 'Müslis', 'muesli'), N('m', 'Joghurt', 'Joghurts', 'yoghurt'),
      N('n', 'Obst', '', 'fruit (collective)'), N('m', 'Apfel', 'Äpfel', 'apple'), N('f', 'Orange', 'Orangen', 'orange'), N('f', 'Banane', 'Bananen', 'banana'), N('f', 'Zitrone', 'Zitronen', 'lemon'),
      N('n', 'Gemüse', '', 'vegetables'), N('f', 'Tomate', 'Tomaten', 'tomato (A: der Paradeiser)'), N('f', 'Kartoffel', 'Kartoffeln', 'potato'), N('f', 'Zwiebel', 'Zwiebeln', 'onion'), N('m', 'Salat', 'Salate', 'salad; lettuce'),
      N('m', 'Fisch', 'Fische', 'fish'), N('n', 'Fleisch', '', 'meat'), N('m', 'Reis', '', 'rice'), N('pl', 'Nudeln', undefined, 'pasta, noodles'),
      N('f', 'Suppe', 'Suppen', 'soup'), N('m', 'Braten', 'Braten', 'roast'), N('m', 'Kuchen', 'Kuchen', 'cake'), N('f', 'Schokolade', 'Schokoladen', 'chocolate'),
      N('n', 'Eis', '', 'ice cream; ice'), N('f', 'Sahne', '', 'cream (A: der Schlagobers)'), N('m', 'Zucker', '', 'sugar'), N('n', 'Salz', '', 'salt'),
    ]},
    { group: 'Getränke', items: [
      N('m', 'Kaffee', 'Kaffees', 'coffee'), N('m', 'Tee', 'Tees', 'tea'), N('n', 'Wasser', '', 'water'), N('n', 'Mineralwasser', '', 'mineral water'),
      N('m', 'Saft', 'Säfte', 'juice'), N('m', 'Orangensaft', 'Orangensäfte', 'orange juice'), N('n', 'Bier', 'Biere', 'beer'), N('m', 'Wein', 'Weine', 'wine'), N('n', 'Getränk', 'Getränke', 'drink'),
    ]},
    { group: 'Mahlzeiten & Restaurant', items: [
      N('n', 'Frühstück', 'Frühstücke', 'breakfast'), N('n', 'Mittagessen', 'Mittagessen', 'lunch'), N('n', 'Abendessen', 'Abendessen', 'dinner'),
      N('n', 'Essen', 'Essen', 'food; meal'), N('f', 'Speisekarte', 'Speisekarten', 'menu'), N('f', 'Vorspeise', 'Vorspeisen', 'starter'),
      N('n', 'Hauptgericht', 'Hauptgerichte', 'main course'), N('n', 'Dessert', 'Desserts', 'dessert (die Nachspeise)'), N('n', 'Stück', 'Stücke', 'piece', 'ein Stück Kuchen'),
      N('n', 'Lieblingsessen', '', 'favourite food'), N('m', 'Hunger', '', 'hunger', 'Ich habe Hunger.'), N('m', 'Durst', '', 'thirst', 'Ich habe Durst.'),
      N('f', 'Einladung', 'Einladungen', 'invitation'), N('m', 'Kühlschrank', 'Kühlschränke', 'fridge'),
    ]},
    { group: 'Verben & Wörter', items: [
      V('essen', 'to eat (du isst, er isst)', 'Was isst du gern?'), V('trinken', 'to drink'), V('mögen', 'to like (ich mag, du magst)', 'Ich mag keinen Fisch.'),
      V('möchten', 'would like (ich möchte)', 'Ich möchte einen Kaffee.'), V('frühstücken', 'to have breakfast'), V('schmecken', 'to taste (good)', 'Das schmeckt gut!'),
      V('kennen', 'to know (be familiar with)'), V('kochen', 'to cook'),
      W('etwas / was', 'something; some', 'Ich möchte was essen.'), W('schon', 'already'), W('erst', 'only (not until)'), W('lecker', 'tasty'),
      P('Guten Appetit!', 'Enjoy your meal!'), P('Danke, gleichfalls! / ebenfalls!', 'Thanks, you too!'), P('Ja, gern. / Ja, bitte.', 'Yes, please.'), P('Nein, danke.', 'No, thank you.'),
    ]},
  ],
  grammar: [
    { title: 'mögen and möchten', html: `
      <table class="gtable"><tr><th></th><th>mögen (like)</th><th>möchten (would like)</th></tr>
      <tr><td>ich</td><td><b>mag</b></td><td><b>möchte</b></td></tr>
      <tr><td>du</td><td><b>magst</b></td><td>möchtest</td></tr>
      <tr><td>er/sie/es</td><td><b>mag</b></td><td><b>möchte</b></td></tr>
      <tr><td>wir</td><td>mögen</td><td>möchten</td></tr>
      <tr><td>ihr</td><td>mögt</td><td>möchtet</td></tr>
      <tr><td>sie/Sie</td><td>mögen</td><td>möchten</td></tr></table>
      <p><b>mögen</b> = like in general (+ noun): <i>Ich <b>mag</b> Fisch. Magst du Kaffee?</i><br>
      <b>möchten</b> = want now, politely (+ noun or + infinitive at the end): <i>Ich <b>möchte</b> einen Tee. Ich <b>möchte</b> was <b>essen</b>.</i></p>
      <p>With verbs, "I like doing" = <b>gern</b>: <i>Ich esse gern Fisch.</i> Don't say <s>Ich mag essen Fisch</s>.</p>` },
    { title: 'Accusative again: food as object', html: `
      <p>mögen, möchten, essen, trinken, haben, brauchen all take the <b>accusative</b>. Only masculine changes:</p>
      <ul><li>Ich möchte <b>einen</b> Kaffee. (der Kaffee)</li><li>Ich mag <b>keinen</b> Fisch. (der Fisch)</li><li>Ich esse <b>ein</b> Brötchen / <b>eine</b> Suppe.</li></ul>
      <p>Uncountables (Milch, Obst, Brot as substance) have <b>no article</b>: <i>Ich trinke Milch. Ich esse kein Fleisch.</i></p>` },
    { title: 'essen: e → i', html: `<table class="gtable"><tr><td>ich esse</td><td>wir essen</td></tr><tr><td>du <b>isst</b></td><td>ihr esst</td></tr><tr><td>er/sie <b>isst</b></td><td>sie/Sie essen</td></tr></table><p>Same group: sprechen (spricht), treffen (trifft), nehmen (nimmt, L10), geben (gibt).</p>` },
    { title: 'Compound nouns (Komposita)', html: `
      <p>German glues nouns together. The <b>last</b> word decides gender and plural, and the <b>first</b> word carries the stress.</p>
      <table class="gtable"><tr><td>die Kartoffel + der Salat</td><td>= <b>der</b> <u>Kar</u>toffelsalat</td></tr>
      <tr><td>der Käse + das Brötchen</td><td>= <b>das</b> <u>Kä</u>sebrötchen</td></tr>
      <tr><td>die Zwiebel + die Suppe</td><td>= <b>die</b> <u>Zwie</u>belsuppe</td></tr>
      <tr><td>das Obst + der Kuchen</td><td>= <b>der</b> <u>Obst</u>kuchen</td></tr>
      <tr><td>die Zitrone + das Eis</td><td>= <b>das</b> Zi<u>tro</u>neneis (linking -n-)</td></tr>
      <tr><td>die Orange + der Saft</td><td>= <b>der</b> Orangensaft</td></tr></table>` },
  ],
  phrases: [
    ['über Essgewohnheiten sprechen', ['Was isst / trinkst du gern zum Frühstück?', 'Ich esse gern Müsli. / Ich trinke immer Kaffee.', 'Magst du Fisch? – Ja, sehr gern. / Nein, nicht so gern.', 'Ich mag keinen Fisch / kein Fleisch / keine Wurst.', 'Was ist dein Lieblingsessen? – Mein Lieblingsessen ist …', 'Ich habe Hunger / Durst.']],
    ['beim Essen', ['Möchten Sie / Möchtest du (noch) einen Kaffee / etwas Kuchen?', 'Ja, gern. / Ja, bitte. / Nein, danke.', 'Guten Appetit! – Danke, gleichfalls! / Danke, ebenfalls!', 'Das schmeckt (sehr) gut! / Lecker!', 'Ein Stück Kuchen mit Sahne, bitte.']],
  ],
  exercises: [
    { type: 'sort', title: 'der, das oder die?', buckets: ['der', 'das', 'die'], items: [
      ['Kuchen', 'der'], ['Brötchen', 'das'], ['Kartoffel', 'die'], ['Apfel', 'der'], ['Suppe', 'die'], ['Schinken', 'der'], ['Ei', 'das'], ['Wurst', 'die'],
      ['Käse', 'der'], ['Brot', 'das'], ['Milch', 'die'], ['Fisch', 'der'], ['Obst', 'das'], ['Zwiebel', 'die'], ['Tee', 'der'], ['Frühstück', 'das'],
    ]},
    { type: 'gap', title: 'mögen oder möchten?', items: [
      'Ich {mag} keinen Fisch. (mögen)', '{Magst} du Kaffee? (mögen)', 'Er {mag} Schokolade sehr. (mögen)', 'Wir {mögen} Pizza. (mögen)',
      '{Möchten} Sie einen Salat mit Schinken und Ei? (möchten)', 'Ich {möchte} was essen. (möchten)', '{Möchtest} du noch Tee? (möchten)', '{Mögt} ihr Käse? (mögen)', 'Sie {möchte} ein Stück Kuchen. (möchten – she)',
    ]},
    { type: 'gap', title: 'Akkusativ: einen / ein / eine / keinen …', items: [
      'Ich möchte {einen} Kaffee, bitte.', 'Ich mag {keinen} Fisch.', 'Ich esse {ein} Brötchen mit Käse.', 'Wir kochen {eine} Suppe.', 'Er trinkt {keinen} Tee.', 'Hast du {einen} Apfel?', 'Sie isst {kein} Fleisch.',
    ]},
    { type: 'gap', title: 'essen & trinken', items: ['Was {isst} du gern zum Frühstück? (essen)', 'Er {isst} immer Brot mit Wurst. (essen)', 'Was {trinkst} ihr? (trinken)', '{Esst} ihr gern Fisch? (essen)'] },
    { type: 'gap', title: 'Komposita: Artikel + Wort', items: [
      'die Kartoffel + der Salat = {der Kartoffelsalat}', 'der Käse + das Brötchen = {das Käsebrötchen}', 'die Zwiebel + die Suppe = {die Zwiebelsuppe}', 'das Obst + der Kuchen = {der Obstkuchen}', 'die Orange + der Saft = {der Orangensaft}', 'die Tomate + die Suppe = {die Tomatensuppe}',
    ]},
    { type: 'mc', title: 'Was sagt man?', items: [
      { q: '„Guten Appetit!"', options: ['Danke, gleichfalls!', 'Ja, gleichfalls!', 'Nein, bitte!'], a: 0 },
      { q: '„Möchten Sie ein Eis?" (yes)', options: ['Oh ja, bitte!', 'Nein, bitte!', 'Ja, gleichfalls!'], a: 0 },
      { q: '„Hier ist die Suppe. Möchten Sie auch einen Salat?" (no)', options: ['Nein, bitte!', 'Nein, danke!', 'Danke, ebenfalls!'], a: 1 },
      { q: '„Frühstücken wir zusammen?"', options: ['Ja, gern!', 'Ja, danke!', 'Bitte!'], a: 0 },
      { q: '„Magst du Fisch?" (not really)', options: ['Nein, gern.', 'Nein, nicht so gern.', 'Bitte, nein.'], a: 1 },
    ]},
    { type: 'tf', title: 'Lesen: Speisekarte „Zur schönen Aussicht"', text: 'Öffnungszeiten: Dienstag–Sonntag 11 bis 24 Uhr, Montag Ruhetag\nVorspeisen: Kartoffelsuppe mit Brot 3,80 € · Tomatensuppe mit Sahne 3,30 €\nHauptgerichte: Schweinebraten mit Knödel 9,80 € · Fisch mit Reis 8,60 € · Wiener Schnitzel mit Salat 9,30 €\nDesserts: Warmer Apfelstrudel mit Vanilleeis 4,80 € · Schokoladenkuchen 2,50 €\nGetränke: Bier 0,3 l 2,80 € · Mineralwasser 0,4 l 2,00 € · Orangensaft 0,4 l 3,20 €', items: [
      ['Das Restaurant ist am Montag geschlossen.', true], ['Die Tomatensuppe kostet 3,80 €.', false], ['Es gibt Fisch mit Reis.', true], ['Der Schokoladenkuchen ist teurer als der Apfelstrudel.', false],
    ]},
    { type: 'speak', title: 'Sprechen: Thema Essen und Trinken', prompt: 'Answer: Was isst du gern zum Frühstück? Was trinkst du nicht gern? Was ist dein Lieblingsessen? Magst du Fisch? Then offer your guest coffee and cake.', keywords: ['gern', 'mag', 'Lieblingsessen', 'Möchtest'], model: 'Zum Frühstück esse ich gern Müsli mit Obst. Ich trinke nicht gern Milch. Mein Lieblingsessen ist Reis mit Gemüse. Fisch mag ich nicht so gern. – Möchtest du einen Kaffee und ein Stück Kuchen? – Ja, gern!' },
    { type: 'write', title: 'Schreiben: Mein Lieblingsmenü', prompt: 'Write your favourite menu (Vorspeise, Hauptgericht, Dessert, Getränk) and 3 sentences about what you like / don\'t like.', checklist: ['Vorspeise / Hauptgericht / Dessert / Getränk', 'ich esse gern …', 'ich mag keinen / kein / keine …', 'one compound noun'], model: 'Vorspeise: Tomatensuppe. Hauptgericht: Reis mit Gemüse. Dessert: Schokoladenkuchen mit Sahne. Getränk: Orangensaft.\nIch esse sehr gern Gemüse. Ich mag keinen Fisch. Kaffee trinke ich immer zum Frühstück.' },
  ],
  drill: [
    { de: 'Ich habe Hunger.', en: 'I\'m hungry.' },
    { de: 'Ich habe Durst.', en: 'I\'m thirsty.' },
    { de: 'Ich möchte was essen.', en: 'I\'d like to eat something.' },
    { de: 'Was isst du gern zum Frühstück?', en: 'What do you like to eat for breakfast?' },
    { de: 'Ich esse gern Brötchen mit Käse.', en: 'I like eating rolls with cheese.' },
    { de: 'Magst du Fisch?', en: 'Do you like fish?' },
    { de: 'Nein, ich mag keinen Fisch.', en: 'No, I don\'t like fish.' },
    { de: 'Ich trinke immer Kaffee.', en: 'I always drink coffee.' },
    { de: 'Möchten Sie einen Tee?', en: 'Would you like a tea? (formal)' },
    { de: 'Ja, gern.', en: 'Yes, gladly.' },
    { de: 'Nein, danke.', en: 'No, thank you.' },
    { de: 'Guten Appetit!', en: 'Enjoy your meal!' },
    { de: 'Danke, gleichfalls!', en: 'Thanks, you too!' },
    { de: 'Das schmeckt sehr gut!', en: 'That tastes very good!' },
    { de: 'Ein Stück Kuchen, bitte.', en: 'A piece of cake, please.' },
    { de: 'Was ist dein Lieblingsessen?', en: 'What is your favourite food?' },
    { de: 'Ich esse kein Fleisch.', en: 'I don\'t eat meat.' },
  ],
  exam: [
    { type: 'dialogue', exam: 'Start Deutsch 1 · Hören Teil 1', title: 'Im Café (twice)', twice: true, lines: [
      ['A', 'Guten Tag. Was möchten Sie?'],
      ['B', 'Ein Stück Apfelkuchen mit Sahne, bitte. Und einen Tee.'],
      ['A', 'Tee haben wir leider nicht mehr. Möchten Sie einen Kaffee?'],
      ['B', 'Dann ein Mineralwasser, bitte.'],
    ], questions: [{ q: 'Was trinkt die Frau?', options: ['Tee', 'Kaffee', 'Mineralwasser'], a: 2 }] },
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 2', title: 'Thema „Essen und Trinken"', prompt: 'Cards: Frühstück · Kuchen · Tee · Lieblingsessen. Ask and answer.', keywords: ['Was', 'gern', 'Magst', 'Trinkst'], model: 'Was isst du zum Frühstück? – Ich esse Müsli. · Magst du Kuchen? – Ja, sehr gern. · Trinkst du gern Tee? – Nein, ich trinke lieber Kaffee. · Was ist dein Lieblingsessen? – Pizza.' },
  ],
});
})();
