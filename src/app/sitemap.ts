import type { MetadataRoute } from "next";
import { DENTAL_SERVICES, BEAUTY_SERVICES } from "@/lib/data";

const BASE_URL = "https://clinic4u.ie";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/dental`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/beauty`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/booking`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/faqs`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const dentalPages = DENTAL_SERVICES.map((s) => ({
    url: `${BASE_URL}/services/dental/${s.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const beautyPages = BEAUTY_SERVICES.map((s) => ({
    url: `${BASE_URL}/services/beauty/${s.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...dentalPages, ...beautyPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
