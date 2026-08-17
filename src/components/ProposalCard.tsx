"use client";

import { Check } from "lucide-react";
import { RichText } from "./RichText";

interface ProposalCardProps {
  titulo: string;
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}

export function ProposalCard({
  titulo,
  selected,
  disabled,
  onToggle,
}: ProposalCardProps) {
  const isDisabled = disabled && !selected;

  function handleKeyDown(e: React.KeyboardEvent) {
    if (isDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  }

  return (
    <div
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-pressed={selected}
      aria-disabled={isDisabled}
      onClick={() => !isDisabled && onToggle()}
      onKeyDown={handleKeyDown}
      className={`group relative flex h-32 items-center rounded-2xl border p-4 pr-10 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
        isDisabled ? "" : "cursor-pointer"
      } ${
        selected
          ? "border-indigo-600 bg-indigo-50 shadow-md ring-1 ring-indigo-600 dark:border-indigo-500 dark:bg-indigo-950/40 dark:ring-indigo-500"
          : disabled
          ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-50 dark:border-slate-800 dark:bg-slate-900/40"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
      }`}
    >
      <h3 className="line-clamp-5 text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">
        <RichText text={titulo} />
      </h3>
      <div
        className={`absolute right-4 top-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          selected
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
        }`}
      >
        {selected && <Check size={14} strokeWidth={3} />}
      </div>
    </div>
  );
}
