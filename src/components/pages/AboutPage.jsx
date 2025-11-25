import React from "react";

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          About Megaplan Compliance
        </h2>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Megaplan Compliance is a front-end prototype for a digital platform
          that helps clients, contractors and administrators understand and
          manage their duties under the 2025 Building Regulations and the
          Building Safety Act 2022.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 text-sm space-y-4">
        <div>
          <h3 className="font-semibold text-slate-900 mb-1">
            What the platform is designed to do
          </h3>
          <p className="text-slate-700 leading-relaxed">
            The idea behind Megaplan is simple: bring all of the key compliance
            questions, project information and duty holder responsibilities into
            one straightforward workspace. The tools on this site are structured
            so they can be connected to a secure backend and AI services in a
            future deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              Who it&apos;s for
            </h4>
            <ul className="list-disc list-inside text-slate-700 space-y-1 leading-relaxed">
              <li>Clients and building owners who need clear summaries.</li>
              <li>Contractors and design teams coordinating day-to-day work.</li>
              <li>
                Internal Megaplan administrators overseeing risk and audit
                trails.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">
              How it supports projects
            </h4>
            <ul className="list-disc list-inside text-slate-700 space-y-1 leading-relaxed">
              <li>Guided Q&amp;A for capturing project context and duties.</li>
              <li>
                Document builder for producing court-ready compliance summaries.
              </li>
              <li>
                Dashboard views so teams can track forms, drafts and decisions.
              </li>
              <li>
                Dispute-prevention tools focused on clear records and
                assumptions.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          This version of Megaplan is a visual prototype only. It does not store
          data or connect to a live database, but the layout and journeys are
          designed so a future engineering team can attach authentication,
          secure APIs and AI services when the full system is built.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
