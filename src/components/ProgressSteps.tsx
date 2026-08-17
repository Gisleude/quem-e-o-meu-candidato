import { THEMES } from "@/data/themes";

export function ProgressSteps({ currentIndex }: { currentIndex: number }) {
  const total = THEMES.length;
  const percent = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Tema {currentIndex + 1} de {total}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {THEMES[currentIndex].label}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
