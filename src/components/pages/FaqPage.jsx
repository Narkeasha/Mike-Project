import React, { useState } from "react";

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

export default FaqPage;
