import Link from "next/link";
import { cn } from "@/lib/cn";

type CTA = {
  label: string;
  href: string;
};

type CTAButtonsProps = {
  primary: CTA;
  secondary?: CTA;
  className?: string;
  inverse?: boolean;
};

export function CTAButtons({ primary, secondary, className, inverse }: CTAButtonsProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Link
        href={primary.href}
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sovereign-gold px-6 py-3 text-base font-semibold text-white shadow-calm transition hover:bg-sovereign-gold-dark"
      >
        {primary.label}
      </Link>
      {secondary ? (
        <Link
          href={secondary.href}
          className={cn(
            "inline-flex min-h-12 items-center justify-center rounded-lg border px-6 py-3 text-base font-semibold transition",
            inverse
              ? "border-white/25 text-white hover:bg-white/10"
              : "border-line text-lumko-blue hover:border-lumko-blue hover:bg-surface-blue"
          )}
        >
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
