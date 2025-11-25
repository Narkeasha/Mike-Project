import React from "react";

function MobileHeader({
  activePage,
  setActivePage,
  PAGES,
  isAuthenticated,
  currentRole,
  onOpenAuth,
}) {
  return (
    <div className="md:hidden fixed top-0 inset-x-0 z-20 bg-white border-b border-slate-200">
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-base font-semibold tracking-tight">
            Megaplan Compliance 2025
          </h1>
          <p className="text-[11px] text-slate-500">
            Interactive Building Regulations platform
          </p>
        </div>

        {isAuthenticated ? (
          <div className="text-right max-w-[150px]">
            <p className="text-[11px] text-slate-500">Signed in as</p>
            <p className="text-[11px] font-medium text-slate-900 truncate">
              {currentRole}
            </p>
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="text-xs rounded-md bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-slate-800"
          >
            Sign in / Sign up
          </button>
        )}
      </div>

      <div className="flex overflow-x-auto pb-2 px-2 space-x-2 text-[11px] bg-slate-50 border-t border-slate-200">
        <MobileNavPill
          label="Overview"
          active={activePage === PAGES.HOME}
          onClick={() => setActivePage(PAGES.HOME)}
        />
        <MobileNavPill
          label="About"
          active={activePage === PAGES.ABOUT}
          onClick={() => setActivePage(PAGES.ABOUT)}
        />
        <MobileNavPill
          label="FAQs"
          active={activePage === PAGES.FAQS}
          onClick={() => setActivePage(PAGES.FAQS)}
        />
        <MobileNavPill
          label="Q&A Wizard"
          active={activePage === PAGES.WIZARD}
          onClick={() => setActivePage(PAGES.WIZARD)}
        />
        <MobileNavPill
          label="Document Builder"
          active={activePage === PAGES.DOCUMENTS}
          onClick={() => setActivePage(PAGES.DOCUMENTS)}
        />
        <MobileNavPill
          label="Dashboard"
          active={activePage === PAGES.DASHBOARD}
          onClick={() => setActivePage(PAGES.DASHBOARD)}
        />
        <MobileNavPill
          label="Disputes"
          active={activePage === PAGES.DISPUTES}
          onClick={() => setActivePage(PAGES.DISPUTES)}
        />
      </div>
    </div>
  );
}

function MobileNavPill({ label, active, onClick }) {
  const base = "whitespace-nowrap rounded-full px-3 py-1.5 border text-[11px]";
  const activeClasses = "bg-slate-900 text-white border-slate-900";
  const inactiveClasses = "border-slate-300 text-slate-700 bg-white";

  return (
    <button
      onClick={onClick}
      className={`${base} ${active ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
}

export default MobileHeader;
