interface Props {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

export default function KpiCard({ label, value, change, up }: Props) {
  return (
    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="text-lg font-bold text-slate-800">{value}</p>
      <p
        className={`text-xs font-medium mt-0.5 ${
          up ? "text-emerald-600" : "text-red-500"
        }`}
      >
        {up ? "▲" : "▼"} {change} vs. last week
      </p>
    </div>
  );
}
