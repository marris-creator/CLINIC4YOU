import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DENTAL_SERVICES, BEAUTY_SERVICES } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  const featuredDental = DENTAL_SERVICES.slice(0, 6);
  const featuredBeauty = BEAUTY_SERVICES.slice(0, 4);

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-xl">
        {/* Dental */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="Dental Treatments"
              title="Complete Oral Health Care"
              subtitle="From routine check-ups to complex implant surgery — all under one roof."
            />
            <Link
              href="/services/dental"
              className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all shrink-0"
            >
              View all dental services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredDental.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-sand-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 py-1 rounded-full border border-sand-200 text-sand-400 text-xs font-semibold uppercase tracking-wider">
              &amp; Also
            </span>
          </div>
        </div>

        {/* Beauty */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="Aesthetic & Beauty"
              title="Refresh, Rejuvenate, Radiate"
              subtitle="Doctor-administered aesthetic treatments for natural, confidence-boosting results."
            />
            <Link
              href="/services/beauty"
              className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all shrink-0"
            >
              View all beauty services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredBeauty.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
