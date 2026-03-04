"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/animations";

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
      <motion.div
        className="bg-teal-500 py-5"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeInUp}
      >
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-200 font-semibold text-lg text-center sm:text-left">{title}</p>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-teal-700 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-teal-50 transition-colors"
            >
              Book Online
            </Link>
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="border border-white/50 hover:border-white text-slate-200 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-teal-700/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-navy-600/15 blur-3xl" />
      </div>

      <div className="container-xl relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6"
          >
            Book Today
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-5xl text-slate-200 mb-4 text-balance"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-300 text-lg max-w-xl mx-auto mb-10 text-pretty"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              {
                href: "/booking",
                label: "Book Online",
                icon: Calendar,
                className:
                  "flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-50 font-semibold px-8 py-4 rounded-2xl text-base shadow-glow transition-all active:scale-[0.98]",
              },
              {
                href: `tel:${CLINIC.phone.replace(/\s/g, "")}`,
                label: CLINIC.phone,
                icon: Phone,
                className:
                  "flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-slate-300 font-semibold px-8 py-4 rounded-2xl text-base backdrop-blur-sm transition-all active:scale-[0.98]",
              },
              {
                href: `https://wa.me/${CLINIC.whatsapp}`,
                label: "WhatsApp",
                icon: MessageCircle,
                className:
                  "flex items-center gap-2 bg-green-600 hover:bg-green-500 text-slate-50 font-semibold px-8 py-4 rounded-2xl text-base transition-all active:scale-[0.98]",
                external: true,
              },
            ].map(({ href, label, icon: Icon, className, external }) =>
              external ? (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon size={20} />
                  {label}
                </motion.a>
              ) : href.startsWith("tel") ? (
                <motion.a
                  key={label}
                  href={href}
                  className={className}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon size={20} />
                  {label}
                </motion.a>
              ) : (
                <motion.div key={label} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href={href} className={className}>
                    <Icon size={20} />
                    {label}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
