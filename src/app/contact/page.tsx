import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { CLINIC } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Clinic4U Dublin Dental & Beauty",
  description:
    "Contact Clinic4U Dublin: phone 01 476 3949, email clinic4u.ie@gmail.com, Phibsborough, Dublin 7. Open Monday–Friday 9–19h, Saturday 9–14h. Book online anytime.",
};

export const runtime = "edge";

export default function ContactPage() {
  const HOURS = [
    { day: "Monday", hours: "09:00 – 19:00" },
    { day: "Tuesday", hours: "09:00 – 19:00" },
    { day: "Wednesday", hours: "09:00 – 19:00" },
    { day: "Thursday", hours: "09:00 – 19:00" },
    { day: "Friday", hours: "09:00 – 19:00" },
    { day: "Saturday", hours: "09:00 – 14:00" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full mb-6">
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-teal-100 mb-5 max-w-2xl text-balance">
            We'd Love to Hear From You
          </h1>
          <p className="text-teal-200 text-lg max-w-xl text-pretty">
            Call, email, WhatsApp or stop by — we're here to help you book, answer questions,
            and make your visit as easy as possible.
          </p>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — contact details */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              {/* Phone */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <Phone size={20} className="text-teal-600" />
                  </div>
                  <h2 className="font-semibold text-navy-900">Phone</h2>
                </div>
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="block text-navy-700 font-medium hover:text-teal-600 transition-colors mb-1"
                >
                  {CLINIC.phone}
                </a>
                <a
                  href={`tel:${CLINIC.phoneMobile.replace(/\s/g, "")}`}
                  className="block text-navy-700 font-medium hover:text-teal-600 transition-colors"
                >
                  {CLINIC.phoneMobile}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <Mail size={20} className="text-teal-600" />
                  </div>
                  <h2 className="font-semibold text-navy-900">Email</h2>
                </div>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="text-navy-700 font-medium hover:text-teal-600 transition-colors break-all"
                >
                  {CLINIC.email}
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <MapPin size={20} className="text-teal-600" />
                  </div>
                  <h2 className="font-semibold text-navy-900">Address</h2>
                </div>
                <p className="text-navy-700 font-medium mb-3">
                  {CLINIC.address.street}<br />
                  {CLINIC.address.area}<br />
                  {CLINIC.address.city}
                </p>
                <a
                  href={CLINIC.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%20Clinic4U%2C%20I%27d%20like%20to%20get%20in%20touch.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-3xl p-6 flex items-center gap-4 transition-colors"
              >
                <MessageCircle size={28} />
                <div>
                  <div className="font-semibold text-lg">WhatsApp Us</div>
                  <div className="text-green-100 text-sm">Usually responds within minutes</div>
                </div>
              </a>

              {/* Social */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <h2 className="font-semibold text-navy-900 mb-4">Follow Us</h2>
                <div className="flex items-center gap-3">
                  {CLINIC.social.facebook && (
                    <a
                      href={CLINIC.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} className="text-blue-600" />
                    </a>
                  )}
                  {CLINIC.social.instagram && (
                    <a
                      href={CLINIC.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} className="text-pink-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right — hours + map */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Hours */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-sand-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <Clock size={20} className="text-teal-600" />
                  </div>
                  <h2 className="font-semibold text-navy-900">Opening Hours</h2>
                </div>
                <dl className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm col-span-2 sm:col-span-1 border-b border-sand-100 pb-2">
                      <dt className="text-navy-500">{h.day}</dt>
                      <dd className={h.hours === "Closed" ? "text-navy-400" : "text-navy-800 font-medium"}>
                        {h.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 bg-teal-50 border border-teal-100 rounded-2xl p-3 text-sm text-teal-700">
                  <strong>Emergency appointments</strong> available during all opening hours — call us immediately.
                </div>
              </div>

              {/* Map embed */}
              <div className="bg-white rounded-3xl shadow-card border border-sand-100 overflow-hidden flex-1">
                <iframe
                  title="Clinic4U location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9546.56!2d-6.2779!3d53.3637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e927fffa9e5%3A0x7e32b03f7e3d2d2d!2sPhibsborough%2C+Dublin+7!5e0!3m2!1sen!2sie!4v1"
                  className="w-full border-0"
                  style={{ height: "360px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Book CTA */}
              <div className="bg-gradient-hero rounded-3xl p-8 text-center">
                <h3 className="font-display text-2xl text-teal-100 mb-3">
                  Ready to Book?
                </h3>
                <p className="text-teal-200 text-sm mb-6">
                  Book online, call us or send a WhatsApp — whatever's easiest for you.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-2xl transition-colors shadow-glow"
                >
                  Book Appointment Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
