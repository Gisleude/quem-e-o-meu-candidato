"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const TOOLTIP_WIDTH = 224;
const MARGIN = 8;

export function Term({
  children,
  def,
}: {
  children: React.ReactNode;
  def: string;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function updatePosition() {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const left = Math.max(
      MARGIN,
      Math.min(
        rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2,
        window.innerWidth - TOOLTIP_WIDTH - MARGIN
      )
    );
    setPos({ top: rect.bottom + 6, left });
  }

  function show() {
    updatePosition();
    setOpen(true);
  }

  function hide() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const reposition = () => updatePosition();
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    function onDocClick(e: MouseEvent) {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        hide();
      }
    }
    document.addEventListener("click", onDocClick);
    return () => {
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
      document.removeEventListener("click", onDocClick);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={(e) => {
          e.stopPropagation();
          if (open) {
            hide();
          } else {
            show();
          }
        }}
        className="cursor-help underline decoration-dotted decoration-slate-400 underline-offset-2 focus:outline-none dark:decoration-slate-500"
      >
        {children}
      </button>
      {open && pos
        ? createPortal(
            <span
              role="tooltip"
              style={{ top: pos.top, left: pos.left, width: TOOLTIP_WIDTH }}
              className="pointer-events-none fixed z-100 rounded-lg bg-slate-800 px-3 py-2 text-xs font-normal normal-case leading-snug text-white shadow-lg dark:bg-slate-700"
            >
              {def}
            </span>,
            document.body
          )
        : null}
    </>
  );
}
