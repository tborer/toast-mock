const navItems = [
  { label: "Dashboard", active: true, group: "Overview" },
  { label: "Reports", active: false, group: "Overview" },
  { label: "Benchmarks", active: false, group: "Overview" },
  { label: "Scheduling", active: false, group: "Operations" },
  { label: "Menu", active: false, group: "Operations" },
  { label: "Inventory", active: false, group: "Operations" },
  { label: "Integrations", active: false, group: "Admin" },
  { label: "Settings", active: false, group: "Admin" },
];

const Dot = ({ active }: { active: boolean }) => (
  <span
    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
      active ? "bg-toast-500" : "bg-transparent border border-ink-300"
    }`}
  />
);

export default function Sidebar() {
  const groups = Array.from(new Set(navItems.map((i) => i.group)));

  return (
    <aside className="w-60 bg-white border-r border-ink-100 min-h-screen flex flex-col shrink-0">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-ink-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-ink-900 flex items-center justify-center shadow-card">
            <span className="text-toast-500 text-base font-bold leading-none">T</span>
          </div>
          <div>
            <p className="text-ink-900 font-semibold text-sm tracking-tightish leading-none">
              Toast Insights
            </p>
            <p className="text-ink-400 text-2xs mt-1 leading-none">
              Intelligence · v2.4
            </p>
          </div>
        </div>
      </div>

      {/* Org switcher */}
      <div className="px-4 py-3 border-b border-ink-100">
        <button className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-ink-50 hover:bg-ink-100 border border-ink-100 rounded-md transition-colors">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-toast-500 to-toast-700 flex items-center justify-center shrink-0">
              <span className="text-white text-2xs font-bold">GF</span>
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs font-semibold text-ink-900 truncate leading-none">
                The Golden Fork
              </p>
              <p className="text-2xs text-ink-500 mt-0.5 leading-none">
                3 locations
              </p>
            </div>
          </div>
          <span className="text-ink-400 text-xs shrink-0">⌄</span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        {groups.map((group) => (
          <div key={group} className="mb-4">
            <p className="text-2xs font-semibold text-ink-400 uppercase tracking-[0.08em] px-3 mb-1.5">
              {group}
            </p>
            {navItems
              .filter((i) => i.group === group)
              .map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors ${
                    item.active
                      ? "bg-ink-900 text-white font-medium"
                      : "text-ink-600 hover:bg-ink-50 hover:text-ink-900"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Dot active={item.active} />
                    {item.label}
                  </span>
                  {item.active && (
                    <span className="text-2xs font-bold text-toast-500 tnum">●</span>
                  )}
                </button>
              ))}
          </div>
        ))}
      </nav>

      {/* Footer user card */}
      <div className="border-t border-ink-100 p-3">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-ink-50 cursor-pointer transition-colors">
          <div className="w-7 h-7 rounded-full bg-ink-200 flex items-center justify-center shrink-0">
            <span className="text-ink-700 text-2xs font-semibold">AM</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-ink-900 truncate leading-tight">
              Alex Morales
            </p>
            <p className="text-2xs text-ink-500 truncate leading-tight">
              alex@goldenfork.com
            </p>
          </div>
          <span className="text-ink-400 text-xs">⋯</span>
        </div>
      </div>
    </aside>
  );
}
