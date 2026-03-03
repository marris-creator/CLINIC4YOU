"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS, CLINIC } from "@/lib/data";
import { StarRating } from "@/components/ui/StarRating";

export function Reviews() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 bg-teal-900/30 border border-teal-800 px-3 py-1 rounded-full mb-3">
            Patient Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            What Our Patients Say
          </h2>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
            <div>
              <span className="font-display text-white text-3xl">{CLINIC.rating}</span>
              <span className="text-navy-400 text-sm ml-1">/ 5</span>
            </div>
            <div>
              <StarRating rating={CLINIC.rating} size={20} />
              <p className="text-navy-400 text-xs mt-1">{CLINIC.reviewCount}+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <Quote
              size={48}
              className="text-teal-800/50 absolute top-6 left-6"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <StarRating rating={TESTIMONIALS[active].rating} size={18} className="mb-6" />
              <blockquote className="font-display text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic text-balance">
                &ldquo;{TESTIMONIALS[active].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <cite className="not-italic font-semibold text-white">
                    {TESTIMONIALS[active].name}
                  </cite>
                  {TESTIMONIALS[active].treatment && (
                    <span className="text-teal-400 text-sm ml-2">
                      · {TESTIMONIALS[active].treatment}
                    </span>
                  )}
                </div>
                {/* Nav */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous review"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors text-white"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next review"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors text-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Reviews pagination">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === active ? "w-8 h-2 bg-teal-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
