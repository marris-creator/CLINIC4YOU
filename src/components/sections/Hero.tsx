import Link from "next/link";
import { Phone, MessageCircle, Star, CheckCircle2, Clock } from "lucide-react";
import { CLINIC } from "@/lib/data";

const TRUST_BADGES = [
  { icon: Star, label: "4.9★ Google Rating", sub: "200+ Reviews" },
  { icon: CheckCircle2, label: "Emergency Slots Daily", sub: "Call for same-day" },
  { icon: Clock, label: "Open 6 Days", sub: "Late evenings Mon–Fri" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-navy-700/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-teal-900/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
          }}
        />
      </div>

      <div className="container-xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="animate-slide-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-sm font-semibold tracking-wide">
                Dublin's Premier Clinic — Phibsborough, D7
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 text-balance">
              Your Smile,{" "}
              <em className="not-italic text-teal-400">
                Expertly
              </em>{" "}
              Cared For
            </h1>

            <p className="text-navy-200 text-lg md:text-xl leading-relaxed mb-10 max-w-lg text-pretty">
              Family dental practice and aesthetic medi-spa in the heart of Dublin.
              Specialist-led care, walk-in welcome — open late, 6 days a week.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/booking"
                className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-glow hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-4 rounded-2xl text-base backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
              >
                <Phone size={18} />
                {CLINIC.phone}
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-4 rounded-2xl text-base transition-all duration-200 active:scale-[0.98]"
                aria-label="WhatsApp Clinic4U"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                >
                  <badge.icon size={18} className="text-teal-400 shrink-0" />
                  <div>
                    <div className="text-white text-sm font-semibold leading-none">{badge.label}</div>
                    <div className="text-navy-400 text-2xs mt-0.5">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="relative hidden lg:block animate-fade-in">
            {/* Main card */}
            <div className="relative bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-800 to-teal-900 flex items-center justify-center overflow-hidden">
                {/* Placeholder for clinic image */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-teal-500/20 border-2 border-teal-400/40 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-teal-300 text-4xl">4U</span>
                  </div>
                  <p className="text-navy-300 text-sm">Clinic4U — Phibsborough</p>
                  <p className="text-navy-400 text-xs mt-1">Modern · Specialist-led · Welcoming</p>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Star size={20} className="text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="font-display text-navy-900 text-lg leading-none">{CLINIC.googleRating}</div>
                  <div className="text-navy-500 text-xs">{CLINIC.reviewCount}+ Google reviews</div>
                </div>
              </div>

              {/* Floating availability pill */}
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white rounded-xl shadow-glow px-4 py-2 text-sm font-semibold">
                ✓ Accepting new patients
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-6 rounded-3xl border border-teal-600/20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 80L48 69.3C96 58.7 192 37.3 288 32C384 26.7 480 37.3 576 48C672 58.7 768 69.3 864 64C960 58.7 1056 37.3 1152 32C1248 26.7 1344 37.3 1392 42.7L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#f8f7f4"/>
        </svg>
      </div>
    </section>
  );
}
