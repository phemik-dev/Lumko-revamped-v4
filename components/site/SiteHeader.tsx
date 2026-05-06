"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

type MenuRoute = {
  label: string;
  body: string;
  href: string;
};

type MenuItem = {
  label: string;
  href: string;
  eyebrow: string;
  thesis: string;
  cta: string;
  ctaHref: string;
  routes: MenuRoute[];
  proofTitle: string;
  proof: string[];
  trust: string[];
};

const navItems: MenuItem[] = [
  {
    label: "Platform",
    href: "/platform",
    eyebrow: "Boundary architecture",
    thesis: "Identity remains local. Governed structure moves. Audited insight returns.",
    cta: "Open platform",
    ctaHref: "/platform",
    routes: [
      { label: "Three-Boundary Model", body: "Source, platform, authorised use", href: "/platform#three-boundary-model" },
      { label: "Product surface", body: "Modules and query canvas", href: "/platform#product-surface" },
      { label: "Product modules", body: "Cohort, FHIR, consent, audit", href: "/platform#modules" },
      { label: "Query lifecycle", body: "Request through audit event", href: "/platform#query-lifecycle" }
    ],
    proofTitle: "Operating model",
    proof: ["Source authority", "FHIR R4 structure", "Consent gate", "Audit ledger"],
    trust: ["Identity absent", "FHIR R4", "k >= 5"]
  },
  {
    label: "Solutions",
    href: "/solutions",
    eyebrow: "Role paths",
    thesis: "Different teams need different outcomes. The same boundary protects them all.",
    cta: "View solutions",
    ctaHref: "/solutions",
    routes: [
      { label: "Clinicians", body: "Care context without extracts", href: "/solutions#roles" },
      { label: "Researchers", body: "Consent-based discovery", href: "/solutions#roles" },
      { label: "Institutions", body: "Network insight with local control", href: "/solutions#roles" },
      { label: "Public health", body: "Population signal without exposure", href: "/solutions#roles" }
    ],
    proofTitle: "Useful by role",
    proof: ["Clinical context", "Research cohorts", "Institutional visibility", "Population insight"],
    trust: ["Identity absent", "Consent scope", "Audit"]
  },
  {
    label: "Developers",
    href: "/developers",
    eyebrow: "Implementation surface",
    thesis: "FHIR R4 requests, consent checks, k-anonymity, and audit events are visible in the interface.",
    cta: "Open developers",
    ctaHref: "/developers",
    routes: [
      { label: "FHIR interfaces", body: "Pseudonymous clinical resources", href: "/developers#interfaces" },
      { label: "Governed query", body: "Bounded request patterns", href: "/developers#response-contract" },
      { label: "Response record", body: "Identity false, audit written", href: "/developers#response-contract" },
      { label: "Controls", body: "Role, consent, k floor", href: "/developers#interfaces" }
    ],
    proofTitle: "Technical controls",
    proof: ["identityPresent: false", "kAnonymity: passed", "auditEvent: written", "FHIR_R4"],
    trust: ["FHIR R4", "k >= 5", "Audit"]
  },
  {
    label: "Resources",
    href: "/resources",
    eyebrow: "Evaluation evidence",
    thesis: "Sanitised knowledge for governance, technical, legal, and executive review.",
    cta: "Open resources",
    ctaHref: "/resources",
    routes: [
      { label: "Market study", body: "Competitive and regulatory view", href: "/resources#featured-report" },
      { label: "Standards note", body: "FHIR R4 and interoperability", href: "/resources#featured-report" },
      { label: "Governance note", body: "POPIA, consent, audit, k floor", href: "/resources#featured-report" },
      { label: "Resource library", body: "Papers, articles, announcements", href: "/resources#library" }
    ],
    proofTitle: "Knowledge base",
    proof: ["Market study", "FHIR R4 note", "Governance note", "Articles and updates"],
    trust: ["Evidence", "POPIA-aware", "Review-ready"]
  },
  {
    label: "Company",
    href: "/company",
    eyebrow: "Conviction",
    thesis: "African-led sovereign infrastructure, built around a boundary rather than a generic feature set.",
    cta: "Open company",
    ctaHref: "/company",
    routes: [
      { label: "Founding thesis", body: "Why this infrastructure must exist", href: "/company#conviction" },
      { label: "Operating principles", body: "Sovereignty, trust, usability", href: "/company#values" },
      { label: "Leadership", body: "The team building the layer", href: "/company#leadership" },
      { label: "Partnership", body: "Build with your institution", href: "/request-demo" }
    ],
    proofTitle: "Built for sovereignty",
    proof: ["African-led", "Institutional control", "Patient dignity", "FHIR aligned"],
    trust: ["Sovereignty", "Identity absent", "Trust"]
  }
];

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuGlyph({ active }: { active?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
        active ? "border-lumko-blue bg-lumko-blue text-white" : "border-line bg-white text-lumko-blue"
      )}
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h7M7 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobilePanel, setMobilePanel] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeItem = navItems.find((item) => item.label === activeMenu);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenu(label: string) {
    clearCloseTimer();
    setActiveMenu(label);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 130);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearCloseTimer();
        setActiveMenu(null);
        setOpenMobile(false);
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        clearCloseTimer();
        setActiveMenu(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      clearCloseTimer();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-white"
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const expanded = activeMenu === item.label;
            return (
              <div key={item.href} onMouseEnter={() => openMenu(item.label)}>
                <Link
                  href={item.href}
                  aria-expanded={expanded}
                  aria-controls="site-mega-menu"
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2 py-2 text-base font-semibold text-ink-soft transition hover:text-lumko-blue focus-visible:text-lumko-blue",
                    (active || expanded) && "text-lumko-blue"
                  )}
                  onFocus={() => openMenu(item.label)}
                >
                  {item.label}
                  <Chevron open={expanded} />
                </Link>
              </div>
            );
          })}
          <Link
            href="/request-demo"
            className="rounded-lg bg-sovereign-gold px-6 py-3 text-base font-semibold text-white shadow-calm transition hover:bg-sovereign-gold-dark"
          >
            Request demo
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={openMobile}
          onClick={() => setOpenMobile((value) => !value)}
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        id="site-mega-menu"
        className={cn(
          "absolute left-1/2 top-[calc(100%+0.65rem)] hidden w-[min(62rem,calc(100vw-3rem))] -translate-x-1/2 rounded-2xl border border-line bg-white shadow-[0_24px_70px_rgba(7,26,58,0.14)] transition lg:block",
          activeItem ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleClose}
      >
        {activeItem ? (
          <div className="grid min-h-[302px] overflow-hidden rounded-2xl lg:grid-cols-[0.72fr_1.1fr_0.72fr]">
            <div className="border-r border-line bg-surface p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-lumko-blue">{activeItem.eyebrow}</p>
              <h2 className="mt-3 text-xl font-bold leading-tight text-ink">{activeItem.label}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{activeItem.thesis}</p>
              <Link
                href={activeItem.ctaHref}
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-deep px-4 py-2 text-sm font-bold text-white transition hover:bg-ink"
                onClick={() => setActiveMenu(null)}
              >
                {activeItem.cta}
              </Link>
            </div>

            <div className="bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold-dark">Go directly to</p>
              <div className="mt-3 grid gap-1">
                {activeItem.routes.map((route) => {
                  const activeRoute = pathname === route.href || pathname === route.href.split("#")[0];
                  return (
                    <Link
                      key={route.href + route.label}
                      href={route.href}
                      className={cn(
                        "group grid grid-cols-[auto_1fr] gap-3 rounded-xl border border-transparent bg-white px-3 py-2 transition hover:border-line hover:bg-surface",
                        activeRoute && "border-line bg-surface-blue"
                      )}
                      onClick={() => setActiveMenu(null)}
                    >
                      <MenuGlyph active={activeRoute} />
                      <span>
                        <span className="block text-sm font-bold text-ink group-hover:text-lumko-blue">{route.label}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-ink-soft">{route.body}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-l border-line bg-deep p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">{activeItem.proofTitle}</p>
              <div className="mt-3 grid gap-2">
                {activeItem.proof.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
                    <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", index % 2 === 0 ? "bg-lumko-blue" : "bg-sovereign-gold")} />
                    <span className="text-sm font-bold text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line bg-white px-4 py-2.5 lg:col-span-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">Operating signals</span>
                {activeItem.trust.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {openMobile ? (
        <nav
          className="fixed inset-x-4 top-24 z-50 max-h-[calc(100vh-7rem)] overflow-auto rounded-2xl border border-line bg-white p-3 shadow-[0_24px_70px_rgba(7,26,58,0.18)] lg:hidden"
          aria-label="Mobile primary"
        >
          <div className="grid gap-2">
            {navItems.map((item) => {
              const expanded = mobilePanel === item.label;
              return (
                <div key={item.href} className="rounded-xl border border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-bold text-ink"
                    aria-expanded={expanded}
                    onClick={() => setMobilePanel(expanded ? null : item.label)}
                  >
                    {item.label}
                    <Chevron open={expanded} />
                  </button>
                  {expanded ? (
                    <div className="grid gap-2 border-t border-line bg-surface p-3">
                      {item.routes.slice(0, 4).map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className="rounded-lg bg-white px-3 py-2.5 text-sm"
                          onClick={() => setOpenMobile(false)}
                        >
                          <span className="block font-bold text-ink">{route.label}</span>
                          <span className="mt-0.5 block text-xs leading-5 text-ink-soft">{route.body}</span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link
              href="/request-demo"
              className="rounded-lg bg-sovereign-gold px-4 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpenMobile(false)}
            >
              Request demo
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
