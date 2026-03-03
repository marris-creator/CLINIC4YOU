"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { FAQS, CLINIC } from "@/lib/data";

// Metadata is exported from a separate file for client components
// see /src/app/faqs/metadata.ts (loaded by layout)

const CATEGORIES = ["All", "General", "Payment", "Dental", "Beauty", "Emergency"];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            FAQs
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-navy-200 text-lg max-w-lg mx-auto text-pretty">
            Find answers to the most common questions about our dental and aesthetic services,
            payments, and appointments.
          </p>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-xl max-w-4xl">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-white border border-sand-200 text-navy-700 hover:border-teal-300 hover:text-teal-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {filtered.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-sand-100 shadow-card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-semibold bg-teal-50 text-teal-600 border border-teal-100 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-navy-900 text-sm leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-teal-500 shrink-0 transition-transform ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-5">
                    <div className="pl-[4.25rem]">
                      <p className="text-navy-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-card border border-sand-100 text-center">
            <h2 className="font-display text-2xl text-navy-900 mb-3">
              Still Have Questions?
            </h2>
            <p className="text-navy-500 text-sm mb-6">
              Our friendly team is happy to help. Call us, WhatsApp us, or email — whatever works best for you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <Phone size={16} /> {CLINIC.phone}
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                className="border-2 border-teal-500 text-teal-600 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-teal-50 transition-colors"
              >
                {CLINIC.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
