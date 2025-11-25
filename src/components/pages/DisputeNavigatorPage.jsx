import React from "react";
import AIChatPanel from "../shared/AIChatPanel";

function DisputeNavigatorPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Dispute Prevention Navigator
        </h2>
        <p className="mt-1 text-sm text-slate-700 leading-relaxed">
          Capture early warnings, responsibilities and contract wording to
          reduce the risk of disputes under the Building Safety Act 2022.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-5 text-xs md:text-sm">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
          <h3 className="font-semibold text-sm text-slate-900">
            Key legal focus areas
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>
              Clear documentation of duty holder roles and lines of
              responsibility.
            </li>
            <li>
              Evidence that design decisions considered updated 2025 guidance.
            </li>
            <li>
              Records of risk decisions, especially around fire, ventilation,
              energy and overheating.
            </li>
            <li>
              Client communications that confirm scope, assumptions and
              limitations.
            </li>
          </ul>

          <p className="text-[11px] text-slate-500 leading-relaxed">
            This content is designed to be curated by the legal analyst so that
            AI guidance remains aligned with current interpretation of the
            Building Safety Act 2022.
          </p>
        </div>

        <AIChatPanel
          title="Ask a question about disputes (mock)"
          context="User is exploring dispute prevention topics. In production, the AI would answer based on stored legal templates and guidance."
        />
      </div>
    </div>
  );
}

export default DisputeNavigatorPage;
