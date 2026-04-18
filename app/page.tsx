import { mockInsights, activationSteps, kpiSummary } from "@/lib/data";
import Sidebar from "@/components/Sidebar";
import HealthScoreRing from "@/components/HealthScoreRing";
import InsightCard from "@/components/InsightCard";
import KpiCard from "@/components/KpiCard";
import ActivationTracker from "@/components/ActivationTracker";
import AiBanner from "@/components/AiBanner";

export default function Dashboard() {
  const { restaurantName, period, healthScore, metrics } = mockInsights;

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-auto">
        {/* Top bar */}
        <header className="bg-white border-b border-ink-100 px-8 py-5 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-ink-900 tracking-tightish">
                  {restaurantName}
                </h1>
                <span className="text-2xs font-medium text-ink-400 uppercase tracking-wider px-2 py-0.5 bg-ink-50 border border-ink-100 rounded">
                  Operator
                </span>
              </div>
              <p className="text-xs text-ink-500 mt-0.5 tnum">{period}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-ink-50 border border-ink-100 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-ink-600 tnum">
                Live · synced 2m ago
              </span>
            </div>
            <button className="text-xs font-medium text-ink-600 hover:text-ink-900 px-3 py-1.5 border border-ink-200 rounded-md hover:bg-white transition-colors">
              Export
            </button>
            <button className="text-xs font-semibold text-white bg-ink-900 hover:bg-ink-800 px-3 py-1.5 rounded-md transition-colors">
              + New Report
            </button>
          </div>
        </header>

        <div className="flex-1 px-8 py-6">
          {/* Page title */}
          <div className="mb-6 flex items-end justify-between flex-wrap gap-2">
            <div>
              <p className="text-2xs font-semibold text-ink-400 uppercase tracking-[0.08em] mb-1">
                Intelligence Overview
              </p>
              <h2 className="text-2xl font-semibold text-ink-900 tracking-tightish">
                Operational Performance
              </h2>
            </div>
            <nav className="flex items-center gap-1 p-0.5 bg-white border border-ink-100 rounded-md shadow-card">
              {["7d", "14d", "30d", "90d"].map((p) => (
                <button
                  key={p}
                  className={`px-3 py-1 text-xs font-medium rounded tnum transition-colors ${
                    p === "14d"
                      ? "bg-ink-900 text-white"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>
          </div>

          {/* KPI strip — financial dashboard style */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white border border-ink-100 rounded-xl shadow-card overflow-hidden mb-6">
            {kpiSummary.map((kpi, idx) => (
              <KpiCard key={kpi.label} {...kpi} isLast={idx === kpiSummary.length - 1} />
            ))}
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left column */}
            <div className="xl:col-span-3 flex flex-col gap-6">
              {/* Health score panel */}
              <section className="bg-white rounded-xl shadow-card border border-ink-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-ink-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">
                      Restaurant Health Score
                    </h3>
                    <p className="text-xs text-ink-500 mt-0.5">
                      Composite of 12 operational signals
                    </p>
                  </div>
                  <button className="text-xs font-medium text-toast-600 hover:text-toast-700">
                    Methodology →
                  </button>
                </div>
                <div className="p-6 flex flex-col lg:flex-row items-start gap-8">
                  <HealthScoreRing score={healthScore} />
                  <div className="flex-1 w-full">
                    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-ink-100">
                      <div>
                        <p className="text-2xs font-semibold text-ink-400 uppercase tracking-wider">
                          Active Risks
                        </p>
                        <p className="text-2xl font-semibold text-amber-600 tnum mt-1">2</p>
                        <p className="text-xs text-ink-500 mt-0.5">Labor · Waste</p>
                      </div>
                      <div>
                        <p className="text-2xs font-semibold text-ink-400 uppercase tracking-wider">
                          Opportunities
                        </p>
                        <p className="text-2xl font-semibold text-sky-600 tnum mt-1">2</p>
                        <p className="text-xs text-ink-500 mt-0.5">Turn · Upsell</p>
                      </div>
                      <div>
                        <p className="text-2xs font-semibold text-ink-400 uppercase tracking-wider">
                          Est. Annual Impact
                        </p>
                        <p className="text-2xl font-semibold text-ink-900 tnum mt-1">
                          $112K
                        </p>
                        <p className="text-xs text-emerald-600 mt-0.5">
                          +recoverable
                        </p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-ink-600">
                          Performance vs. regional benchmark
                        </span>
                        <span className="text-xs font-semibold text-emerald-600 tnum">
                          +12pts
                        </span>
                      </div>
                      <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden flex">
                        <div className="h-full bg-emerald-500" style={{ width: "88%" }} />
                      </div>
                      <div className="flex justify-between mt-1.5 text-2xs text-ink-400 tnum">
                        <span>0</span>
                        <span>Regional avg · 76</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <AiBanner />

              {/* Insight cards */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">
                      AI-Generated Insights
                    </h3>
                    <p className="text-xs text-ink-500 mt-0.5">
                      Ranked by estimated revenue impact
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-ink-500 tnum">{metrics.length} insights</span>
                    <span className="text-ink-300">·</span>
                    <button className="text-toast-600 hover:text-toast-700 font-medium">
                      Filter
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <InsightCard key={metric.id} metric={metric} />
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="xl:col-span-1">
              <ActivationTracker steps={activationSteps} />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-ink-100 flex items-center justify-between text-2xs text-ink-400">
            <p>
              © 2026 Toast Insights · Data refreshed every 15 minutes
            </p>
            <div className="flex items-center gap-4">
              <span>Privacy</span>
              <span>Terms</span>
              <span>API Docs</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
