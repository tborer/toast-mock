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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 sticky top-24">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-sm font-semibold text-slate-800">
          Activation Progress
        </h2>
        <span className="text-xs font-bold text-orange-500">
          {completedCount}/{steps.length}
        </span>
      </div>
      <p className="text-xs text-slate-500 mb-4">
        Complete setup to unlock full AI intelligence.
      </p>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-5">
        <div
          className="bg-orange-500 h-1.5 rounded-full transition-all"
          style={{ width: `${(completedCount / steps.length) * 100}%` }}
        />
      </div>

      <ol className="flex flex-col gap-3">
        {steps.map((step, idx) => (
          <li key={step.id} className="flex items-start gap-3">
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  step.done
                    ? "bg-emerald-500 text-white"
                    : step.active
                    ? "bg-orange-500 text-white ring-4 ring-orange-100"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {step.done ? "✓" : step.id}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`w-0.5 h-4 mt-1 ${
                    step.done ? "bg-emerald-200" : "bg-slate-100"
                  }`}
                />
              )}
            </div>

            {/* Label */}
            <div className="pt-0.5">
              <p
                className={`text-sm font-medium ${
                  step.done
                    ? "line-through text-slate-400"
                    : step.active
                    ? "text-slate-800"
                    : "text-slate-500"
                }`}
              >
                {step.label}
              </p>
              {step.active && (
                <p className="text-xs text-orange-500 font-medium mt-0.5">
                  Action required →
                </p>
              )}
              {step.done && (
                <p className="text-xs text-emerald-500 font-medium mt-0.5">
                  Complete
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-500 mb-3">
          Powered by Toast Intelligence Engine
        </p>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
          Complete Setup
        </button>
      </div>
    </div>
  );
}
