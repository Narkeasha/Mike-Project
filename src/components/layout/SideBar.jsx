import React from "react";

function Sidebar({ activePage, setActivePage, PAGES }) {
  return (
    <aside className="hidden md:flex md:flex-col w-72 max-w-xs bg-slate-900 text-slate-50">
      <div className="p-6">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Megaplan Compliance
        </h1>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Interactive platform for 2025 Building Regulations
        </p>
      </div>

      {/* Navigation only – no role switcher here */}
      <nav className="mt-4 flex-1 px-3 space-y-1 text-sm">
        <NavItem
          label="Overview"
          active={activePage === PAGES.HOME}
          onClick={() => setActivePage(PAGES.HOME)}
        />
        <NavItem
          label="About Megaplan"
          active={activePage === PAGES.ABOUT}
          onClick={() => setActivePage(PAGES.ABOUT)}
        />
        <NavItem
          label="FAQs"
          active={activePage === PAGES.FAQS}
          onClick={() => setActivePage(PAGES.FAQS)}
        />
        <NavItem
          label="Guided Q&A Wizard"
          active={activePage === PAGES.WIZARD}
          onClick={() => setActivePage(PAGES.WIZARD)}
        />
        <NavItem
          label="Compliance Document Builder"
          active={activePage === PAGES.DOCUMENTS}
          onClick={() => setActivePage(PAGES.DOCUMENTS)}
        />
        <NavItem
          label="User Dashboard"
          active={activePage === PAGES.DASHBOARD}
          onClick={() => setActivePage(PAGES.DASHBOARD)}
        />
        <NavItem
          label="Dispute Prevention Navigator"
          active={activePage === PAGES.DISPUTES}
          onClick={() => setActivePage(PAGES.DISPUTES)}
        />
      </nav>

      <div className="p-4 text-[11px] text-slate-300 border-t border-slate-800/60">
        <p>Prototype front-end (React + Tailwind).</p>
        <p>AI &amp; backend logic will be connected via APIs.</p>
      </div>
    </aside>
  );
}

function NavItem({ label, active, onClick }) {
  const base =
    "w-full flex items-center justify-between rounded-md px-3 py-2 text-left text-sm transition";
  const activeClasses =
    "bg-slate-100 text-slate-900 border border-slate-300";
  const inactiveClasses = "text-slate-100 hover:bg-slate-800/80";

  return (
    <button
      onClick={onClick}
      className={`${base} ${active ? activeClasses : inactiveClasses}`}
    >
      <span>{label}</span>
      {active && <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />}
    </button>
  );
}

export default Sidebar;
