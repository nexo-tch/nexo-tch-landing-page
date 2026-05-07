/**
 * Branded loading state — shown as Suspense fallback during route transitions.
 * Kept minimal on purpose: a thin progress bar + a breathing brand mark.
 * Both respect prefers-reduced-motion (handled globally in globals.css).
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Cargando"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg"
    >
      {/* Top progress bar: indeterminate shimmer reading left-to-right */}
      <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-border-soft/40">
        <span
          aria-hidden="true"
          className="block h-full w-1/3 animate-[loading-slide_1.2s_ease-in-out_infinite] bg-accent"
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Brand mark: the same N monogram from /icon.svg, pulsing breath. */}
        <svg
          viewBox="0 0 512 512"
          aria-hidden="true"
          className="h-10 w-10 animate-[brand-breath_1.8s_ease-in-out_infinite] text-fg"
        >
          <g fill="currentColor">
            <rect x="126" y="106" width="68" height="300" />
            <rect x="318" y="106" width="68" height="300" />
            <polygon points="194,106 262,106 386,406 318,406" />
          </g>
        </svg>

        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-subtle">
          Cargando
        </p>
      </div>

      {/* Locally-scoped keyframes so we don't bloat globals.css. */}
      <style>
        {`
          @keyframes loading-slide {
            0%   { transform: translateX(-100%); }
            50%  { transform: translateX(150%); }
            100% { transform: translateX(300%); }
          }
          @keyframes brand-breath {
            0%, 100% { opacity: 0.55; transform: scale(0.96); }
            50%      { opacity: 1;    transform: scale(1.04); }
          }
          @media (prefers-reduced-motion: reduce) {
            [class*="animate-"] { animation: none !important; }
          }
        `}
      </style>
    </div>
  );
}
