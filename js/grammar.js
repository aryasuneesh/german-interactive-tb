/* grammar.js — rule-based morphology for every word in the app:
 *   nouns:  Nominativ / Akkusativ / Dativ / Genitiv, singular + plural, with der / ein / kein
 *           (strong, weak "n-Deklination" and mixed nouns), plus example sentences per case
 *   verbs:  Präsens, Präteritum, Perfekt (haben / sein), Imperativ — regular, irregular, separable, -ieren
 *   adjectives: comparative / superlative
 * Loaded after data, before the app. Pure functions; no DOM. */
(() => {
const G = (window.Grammar = {});

/* ───────────── articles ───────────── */
const ART = {
  def:   { m: ['der', 'den', 'dem', 'des'], n: ['das', 'das', 'dem', 'des'], f: ['die', 'die', 'der', 'der'], pl: ['die', 'die', 'den', 'der'] },
  indef: { m: ['ein', 'einen', 'einem', 'eines'], n: ['ein', 'ein', 'einem', 'eines'], f: ['eine', 'eine', 'einer', 'einer'], pl: ['—', '—', '—', '—'] },
  neg:   { m: ['kein', 'keinen', 'keinem', 'keines'], n: ['kein', 'kein', 'keinem', 'keines'], f: ['keine', 'keine', 'keiner', 'keiner'], pl: ['keine', 'keine', 'keinen', 'keiner'] },
  poss:  { m: ['mein', 'meinen', 'meinem', 'meines'], n: ['mein', 'mein', 'meinem', 'meines'], f: ['meine', 'meine', 'meiner', 'meiner'], pl: ['meine', 'meine', 'meinen', 'meiner'] },
};
G.ART = ART;
G.CASES = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
G.CASE_USE = {
  Nominativ: 'subject; after sein / heißen / werden — Wer? Was?',
  Akkusativ: 'direct object (haben, brauchen, sehen, kaufen, möchten …); after für, ohne, durch, gegen, um; Wohin? with in/an/auf … — Wen? Was?',
  Dativ: 'indirect object (geben, helfen, danken, gefallen, gehören …); after mit, nach, aus, zu, von, bei, seit, ab; Wo? with in/an/auf … — Wem?',
  Genitiv: 'possession (des Mannes, der Frau); after wegen, trotz, während. Mainly written German, A2/B1. Spoken: von + Dativ',
};

/* ───────────── nouns ───────────── */
const WEAK = new Set(['Herr', 'Mensch', 'Nachbar', 'Bauer', 'Bär', 'Held', 'Prinz', 'Graf', 'Automat', 'Planet', 'Pilot', 'Polizist', 'Präsident', 'Elefant', 'Patient', 'Assistent', 'Journalist',
  'Student', 'Architekt', 'Fotograf', 'Praktikant', 'Kunde', 'Kollege', 'Neffe', 'Junge', 'Franzose', 'Türke', 'Chinese', 'Russe', 'Pole', 'Grieche', 'Schwede', 'Däne', 'Kamerad', 'Komponist',
  'Tourist', 'Spezialist', 'Pianist', 'Gitarrist', 'Kandidat', 'Soldat', 'Diplomat', 'Biologe', 'Psychologe', 'Geologe', 'Löwe', 'Affe', 'Hase', 'Kunde', 'Experte', 'Zeuge', 'Lieferant', 'Demonstrant', 'Agent', 'Dozent', 'Absolvent', 'Konsonant', 'Fabrikant', 'Philosoph', 'Monarch']);
const MIXED = new Set(['Name', 'Buchstabe', 'Gedanke', 'Glaube', 'Wille', 'Friede', 'Funke', 'Same', 'Nachname', 'Vorname', 'Familienname', 'Spitzname', 'Geburtsname']);
const lastPart = (w) => { // last element of a compound: Familienname → Name, Hauptbahnhof → hof … (used for weak/mixed lookup)
  for (const s of [...WEAK, ...MIXED]) if (w.length > s.length && w.endsWith(s.toLowerCase()) && /[a-zäöüß]/.test(w[w.length - s.length - 1] || '')) return s;
  for (const s of [...WEAK, ...MIXED]) if (w.endsWith(s)) return s;
  return w;
};
const syllables = (w) => (w.toLowerCase().match(/[aeiouäöüy]+/g) || []).length;

G.nounKind = (v) => {
  if (v.g !== 'm') return 'strong';
  if (v.weak) return 'weak';
  const lp = lastPart(v.w);
  if (MIXED.has(v.w) || MIXED.has(lp)) return 'mixed';
  if (WEAK.has(v.w) || (WEAK.has(lp) && lp !== v.w && v.w.endsWith(lp))) return 'weak';
  return 'strong';
};
G.declinable = (v) => v.t === 'n' && !/[\s()]/.test(v.w.replace(/\s*\([^)]*\)\s*/g, '').trim()) && ['m', 'n', 'f', 'pl'].includes(v.g);
const baseWord = (v) => v.w.replace(/\s*\([^)]*\)\s*/g, '').trim();

/* returns { sg: [nom, akk, dat, gen] | null, pl: [...] | null, kind } — noun forms without articles */
G.decline = (v) => {
  const w = baseWord(v);
  const kind = G.nounKind(v);
  let sg = null, pl = null;
  if (v.g !== 'pl') {
    if (v.g === 'f') sg = [w, w, w, w];
    else if (w === 'Herr') sg = ['Herr', 'Herrn', 'Herrn', 'Herrn'];
    else if (kind === 'weak') { const e = /e$/.test(w) ? 'n' : /[aeiouäöü]r$/.test(w) && w !== 'Bär' ? 'n' : 'en'; sg = [w, w + e, w + e, w + e]; }
    else if (kind === 'mixed') sg = [w, w + 'n', w + 'n', w + 'ns'];
    else {
      let gen;
      if (/nis$/.test(w)) gen = w + 'ses';
      else if (v.pl && /s$/.test(v.pl) && !/(s|ß|x|z|sch)$/.test(w)) gen = w + 's'; // English-type plural → -s (Job, Chef, Tipp)
      else if (/(s|ß|x|z|tz|sch)$/.test(w)) gen = w + 'es';
      else if (/[aeiouyäöüé]$/i.test(w) || /(er|el|en|em|chen|lein|ling|ig|ich)$/.test(w) || syllables(w) > 1) gen = w + 's';
      else gen = w + 'es';
      if (w === 'Bus') gen = 'Busses';
      if (['Cent', 'Gramm', 'Film', 'Sport'].includes(w)) gen = w + 's';
      if (['Weihnachten', 'Ostern'].includes(w)) gen = w;
      if (w === 'Kurs' || w === 'Preis' || w === 'Reis') gen = w + 'es';
      sg = [w, w, w, gen];
    }
  }
  const plural = v.g === 'pl' ? w : v.pl;
  if (plural) {
    const p = plural;
    const dat = /[ns]$/.test(p) || ['Euro', 'Cent'].includes(p) ? p : p + 'n';
    pl = [p, p, dat, p];
  }
  return { sg, pl, kind };
};

/* full phrases with articles: table[type][number][case] */
G.table = (v) => {
  const d = G.decline(v);
  const g = v.g === 'pl' ? 'pl' : v.g;
  const row = (type, forms, gg) => forms ? forms.map((f, i) => (ART[type][gg][i] === '—' ? f : ART[type][gg][i] + ' ' + f)) : null;
  return {
    kind: d.kind,
    def: { sg: v.g === 'pl' ? null : row('def', d.sg, g), pl: row('def', d.pl, 'pl') },
    indef: { sg: v.g === 'pl' ? null : row('indef', d.sg, g), pl: d.pl ? d.pl.map((f) => f) : null },
    neg: { sg: v.g === 'pl' ? null : row('neg', d.sg, g), pl: row('neg', d.pl, 'pl') },
    forms: d,
  };
};

/* semantic category from group name / English gloss → picks sensible example sentences */
const wordRe = (list) => new RegExp('\\b(' + list.trim().split(/\s+/).map((w) => w.replace(/_/g, ' ')).join('|') + ')(s|es)?\\b', 'i');
const PERSON = wordRe(`mr mrs man woman men women boy girl child baby human person people mother father son daughter brother sister sibling parent grandma grandpa grandmother grandfather grandparent grandson granddaughter grandchild
  uncle aunt cousin nephew niece husband wife partner friend boyfriend girlfriend colleague boss teacher doctor dentist vet student pupil waiter waitress nurse actor actress visitor customer trader dealer king fan designer
  salesperson salesman saleswoman composer pensioner employer employee programmer secretary technician engineer architect journalist historian hairdresser guest neighbour policeman policewoman cook chef baker mechanic electrician
  pilot photographer intern farmer musician artist painter pharmacist lawyer manager consultant worker twin bride groom host passenger driver player singer participant instructor professor scientist tourist owner author
  coach tenant landlord inhabitant brother-in-law sister-in-law father-in-law mother-in-law great-grandfather great-grandmother only_child dog cat horse bird Indian Austrian Swiss Spaniard Italian Englishman Englishwoman
  American Mexican Brazilian Japanese Frenchman Frenchwoman Turk Chinese Russian Pole house_husband housewife business_partner`);
const PLACE = wordRe(`station airport pool museum café cafe restaurant club bar pub cinema theatre office room kitchen bathroom toilet garden park school university uni hospital shop bank hotel supermarket bakery butcher's church street
  square lake sea beach mountain forest city town country flat apartment house library canteen platform stop market stadium zoo opera factory workshop practice surgery cellar balcony hallway corridor hall gym island
  village river bridge car_park petrol_station crossroads inn cathedral palace lido department_store pharmacy post_office town_hall living_room bedroom study meadow lecture_hall furniture_store disco gardens`);
const FOOD = wordRe(`food drink bread roll butter cheese sausage ham egg milk muesli yoghurt fruit apple orange banana lemon vegetables tomato potato onion salad lettuce fish meat rice pasta noodles soup roast cake chocolate ice_cream
  cream sugar salt coffee tea water mineral_water juice beer wine honey jam pepper carrot cucumber cabbage mushroom pea bean garlic spinach pear grape strawberry cherry pineapple melon plum nut chicken beef pork steak flour
  oil vinegar mustard sauce spice pizza hamburger chips fries dumpling goulash strudel schnitzel pudding sandwich pretzel lemonade starter main_course dessert breakfast lunch dinner meal mash gateau`);
const TIME = wordRe(`monday tuesday wednesday thursday friday saturday sunday weekend morning afternoon evening night noon january february march april may june july august september october november december spring summer autumn
  winter season day week month year hour minute second moment semester holiday birthday break christmas easter new_year's_eve new_year's_day time_of_day`);
G.category = (v, groupName = '') => {
  if (v.cat) return v.cat;
  const en = (v.en || '').toLowerCase().replace(/\(.*?\)/g, (m) => (/\((m|f)\b/.test(m) ? ' person ' : ' ')), gn = groupName;
  const first = en.split(/[;,/]/)[0].trim();
  if (/Tageszeit|Wochentag|Monate|Jahreszeit/.test(gn)) return 'time';
  if (/\bperson\b/.test(first) && /\((m|f)\b/.test(v.en || '')) return 'person';
  const head = (first.match(/[a-z'äöüé-]+(?=[^a-z'äöüé-]*$)/) || [first])[0];
  for (const t of [head, first]) {
    if (PERSON.test(t)) return 'person';
    if (PLACE.test(t)) return 'place';
    if (FOOD.test(t)) return 'food';
    if (TIME.test(t)) return 'time';
    if (t === head && /^(ticket|cupboard|party|taxi|tree|break|glass|number|railway|egg|card|machine|clock|book|game|ride)$/.test(head)) return 'thing';
  }
  return 'thing';
};
/* example sentences per case. Each returns {sg:[...], pl:[...]} sentences with the form in <b> */
G.examples = (v, groupName) => {
  const t = G.table(v), cat = G.category(v, groupName);
  const D = t.def, I = t.indef, K = t.neg;
  const b = (x) => `<b>${x}</b>`;
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const uncount = v.pl === '';
  const T = {
    person: {
      sg: [`${b(cap(D.sg?.[0] || ''))} wohnt in Berlin.`, `Ich kenne ${b(D.sg?.[1])} gut. · Wir suchen ${b(I.sg?.[1])}.`, `Ich spreche mit ${b(D.sg?.[2])}. · Das Buch gehört ${b(D.sg?.[2])}.`, `Das ist das Handy ${b(D.sg?.[3])}.`],
      pl: [`${b(cap(D.pl?.[0] || ''))} wohnen in Berlin.`, `Ich besuche ${b(D.pl?.[1])}.`, `Ich helfe ${b(D.pl?.[2])}. · Ich gehe mit ${b(D.pl?.[2])} ins Kino.`, `Das ist das Auto ${b(D.pl?.[3])}.`],
    },
    thing: {
      sg: [`${b(cap(D.sg?.[0] || ''))} ist neu. · Das ist ${b(I.sg?.[0])}.`, `Ich brauche ${b(I.sg?.[1])}. · Ich habe ${b(K.sg?.[1])}.`, `Was machst du mit ${b(D.sg?.[2])}? · Ich arbeite mit ${b(I.sg?.[2])}.`, `Die Farbe ${b(D.sg?.[3])} ist schön.`],
      pl: [`${b(cap(D.pl?.[0] || ''))} sind neu.`, `Ich kaufe ${b(D.pl?.[1])}. · Wir haben ${b(K.pl?.[1])}.`, `Was machst du mit ${b(D.pl?.[2])}?`, `Der Preis ${b(D.pl?.[3])} ist gut.`],
    },
    food: {
      sg: [`${b(cap(D.sg?.[0] || ''))} schmeckt sehr gut.`, uncount ? `Ich kaufe ${b(D.sg?.[1])}. · Ich esse/trinke gern ${b(v.w)}.` : `Ich möchte ${b(I.sg?.[1])}. · Ich esse ${b(K.sg?.[1])}.`, `Ich mache das mit ${b(D.sg?.[2])}. · Brot mit ${b(v.w)}? (no article: uncountable)`, `Der Preis ${b(D.sg?.[3])} ist hoch.`],
      pl: [`${b(cap(D.pl?.[0] || ''))} schmecken gut.`, `Ich kaufe ${b(D.pl?.[1])}. · Ich mag ${b(K.pl?.[1])}.`, `Ich koche mit ${b(D.pl?.[2])}.`, `Der Preis ${b(D.pl?.[3])} ist gut.`],
    },
    place: {
      sg: [`${b(cap(D.sg?.[0] || ''))} ist sehr schön.`, `Ich suche ${b(D.sg?.[1])}. · Ich finde ${b(D.sg?.[1])} toll.`, `Wir treffen uns vor ${b(D.sg?.[2])}. · Ich wohne neben ${b(D.sg?.[2])}.`, `Die Adresse ${b(D.sg?.[3])} ist neu.`],
      pl: [`${b(cap(D.pl?.[0] || ''))} sind schön.`, `Ich besuche ${b(D.pl?.[1])}.`, `Wir sprechen von ${b(D.pl?.[2])}.`, `Die Adressen ${b(D.pl?.[3])} sind neu.`],
    },
    time: {
      sg: [`${b(cap(D.sg?.[0] || ''))} beginnt bald.`, `Ich warte auf ${b(D.sg?.[1])}. · Ich finde ${b(D.sg?.[1])} schön.`, `Seit ${b(D.sg?.[2])} lerne ich Deutsch.`, `Am Ende ${b(D.sg?.[3])} bin ich müde.`],
      pl: [`${b(cap(D.pl?.[0] || ''))} sind kurz.`, `Ich mag ${b(D.pl?.[1])}.`, `Seit ${b(D.pl?.[2])} warte ich.`, `Am Ende ${b(D.pl?.[3])} …`],
    },
  }[cat];
  return { cat, sg: v.g === 'pl' ? null : T.sg, pl: t.def.pl ? T.pl : null };
};

/* sentence frames for drills: [case index, number, template with {X}=article+noun] */
G.frames = {
  person: [[0, 'sg', '{X} wohnt in Köln.'], [1, 'sg', 'Ich kenne {X} gut.'], [2, 'sg', 'Ich spreche mit {X}.'], [2, 'sg', 'Das Geschenk ist von {X}.'], [1, 'sg', 'Das Geschenk ist für {X}.'], [3, 'sg', 'Das ist das Auto {X}.'], [2, 'pl', 'Ich helfe {X}.'], [1, 'pl', 'Ich besuche {X}.']],
  thing: [[0, 'sg', '{X} ist neu.'], [1, 'sg', 'Ich brauche {X}.'], [2, 'sg', 'Ich schreibe mit {X}.'], [1, 'sg', 'Ich habe {X} gekauft.'], [3, 'sg', 'Die Farbe {X} ist schön.'], [2, 'pl', 'Was machst du mit {X}?'], [1, 'pl', 'Ich suche {X}.']],
  food: [[0, 'sg', '{X} schmeckt gut.'], [1, 'sg', 'Ich möchte {X}.'], [2, 'sg', 'Ich koche mit {X}.'], [1, 'sg', 'Ich kaufe {X}.'], [2, 'pl', 'Ich mache einen Salat mit {X}.'], [1, 'pl', 'Ich esse gern {X}.']],
  place: [[0, 'sg', '{X} ist sehr schön.'], [1, 'sg', 'Ich suche {X}.'], [2, 'sg', 'Wir treffen uns vor {X}.'], [2, 'sg', 'Ich komme gerade von {X}.'], [3, 'sg', 'Die Adresse {X} ist neu.'], [1, 'pl', 'Ich mag {X}.']],
  time: [[0, 'sg', '{X} beginnt bald.'], [1, 'sg', 'Ich warte auf {X}.'], [2, 'sg', 'Seit {X} lerne ich Deutsch.'], [3, 'sg', 'Am Ende {X} bin ich müde.']],
};
G.FRAME_ARTICLE = { 'Ich brauche {X}.': 'indef', 'Ich möchte {X}.': 'indef', 'Ich habe {X} gekauft.': 'indef', 'Ich besuche {X}.': 'def' };

/* ───────────── verbs ───────────── */
// base strong/irregular verbs: [3sg present, Präteritum 1sg, Partizip II]
const STRONG = {
  essen: ['isst', 'aß', 'gegessen'], fahren: ['fährt', 'fuhr', 'gefahren'], lesen: ['liest', 'las', 'gelesen'], sehen: ['sieht', 'sah', 'gesehen'], sprechen: ['spricht', 'sprach', 'gesprochen'],
  treffen: ['trifft', 'traf', 'getroffen'], nehmen: ['nimmt', 'nahm', 'genommen'], geben: ['gibt', 'gab', 'gegeben'], helfen: ['hilft', 'half', 'geholfen'], schlafen: ['schläft', 'schlief', 'geschlafen'],
  laufen: ['läuft', 'lief', 'gelaufen'], tragen: ['trägt', 'trug', 'getragen'], waschen: ['wäscht', 'wusch', 'gewaschen'], laden: ['lädt', 'lud', 'geladen'], fallen: ['fällt', 'fiel', 'gefallen'],
  fangen: ['fängt', 'fing', 'gefangen'], halten: ['hält', 'hielt', 'gehalten'], vergessen: ['vergisst', 'vergaß', 'vergessen'], werfen: ['wirft', 'warf', 'geworfen'], sterben: ['stirbt', 'starb', 'gestorben'],
  kommen: ['kommt', 'kam', 'gekommen'], gehen: ['geht', 'ging', 'gegangen'], bleiben: ['bleibt', 'blieb', 'geblieben'], schreiben: ['schreibt', 'schrieb', 'geschrieben'], trinken: ['trinkt', 'trank', 'getrunken'],
  finden: ['findet', 'fand', 'gefunden'], singen: ['singt', 'sang', 'gesungen'], schwimmen: ['schwimmt', 'schwamm', 'geschwommen'], springen: ['springt', 'sprang', 'gesprungen'], fliegen: ['fliegt', 'flog', 'geflogen'],
  steigen: ['steigt', 'stieg', 'gestiegen'], heißen: ['heißt', 'hieß', 'geheißen'], rufen: ['ruft', 'rief', 'gerufen'], stehen: ['steht', 'stand', 'gestanden'], liegen: ['liegt', 'lag', 'gelegen'],
  sitzen: ['sitzt', 'saß', 'gesessen'], bringen: ['bringt', 'brachte', 'gebracht'], denken: ['denkt', 'dachte', 'gedacht'], kennen: ['kennt', 'kannte', 'gekannt'], tun: ['tut', 'tat', 'getan'],
  beginnen: ['beginnt', 'begann', 'begonnen'], backen: ['backt', 'backte', 'gebacken'], genießen: ['genießt', 'genoss', 'genossen'], verlieren: ['verliert', 'verlor', 'verloren'], ziehen: ['zieht', 'zog', 'gezogen'],
  schneiden: ['schneidet', 'schnitt', 'geschnitten'], bitten: ['bittet', 'bat', 'gebeten'], bieten: ['bietet', 'bot', 'geboten'], schließen: ['schließt', 'schloss', 'geschlossen'], gewinnen: ['gewinnt', 'gewann', 'gewonnen'],
  nennen: ['nennt', 'nannte', 'genannt'], rennen: ['rennt', 'rannte', 'gerannt'], schieben: ['schiebt', 'schob', 'geschoben'], leihen: ['leiht', 'lieh', 'geliehen'], scheinen: ['scheint', 'schien', 'geschienen'],
  waschen2: null,
};
const SPECIAL = {
  sein: { pres: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'], prat: ['war', 'warst', 'war', 'waren', 'wart', 'waren'], part: 'gewesen', aux: 'sein', imp: ['sei', 'seid', 'seien Sie'] },
  haben: { pres: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], prat: ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'], part: 'gehabt', aux: 'haben', imp: ['hab', 'habt', 'haben Sie'] },
  werden: { pres: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'], prat: ['wurde', 'wurdest', 'wurde', 'wurden', 'wurdet', 'wurden'], part: 'geworden', aux: 'sein', imp: ['werd(e)', 'werdet', 'werden Sie'] },
  wissen: { pres: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'], prat: ['wusste', 'wusstest', 'wusste', 'wussten', 'wusstet', 'wussten'], part: 'gewusst', aux: 'haben', imp: ['wisse', 'wisst', 'wissen Sie'] },
  können: { pres: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'], prat: ['konnte', 'konntest', 'konnte', 'konnten', 'konntet', 'konnten'], part: 'gekonnt', aux: 'haben', modal: true },
  müssen: { pres: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'], prat: ['musste', 'musstest', 'musste', 'mussten', 'musstet', 'mussten'], part: 'gemusst', aux: 'haben', modal: true },
  wollen: { pres: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'], prat: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'], part: 'gewollt', aux: 'haben', modal: true },
  dürfen: { pres: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'], prat: ['durfte', 'durftest', 'durfte', 'durften', 'durftet', 'durften'], part: 'gedurft', aux: 'haben', modal: true },
  sollen: { pres: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'], prat: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'], part: 'gesollt', aux: 'haben', modal: true },
  mögen: { pres: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'], prat: ['mochte', 'mochtest', 'mochte', 'mochten', 'mochtet', 'mochten'], part: 'gemocht', aux: 'haben', modal: true },
  möchten: { pres: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'], prat: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'], part: '(gewollt)', aux: 'haben', modal: true, note: 'möchten has no own past: use wollte / hat gewollt' },
};
const SEP = ['zurück', 'weiter', 'zusammen', 'spazieren', 'kennen', 'fest', 'statt', 'teil', 'fern', 'heim', 'weg', 'vor', 'nach', 'mit', 'los', 'auf', 'aus', 'ein', 'an', 'ab', 'zu', 'um', 'her', 'hin', 'dazu', 'vorbei', 'sauber'];
const INSEP = ['be', 'ver', 'er', 'ent', 'zer', 'ge', 'emp', 'miss', 'über', 'hinter', 'wider'];
const SEIN_BASE = new Set(['sein', 'werden', 'bleiben', 'kommen', 'gehen', 'fahren', 'fliegen', 'laufen', 'schwimmen', 'springen', 'steigen', 'fallen', 'reisen', 'wandern', 'passieren', 'sterben', 'klettern', 'landen', 'rennen', 'joggen', 'segeln', 'umziehen', 'aufstehen', 'einschlafen', 'aufwachen', 'wachsen', 'folgen', 'begegnen', 'starten']);
const HABEN_OVERRIDE = new Set(['bekommen', 'verstehen', 'bestehen', 'entstehen?', 'vergehen?']);
const SEP_SEIN_STEMS = new Set(['stehen']); // aufstehen = sein, verstehen = haben

const NOT_SEP = new Set(['antworten', 'analysieren', 'umarmen', 'abonnieren', 'beantworten', 'anstrengen?']);
STRONG.raten = ['rät', 'riet', 'geraten']; STRONG.schlagen = ['schlägt', 'schlug', 'geschlagen']; STRONG.braten = ['brät', 'briet', 'gebraten'];
STRONG.reiten = ['reitet', 'ritt', 'geritten']; STRONG.schreien = ['schreit', 'schrie', 'geschrien']; STRONG.waschen = ['wäscht', 'wusch', 'gewaschen']; STRONG.lassen = ['lässt', 'ließ', 'gelassen'];
STRONG.stehlen = ['stiehlt', 'stahl', 'gestohlen']; STRONG.empfehlen = ['empfiehlt', 'empfahl', 'empfohlen']; STRONG.sinken = ['sinkt', 'sank', 'gesunken']; STRONG.wachsen = ['wächst', 'wuchs', 'gewachsen'];
INSEP.push('unter', 'wieder'); SEIN_BASE.add('reiten');
const REGULAR_INSEP = new Set(['bereiten', 'beantworten', 'bestellen', 'erstellen', 'verstellen', 'bezahlen', 'erzählen', 'besuchen', 'gehören', 'verkaufen', 'verdienen', 'verpassen']);
G.splitVerb = (w) => {
  if (SPECIAL[w] || STRONG[w] || NOT_SEP.has(w)) return { pre: '', base: w };
  for (const p of SEP) {
    const rest = w.slice(p.length);
    if (w.startsWith(p) && rest.length >= 4 && (STRONG[rest] || SPECIAL[rest] || /(en|ern|eln)$/.test(rest)) && !INSEP.some((q) => rest === q + 'n')) return { pre: p, base: rest };
  }
  return { pre: '', base: w };
};
const insepOf = (w) => INSEP.find((p) => w.startsWith(p) && w.length > p.length + 3 && !STRONG[w] && !SPECIAL[w] && !['gehen', 'geben', 'essen', 'erst'].includes(w) && (p !== 'wieder' || w === 'wiederholen') && (p !== 'unter' || /^unter(schreiben|richten|halten|suchen|nehmen|brechen|stützen)$/.test(w)));
G.conjugate = (infRaw) => {
  const words = infRaw.trim().replace(/[()]/g, '').split(' ');
  const inf = words.pop(); const obj = words.join(' ');
  if (SPECIAL[inf]) { const s = SPECIAL[inf]; return { inf, obj, pres: s.pres, prat: s.prat, part: s.part, aux: s.aux, imp: s.imp || null, modal: !!s.modal, note: s.note || '', sep: '' }; }
  const { pre, base } = G.splitVerb(inf);
  const ip = !pre ? insepOf(base) : null;
  const root = ip ? base.slice(ip.length) : base;
  const strongKey = STRONG[base] ? base : (ip && STRONG[root] && !REGULAR_INSEP.has(base) ? root : null);
  const P = ip && strongKey === root ? ip : '';           // prefix to glue onto strong forms
  const elern = /(ern|eln)$/.test(base);
  const st = elern ? base.slice(0, -1) : base === 'tun' ? 'tu' : /en$/.test(base) ? base.slice(0, -2) : base.slice(0, -1);
  const needsE = /[td]$/.test(st) || (/([^aeiouäöüylrmn]|ch)[mn]$/.test(st) && !/[^c]h[mn]$/.test(st));
  const E = needsE ? 'e' : '';
  const sib = /(s|ß|z|x)$/.test(st);
  const ichF = elern && st.endsWith('el') ? st.slice(0, -2) + 'le' : st + 'e';
  let pres = [ichF, sib ? st + 't' : st + E + 'st', st + E + 't', base, st + E + 't', base];
  let s3 = null;
  if (strongKey) {
    s3 = P + STRONG[strongKey][0];
    const s3stem = s3.replace(/t$/, '');
    let du = /t$/.test(st) && !/et$/.test(s3) ? s3 + 'st' : /(s|ß|z|x)$/.test(s3stem) ? s3stem + 't' : s3stem + 'st';
    pres = [ichF, du, s3, base, st + E + 't', base];
  }
  let prat;
  if (strongKey) {
    const p1 = P + STRONG[strongKey][1];
    if (/te$/.test(p1)) { const q = p1.slice(0, -1); prat = [p1, q + 'est', p1, q + 'en', q + 'et', q + 'en']; }
    else prat = [p1, p1 + (/(s|ß|z)$/.test(p1) ? 'est' : 'st'), p1, p1 + 'en', p1 + (/[td]$/.test(p1) ? 'et' : 't'), p1 + 'en'];
  } else { const q = st + E + 'te'; prat = [q, q + 'st', q, q + 'n', q + 't', q + 'n']; }
  let part;
  if (strongKey) part = P ? P + STRONG[strongKey][2].replace(/^ge/, '') : STRONG[strongKey][2];
  else part = (/ieren$/.test(base) || ip || (pre && insepOf(base)) ? '' : 'ge') + st + E + 't';
  part = pre + part;
  const full = pre + base;
  let aux = 'haben';
  if (SEIN_BASE.has(full)) aux = 'sein';
  else if (!ip && SEIN_BASE.has(base) && base !== 'stehen') aux = 'sein';
  if (ip && SEIN_BASE.has(base)) aux = 'sein';
  let impDu;
  if (strongKey) { const s3stem = s3.replace(/t$/, ''); impDu = /ä|äu/.test(s3) ? st : s3stem; }
  else impDu = st + E;
  const sepAdd = (f) => (pre ? f + ' ' + pre : f);
  return {
    inf: full, obj, sep: pre, strong: !!strongKey, modal: false,
    pres: pres.map(sepAdd), prat: prat.map(sepAdd), part, aux,
    imp: [sepAdd(impDu), sepAdd(pres[4]), pre ? base + ' Sie ' + pre : base + ' Sie'],
  };
};
G.PERSONS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
G.AUX = { haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'] };
G.isVerb = (v) => v.t === 'v' && /^[a-zäöüß]+$/.test(v.w.trim().split(' ').pop());

/* ───────────── adjectives ───────────── */
const UML = { alt: 'ält', groß: 'größ', jung: 'jüng', kalt: 'kält', warm: 'wärm', lang: 'läng', kurz: 'kürz', arm: 'ärm', stark: 'stärk', schwach: 'schwäch', scharf: 'schärf', krank: 'kränk', klug: 'klüg', dumm: 'dümm', oft: 'öft', hart: 'härt', gesund: 'gesünd' };
const IRREG = { gut: ['besser', 'am besten'], viel: ['mehr', 'am meisten'], gern: ['lieber', 'am liebsten'], hoch: ['höher', 'am höchsten'], nah: ['näher', 'am nächsten'], teuer: ['teurer', 'am teuersten'], dunkel: ['dunkler', 'am dunkelsten'], groß: ['größer', 'am größten'] };
G.compare = (a) => {
  if (IRREG[a]) return IRREG[a];
  const st = UML[a] || a;
  const sup = /(d|t|s|ß|z|sch|x|eu|au)$/.test(a) && !/(end|isch)$/.test(a) ? st + 'esten' : st + 'sten';
  return [st + 'er', 'am ' + sup];
};
G.adjEndings = (a, sample = { g: 'm', w: 'Tisch' }) => {
  // after definite article (weak endings), singular masc/neut/fem examples
  const def = { m: ['e', 'en', 'en', 'en'], n: ['e', 'e', 'en', 'en'], f: ['e', 'e', 'en', 'en'] };
  const ind = { m: ['er', 'en', 'en', 'en'], n: ['es', 'es', 'en', 'en'], f: ['e', 'e', 'en', 'en'] };
  return { def, ind };
};
})();
