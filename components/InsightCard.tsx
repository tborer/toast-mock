interface Metric {
  id: string;
  type: string;
  metric: string;
  insight: string;
  recommendation: string;
  actionText: string;
  saasTieIn: string;
  delta: string;
  deltaDirection: string;
}

interface Props {
  metric: Metric;
}

export default function InsightCard({ metric }: Props) {
  const isRisk = metric.type === "Risk";

  const typeStyles = isRisk
    ? {
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
        accentBar: "bg-amber-500",
      }
    : {
        badge: "bg-sky-50 text-sky-700 border-sky-200",
        dot: "bg-sky-500",
        accentBar: "bg-sky-500",
      };

  return (
    <div className="group bg-white rounded-xl shadow-card border border-ink-100 hover:border-ink-200 transition-colors overflow-hidden flex flex-col">
      {/* Thin accent bar at top */}
      <div className={`h-0.5 ${typeStyles.accentBar}`} />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className={`w-2 h-2 rounded-full ${typeStyles.dot} shrink-0`} />
            <span
              className={`text-2xs font-semibold px-2 py-0.5 rounded border uppercase tracking-wider ${typeStyles.badge}`}
            >
              {metric.type}
            </span>
          </div>
          <span className="text-2xs font-semibold text-ink-500 tnum bg-ink-50 border border-ink-100 px-2 py-0.5 rounded">
            {metric.delta}
          </span>
        </div>

        {/* Metric title */}
        <div>
          <h3 className="text-base font-semibold text-ink-900 tracking-tightish">
            {metric.metric}
          </h3>
        </div>

        {/* Insight */}
        <div className="space-y-3">
          <div>
            <p className="text-2xs font-semibold text-ink-400 uppercase tracking-[0.08em] mb-1.5">
              Signal
            </p>
            <p className="text-sm text-ink-700 leading-relaxed">
              {metric.insight}
            </p>
          </div>

          {/* Recommendation */}
          <div className="bg-ink-50 border border-ink-100 rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg
                className="w-3 h-3 text-toast-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 01.894.553l1.382 2.764 3.051.443a1 1 0 01.554 1.706l-2.207 2.151.521 3.038a1 1 0 01-1.451 1.054L10 12.347l-2.744 1.362a1 1 0 01-1.451-1.054l.521-3.038-2.207-2.151a1 1 0 01.554-1.706l3.051-.443L9.106 2.553A1 1 0 0110 2z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-2xs font-semibold text-ink-600 uppercase tracking-[0.08em]">
                AI Recommendation
              </p>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              {metric.recommendation}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-ink-100">
          <div className="flex items-center gap-1.5 text-2xs text-ink-500">
            <span>via</span>
            <span className="font-semibold text-ink-700">{metric.saasTieIn}</span>
          </div>
          <button className="text-xs font-semibold text-white bg-ink-900 hover:bg-toast-500 px-3 py-1.5 rounded-md transition-colors">
            {metric.actionText} →
          </button>
        </div>
      </div>
    </div>
  );
}
