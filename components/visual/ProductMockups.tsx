import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const modules = ["Cohort Builder", "FHIR Mapper", "Consent Registry", "Boundary Monitor", "Audit Ledger", "Response Console"];

function AppChrome({
  title,
  children,
  dark = false,
  className
}: {
  title: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border shadow-calm",
        dark ? "border-white/12 bg-midnight text-white" : "border-line bg-white text-ink",
        className
      )}
    >
      <div className={cn("flex min-h-14 items-center justify-between gap-4 border-b px-4 sm:px-5", dark ? "border-white/10" : "border-line")}>
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-sovereign-gold" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lumko-blue" />
          <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", dark ? "bg-white/35" : "bg-line")} />
          <p className={cn("ml-2 truncate text-sm font-bold tracking-[0.02em]", dark ? "text-blue-100" : "text-ink")}>
            LumkoMDX operating surface
          </p>
        </div>
        <span className={cn("shrink-0 rounded-full px-3 py-1 text-xs font-bold", dark ? "bg-white/10 text-blue-100" : "bg-surface-blue text-lumko-blue")}>
          {title}
        </span>
      </div>
      <div className={cn("grid grid-cols-4 text-[0.68rem] font-bold uppercase tracking-[0.12em]", dark ? "border-b border-white/10 text-blue-100" : "border-b border-line text-ink-soft")}>
        {["Source", "Consent", "k >= 5", "Audit"].map((item, index) => (
          <div key={item} className={cn("flex items-center gap-2 border-r px-4 py-2 last:border-r-0", dark ? "border-white/10" : "border-line")}>
            <span className={cn("h-2 w-2 rounded-full", index === 3 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

function ModuleRail({ active = "Cohort Builder", dark = false }: { active?: string; dark?: boolean }) {
  return (
    <aside className={cn("border-b p-4 lg:border-b-0 lg:border-r", dark ? "border-white/10 bg-white/[0.05]" : "border-line bg-surface")}>
      <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", dark ? "text-sovereign-gold" : "text-lumko-blue")}>
        Modules
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
        {modules.map((module) => (
          <div
            key={module}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-bold",
              active === module
                ? "bg-lumko-blue text-white"
                : dark
                  ? "bg-white/[0.04] text-blue-100"
                  : "bg-white text-ink-soft lg:bg-transparent"
            )}
          >
            {module}
          </div>
        ))}
      </div>
    </aside>
  );
}

export function PlatformInterfaceMockup({ active = "Cohort Builder" }: { active?: string }) {
  const rows = [
    ["HbA1c > 7.0", "3,847", "Research", "k >= 5", "evt_74A9"],
    ["TB follow-up gap", "1,206", "Public health", "k >= 5", "evt_81C2"],
    ["Hypertension", "8,942", "Clinical", "consented", "evt_19F4"]
  ];

  return (
    <AppChrome title="Boundary Monitor">
      <div className="grid lg:grid-cols-[12rem_1fr]">
        <ModuleRail active={active} />

        <main className="min-w-0 p-4">
          <div className="grid gap-4 xl:grid-cols-[1fr_0.52fr]">
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold-dark">Governed query canvas</p>
              <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-ink">Diabetes control cohort</h3>
                <span className="rounded-full bg-surface-blue px-3 py-1 text-xs font-bold text-lumko-blue">aggregate response</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Connected sites", "12"],
                  ["Eligible members", "3,847"],
                  ["Suppressed cells", "0"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-line bg-white px-4 py-3">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink-soft">{label}</p>
                    <p className="mt-1 text-xl font-bold text-ink">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Observation", "HbA1c"],
                  ["Age range", "35-64"],
                  ["Facilities", "12 connected"],
                  ["Identity fields", "excluded"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-line bg-surface px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">{label}</p>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-ink">{value}</span>
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lumko-blue" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line bg-deep p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Governance rail</p>
              <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.08] px-4 py-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue-100">Response type</p>
                <p className="mt-1 text-lg font-bold text-white">Aggregate only</p>
              </div>
              <div className="mt-5 grid gap-3">
                {["Consent verified", "Role approved", "k >= 5 passed", "Identity fields excluded", "Audit written"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.08] px-4 py-3">
                    <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", index >= 3 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
                    <span className="text-sm font-bold text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-line">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[1.1fr_0.5fr_0.72fr_0.6fr_0.62fr] bg-surface px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                <span>Cohort</span>
                <span>Members</span>
                <span>Scope</span>
                <span>Check</span>
                <span>Audit</span>
              </div>
              {rows.map((row) => (
                <div key={row[0]} className="grid grid-cols-[1.1fr_0.5fr_0.72fr_0.6fr_0.62fr] border-t border-line px-4 py-4 text-sm">
                  {row.map((cell, index) => (
                    <span key={cell} className={cn("truncate", index === 0 ? "font-bold text-ink" : "text-ink-soft")}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </AppChrome>
  );
}

export function DeveloperInterfaceMockup() {
  return (
    <AppChrome title="Response Console" dark>
      <div className="grid lg:grid-cols-[12rem_1fr]">
        <ModuleRail active="Response Console" dark />
        <main className="min-w-0 p-4">
          <div className="grid gap-4 xl:grid-cols-[1fr_0.76fr]">
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">FHIR request</p>
              <pre className="mt-4 overflow-x-auto text-sm leading-7 text-blue-100"><code>{`GET /v1/fhir/Observation
  ?code=4548-4
  &age=35-64
  &consentScope=research
  &identityFields=excluded`}</code></pre>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Response record</p>
              <div className="mt-4 grid gap-3">
                {[
                  ["identityPresent", "false"],
                  ["membersReturned", "3,847"],
                  ["kAnonymity", "passed"],
                  ["auditEvent", "evt_74A9"]
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-midnight px-4 py-3">
                    <span className="text-sm text-blue-100">{label}</span>
                    <span className="text-sm font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.06] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">Audit response</p>
            <p className="mt-3 text-base leading-7 text-blue-100">
              Consent scope, role policy, k-anonymity floor, timestamp, response type, and lineage are written with every permitted answer.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["201 written", "lineage linked", "raw records: none"].map((item) => (
                <span key={item} className="rounded-lg border border-white/10 bg-midnight px-3 py-2 text-xs font-bold text-blue-100">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </AppChrome>
  );
}

export function EvidenceRoomMockup() {
  return (
    <AppChrome title="Evaluation Room">
      <div className="grid gap-5 p-5 md:grid-cols-[0.72fr_1fr]">
        <div className="rounded-xl bg-deep p-6 text-white">
          <p className="text-xs font-bold tracking-[0.08em] text-sovereign-gold">LumkoMDX briefing</p>
          <h3 className="mt-8 text-3xl font-bold leading-tight">The Future of African Health Data</h3>
          <p className="mt-8 text-sm leading-6 text-blue-100">Regulation, standards, sovereignty, and the infrastructure gap.</p>
        </div>
        <div className="grid gap-4">
          {["Market study", "FHIR R4 standards note", "Governance architecture note", "Evaluation library"].map((item) => (
            <div key={item} className="rounded-xl border border-line bg-surface px-5 py-4">
              <p className="text-lg font-bold text-ink">{item}</p>
              <p className="mt-1 text-sm text-ink-soft">Evidence asset ready for institutional review</p>
            </div>
          ))}
        </div>
      </div>
    </AppChrome>
  );
}

export function DemoPathVisual() {
  return (
    <AppChrome title="Demo path">
      <div className="grid gap-5 p-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative overflow-hidden rounded-xl border border-line bg-deep p-5 text-white">
          <div className="absolute inset-0 premium-grid opacity-50" />
          <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Live walkthrough</p>
          <h3 className="mt-4 text-2xl font-bold text-white">From source boundary to audited response.</h3>
          <div className="mt-6 grid gap-2">
            {["source selected", "identity local", "FHIR R4 mapped", "k >= 5 passed", "audit written"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2.5">
                <span className={cn("h-2.5 w-2.5 rounded-full", index >= 3 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
                <span className="text-sm font-bold text-blue-100">{item}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="grid gap-4">
        {[
          ["1", "Boundary walkthrough", "Identity remains at source while governed structure moves."],
          ["2", "Live query", "Consent, role, k-anonymity, and audit checks execute in sequence."],
          ["3", "Response record", "The answer shows identity absent, aggregate response, and audit event."],
          ["4", "Evaluation path", "Clinical, technical, governance, and executive questions are mapped to review material."]
        ].map(([number, title, body]) => (
          <div key={number} className="grid gap-4 rounded-xl border border-line bg-surface p-5 sm:grid-cols-[auto_1fr]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lumko-blue text-base font-black text-white">{number}</div>
            <div>
              <p className="text-xl font-bold text-ink">{title}</p>
              <p className="mt-2 text-base leading-7 text-ink-soft">{body}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </AppChrome>
  );
}

export const PlatformProductMockup = PlatformInterfaceMockup;
export const DeveloperProductMockup = DeveloperInterfaceMockup;
export const DemoWalkthroughMockup = DemoPathVisual;
