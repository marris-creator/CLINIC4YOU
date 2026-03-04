import type { Metadata } from "next";
import Link from "next/link";
import { DENTAL_SERVICES, BEAUTY_SERVICES } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Services — Dental & Beauty Treatments",
  description:
    "Explore Clinic4U's full range of dental and aesthetic services in Dublin: dental implants, orthodontics, teeth whitening, root canal, lip fillers, anti-wrinkle injections, Profhilo and more.",
};

export const revalidate = 86400;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative z-10 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            All Services
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-teal-100 mb-5 text-balance">
            Complete Dental & Aesthetic Care
          </h1>
          <p className="text-teal-200 text-lg max-w-xl mx-auto text-pretty">
            From your first check-up to advanced implant surgery and aesthetic treatments —
            all delivered by specialists under one roof.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="#dental"
              className="bg-teal-900/40 hover:bg-teal-800/50 border border-teal-500/40 text-teal-100 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Dental Treatments
            </a>
            <a
              href="#beauty"
              className="bg-teal-900/40 hover:bg-teal-800/50 border border-teal-500/40 text-teal-100 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Beauty & Aesthetics
            </a>
          </div>
        </div>
      </section>

      {/* Dental */}
      <section id="dental" className="section-padding bg-offwhite">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Dental Treatments"
              title="Oral Health & Cosmetic Dentistry"
              subtitle="General, restorative and specialist dental care for all ages."
            />
            <Link
              href="/services/dental"
              className="text-teal-600 font-semibold text-sm shrink-0 hover:underline"
            >
              View dental hub →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DENTAL_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Beauty */}
      <section id="beauty" className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Aesthetic & Beauty"
              title="Look & Feel Your Best"
              subtitle="Doctor-administered aesthetic treatments for safe, natural results."
            />
            <Link
              href="/services/beauty"
              className="text-teal-600 font-semibold text-sm shrink-0 hover:underline"
            >
              View beauty hub →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BEAUTY_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
