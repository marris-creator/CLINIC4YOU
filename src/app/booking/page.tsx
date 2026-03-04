import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Clock, MapPin, Calendar } from "lucide-react";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book an Appointment — Clinic4U Dublin",
  description:
    "Book your appointment at Clinic4U Dublin online, by phone or WhatsApp. Dental and aesthetic treatments available. Emergency slots daily. Phibsborough, Dublin 7.",
};

// Edge runtime — no data fetching, purely static content with external embed
export const runtime = "edge";

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20 relative overflow-hidden">
        <div className="container-xl relative z-10 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            Book Online
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-slate-200 mb-4 text-balance">
            Book Your Appointment
          </h1>
          <p className="text-navy-200 text-lg max-w-lg mx-auto text-pretty">
            Choose a date and time that suits you. Emergency slots available every day — just call us.
          </p>
        </div>
      </section>

      {/* Booking widget + alternatives */}
      <section className="section-padding bg-gradient-mint">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Booking embed — lg:col-span-3 */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-white to-teal-50/40 rounded-3xl shadow-card border border-teal-100/70 overflow-hidden">
                <div className="px-6 py-4 border-b border-sand-100">
                  <h2 className="font-display text-xl text-navy-900 flex items-center gap-2">
                    <Calendar size={20} className="text-teal-500" />
                    Online Booking
                  </h2>
                  <p className="text-navy-500 text-sm mt-1">
                    Select your service, choose a doctor and pick a time.
                  </p>
                </div>

                {/* Setmore embed */}
                <div className="w-full" style={{ minHeight: "600px" }}>
                  <iframe
                    src={CLINIC.booking.embedUrl}
                    title="Book an appointment at Clinic4U"
                    className="w-full border-0"
                    style={{ height: "600px" }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                  />
                </div>

                {/* Fallback CTA */}
                <div className="px-6 py-4 border-t border-sand-100 bg-sand-50">
                  <p className="text-navy-500 text-sm text-center">
                    Can't use the widget?{" "}
                    <a
                      href={CLINIC.booking.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 font-semibold hover:underline"
                    >
                      Open booking page directly →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Side panel — lg:col-span-2 */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Phone */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 flex items-center justify-center mb-4">
                  <Phone size={22} className="text-teal-600" />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-2">Call Us</h3>
                <p className="text-navy-500 text-sm mb-4">
                  Our team is available during opening hours to book you in immediately.
                </p>
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="block bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-3 rounded-xl text-sm text-center transition-colors mb-2"
                >
                  {CLINIC.phone}
                </a>
                <a
                  href={`tel:${CLINIC.phoneMobile.replace(/\s/g, "")}`}
                  className="block bg-sand-100 hover:bg-sand-200 text-navy-700 font-semibold px-5 py-3 rounded-xl text-sm text-center transition-colors"
                >
                  {CLINIC.phoneMobile}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                  <MessageCircle size={22} className="text-green-600" />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-2">WhatsApp</h3>
                <p className="text-navy-500 text-sm mb-4">
                  Send us a message anytime — we typically respond within minutes during business hours.
                </p>
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%20Clinic4U%2C%20I%27d%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Hours + Location */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <h3 className="font-semibold text-navy-900 text-sm mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-teal-500" />
                  Opening Hours
                </h3>
                <dl className="flex flex-col gap-2 text-sm mb-5">
                  {[
                    { day: "Monday – Friday", hours: "09:00 – 19:00" },
                    { day: "Saturday", hours: "09:00 – 14:00" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between">
                      <dt className="text-navy-500">{row.day}</dt>
                      <dd className={row.hours === "Closed" ? "text-navy-400" : "text-navy-700 font-medium"}>
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="pt-4 border-t border-sand-100 flex items-start gap-2">
                  <MapPin size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-navy-700 text-sm font-medium">{CLINIC.address.area}, {CLINIC.address.city}</p>
                    <a
                      href={CLINIC.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 text-xs hover:underline"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
