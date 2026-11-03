(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L8', n: 8, module: 3, level: 'A1.1', pages: '45–48',
  title: 'Kein Problem. Ich habe Zeit!',
  topic: 'Verabredungen – times, days, making plans',
  goals: [
    'Make an arrangement: suggest, accept, decline',
    'Tell the time, informally and officially',
    'Use the days of the week and times of day with am / um / in der Nacht',
    'Put the time first and keep the verb in position 2 (inversion)',
    'Write an invitation and a refusal (SMS, e-mail)',
  ],
  vocab: [
    { group: 'In der Stadt (Orte)', items: [
      N('n', 'Schwimmbad', 'Schwimmbäder', 'swimming pool'), N('n', 'Museum', 'Museen', 'museum'), N('n', 'Café', 'Cafés', 'café'),
      N('n', 'Restaurant', 'Restaurants', 'restaurant'), N('f', 'Disco', 'Discos', 'club, disco'), N('n', 'Konzert', 'Konzerte', 'concert'),
      N('f', 'Bar', 'Bars', 'bar'), N('f', 'Kneipe', 'Kneipen', 'pub'), N('f', 'Ausstellung', 'Ausstellungen', 'exhibition'),
      P('ins Kino / ins Museum / ins Schwimmbad gehen', 'go to the cinema / museum / pool (das → ins)'), P('in die Disco / in die Bar gehen', 'go to the club / bar (die → in die)'), P('in ein Konzert gehen', 'go to a concert'),
    ]},
    { group: 'Tageszeiten', items: [
      N('m', 'Morgen', 'Morgen', 'morning'), N('m', 'Vormittag', 'Vormittage', 'late morning (≈9–12)'), N('m', 'Mittag', 'Mittage', 'noon'),
      N('m', 'Nachmittag', 'Nachmittage', 'afternoon'), N('m', 'Abend', 'Abende', 'evening'), N('f', 'Nacht', 'Nächte', 'night'),
      W('heute', 'today'), W('morgen', 'tomorrow'), W('heute Abend', 'this evening'), W('morgen früh', 'tomorrow morning'),
    ]},
    { group: 'Wochentage', items: [
      N('m', 'Montag', 'Montage', 'Monday'), N('m', 'Dienstag', 'Dienstage', 'Tuesday'), N('m', 'Mittwoch', 'Mittwoche', 'Wednesday'),
      N('m', 'Donnerstag', 'Donnerstage', 'Thursday'), N('m', 'Freitag', 'Freitage', 'Friday'), N('m', 'Samstag', 'Samstage', 'Saturday'),
      N('m', 'Sonntag', 'Sonntage', 'Sunday'), N('n', 'Wochenende', 'Wochenenden', 'weekend'), N('f', 'Woche', 'Wochen', 'week'), N('m', 'Tag', 'Tage', 'day'),
    ]},
    { group: 'Uhrzeit', items: [
      N('f', 'Uhr', 'Uhren', 'clock; o\'clock', 'um vier Uhr'), P('Wie spät ist es? / Wie viel Uhr ist es?', 'What time is it?'),
      P('Es ist halb sechs.', 'It\'s half past five (5:30!).'), P('Es ist Viertel vor acht.', 'It\'s quarter to eight.'), P('Es ist Viertel nach drei.', 'It\'s quarter past three.'),
      P('Es ist zehn vor neun.', 'It\'s ten to nine.'), P('Es ist fünf nach zwölf.', 'It\'s five past twelve.'),
      W('um', 'at (clock time)', 'um 8 Uhr'), W('am', 'on / in the (day, part of day)', 'am Montag, am Abend'),
    ]},
    { group: 'Verabredung', items: [
      V('wissen', 'to know (a fact): ich weiß, du weißt, er weiß', 'Das weiß ich noch nicht.'), V('sehen', 'to see (du siehst, er sieht)'),
      N('f', 'Lust', '', 'desire, wish', 'Hast du Lust?'), N('f', 'Idee', 'Ideen', 'idea'), N('f', 'Zeit', '', 'time'),
      W('vielleicht', 'maybe'), W('leider', 'unfortunately'), W('spät', 'late'), W('noch nicht', 'not yet'), W('bald', 'soon'), W('warum?', 'why?'), W('wann?', 'when?'),
      W('höflich', 'polite'), W('unhöflich', 'impolite'), W('besonders', 'especially'),
    ]},
  ],
  grammar: [
    { title: 'Inversion: time first, verb stays in position 2', html: `
      <p>You can start a sentence with a time (or anything else) for emphasis. The <b>verb stays in position 2</b>, so the subject moves <b>behind</b> the verb.</p>
      <table class="gtable"><tr><th>Pos. 1</th><th>Pos. 2</th><th>…</th></tr>
      <tr><td>Ich</td><td class="verb">habe</td><td>heute Abend keine Zeit.</td></tr>
      <tr><td>Heute Abend</td><td class="verb">habe</td><td><b>ich</b> keine Zeit.</td></tr>
      <tr><td>Leider</td><td class="verb">habe</td><td><b>ich</b> keine Zeit.</td></tr>
      <tr><td>Am Samstag</td><td class="verb">gehe</td><td><b>ich</b> ins Museum.</td></tr>
      <tr><td>Um 14 Uhr</td><td class="verb">treffe</td><td><b>ich</b> Anna.</td></tr></table>
      <p>⚠ The classic English-speaker mistake: <s>Heute ich habe keine Zeit.</s> That's two things before the verb. Always <b>V2</b>.</p>` },
    { title: 'am / um / in der', html: `
      <table class="gtable"><tr><th>preposition</th><th>with</th><th>examples</th></tr>
      <tr><td><b>um</b></td><td>clock time</td><td>um 8 Uhr, um halb vier, um Viertel nach zwei</td></tr>
      <tr><td><b>am</b></td><td>days, parts of the day, weekend</td><td>am Montag, am Morgen, am Abend, am Wochenende, am Montagabend</td></tr>
      <tr><td><b>in der</b></td><td>night</td><td>in der Nacht (⚠ not "am Nacht")</td></tr></table>
      <p>Without a preposition: <i>heute, morgen, heute Abend, morgen früh</i>.</p>` },
    { title: 'Telling the time', html: `
      <table class="gtable"><tr><th></th><th>informal (im Gespräch)</th><th>official (Radio, Bahn)</th></tr>
      <tr><td>9:55</td><td>fünf vor zehn</td><td>neun Uhr fünfundfünfzig</td></tr>
      <tr><td>14:30</td><td><b>halb drei</b> ⚠</td><td>vierzehn Uhr dreißig</td></tr>
      <tr><td>17:10</td><td>zehn nach fünf</td><td>siebzehn Uhr zehn</td></tr>
      <tr><td>20:15</td><td>Viertel nach acht</td><td>zwanzig Uhr fünfzehn</td></tr>
      <tr><td>11:45</td><td>Viertel vor zwölf</td><td>elf Uhr fünfundvierzig</td></tr>
      <tr><td>7:25</td><td>fünf vor halb acht</td><td>sieben Uhr fünfundzwanzig</td></tr></table>
      <p>⚠ <b>halb drei = 2:30</b> ("half towards three"), not 3:30. This costs people points in every Hören test.</p>` },
    { title: 'wissen', html: `
      <table class="gtable"><tr><td>ich <b>weiß</b></td><td>wir wissen</td></tr><tr><td>du <b>weißt</b></td><td>ihr wisst</td></tr><tr><td>er/sie <b>weiß</b></td><td>sie/Sie wissen</td></tr></table>
      <p>Like können: no ending for ich and er. <b>wissen</b> = know a fact (<i>Ich weiß es nicht</i>). <b>kennen</b> = know a person/place (<i>Ich kenne Paco</i>).</p>` },
  ],
  phrases: [
    ['sich verabreden', ['Hast du heute Nachmittag Zeit? / Hast du Lust auf Kino?', 'Gehen wir ins Kino / ins Schwimmbad?', 'Wann denn? – Um vier oder um sechs?', 'Treffen wir uns um vier Uhr?']],
    ['zusagen', ['Ja, gern! / Gute Idee! / Warum nicht? / Kein Problem. Ich habe Zeit!', 'Okay. Dann bis vier! / Bis dann!']],
    ['absagen', ['Tut mir leid, ich habe keine Zeit.', 'Da kann ich leider nicht.', 'Heute Abend habe ich leider keine Zeit. Vielleicht am Samstag?', 'Das weiß ich noch nicht.', 'Keine Lust.']],
    ['E-Mail / SMS', ['Liebe Clara, / Lieber Elias, / Hallo …,', 'Liebe Grüße / Herzliche Grüße / Viele Grüße']],
  ],
  exercises: [
    { type: 'order', title: 'Inversion: Beginnen Sie mit dem ersten Wort.', items: [
      { words: ['Heute', 'Abend', 'habe', 'ich', 'keine', 'Zeit', '.'], en: 'This evening I have no time.' },
      { words: ['Leider', 'kann', 'ich', 'nicht', 'kommen', '.'], en: 'Unfortunately I can\'t come.' },
      { words: ['Am', 'Wochenende', 'habe', 'ich', 'Zeit', '.'], en: 'At the weekend I have time.' },
      { words: ['Um', '14', 'Uhr', 'treffe', 'ich', 'Anna', '.'], en: 'At 2 pm I\'m meeting Anna.' },
      { words: ['Am', 'Abend', 'gehen', 'wir', 'ins', 'Kino', '.'], en: 'In the evening we\'re going to the cinema.' },
      { words: ['Vielleicht', 'können', 'wir', 'am', 'Sonntag', 'fahren', '?'], en: 'Maybe we can go on Sunday?' },
    ]},
    { type: 'gap', title: 'um, am oder in der?', items: [
      'Wann gehen wir ins Museum? – {Am} Donnerstagabend.', 'Mein Freund ist Arzt. Er arbeitet oft {in der} Nacht.', 'Können wir {am} Sonntag nach Graz fahren?',
      'Meine Eltern kommen am Sonntag {um} 11:30 Uhr.', 'Der Film beginnt {um} halb acht.', '{Am} Wochenende schlafe ich lange.', '{Am} Morgen trinke ich Kaffee.',
    ]},
    { type: 'mc', title: 'Wie spät ist es? (im Gespräch)', items: [
      { q: '14:30', options: ['halb drei', 'halb zwei', 'drei Uhr dreißig'], a: 0 },
      { q: '09:55', options: ['fünf nach zehn', 'fünf vor zehn', 'fünf vor neun'], a: 1 },
      { q: '20:15', options: ['Viertel vor acht', 'Viertel nach acht', 'Viertel nach neun'], a: 1 },
      { q: '11:45', options: ['Viertel vor zwölf', 'Viertel nach elf', 'Viertel vor elf'], a: 0 },
      { q: '07:05', options: ['fünf vor sieben', 'fünf nach sieben', 'sieben vor fünf'], a: 1 },
      { q: '15:50', options: ['zehn vor vier', 'zehn nach drei', 'zehn vor drei'], a: 0 },
      { q: '17:10', options: ['zehn nach fünf', 'zehn vor fünf', 'fünf nach zehn'], a: 0 },
      { q: '06:30', options: ['halb sieben', 'halb sechs', 'sechs Uhr halb'], a: 0 },
    ]},
    { type: 'listen', title: 'Uhrzeiten hören: Schreiben Sie die Uhrzeit (z. B. 14:30).', items: ['14:30', '9:45', '20:15', '7:05', '16:50', '12:00'], times: true },
    { type: 'gap', title: 'wissen & sehen', items: [
      'Das {weiß} ich noch nicht.', '{Weißt} du, wann der Film beginnt?', 'Er {weiß} es auch nicht.', '{Wisst} ihr das?', 'Was {siehst} du? (sehen)', 'Sie {sieht} heute einen Film. (sehen)',
    ]},
    { type: 'match', title: 'Ordnen Sie zu: Was passt?', pairs: [
      ['Gehen wir ins Kino?', 'Gute Idee! Wann denn?'], ['Hast du am Freitag Zeit?', 'Da kann ich leider nicht.'], ['Treffen wir uns um vier?', 'Das ist zu spät. Um zwei?'], ['Fährst du mit mir Rad?', 'Hm … Ja, warum nicht?'], ['Gut, dann bis Freitag.', 'Ja, bis dann!'],
    ]},
    { type: 'sort', title: 'Wochentage: Wochenende oder nicht?', buckets: ['Werktag', 'Wochenende'], items: [
      ['Montag', 'Werktag'], ['Samstag', 'Wochenende'], ['Mittwoch', 'Werktag'], ['Sonntag', 'Wochenende'], ['Donnerstag', 'Werktag'], ['Dienstag', 'Werktag'], ['Freitag', 'Werktag'],
    ]},
    { type: 'dialogue', title: 'Hören: Lukas und Susanna', lines: [
      ['A', 'Susanna, gehst du gern ins Theater? Ich habe zwei Theaterkarten für Samstagabend.'],
      ['B', 'Ins Theater? Hm, nicht so gern. Und am Samstag gehe ich um vier Uhr ins Kino.'],
      ['A', 'Um vier? Das ist kein Problem. Das Theater beginnt erst um acht.'],
      ['B', 'Na gut. Treffen wir uns um sieben?'],
      ['A', 'Lieber um Viertel vor acht, in der Bar im Stadttheater.'],
      ['B', 'Okay, bis Samstag!'],
    ], questions: [
      { q: 'Lukas hat zwei …', options: ['Kinokarten', 'Theaterkarten', 'Konzertkarten'], a: 1 },
      { q: 'Susanna geht … ins Theater.', options: ['gern', 'nicht so gern', 'immer'], a: 1 },
      { q: 'Sie treffen sich um …', options: ['sieben', 'Viertel vor acht', 'vier'], a: 1 },
    ]},
    { type: 'write', title: 'Schreiben: Absage per E-Mail', prompt: 'Your friend Clara invites you to the Aurora-Bar tonight. Write a refusal: say sorry, give a reason, suggest another day.', checklist: ['Liebe Clara,', 'Leider kann ich … / Heute Abend habe ich … (inversion!)', 'a reason (Termin, Kurs, Arbeit …)', 'Das tut mir leid!', 'a suggestion: Hast du am … Zeit?', 'Viele Grüße'], model: 'Liebe Clara,\nleider kann ich heute nicht in die Aurora-Bar kommen. Heute Abend habe ich noch einen Deutschkurs. Das tut mir sehr leid! Am Wochenende habe ich Zeit. Du auch?\nViele Grüße\nArya' },
    { type: 'speak', title: 'Sprechen: Verabredung am Telefon', prompt: 'Call a friend: suggest the cinema on Friday. Your friend can\'t on Friday – agree on Saturday at a time. Play both roles.', keywords: ['Hast du', 'Zeit', 'Gehen wir', 'leider', 'um', 'Uhr'], model: 'Hallo Paul, hier ist Arya. Hast du am Freitag Zeit? Gehen wir ins Kino? – Leider kann ich nicht. Ich arbeite am Freitag. – Und am Samstag? – Samstag ist gut. Wann denn? – Um halb neun? – Gute Idee. Bis Samstag!' },
  ],
  drill: [
    { de: 'Hast du heute Nachmittag Zeit?', en: 'Do you have time this afternoon?' },
    { de: 'Gehen wir ins Kino?', en: 'Shall we go to the cinema?' },
    { de: 'Gute Idee!', en: 'Good idea!' },
    { de: 'Wann denn?', en: 'When, then?' },
    { de: 'Um halb acht.', en: 'At half past seven.' },
    { de: 'Das ist zu spät.', en: 'That\'s too late.' },
    { de: 'Tut mir leid, ich habe keine Zeit.', en: 'Sorry, I have no time.' },
    { de: 'Heute Abend habe ich keine Zeit.', en: 'This evening I have no time. (start with: this evening)' },
    { de: 'Am Samstag kann ich.', en: 'On Saturday I can.' },
    { de: 'Wie spät ist es?', en: 'What time is it?' },
    { de: 'Es ist Viertel nach drei.', en: 'It\'s quarter past three.' },
    { de: 'Es ist halb zehn.', en: 'It\'s half past nine.' },
    { de: 'Treffen wir uns um vier?', en: 'Shall we meet at four?' },
    { de: 'Das weiß ich noch nicht.', en: 'I don\'t know that yet.' },
    { de: 'Hast du Lust?', en: 'Do you feel like it?' },
    { de: 'Keine Lust.', en: 'Don\'t feel like it.' },
    { de: 'Bis dann!', en: 'See you then!' },
    { de: 'Am Wochenende habe ich Zeit.', en: 'At the weekend I have time.' },
  ],
  exam: [
    { type: 'tf', exam: 'Start Deutsch 1 · Lesen Teil 2', title: 'Anzeigen: Welche Anzeige passt? (richtig = passt)', text: 'Sie suchen einen Tennispartner für das Wochenende.\n\nAnzeige A: Ich spiele gern Tennis, aber leider nicht so gut. Wer spielt mit mir? Nur Samstag oder Sonntag. Tel. 030-445 76 81\nAnzeige B: Hotel Bergblick sucht Kellner/Kellnerin für die Hotelbar. Di–So 19–24 Uhr.', items: [
      ['Anzeige A passt.', true], ['Anzeige B passt.', false], ['Der Tennispartner hat nur am Wochenende Zeit.', true],
    ]},
    { type: 'dialogue', exam: 'Start Deutsch 1 · Hören Teil 1', title: 'Wann treffen sie sich? (twice)', twice: true, lines: [
      ['A', 'Hallo Tina, gehen wir heute ins Schwimmbad?'],
      ['B', 'Heute? Um drei habe ich einen Termin. Aber um halb fünf habe ich Zeit.'],
      ['A', 'Halb fünf ist gut. Bis dann!'],
    ], questions: [{ q: 'Wann gehen sie ins Schwimmbad?', options: ['um 15:00', 'um 16:30', 'um 17:30'], a: 1 }] },
    { type: 'write', exam: 'Start Deutsch 1 · Schreiben Teil 2', title: 'Einladung (~30 Wörter)', prompt: 'Schreiben Sie Ihrem Freund Simon: Sie gehen am Samstag ins Konzert. Fragen Sie: Hat er Lust? Wann und wo treffen Sie sich?', checklist: ['Lieber Simon / Hallo Simon', 'Am Samstag gehe ich … (inversion)', 'Hast du Lust?', 'time with um + place', 'Viele Grüße'], model: 'Lieber Simon,\nam Samstag gehe ich in ein Konzert. Hast du Lust? Das Konzert beginnt um 20 Uhr. Treffen wir uns um halb acht am Bahnhof? Bitte schreib mir bald!\nViele Grüße\nArya' },
  ],
});
})();
