"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Star, CheckCircle2, Clock } from "lucide-react";
import { CLINIC } from "@/lib/data";
import {
  heroLine,
  fadeIn,
  staggerContainer,
  VIEWPORT,
} from "@/lib/animations";

const TRUST_BADGES = [
  { icon: Star, label: "4.9★ Google Rating", sub: "200+ Reviews" },
  { icon: CheckCircle2, label: "Emergency Slots Daily", sub: "Call for same-day" },
  { icon: Clock, label: "Open 6 Days", sub: "Late evenings Mon–Fri" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero"
      aria-label="Hero"
    >
      {/* Parallax background blobs */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: blobY }}
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 w-[680px] h-[680px] rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[560px] h-[560px] rounded-full bg-teal-700/12 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-navy-700/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.15) 40px, rgba(255,255,255,0.15) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.15) 40px, rgba(255,255,255,0.15) 41px)",
          }}
        />
      </motion.div>

      <motion.div
        className="container-xl relative z-10 py-24"
        style={{ y: contentY, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — staggered entrance */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              custom={0}
              variants={heroLine}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-200 text-sm font-semibold tracking-wide">
                Dublin&apos;s Premier Clinic — Phibsborough, D7
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={heroLine}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-slate-200 leading-[1.08] mb-6 text-balance"
            >
              Your Smile,{" "}
              <em className="not-italic text-teal-300">Expertly</em> Cared For
            </motion.h1>

            <motion.p
              custom={0.25}
              variants={heroLine}
              className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg text-pretty"
            >
              Family dental practice and aesthetic medi-spa in the heart of Dublin.
              Specialist-led care, walk-in welcome — open late, 6 days a week.
            </motion.p>

            <motion.div
              custom={0.38}
              variants={heroLine}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/booking"
                className="bg-teal-500 hover:bg-teal-400 text-slate-50 font-semibold px-8 py-4 rounded-2xl text-base shadow-glow hover:shadow-lg transition-all duration-200 active:scale-[0.97]"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 border-2 border-white/30 hover:border-teal-400/60 text-slate-300 hover:text-teal-200 font-semibold px-6 py-4 rounded-2xl text-base backdrop-blur-sm transition-all duration-200 active:scale-[0.97]"
              >
                <Phone size={18} />
                {CLINIC.phone}
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-slate-50 font-semibold px-6 py-4 rounded-2xl text-base transition-all duration-200 active:scale-[0.97]"
                aria-label="WhatsApp Clinic4U"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </motion.div>

            <motion.div custom={0.5} variants={heroLine} className="flex flex-wrap gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                >
                  <badge.icon size={17} className="text-teal-300 shrink-0" />
                  <div>
                    <div className="text-slate-300 text-sm font-semibold leading-none">
                      {badge.label}
                    </div>
                    <div className="text-slate-400 text-2xs mt-0.5">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            className="relative hidden lg:block"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="relative bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-navy-800 via-navy-700 to-teal-900">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
                  <div className="rounded-xl bg-teal-700/30 flex items-end p-3">
                    <span className="text-teal-200 text-xs font-semibold">Dental Suite</span>
                  </div>
                  <div className="rounded-xl bg-navy-600/50 flex items-end p-3">
                    <span className="text-slate-200 text-xs font-semibold">Aesthetic Room</span>
                  </div>
                  <div className="rounded-xl bg-navy-700/40 flex items-end p-3">
                    <span className="text-slate-300 text-xs font-semibold">Reception</span>
                  </div>
                  <div className="rounded-xl bg-teal-800/30 flex items-end p-3">
                    <span className="text-teal-200 text-xs font-semibold">Consultation</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-teal-500/25 border-2 border-teal-400/50 flex items-center justify-center backdrop-blur-sm shadow-glow">
                    <span className="font-display text-teal-200 text-3xl">4U</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Star size={20} className="text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="font-display text-navy-900 text-lg leading-none">
                    {CLINIC.googleRating}
                  </div>
                  <div className="text-navy-600 text-xs">{CLINIC.reviewCount}+ Google reviews</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-teal-500 text-slate-50 rounded-xl shadow-glow px-4 py-2 text-sm font-semibold"
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.75, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              >
                ✓ Accepting new patients
              </motion.div>
            </div>

            <motion.div
              className="absolute -inset-6 rounded-3xl border border-teal-500/20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 80L48 69.3C96 58.7 192 37.3 288 32C384 26.7 480 37.3 576 48C672 58.7 768 69.3 864 64C960 58.7 1056 37.3 1152 32C1248 26.7 1344 37.3 1392 42.7L1440 48V80H0Z" fill="#edfafa" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 border-2 border-slate-500/40 rounded-full flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 bg-teal-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
