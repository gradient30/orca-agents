import { useEffect, useRef, useState } from "react";
import { ExternalLink, ScrollText } from "lucide-react";
import { cn } from "@/lib/cn";
import { LATEST_RELEASE, RELEASES, RELEASES_INDEX_URL } from "@/lib/docs/releases";

export function UpdateEntry() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          "flex h-11 items-center gap-1.5 rounded-md border px-2.5 text-xs",
          open
            ? "border-border-strong bg-bg-subtle text-fg"
            : "border-border bg-bg-elevated text-fg-subtle hover:text-fg",
        )}
      >
        <ScrollText className="size-3.5 shrink-0" aria-hidden />
        <span className="hidden md:inline">更新</span>
        <span className="font-mono text-accent">{LATEST_RELEASE.tag}</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="最近更新"
          className="fixed left-3 right-3 top-14 z-50 overflow-hidden rounded-lg border border-border bg-bg-elevated shadow-overlay md:absolute md:left-auto md:right-0 md:top-full md:mt-2 md:w-96"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <div className="text-sm font-medium text-fg">最近更新</div>
              <div className="mt-0.5 text-xs text-fg-subtle">官方 Notable changes 中文摘录</div>
            </div>
            <a
              href={RELEASES_INDEX_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 items-center gap-1 text-xs text-fg-subtle hover:text-fg"
            >
              全部 Release
              <ExternalLink className="size-3" aria-hidden />
            </a>
          </div>
          <ol className="max-h-[70vh] overflow-y-auto py-2">
            {RELEASES.map((rel, i) => (
              <li key={rel.tag} className={cn("px-4 py-3", i ? "border-t border-border" : "")}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-mono text-sm text-accent">{rel.tag}</span>
                  <span className="text-xs text-fg-subtle">{rel.dateLabel}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-fg text-balance">{rel.title}</div>
                <ul className="mt-2 space-y-1.5 text-sm leading-6 text-fg-muted">
                  {rel.highlights.map((h) => (
                    <li key={h} className="relative pl-3.5">
                      <span className="absolute left-0 top-2.5 size-1 rounded-full bg-accent" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={rel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex h-11 items-center gap-1 text-xs text-fg-subtle hover:text-fg"
                >
                  官方说明
                  <ExternalLink className="size-3" aria-hidden />
                </a>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
