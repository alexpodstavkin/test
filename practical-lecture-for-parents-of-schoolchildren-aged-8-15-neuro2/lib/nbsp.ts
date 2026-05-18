/**
 * Russian typography: replace regular spaces after short prepositions and
 * conjunctions with non-breaking spaces, so they don't get orphaned at line
 * ends ("hanging prepositions").
 */

const SHORT_WORDS = [
  // single-letter
  'в', 'к', 'с', 'у', 'о', 'и', 'а', 'я',
  // two-letter
  'во', 'ко', 'со', 'об', 'на', 'по', 'за', 'из', 'от', 'до', 'или', 'же',
  'бы', 'не', 'ни', 'как', 'что', 'но',
  // three-letter
  'обо', 'для', 'без', 'при', 'под', 'над', 'про', 'это',
  // four-letter
  'через', 'перед', 'между', 'чтобы',
];

const NBSP = ' ';

const PATTERN = new RegExp(
  `(^|[\\s—–(«"'])(${SHORT_WORDS.join('|')})\\s+`,
  'gi',
);

export function nbsp(text: string): string {
  return text.replace(PATTERN, (_match, prefix, word) => `${prefix}${word}${NBSP}`);
}
