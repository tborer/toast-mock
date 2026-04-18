interface Props {
  label: string;
  value: string;
  change: string;
  up: boolean;
  isLast?: boolean;
}

export default function KpiCard({ label, value, change, up, isLast }: Props) {
  return (
    <div
      className={`p-5 ${
        !isLast ? "border-r border-ink-100" : ""
      } border-b md:border-b-0 border-ink-100`}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-2xs font-semibold text-ink-500 uppercase tracking-[0.08em]">
          {label}
        </p>
        <span
          className={`text-2xs font-bold tnum px-1.5 py-0.5 rounded ${
            up
              ? "text-emerald-700 bg-emerald-50"
              : "text-red-700 bg-red-50"
          }`}
        >
          {up ? "▲" : "▼"} {change}
        </span>
      </div>
      <p className="text-2xl font-semibold text-ink-900 tnum tracking-tightish">
        {value}
      </p>
      {/* Mini sparkline */}
      <svg className="mt-3 w-full h-8" viewBox="0 0 100 24" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke={up ? "#10b981" : "#ef4444"}
          strokeWidth="1.5"
          points={
            up
              ? "0,18 10,16 20,14 30,15 40,12 50,10 60,11 70,8 80,9 90,5 100,4"
              : "0,6 10,8 20,10 30,9 40,12 50,14 60,13 70,16 80,15 90,19 100,20"
          }
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          fill={up ? "rgba(16, 185, 129, 0.06)" : "rgba(239, 68, 68, 0.06)"}
          stroke="none"
          points={
            up
              ? "0,18 10,16 20,14 30,15 40,12 50,10 60,11 70,8 80,9 90,5 100,4 100,24 0,24"
              : "0,6 10,8 20,10 30,9 40,12 50,14 60,13 70,16 80,15 90,19 100,20 100,24 0,24"
          }
        />
      </svg>
    </div>
  );
}
