import React, { useState } from "react";
import AIChatPanel from "../shared/AIChatPanel";

function WizardPage({ currentRole }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    projectName: "",
    projectType: "",
    storeys: "",
    parts: [],
    notes: "",
  });

  const togglePart = (part) => {
    setForm((prev) => {
      const exists = prev.parts.includes(part);
      return {
        ...prev,
        parts: exists
          ? prev.parts.filter((p) => p !== part)
          : [...prev.parts, part],
      };
    });
  };

  const nextStep = () => setStep((s) => Math.min(3, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Guided Compliance Q&amp;A
          </h2>
          <p className="mt-1 text-sm text-slate-700 leading-relaxed">
            Step-by-step walkthrough aligned with the 2025 Building Regulations
            and duty holder responsibilities.
          </p>
        </div>
        <ProgressPills step={step} />
      </header>

      <div className="grid lg:grid-cols-[3fr,2fr] gap-6 items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 text-xs md:text-sm">
          {step === 1 && (
            <>
              <h3 className="font-semibold text-sm text-slate-900">
                Step 1 – Project context
              </h3>
              <p className="text-slate-600">
                Capture key details that influence which parts of the
                regulations apply.
              </p>

              <LabeledInput
                label="Project name"
                value={form.projectName}
                onChange={(e) =>
                  setForm({ ...form, projectName: e.target.value })
                }
                placeholder="High Street Apartments Phase 2"
              />
              <LabeledInput
                label="Project type / use class"
                value={form.projectType}
                onChange={(e) =>
                  setForm({ ...form, projectType: e.target.value })
                }
                placeholder="Residential, mixed-use, student housing…"
              />
              <LabeledInput
                label="Number of storeys"
                value={form.storeys}
                onChange={(e) =>
                  setForm({ ...form, storeys: e.target.value })
                }
                placeholder="e.g. 6"
              />

              <div className="space-y-1">
                <p className="text-slate-800 font-medium">
                  Applicable 2025 Approved Documents
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "B – Fire safety",
                    "F – Ventilation",
                    "L – Energy efficiency",
                    "O – Overheating",
                  ].map((part) => {
                    const active = form.parts.includes(part);
                    return (
                      <button
                        key={part}
                        type="button"
                        onClick={() => togglePart(part)}
                        className={`px-3 py-1.5 rounded-full border text-xs ${
                          active
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-300 text-slate-700 bg-white hover:bg-slate-50"
                        }`}
                      >
                        {part}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="font-semibold text-sm text-slate-900">
                Step 2 – Duty holder responsibilities
              </h3>
              <p className="text-slate-600">
                Capture how responsibilities are distributed under the Building
                Safety Act 2022.
              </p>

              <label className="block text-xs md:text-sm space-y-1 mt-3">
                <span className="text-slate-800">
                  Duty holder notes (principal designer, principal contractor,
                  accountable person…)
                </span>
                <textarea
                  className="w-full h-40 rounded-xl bg-slate-50 border border-slate-300 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="Summarise who is responsible for what, and how compliance decisions are recorded…"
                  value={form.notes}
                  onChange={(e) =>
                    setForm({ ...form, notes: e.target.value })
                  }
                />
              </label>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="font-semibold text-sm text-slate-900">
                Step 3 – Summary check
              </h3>
              <p className="text-slate-600">
                Review captured information before sending it to the backend or
                AI service.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2 text-xs md:text-sm">
                <SummaryRow
                  label="Project name"
                  value={form.projectName || "—"}
                />
                <SummaryRow
                  label="Project type"
                  value={form.projectType || "—"}
                />
                <SummaryRow label="Storeys" value={form.storeys || "—"} />
                <SummaryRow
                  label="Regulation parts"
                  value={
                    form.parts.length
                      ? form.parts.join(", ")
                      : "No parts selected yet"
                  }
                />
                <SummaryRow
                  label="Duty holder notes"
                  value={form.notes || "No notes captured yet"}
                />
              </div>

              <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
                In the full system this summary would be sent to a secure API,
                where backend logic and AI models validate inputs, highlight
                risks and produce a court-ready document.
              </p>
            </>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="text-xs md:text-sm rounded-md border border-slate-300 px-3 py-1.5 text-slate-700 bg-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <div className="flex gap-2">
              {step < 3 && (
                <button
                  onClick={nextStep}
                  className="text-xs md:text-sm rounded-md bg-slate-900 px-4 py-1.5 font-medium text-white hover:bg-slate-800"
                >
                  Continue
                </button>
              )}
              {step === 3 && (
                <button className="text-xs md:text-sm rounded-md bg-slate-900 px-4 py-1.5 font-medium text-white hover:bg-slate-800">
                  Generate draft (UI only)
                </button>
              )}
            </div>
          </div>
        </div>

        <AIChatPanel
          title="AI-assisted Q&A (mocked UI)"
          context={`Current role: ${currentRole}. Wizard step: ${step}. In production this panel would call an AI service using this form data.`}
        />
      </div>
    </div>
  );
}

function ProgressPills({ step }) {
  const steps = ["Project context", "Duty holders", "Summary"];

  return (
    <ol className="flex items-center gap-2 text-[11px]">
      {steps.map((label, index) => {
        const current = index + 1 === step;
        const done = index + 1 < step;

        return (
          <li
            key={label}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${
              done
                ? "border-slate-900 bg-slate-900 text-white"
                : current
                ? "border-slate-500 bg-white text-slate-900"
                : "border-slate-200 text-slate-500 bg-slate-50"
            }`}
          >
            <span className="font-semibold">{index + 1}</span>
            <span>{label}</span>
          </li>
        );
      })}
    </ol>
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

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      <span className="text-right text-slate-900">{value}</span>
    </div>
  );
}

export default WizardPage;
