"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, CreditCard } from "lucide-react";
import { staggerContainer, scaleIn, VIEWPORT } from "@/lib/animations";

export function PRSIWidget() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-xl">
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {/* PRSI card */}
          <motion.div
            variants={scaleIn}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-sand-100 flex gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
              <ShieldCheck size={28} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-navy-900 mb-2">PRSI Dental Benefit</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                Eligible PAYE workers can claim a free dental exam and subsidised treatments each
                year. Bring your PPS number — we&apos;ll check your entitlement on the spot.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Free Exam", "Scale & Polish", "X-Rays"].map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <a
                href="https://www.gov.ie/en/service/3e3c09-dental-benefit/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:underline"
              >
                Check your entitlement <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Humm card */}
          <motion.div
            variants={scaleIn}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-sand-100 flex gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
              <CreditCard size={28} className="text-teal-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-navy-900 mb-2">Humm — Pay Later</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                Spread the cost of your treatment over manageable monthly instalments with Humm
                finance. No large upfront payment required.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["0% options", "Fast approval", "All treatments"].map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:underline"
              >
                Ask us about Humm at reception →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
