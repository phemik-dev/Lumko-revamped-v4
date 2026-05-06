import { CTAButtons } from "@/components/ui/CTAButtons";

type ClosingCTAProps = {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ClosingCTA({
  title,
  body,
  primaryLabel = "Request demo",
  primaryHref = "/request-demo",
  secondaryLabel,
  secondaryHref
}: ClosingCTAProps) {
  return (
    <div className="grid gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
      <div>
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">{body}</p>
      </div>
      <CTAButtons
        inverse
        primary={{ label: primaryLabel, href: primaryHref }}
        secondary={
          secondaryLabel && secondaryHref ? { label: secondaryLabel, href: secondaryHref } : undefined
        }
      />
    </div>
  );
}
