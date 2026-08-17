"use client";

import { FileText, EyeOff, Scale, ArrowRight } from "lucide-react";
import { THEMES, MAX_SELECTIONS_PER_THEME } from "@/data/themes";
import { CANDIDATES } from "@/data/candidates";

export function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <span className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        Eleições presidenciais de 2026 · Ferramenta apartidária
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
        Quem é o meu candidato?
      </h1>
      <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        Descubra, tema por tema, qual candidato à Presidência mais se aproxima
        das suas prioridades — sem saber de quem é cada proposta até o
        resultado final.
      </p>

      <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3">
        <Feature
          icon={<FileText size={18} />}
          title="Fonte oficial"
          text="Propostas resumidas a partir dos planos de governo registrados no TSE."
        />
        <Feature
          icon={<EyeOff size={18} />}
          title="Sem viés"
          text="Você escolhe pelo conteúdo — o nome do candidato só aparece no final."
        />
        <Feature
          icon={<Scale size={18} />}
          title="Todo o espectro"
          text={`${CANDIDATES.length} candidatos, de diferentes partidos e orientações.`}
        />
      </div>

      <button
        onClick={onStart}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
      >
        Começar
        <ArrowRight size={18} />
      </button>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        Leva cerca de 5 minutos · {THEMES.length} temas
      </p>

      <details className="group mt-12 w-full max-w-lg text-left">
        <summary className="cursor-pointer list-none text-sm font-medium text-slate-500 underline decoration-dotted underline-offset-4 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
          Como funciona e de onde vêm os dados
        </summary>
        <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          <p>
            Em cada tema, você verá cards com propostas resumidas de forma
            neutra a partir dos planos de governo oficiais entregues ao TSE
            por cada candidatura. Nenhum card mostra o nome do candidato, e a
            ordem é embaralhada a cada tema.
          </p>
          <p>
            Você pode escolher até {MAX_SELECTIONS_PER_THEME} propostas por
            tema — as que mais fazem sentido para você. Ao final, comparamos
            suas escolhas com as
            propostas de cada candidato e mostramos o grau de compatibilidade
            com cada um.
          </p>
          <p>
            Dos 13 candidatos habilitados, 12 têm plano de governo publicado
            no TSE no momento da criação desta ferramenta e estão incluídos
            aqui. Pablo Marçal não possui plano de governo registrado até o
            momento e por isso não está incluído.
          </p>
        </div>
      </details>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
        {text}
      </p>
    </div>
  );
}
