(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L6', n: 6, module: 2, level: 'A1.1', pages: '33–36',
  title: 'Ich brauche kein Büro.',
  topic: 'Büro & Technik – office, plurals, accusative, phone calls',
  goals: [
    'Name office and computer things, in singular and plural',
    'Say what you have, need or are looking for (accusative)',
    'Answer the phone and end a call properly',
    'Read short e-mails and text messages',
  ],
  vocab: [
    { group: 'Büro', items: [
      N('n', 'Büro', 'Büros', 'office'), N('m', 'Arbeitsplatz', 'Arbeitsplätze', 'workplace, desk'), N('m', 'Termin', 'Termine', 'appointment'),
      N('m', 'Chef', 'Chefs', 'boss (m)'), N('f', 'Chefin', 'Chefinnen', 'boss (f)'), N('f', 'Firma', 'Firmen', 'company'),
      N('m', 'Stift', 'Stifte', 'pen'), N('n', 'Notizbuch', 'Notizbücher', 'notebook'), N('m', 'Kalender', 'Kalender', 'calendar, diary'),
      N('n', 'Papier', 'Papiere', 'paper'), N('n', 'Formular', 'Formulare', 'form'), N('f', 'Rechnung', 'Rechnungen', 'invoice, bill'),
      N('f', 'Briefmarke', 'Briefmarken', 'stamp'), N('m', 'Brief', 'Briefe', 'letter'), N('m', 'Schlüssel', 'Schlüssel', 'key'),
      N('m', 'Stress', '', 'stress'), N('f', 'Zeit', '', 'time', 'Ich habe keine Zeit.'),
    ]},
    { group: 'Computer & Telefon', items: [
      N('m', 'Computer', 'Computer', 'computer'), N('m', 'Laptop', 'Laptops', 'laptop'), N('m', 'Drucker', 'Drucker', 'printer'),
      N('m', 'Bildschirm', 'Bildschirme', 'screen'), N('f', 'Maus', 'Mäuse', 'mouse'), N('f', 'Tastatur', 'Tastaturen', 'keyboard'),
      N('n', 'Handy', 'Handys', 'mobile phone'), N('n', 'Telefon', 'Telefone', 'telephone'), N('f', 'SMS', 'SMS', 'text message'),
      N('f', 'E-Mail', 'E-Mails', 'e-mail'), N('n', 'Internet', '', 'internet'), N('m', 'Anruf', 'Anrufe', 'phone call'),
      N('m', 'Betreff', 'Betreffe', 'subject (of an e-mail)'),
    ]},
    { group: 'Verben', items: [
      V('brauchen', 'to need', 'Ich brauche einen Drucker.'), V('suchen', 'to look for', 'Herr Brenner sucht die Rechnungen.'),
      V('haben', 'to have', 'Ich habe einen Laptop.'), V('finden', 'to find', 'Ich finde den Schlüssel nicht.'),
      V('kaufen', 'to buy', 'Wir kaufen einen Computer.'), V('drucken', 'to print'), V('schreiben', 'to write', 'Eva schreibt eine SMS.'),
      V('telefonieren', 'to phone', 'Er telefoniert mit Frau Feser.'), V('sprechen', 'to speak (to)', 'Kann ich Herrn Schmidt sprechen?'),
      V('gehen', 'to go', 'Er geht wieder ins Büro.'),
    ]},
    { group: 'Telefon-Redemittel', items: [
      P('Brenner IT-Consulting, guten Tag.', 'Brenner IT-Consulting, good day. (answering at work)'),
      P('Schmidt.', 'Schmidt (speaking). — Germans answer with their surname'),
      P('Hier ist Marlene Neumann.', 'This is Marlene Neumann.'), P('Marlene Neumann hier.', 'Marlene Neumann here.'),
      P('Auf Wiederhören!', 'Goodbye! (on the phone only)'),
      W('wie viele?', 'how many?', 'Wie viele Drucker hast du?'), W('wieder', 'again'),
    ]},
  ],
  grammar: [
    { title: 'Plural: the 5 patterns', html: `
      <p>German plurals must be learned with the noun. The plural article is <b>always die</b>. There are 5 patterns:</p>
      <table class="gtable"><tr><th>ending</th><th>examples</th><th>typical for</th></tr>
      <tr><td><b>-e / ¨-e</b></td><td>der Stift → die Stift<b>e</b><br>der Schrank → die Schr<b>ä</b>nk<b>e</b></td><td>many masculine one-syllable nouns</td></tr>
      <tr><td><b>-(e)n</b></td><td>die Briefmarke → die Briefmarke<b>n</b><br>die Rechnung → die Rechnung<b>en</b></td><td>almost all feminine (-e, -ung, -in → -innen)</td></tr>
      <tr><td><b>-s</b></td><td>das Sofa → die Sofa<b>s</b><br>das Handy → die Handy<b>s</b></td><td>words ending in -a, -o, -y; English loans</td></tr>
      <tr><td><b>-er / ¨-er</b></td><td>das Bild → die Bild<b>er</b><br>das Notizbuch → die Notizb<b>ü</b>ch<b>er</b></td><td>many neuter one-syllable nouns</td></tr>
      <tr><td><b>– / ¨</b></td><td>der Kalender → die Kalender<br>der Schlüssel → die Schlüssel</td><td>masculine/neuter ending in -er, -el, -en</td></tr></table>
      <p>In dictionaries: <i>Stuhl, der, -¨e</i> means plural <i>Stühle</i>.</p>` },
    { title: 'Articles in singular and plural', html: `
      <table class="gtable"><tr><th></th><th>Singular</th><th>Plural</th></tr>
      <tr><td class="g-m">m</td><td>der / ein / kein Schlüssel</td><td>die / — / keine Schlüssel</td></tr>
      <tr><td class="g-n">n</td><td>das / ein / kein Formular</td><td>die / — / keine Formulare</td></tr>
      <tr><td class="g-f">f</td><td>die / eine / keine Briefmarke</td><td>die / — / keine Briefmarken</td></tr></table>
      <p>Verb agrees: <i>Wo <b>ist</b> der Schlüssel? — Wo <b>sind</b> die Schlüssel?</i></p>` },
    { title: 'The accusative case (direct object)', html: `
      <p>The <b>subject</b> (who does it) is nominative. The <b>direct object</b> (what you have / need / look for) is <b>accusative</b>.</p>
      <p><b>Only masculine changes!</b> der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>. Everything else stays the same.</p>
      <table class="gtable"><tr><th></th><th>Nominativ (Da ist …)</th><th>Akkusativ (Ich habe …)</th></tr>
      <tr><td class="g-m">m</td><td>der / ein / kein Laptop</td><td><b>den / einen / keinen</b> Laptop</td></tr>
      <tr><td class="g-n">n</td><td>das / ein / kein Telefon</td><td>das / ein / kein Telefon</td></tr>
      <tr><td class="g-f">f</td><td>die / eine / keine Maus</td><td>die / eine / keine Maus</td></tr>
      <tr><td class="g-pl">pl</td><td>die / — / keine Stifte</td><td>die / — / keine Stifte</td></tr></table>
      <p>Verbs with accusative so far: <b>haben, brauchen, suchen, finden, kaufen, schreiben, sehen, bestellen</b>, and <b>es gibt</b> (L14).</p>
      <p><i>Der Chef sucht <b>den</b> Schlüssel.</i> → Der Chef = subject (nom.), den Schlüssel = object (acc.).</p>` },
  ],
  phrases: [
    ['Telefongespräche', ['sich melden (company): Brenner IT-Consulting, guten Tag.', 'sich melden (private): Schmidt. / Christian Schmidt.', 'Guten Tag, hier ist … / … hier.', 'sich verabschieden: Tschüs. / Auf Wiederhören. / Auf Wiedersehen.']],
    ['haben / brauchen / suchen', ['Ich habe einen Laptop und zwei Handys.', 'Wie viele Drucker hast du? – Ich habe einen / keinen Drucker.', 'Wo ist denn der Laptop? – Frau Esebeck hat doch den Laptop.', 'Ich brauche kein Büro.']],
  ],
  exercises: [
    { type: 'gap', title: 'Plural bilden', items: [
      'der Stift → die {Stifte}', 'die Rechnung → die {Rechnungen}', 'das Handy → die {Handys}', 'das Notizbuch → die {Notizbücher}', 'der Kalender → die {Kalender}',
      'die Maus → die {Mäuse}', 'der Laptop → die {Laptops}', 'das Bild → die {Bilder}', 'die Briefmarke → die {Briefmarken}', 'der Stuhl → die {Stühle}',
      'das Formular → die {Formulare}', 'der Drucker → die {Drucker}', 'der Termin → die {Termine}', 'die Firma → die {Firmen}', 'das Buch → die {Bücher}',
    ]},
    { type: 'sort', title: 'Welches Plural-Muster?', buckets: ['-e / ¨e', '-(e)n', '-s', '-er / ¨er', '– / ¨'], items: [
      ['Stift', '-e / ¨e'], ['Schrank', '-e / ¨e'], ['Rechnung', '-(e)n'], ['Lampe', '-(e)n'], ['Sofa', '-s'], ['Büro', '-s'], ['Bild', '-er / ¨er'], ['Buch', '-er / ¨er'], ['Kalender', '– / ¨'], ['Schlüssel', '– / ¨'], ['Telefon', '-e / ¨e'], ['Tastatur', '-(e)n'],
    ]},
    { type: 'gap', title: 'Akkusativ: den/einen/keinen – das – die', items: [
      'Ich habe {einen} Laptop. (ein)', 'Wir brauchen {einen} Drucker. (ein)', 'Herr Brenner sucht {den} Schlüssel. (der)', 'Ich habe {keinen} Computer. (kein)',
      'Sie braucht {eine} Maus. (eine)', 'Hast du {ein} Handy? (ein)', 'Ich suche {die} Rechnungen. (die, pl.)', 'Frau Esebeck hat {den} Laptop. (der)',
      'Er braucht {keine} Briefmarken. (kein, pl.)', 'Ich finde {den} Kalender nicht. (der)',
    ]},
    { type: 'mc', title: 'Nominativ oder Akkusativ?', items: [
      { q: 'Wo ist ___ Drucker?', options: ['der', 'den'], a: 0, explain: 'Subject of "ist" → nominative.' },
      { q: 'Ich brauche ___ Drucker.', options: ['der', 'den'], a: 1 },
      { q: '___ Chef sucht die Formulare.', options: ['Der', 'Den'], a: 0 },
      { q: 'Da ist ___ Laptop.', options: ['ein', 'einen'], a: 0 },
      { q: 'Wir haben ___ Bildschirm.', options: ['kein', 'keinen'], a: 1 },
      { q: 'Ich kaufe ___ Tastatur.', options: ['eine', 'einen'], a: 0, explain: 'Feminine doesn\'t change.' },
    ]},
    { type: 'order', title: 'Am Telefon: Ordnen Sie das Gespräch.', items: [
      { words: ['Brenner', 'IT-Consulting', ',', 'guten', 'Tag', '.'], en: 'Brenner IT-Consulting, good day.' },
      { words: ['Guten', 'Tag', ',', 'hier', 'ist', 'Marlene', 'Neumann', '.'], en: 'Good day, this is Marlene Neumann.' },
      { words: ['Ich', 'brauche', 'einen', 'Termin', '.'], en: 'I need an appointment.' },
      { words: ['Auf', 'Wiederhören', '!'], en: 'Goodbye! (phone)' },
    ]},
    { type: 'tf', title: 'Lesen: E-Mail', text: 'Betreff: Achtung! Termine! Neu!\nHallo Herr Schmidt,\nSie haben heute drei neue Termine:\n– Firma Hierholtzer (14 Uhr)\n– Firma Leitgeb (16 Uhr)\n– Firma PR-Media, Frau Hintze (17 Uhr)\nSchöne Grüße\nC. Lehmann, Brenner IT-Consulting', items: [
      ['Herr Schmidt hat heute zwei Termine.', false], ['Um 14 Uhr ist ein Termin mit Hierholtzer.', true], ['Frau Hintze arbeitet bei PR-Media.', true], ['C. Lehmann arbeitet bei Leitgeb.', false],
    ]},
    { type: 'dialogue', title: 'Hören: Wo ist denn der Schlüssel?', lines: [
      ['A', 'Schmidt.'],
      ['B', 'Hallo Herr Schmidt, hier ist Brenner. Wo ist denn der Schlüssel? Ich suche die Rechnungen und die Formulare.'],
      ['A', 'Der Schlüssel? Frau Feser hat doch den Schlüssel.'],
      ['B', 'Ach so. Und ich brauche Stifte. Haben Sie Stifte?'],
      ['A', 'Nein, ich habe keine Stifte hier. Ich arbeite heute am See.'],
      ['B', 'Am See? Na gut. Auf Wiederhören.'],
    ], questions: [
      { q: 'Wer hat den Schlüssel?', options: ['Herr Schmidt', 'Frau Feser', 'Herr Brenner'], a: 1 },
      { q: 'Was sucht Herr Brenner?', options: ['einen Laptop', 'Rechnungen und Formulare', 'Briefmarken'], a: 1 },
      { q: 'Hat Herr Schmidt Stifte?', options: ['ja', 'nein'], a: 1 },
    ]},
    { type: 'speak', title: 'Sprechen: Wie viele … hast du?', prompt: 'Answer out loud for yourself: Wie viele Handys / Laptops / Drucker / Bildschirme / Kalender hast du? Use einen / ein / eine / keinen / zwei …', keywords: ['einen', 'keinen', 'habe'], model: 'Ich habe ein Handy und einen Laptop. Ich habe keinen Drucker – ich drucke an der Uni. Ich habe zwei Bildschirme und keinen Kalender.' },
    { type: 'write', title: 'Schreiben: SMS an eine Kollegin', prompt: 'Write a short text to a colleague: you are looking for something, you need something, ask if she has it.', checklist: ['Greeting', 'Ich suche den/die/das …', 'Ich brauche einen/eine/ein …', 'Hast du …?', 'Closing'], model: 'Hallo Eva, ich suche den Schlüssel für das Büro. Hast du den Schlüssel? Ich brauche auch einen Drucker. Danke! LG Arya' },
  ],
  drill: [
    { de: 'Ich habe einen Laptop.', en: 'I have a laptop.' },
    { de: 'Ich habe keinen Drucker.', en: 'I don\'t have a printer.' },
    { de: 'Ich brauche einen Stift.', en: 'I need a pen.' },
    { de: 'Ich brauche kein Büro.', en: 'I don\'t need an office.' },
    { de: 'Wir suchen den Schlüssel.', en: 'We are looking for the key.' },
    { de: 'Wo ist denn der Schlüssel?', en: 'So where is the key?' },
    { de: 'Wo sind die Rechnungen?', en: 'Where are the invoices?' },
    { de: 'Wie viele Handys hast du?', en: 'How many mobile phones do you have?' },
    { de: 'Ich habe zwei Handys.', en: 'I have two mobile phones.' },
    { de: 'Sie hat eine Maus.', en: 'She has a mouse. (computer)' },
    { de: 'Hast du Zeit?', en: 'Do you have time?' },
    { de: 'Ich habe keine Zeit.', en: 'I have no time.' },
    { de: 'Hier ist Christian Schmidt.', en: 'This is Christian Schmidt. (phone)' },
    { de: 'Auf Wiederhören!', en: 'Goodbye! (on the phone)' },
    { de: 'Sie haben heute drei Termine.', en: 'You have three appointments today. (formal)' },
    { de: 'Der Arbeitsplatz ist nicht praktisch.', en: 'The workplace is not practical.' },
  ],
  exam: [
    { type: 'dialogue', exam: 'Start Deutsch 1 · Hören Teil 3', title: 'Nachricht auf dem Anrufbeantworter (a/b/c, twice)', twice: true, lines: [
      ['A', 'Hallo Frau Hintze, hier ist Christian Schmidt von Brenner IT-Consulting. Wir haben heute um 17 Uhr einen Termin. Ich habe leider keine Zeit. Geht es auch morgen um 10 Uhr? Meine Nummer ist 0176 33 45 21. Auf Wiederhören!'],
    ], questions: [
      { q: 'Herr Schmidt möchte …', options: ['einen Laptop kaufen', 'einen neuen Termin', 'Frau Hintze im Büro besuchen'], a: 1 },
      { q: 'Der neue Termin: morgen um …', options: ['17 Uhr', '10 Uhr', '14 Uhr'], a: 1 },
    ]},
    { type: 'tf', exam: 'Start Deutsch 1 · Lesen Teil 3', title: 'Schild im Büro', text: 'DRUCKER KAPUTT!\nBitte drucken Sie im 2. Stock, Zimmer 204.\nPapier finden Sie im Schrank neben der Tür.', items: [
      ['Der Drucker funktioniert nicht.', true], ['Man druckt in Zimmer 204.', true], ['Es gibt kein Papier.', false],
    ]},
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 3', title: 'Bitten formulieren (picture cards)', prompt: 'You see pictures: a pen, a phone, a laptop, paper. Make a request for each and react to your partner\'s request. (Bitte … / Haben Sie …? / Ich brauche …)', keywords: ['bitte', 'Haben Sie', 'brauche'], model: 'Haben Sie einen Stift, bitte? – Ja, hier bitte. · Ich brauche ein Telefon. – Kein Problem, hier ist mein Handy. · Haben Sie Papier? – Nein, tut mir leid.' },
  ],
});
})();
