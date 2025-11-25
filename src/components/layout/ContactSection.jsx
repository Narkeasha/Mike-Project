import React from "react";

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

export default ContactSection;
