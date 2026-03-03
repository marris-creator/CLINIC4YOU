import type { Metadata } from "next";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — Clinic4U Dublin",
  description: "Clinic4U Dublin privacy policy — how we collect, use and protect your personal data.",
  robots: { index: false },
};

export const runtime = "edge";

export default function PrivacyPolicyPage() {
  const updated = "1 January 2025";

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-xl max-w-3xl">
        <div className="bg-white rounded-3xl shadow-card border border-sand-100 p-8 md:p-12">
          <h1 className="font-display text-4xl text-navy-900 mb-2">Privacy Policy</h1>
          <p className="text-navy-400 text-sm mb-8">Last updated: {updated}</p>

          <div className="prose prose-navy max-w-none text-navy-600 text-sm leading-relaxed space-y-8">
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">1. Who We Are</h2>
              <p>
                {CLINIC.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a dental and aesthetic clinic operating at{" "}
                {CLINIC.address.street}, {CLINIC.address.area}, {CLINIC.address.city}, Ireland.
                We are the data controller for the personal data we collect. You can contact us at{" "}
                <a href={`mailto:${CLINIC.email}`} className="text-teal-600 hover:underline">{CLINIC.email}</a>{" "}
                or on <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="text-teal-600 hover:underline">{CLINIC.phone}</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">2. What Data We Collect</h2>
              <p>We may collect the following personal data:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Name, date of birth, contact details (phone, email, address)</li>
                <li>Medical and dental history, treatment records</li>
                <li>Payment information (processed securely by our payment provider)</li>
                <li>Appointment booking information</li>
                <li>Communications you send us (email, WhatsApp, phone)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Provide dental and aesthetic treatment and manage your care</li>
                <li>Book and manage appointments</li>
                <li>Process payments and manage PRSI benefit claims</li>
                <li>Communicate with you about your treatment and appointments</li>
                <li>Comply with our legal and regulatory obligations</li>
                <li>Send you appointment reminders (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">4. Legal Basis for Processing</h2>
              <p>
                We process your data on the basis of: (a) the performance of a contract (your treatment),
                (b) compliance with a legal obligation, (c) your consent (for marketing communications),
                and (d) our legitimate interests (operating a safe, well-run clinic).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">5. Data Retention</h2>
              <p>
                Dental records are retained for a minimum of 8 years in line with Irish dental regulations,
                or longer if required by law. Other personal data is retained only for as long as necessary
                for the purpose it was collected.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">6. Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure (subject to legal retention requirements)</li>
                <li>Object to processing or request restriction</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${CLINIC.email}`} className="text-teal-600 hover:underline">{CLINIC.email}</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">7. Third Parties</h2>
              <p>
                We may share your data with third-party service providers who help us operate our clinic
                (e.g., appointment booking platform, payment processor, dental labs). These providers
                are contractually bound to handle your data securely and in accordance with GDPR.
                We do not sell your data.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">8. Cookies</h2>
              <p>
                Our website uses essential cookies to ensure it functions correctly. We may use analytics
                cookies to understand how our site is used. You can manage cookie preferences in your
                browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-3">9. Complaints</h2>
              <p>
                If you have a concern about how we handle your data, please contact us first. You also
                have the right to lodge a complaint with the Data Protection Commission Ireland at{" "}
                <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  www.dataprotection.ie
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
