interface Step {
  id: number;
  label: string;
  done: boolean;
  active?: boolean;
}

interface Props {
  steps: Step[];
}

export default function ActivationTracker({ steps }: Props) {
  const completedCount = steps.filter((s) => s.done).length;
  const pct = (completedCount / steps.length) * 100;

  return (
    <aside className="sticky top-24 flex flex-col gap-4">
      {/* Main activation card */}
      <div className="bg-white rounded-xl shadow-card border border-ink-100 overflow-hidden">
        <div className="px-5 py-4 bg-gradient-to-br from-ink-900 to-ink-800 text-white">
          <div className="flex items-center justify-between mb-1">
            <p className="text-2xs font-semibold uppercase tracking-[0.08em] text-toast-500">
              Onboarding
            </p>
            <span className="text-2xs font-bold tnum text-ink-300">
              {completedCount}/{steps.length}
            </span>
          </div>
          <p className="text-sm font-semibold mb-3 tracking-tightish">
            Unlock full AI intelligence
          </p>
          <div className="w-full bg-ink-700 rounded-full h-1 overflow-hidden">
            <div
              className="bg-toast-500 h-full rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-2xs text-ink-300 mt-2 tnum">
            {pct.toFixed(0)}% complete
          </p>
        </div>

        <ol className="p-5 flex flex-col gap-0">
          {steps.map((step, idx) => (
            <li key={step.id} className="flex items-start gap-3 relative pb-4 last:pb-0">
              {idx < steps.length - 1 && (
                <span
                  className={`absolute left-[11px] top-6 w-px h-full ${
                    step.done ? "bg-emerald-200" : "bg-ink-100"
                  }`}
                />
              )}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-2xs font-bold shrink-0 z-10 ${
                  step.done
                    ? "bg-emerald-500 text-white"
                    : step.active
                    ? "bg-white text-toast-600 ring-2 ring-toast-500"
                    : "bg-white text-ink-400 ring-1 ring-ink-200"
                }`}
              >
                {step.done ? "✓" : step.id}
              </div>
              <div className="pt-0.5 flex-1">
                <p
                  className={`text-xs font-medium ${
                    step.done
                      ? "line-through text-ink-400"
                      : step.active
                      ? "text-ink-900"
                      : "text-ink-500"
                  }`}
                >
                  {step.label}
                </p>
                {step.active && (
                  <p className="text-2xs text-toast-600 font-semibold mt-0.5 uppercase tracking-wider">
                    Action required
                  </p>
                )}
                {step.done && (
                  <p className="text-2xs text-emerald-600 font-medium mt-0.5 tnum">
                    Completed · 2d ago
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="border-t border-ink-100 px-5 py-4">
          <button className="w-full bg-toast-500 hover:bg-toast-600 text-white text-xs font-semibold py-2.5 rounded-md transition-colors shadow-card">
            Continue Setup →
          </button>
        </div>
      </div>

      {/* Support card */}
      <div className="bg-white rounded-xl shadow-card border border-ink-100 p-5">
        <p className="text-2xs font-semibold text-ink-400 uppercase tracking-[0.08em] mb-2">
          Need help?
        </p>
        <p className="text-sm font-semibold text-ink-900 mb-1 tracking-tightish">
          Talk to your Growth Partner
        </p>
        <p className="text-xs text-ink-500 mb-4">
          Get a white-glove walkthrough of your insights and action plan.
        </p>
        <button className="w-full text-xs font-medium text-ink-700 hover:text-ink-900 border border-ink-200 hover:border-ink-300 py-2 rounded-md transition-colors">
          Schedule Call
        </button>
      </div>
    </aside>
  );
}
