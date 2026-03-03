import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Clinic4U Dublin",
  description:
    "Frequently asked questions about Clinic4U Dublin: appointments, payment, PRSI benefit, dental and beauty treatments, opening hours, and emergency dentistry.",
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
