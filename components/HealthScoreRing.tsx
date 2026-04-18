interface Props {
  score: number;
}

export default function HealthScoreRing({ score }: Props) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444";
  const label = score >= 80 ? "Healthy" : score >= 60 ? "Moderate" : "At Risk";

  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#EEF0F4"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-semibold text-ink-900 tnum tracking-tightish leading-none">
            {score}
          </span>
          <span className="text-2xs font-medium text-ink-400 mt-1 tnum">
            out of 100
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-2xs font-semibold text-emerald-700 uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p className="text-2xs text-ink-400 mt-2 tnum">▲ 3 pts · last 30 days</p>
    </div>
  );
}
