import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Phone, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import { DENTAL_SERVICES, CLINIC } from "@/lib/data";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DENTAL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = DENTAL_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} Dublin — Clinic4U`,
    description: service.description.slice(0, 160),
  };
}

export const revalidate = 86400;

export default async function DentalServicePage({ params }: Props) {
  const { slug } = await params;
  const service = DENTAL_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = DENTAL_SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <Link
            href="/services/dental"
            className="inline-flex items-center gap-1.5 text-teal-300 text-sm mb-6 hover:text-teal-200 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Dental Services
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-4">
            Dental Treatment
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-5 max-w-2xl text-balance">
            {service.name}
          </h1>
          <p className="text-navy-200 text-lg max-w-xl text-pretty mb-8">
            {service.shortDesc}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-glow"
            >
              <Calendar size={16} /> Book Appointment
            </Link>
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-xl text-sm backdrop-blur-sm transition-colors"
            >
              <Phone size={16} /> {CLINIC.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-offwhite">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
                About {service.name}
              </h2>
              <p className="text-navy-600 leading-relaxed text-base mb-8 text-pretty">
                {service.description}
              </p>

              {service.highlights && (
                <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100 mb-8">
                  <h3 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-teal-500" />
                    Treatment Highlights
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-navy-600">
                        <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What to expect */}
              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6">
                <h3 className="font-semibold text-navy-900 mb-3">What to Expect</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  At your initial consultation, our dentist will fully assess your situation,
                  answer all your questions, and provide a detailed treatment plan with transparent
                  pricing before any work begins. We aim to make every visit comfortable and
                  stress-free.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {/* Book card */}
              <div className="bg-gradient-hero rounded-3xl p-6 text-white">
                <h3 className="font-display text-xl mb-3">Ready to Get Started?</h3>
                <p className="text-navy-200 text-sm mb-5">
                  Book your consultation online or call us — emergency slots available daily.
                </p>
                <Link
                  href="/booking"
                  className="block bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-3 rounded-xl text-sm text-center transition-colors mb-3"
                >
                  Book Online
                </Link>
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  <Phone size={15} /> {CLINIC.phone}
                </a>
              </div>

              {/* Quick info */}
              <div className="bg-white rounded-3xl p-5 shadow-card border border-sand-100">
                <h3 className="font-semibold text-navy-900 text-sm mb-4">Clinic Details</h3>
                <dl className="flex flex-col gap-3 text-sm">
                  <div>
                    <dt className="text-navy-400 text-xs uppercase tracking-wide mb-0.5">Location</dt>
                    <dd className="text-navy-700">{CLINIC.address.area}, {CLINIC.address.city}</dd>
                  </div>
                  <div>
                    <dt className="text-navy-400 text-xs uppercase tracking-wide mb-0.5">Hours</dt>
                    <dd className="text-navy-700">Mon–Fri 9–19h · Sat 9–14h</dd>
                  </div>
                  <div>
                    <dt className="text-navy-400 text-xs uppercase tracking-wide mb-0.5">Finance</dt>
                    <dd className="text-navy-700">Humm pay later available</dd>
                  </div>
                </dl>
              </div>

              {/* See pricing */}
              <Link
                href="/pricing"
                className="bg-sand-100 hover:bg-sand-200 rounded-3xl p-5 border border-sand-200 transition-colors"
              >
                <div className="text-navy-900 font-semibold text-sm mb-1">View Pricing →</div>
                <p className="text-navy-500 text-xs">Transparent pricing for all treatments</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      {others.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <h2 className="font-display text-2xl text-navy-900 mb-8">Other Dental Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((s, i) => (
                <Link
                  key={s.id}
                  href={`/services/dental/${s.slug}`}
                  className="bg-offwhite rounded-3xl p-5 border border-sand-100 hover:border-teal-200 hover:shadow-card transition-all"
                >
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">{s.name}</h3>
                  <p className="text-navy-500 text-xs leading-relaxed line-clamp-2">{s.shortDesc}</p>
                  <span className="text-teal-600 text-xs font-semibold mt-3 block">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <AppointmentCTA variant="strip" title="Book your dental appointment today" />
    </>
  );
}
