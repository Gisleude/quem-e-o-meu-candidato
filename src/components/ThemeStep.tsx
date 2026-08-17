"use client";

import { useMemo } from "react";
import { ArrowLeft, ArrowRight, SkipForward } from "lucide-react";
import type { ThemeConfig } from "@/data/themes";
import { MAX_SELECTIONS_PER_THEME } from "@/data/themes";
import { THEME_CARDS } from "@/data/themeCards";
import { ProposalCard } from "./ProposalCard";
import { ProgressSteps } from "./ProgressSteps";
import { seededShuffle } from "@/lib/scoring";

interface ThemeStepProps {
  theme: ThemeConfig;
  themeIndex: number;
  selected: string[];
  seed: number;
  onToggle: (cardId: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function ThemeStep({
  theme,
  themeIndex,
  selected,
  seed,
  onToggle,
  onNext,
  onBack,
  isFirst,
  isLast,
}: ThemeStepProps) {
  const cards = THEME_CARDS[theme.key];

  const ordered = useMemo(
    () => seededShuffle(cards, seed + themeIndex * 7919),
    [cards, seed, themeIndex]
  );

  const atMax = selected.length >= MAX_SELECTIONS_PER_THEME;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <ProgressSteps currentIndex={themeIndex} />

      <div className="mt-8 mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
          {theme.question}
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {theme.description} Escolha até {MAX_SELECTIONS_PER_THEME}{" "}
          propostas — {selected.length}/{MAX_SELECTIONS_PER_THEME}{" "}
          selecionadas.
        </p>
      </div>

      <div className="mt-6 grid flex-1 grid-cols-1 content-start items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((card) => {
          const isSelected = selected.includes(card.id);
          return (
            <ProposalCard
              key={card.id}
              titulo={card.titulo}
              selected={isSelected}
              disabled={atMax}
              onToggle={() => onToggle(card.id)}
            />
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
        <button
          onClick={onBack}
          disabled={isFirst}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800 disabled:pointer-events-none disabled:opacity-0 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <ArrowLeft size={16} />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
        >
          {selected.length === 0 ? (
            <>
              Pular tema
              <SkipForward size={16} />
            </>
          ) : isLast ? (
            <>
              Ver resultado
              <ArrowRight size={16} />
            </>
          ) : (
            <>
              Próximo tema
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
