"use client";

import { useState } from "react";
import { RotateCcw, ChevronDown } from "lucide-react";
import type { CandidateResult } from "@/lib/scoring";
import { THEMES } from "@/data/themes";
import { RichText } from "./RichText";

function initials(name: string) {
  return name
    .replace(/^Veterinário\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ResultsScreen({
  results,
  answeredThemes,
  onRestart,
}: {
  results: CandidateResult[];
  answeredThemes: number;
  onRestart: () => void;
}) {
  const top = results[0];
  const rest = results.slice(1);
  const topTied = results.filter((r) => r.points === top.points);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Resultado com base em {answeredThemes} de {THEMES.length} temas
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {topTied.length > 1 ? "Seu resultado teve empate" : "Seu candidato mais compatível é"}
        </h1>
      </div>

      {topTied.length > 1 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {topTied.map((r) => (
            <TopCard key={r.candidate.slug} result={r} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <TopCard result={top} large />
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Ranking completo
          </h2>
          <div className="flex flex-col gap-2">
            {results.slice(topTied.length > 1 ? topTied.length : 1).map((r) => (
              <RankRow key={r.candidate.slug} result={r} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
        <p className="max-w-md text-xs leading-relaxed text-slate-400 dark:text-slate-500">
          Resultado calculado apenas a partir das propostas que você
          selecionou, comparadas aos planos de governo oficiais registrados
          no TSE. Não é uma recomendação de voto.
        </p>
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <RotateCcw size={16} />
          Refazer o quiz
        </button>
      </div>
    </div>
  );
}

function TopCard({
  result,
  large = false,
}: {
  result: CandidateResult;
  large?: boolean;
}) {
  const { candidate, points, percent } = result;
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 dark:border-indigo-900 dark:bg-indigo-950/30">
      <div className="flex items-start gap-4">
        <div
          className={`flex shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white ${
            large ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"
          }`}
        >
          {initials(candidate.nome)}
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className={`font-bold text-slate-900 dark:text-slate-50 ${
              large ? "text-2xl" : "text-lg"
            }`}
          >
            {candidate.nome}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {candidate.partido} · N&ordm; {candidate.numero}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {Math.round(percent)}%
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {points} tema{points === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <RichText text={candidate.resumoPerfil} />
      </p>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        {open ? "Ocultar propostas" : "Ver propostas completas"}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-4 space-y-3 border-t border-indigo-200 pt-4 dark:border-indigo-900">
          {THEMES.map((t) => {
            const proposal = candidate.temas[t.key];
            if (!proposal.coberto) return null;
            return (
              <div key={t.key}>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-400">
                  {t.label}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <RichText text={proposal.resumo} />
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function RankRow({ result }: { result: CandidateResult }) {
  const { candidate, points, percent } = result;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        {initials(candidate.nome)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
            {candidate.nome}
          </span>
          <span className="shrink-0 text-xs text-slate-400">
            {Math.round(percent)}% · {points} tema{points === 1 ? "" : "s"}
          </span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-slate-400 dark:bg-slate-600"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
