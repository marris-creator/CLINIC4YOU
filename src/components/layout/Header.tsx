"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { CLINIC } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Dental Treatments", href: "/services/dental" },
      { label: "Beauty Treatments", href: "/services/beauty" },
    ],
  },
  { label: "About & Team", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white border-b border-sand-200"
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Clinic4U Home">
          <div className="w-9 h-9 rounded-xl bg-gradient-teal flex items-center justify-center text-white font-display text-lg font-bold shadow-glow group-hover:scale-105 transition-transform">
            4U
          </div>
          <div className="leading-tight">
            <span className="block font-display text-navy-900 text-xl">Clinic4U</span>
            <span className="block text-teal-600 text-2xs font-semibold uppercase tracking-widest -mt-1">
              Dublin
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-teal-600 bg-teal-50"
                      : "text-navy-700 hover:text-teal-600 hover:bg-teal-50"
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-card border border-sand-200 overflow-hidden transition-all duration-200 ${
                    openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-700 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-teal-600 bg-teal-50"
                    : "text-navy-700 hover:text-teal-600 hover:bg-teal-50"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-navy-700 hover:text-teal-600 transition-colors font-medium"
          >
            <Phone size={16} />
            {CLINIC.phone}
          </a>
          <Link
            href="/booking"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-md hover:shadow-glow"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-sand-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-sand-200 py-4">
          <nav className="container-xl flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-navy-700 hover:text-teal-600 hover:bg-teal-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-navy-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-sand-200 flex flex-col gap-3 px-4">
              <a
                href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-navy-700 font-medium"
              >
                <Phone size={18} className="text-teal-500" />
                {CLINIC.phone}
              </a>
              <Link
                href="/booking"
                className="bg-teal-500 text-white font-semibold px-5 py-3 rounded-xl text-sm text-center transition-colors hover:bg-teal-600"
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
