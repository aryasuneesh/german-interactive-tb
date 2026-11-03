(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L2', n: 2, module: 1, level: 'A1.1', pages: '13–16',
  title: 'Ich bin Journalistin.',
  topic: 'Zur Person – job, family status, age, numbers',
  goals: [
    'Say what you do (job, studies, training, internship)',
    'Talk about marital status, children, age and where you live',
    'Count from 0 to 100 and understand ages / phone numbers',
    'Read business cards and an online profile',
    'Write a short profile (Steckbrief) about yourself',
  ],
  vocab: [
    { group: 'Berufe', items: [
      N('m', 'Beruf', 'Berufe', 'job, profession', 'Was sind Sie von Beruf?'),
      N('m', 'Journalist', 'Journalisten', 'journalist (m)'), N('f', 'Journalistin', 'Journalistinnen', 'journalist (f)'),
      N('m', 'Arzt', 'Ärzte', 'doctor (m)'), N('f', 'Ärztin', 'Ärztinnen', 'doctor (f)'),
      N('m', 'Student', 'Studenten', 'student (m)'), N('f', 'Studentin', 'Studentinnen', 'student (f)'),
      N('m', 'Schüler', 'Schüler', 'school pupil (m)'), N('f', 'Schülerin', 'Schülerinnen', 'school pupil (f)'),
      N('m', 'Lehrer', 'Lehrer', 'teacher (m)'), N('f', 'Lehrerin', 'Lehrerinnen', 'teacher (f)'),
      N('m', 'Informatiker', 'Informatiker', 'computer scientist (m)'), N('f', 'Informatikerin', 'Informatikerinnen', 'computer scientist (f)'),
      N('m', 'Ingenieur', 'Ingenieure', 'engineer (m)'), N('f', 'Ingenieurin', 'Ingenieurinnen', 'engineer (f)'),
      N('m', 'Kellner', 'Kellner', 'waiter'), N('f', 'Kellnerin', 'Kellnerinnen', 'waitress'),
      N('m', 'Friseur', 'Friseure', 'hairdresser (m)'), N('f', 'Friseurin', 'Friseurinnen', 'hairdresser (f)'),
      N('m', 'Verkäufer', 'Verkäufer', 'salesman, shop assistant'), N('f', 'Verkäuferin', 'Verkäuferinnen', 'saleswoman, shop assistant'),
      N('m', 'Architekt', 'Architekten', 'architect (m)'), N('f', 'Architektin', 'Architektinnen', 'architect (f)'),
      N('m', 'Historiker', 'Historiker', 'historian (m)'), N('f', 'Historikerin', 'Historikerinnen', 'historian (f)'),
      N('f', 'Krankenschwester', 'Krankenschwestern', 'nurse (f)'), N('m', 'Krankenpfleger', 'Krankenpfleger', 'nurse (m)'),
      N('f', 'Ausbildung', 'Ausbildungen', 'vocational training / apprenticeship', 'Ich mache eine Ausbildung als Friseurin.'),
      N('n', 'Praktikum', 'Praktika', 'internship', 'Ich mache ein Praktikum bei Siemens.'),
      N('m', 'Job', 'Jobs', 'job', 'Ich habe einen Job als Kellner.'),
      N('f', 'Firma', 'Firmen', 'company'),
      W('arbeitslos', 'unemployed'),
    ]},
    { group: 'Persönliches', items: [
      W('verheiratet', 'married'), W('geschieden', 'divorced'), W('ledig', 'single (official)'),
      W('Single', 'single', 'Ich bin Single.'), W('zusammen', 'together'), W('allein', 'alone'),
      N('n', 'Kind', 'Kinder', 'child', 'Ich habe keine Kinder.'),
      N('n', 'Alter', '', 'age'), N('m', 'Wohnort', 'Wohnorte', 'place of residence'),
      N('f', 'Herkunft', '', 'origin'), N('m', 'Familienstand', '', 'marital status'),
      N('m', 'Steckbrief', 'Steckbriefe', 'profile / fact sheet'),
      N('f', 'Visitenkarte', 'Visitenkarten', 'business card'),
      W('alt', 'old', 'Wie alt bist du?'), N('n', 'Jahr', 'Jahre', 'year', 'Ich bin 24 Jahre alt.'),
    ]},
    { group: 'Verben', items: [
      V('arbeiten', 'to work', 'Ich arbeite als Ingenieurin.'), V('machen', 'to do, to make', 'Was machst du beruflich?'),
      V('haben', 'to have', 'Wir haben ein Kind.'), V('wohnen', 'to live (reside)', 'Ich wohne in Köln.'),
      V('leben', 'to live', 'Wir leben zusammen.'), V('studieren', 'to study (at university)', 'Ich studiere Informatik.'),
    ]},
    { group: 'Zahlen 0 – 100', items: [
      W('null', '0'), W('eins', '1'), W('zwei', '2'), W('drei', '3'), W('vier', '4'), W('fünf', '5'), W('sechs', '6'),
      W('sieben', '7'), W('acht', '8'), W('neun', '9'), W('zehn', '10'), W('elf', '11'), W('zwölf', '12'),
      W('dreizehn', '13'), W('sechzehn', '16'), W('siebzehn', '17'), W('zwanzig', '20'), W('einundzwanzig', '21'),
      W('dreißig', '30'), W('vierzig', '40'), W('fünfzig', '50'), W('sechzig', '60'), W('siebzig', '70'),
      W('achtzig', '80'), W('neunzig', '90'), W('hundert', '100'),
    ]},
    { group: 'Präpositionen', items: [
      W('als', 'as (job)', 'Ich arbeite als Journalistin.'), W('bei', 'at (company)', 'Ich arbeite bei X-Media.'), W('in', 'in (place)', 'Ich wohne in Berlin.'),
      W('nicht', 'not', 'Wir sind nicht verheiratet.'),
    ]},
  ],
  grammar: [
    { title: 'Present tense: all persons', html: `
      <table class="gtable"><tr><th></th><th>wohnen</th><th>arbeiten</th><th>haben ⚠</th><th>sein ⚠</th></tr>
      <tr><td>ich</td><td>wohn<b>e</b></td><td>arbeit<b>e</b></td><td>hab<b>e</b></td><td>bin</td></tr>
      <tr><td>du</td><td>wohn<b>st</b></td><td>arbeit<b>est</b></td><td><b>hast</b></td><td>bist</td></tr>
      <tr><td>er/sie/es</td><td>wohn<b>t</b></td><td>arbeit<b>et</b></td><td><b>hat</b></td><td>ist</td></tr>
      <tr><td>wir</td><td>wohn<b>en</b></td><td>arbeit<b>en</b></td><td>hab<b>en</b></td><td>sind</td></tr>
      <tr><td>ihr</td><td>wohn<b>t</b></td><td>arbeit<b>et</b></td><td>hab<b>t</b></td><td>seid</td></tr>
      <tr><td>sie / Sie</td><td>wohn<b>en</b></td><td>arbeit<b>en</b></td><td>hab<b>en</b></td><td>sind</td></tr></table>
      <p><b>Endings to memorise:</b> -e, -st, -t, -en, -t, -en.</p>
      <p>Stem ends in <b>-t / -d</b> (arbeit-, find-) → add an <b>e</b> for du, er, ihr: du arbeit<b>e</b>st, er arbeit<b>e</b>t, ihr arbeit<b>e</b>t.</p>
      <p><b>sie</b> (they) and <b>Sie</b> (you, formal) always have the same verb form. Only context and the capital letter tell them apart.</p>` },
    { title: 'Talking about your job: als, bei, in', html: `
      <table class="gtable"><tr><th></th><th>use</th><th>example</th></tr>
      <tr><td><b>als</b></td><td>+ job (no article!)</td><td>Ich arbeite als Ingenieurin.</td></tr>
      <tr><td><b>bei</b></td><td>+ company / employer</td><td>Ich arbeite bei Siemens.</td></tr>
      <tr><td><b>in</b></td><td>+ city / country</td><td>Ich wohne in München.</td></tr></table>
      <p>⚠ No article before jobs: <i>Ich bin Student.</i> (not "ein Student" when you state your job). Same after <b>als</b>.</p>
      <p>Questions: <i>Was sind Sie von Beruf? · Was machen Sie beruflich? · Was machst du?</i></p>` },
    { title: 'Female forms with -in', html: `
      <p>Most jobs: masculine + <b>-in</b> = feminine. Plural of -in: <b>-innen</b>.</p>
      <table class="gtable"><tr><th>der …</th><th>die …in</th><th>plural (f)</th></tr>
      <tr><td>der Lehrer</td><td>die Lehrer<b>in</b></td><td>die Lehrer<b>innen</b></td></tr>
      <tr><td>der Student</td><td>die Student<b>in</b></td><td>die Student<b>innen</b></td></tr>
      <tr><td>der A<b>r</b>zt</td><td>die <b>Ä</b>rzt<b>in</b> (umlaut!)</td><td>die Ärzt<b>innen</b></td></tr></table>
      <p>Exceptions: der Krankenpfleger / die Krankenschwester · der Hausmann / die Hausfrau.</p>` },
    { title: 'Negation with nicht', html: `
      <p><b>nicht</b> negates a verb, an adjective, or a phrase with a preposition. It goes <b>after the verb</b> and before the part it negates.</p>
      <ul><li>Wir sind <b>nicht</b> verheiratet.</li><li>Sie wohnt <b>nicht</b> in Köln.</li><li>Wir leben <b>nicht</b> zusammen.</li></ul>
      <p>(Nouns with <i>ein</i> are negated with <b>kein</b>, which you'll meet in L5: <i>Ich habe <b>keine</b> Kinder.</i>)</p>` },
    { title: 'Numbers 0–100', html: `
      <p>21–99: say the ones digit <b>first</b>: 21 = ein<b>und</b>zwanzig (one-and-twenty), 47 = sieben<b>und</b>vierzig.</p>
      <p>Watch these: <b>eins</b> but ein<b>und</b>zwanzig · <b>sech</b>zehn, <b>sech</b>zig (no s) · <b>sieb</b>zehn, <b>sieb</b>zig (no en) · drei<b>ß</b>ig (ß, not z) · zwanzig (not zweizig).</p>
      <p>Phone numbers: digit by digit, often in pairs. 0176 = null-eins-sieben-sechs. People say <b>zwo</b> instead of zwei on the phone.</p>` },
  ],
  phrases: [
    ['über den Beruf sprechen', ['Was sind Sie von Beruf? / Was bist du von Beruf?', 'Was machen Sie beruflich? / Was machst du beruflich?', 'Ich bin Studentin. / Ich arbeite als …', 'Ich mache eine Ausbildung als … / ein Praktikum bei …', 'Ich habe einen Job als …']],
    ['über Persönliches sprechen', ['Wo wohnen Sie? / Wo wohnst du? – Ich wohne/lebe in …', 'Ich bin verheiratet / geschieden / Single.', 'Wir leben (nicht) zusammen.', 'Ich habe ein Kind / zwei Kinder / keine Kinder.', 'Wie alt sind Sie? / Wie alt bist du? – Ich bin … Jahre alt.']],
  ],
  exercises: [
    { type: 'gap', title: 'Konjugation: alle Personen', items: [
      'Wir {wohnen} in Berlin. (wohnen)',
      'Ihr {arbeitet} bei Galaxsyst. (arbeiten)',
      'Du {arbeitest} als Kellner. (arbeiten)',
      'Er {hat} zwei Kinder. (haben)',
      'Was {machst} du beruflich? (machen)',
      'Ihr {seid} nicht verheiratet. (sein)',
      'Wir {haben} keine Kinder. (haben)',
      'Sven und Nadine {wohnen} in Berlin. (wohnen)',
      '{Habt} ihr Kinder? (haben)',
      'Sie {arbeitet} bei X-Media. (arbeiten – she)',
    ]},
    { type: 'gap', title: 'Weibliche Form', items: [
      'der Lehrer → die {Lehrerin}', 'der Arzt → die {Ärztin}', 'der Student → die {Studentin}', 'der Kellner → die {Kellnerin}', 'der Krankenpfleger → die {Krankenschwester}', 'der Journalist → die {Journalistin}',
    ]},
    { type: 'mc', title: 'als, bei oder in?', items: [
      { q: 'Ich arbeite ___ Ärztin.', options: ['als', 'bei', 'in'], a: 0 },
      { q: 'Sie arbeitet ___ Brenner IT-Consulting.', options: ['als', 'bei', 'in'], a: 1 },
      { q: 'Wir wohnen ___ Bonn.', options: ['als', 'bei', 'in'], a: 2 },
      { q: 'Ich mache ein Praktikum ___ BMW.', options: ['als', 'bei', 'in'], a: 1 },
      { q: 'Er hat einen Job ___ Kellner.', options: ['als', 'bei', 'in'], a: 0 },
    ]},
    { type: 'listen', title: 'Zahlen: Hören Sie und schreiben Sie die Zahl (in Ziffern).', numbers: true, items: ['13', '30', '17', '70', '16', '60', '21', '34', '58', '99', '45', '12'] },
    { type: 'gap', title: 'Zahlen schreiben', items: [
      '21 = {einundzwanzig}', '35 = {fünfunddreißig}', '16 = {sechzehn}', '67 = {siebenundsechzig}', '100 = {hundert|einhundert}', '12 = {zwölf}',
    ]},
    { type: 'tf', title: 'Lesen: Internet-Profil', text: `Hallo! Ich heiße Mette Svensson und komme aus Dänemark. Ich wohne in Köln. Ich bin Studentin und habe einen Job als Kellnerin. Ich bin 24 Jahre alt, Single und habe keine Kinder. Meine Freundin Ana kommt aus Spanien. Sie ist Ärztin und arbeitet in Bonn. Sie ist verheiratet.`, items: [
      ['Mette kommt aus Deutschland.', false], ['Mette wohnt in Köln.', true], ['Mette arbeitet als Kellnerin.', true], ['Mette hat ein Kind.', false], ['Ana ist Ärztin.', true], ['Ana ist nicht verheiratet.', false],
    ]},
    { type: 'order', title: 'Satzbau', items: [
      { words: ['Wir', 'sind', 'nicht', 'verheiratet', '.'], en: 'We are not married.' },
      { words: ['Was', 'machen', 'Sie', 'beruflich', '?'], en: 'What do you do for a living?' },
      { words: ['Ich', 'arbeite', 'als', 'Informatikerin', 'bei', 'SAP', '.'], en: 'I work as an IT specialist at SAP.' },
      { words: ['Wie', 'alt', 'bist', 'du', '?'], en: 'How old are you?' },
    ]},
    { type: 'dialogue', title: 'Hören: Interview', lines: [
      ['A', 'Barbara, Markus, seid ihr verheiratet?'],
      ['B', 'Nein, wir sind nicht verheiratet. Aber wir leben zusammen.'],
      ['A', 'Habt ihr Kinder?'],
      ['B', 'Ja, wir haben ein Kind. Er heißt Leon und ist zwei Jahre alt.'],
      ['A', 'Und wo wohnt ihr?'],
      ['B', 'Wir wohnen in Hamburg. Markus arbeitet als Architekt und ich bin Lehrerin.'],
    ], questions: [
      { q: 'Barbara und Markus sind …', options: ['verheiratet', 'nicht verheiratet', 'geschieden'], a: 1 },
      { q: 'Sie haben …', options: ['keine Kinder', 'ein Kind', 'zwei Kinder'], a: 1 },
      { q: 'Markus ist …', options: ['Lehrer', 'Architekt', 'Journalist'], a: 1 },
    ]},
    { type: 'write', title: 'Schreiben: Ihr Steckbrief + Text', prompt: 'Fill in your Steckbrief mentally (Vorname, Familienname, Herkunft, Wohnort, Beruf, Alter, Familienstand, Kinder) and write a text of 5–7 sentences about yourself.', checklist: ['Ich heiße …', 'Ich komme aus … / Ich wohne in …', 'Ich bin … / Ich arbeite als … / Ich studiere …', 'Ich bin … Jahre alt.', 'Familienstand + Kinder', 'Verbs are in position 2 everywhere'], model: 'Ich heiße Arya Suneesh und komme aus Indien. Ich wohne in Deutschland. Ich bin Student und studiere an der Universität. Ich bin … Jahre alt. Ich bin Single und habe keine Kinder.' },
    { type: 'speak', title: 'Sprechen: Echo-Spiel', prompt: 'Answer out loud: Wie alt bist du? Wo wohnst du? Was machst du beruflich? Bist du verheiratet? Hast du Kinder?', keywords: ['Jahre alt', 'wohne', 'bin'], model: 'Ich bin 25 Jahre alt. Ich wohne in Mannheim. Ich bin Student. Nein, ich bin nicht verheiratet. Ich habe keine Kinder.' },
  ],
  drill: [
    { de: 'Was machen Sie beruflich?', en: 'What do you do for a living? (formal)' },
    { de: 'Was bist du von Beruf?', en: 'What is your job? (informal)' },
    { de: 'Ich bin Student.', en: 'I am a student. (male)' },
    { de: 'Ich bin Studentin.', en: 'I am a student. (female)' },
    { de: 'Ich arbeite als Ingenieur.', en: 'I work as an engineer.' },
    { de: 'Ich arbeite bei Siemens.', en: 'I work at Siemens.' },
    { de: 'Ich mache ein Praktikum.', en: 'I am doing an internship.' },
    { de: 'Wo wohnst du?', en: 'Where do you live? (informal)' },
    { de: 'Ich wohne in Berlin.', en: 'I live in Berlin.' },
    { de: 'Wie alt sind Sie?', en: 'How old are you? (formal)' },
    { de: 'Ich bin fünfundzwanzig Jahre alt.', en: 'I am twenty-five years old.' },
    { de: 'Sind Sie verheiratet?', en: 'Are you married? (formal)' },
    { de: 'Nein, ich bin nicht verheiratet.', en: 'No, I am not married.' },
    { de: 'Hast du Kinder?', en: 'Do you have children? (informal)' },
    { de: 'Wir haben zwei Kinder.', en: 'We have two children.' },
    { de: 'Wir leben zusammen.', en: 'We live together.' },
    { de: 'Was habt ihr gemeinsam?', en: 'What do you (all) have in common?' },
    { de: 'Wir wohnen in Bonn.', en: 'We live in Bonn.' },
    { de: 'Ihr arbeitet bei X-Media.', en: 'You (all) work at X-Media.' },
  ],
  exam: [
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 1', title: 'Sich vorstellen — now with Alter, Wohnort, Beruf', prompt: 'Say one sentence for each card: Name? · Alter? · Land? · Wohnort? · Beruf? Then the examiner asks you for your phone number: say it digit by digit.', keywords: ['heiße', 'Jahre alt', 'komme aus', 'wohne in', 'Student'], model: 'Ich heiße Arya. Ich bin 25 Jahre alt. Ich komme aus Indien. Ich wohne in Mannheim. Ich bin Student. Meine Telefonnummer ist null – eins – sieben – sechs …' },
    { type: 'listen', exam: 'Start Deutsch 1 · Hören Teil 3 (phone messages)', title: 'Telefonnummern & Zahlen: write the number you hear (digits only, no spaces).', numbers: true, items: ['0176 5512', '89', '0221 3470', '15'] },
    { type: 'form', exam: 'Start Deutsch 1 · Schreiben Teil 1', title: 'Formular ausfüllen', text: 'Ihre Freundin Mette Svensson (24) aus Dänemark möchte einen Sprachkurs machen. Sie wohnt in Köln, Rheinstraße 12. Sie ist Studentin und nicht verheiratet. Sie hat keine Kinder. Helfen Sie ihr mit dem Formular.', fields: [
      ['Familienname', 'Svensson'], ['Alter', '24'], ['Herkunftsland', 'Dänemark'], ['Wohnort', 'Köln'], ['Beruf', 'Studentin'], ['Familienstand', 'ledig|nicht verheiratet|Single'],
    ]},
  ],
});
})();
