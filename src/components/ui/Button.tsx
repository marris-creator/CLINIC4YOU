import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const VARIANTS = {
  primary:
    "bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-glow active:scale-[0.98]",
  secondary:
    "bg-navy-900 hover:bg-navy-800 text-white shadow-md active:scale-[0.98]",
  ghost:
    "text-teal-600 hover:bg-teal-50 active:scale-[0.98]",
  outline:
    "border-2 border-teal-500 text-teal-600 hover:bg-teal-50 active:scale-[0.98]",
  danger:
    "bg-red-500 hover:bg-red-600 text-white shadow-md active:scale-[0.98]",
};

const SIZES = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
  xl: "text-lg px-8 py-4",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  disabled,
  type = "button",
  fullWidth,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && "w-full", className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} type={type} className={classes}>
      {children}
    </button>
  );
}
