import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Activity,
  Zap,
  AlignCenter,
  Award,
  Scissors,
  Smile,
  AlertCircle,
  Heart,
  Star,
  User,
  Droplets,
  ArrowRight,
} from "lucide-react";
import type { Service } from "@/lib/data";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  tooth: Smile,
  sparkles: Sparkles,
  shield: ShieldCheck,
  activity: Activity,
  zap: Zap,
  "align-center": AlignCenter,
  award: Award,
  scissors: Scissors,
  smile: Smile,
  "alert-circle": AlertCircle,
  heart: Heart,
  star: Star,
  user: User,
  droplets: Droplets,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = ICONS[service.icon] ?? Sparkles;
  const href = `/services/${service.category}/${service.slug}`;

  return (
    <Link
      href={href}
      className="group bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover border border-sand-100 hover:border-teal-200 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
        <Icon size={24} className="text-teal-600" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display text-navy-900 text-lg mb-2 group-hover:text-teal-700 transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-navy-500 leading-relaxed line-clamp-2">{service.shortDesc}</p>
      </div>

      {/* Highlights */}
      {service.highlights && (
        <ul className="flex flex-wrap gap-1.5">
          {service.highlights.slice(0, 2).map((h) => (
            <li
              key={h}
              className="text-2xs bg-sand-100 text-navy-600 px-2.5 py-1 rounded-full font-medium"
            >
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="flex items-center gap-1 text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
        <span>Learn more</span>
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
