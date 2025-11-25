import React from "react";

function DesktopHeader({
  isAuthenticated,
  currentRole,
  onOpenAuth,
  onSignOut,
}) {
  return (
    <div className="hidden md:flex items-center justify-between px-8 py-4 border-b border-slate-200 bg-white">
      {isAuthenticated ? (
        <>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Logged in as
            </p>
            <p className="text-sm font-medium mt-1 text-slate-900">
              {currentRole}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[11px] text-slate-700">
              Prototype – AI answers will be connected via backend API
            </span>
            <button
              type="button"
              onClick={onSignOut}
              className="text-[11px] text-slate-500 hover:text-slate-700 underline"
            >
              Sign out
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="text-sm font-medium text-slate-900">
              Welcome to Megaplan Compliance
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Sign in to view role-specific tools for contractors, clients and
              administrators.
            </p>
          </div>
          <button
            onClick={onOpenAuth}
            className="rounded-md bg-slate-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
          >
            Sign in / Sign up
          </button>
        </>
      )}
    </div>
  );
}

export default DesktopHeader;
