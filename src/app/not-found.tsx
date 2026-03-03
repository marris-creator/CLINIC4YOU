import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center bg-offwhite">
      <div className="container-xl text-center py-20">
        <div className="w-20 h-20 rounded-3xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-6">
          <span className="font-display text-3xl text-teal-600">?</span>
        </div>
        <h1 className="font-display text-5xl text-navy-900 mb-4">Page Not Found</h1>
        <p className="text-navy-500 text-lg max-w-md mx-auto mb-10">
          We couldn't find that page. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home size={18} /> Go to Homepage
          </Link>
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 border-2 border-navy-200 text-navy-700 font-semibold px-6 py-3 rounded-xl hover:border-teal-400 transition-colors"
          >
            <Phone size={18} /> {CLINIC.phone}
          </a>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm mt-8 hover:underline"
        >
          <ArrowLeft size={14} /> Back to Clinic4U
        </Link>
      </div>
    </section>
  );
}
