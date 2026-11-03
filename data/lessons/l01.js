(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L1', n: 1, module: 1, level: 'A1.1', pages: '9–12',
  title: 'Hallo! Ich bin Nicole …',
  topic: 'Begegnungen – greetings & introductions',
  goals: [
    'Greet people and say goodbye (formal and informal)',
    'Ask how someone is and answer',
    'Introduce yourself and other people',
    'Say where you and others come from',
    'Spell your name with the German alphabet',
  ],
  vocab: [
    { group: 'Begrüßung & Abschied', items: [
      P('Hallo!', 'Hi! / Hello! (informal)'),
      P('Guten Morgen!', 'Good morning! (until ~10–11 am)'),
      P('Guten Tag!', 'Good day / Hello (formal, daytime)'),
      P('Guten Abend!', 'Good evening!'),
      P('Gute Nacht!', 'Good night! (only when going to bed)'),
      P('Tschüs!', 'Bye! (informal)'),
      P('Auf Wiedersehen!', 'Goodbye! (formal)'),
      P('Grüß Gott! / Servus!', 'Hello (South Germany & Austria)'),
      P('Grüezi!', 'Hello (Switzerland)'),
    ]},
    { group: 'Befinden – how are you?', items: [
      P('Wie geht es Ihnen?', 'How are you? (formal)'),
      P('Wie geht es dir?', 'How are you? (informal)'),
      P('Wie geht\'s?', 'How\'s it going?'),
      P('Sehr gut, danke.', 'Very well, thanks.'),
      P('Gut, danke.', 'Fine, thanks.'),
      P('Es geht.', 'So-so. / OK.'),
      P('Nicht so gut.', 'Not so good.'),
      P('Und Ihnen? / Und dir?', 'And you? (formal / informal)'),
      P('Auch gut.', 'Also fine.'),
    ]},
    { group: 'Person', items: [
      N('m', 'Name', 'Namen', 'name'),
      N('m', 'Vorname', 'Vornamen', 'first name'),
      N('m', 'Familienname', 'Familiennamen', 'surname, family name'),
      N('m', 'Herr', 'Herren', 'Mr / gentleman', 'Guten Tag, Herr Rodriguez!'),
      N('f', 'Frau', 'Frauen', 'Mrs / Ms / woman', 'Guten Tag, Frau Wachter!'),
      N('n', 'Land', 'Länder', 'country'),
      N('n', 'Alphabet', '', 'alphabet'),
    ]},
    { group: 'Verben', items: [
      V('heißen', 'to be called', 'Ich heiße Arya.'),
      V('sein', 'to be', 'Ich bin Paco.'),
      V('kommen', 'to come', 'Ich komme aus Indien.'),
      V('buchstabieren', 'to spell', 'Ich buchstabiere: A-R-Y-A.'),
      V('hören', 'to listen, to hear', 'Hören Sie!'),
    ]},
    { group: 'Fragewörter & kleine Wörter', items: [
      W('wer?', 'who?', 'Wer ist das?'),
      W('wie?', 'how?', 'Wie heißen Sie?'),
      W('woher?', 'where from?', 'Woher kommst du?'),
      W('was?', 'what?', 'Was ist das?'),
      W('und', 'and'),
      W('auch', 'also, too', 'Ich komme auch aus Indien.'),
      W('ja', 'yes'),
      W('nein', 'no'),
      W('danke', 'thanks'),
      W('bitte', 'please; you\'re welcome'),
      W('aus', 'from (origin)', 'aus Mexiko'),
    ]},
    { group: 'Länder', items: [
      W('Deutschland', 'Germany', 'Ich komme aus Deutschland.'),
      W('Österreich', 'Austria', 'Sie kommt aus Österreich.'),
      W('die Schweiz', 'Switzerland', 'aus der Schweiz'),
      W('die Türkei', 'Turkey', 'aus der Türkei'),
      W('der Iran', 'Iran', 'aus dem Iran'),
      W('die USA (pl.)', 'the USA', 'aus den USA'),
      W('Spanien', 'Spain'),
      W('Frankreich', 'France'),
      W('Italien', 'Italy'),
      W('Mexiko', 'Mexico'),
      W('Indien', 'India', 'Ich komme aus Indien.'),
      W('England', 'England'),
      W('China', 'China'),
    ]},
  ],
  grammar: [
    { title: 'Verb conjugation (singular + Sie)', html: `
      <p>German verbs change their ending for each person. Take the stem (<b>komm</b>-en) and add the ending.</p>
      <table class="gtable"><tr><th></th><th>kommen</th><th>heißen</th><th>sein ⚠</th></tr>
      <tr><td>ich</td><td>komm<b>e</b></td><td>heiß<b>e</b></td><td><b>bin</b></td></tr>
      <tr><td>du</td><td>komm<b>st</b></td><td>heiß<b>t</b> *</td><td><b>bist</b></td></tr>
      <tr><td>er / sie</td><td>komm<b>t</b></td><td>heiß<b>t</b></td><td><b>ist</b></td></tr>
      <tr><td>Sie (formal)</td><td>komm<b>en</b></td><td>heiß<b>en</b></td><td><b>sind</b></td></tr></table>
      <p>* Stem ends in <b>ß / s / z</b> → du gets only <b>-t</b>: du heißt (not heißst).</p>
      <p><b>sein</b> is irregular. Learn it by heart: <i>ich bin, du bist, er ist, Sie sind.</i></p>` },
    { title: 'W-questions and statements: verb in position 2', html: `
      <p>The conjugated verb is always the <b>second element</b>, both in W-questions and statements.</p>
      <table class="gtable"><tr><th>Position 1</th><th>Position 2 (verb)</th><th>…</th></tr>
      <tr><td>Wie</td><td class="verb">heißen</td><td>Sie?</td></tr>
      <tr><td>Woher</td><td class="verb">kommst</td><td>du?</td></tr>
      <tr><td>Wer</td><td class="verb">ist</td><td>das?</td></tr>
      <tr><td>Ich</td><td class="verb">heiße</td><td>Paco.</td></tr>
      <tr><td>Mein Name</td><td class="verb">ist</td><td>Valerie.</td></tr></table>
      <p>W-words at A1: <b>wer</b> (who), <b>wie</b> (how), <b>woher</b> (where from), <b>was</b> (what), <b>wo</b> (where).</p>` },
    { title: 'du or Sie?', html: `
      <p><b>du</b> = friends, family, children, fellow students, most people under ~30 in informal settings.<br>
      <b>Sie</b> (capital S!) = strangers, officials, teachers/professors, at work, anyone you call Herr/Frau.</p>
      <p>The Sie-form of the verb looks like the infinitive: <i>Woher <b>kommen</b> Sie?</i></p>
      <table class="gtable"><tr><th>informal</th><th>formal</th></tr>
      <tr><td>Wie heißt du?</td><td>Wie heißen Sie?</td></tr>
      <tr><td>Wie geht es dir?</td><td>Wie geht es Ihnen?</td></tr>
      <tr><td>Hallo! / Tschüs!</td><td>Guten Tag! / Auf Wiedersehen!</td></tr></table>
      <p>When in doubt in Germany: use <b>Sie</b>. Uni lecturers: always Sie unless they offer du.</p>` },
    { title: 'aus + country', html: `
      <p>Most countries have no article: <i>aus Deutschland, aus Indien, aus Spanien</i>.</p>
      <p>A few have one, and after <b>aus</b> it changes (that's the dative case, you'll learn it fully in L13):</p>
      <table class="gtable"><tr><th>country</th><th>aus …</th></tr>
      <tr><td>die Schweiz, die Türkei</td><td>aus <b>der</b> Schweiz, aus <b>der</b> Türkei</td></tr>
      <tr><td>der Iran, der Irak</td><td>aus <b>dem</b> Iran</td></tr>
      <tr><td>die USA (plural)</td><td>aus <b>den</b> USA</td></tr></table>` },
    { title: 'The alphabet', html: `<p>Click a letter to hear it. The tricky ones for English speakers: <b>E</b> (eh), <b>I</b> (ih), <b>J</b> (jott), <b>V</b> (fau), <b>W</b> (weh), <b>Y</b> (üpsilon), <b>Z</b> (tsett), <b>ß</b> (eszett).</p><div class="alphabet" data-alphabet></div>` },
  ],
  phrases: [
    ['sich vorstellen', ['Ich heiße … / Ich bin …', 'Mein Name ist …', 'Ich komme aus …']],
    ['andere vorstellen', ['Das ist Paco.', 'Er kommt aus Mexiko.', 'Das ist Frau Wachter. Sie kommt aus Österreich.']],
    ['fragen', ['Wie heißen Sie? / Wie heißt du?', 'Wer sind Sie? / Wer bist du?', 'Woher kommen Sie? / Woher kommst du?', 'Wer ist das?']],
    ['um Wiederholung bitten', ['Wie bitte?', 'Ich buchstabiere: …']],
  ],
  exercises: [
    { type: 'gap', title: 'Konjugation: kommen, heißen, sein', items: [
      'Ich {komme} aus Indien. (kommen)',
      'Woher {kommst} du? (kommen)',
      'Wie {heißt} du? (heißen)',
      'Wie {heißen} Sie? (heißen)',
      'Ich {bin} Arya. (sein)',
      'Das {ist} Paco. (sein)',
      'Er {kommt} aus Mexiko. (kommen)',
      'Wer {bist} du? (sein)',
      'Wer {sind} Sie? (sein)',
      'Sie {heißt} Nicole. (heißen – she)',
    ]},
    { type: 'order', title: 'Satzbau: Verb auf Position 2', items: [
      { words: ['Woher', 'kommen', 'Sie', '?'], en: 'Where do you come from? (formal)' },
      { words: ['Ich', 'komme', 'aus', 'der', 'Schweiz', '.'], en: 'I come from Switzerland.' },
      { words: ['Wie', 'geht', 'es', 'Ihnen', '?'], en: 'How are you? (formal)' },
      { words: ['Das', 'ist', 'Frau', 'Wachter', '.'], en: 'This is Mrs Wachter.' },
      { words: ['Mein', 'Name', 'ist', 'Valerie', 'Wulf', '.'], en: 'My name is Valerie Wulf.' },
    ]},
    { type: 'mc', title: 'du oder Sie?', items: [
      { q: 'You meet your German professor in the corridor. How are you?', options: ['Wie geht es dir?', 'Wie geht es Ihnen?', 'Wie geht\'s, du?'], a: 1 },
      { q: 'A fellow student (22) at a party. Ask her name.', options: ['Wie heißt du?', 'Wie heißen Sie?', 'Wer sind Sie?'], a: 0 },
      { q: 'Leaving a shop in Berlin:', options: ['Tschüs, du!', 'Auf Wiedersehen!', 'Gute Nacht!'], a: 1, explain: 'In shops: Auf Wiedersehen (Tschüs is also common nowadays, but never "Tschüs, du").' },
      { q: 'At 20:00 you meet a neighbour:', options: ['Guten Morgen!', 'Gute Nacht!', 'Guten Abend!'], a: 2, explain: 'Gute Nacht is only for going to bed / leaving late at night.' },
      { q: '"Wie geht es Ihnen?" – "Sehr gut, danke. …"', options: ['Und dir?', 'Und Ihnen?', 'Und Sie?'], a: 1 },
      { q: 'Your friend asks "Wie geht\'s?" and you feel so-so:', options: ['Es geht.', 'Auch gut.', 'Guten Tag.'], a: 0 },
    ]},
    { type: 'mc', title: 'aus + Land', items: [
      { q: 'Er kommt aus ___ Schweiz.', options: ['—', 'der', 'dem', 'die'], a: 1 },
      { q: 'Ich komme aus ___ Indien.', options: ['—', 'der', 'dem', 'die'], a: 0 },
      { q: 'Sie kommt aus ___ USA.', options: ['der', 'dem', 'den', '—'], a: 2 },
      { q: 'Kommst du aus ___ Iran?', options: ['der', 'dem', 'den', '—'], a: 1 },
      { q: 'Paco kommt aus ___ Mexiko.', options: ['—', 'der', 'dem', 'den'], a: 0 },
    ]},
    { type: 'match', title: 'Wann sagt man das?', pairs: [
      ['07:30, at the bakery', 'Guten Morgen!'],
      ['14:00, at the bank', 'Guten Tag!'],
      ['19:30, at a restaurant', 'Guten Abend!'],
      ['23:30, going to bed', 'Gute Nacht!'],
      ['leaving your friend\'s flat', 'Tschüs!'],
    ]},
    { type: 'listen', title: 'Buchstabieren: Hören Sie und schreiben Sie den Namen.', spell: true, items: [
      'Müller', 'Schmidt', 'Wachter', 'Rodriguez', 'Weber', 'Jung', 'Vogel', 'Zimmermann',
    ]},
    { type: 'listen', title: 'Diktat: Hören Sie und schreiben Sie.', items: [
      'Wie heißen Sie?', 'Ich komme aus Österreich.', 'Woher kommst du?', 'Das ist Frau Wachter.', 'Wie geht es dir?', 'Sehr gut, danke. Und Ihnen?',
    ]},
    { type: 'dialogue', title: 'Hören: Wer sagt was?', lines: [
      ['A', 'Hallo, ich bin Nicole. Und wer bist du?'],
      ['B', 'Ich bin Paco.'],
      ['A', 'Woher kommst du, Paco? Aus Spanien?'],
      ['B', 'Nein, ich komme aus Mexiko. Und du? Du kommst aus Deutschland, hm?'],
      ['A', 'Nein, ich komme aus Österreich.'],
    ], questions: [
      { q: 'Woher kommt Paco?', options: ['aus Spanien', 'aus Mexiko', 'aus Österreich'], a: 1 },
      { q: 'Woher kommt Nicole?', options: ['aus Deutschland', 'aus der Schweiz', 'aus Österreich'], a: 2 },
      { q: 'Sagen sie du oder Sie?', options: ['du', 'Sie'], a: 0 },
    ]},
    { type: 'speak', title: 'Sprechen: Stellen Sie sich vor.', prompt: 'Greet, say your name, spell your first name, say where you come from, and ask the other person their name and origin.', keywords: ['heiße', 'komme aus', 'woher'], model: 'Guten Tag! Ich heiße Arya. Ich buchstabiere: A – R – Y – A. Ich komme aus Indien. Und wie heißen Sie? Woher kommen Sie?' },
    { type: 'write', title: 'Schreiben: Hallo!', prompt: 'Write 3–4 sentences to a new classmate: greeting, your name, where you come from, a question back.', checklist: ['Greeting (Hallo / Guten Tag)', 'Ich heiße / Ich bin …', 'Ich komme aus …', 'A W-question with the verb in position 2'], model: 'Hallo! Ich bin Arya. Ich komme aus Indien. Wie heißt du? Woher kommst du?' },
  ],
  drill: [
    { de: 'Hallo!', en: 'Hi!' },
    { de: 'Guten Tag!', en: 'Good day! (formal hello)' },
    { de: 'Wie heißen Sie?', en: 'What is your name? (formal)' },
    { de: 'Ich heiße Arya.', en: 'My name is Arya. (use: heißen)' },
    { de: 'Wie heißt du?', en: 'What is your name? (informal)' },
    { de: 'Mein Name ist Arya.', en: 'My name is Arya. (use: Name)' },
    { de: 'Woher kommen Sie?', en: 'Where do you come from? (formal)' },
    { de: 'Ich komme aus Indien.', en: 'I come from India.' },
    { de: 'Woher kommst du?', en: 'Where do you come from? (informal)' },
    { de: 'Wie geht es Ihnen?', en: 'How are you? (formal)' },
    { de: 'Sehr gut, danke. Und Ihnen?', en: 'Very well, thanks. And you? (formal)' },
    { de: 'Auch gut.', en: 'Also fine.' },
    { de: 'Wie geht\'s?', en: 'How\'s it going?' },
    { de: 'Es geht.', en: 'So-so.' },
    { de: 'Wer ist das?', en: 'Who is that?' },
    { de: 'Das ist Paco.', en: 'That is Paco.' },
    { de: 'Er kommt aus Mexiko.', en: 'He comes from Mexico.' },
    { de: 'Sie kommt aus der Schweiz.', en: 'She comes from Switzerland.' },
    { de: 'Wie bitte?', en: 'Pardon? / Sorry, what?' },
    { de: 'Auf Wiedersehen!', en: 'Goodbye! (formal)' },
    { de: 'Tschüs!', en: 'Bye!' },
  ],
  exam: [
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 1', title: 'Sich vorstellen (part 1 of the oral exam)', prompt: 'In the exam you get these keywords and must say one sentence each, then spell your name. Say: Name? · Alter? · Land? · Wohnort? · Sprachen? · Beruf? · Hobby? (For now do Name + Land + spell. Come back after L2/L3 for the rest.)', keywords: ['Name', 'komme aus', 'buchstabiere'], model: 'Mein Name ist Arya. Ich komme aus Indien. Ich buchstabiere: A – R – Y – A.' },
    { type: 'listen', exam: 'Start Deutsch 1 · Sprechen Teil 1', title: 'The examiner asks you to spell — and then spells a name to you. Write it.', spell: true, items: ['Becker', 'Krüger', 'Hoffmann'] },
  ],
});
})();
