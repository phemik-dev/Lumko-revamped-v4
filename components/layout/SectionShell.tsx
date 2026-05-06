import { cn } from "@/lib/cn";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "soft" | "dark";
};

export function SectionShell({
  children,
  className,
  id,
  tone = "white"
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-line",
        tone === "white" && "",
        tone === "soft" && "bg-surface",
        tone === "dark" && "bg-ink text-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">{children}</div>
    </section>
  );
}
