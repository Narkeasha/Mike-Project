import React, { useState } from "react";

function DocumentBuilderPage({ currentRole }) {
  const [form, setForm] = useState({
    email: "",
    scope: "",
    keyRisks: "",
    additionalClauses: "",
  });

  const [preview, setPreview] = useState("");

  const buildPreview = () => {
    const text = `
Compliance summary

Prepared for: ${form.email || "Recipient not specified"}
Role perspective: ${currentRole}

Project scope:
${form.scope || "Not yet described."}

Key risk areas:
${form.keyRisks || "No specific risks listed – requires further input."}

Dispute prevention / contract clauses:
${form.additionalClauses || "To be completed jointly by the legal and project team."}
    `.trim();

    setPreview(text);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Compliance Document Builder
        </h2>
        <p className="mt-1 text-sm text-slate-700 leading-relaxed">
          Collect core information required to generate a court-ready compliance
          summary that can be emailed to the project team.
        </p>
      </header>

      <div className="grid lg:grid-cols-[3fr,2fr] gap-6 items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs md:text-sm space-y-4">
          <LabeledInput
            label="Recipient email (for document delivery)"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="design.team@project.co.uk"
          />

          <div>
            <p className="text-slate-800 mb-1 text-xs md:text-sm">
              Project scope / description
            </p>
            <textarea
              className="w-full h-24 rounded-xl bg-slate-50 border border-slate-300 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Describe the project, location and main constraints…"
              value={form.scope}
              onChange={(e) => setForm({ ...form, scope: e.target.value })}
            />
          </div>

          <div>
            <p className="text-slate-800 mb-1 text-xs md:text-sm">
              Known risks or points to highlight
            </p>
            <textarea
              className="w-full h-24 rounded-xl bg-slate-50 border border-slate-300 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Façade materials, sprinklers, escape strategy, ventilation concept…"
              value={form.keyRisks}
              onChange={(e) =>
                setForm({ ...form, keyRisks: e.target.value })
              }
            />
          </div>

          <div>
            <p className="text-slate-800 mb-1 text-xs md:text-sm">
              Dispute prevention / contract wording
            </p>
            <textarea
              className="w-full h-24 rounded-xl bg-slate-50 border border-slate-300 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Notes for duty-holder summaries, limitations of liability, dispute-prevention clauses…"
              value={form.additionalClauses}
              onChange={(e) =>
                setForm({ ...form, additionalClauses: e.target.value })
              }
            />
          </div>

          <button
            onClick={buildPreview}
            className="mt-2 inline-flex items-center rounded-md bg-slate-900 px-4 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-slate-800"
          >
            Build draft summary (front-end only)
          </button>

          <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
            In deployment this button would call a secure backend endpoint which
            generates a PDF/Word document, emails it to the recipient and stores
            an audit copy in the user dashboard.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs md:text-sm">
          <h3 className="font-semibold mb-2 text-sm text-slate-900">
            Document preview
          </h3>
          <div className="h-72 overflow-y-auto whitespace-pre-wrap rounded-lg bg-slate-50 p-3 border border-slate-200 text-slate-900 text-xs md:text-sm">
            {preview ? (
              preview
            ) : (
              <p className="text-slate-500">
                Fill in the form and press{" "}
                <span className="font-semibold">Build draft summary</span> to
                view generated text here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LabeledInput({ label, ...props }) {
  return (
    <label className="block text-xs md:text-sm space-y-1">
      <span className="text-slate-800">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
      />
    </label>
  );
}

export default DocumentBuilderPage;
