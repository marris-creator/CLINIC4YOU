import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PRSIWidget } from "@/components/sections/PRSIWidget";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { Reviews } from "@/components/sections/Reviews";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Clinic4U — Dublin Dental & Beauty Clinic | Phibsborough D7",
  description:
    "Welcome to Clinic4U — Dublin's specialist dental and aesthetic clinic in Phibsborough, D7. Dental implants, orthodontics, teeth whitening, lip fillers, anti-wrinkle injections & Profhilo. Walk-in welcome. Open 6 days.",
};

// ISR: revalidate every 24 hours
export const revalidate = 86400;

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <PRSIWidget />
      <TeamPreview />
      <Reviews />
      <AppointmentCTA />
    </>
  );
}
