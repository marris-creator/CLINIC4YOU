import Link from "next/link";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/data";

interface AppointmentCTAProps {
  variant?: "full" | "strip";
  title?: string;
  subtitle?: string;
}

export function AppointmentCTA({
  variant = "full",
  title = "Ready to Book Your Appointment?",
  subtitle = "Specialist-led care, welcoming to all. Open late 6 days a week in Dublin 7.",
}: AppointmentCTAProps) {
  if (variant === "strip") {
    return (
      <div className="bg-teal-500 py-5">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center sm:text-left">{title}</p>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-teal-700 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-teal-50 transition-colors"
            >
              Book Online
            </Link>
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="border border-white/40 text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-teal-700/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-navy-600/20 blur-3xl" />
      </div>

      <div className="container-xl relative z-10 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
          Book Today
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-white mb-4 text-balance">
          {title}
        </h2>
        <p className="text-navy-200 text-lg max-w-xl mx-auto mb-10 text-pretty">{subtitle}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/booking"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-glow transition-all active:scale-[0.98]"
          >
            <Calendar size={20} />
            Book Online
          </Link>
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-2xl text-base backdrop-blur-sm transition-all active:scale-[0.98]"
          >
            <Phone size={20} />
            {CLINIC.phone}
          </a>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all active:scale-[0.98]"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
