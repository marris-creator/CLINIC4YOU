"use client";

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-navy-950 text-navy-200 text-sm">
      <div className="container-xl flex items-center justify-between py-2">
        {/* Left — contact snippets */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            aria-label="Call us"
          >
            <Phone size={13} className="shrink-0" />
            <span>{CLINIC.phone}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="shrink-0 text-teal-400" />
            <span>{CLINIC.address.area}, {CLINIC.address.city}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="shrink-0 text-teal-400" />
            <span>Mon–Fri 9–19h &nbsp;·&nbsp; Sat 9–14h</span>
          </span>
        </div>

        {/* Right — CTA */}
        <Link
          href="/booking"
          className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-1.5 rounded-full text-xs transition-colors focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
