"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS, CLINIC } from "@/lib/data";
import { StarRating } from "@/components/ui/StarRating";
import { fadeInUp, scaleIn, VIEWPORT } from "@/lib/animations";

export function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => go(active === 0 ? TESTIMONIALS.length - 1 : active - 1);
  const next = () => go(active === TESTIMONIALS.length - 1 ? 0 : active + 1);

  return (
    <section
      className="section-padding bg-navy-950 relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-navy-800/25 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeInUp}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-800 px-3 py-1 rounded-full mb-3">
            Patient Reviews
          </span>
          <h2 id="reviews-heading" className="font-display text-3xl md:text-4xl text-white mb-4">
            What Our Patients Say
          </h2>
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
            <div>
              <span className="font-display text-white text-3xl">{CLINIC.rating}</span>
              <span className="text-slate-200 text-sm ml-1">/ 5</span>
            </div>
            <div>
              <StarRating rating={CLINIC.rating} size={20} />
              <p className="text-slate-200 text-xs mt-1">{CLINIC.reviewCount}+ Google Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={scaleIn}
        >
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden min-h-[260px]">
            <Quote size={52} className="text-teal-800/40 absolute top-6 left-6" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } }}
                exit={{ opacity: 0, x: direction * -30, transition: { duration: 0.3 } }}
                className="relative z-10"
              >
                <StarRating rating={TESTIMONIALS[active].rating} size={18} className="mb-6" />
                <blockquote className="font-display text-lg md:text-xl text-white leading-relaxed mb-8 italic text-balance">
                  &ldquo;{TESTIMONIALS[active].text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <cite className="not-italic font-semibold text-white">
                      {TESTIMONIALS[active].name}
                    </cite>
                    {TESTIMONIALS[active].treatment && (
                      <span className="text-teal-300 text-sm ml-2">
                        · {TESTIMONIALS[active].treatment}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      onClick={prev}
                      aria-label="Previous review"
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors text-white"
                    >
                      <ChevronLeft size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      onClick={next}
                      aria-label="Next review"
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors text-white"
                    >
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Reviews pagination">
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => go(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
                animate={{
                  width: i === active ? 32 : 8,
                  backgroundColor: i === active ? "#38bdc8" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
