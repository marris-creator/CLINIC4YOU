import type { Metadata } from "next";
import { PRICING, CLINIC } from "@/lib/data";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import Link from "next/link";
import { Info, CreditCard, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Dental & Beauty Treatment Prices Dublin",
  description:
    "Transparent pricing for all Clinic4U dental and beauty treatments in Dublin. General dentistry, implants, orthodontics, whitening, lip fillers, anti-wrinkle and Profhilo price list.",
};

export const revalidate = 86400;

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            Pricing
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-teal-100 mb-5 max-w-2xl text-balance">
            Transparent Pricing, No Surprises
          </h1>
          <p className="text-teal-200 text-lg max-w-xl text-pretty">
            All prices shown include treatment by a qualified specialist. Financing available
            through Humm. PRSI dental benefit accepted.
          </p>
        </div>
      </section>

      {/* Payment info */}
      <section className="bg-offwhite py-8">
        <div className="container-xl">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-sand-100 shadow-card flex items-center gap-3">
              <ShieldCheck size={22} className="text-blue-500 shrink-0" />
              <div>
                <div className="font-semibold text-navy-900 text-sm">PRSI Benefit</div>
                <div className="text-navy-500 text-xs">Free exam for eligible workers</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-sand-100 shadow-card flex items-center gap-3">
              <CreditCard size={22} className="text-teal-500 shrink-0" />
              <div>
                <div className="font-semibold text-navy-900 text-sm">Humm Finance</div>
                <div className="text-navy-500 text-xs">Spread cost with 0% options</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-sand-100 shadow-card flex items-center gap-3">
              <Info size={22} className="text-amber-500 shrink-0" />
              <div>
                <div className="font-semibold text-navy-900 text-sm">Prices from</div>
                <div className="text-navy-500 text-xs">Final price confirmed at consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tables */}
      <section className="section-padding bg-offwhite">
        <div className="container-xl">
          {/* Nav pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PRICING.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-semibold bg-white border border-sand-200 hover:border-teal-300 hover:bg-teal-50 text-navy-700 hover:text-teal-700 px-4 py-2 rounded-full transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {PRICING.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="bg-white rounded-3xl shadow-card border border-sand-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-navy-900 to-teal-900 px-6 py-4">
                  <h2 className="font-display text-xl text-teal-100">{category.title}</h2>
                </div>
                <div className="divide-y divide-sand-100">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between px-6 py-4 hover:bg-sand-50 transition-colors"
                    >
                      <div>
                        <span className="text-navy-800 font-medium text-sm">{item.name}</span>
                        {item.note && (
                          <span className="ml-2 text-xs text-navy-400 italic">({item.note})</span>
                        )}
                      </div>
                      <span className="font-display text-teal-600 text-lg font-semibold shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex gap-3">
            <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-navy-600 leading-relaxed">
              All prices are indicative and subject to clinical assessment. Your dentist will
              provide a detailed written treatment plan with final pricing before commencing
              any treatment. Prices are valid as of early 2025. Contact us for the most
              up-to-date pricing.
            </p>
          </div>
        </div>
      </section>

      <AppointmentCTA
        title="Questions About Pricing?"
        subtitle={`Call us on ${CLINIC.phone} or book a no-obligation consultation — we'll explain everything clearly.`}
      />
    </>
  );
}
