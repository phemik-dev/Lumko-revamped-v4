import Link from "next/link";

export default function Custom404() {
  return (
    <main className="sovereign-halo min-h-screen border-b border-line px-6 py-24 font-sans text-ink">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-lumko-blue">Page not found</p>
        <h1 className="mt-5 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
          This route is outside the platform boundary.
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">
          Return to the LumkoMDX homepage or continue exploring the platform model.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sovereign-gold px-6 py-3 text-base font-semibold text-white shadow-calm transition hover:bg-sovereign-gold-dark"
          >
            Go home
          </Link>
          <Link
            href="/platform"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line px-6 py-3 text-base font-semibold text-lumko-blue transition hover:border-lumko-blue hover:bg-surface-blue"
          >
            Explore platform
          </Link>
        </div>
      </div>
    </main>
  );
}
