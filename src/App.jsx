// src/App.jsx
import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*  constants                                                                 */
/* -------------------------------------------------------------------------- */

const PAGES = {
  HOME: "home",
  ABOUT: "about",
  FAQS: "faqs",
  WIZARD: "wizard",
  DOCUMENTS: "documents",
  DASHBOARD: "dashboard",
  DISPUTES: "disputes",
};

const ROLES = {
  GUEST: "Guest / Client",
  CONTRACTOR: "Contractor",
  ADMIN: "Administrator (Megaplan)",
};

/* -------------------------------------------------------------------------- */
/*  root app                                                                  */
/* -------------------------------------------------------------------------- */

function App() {
  const [activePage, setActivePage] = useState(PAGES.HOME);
  const [currentRole, setCurrentRole] = useState(ROLES.GUEST);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuth = () => setShowAuthModal(true);
  const handleCloseAuth = () => setShowAuthModal(false);

  const handleSignIn = (role) => {
    setCurrentRole(role);
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentRole(ROLES.GUEST);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex relative">
      {/* Sidebar (desktop) */}
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

      {/* Top bar + mobile nav */}
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
              onClick={handleOpenAuth}
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

      {/* Main content */}
      <main className="flex-1 flex flex-col md:ml-0">
        {/* Desktop header */}
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
                  onClick={handleSignOut}
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
                  Sign in to view role-specific tools for contractors, clients
                  and administrators.
                </p>
              </div>
              <button
                onClick={handleOpenAuth}
                className="rounded-md bg-slate-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
              >
                Sign in / Sign up
              </button>
            </>
          )}
        </div>

        {/* Page body (scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 pb-8 pt-[5.4rem] md:pt-8 md:px-10">
          {activePage === PAGES.HOME && (
            <HomePage
              currentRole={currentRole}
              onGetStarted={() => setActivePage(PAGES.WIZARD)}
            />
          )}
          {activePage === PAGES.ABOUT && <AboutPage />}
          {activePage === PAGES.FAQS && <FaqPage />}
          {activePage === PAGES.WIZARD && (
            <WizardPage currentRole={currentRole} />
          )}
          {activePage === PAGES.DOCUMENTS && (
            <DocumentBuilderPage currentRole={currentRole} />
          )}
          {activePage === PAGES.DASHBOARD && (
            <DashboardPage currentRole={currentRole} />
          )}
          {activePage === PAGES.DISPUTES && <DisputeNavigatorPage />}
        </div>

        {/* Contact footer shown on every page (outside scroll area) */}
        <ContactSection />
      </main>

      {/* Auth modal */}
      {showAuthModal && (
        <AuthModal
          initialRole={currentRole}
          onClose={handleCloseAuth}
          onSignIn={handleSignIn}
        />
      )}
    </div>
  );
}




/* -------------------------------------------------------------------------- */
/*  layouttt helpersss                                                     */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*  home pageeeeeee                                                           */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                    about pageeeee                                             */
/* -------------------------------------------------------------------------- */

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





/* -------------------------------------------------------------------------- */
/*                                Frequently asked questionss                         */
/* -------------------------------------------------------------------------- */

function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is this a live compliance system?",
      answer:
        "No. This is a visual prototype. It does not store data or connect to a live database. It is designed so a production system can be built on top of it.",
    },
    {
      question: "Who is the platform intended for?",
      answer:
        "The platform is designed for clients, contractors and internal Megaplan administrators who need clear, structured views of building regulation duties.",
    },
    {
      question: "Which regulations does it focus on?",
      answer:
        "The current prototype focuses on the 2025 Building Regulations and the Building Safety Act 2022, with particular emphasis on Parts B, F, L and O.",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddFaq = (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    setFaqs((prev) => [
      ...prev,
      {
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
      },
    ]);

    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Short answers to common questions about how this Megaplan Compliance
          prototype works. In a full deployment, this page would be maintained
          by the Megaplan team and linked to live support.
        </p>
      </header>

      <div className="grid lg:grid-cols-[3fr,2fr] gap-6 items-start text-sm">
        {/* FAQ list */}
        <section className="space-y-3">
          {faqs.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <h3 className="font-semibold text-slate-900 mb-1">
                {item.question}
              </h3>
              <p className="text-slate-700 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </section>

        {/* Simple form to add FAQs (UI only) */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
          <h3 className="font-semibold text-slate-900">
            Add a FAQ (prototype only)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Use this panel to draft extra questions and answers during testing.
            Entries are only stored in your current browser session and are not
            saved to a database.
          </p>

          <form onSubmit={handleAddFaq} className="space-y-3 text-xs">
            <label className="block space-y-1">
              <span className="text-slate-800">Question</span>
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="e.g. How will AI responses be checked?"
                className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-slate-800">Answer</span>
              <textarea
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Provide a short, clear answer that a client or contractor could understand."
                className="w-full h-24 rounded-lg bg-slate-50 border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-md bg-slate-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
            >
              Add question (UI only)
            </button>
          </form>

          <p className="text-[11px] text-slate-500 leading-relaxed">
            In a live system, new FAQs would be reviewed and published by the
            Megaplan team so that legal and technical guidance stays accurate.
          </p>
        </section>
      </div>
    </div>
  );
}



/* -------------------------------------------------------------------------- */
/*                 Contact section    (footer)                                  */
/* -------------------------------------------------------------------------- */

function ContactSection() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-4">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs md:text-sm text-slate-700">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Contact Megaplan Compliance
            </h3>
            <p className="leading-relaxed">
              For questions about projects, duties or this prototype, please
              use the contact details below.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Phone</p>
            <p className="leading-relaxed">
              <a href="tel:+442012345678" className="hover:underline">
                +44 (0)20 1234 5678
              </a>
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Weekdays 09:00–17:00 (UK time)
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Email</p>
            <p className="leading-relaxed">
              <a
                href="mailto:info@megaplan-compliance.co.uk"
                className="hover:underline"
              >
                info@megaplan-compliance.co.uk
              </a>
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              We aim to respond within one working day.
            </p>
          </div>
        </div>
        <p className="mt-4 text-[11px] text-slate-500">
          Contact details are placeholders for design purposes only in this
          university prototype. They can be replaced with live information when
          the production system is deployed.
        </p>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                wizard page                                                  */
/* -------------------------------------------------------------------------- */

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



/* -------------------------------------------------------------------------- */
/*        document builder page                                               */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  The dashboard pageeeeeeeeee                                               */
/* -------------------------------------------------------------------------- */

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









/* -------------------------------------------------------------------------- */
/*  DISPUTE NAVIGATOR PAGE                                                    */
/* -------------------------------------------------------------------------- */

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










/* -------------------------------------------------------------------------- */
/*  Shared AI PANELLLLL only the front end                                  */
/* -------------------------------------------------------------------------- */

function AIChatPanel({ title, context }) {
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "This panel simulates how the AI assistant will respond once the backend is connected. Ask a question about the regulations or your project to see a placeholder reply.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input.trim() };
    const aiMessage = {
      from: "ai",
      text:
        "In the deployed system this response would be generated by the AI service using your project data and up-to-date regulations. Here it acts as a placeholder for that behaviour.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col h-[360px] text-xs md:text-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-sm text-slate-900">{title}</h3>
        <span className="text-[10px] text-slate-500">
          Front-end only – AI API to be wired later
        </span>
      </div>

      <p className="text-[11px] md:text-xs text-slate-500 mb-3 leading-relaxed">
        {context}
      </p>

      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((m, index) => (
          <div
            key={index}
            className={`max-w-[85%] rounded-xl px-3 py-2 leading-relaxed ${
              m.from === "user"
                ? "ml-auto bg-slate-900 text-white"
                : "mr-auto bg-slate-100 text-slate-900 border border-slate-200"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex items-center gap-2">
        <input
          className="flex-1 rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
          placeholder="Type a question about the 2025 regulations…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-slate-900 px-3 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-slate-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Auth Modal (Sign in / Sign up)                                             */
/* -------------------------------------------------------------------------- */

function AuthModal({ initialRole, onClose, onSignIn }) {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(initialRole || ROLES.GUEST);

  const signInRoles = [ROLES.GUEST, ROLES.CONTRACTOR, ROLES.ADMIN];
  const signUpRoles = [ROLES.GUEST, ROLES.CONTRACTOR];
  const roleOptions = mode === "signin" ? signInRoles : signUpRoles;

  const handleSubmit = (e) => {
    e.preventDefault();
    // No real auth – just set the chosen role
    onSignIn(role);
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
        onClick={stopPropagation}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {mode === "signin" ? "Sign in" : "Create an account"}
            </h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Choose how you&apos;re using the platform. In a live system this
              screen would connect to secure authentication.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-sm"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-2 mb-4 text-xs">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-md border px-3 py-1.5 ${
              mode === "signin"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-md border px-3 py-1.5 ${
              mode === "signup"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300"
            }`}
          >
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
          <label className="block space-y-1">
            <span className="text-slate-800 text-xs">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.co.uk"
              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </label>

          <label className="block space-y-1">
            <span className="text-slate-800 text-xs">
              {mode === "signin" ? "Password" : "Create a password"}
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </label>

          <div>
            <p className="text-slate-800 mb-2 text-xs">Use platform as</p>
            <div className="space-y-2">
              {roleOptions.map((r) => {
                const active = role === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`w-full text-left rounded-md px-3 py-1.5 border text-xs md:text-sm ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-800 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-slate-800"
          >
            {mode === "signin" ? "Continue" : "Create account"}
          </button>

          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            This is a visual prototype only. No real accounts are created and no
            data is stored.
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
