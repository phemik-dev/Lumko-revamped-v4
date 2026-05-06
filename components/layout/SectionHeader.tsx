import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-lumko-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-bold tracking-normal text-inherit sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-pretty text-lg leading-8 text-ink-soft [.bg-deep_&]:text-blue-100 [.bg-ink_&]:text-blue-100">
          {body}
        </p>
      ) : null}
    </div>
  );
}
