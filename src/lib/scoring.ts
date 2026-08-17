import type { Candidate, ThemeKey } from "@/data/candidates";
import type { ThemeCard } from "@/data/themeCards";

// Per theme, the ids of the cards the user selected (a card may represent
// several candidates who share that idea).
export type Selections = Partial<Record<ThemeKey, string[]>>;

export interface CandidateResult {
  candidate: Candidate;
  points: number;
  percent: number;
}

export function computeResults(
  candidates: Candidate[],
  themeCards: Record<ThemeKey, ThemeCard[]>,
  selections: Selections
): CandidateResult[] {
  const answeredThemes = Object.values(selections).filter(
    (ids) => ids && ids.length > 0
  ).length;

  const results = candidates.map((candidate) => {
    let points = 0;
    for (const [themeKey, cardIds] of Object.entries(selections) as [
      ThemeKey,
      string[] | undefined
    ][]) {
      if (!cardIds || cardIds.length === 0) continue;
      const cards = themeCards[themeKey];
      const matched = cardIds.some((id) =>
        cards.find((c) => c.id === id)?.candidatos.includes(candidate.slug)
      );
      if (matched) points += 1;
    }
    const percent = answeredThemes > 0 ? (points / answeredThemes) * 100 : 0;
    return { candidate, points, percent };
  });

  return results.sort((a, b) => b.points - a.points);
}

// Deterministic per-session shuffle so card order doesn't leak identity
// patterns across themes, but stays stable while navigating back and forth.
export function seededShuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
