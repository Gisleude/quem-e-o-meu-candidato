"use client";

import { useState } from "react";
import { CANDIDATES } from "@/data/candidates";
import { THEME_CARDS } from "@/data/themeCards";
import { THEMES, MAX_SELECTIONS_PER_THEME } from "@/data/themes";
import { computeResults, type Selections } from "@/lib/scoring";
import { IntroScreen } from "./IntroScreen";
import { ThemeStep } from "./ThemeStep";
import { ResultsScreen } from "./ResultsScreen";

type Stage = "intro" | "quiz" | "results";

export function QuizApp() {
  const [stage, setStage] = useState<Stage>("intro");
  const [themeIndex, setThemeIndex] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [seed] = useState(() => Math.floor(Math.random() * 1_000_000));

  const currentTheme = THEMES[themeIndex];
  const currentSelection = selections[currentTheme?.key] ?? [];

  function toggle(cardId: string) {
    setSelections((prev) => {
      const key = currentTheme.key;
      const list = prev[key] ?? [];
      let next: string[];
      if (list.includes(cardId)) {
        next = list.filter((id) => id !== cardId);
      } else {
        if (list.length >= MAX_SELECTIONS_PER_THEME) return prev;
        next = [...list, cardId];
      }
      return { ...prev, [key]: next };
    });
  }

  function goNext() {
    if (themeIndex < THEMES.length - 1) {
      setThemeIndex((i) => i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStage("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goBack() {
    if (themeIndex > 0) {
      setThemeIndex((i) => i - 1);
    } else {
      setStage("intro");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setSelections({});
    setThemeIndex(0);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (stage === "intro") {
    return (
      <IntroScreen
        onStart={() => {
          setStage("quiz");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  if (stage === "quiz") {
    return (
      <ThemeStep
        theme={currentTheme}
        themeIndex={themeIndex}
        selected={currentSelection}
        seed={seed}
        onToggle={toggle}
        onNext={goNext}
        onBack={goBack}
        isFirst={themeIndex === 0}
        isLast={themeIndex === THEMES.length - 1}
      />
    );
  }

  const results = computeResults(CANDIDATES, THEME_CARDS, selections);
  const answeredThemes = Object.values(selections).filter(
    (s) => s && s.length > 0
  ).length;

  return (
    <ResultsScreen
      results={results}
      answeredThemes={answeredThemes}
      onRestart={restart}
    />
  );
}
