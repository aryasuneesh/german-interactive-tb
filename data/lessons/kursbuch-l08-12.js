/* Kursbuch p.46–68 — tasks matched to the actual Menschen A1.1 situations of L8–L12
 * (Karina/Manuel/Tamara, Onkel Harry & Tim, Fridolin, the man in the U-Bahn, Anja & Michi, Feste und Events).
 * Appended after the lesson's own exercises (keys stay stable). Loaded before arbeitsbuch.js. */
(() => {
const { N, V, W, P } = DE;
const add = (id, { vocab = [], exercises = [], exam = [] }) => {
  const l = DE.lessons[id]; if (!l) return;
  if (vocab.length) l.vocab.push({ group: 'Kursbuch: mehr Wörter', items: vocab });
  exercises.forEach((e) => l.exercises.push(Object.assign({ kb: true }, e, { title: 'KB · ' + e.title })));
  exam.forEach((e) => l.exam.push(e));
};

add('L8', {
  vocab: [N('m', 'Lieblingstag', 'Lieblingstage', 'favourite day'), N('f', 'Lieblingstageszeit', 'Lieblingstageszeiten', 'favourite time of day'), P('Komme doch nicht.', 'Not coming after all. (curt)'), P('Leider kann ich doch nicht kommen.', 'Unfortunately I can\'t come after all.')],
  exercises: [
    { type: 'tf', title: 'Karina hat ein Problem (SMS)', text: 'Manuel: Hallo Karina! Gehen wir heute Nachmittag ins Schwimmbad?\nJonas: Hi Karina, gehen wir heute Nachmittag ins Kino?\nKarina an Manuel: Lieber Manuel, heute Nachmittag habe ich leider keine Zeit. Vielleicht morgen? Liebe Grüße, Karina', items: [
      ['Karina geht heute Nachmittag mit Manuel ins Schwimmbad.', false], ['Karina schreibt höflich.', true], ['Jonas möchte ins Kino gehen.', true],
    ]},
    { type: 'dialogue', title: 'Was macht Manuel heute Nachmittag? (Chat)', lines: [
      ['A', 'Was machst du heute, Tamara? Lust auf Schwimmbad?'], ['B', 'Noch nicht. Gehen wir ins Kino?'], ['A', 'Wann denn? Um vier oder um sechs?'],
      ['B', 'Sechs Uhr ist zu spät. Heute Abend habe ich keine Zeit. Gehen wir um vier?'], ['A', 'Okay. Dann bis vier!'],
    ], questions: [
      { q: 'Manuel und Tamara gehen ins …', options: ['Schwimmbad', 'Kino', 'Museum'], a: 1 }, { q: 'Manuel trifft Tamara heute um …', options: ['vier Uhr', 'sechs Uhr', 'halb vier'], a: 0 },
    ]},
    { type: 'mc', title: 'Absagen: höflich oder unhöflich?', items: [
      { q: '„Timo! Komme doch nicht. Keine Zeit. Sina"', options: ['höflich', 'unhöflich'], a: 1 },
      { q: '„Lieber Timo, leider kann ich doch nicht kommen. Ich habe keine Zeit. Vielleicht können wir morgen Abend ins Theater gehen? Liebe Grüße, Sina"', options: ['höflich', 'unhöflich'], a: 0 },
      { q: 'What makes a refusal polite in German?', options: ['Anrede + leider + Grund + Vorschlag + Gruß', 'Short and direct', 'Only „Nein, danke."'], a: 0 },
    ]},
    { type: 'speak', title: 'Lieblingstag', prompt: 'Welcher Tag ist Ihr Lieblingstag? Was ist Ihre Lieblingstageszeit? Was machen Sie da? (Use am + day / part of day, and inversion.)', keywords: ['Lieblingstag', 'am', 'Abend'], model: 'Mein Lieblingstag ist der Mittwoch. Besonders der Abend. Am Mittwochabend tanze ich. Meine Lieblingstageszeit ist der Morgen. Am Morgen trinke ich Kaffee und lese.' },
  ],
});

add('L9', {
  vocab: [N('m', 'Honig', '', 'honey'), N('f', 'Marmelade', 'Marmeladen', 'jam'), N('n', 'Schinkenbrot', 'Schinkenbrote', 'ham sandwich'), N('n', 'Käsebrot', 'Käsebrote', 'cheese sandwich'),
    N('f', 'Wurstsuppe', 'Wurstsuppen', 'sausage soup'), N('f', 'Fischsuppe', 'Fischsuppen', 'fish soup'), N('m', 'Schokoladenkuchen', 'Schokoladenkuchen', 'chocolate cake'),
    N('f', 'Leberknödelsuppe', 'Leberknödelsuppen', 'liver dumpling soup (Bavaria/Austria)'), N('n', 'Wiener Schnitzel', 'Wiener Schnitzel', 'breaded veal escalope (Austria)'), N('n', 'Zürcher Geschnetzeltes', '', 'sliced veal in cream sauce (Zurich)'),
    N('m', 'Apfelstrudel', 'Apfelstrudel', 'apple strudel'), N('f', 'Rote Grütze', '', 'red berry pudding (North Germany)'), N('m', 'Labskaus', '', 'corned beef & potato mash (Hamburg)'), P('Bitte sehr!', 'Here you are!')],
  exercises: [
    { type: 'dialogue', title: 'Ich möchte was essen, Onkel Harry.', lines: [
      ['A', 'Onkel Harry, ich habe Hunger. Ich möchte was essen.'], ['B', 'Was möchtest du denn, Tim? Ein Schinkenbrot?'], ['A', 'Nein, ich mag keinen Schinken.'],
      ['B', 'Ein Käsebrot?'], ['A', 'Ich mag keinen Käse. Hast du Schokolade?'], ['B', 'Nein, ich habe keine Schokolade. Aber ich habe Kuchen.'], ['A', 'Super! Ein Stück Kuchen, bitte!'],
    ], questions: [
      { q: 'Tim hat …', options: ['Durst', 'Hunger'], a: 1 }, { q: 'Tim mag keinen …', options: ['Schinken', 'Kuchen'], a: 0 },
      { q: 'Onkel Harry hat keine …', options: ['Schokolade', 'Brötchen'], a: 0 }, { q: 'Tim isst …', options: ['ein Schinkenbrot', 'ein Käsebrot', 'ein Stück Kuchen'], a: 2 },
    ]},
    { type: 'mc', title: 'Comic: Eine Einladung (Fridolin)', items: [
      { q: 'Guten Appetit!', options: ['Danke, gleichfalls!', 'Bitte sehr!', 'Nein, danke.'], a: 0 },
      { q: 'Möchten Sie noch etwas Wurstsuppe? (you don\'t want more)', options: ['Ja, gern!', 'Nein, danke!', 'Gleichfalls!'], a: 1 },
      { q: 'Möchten Sie einen Kaffee? (yes)', options: ['Oh ja! Bitte.', 'Bitte sehr!', 'Danke, ebenfalls!'], a: 0 },
      { q: 'The host hands you the coffee and says:', options: ['Bitte sehr!', 'Gleichfalls!', 'Guten Appetit!'], a: 0 },
    ]},
    { type: 'gap', title: 'Kartoffeleis und Orangenbraten: Komposita', items: [
      'der Schinken + das Brot = {das Schinkenbrot}', 'die Schokolade + der Kuchen = {der Schokoladenkuchen}', 'der Fisch + die Suppe = {die Fischsuppe}', 'die Kartoffel + das Eis = {das Kartoffeleis}', 'die Orange + der Braten = {der Orangenbraten}', 'der Käse + die Pizza = {die Käsepizza}',
    ]},
    { type: 'match', title: 'Typische Gerichte aus D-A-CH: Woher kommt das?', pairs: [
      ['Wiener Schnitzel', 'Österreich'], ['Zürcher Geschnetzeltes', 'die Schweiz'], ['Labskaus / Rote Grütze', 'Norddeutschland'], ['Leberknödelsuppe', 'Bayern / Österreich'], ['Käsefondue', 'die Schweiz (Käse, Wein, Brot)'],
    ]},
    { type: 'speak', title: 'Frühstücks-Interview', prompt: 'Was isst du zum Frühstück? Wann frühstückst du – in der Woche und am Wochenende? (mögen + inversion: In der Woche frühstücke ich …)', keywords: ['zum Frühstück', 'In der Woche', 'am Wochenende', 'mag'], model: 'Ich mag keinen Käse, aber Müsli esse ich sehr gern. In der Woche frühstücke ich schon um sechs. Aber am Sonntag frühstücke ich oft erst um elf Uhr.' },
    { type: 'speak', title: 'Laden Sie zum Essen ein', prompt: 'Invite two classmates to dinner and present your menu: Als Vorspeise … Als Hauptgericht … Als Dessert …', keywords: ['Ich koche', 'Als Vorspeise', 'Als Hauptgericht', 'Kommst du'], model: 'Ich koche heute Abend etwas. Kommst du? – Was kochst du denn? – Als Vorspeise mache ich Zwiebelsuppe. Als Hauptgericht essen wir Fisch mit Reis und als Dessert gibt es Apfelstrudel. – Ja, ich komme gern!' },
  ],
});

add('L10', {
  vocab: [P('Pass auf dich auf!', 'Take care of yourself!'), P('Also dann, auf Wiedersehen!', 'Right then, goodbye!'), P('Achtung! Bitte zurückbleiben!', 'Attention! Please stand back!'), P('Bitte Vorsicht!', 'Please be careful!'), V('einfahren', 'to pull in (train) (fährt ein)', 'Am Bahnsteig zwei fährt die U2 ein.')],
  exercises: [
    { type: 'dialogue', title: 'Ich steige jetzt in die U-Bahn ein.', lines: [
      ['A', 'Hallo, mein Schatz! Ich bin noch bei Verena. Ich steige jetzt in die U-Bahn ein.'], ['B', 'Wann kommst du an?'], ['A', 'In vierzig Minuten komme ich zu Hause an. Ach, vielleicht kaufe ich noch was ein.'],
      ['B', 'Okay. Rufst du mich morgen mal an?'], ['A', 'Ja, dann rufe ich dich an. Siehst du noch ein bisschen fern?'], ['B', 'Ja. Also dann, bis bald! Pass auf dich auf!'],
    ], questions: [
      { q: 'Der Mann ist …', options: ['zu Hause', 'bei Verena'], a: 1 }, { q: 'Er steigt in die … ein.', options: ['U-Bahn', 'S-Bahn'], a: 0 }, { q: 'Er kommt in … Minuten zu Hause an.', options: ['vierzehn', 'vierzig'], a: 1 },
    ]},
    { type: 'listen', title: 'Durchsagen in der U-Bahn: Hören und schreiben Sie.', items: ['Am Bahnsteig zwei fährt die U2 ein.', 'Bitte Vorsicht!', 'Nächster Halt: Innsbrucker Ring.', 'Achtung! Bitte zurückbleiben.'] },
    { type: 'match', title: 'Am Bahnhof: Was passt?', pairs: [
      ['Nimmst du ein Taxi?', 'Nein, ich nehme die S-Bahn und steige dann in den Bus um.'], ['Bringst du einen Cappuccino mit?', 'Ja, klar.'], ['Wo fährt der Zug nach München ab?', 'Auf Gleis 10.'],
      ['Entschuldigen Sie, fährt ein Bus zum Flughafen?', 'Nein, aber die Straßenbahn fährt vom Hauptbahnhof zum Flughafen.'], ['Ich habe viel Gepäck. Holst du mich ab?', 'Ja, klar. Wann kommst du an?'],
    ]},
    { type: 'sort', title: 'Abschied: formell oder informell?', buckets: ['informell', 'formell'], items: [
      ['Tschüs!', 'informell'], ['Mach\'s gut!', 'informell'], ['Pass auf dich auf!', 'informell'], ['Bis bald!', 'informell'], ['Also dann, auf Wiedersehen.', 'formell'], ['Auf Wiederhören!', 'formell'],
    ]},
  ],
});

add('L11', {
  vocab: [N('m', 'Terminkalender', 'Terminkalender', 'diary, appointment calendar'), N('f', 'Orchesterprobe', 'Orchesterproben', 'orchestra rehearsal'), N('f', 'Dienstreise', 'Dienstreisen', 'business trip'),
    N('f', 'Privatreise', 'Privatreisen', 'private trip'), N('m', 'Kunde', 'Kunden', 'customer'), N('m', 'Geschäftspartner', 'Geschäftspartner', 'business partner'), N('m', 'Küchenschrank', 'Küchenschränke', 'kitchen cupboard'),
    W('schwanger', 'pregnant'), W('gerade', 'right now'), V('üben', 'to practise → hat geübt'), V('sagen', 'to say → hat gesagt'), V('haben', 'to have → hat gehabt (usually: hatte)')],
  exercises: [
    { type: 'tf', title: 'Anjas Terminkalender', text: 'Heute:\n8:45 Uhr – Frauenarzt Dr. Weber\n9 – 13 Uhr – arbeiten\nNachmittag: Frau Dr. Weber anrufen! · einkaufen\n18 – 21:30 Uhr – Orchesterprobe (Cello)', items: [
      ['Anja arbeitet von 9 bis 13 Uhr.', true], ['Am Abend hat Anja Orchesterprobe.', true], ['Anja ruft heute Frau Dr. Weber an.', true], ['Anja spielt Gitarre.', false],
    ]},
    { type: 'tf', title: 'Was hast du heute gemacht? (E-Mails Michi & Anja)', text: 'Michi: Hallo mein Schatz, wie geht\'s Dir? Hier ist es wie immer: den ganzen Tag mit Geschäftspartnern und Kunden gesprochen. Hast Du Frau Dr. Weber angerufen? Und wie geht\'s dem Baby? Ich habe oft an Dich gedacht!\nAnja: Hallo mein Liebster, ich habe heute Morgen mit Frau Dr. Weber telefoniert. Mit unserem Baby ist alles okay, hat sie gesagt. Sie hat gemeint, ich kann noch bis Dezember arbeiten. Von neun bis eins habe ich gearbeitet und dann hat mich Babs zum Mittagessen eingeladen. Wir haben viel geredet und gelacht. Am Abend hatte ich Orchesterprobe. Der Küchenschrank ist fertig, sie bringen ihn am Mittwoch. Ich freue mich auf Dich!', items: [
      ['Anja ist schwanger.', true], ['Michi und Anja sind Kollegen.', false], ['Michi ist auf einer Dienstreise.', true], ['Anja hat am Vormittag gearbeitet.', true], ['Babs hat Anja zum Mittagessen eingeladen.', true], ['Der Küchenschrank kommt am Montag.', false],
    ]},
    { type: 'gap', title: 'Präsens → Perfekt (aus den E-Mails)', items: [
      'er macht → er hat {gemacht}', 'er ruft an → er hat {angerufen}', 'er telefoniert → er hat {telefoniert}', 'er denkt → er hat {gedacht}', 'er spricht → er hat {gesprochen}', 'er lädt ein → er hat {eingeladen}',
      'er redet → er hat {geredet}', 'er lacht → er hat {gelacht}', 'er kauft ein → er hat {eingekauft}', 'er arbeitet → er hat {gearbeitet}', 'er meint → er hat {gemeint}', 'er schreibt → er hat {geschrieben}', 'er übt → er hat {geübt}',
    ]},
    { type: 'speak', title: 'Hast du letzten Freitag …?', prompt: 'Ask and answer: Hast du letzten Freitag E-Mails geschrieben / Freunde eingeladen / Sport gemacht? Answer with ja/nein + Perfekt.', keywords: ['Hast du', 'letzten Freitag', 'habe'], model: 'Hast du letzten Freitag Freunde eingeladen? – Nein, ich habe keine Freunde eingeladen. · Hast du Sport gemacht? – Ja, ich habe Tennis gespielt. · Was hast du letzten Freitag gemacht? – Ich habe eine E-Mail geschrieben.' },
  ],
});

add('L12', {
  vocab: [N('n', 'Event', 'Events', 'event'), N('m', 'Fan', 'Fans', 'fan'), N('f', 'Band', 'Bands', 'band'), N('f', 'Rockmusik', '', 'rock music'), W('vor drei Monaten', 'three months ago'), W('rund um die Uhr', 'round the clock'), W('Das klingt interessant.', 'That sounds interesting.')],
  exercises: [
    { type: 'tf', title: 'Feste und Events', text: 'Karneval: Er beginnt am 11. November um 11:11 Uhr. Im Februar oder März feiern die Menschen sechs Tage lang auf der Straße.\nSilvester in Berlin: In der Nacht vom 31. Dezember zum 1. Januar feiern Menschen am Brandenburger Tor die größte Open-Air-Party (mit einer Million Besuchern!).\nRock am Ring: Seit 1985 gehen viele Rockmusik-Fans im Mai oder Juni zu Rock am Ring am Nürburgring in der Eifel. Das Festival dauert zwei bis drei Tage. Es kommen 70.000 bis 90.000 Besucher. Rund um die Uhr können sie ihre Lieblingsbands hören.\nOktoberfest: Es gibt das Oktoberfest seit 1810. Es ist jedes Jahr im September und Oktober in München und dauert ungefähr zwei Wochen. Es kommen fünf bis sechs Millionen Besucher.', items: [
      ['Der Karneval beginnt am 11.11. um 11:11 Uhr.', true], ['Silvester feiert man am Brandenburger Tor in Berlin.', true], ['Rock am Ring gibt es seit 1810.', false], ['Rock am Ring dauert zwei Wochen.', false], ['Das Oktoberfest ist im September und Oktober.', true], ['Zum Oktoberfest kommen 70.000 Besucher.', false],
    ]},
    { type: 'listen', title: 'Jahreszahlen aus dem Text', numbers: true, items: ['1823', '1985', '1810', '2014'] },
    { type: 'dialogue', title: 'Warst du schon mal in Deutschland auf einem großen Fest?', lines: [
      ['A', 'Henry, warst du schon mal auf einem großen Fest in Deutschland?'], ['B', 'Ja! Ich bin vor drei Monaten nach Hamburg gekommen. Aber letztes Jahr im Oktober bin ich zum Oktoberfest nach München geflogen. Ich habe viele nette Leute getroffen. Dieses Jahr fahre ich wieder hin!'],
      ['A', 'Und ihr, Carmela und Benito?'], ['B', 'Wir studieren in Flensburg. Im Juni waren wir bei Rock am Ring. Das Festival hat uns sehr gut gefallen. Im September fahren wir nach Berlin.'],
    ], questions: [
      { q: 'Henry ist vor … nach Hamburg gekommen.', options: ['drei Monaten', 'drei Jahren', 'drei Wochen'], a: 0 }, { q: 'Henry ist zum Oktoberfest …', options: ['gefahren', 'geflogen', 'gegangen'], a: 1 },
      { q: 'Carmela und Benito studieren in …', options: ['Flensburg', 'Hamburg', 'Berlin'], a: 0 }, { q: 'Rock am Ring hat ihnen …', options: ['gut gefallen', 'nicht gefallen'], a: 0 },
    ]},
    { type: 'mc', title: 'Wohin? nach oder in?', items: [
      { q: 'Ich fahre ___ München.', options: ['nach', 'in die'], a: 0 }, { q: 'Wir fliegen ___ Schweiz.', options: ['nach', 'in die'], a: 1 }, { q: 'Er fährt ___ Türkei.', options: ['nach', 'in die'], a: 1 },
      { q: 'Sie fliegt ___ Iran.', options: ['nach', 'in den'], a: 1 }, { q: 'Fahrt ihr ___ Deutschland?', options: ['nach', 'in das'], a: 0 },
    ]},
    { type: 'speak', title: 'Auf welches Fest möchten Sie gern gehen?', prompt: 'Say which festival you would like to go to and why, and react to your partner.', keywords: ['möchte', 'gern', 'klingt'], model: 'Ich möchte gern Silvester in Berlin feiern. Ich tanze gern. Und du? – Rock am Ring im Mai? Das klingt interessant. Ich liebe Rockmusik.' },
  ],
});
})();
