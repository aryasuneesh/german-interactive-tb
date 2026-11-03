/* Content helpers. Loaded before any lesson file.
 * Everything hangs off window.DE so the app works from file:// (no modules, no server). */
window.DE = { lessons: {}, order: [] };

// Noun: gender m/n/f/pl, word (no article), plural form (full word, '' = no plural), English
DE.N = (g, w, pl, en, ex) => ({ t: 'n', g, w, pl, en, ex });
// Verb
DE.V = (w, en, ex, forms) => ({ t: 'v', w, en, ex, forms });
// Any other word (adjective, adverb, country, question word ...)
DE.W = (w, en, ex) => ({ t: 'w', w, en, ex });
// Phrase / Redemittel
DE.P = (w, en, ex) => ({ t: 'p', w, en, ex });

DE.ART = { m: 'der', n: 'das', f: 'die', pl: 'die' };
DE.nounDe = (v) => (v.g ? DE.ART[v.g] + ' ' : '') + v.w;
DE.pluralDe = (v) => (v.pl === undefined ? '' : v.pl === '' ? '(no plural)' : 'die ' + v.pl);

DE.addLesson = (l) => {
  DE.lessons[l.id] = l;
  if (!DE.order.includes(l.id)) DE.order.push(l.id);
};
