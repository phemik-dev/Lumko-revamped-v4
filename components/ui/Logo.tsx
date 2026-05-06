import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline text-[1.72rem] font-bold tracking-normal text-ink"
      aria-label="LumkoMDX home"
    >
      <span>Lumko</span>
      <span className="text-sovereign-gold">MDX</span>
      <span className="ml-4 hidden border-l border-line pl-4 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-soft sm:inline">
        Sovereign by design
      </span>
    </Link>
  );
}
