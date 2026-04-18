export default function AiBanner() {
  return (
    <div className="relative rounded-xl border border-ink-100 bg-white shadow-card overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ink-900 to-ink-700 flex items-center justify-center shrink-0 shadow-card">
            <svg
              className="w-5 h-5 text-toast-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1a1 1 0 011 1v1.07A7.002 7.002 0 0116.93 9H18a1 1 0 110 2h-1.07A7.002 7.002 0 0111 16.93V18a1 1 0 11-2 0v-1.07A7.002 7.002 0 013.07 11H2a1 1 0 110-2h1.07A7.002 7.002 0 019 3.07V2a1 1 0 011-1zm0 4a5 5 0 100 10 5 5 0 000-10zm0 3a2 2 0 100 4 2 2 0 000-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <p className="text-sm font-semibold text-ink-900 tracking-tightish">
                Toast Intelligence Engine
              </p>
              <span className="text-2xs font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded uppercase tracking-wider">
                Live
              </span>
            </div>
            <p className="text-xs text-ink-500 tnum">
              Analyzed 14 days · 42,180 transactions · Next refresh in 23m
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-ink-600 hover:text-ink-900 px-3 py-1.5 border border-ink-200 rounded-md hover:bg-ink-50 transition-colors">
            View AI Log
          </button>
          <button className="text-xs font-semibold text-white bg-ink-900 hover:bg-ink-800 px-3 py-1.5 rounded-md transition-colors">
            Configure Models
          </button>
        </div>
      </div>
    </div>
  );
}
