import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import { BEAUTY_SERVICES, CLINIC } from "@/lib/data";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

// Service-specific image galleries
const SERVICE_IMAGES: Record<string, { src: string; alt: string; caption?: string }[]> = {
  profhilo: [
    { src: "/images/profhilo-product.jpg", alt: "Profhilo Haenkenium product", caption: "Profhilo® Haenkenium — antioxidant maintenance cream" },
    { src: "/images/profhilo-lemon.jpg", alt: "Profhilo Haenkenium bottle", caption: "Pure, science-backed hyaluronic formulation" },
  ],
  "profhilo-before-after": [
    { src: "/images/profhilo-before-after.jpg", alt: "Profhilo Body before and after results", caption: "Real patient results — Profhilo® Body treatment" },
  ],
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BEAUTY_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = BEAUTY_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} Dublin — Clinic4U`,
    description: service.description.slice(0, 160),
  };
}

export const revalidate = 86400;

export default async function BeautyServicePage({ params }: Props) {
  const { slug } = await params;
  const service = BEAUTY_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = BEAUTY_SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <Link
            href="/services/beauty"
            className="inline-flex items-center gap-1.5 text-teal-300 text-sm mb-6 hover:text-teal-200 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Beauty Services
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-4">
            Aesthetic Treatment
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-teal-100 mb-5 max-w-2xl text-balance">
            {service.name}
          </h1>
          <p className="text-teal-200 text-lg max-w-xl text-pretty mb-8">
            {service.shortDesc}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-glow"
            >
              <Calendar size={16} /> Book Consultation
            </Link>
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 border-2 border-teal-400/60 hover:border-teal-300 text-teal-100 font-semibold px-6 py-3 rounded-xl text-sm backdrop-blur-sm transition-colors"
            >
              <Phone size={16} /> {CLINIC.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gradient-sage">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
                About {service.name}
              </h2>
              <p className="text-navy-600 leading-relaxed text-base mb-8 text-pretty">
                {service.description}
              </p>

              {service.highlights && (
                <div className="bg-gradient-to-br from-white to-teal-50/50 rounded-3xl p-6 shadow-card border border-teal-100/60 mb-8">
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

              {/* Profhilo product images */}
              {SERVICE_IMAGES[slug] && (
                <div className="mb-8">
                  <h3 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-teal-500" />
                    The Product
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {SERVICE_IMAGES[slug].map((img) => (
                      <div key={img.src} className="rounded-2xl overflow-hidden shadow-card border border-teal-100/60 bg-gradient-to-br from-white to-teal-50/40">
                        <div className="relative aspect-square">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        {img.caption && (
                          <p className="text-navy-600 text-xs px-3 py-2 leading-snug">{img.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6">
                <h3 className="font-semibold text-navy-900 mb-3">Important Information</h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  All aesthetic treatments at Clinic4U are administered by qualified medical
                  practitioners. We offer a thorough consultation before every procedure to
                  ensure you are a suitable candidate and that your expectations are aligned.
                  Your safety and satisfaction are our top priorities.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-gradient-hero rounded-3xl p-6">
                <h3 className="font-display text-teal-100 text-xl mb-3">Book a Consultation</h3>
                <p className="text-teal-200 text-sm mb-5">
                  Discuss your goals with our aesthetic team — no-obligation consultation available.
                </p>
                <Link
                  href="/booking"
                  className="block bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-3 rounded-xl text-sm text-center transition-colors mb-3"
                >
                  Book Online
                </Link>
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 border border-teal-400/50 text-teal-100 font-semibold px-5 py-3 rounded-xl text-sm transition-colors hover:border-white/60"
                >
                  <Phone size={15} /> {CLINIC.phone}
                </a>
              </div>

              <Link
                href="/pricing"
                className="bg-white rounded-3xl p-5 shadow-card border border-sand-100 hover:border-teal-200 transition-colors"
              >
                <div className="text-navy-900 font-semibold text-sm mb-1">View Pricing →</div>
                <p className="text-navy-500 text-xs">Transparent pricing for all beauty treatments</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After results — Profhilo only */}
      {slug === "profhilo" && (
        <section className="section-padding bg-gradient-mint">
          <div className="container-xl">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-100 px-3 py-1 rounded-full mb-3">
                Real Results
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-3">
                Before &amp; After
              </h2>
              <p className="text-navy-600 max-w-lg mx-auto text-pretty">
                Profhilo® Body treatment dramatically improves skin laxity, texture, and hydration across multiple body areas.
              </p>
            </div>
            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-card border border-teal-100/70">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/profhilo-before-after.jpg"
                  alt="Profhilo Body before and after results showing improved skin laxity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50/60 px-6 py-4 border-t border-teal-100/60">
                <p className="text-navy-600 text-sm text-center">
                  <strong className="text-navy-900">Profhilo® Body</strong> — before &amp; after results showing improvement in skin laxity, hydration, and texture. Individual results may vary.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section-padding bg-gradient-sage">
          <div className="container-xl">
            <h2 className="font-display text-2xl text-navy-900 mb-8">Other Beauty Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/beauty/${s.slug}`}
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

      <AppointmentCTA variant="strip" title="Book your aesthetic appointment today" />
    </>
  );
}
