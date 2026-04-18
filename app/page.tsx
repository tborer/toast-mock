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

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-auto">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-semibold text-slate-800">
              {restaurantName}
            </h1>
            <p className="text-sm text-slate-500">{period}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">Last synced: 2 min ago</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </header>

        <div className="flex-1 p-8 grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Left column: KPIs + Insights */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            {/* Health score + KPIs */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <HealthScoreRing score={healthScore} />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-slate-800 mb-1">
                    Restaurant Health Score
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">
                    Your operation is performing well with{" "}
                    <span className="text-amber-600 font-medium">
                      2 active risks
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 font-medium">
                      2 growth opportunities
                    </span>{" "}
                    identified by AI analysis.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {kpiSummary.map((kpi) => (
                      <KpiCard key={kpi.label} {...kpi} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* AI status banner */}
            <AiBanner />

            {/* Insight cards */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-slate-700 uppercase tracking-wide text-xs">
                  AI-Generated Insights
                </h2>
                <span className="text-xs text-slate-400">
                  {metrics.length} insights this week
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <InsightCard key={metric.id} metric={metric} />
                ))}
              </div>
            </section>
          </div>

          {/* Right column: Activation tracker */}
          <div className="xl:col-span-1">
            <ActivationTracker steps={activationSteps} />
          </div>
        </div>
      </main>
    </div>
  );
}
