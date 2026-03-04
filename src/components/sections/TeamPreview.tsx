"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { TEAM } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn, VIEWPORT } from "@/lib/animations";

export function TeamPreview() {
  return (
    <section className="section-padding bg-gradient-seafoam" aria-labelledby="team-heading">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeInUp}
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3">
              Meet the Team
            </span>
            <h2 id="team-heading" className="font-display text-3xl md:text-4xl text-navy-900">
              Specialists Who Care
            </h2>
            <p className="mt-3 text-navy-600 max-w-md text-pretty">
              Our international team brings world-class qualifications and genuine compassion
              to every appointment.
            </p>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all shrink-0"
          >
            Full team profiles <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.id}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Link
                href={`/about#${member.id}`}
                className="group bg-gradient-to-br from-white to-teal-50/50 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-teal-100/70 hover:border-teal-300 transition-colors duration-300 flex flex-col h-full"
              >
                {/* Photo */}
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-teal-900 relative overflow-hidden">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  {/* Specialty badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="inline-block bg-teal-500/85 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-navy-900 text-xl mb-0.5 group-hover:text-teal-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-navy-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {member.bio}
                  </p>
                  <div className="flex items-start gap-2 text-xs text-navy-500">
                    <GraduationCap size={14} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{member.qualifications[0]}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
