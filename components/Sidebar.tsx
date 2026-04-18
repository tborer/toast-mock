export default function Sidebar() {
  const navItems = [
    { icon: "⊞", label: "Dashboard", active: true },
    { icon: "📊", label: "Reports", active: false },
    { icon: "📅", label: "Scheduling", active: false },
    { icon: "🧾", label: "Menu", active: false },
    { icon: "📦", label: "Inventory", active: false },
    { icon: "⚙️", label: "Settings", active: false },
  ];

  return (
    <aside className="w-56 bg-slate-900 min-h-screen flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-orange-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="text-white font-semibold text-sm">
            Toast Insights
          </span>
        </div>
        <p className="text-slate-400 text-xs mt-1 ml-9">AI-Powered Intelligence</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-colors ${
              item.active
                ? "bg-orange-500 text-white font-medium"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <span className="text-base leading-none">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-slate-600 flex items-center justify-center">
            <span className="text-slate-300 text-xs font-medium">GF</span>
          </div>
          <div>
            <p className="text-slate-300 text-xs font-medium">Golden Fork</p>
            <p className="text-slate-500 text-xs">Owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
