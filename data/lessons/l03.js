(() => {
const { N, V, W, P } = DE;
DE.addLesson({
  id: 'L3', n: 3, module: 1, level: 'A1.1', pages: '17–20',
  title: 'Das ist meine Mutter.',
  topic: 'Familie & Sprachen',
  goals: [
    'Talk about your family members',
    'Ask yes/no questions and answer with ja, nein, doch',
    'Use mein / dein correctly',
    'Say which languages you speak and how well',
  ],
  vocab: [
    { group: 'Familie', items: [
      N('f', 'Familie', 'Familien', 'family'),
      N('f', 'Mutter', 'Mütter', 'mother'), N('m', 'Vater', 'Väter', 'father'),
      N('pl', 'Eltern', undefined, 'parents (plural only)'),
      N('m', 'Sohn', 'Söhne', 'son'), N('f', 'Tochter', 'Töchter', 'daughter'),
      N('m', 'Bruder', 'Brüder', 'brother'), N('f', 'Schwester', 'Schwestern', 'sister'),
      N('pl', 'Geschwister', undefined, 'siblings (plural only)'),
      N('f', 'Oma', 'Omas', 'grandma'), N('m', 'Opa', 'Opas', 'grandpa'),
      N('f', 'Großmutter', 'Großmütter', 'grandmother'), N('m', 'Großvater', 'Großväter', 'grandfather'),
      N('pl', 'Großeltern', undefined, 'grandparents'),
      N('m', 'Enkel', 'Enkel', 'grandson'), N('f', 'Enkelin', 'Enkelinnen', 'granddaughter'),
      N('m', 'Mann', 'Männer', 'husband; man'), N('f', 'Frau', 'Frauen', 'wife; woman'),
      N('m', 'Onkel', 'Onkel', 'uncle'), N('f', 'Tante', 'Tanten', 'aunt'),
      N('m', 'Cousin', 'Cousins', 'cousin (m)'), N('f', 'Cousine', 'Cousinen', 'cousin (f)'),
      N('m', 'Neffe', 'Neffen', 'nephew'), N('f', 'Nichte', 'Nichten', 'niece'),
      N('n', 'Baby', 'Babys', 'baby'),
    ]},
    { group: 'Andere Personen', items: [
      N('m', 'Freund', 'Freunde', 'friend; boyfriend'), N('f', 'Freundin', 'Freundinnen', 'friend; girlfriend'),
      N('m', 'Kollege', 'Kollegen', 'colleague (m)'), N('f', 'Kollegin', 'Kolleginnen', 'colleague (f)'),
      N('m', 'Partner', 'Partner', 'partner (m)'), N('f', 'Partnerin', 'Partnerinnen', 'partner (f)'),
      N('m', 'Schauspieler', 'Schauspieler', 'actor'), N('f', 'Schauspielerin', 'Schauspielerinnen', 'actress'),
    ]},
    { group: 'Sprachen', items: [
      N('f', 'Sprache', 'Sprachen', 'language'), N('f', 'Fremdsprache', 'Fremdsprachen', 'foreign language'),
      N('f', 'Muttersprache', 'Muttersprachen', 'native language'),
      W('Deutsch', 'German'), W('Englisch', 'English'), W('Französisch', 'French'), W('Spanisch', 'Spanish'),
      W('Italienisch', 'Italian'), W('Russisch', 'Russian'), W('Türkisch', 'Turkish'), W('Arabisch', 'Arabic'),
      W('Chinesisch', 'Chinese'), W('Japanisch', 'Japanese'), W('Hindi', 'Hindi'), W('Polnisch', 'Polish'),
      W('Niederländisch', 'Dutch'), W('Schwedisch', 'Swedish'),
      W('ein bisschen', 'a little', 'Ich spreche ein bisschen Deutsch.'), W('sehr gut', 'very well'),
    ]},
    { group: 'Verben & kleine Wörter', items: [
      V('sprechen', 'to speak (du sprichst, er spricht)', 'Sprichst du Englisch?'),
      V('spielen', 'to play; to act', 'Spielen Sie ähnliche Dialoge.'),
      V('kennen', 'to know (a person / place)', 'Kennst du Paco?'),
      W('doch', 'yes (contradicting a negative question)', 'Ist das nicht deine Mutter? – Doch!'),
      W('mein / meine', 'my'), W('dein / deine', 'your (informal)'),
      W('man', 'one / people (generic)', 'In der Schweiz spricht man Deutsch, Französisch, Italienisch und Rätoromanisch.'),
      W('richtig', 'correct'), W('falsch', 'wrong'),
    ]},
  ],
  grammar: [
    { title: 'Yes/no questions: verb in position 1', html: `
      <p>For a yes/no question, put the conjugated verb <b>first</b>.</p>
      <table class="gtable"><tr><th>type</th><th>Pos. 1</th><th>Pos. 2</th><th>…</th></tr>
      <tr><td>statement</td><td>Das</td><td class="verb">ist</td><td>deine Frau.</td></tr>
      <tr><td>W-question</td><td>Wer</td><td class="verb">ist</td><td>das?</td></tr>
      <tr><td>yes/no question</td><td class="verb">Ist</td><td>das</td><td>deine Frau?</td></tr></table>
      <p>Intonation: yes/no questions go <b>up</b> at the end ↗, W-questions go down ↘.</p>` },
    { title: 'ja – nein – doch', html: `
      <table class="gtable"><tr><th>question</th><th>positive answer</th><th>negative answer</th></tr>
      <tr><td>Ist das deine Frau?</td><td><b>Ja</b>, das ist meine Frau.</td><td><b>Nein</b>, das ist nicht meine Frau.</td></tr>
      <tr><td>Ist das <u>nicht</u> deine Frau?</td><td><b>Doch</b>, das ist meine Frau.</td><td><b>Nein</b>, das ist nicht meine Frau.</td></tr></table>
      <p><b>doch</b> = "yes it is!" in answer to a <i>negative</i> question or statement. English has no single word for it. Herbert's line: <i>"Das ist nicht deine Mutter." – "Doch."</i></p>` },
    { title: 'Possessive articles mein / dein (nominative)', html: `
      <table class="gtable"><tr><th></th><th>der (m)</th><th>das (n)</th><th>die (f)</th><th>die (pl)</th></tr>
      <tr><td>ich</td><td>mein Bruder</td><td>mein Kind</td><td>mein<b>e</b> Schwester</td><td>mein<b>e</b> Eltern</td></tr>
      <tr><td>du</td><td>dein Bruder</td><td>dein Kind</td><td>dein<b>e</b> Schwester</td><td>dein<b>e</b> Eltern</td></tr></table>
      <p>Rule: <b>-e</b> for feminine and plural, nothing for masculine/neuter. The same pattern as <i>ein/eine</i>.</p>` },
    { title: 'Vowel change: sprechen', html: `
      <p>Some verbs change their stem vowel for <b>du</b> and <b>er/sie/es</b> only.</p>
      <table class="gtable"><tr><td>ich spreche</td><td>wir sprechen</td></tr>
      <tr><td>du spr<b>i</b>chst</td><td>ihr sprecht</td></tr>
      <tr><td>er/sie spr<b>i</b>cht</td><td>sie/Sie sprechen</td></tr></table>
      <p>Later in A1: lesen → du l<b>ie</b>st, fahren → du f<b>ä</b>hrst, treffen → du tr<b>i</b>ffst, sehen → du s<b>ie</b>hst, essen → du <b>i</b>sst.</p>` },
  ],
  phrases: [
    ['über die Familie sprechen', ['Das ist meine Mutter / mein Vater.', 'Das sind meine Eltern.', 'Ist Ewa deine Schwester? – Nein, Ewa ist meine Freundin.', 'Wie heißt dein Bruder? – Er heißt …', 'Was ist er von Beruf?']],
    ['über Sprachkenntnisse sprechen', ['Welche Sprachen sprechen Sie / sprichst du?', 'Ich spreche sehr gut / gut / ein bisschen Deutsch.', 'Meine Muttersprache ist …']],
  ],
  exercises: [
    { type: 'gap', title: 'mein / meine / dein / deine', items: [
      'Das ist {meine} Mutter. (my)', 'Das ist {mein} Vater. (my)', 'Das sind {meine} Eltern. (my)', 'Ist das {dein} Bruder? (your)',
      'Ist das {deine} Schwester? (your)', 'Das ist {mein} Kind. (my)', 'Wie heißt {deine} Oma? (your)', 'Sind das {deine} Kinder? (your)',
    ]},
    { type: 'mc', title: 'ja, nein oder doch?', items: [
      { q: '„Ist das deine Frau?" – „___, das ist meine Mutter."', options: ['Ja', 'Nein', 'Doch'], a: 1 },
      { q: '„Ist das nicht deine Mutter?" – „___, das ist meine Mutter!"', options: ['Ja', 'Nein', 'Doch'], a: 2 },
      { q: '„Sprichst du Englisch?" – „___, sehr gut."', options: ['Ja', 'Nein', 'Doch'], a: 0 },
      { q: '„Du bist nicht verheiratet?" – „___, ich bin verheiratet!"', options: ['Ja', 'Nein', 'Doch'], a: 2 },
      { q: '„Hast du keine Geschwister?" – „___, ich habe keine Geschwister."', options: ['Ja', 'Nein', 'Doch'], a: 1, explain: 'Agreeing with a negative = nein.' },
    ]},
    { type: 'gap', title: 'sprechen', items: [
      'Ich {spreche} Hindi und Englisch.', 'Welche Sprachen {sprichst} du?', 'Mark {spricht} sehr gut Spanisch.', 'Wir {sprechen} ein bisschen Deutsch.', '{Sprecht} ihr Französisch?', 'In Österreich {spricht} man Deutsch.',
    ]},
    { type: 'order', title: 'Ja/Nein-Fragen bilden', items: [
      { words: ['Ist', 'das', 'deine', 'Frau', '?'], en: 'Is that your wife?' },
      { words: ['Sprichst', 'du', 'Englisch', '?'], en: 'Do you speak English?' },
      { words: ['Bist', 'du', 'verheiratet', '?'], en: 'Are you married?' },
      { words: ['Kommen', 'Sie', 'aus', 'Italien', '?'], en: 'Do you come from Italy?' },
      { words: ['Hast', 'du', 'Geschwister', '?'], en: 'Do you have siblings?' },
    ]},
    { type: 'match', title: 'Familie', pairs: [
      ['die Mutter von meiner Mutter', 'meine Oma'], ['der Sohn von meiner Tante', 'mein Cousin'], ['meine Mutter und mein Vater', 'meine Eltern'],
      ['die Tochter von meinem Bruder', 'meine Nichte'], ['der Bruder von meinem Vater', 'mein Onkel'], ['der Sohn von meinem Sohn', 'mein Enkel'],
    ]},
    { type: 'dialogue', title: 'Hören: Herbert und Elvira', lines: [
      ['A', 'Wer ist das? Ist das deine Frau?'],
      ['B', 'Nein. Das ist meine Mutter.'],
      ['A', 'Deine Mutter? Das ist nicht deine Mutter. Sie ist nicht sehr alt.'],
      ['B', 'Doch. Sie ist vierundsiebzig.'],
      ['A', 'Bist du verheiratet?'],
      ['B', 'Nein, ich bin nicht verheiratet.'],
    ], questions: [
      { q: 'Die Frau auf dem Foto ist …', options: ['Herberts Frau', 'Herberts Mutter', 'Herberts Schwester'], a: 1 },
      { q: 'Wie alt ist sie?', options: ['47', '74', '64'], a: 1 },
      { q: 'Ist Herbert verheiratet?', options: ['ja', 'nein'], a: 1 },
    ]},
    { type: 'tf', title: 'Lesen: Marks Familie', text: 'Ich heiße Mark und bin 21. Ich studiere Physik in Stuttgart. Das sind meine Eltern, Bernd und Angelika. Sie sind Schauspieler und leben in Frankfurt. Meine Schwester Lena und mein Opa sind auch Schauspieler. Meine Oma heißt Helga. Ich spreche Deutsch, Englisch und ein bisschen Französisch.', items: [
      ['Mark ist Schauspieler.', false], ['Marks Eltern leben in Frankfurt.', true], ['Lena ist Marks Schwester.', true], ['Mark spricht drei Sprachen.', true], ['Helga ist Marks Mutter.', false],
    ]},
    { type: 'speak', title: 'Sprechen: Ihre Familie', prompt: 'Describe 3 family members: who they are, name, age, job, where they live. Then say which languages you speak.', keywords: ['mein', 'meine', 'heißt', 'spreche'], model: 'Das ist meine Mutter. Sie heißt Anita. Sie ist 52 und arbeitet als Lehrerin. Mein Vater heißt … Er wohnt in Mumbai. Ich habe eine Schwester. Ich spreche Englisch, Hindi und ein bisschen Deutsch.' },
    { type: 'write', title: 'Schreiben: Ein Familienmitglied', prompt: 'Interview-style note about one family member (Name, Beruf, Alter, Wohnort, Familienstand, Kinder) as 5 sentences.', checklist: ['Mein/Meine … heißt …', 'Er/Sie ist … Jahre alt.', 'Er/Sie arbeitet als … / ist …', 'Er/Sie wohnt in …', 'Er/Sie ist verheiratet / hat … Kinder'], model: 'Mein Bruder heißt Arjun. Er ist 28 Jahre alt. Er ist Ingenieur und arbeitet bei Infosys. Er wohnt in Bangalore. Er ist verheiratet und hat ein Kind.' },
  ],
  drill: [
    { de: 'Wer ist das?', en: 'Who is that?' },
    { de: 'Das ist meine Mutter.', en: 'That is my mother.' },
    { de: 'Das ist mein Vater.', en: 'That is my father.' },
    { de: 'Das sind meine Eltern.', en: 'Those are my parents.' },
    { de: 'Ist das deine Frau?', en: 'Is that your wife? (informal)' },
    { de: 'Nein, das ist meine Schwester.', en: 'No, that is my sister.' },
    { de: 'Ist das nicht deine Mutter?', en: 'Isn\'t that your mother?' },
    { de: 'Doch!', en: 'Yes, it is! (contradicting)' },
    { de: 'Hast du Geschwister?', en: 'Do you have siblings?' },
    { de: 'Ich habe einen Bruder.', en: 'I have a brother.' },
    { de: 'Wie heißt dein Bruder?', en: 'What is your brother\'s name?' },
    { de: 'Welche Sprachen sprichst du?', en: 'Which languages do you speak?' },
    { de: 'Ich spreche Englisch und Hindi.', en: 'I speak English and Hindi.' },
    { de: 'Ich spreche ein bisschen Deutsch.', en: 'I speak a little German.' },
    { de: 'Er spricht sehr gut Spanisch.', en: 'He speaks Spanish very well.' },
    { de: 'Sprechen Sie Englisch?', en: 'Do you speak English? (formal)' },
    { de: 'Ist das richtig?', en: 'Is that correct?' },
  ],
  exam: [
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 1', title: 'Full self-introduction (all 7 points)', prompt: 'Name? · Alter? · Land? · Wohnort? · Sprachen? · Beruf? · Hobby? — one sentence each. (Hobby: "Mein Hobby ist …" — Fußball, Musik, Lesen …)', keywords: ['heiße', 'Jahre alt', 'komme aus', 'wohne', 'spreche', 'bin', 'Hobby'], model: 'Ich heiße Arya. Ich bin 25 Jahre alt. Ich komme aus Indien. Ich wohne in Mannheim. Ich spreche Englisch, Hindi und ein bisschen Deutsch. Ich bin Student. Mein Hobby ist Musik.' },
    { type: 'speak', exam: 'Start Deutsch 1 · Sprechen Teil 2', title: 'Fragen stellen: Thema „Familie"', prompt: 'You draw cards with the topic "Familie" and a word. Ask a question using the word, then answer the partner\'s question. Cards: Geschwister? · Kinder? · Eltern? · Sprachen?', keywords: ['Hast du', 'Wo', 'Sprichst'], model: 'Hast du Geschwister? – Ja, ich habe eine Schwester. · Hast du Kinder? – Nein, ich habe keine Kinder. · Wo wohnen deine Eltern? – Meine Eltern wohnen in Mumbai. · Welche Sprachen sprichst du? – Ich spreche Englisch und Hindi.' },
  ],
});
})();
