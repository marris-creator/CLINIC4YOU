import type { Metadata } from "next";
import { BEAUTY_SERVICES } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Beauty & Aesthetic Treatments Dublin — Lip Fillers, Anti-Wrinkle, Profhilo",
  description:
    "Doctor-administered aesthetic treatments at Clinic4U Dublin: lip fillers, anti-wrinkle Botox injections for women and men, Profhilo bio-remodelling and dermal fillers.",
};

export const revalidate = 86400;

export default function BeautyServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            Beauty & Aesthetics
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-teal-100 mb-5 max-w-2xl text-balance">
            Refresh, Rejuvenate, Radiate
          </h1>
          <p className="text-teal-200 text-lg max-w-xl text-pretty">
            Doctor-administered aesthetic treatments for safe, natural-looking results.
            Our medical team tailors every treatment to complement your unique features.
          </p>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Aesthetic Services"
            title="Confidence-Boosting Treatments"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BEAUTY_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        title="Book Your Aesthetic Consultation"
        subtitle="All treatments are doctor-administered. Call or book online — results you'll love."
      />
    </>
  );
}
