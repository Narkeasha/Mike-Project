import React from "react";

function DashboardPage({ currentRole }) {
  const items = [
    {
      id: "BR-2025-001",
      name: "High Street Apartments Phase 2",
      status: "Draft",
      lastUpdated: "2025-11-10",
      parts: ["B", "L"],
    },
    {
      id: "BR-2025-002",
      name: "Oakfield Housing Development",
      status: "Submitted",
      lastUpdated: "2025-11-05",
      parts: ["B", "F", "O"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          User Dashboard
        </h2>
        <p className="mt-1 text-sm text-slate-700 leading-relaxed">
          View saved forms, drafts and generated compliance documents. In the
          full solution this page is secured with authentication and optional
          two-factor verification.
        </p>
        <p className="mt-2 text-[11px] text-slate-500">
          Current role:{" "}
          <span className="font-medium text-slate-900">{currentRole}</span>.
          Guests would see example data; contractors see their own projects;
          admins see organisation-wide activity.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs md:text-sm">
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-3 pb-2 border-b border-slate-200 text-slate-600 font-semibold text-[11px] md:text-xs">
          <span>Project</span>
          <span>Status</span>
          <span>Regulation parts</span>
          <span>Last updated</span>
        </div>
        <div className="divide-y divide-slate-200">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-3 py-3 items-center"
            >
              <div>
                <p className="font-medium text-slate-900 text-xs md:text-sm">
                  {item.name}
                </p>
                <p className="text-[11px] text-slate-500">{item.id}</p>
              </div>
              <StatusBadge status={item.status} />
              <span className="text-slate-700 text-xs md:text-sm">
                {item.parts.join(", ")}
              </span>
              <span className="text-slate-600 text-xs md:text-sm">
                {item.lastUpdated}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        When connected to a database (for example MongoDB Atlas), each row will
        represent a stored form with audit logs, downloadable documents and
        version history.
      </p>
    </div>
  );
}

function StatusBadge({ status }) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px]";
  const colorClasses =
    status === "Submitted"
      ? "bg-slate-900 text-white border-slate-900"
      : "bg-slate-100 text-slate-800 border-slate-300";

  return <span className={`${base} ${colorClasses}`}>{status}</span>;
}

export default DashboardPage;
