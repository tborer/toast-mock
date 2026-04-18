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
        badge: "bg-amber-100 text-amber-700 border border-amber-200",
        accent: "border-l-amber-400",
        icon: "⚠️",
        deltaColor: "text-amber-700 bg-amber-50",
      }
    : {
        badge: "bg-blue-100 text-blue-700 border border-blue-200",
        accent: "border-l-blue-400",
        icon: "💡",
        deltaColor: "text-blue-700 bg-blue-50",
      };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-100 border-l-4 ${typeStyles.accent} p-5 flex flex-col gap-4`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{typeStyles.icon}</span>
          <div>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeStyles.badge}`}
            >
              {metric.type}
            </span>
            <h3 className="text-sm font-semibold text-slate-800 mt-1">
              {metric.metric}
            </h3>
          </div>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-lg shrink-0 ${typeStyles.deltaColor}`}
        >
          {metric.delta}
        </span>
      </div>

      {/* Insight */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
          Data Insight
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{metric.insight}</p>
      </div>

      {/* Recommendation */}
      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
          AI Recommendation
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          {metric.recommendation}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-slate-400">
          via{" "}
          <span className="font-medium text-orange-500">{metric.saasTieIn}</span>
        </span>
        <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
          {metric.actionText} →
        </button>
      </div>
    </div>
  );
}
