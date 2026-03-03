import { Users, Clock, Award, MapPin, HeartHandshake, CreditCard } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Users,
    title: "Multicultural Team",
    desc: "English-speaking specialists from around the world — we understand diverse healthcare needs.",
  },
  {
    icon: Clock,
    title: "Open Late, 6 Days",
    desc: "Monday–Friday until 7pm, Saturday mornings — flexible appointments around your schedule.",
  },
  {
    icon: Award,
    title: "10+ Years of Care",
    desc: "Established for over a decade, recently moved to a brand new state-of-the-art facility.",
  },
  {
    icon: MapPin,
    title: "Heart of Dublin 7",
    desc: "Easily accessible in Phibsborough — served by multiple bus routes and with local parking.",
  },
  {
    icon: HeartHandshake,
    title: "Individualised Care",
    desc: "Every treatment plan is tailored to you. We listen, explain and put your comfort first.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    desc: "PRSI dental benefit accepted. Humm finance available. Transparent pricing, no surprises.",
  },
];

export function TrustBar() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 text-balance">
            Care You Can Count On
          </h2>
          <p className="mt-3 text-navy-500 max-w-xl mx-auto text-pretty">
            Clinic4U combines specialist expertise with genuine warmth — a clinic that feels
            as good as it performs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="group bg-white rounded-3xl p-6 shadow-card border border-sand-100 hover:border-teal-200 hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-teal flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
