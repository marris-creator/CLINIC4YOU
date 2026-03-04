"use client";

import { motion } from "framer-motion";
import { Users, Clock, Award, MapPin, HeartHandshake, CreditCard } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  VIEWPORT,
} from "@/lib/animations";

const TRUST_ITEMS = [
  {
    icon: Users,
    title: "Multicultural Team",
    desc: "English-speaking specialists from around the world — we understand diverse healthcare needs.",
    color: "bg-teal-500",
  },
  {
    icon: Clock,
    title: "Open Late, 6 Days",
    desc: "Monday–Friday until 7pm, Saturday mornings — flexible appointments around your schedule.",
    color: "bg-navy-700",
  },
  {
    icon: Award,
    title: "10+ Years of Care",
    desc: "Established for over a decade, recently moved to a brand new state-of-the-art facility.",
    color: "bg-teal-600",
  },
  {
    icon: MapPin,
    title: "Heart of Dublin 7",
    desc: "Easily accessible in Phibsborough — served by multiple bus routes and with local parking.",
    color: "bg-navy-800",
  },
  {
    icon: HeartHandshake,
    title: "Individualised Care",
    desc: "Every treatment plan is tailored to you. We listen, explain and put your comfort first.",
    color: "bg-teal-500",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    desc: "PRSI dental benefit accepted. Humm finance available. Transparent pricing, no surprises.",
    color: "bg-navy-700",
  },
];

export function TrustBar() {
  return (
    <section className="section-padding bg-gradient-mint" aria-labelledby="trust-heading">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeInUp}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2
            id="trust-heading"
            className="font-display text-3xl md:text-4xl text-navy-900 text-balance"
          >
            Care You Can Count On
          </h2>
          <p className="mt-3 text-navy-600 max-w-xl mx-auto text-pretty">
            Clinic4U combines specialist expertise with genuine warmth — a clinic that feels
            as good as it performs.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: "0 12px 40px -8px rgba(8,15,40,0.16)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group bg-gradient-to-br from-white to-teal-50/70 rounded-3xl p-6 shadow-card border border-teal-100/80 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={22} className="text-slate-50" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-2 text-[15px]">{item.title}</h3>
              <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
