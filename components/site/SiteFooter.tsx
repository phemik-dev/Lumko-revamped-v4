import Link from "next/link";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path d="M7.2 9.4v8.4M7.2 6.3v.1M11 17.8v-5c0-2.2 1.3-3.5 3.2-3.5 1.8 0 2.8 1.2 2.8 3.4v5.1M11 9.6v8.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path d="M5 5l14 14M19 5l-5.7 6.2M10.7 12.8L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path d="M14.2 4v10.1a4.1 4.1 0 1 1-3.3-4M14.2 4c.4 2.9 2.1 4.8 4.8 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16.7 7.4h.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect x="3.8" y="6.6" width="16.4" height="10.8" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 9.6v4.8l4.1-2.4-4.1-2.4Z" fill="currentColor" />
      </svg>
    )
  }
];

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Three-Boundary Model", href: "/platform#three-boundary-model" },
      { label: "Product modules", href: "/platform#modules" },
      { label: "Query lifecycle", href: "/platform#query-lifecycle" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Resources", href: "/resources" },
      { label: "Company", href: "/company" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Copyright", href: "/legal#copyright" },
      { label: "Privacy", href: "/legal#privacy" },
      { label: "POPIA", href: "/legal#popia" },
      { label: "Terms", href: "/legal#terms" },
      { label: "Cookies", href: "/legal#cookies" }
    ]
  },
  {
    title: "Action",
    links: [
      { label: "Request demo", href: "/request-demo" },
      { label: "Developers", href: "/developers" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 border-b border-white/12 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Link href="/" className="inline-flex items-baseline text-[2rem] font-bold tracking-normal" aria-label="LumkoMDX home">
              <span className="text-white">Lumko</span>
              <span className="text-sovereign-gold">MDX</span>
            </Link>
            <p className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white">
              Healthcare data can be used without patient identity entering the platform.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
              Sovereign healthcare data infrastructure for institutions that need useful insight without surrendering identity, governance, or trust.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">
                  {column.title}
                </h2>
                <ul className="mt-4 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link className="text-sm font-semibold text-blue-100 transition hover:text-white" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 pt-8 text-sm leading-6 text-blue-100 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-3xl">
            LumkoMDX is designed around POPIA-aware governance, HL7 FHIR R4 alignment, immutable audit trails,
            k-anonymity at a floor of five, and the Three-Boundary Model.
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <div className="flex items-center gap-2" aria-label="Social media links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 text-blue-100 transition hover:border-sovereign-gold hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <Link
              href="/request-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/18 px-5 py-3 font-bold text-white transition hover:border-sovereign-gold hover:text-sovereign-gold"
            >
              Request demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
