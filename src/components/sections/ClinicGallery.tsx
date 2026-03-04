"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageReveal, slideInLeft, slideInRight, fadeInUp, staggerContainer, VIEWPORT } from "@/lib/animations";

const GALLERY_ITEMS = [
  {
    id: "g1",
    label: "Modern Dental Suite",
    desc: "State-of-the-art equipment for comfortable, precise care.",
    gradient: "from-teal-900 to-navy-900",
    accent: "bg-teal-500",
    size: "large",
    img: "/images/clinic-dental-suite.svg",
  },
  {
    id: "g2",
    label: "Aesthetic Treatment Room",
    desc: "Private, relaxing space for beauty treatments.",
    gradient: "from-navy-800 to-teal-800",
    accent: "bg-navy-600",
    size: "small",
    img: "/images/clinic-aesthetic-room.svg",
  },
  {
    id: "g3",
    label: "Welcoming Reception",
    desc: "Warm and professional from the moment you arrive.",
    gradient: "from-teal-800 to-navy-800",
    accent: "bg-teal-600",
    size: "small",
    img: "/images/clinic-reception.svg",
  },
  {
    id: "g4",
    label: "Digital X-Ray Suite",
    desc: "Low-dose digital imaging for accurate diagnostics.",
    gradient: "from-navy-900 to-teal-900",
    accent: "bg-teal-500",
    size: "medium",
    img: "/images/clinic-consultation.svg",
  },
  {
    id: "g5",
    label: "Consultation Room",
    desc: "Comfortable, private space to discuss your treatment.",
    gradient: "from-teal-900 to-navy-800",
    accent: "bg-navy-700",
    size: "medium",
    img: "/images/clinic-dental-suite.svg",
  },
];

const STATS = [
  { value: "10+", label: "Years Serving Dublin" },
  { value: "200+", label: "5-Star Reviews" },
  { value: "3", label: "Specialist Doctors" },
  { value: "6", label: "Days Open Weekly" },
];

// Individual mosaic cell placeholder
function GalleryCell({
  item,
  delay = 0,
}: {
  item: (typeof GALLERY_ITEMS)[number];
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${item.gradient} group cursor-default`}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={imageReveal}
      custom={delay}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* Actual image with gradient overlay */}
      {item.img && (
        <Image
          src={item.img}
          alt={item.label}
          fill
          className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
          unoptimized
        />
      )}
      {/* Gradient overlay for text legibility */}
      <div className={`absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent`} />
      {/* Decorative inner glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-teal-500/10 transition-opacity duration-500" />
      {/* Diagonal shine */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

      <div className="relative p-6 h-full flex flex-col justify-end min-h-[160px]">
        <div
          className={`w-8 h-1 rounded-full ${item.accent} mb-3 transition-all duration-300 group-hover:w-16`}
        />
        <h3 className="font-display text-slate-300 text-lg leading-tight mb-1">{item.label}</h3>
        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export function ClinicGallery() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden" aria-labelledby="gallery-heading">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-800/20 rounded-full blur-3xl" />
      </div>

      <div className="container-xl relative z-10">
        {/* Header — left aligned with right-side descriptor */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideInLeft}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-800 px-3 py-1 rounded-full mb-4">
              Our Clinic
            </span>
            <h2 id="gallery-heading" className="font-display text-3xl md:text-5xl text-slate-200 text-balance leading-tight">
              A Space Built for Your <em className="not-italic text-teal-300">Comfort</em>
            </h2>
          </motion.div>

          <motion.p
            className="text-slate-400 text-lg leading-relaxed text-pretty self-end"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideInRight}
          >
            Recently relocated to a brand new, purpose-built facility in Phibsborough — modern
            equipment, a welcoming atmosphere, and a team that puts you at ease from the moment
            you walk through the door.
          </motion.p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
          {/* Large cell — spans 2 cols and 2 rows on desktop */}
          <div className="col-span-2 row-span-2">
            <GalleryCell item={GALLERY_ITEMS[0]} delay={0} />
          </div>
          {/* Small top-right cells */}
          <div className="col-span-1 row-span-1">
            <GalleryCell item={GALLERY_ITEMS[1]} delay={0.1} />
          </div>
          <div className="col-span-1 row-span-1">
            <GalleryCell item={GALLERY_ITEMS[2]} delay={0.2} />
          </div>
          {/* Bottom row medium cells */}
          <div className="col-span-1 lg:col-span-2 row-span-1">
            <GalleryCell item={GALLERY_ITEMS[3]} delay={0.15} />
          </div>
          <div className="col-span-1 lg:col-span-2 row-span-1">
            <GalleryCell item={GALLERY_ITEMS[4]} delay={0.25} />
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="bg-white/5 border border-white/8 rounded-2xl px-6 py-5 text-center hover:bg-white/8 transition-colors"
            >
              <div className="font-display text-3xl text-teal-300 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
