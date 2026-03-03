import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { TEAM } from "@/lib/data";

export function TeamPreview() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3">
              Meet the Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              Specialists Who Care
            </h2>
            <p className="mt-3 text-navy-500 max-w-md text-pretty">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <Link
              key={member.id}
              href={`/about#${member.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-sand-100 hover:border-teal-200 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Photo placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-teal-900 flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="font-display text-white text-2xl">
                    {member.name.split(" ").filter(w => w !== "Dr.").map(w => w[0]).join("").slice(0,2)}
                  </span>
                </div>
                {/* Specialty badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-teal-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {member.specialty}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-navy-900 text-xl mb-0.5 group-hover:text-teal-700 transition-colors">
                  {member.name}
                </h3>
                <p className="text-teal-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-navy-500 text-sm leading-relaxed line-clamp-3 mb-4">{member.bio}</p>

                {/* Top qualification */}
                <div className="flex items-start gap-2 text-xs text-navy-400">
                  <GraduationCap size={14} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>{member.qualifications[0]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
