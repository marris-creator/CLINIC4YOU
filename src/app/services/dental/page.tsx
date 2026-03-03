import type { Metadata } from "next";
import { DENTAL_SERVICES } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Dental Treatments Dublin — General, Cosmetic & Specialist",
  description:
    "Full range of dental services in Dublin: check-ups, hygiene, fillings, root canal, dental implants, orthodontics, crowns, extractions, dentures and emergency dentistry.",
};

export const revalidate = 86400;

export default function DentalServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            Dental Services
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-5 max-w-2xl text-balance">
            Complete Dental Care in Dublin 7
          </h1>
          <p className="text-navy-200 text-lg max-w-xl text-pretty">
            From everyday check-ups and cleaning to specialist implant surgery and orthodontics —
            all under one roof at Clinic4U Phibsborough.
          </p>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Dental Services"
            title="Your Oral Health, Our Priority"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DENTAL_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
