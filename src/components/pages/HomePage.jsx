import React from "react";

function HomePage({ currentRole, onGetStarted }) {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Interactive Compliance Platform for 2025 Building Regulations
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
            This prototype supports construction professionals working under the
            2025 Building Regulations and the Building Safety Act 2022. It
            combines structured tools, a guided Q&amp;A assistant and AI-ready
            interfaces to help navigate Parts B, F, L and O with confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Start a compliance walkthrough
            </button>
            <span className="text-xs text-slate-600">
              Viewing as{" "}
              <span className="font-semibold text-slate-900">
                {currentRole}
              </span>
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-xs md:text-sm">
            <InfoStat
              label="Output"
              value="Court-ready compliance summaries"
            />
            <InfoStat label="Scope" value="Parts B, F, L & O" />
            <InfoStat label="User types" value="Guest, Contractor, Admin" />
            <InfoStat
              label="Deployment target"
              value="React front-end on Vercel"
            />
          </dl>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <h3 className="text-sm font-semibold mb-3 text-slate-900">
            High-level compliance journey
          </h3>
          <ol className="space-y-3 text-xs text-slate-800">
            <JourneyStep
              number={1}
              title="Capture project context"
              body="Collect project type, height, use class and applicable regulation parts."
            />
            <JourneyStep
              number={2}
              title="Guided Q&A assistant"
              body="Walk through duty holder responsibilities and technical questions with structured prompts."
            />
            <JourneyStep
              number={3}
              title="Automatic risk highlighting"
              body="Identify missing information or high-risk elements to reduce non-compliance."
            />
            <JourneyStep
              number={4}
              title="Court-ready summary"
              body="Generate a structured compliance document ready for review and email."
            />
          </ol>

          <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
            This UI is designed to plug into a Node/Express backend and AI
            services. In this prototype, responses are simulated for front-end
            testing only.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
        <FeatureCard
          title="Hybrid interface"
          body="Experienced users jump straight into structured menus; others follow the guided wizard."
        />
        <FeatureCard
          title="Role-aware views"
          body="Guests view sample data; contractors focus on live projects; admins see organisation-wide activity."
        />
        <FeatureCard
          title="Audit friendly"
          body="Every form is structured so a backend can log, store and retrieve it for future audits."
        />
      </section>
    </div>
  );
}

function InfoStat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function JourneyStep({ number, title, body }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300">
        {number}
      </span>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-slate-600 mt-0.5 leading-relaxed">{body}</p>
      </div>
    </li>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <h4 className="font-semibold mb-1 text-slate-900">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

export default HomePage;
