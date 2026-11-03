(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'M4', n: 12.2, module: 4, level: 'A1.1', pages: '69–72', plus: true,
  title: 'Modul 4 Plus – Wiederholung L10–12',
  topic: 'Lesemagazin · Film-Stationen · Projekt Landeskunde · Ausklang',
  goals: [
    'Read a travel blog in the Perfekt (Anja in Speyer, Mannheim, Schwetzingen)',
    'Describe a way to work and a day with times (von … bis, um)',
    'Read tourist information about public transport (Zürich)',
    'Use separable verbs in a song (PartyMax)',
    'Mixed review test of L10–12',
  ],
  vocab: [
    { group: 'Lesemagazin, Film & Projekt', items: [
      N('m', 'Verkehr', '', 'traffic'), N('m', 'Dom', 'Dome', 'cathedral'), N('m', 'Tipp', 'Tipps', 'tip'), N('m', 'Schlosspark', 'Schlossparks', 'palace gardens'), N('m', 'Kirschbaum', 'Kirschbäume', 'cherry tree'),
      V('losfahren', 'to set off (driving) → ist losgefahren'), V('losgehen', 'to set off (walking) → ist losgegangen'), V('blühen', 'to bloom'), W('vorbei', 'over, past', 'Das Wochenende ist vorbei.'), P('Wie schade!', 'What a pity!'),
      N('f', 'Betriebsfeier', 'Betriebsfeiern', 'office party'), N('n', 'Faschingsfest', 'Faschingsfeste', 'carnival party'), N('f', 'Führerscheinprüfung', 'Führerscheinprüfungen', 'driving test'), V('schaffen', 'to manage, pass → hat geschafft'),
      N('n', 'Verkehrsnetz', 'Verkehrsnetze', 'transport network'), N('pl', 'öffentliche Verkehrsmittel', undefined, 'public transport'), N('n', 'Wassertaxi', 'Wassertaxis', 'water taxi'),
      N('f', 'Bergbahn', 'Bergbahnen', 'mountain railway'), N('f', 'Aussicht', 'Aussichten', 'view'), N('f', 'Sehenswürdigkeit', 'Sehenswürdigkeiten', 'sight, attraction'), V('besichtigen', 'to visit, see (sights)'), V('genießen', 'to enjoy'), N('n', 'Velo', 'Velos', 'bicycle (CH)'),
    ]},
  ],
  grammar: [
    { title: 'Review: what you must know cold after Modul 4', html: `
      <table class="gtable"><tr><th>topic</th><th>key forms</th></tr>
      <tr><td>separable verbs</td><td>Ich <b>steige</b> jetzt <b>ein</b>. · Er <b>lädt</b> uns alle <b>ein</b>. · Kannst du mich <b>abholen</b>?</td></tr>
      <tr><td>Perfekt haben</td><td>Ich <b>habe</b> gefrühstückt / ein<b>ge</b>kauft / telefonier<b>t</b>.</td></tr>
      <tr><td>Perfekt sein</td><td>Ich <b>bin</b> nach Mannheim gefahren / losgegangen / angekommen.</td></tr>
      <tr><td>war / hatte</td><td>Die Musik <b>war</b> toll. · Ich <b>hatte</b> viel Spaß.</td></tr>
      <tr><td>time</td><td>von 10 bis 11 Uhr · ab 9 Uhr · im April · im Sommer · vor einem Jahr</td></tr>
      <tr><td>wohin?</td><td><b>nach</b> Mannheim · <b>in die</b> Schweiz · <b>zum</b> Zoo / <b>zur</b> Arbeit</td></tr></table>` },
  ],
  phrases: [],
  exercises: [
    { type: 'tf', title: 'Lesemagazin: Der Reise-Blog von Anja Ebner', text: 'Freitag, 12. April, 22:15 Uhr: Um 12 Uhr bin ich losgefahren. Es war nicht viel Verkehr. Schon um 15 Uhr war ich in meinem Hotel in Speyer. Danach bin ich gleich losgegangen. Die Stadt ist über 2000 Jahre alt! Am Abend war ich in einem Restaurant und habe „Pfälzer" gegessen – Schweinefleisch mit Kartoffeln. Dazu ein Glas Pfälzer Wein. Sehr lecker!\nSamstag, 13. April, 15:30 Uhr: Ich habe bis 10 Uhr geschlafen. Dann habe ich gefrühstückt und bin am Mittag nach Mannheim gefahren. Ich finde Mannheim super. Jetzt kaufe ich noch ein bisschen ein und heute Abend gehe ich in ein Konzert oder zum Tanzen in einen Club.\nSonntag, 14. April, 10:30 Uhr: Gestern war ich tanzen. Die Musik war toll und die Leute waren sehr nett. Ich habe einen Tipp bekommen: Im Schlosspark von Schwetzingen blühen die Kirschbäume.\nSonntag, 14. April, 12 Uhr: Der Tipp war super! So viel Rosa habe ich noch nie gesehen. Ich möchte noch nicht nach Hause fahren. Aber leider ist das Wochenende schon fast vorbei. Wie schade!', items: [
      ['Anja ist am Freitag um 12 Uhr losgefahren.', true], ['Es war viel Verkehr.', false], ['Speyer ist über 2000 Jahre alt.', true], ['Am Samstag hat Anja bis 10 Uhr geschlafen.', true], ['Anja findet Mannheim nicht schön.', false], ['In Schwetzingen hat Anja Kirschbäume gesehen.', true],
    ]},
    { type: 'match', title: 'Was hat Anja wann gemacht?', pairs: [['Freitag', 'nach Speyer gefahren, Pfälzer gegessen'], ['Samstag', 'lange geschlafen, nach Mannheim gefahren'], ['Samstagabend', 'tanzen gegangen'], ['Sonntag', 'im Schlosspark Schwetzingen gewesen']] },
    { type: 'tf', title: 'Film-Stationen: Der Weg ins Büro', text: 'Hanna wohnt in Wessling und arbeitet in München. Sie hat kein Auto. Sie steigt in Wessling in die S-Bahn ein. Am Hauptbahnhof steigt sie um. Um Viertel vor acht kommt sie im Büro an.', items: [
      ['Hanna fährt mit dem Auto ins Büro.', false], ['Sie steigt am Hauptbahnhof um.', true], ['Sie kommt um 7:45 Uhr im Büro an.', true],
    ]},
    { type: 'write', title: 'Film-Stationen: Martins Tag (Perfekt)', prompt: 'Write Martin\'s day yesterday in the Perfekt, using these notes: bis 9:30 schlafen · 9:30–10:00 frühstücken und Zeitung lesen · 10–11 aufräumen und sauber machen · 11–13 kochen · 13:00 Silvia anrufen · 14–16:30 Silvia im Rosengarten treffen, Spaziergang machen · 18:30 zu Abend essen · 19–21 Jenga spielen.', checklist: ['Gestern hat Martin bis halb zehn geschlafen.', 'von … bis … / um …', 'separable verbs: aufgeräumt, angerufen', 'sein or haben chosen correctly', 'Dann … / Danach …'], model: 'Gestern hat Martin bis halb zehn geschlafen. Dann hat er gefrühstückt und Zeitung gelesen. Von 10 bis 11 Uhr hat er aufgeräumt und sauber gemacht. Von 11 bis 13 Uhr hat er gekocht. Um 13 Uhr hat er Silvia angerufen. Am Nachmittag hat er Silvia im Rosengarten getroffen und sie haben einen Spaziergang gemacht. Um halb sieben hat er zu Abend gegessen. Von 19 bis 21 Uhr haben sie Jenga gespielt.' },
    { type: 'tf', title: 'Projekt Landeskunde: Unterwegs in Zürich', text: 'Die Stadt Zürich hat ein sehr gutes öffentliches Verkehrsnetz. Viele Zürcher fahren nicht mit dem Auto oder dem Velo, sie fahren mit Bus und Tram. Die öffentlichen Verkehrsmittel sind praktisch und schnell und fahren sehr oft.\nTipps für Touristen: Mit Bussen, Trams, S-Bahnen oder Wassertaxis können Sie Zürich einfach, bequem und schnell besichtigen. Die Wassertaxis fahren über die Limmat. Möchten Sie Zürich lieber von oben sehen? Dann nehmen Sie doch eine der vier Bergbahnen und genießen Sie die tolle Aussicht. (CH: Velo = Fahrrad)', items: [
      ['In Zürich nehmen wenige Menschen die öffentlichen Verkehrsmittel.', false], ['Touristen können Zürich gut mit öffentlichen Verkehrsmitteln besichtigen.', true], ['Die Bergbahnen fahren über die Limmat.', false], ['Velo ist ein Schweizer Wort für Fahrrad.', true],
    ]},
    { type: 'speak', title: 'Projekt: Ein Tag als Tourist', prompt: 'Tell your (planned or real) day as a tourist in a city in the Perfekt: which transport, where to, how long it took.', keywords: ['haben', 'genommen', 'sind', 'gefahren', 'gedauert'], model: 'Erst haben wir den Bus genommen und sind zum Zoo gefahren. Das hat 15 Minuten gedauert. Dann haben wir die Tram genommen und sind zum Botanischen Garten gefahren. Am Nachmittag sind wir mit dem Wassertaxi über die Limmat gefahren.' },
    { type: 'gap', title: 'Ausklang: PartyMax (trennbare Verben)', items: [
      'Heute Abend steigen wir {ein}. (einsteigen)', 'DJ PartyMax bringt seine Hits {mit}. (mitbringen)', 'Er lädt uns alle {ein}. (einladen)', 'Wir fliegen {ab}! (abfliegen)', 'Wir hören nicht mehr {auf} bis morgen früh um acht. (aufhören)', 'Die Woche ist nicht so toll {gewesen}. (sein – Perfekt)',
    ]},
    { type: 'mc', title: 'Test L10–12 (gemischt)', items: [
      { q: 'Ich ___ dich morgen ___. (anrufen)', options: ['anrufe … —', 'rufe … an', 'rufe an … —'], a: 1 }, { q: 'Wann ___ der Zug ___? (ankommen)', options: ['kommt … an', 'ankommt … —', 'kommen … an'], a: 0 },
      { q: 'Er ___ den Bus. (nehmen)', options: ['nehmt', 'nimmt', 'nemt'], a: 1 }, { q: 'Ich ___ lange geschlafen.', options: ['habe', 'bin'], a: 0 },
      { q: 'Sie ___ nach Wien gefahren.', options: ['hat', 'ist'], a: 1 }, { q: 'Partizip von „einkaufen":', options: ['geeinkauft', 'eingekauft', 'einkauft'], a: 1 },
      { q: 'Partizip von „telefonieren":', options: ['getelefoniert', 'telefoniert', 'telefonierte'], a: 1 }, { q: 'Wie ___ die Party? – Toll!', options: ['hatte', 'war', 'ist gewesen'], a: 1 },
      { q: 'Ich habe ___ Mai Geburtstag.', options: ['am', 'im', 'um'], a: 1 }, { q: 'Wir fliegen ___ Schweiz.', options: ['nach', 'in die', 'in der'], a: 1 },
      { q: '1985 = ?', options: ['neunzehnhundertfünfundachtzig', 'eintausendneunhundertachtzigfünf', 'neunzehnachtzigfünf'], a: 0 }, { q: 'End a call with a friend:', options: ['Mach\'s gut!', 'Gleichfalls!', 'Guten Appetit!'], a: 0 },
    ]},
  ],
  drill: [
    { de: 'Um zwölf Uhr bin ich losgefahren.', en: 'At twelve o\'clock I set off.' },
    { de: 'Es war nicht viel Verkehr.', en: 'There wasn\'t much traffic.' },
    { de: 'Ich habe einen Tipp bekommen.', en: 'I got a tip.' },
    { de: 'Ich möchte noch nicht nach Hause fahren.', en: 'I don\'t want to go home yet.' },
    { de: 'Das Wochenende ist fast vorbei.', en: 'The weekend is almost over.' },
    { de: 'Wie schade!', en: 'What a pity!' },
    { de: 'Am Hauptbahnhof steigt sie um.', en: 'She changes at the main station.' },
  ],
  exam: [],
});
})();
