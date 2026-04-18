export default function AiBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
          <span className="text-white text-base">🤖</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">
            Toast Intelligence Engine — Active
          </p>
          <p className="text-orange-100 text-xs">
            Analyzing 14 days of POS data · Next refresh in 23 min
          </p>
        </div>
      </div>
      <button className="bg-white text-orange-500 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors shrink-0">
        View AI Log
      </button>
    </div>
  );
}
