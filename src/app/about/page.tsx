import type { Metadata } from "next";
import { GraduationCap, Globe, ArrowRight } from "lucide-react";
import { TEAM, CLINIC } from "@/lib/data";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Team — Meet Our Specialists",
  description:
    "Meet the Clinic4U team: Dr. Laura Oponowicz (Implants), Dr. Sani Bello Dangaji (General Dentistry), and Dr. Hadil Saidam (Orthodontics). World-class qualifications, genuine care in Dublin 7.",
};

export const revalidate = 86400;

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            About Clinic4U
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-5 text-balance max-w-2xl">
            A Clinic Built on Expertise & Compassion
          </h1>
          <p className="text-navy-200 text-lg max-w-xl leading-relaxed text-pretty">
            Over 10 years of exceptional dental and aesthetic care in the heart of Dublin.
            Recently relocated to a brand new, state-of-the-art facility in Phibsborough — bigger,
            better equipped, and even more welcoming.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="section-padding bg-offwhite">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Mission"
                title="Exceptional Care for Every Patient"
                subtitle="Clinic4U was founded on the belief that world-class dental and aesthetic care should be accessible to everyone in Dublin — regardless of background, nationality or budget."
              />
              <div className="mt-8 space-y-5">
                {[
                  "A multicultural, English-speaking team who understand diverse healthcare needs",
                  "Modern equipment and evidence-based techniques in a sterile, safe environment",
                  "Transparent pricing with flexible Humm finance and PRSI dental benefit accepted",
                  "Walk-in welcome — emergency slots reserved every single day we are open",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "10+", label: "Years of Care" },
                { number: "200+", label: "5★ Google Reviews" },
                { number: "3", label: "Lead Specialists" },
                { number: "6", label: "Days Open Weekly" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-3xl p-6 shadow-card border border-sand-100 text-center"
                >
                  <div className="font-display text-4xl text-teal-600 mb-1">{stat.number}</div>
                  <div className="text-navy-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white" id="team">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Meet the Team"
            title="Our Specialist Doctors"
            subtitle="An internationally trained team united by one goal: giving you the best possible care."
            centered
            className="mb-14"
          />

          <div className="flex flex-col gap-10">
            {TEAM.map((member, i) => (
              <div
                key={member.id}
                id={member.id}
                className={`grid lg:grid-cols-5 gap-8 items-start bg-offwhite rounded-3xl overflow-hidden ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="aspect-[3/4] bg-gradient-to-br from-navy-800 to-teal-900 flex items-center justify-center relative min-h-[280px]">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mx-auto mb-4">
                        <span className="font-display text-white text-4xl">
                          {member.name.replace("Dr. ", "").split(" ").map(w => w[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                      <p className="text-navy-300 text-sm font-medium">{member.specialty}</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-teal-500/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-3 p-8">
                  <h2 className="font-display text-3xl text-navy-900 mb-1">{member.name}</h2>
                  <p className="text-teal-600 font-semibold mb-1">{member.title}</p>
                  <p className="text-navy-500 text-sm mb-6">{member.role}</p>

                  <p className="text-navy-600 leading-relaxed mb-6 text-pretty">{member.bio}</p>

                  {/* Qualifications */}
                  <div className="mb-6">
                    <h3 className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <GraduationCap size={16} className="text-teal-500" />
                      Qualifications
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {member.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-navy-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages */}
                  {member.languages && (
                    <div>
                      <h3 className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Globe size={16} className="text-teal-500" />
                        Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.languages.map((lang) => (
                          <span
                            key={lang}
                            className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full font-medium"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href="/booking"
                    className="mt-6 inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Book with {member.name.split(" ")[1]} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        title="Book with Our Specialists"
        subtitle={`Call ${CLINIC.phone} or book online — same-day emergency slots available.`}
      />
    </>
  );
}
