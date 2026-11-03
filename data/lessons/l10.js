(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L10', n: 10, module: 4, level: 'A1.1', pages: '57–60',
  title: 'Ich steige jetzt in die U-Bahn ein.',
  topic: 'Reisen – transport, stations, announcements, separable verbs',
  goals: [
    'Name means of transport and places at the station / airport',
    'Understand announcements (Durchsagen): platform, time, number',
    'Ask for travel information (Wann fährt …? Wo …?)',
    'Use separable verbs (einsteigen, ankommen, anrufen …)',
    'End a phone call (Bis bald! Mach\'s gut!)',
  ],
  vocab: [
    { group: 'Verkehrsmittel', items: [
      N('m', 'Bus', 'Busse', 'bus'), N('f', 'U-Bahn', 'U-Bahnen', 'underground, metro'), N('f', 'S-Bahn', 'S-Bahnen', 'suburban train'),
      N('f', 'Straßenbahn', 'Straßenbahnen', 'tram (CH/A: das Tram)'), N('m', 'Zug', 'Züge', 'train'), N('n', 'Taxi', 'Taxis', 'taxi'),
      N('n', 'Flugzeug', 'Flugzeuge', 'aeroplane'), N('n', 'Auto', 'Autos', 'car'), N('n', 'Fahrrad', 'Fahrräder', 'bicycle'), N('n', 'Verkehrsmittel', 'Verkehrsmittel', 'means of transport'),
    ]},
    { group: 'Bahnhof & Flughafen', items: [
      N('m', 'Bahnhof', 'Bahnhöfe', 'station'), N('m', 'Hauptbahnhof', 'Hauptbahnhöfe', 'main station'), N('m', 'Bahnsteig', 'Bahnsteige', 'platform (CH: das Perron)'),
      N('n', 'Gleis', 'Gleise', 'track, platform number', 'auf Gleis 10'), N('f', 'Haltestelle', 'Haltestellen', 'stop (bus/tram)'), N('m', 'Halt', 'Halte', 'stop', 'Nächster Halt: …'),
      N('m', 'Flughafen', 'Flughäfen', 'airport'), N('m', 'Flug', 'Flüge', 'flight'), N('n', 'Gepäck', '', 'luggage'), N('m', 'Koffer', 'Koffer', 'suitcase'),
      N('f', 'Fahrkarte', 'Fahrkarten', 'ticket'), N('f', 'Minute', 'Minuten', 'minute'), N('f', 'Vorsicht', '', 'caution', 'Vorsicht an der Bahnsteigkante!'), N('f', 'Durchsage', 'Durchsagen', 'announcement'),
    ]},
    { group: 'Trennbare Verben', items: [
      V('einsteigen', 'to get on (ich steige ein)', 'Ich steige jetzt in die U-Bahn ein.'), V('aussteigen', 'to get off', 'Wir steigen am Hauptbahnhof aus.'), V('umsteigen', 'to change (trains)', 'Ich steige in Köln um.'),
      V('abfahren', 'to depart (er fährt ab)', 'Der Zug fährt um 9 Uhr ab.'), V('ankommen', 'to arrive', 'Wann kommt der Zug an?'), V('anrufen', 'to call (phone)', 'Ich rufe dich an.'),
      V('abholen', 'to pick up', 'Holst du mich ab?'), V('einkaufen', 'to shop', 'Ich kaufe noch Brötchen ein.'), V('fernsehen', 'to watch TV (er sieht fern)', 'Am Abend sehe ich fern.'),
      V('mitbringen', 'to bring along', 'Bringst du Wein mit?'), V('aufstehen', 'to get up', 'Ich stehe um 7 Uhr auf.'), V('mitkommen', 'to come along', 'Kommst du mit?'),
    ]},
    { group: 'Andere Wörter', items: [
      V('nehmen', 'to take (du nimmst, er nimmt)', 'Ich nehme den Bus.'), V('bekommen', 'to get, receive'), V('warten', 'to wait'),
      W('gerade', 'just now, at the moment'), W('nächste', 'next', 'der nächste Zug'), W('also', 'so, well'), W('zu Hause', 'at home'), W('nach Hause', '(to) home'),
      P('Bis bald! / Bis morgen!', 'See you soon / tomorrow!'), P('Mach\'s gut!', 'Take care!'),
    ]},
  ],
  grammar: [
    { title: 'Separable verbs (trennbare Verben)', html: `
      <p>Many verbs have a prefix (<b>ein</b>-steigen, <b>an</b>-kommen, <b>an</b>-rufen). In a main clause the prefix <b>splits off and goes to the end</b>. This is the same bracket as with können.</p>
      <table class="gtable"><tr><th>Pos. 1</th><th>Pos. 2</th><th>middle</th><th>end</th></tr>
      <tr><td>Ich</td><td class="verb">steige</td><td>jetzt in die U-Bahn</td><td class="verb">ein</td></tr>
      <tr><td>Der Zug</td><td class="verb">kommt</td><td>um 13:50 Uhr</td><td class="verb">an</td></tr>
      <tr><td>Wann</td><td class="verb">fährt</td><td>der Zug</td><td class="verb">ab?</td></tr>
      <tr><td class="verb">Holst</td><td>du</td><td>mich bitte</td><td class="verb">ab?</td></tr>
      <tr><td>Ich</td><td class="verb">kann</td><td>dich am Bahnhof</td><td class="verb">abholen</td></tr></table>
      <p>With a modal verb (können, möchten) the verb stays <b>together</b> at the end: <i>Ich kann dich <b>abholen</b>.</i></p>
      <p>Common separable prefixes: <b>ab-, an-, auf-, aus-, ein-, mit-, um-, fern-, zu-</b>. Stress is always on the prefix: <u>an</u>kommen, <u>ein</u>steigen.</p>` },
    { title: 'nehmen, fahren: vowel change', html: `<table class="gtable"><tr><th></th><th>nehmen</th><th>abfahren</th></tr><tr><td>ich</td><td>nehme</td><td>fahre ab</td></tr><tr><td>du</td><td><b>nimmst</b></td><td><b>fährst</b> ab</td></tr><tr><td>er/sie</td><td><b>nimmt</b></td><td><b>fährt</b> ab</td></tr><tr><td>wir</td><td>nehmen</td><td>fahren ab</td></tr></table><p>⚠ <i>nehmen</i> also changes a consonant: n<b>imm</b>st, n<b>imm</b>t.</p>` },
    { title: 'Announcements: listen for numbers', html: `<p>In Durchsagen (exam Hören Teil 2!), focus on <b>Gleis</b> (platform), <b>Uhrzeit</b> (official 24-hour time), <b>Zug-/Flugnummer</b> and <b>Verspätung</b> (delay).</p>
      <ul><li>„Der ICE 756 aus Hamburg kommt heute um 13:50 Uhr auf Gleis 7 an."</li><li>„Die Passagiere von Flug LH 243 können jetzt einsteigen."</li><li>„Nächster Halt: Mönckebergstraße. Ausstieg links."</li><li>„Bitte Vorsicht an der Bahnsteigkante!"</li></ul>` },
  ],
  phrases: [
    ['am Bahnhof Informationen einholen', ['Wann fährt der Zug nach Essen ab? – Um 12:48 Uhr.', 'Von welchem Gleis? / Wo fährt der Zug ab? – Auf Gleis 10.', 'Wann kommt der Zug in Hamburg an?', 'Wo muss ich umsteigen? – In Köln.']],
    ['abholen & Telefon beenden', ['Holst du mich bitte am Bahnhof ab? – Ja, ich hole dich um … ab.', 'Gut, dann bis morgen. / Bis bald! / Mach\'s gut! / Tschüs!', 'Ich rufe dich später an.']],
  ],
  exercises: [
    { type: 'order', title: 'Trennbare Verben: Präfix ans Ende', items: [
      { words: ['Ich', 'steige', 'jetzt', 'in', 'die', 'U-Bahn', 'ein', '.'], en: 'I\'m getting on the underground now.' },
      { words: ['Der', 'Zug', 'kommt', 'um', '13:50', 'Uhr', 'an', '.'], en: 'The train arrives at 13:50.' },
      { words: ['Wann', 'fährt', 'der', 'Bus', 'ab', '?'], en: 'When does the bus leave?' },
      { words: ['Holst', 'du', 'mich', 'bitte', 'ab', '?'], en: 'Will you pick me up, please?' },
      { words: ['Wir', 'steigen', 'in', 'Hamburg', 'um', '.'], en: 'We change in Hamburg.' },
      { words: ['Ich', 'kann', 'dich', 'am', 'Bahnhof', 'abholen', '.'], en: 'I can pick you up at the station.' },
    ]},
    { type: 'gap', title: 'Ergänzen Sie das Verb (zwei Teile!)', items: [
      'Ella {steigt} gerade in den Zug {ein}. (einsteigen)', 'Wann {kommst} du {an}? (ankommen)', 'Ich {hole} dich am Bahnhof {ab}. (abholen)',
      'Ich {kaufe} noch Brötchen {ein}. (einkaufen)', 'Am Abend {sieht} er {fern}. (fernsehen)', '{Rufst} du mich morgen {an}? (anrufen)', 'Der Zug {fährt} um 9:15 Uhr {ab}. (abfahren)', '{Bringst} du Wein {mit}? (mitbringen)',
    ]},
    { type: 'gap', title: 'nehmen & fahren', items: ['Ich {nehme} heute den Zug.', '{Nimmst} du ein Taxi?', 'Er {nimmt} die U-Bahn.', 'Wohin {fährst} du?', '{Nehmt} ihr den Bus?'] },
    { type: 'sort', title: 'der, das oder die?', buckets: ['der', 'das', 'die'], items: [
      ['Bus', 'der'], ['Taxi', 'das'], ['U-Bahn', 'die'], ['Zug', 'der'], ['Flugzeug', 'das'], ['Straßenbahn', 'die'], ['Bahnhof', 'der'], ['Gleis', 'das'], ['Haltestelle', 'die'], ['Flughafen', 'der'], ['Gepäck', 'das'], ['Fahrkarte', 'die'],
    ]},
    { type: 'listen', title: 'Durchsagen: Schreiben Sie die Zahl / Uhrzeit, die Sie hören.', items: [
      { say: 'Der ICE 756 aus Hamburg kommt heute um 13 Uhr 50 an. Welche Uhrzeit?', a: '13:50' },
      { say: 'Die Passagiere von Flug 243 können jetzt einsteigen. Welcher Flug?', a: '243' },
      { say: 'Der Bus Nummer 58 fährt am Montag nur bis zum Ostbahnhof. Welcher Bus?', a: '58' },
      { say: 'Der Zug nach Wien fährt heute von Gleis 12 ab. Welches Gleis?', a: '12' },
    ], numbers: true },
    { type: 'mc', title: 'Was passt?', items: [
      { q: '„Wo fährt der Zug nach Stuttgart ab?"', options: ['Auf Gleis 5.', 'Um 9 Uhr.', 'Mit dem Taxi.'], a: 0 },
      { q: '„Es ist schon sehr spät. Jetzt fährt keine U-Bahn mehr."', options: ['Dann nehmen wir ein Taxi.', 'Dann steigen wir ein.', 'Auf Wiederhören.'], a: 0 },
      { q: '„Holst du mich ab?"', options: ['Ja, um 9:45 Uhr am Hauptbahnhof.', 'Ja, ich steige um.', 'Nein, Gleis 3.'], a: 0 },
      { q: 'End of a phone call with a friend:', options: ['Mach\'s gut!', 'Guten Appetit!', 'Gleichfalls!'], a: 0 },
    ]},
    { type: 'dialogue', title: 'Hören: Karin und Ella', lines: [
      ['A', 'Guten Morgen Ella, hier ist Karin. Wo bist du?'],
      ['B', 'Hallo Karin. Ich steige gerade in den Zug ein.'],
      ['A', 'Wann kommst du an?'],
      ['B', 'Um 9 Uhr 35 am Ostbahnhof und um 9 Uhr 45 am Hauptbahnhof.'],
      ['A', 'Kannst du bitte am Hauptbahnhof aussteigen? Ich hole dich ab.'],
      ['B', 'Super, vielen Dank. Ich kaufe noch Brötchen ein, dann können wir zusammen frühstücken.'],
    ], questions: [
      { q: 'Wo ist Ella?', options: ['zu Hause', 'im Zug', 'am Hauptbahnhof'], a: 1 },
      { q: 'Wann kommt sie am Hauptbahnhof an?', options: ['9:35', '9:45', '9:15'], a: 1 },
      { q: 'Was kauft Ella ein?', options: ['Kaffee', 'Brötchen', 'eine Fahrkarte'], a: 1 },
    ]},
    { type: 'write', title: 'Schreiben: SMS – Holst du mich ab?', prompt: 'You arrive by train tomorrow. Text a friend: when you arrive, where, ask them to pick you up, say what you\'ll bring.', checklist: ['Ich komme … um … an', 'am Hauptbahnhof / Gleis …', 'Holst du mich ab?', 'Ich bringe … mit', 'Bis morgen!'], model: 'Hallo Lena, ich komme morgen um 18:20 Uhr am Hauptbahnhof an, Gleis 4. Holst du mich bitte ab? Ich bringe Kuchen mit! Bis morgen, Arya' },
    { type: 'speak', title: 'Sprechen: Am Bahnhof', prompt: 'Ask at the information desk: when the train to Berlin leaves, from which platform, when it arrives, and if you have to change.', keywords: ['Wann fährt', 'ab', 'Gleis', 'kommt', 'an', 'umsteigen'], model: 'Entschuldigung, wann fährt der Zug nach Berlin ab? – Um 10:12 Uhr. – Von welchem Gleis? – Gleis 8. – Und wann kommt der Zug in Berlin an? – Um 14:30 Uhr. – Muss ich umsteigen? – Ja, in Hannover.' },
  ],
  drill: [
    { de: 'Ich steige jetzt in die U-Bahn ein.', en: 'I\'m getting on the underground now.' },
    { de: 'Wann fährt der Zug ab?', en: 'When does the train leave?' },
    { de: 'Der Zug fährt um neun Uhr ab.', en: 'The train leaves at nine o\'clock.' },
    { de: 'Auf welchem Gleis?', en: 'On which platform?' },
    { de: 'Wann kommst du an?', en: 'When do you arrive?' },
    { de: 'Ich komme um zehn Uhr an.', en: 'I arrive at ten o\'clock.' },
    { de: 'Wo steigst du um?', en: 'Where do you change?' },
    { de: 'Ich steige in Köln um.', en: 'I change in Cologne.' },
    { de: 'Holst du mich ab?', en: 'Will you pick me up?' },
    { de: 'Ich hole dich am Bahnhof ab.', en: 'I\'ll pick you up at the station.' },
    { de: 'Ich rufe dich an.', en: 'I\'ll call you.' },
    { de: 'Ich nehme ein Taxi.', en: 'I\'ll take a taxi.' },
    { de: 'Nimmst du den Bus?', en: 'Are you taking the bus?' },
    { de: 'Ich kaufe noch ein.', en: 'I\'m still going to do some shopping.' },
    { de: 'Am Abend sehe ich fern.', en: 'In the evening I watch TV.' },
    { de: 'Bis bald!', en: 'See you soon!' },
    { de: 'Mach\'s gut!', en: 'Take care!' },
  ],
  exam: [
    { type: 'tf', exam: 'Start Deutsch 1 · Hören Teil 2', title: 'Durchsagen (heard ONCE in the exam): play once, then answer', audioOnce: true, text: 'Achtung an Gleis 7: Der ICE 756 aus Hamburg kommt heute 20 Minuten später an, um 14 Uhr 10. Bitte beachten Sie: Der Zug fährt heute von Gleis 9 weiter nach München.', items: [
      ['Der Zug aus Hamburg kommt pünktlich.', false], ['Der Zug kommt um 14:10 Uhr an.', true], ['Der Zug fährt heute von Gleis 7 nach München.', false],
    ]},
    { type: 'dialogue', exam: 'Start Deutsch 1 · Hören Teil 3', title: 'Telefonnachricht (twice)', twice: true, lines: [
      ['A', 'Hallo Max, hier ist Claudia. Ich komme heute nicht um fünf, sondern erst um sieben Uhr an. Der Zug hat Verspätung. Kannst du mich trotzdem abholen? Ich steige am Ostbahnhof aus. Bis später!'],
    ], questions: [
      { q: 'Wann kommt Claudia an?', options: ['um 5 Uhr', 'um 7 Uhr', 'um 17:30 Uhr'], a: 1 },
      { q: 'Wo steigt sie aus?', options: ['am Hauptbahnhof', 'am Ostbahnhof', 'am Flughafen'], a: 1 },
    ]},
  ],
});
})();
