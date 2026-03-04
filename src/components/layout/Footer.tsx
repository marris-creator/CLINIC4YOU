import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { CLINIC } from "@/lib/data";

const FOOTER_LINKS = {
  Services: [
    { label: "General Dentistry", href: "/services/dental/checkup-hygiene" },
    { label: "Dental Implants", href: "/services/dental/dental-implants" },
    { label: "Teeth Whitening", href: "/services/dental/teeth-whitening" },
    { label: "Orthodontics", href: "/services/dental/orthodontics" },
    { label: "Emergency Dentist", href: "/services/dental/emergency-dentist" },
    { label: "Lip Fillers", href: "/services/beauty/lip-fillers" },
    { label: "Anti-Wrinkle", href: "/services/beauty/anti-wrinkle-women" },
    { label: "Profhilo", href: "/services/beauty/profhilo" },
  ],
  "Quick Links": [
    { label: "About & Team", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book Appointment", href: "/booking" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const HOURS = [
  { day: "Monday – Friday", time: "09:00 – 19:00" },
  { day: "Saturday", time: "09:00 – 14:00" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-teal-200">
      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center text-white font-display text-xl font-bold">
                4U
              </div>
              <div className="leading-tight">
                <span className="block font-display text-teal-100 text-xl">Clinic4U</span>
                <span className="block text-teal-400 text-2xs font-semibold uppercase tracking-widest -mt-1">
                  Dublin
                </span>
              </div>
            </Link>
            <p className="text-sm text-teal-200 leading-relaxed mb-6">
              Dublin's premier dental and aesthetic clinic. Family-friendly, specialist-led, and open
              6 days a week in the heart of Phibsborough.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {CLINIC.social.facebook && (
                <a
                  href={CLINIC.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clinic4U on Facebook"
                  className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                >
                  <Facebook size={16} />
                </a>
              )}
              {CLINIC.social.instagram && (
                <a
                  href={CLINIC.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clinic4U on Instagram"
                  className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                >
                  <Instagram size={16} />
                </a>
              )}
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Clinic4U"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-teal-100 font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-teal-200 hover:text-teal-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact & Hours
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-teal-200 hover:text-teal-100 transition-colors"
                >
                  <Phone size={15} className="shrink-0 mt-0.5 text-teal-500" />
                  <span>{CLINIC.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CLINIC.phoneMobile.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-teal-200 hover:text-teal-100 transition-colors"
                >
                  <Phone size={15} className="shrink-0 mt-0.5 text-teal-500" />
                  <span>{CLINIC.phoneMobile}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="flex items-start gap-2 text-teal-200 hover:text-teal-100 transition-colors"
                >
                  <Mail size={15} className="shrink-0 mt-0.5 text-teal-500" />
                  <span>{CLINIC.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CLINIC.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-teal-200 hover:text-teal-100 transition-colors"
                >
                  <MapPin size={15} className="shrink-0 mt-0.5 text-teal-500" />
                  <span>{CLINIC.address.street}, {CLINIC.address.area}, {CLINIC.address.city}</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-navy-800">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={15} className="text-teal-500" />
                <span className="text-teal-100 text-sm font-medium">Opening Hours</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-teal-300">{h.day}</span>
                    <span className={h.time === "Closed" ? "text-teal-400" : "text-teal-100"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-teal-400">
            © {year} Clinic4U Dublin. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-teal-400">
            <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <span>Regulated by the Dental Council of Ireland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
