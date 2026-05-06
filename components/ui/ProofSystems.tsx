import Link from "next/link";
import { cn } from "@/lib/cn";

type ProofMetric = {
  label: string;
  value: string;
};

type ProofRailItem = {
  label: string;
  body: string;
};

export function ProofMetricStrip({ items, className }: { items: ProofMetric[]; className?: string }) {
  return (
    <div className={cn("grid overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_0_rgba(7,26,58,0.03)] sm:grid-cols-5", className)}>
      {items.map((item) => (
        <div key={item.label} className="border-b border-line px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-lumko-blue">{item.label}</p>
          <p className="mt-2 text-base font-bold text-ink">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function DesktopProofRail({ title, items }: { title: string; items: ProofRailItem[] }) {
  return (
    <aside className="hidden rounded-2xl border border-line bg-white p-5 shadow-[0_1px_0_rgba(7,26,58,0.03)] lg:block">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold-dark">{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-line bg-surface px-4 py-3">
            <p className="text-sm font-bold text-ink">{item.label}</p>
            <p className="mt-1 text-sm leading-6 text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

type ComparisonItem = {
  title: string;
  oldWay: string;
  lumkoWay: string;
};

export function ComparisonBand({ items }: { items: ComparisonItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-premium">
      <div className="grid border-b border-line bg-deep px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-blue-100 sm:grid-cols-[0.68fr_1fr_1.08fr]">
        <span>Model</span>
        <span className="hidden sm:block">Exposure path</span>
        <span className="hidden sm:block text-sovereign-gold">Architectural correction</span>
      </div>
      {items.map((item, index) => (
        <article key={item.title} className="grid gap-4 border-b border-line px-5 py-5 last:border-b-0 sm:grid-cols-[0.68fr_1fr_1.08fr]">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-xs font-black text-lumko-blue">
              {index + 1}
            </span>
            <h3 className="text-lg font-bold text-ink">{item.title}</h3>
          </div>
          <div className="relative rounded-xl border border-line bg-surface px-4 py-3">
            <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-line sm:block" />
            <p className="text-base leading-7 text-ink-soft">{item.oldWay}</p>
          </div>
          <div className="relative rounded-xl border border-sovereign-gold/35 bg-sovereign-gold-soft px-4 py-3">
            <span className="absolute -left-2 top-1/2 hidden h-2 w-2 rounded-full bg-sovereign-gold sm:block" />
            <p className="text-base font-semibold leading-7 text-ink">{item.lumkoWay}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

type EvidencePanelProps = {
  eyebrow: string;
  title: string;
  body: string;
  meta?: string;
};

type ProofMoment = {
  eyebrow: string;
  title: string;
  body: string;
  proof: string[];
  inverse?: boolean;
};

type AudienceEvidence = {
  audience: string;
  title: string;
  body: string;
  proof: string;
};

type RoleOutcome = {
  role: string;
  problem: string;
  answer: string;
  proof: string;
};

type Feature = {
  title: string;
  body: string;
};

export function EvidencePanel({ eyebrow, title, body, meta }: EvidencePanelProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_1px_0_rgba(7,26,58,0.03)]">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-lumko-blue">{eyebrow}</p>
      <h3 className="mt-5 text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-4 text-base leading-7 text-ink-soft">{body}</p>
      {meta ? <p className="mt-auto pt-6 text-sm font-bold text-sovereign-gold-dark">{meta}</p> : null}
    </article>
  );
}

export function CategoryClaimBand() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-deep p-8 text-white shadow-premium lg:p-10">
      <div className="absolute inset-0 premium-grid opacity-55" />
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sovereign-gold">Category claim</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-white">
            The next infrastructure layer is defined by what it refuses to hold.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Identity", "Absent by architecture"],
            ["Governance", "Structural before access"],
            ["Standards", "FHIR R4 aligned"],
            ["Response", "Useful, aggregate, audited"]
          ].map(([label, value]) => (
            <div key={label} className="proof-shimmer rounded-xl border border-white/12 bg-white/[0.08] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">{label}</p>
              <p className="mt-2 text-lg font-bold text-blue-100">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EditorialProofBand({
  eyebrow,
  title,
  body,
  features,
  dark = false
}: {
  eyebrow: string;
  title: string;
  body: string;
  features: Feature[];
  dark?: boolean;
}) {
  return (
    <div className={cn(
      "overflow-hidden rounded-2xl border shadow-premium",
      dark ? "border-white/12 bg-deep text-white" : "border-line bg-white text-ink"
    )}>
      <div className={cn("grid gap-0 lg:grid-cols-[0.9fr_1.1fr]", dark && "premium-grid")}>
        <div className={cn("p-8 lg:p-10", dark ? "border-white/10" : "border-line lg:border-r")}>
          <p className={cn("text-xs font-bold uppercase tracking-[0.16em]", dark ? "text-sovereign-gold" : "text-lumko-blue")}>{eyebrow}</p>
          <h2 className={cn("mt-5 text-4xl font-bold leading-tight", dark ? "text-white" : "text-ink")}>{title}</h2>
          <p className={cn("mt-5 text-lg leading-8", dark ? "text-blue-100" : "text-ink-soft")}>{body}</p>
        </div>
        <div className={cn("grid content-center gap-0", dark ? "bg-white/[0.04]" : "bg-surface")}>
          {features.map((feature, index) => (
            <article key={feature.title} className={cn(
              "grid gap-4 border-b p-6 last:border-b-0 sm:grid-cols-[auto_1fr]",
              dark ? "border-white/10" : "border-line"
            )}>
              <div className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border text-sm font-black",
                dark ? "border-sovereign-gold/40 text-sovereign-gold" : "border-sovereign-gold/45 bg-sovereign-gold-soft text-sovereign-gold-dark"
              )}>
                {index + 1}
              </div>
              <div>
                <h3 className={cn("text-xl font-bold", dark ? "text-white" : "text-ink")}>{feature.title}</h3>
                <p className={cn("mt-2 text-base leading-7", dark ? "text-blue-100" : "text-ink-soft")}>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ModuleSystemPanel({ modules }: { modules: Array<{ eyebrow: string; title: string; body: string }> }) {
  const primary = modules[0];
  const supporting = modules.slice(1);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-calm">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <article className="relative overflow-hidden bg-deep p-7 text-white">
          <div className="absolute inset-0 premium-grid opacity-60" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sovereign-gold">{primary.eyebrow}</p>
            <h3 className="mt-5 text-4xl font-bold leading-tight text-white">{primary.title}</h3>
            <p className="mt-5 text-lg leading-8 text-blue-100">{primary.body}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Consent checked", "Role approved", "k >= 5 passed", "Audit written"].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-bold text-blue-100">
                  <span className={cn("mr-2 inline-block h-2.5 w-2.5 rounded-full", index > 1 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </article>
        <div className="grid gap-0 sm:grid-cols-2">
          {supporting.map((module) => (
            <article key={module.title} className="border-b border-line p-6 even:sm:border-l sm:[&:nth-last-child(-n+2)]:border-b-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-lumko-blue">{module.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-bold text-ink">{module.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{module.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PageProofMoment({ eyebrow, title, body, proof, inverse = false }: ProofMoment) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border p-7 shadow-calm lg:p-8",
      inverse ? "border-white/12 bg-white/[0.06] text-white" : "border-line bg-white text-ink"
    )}>
      <div className={cn("absolute inset-x-0 top-0 h-1 route-signal", inverse ? "opacity-80" : "opacity-70")} />
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", inverse ? "text-sovereign-gold" : "text-lumko-blue")}>{eyebrow}</p>
          <h3 className={cn("mt-4 text-3xl font-bold leading-tight", inverse ? "text-white" : "text-ink")}>{title}</h3>
          <p className={cn("mt-4 text-base leading-7", inverse ? "text-blue-100" : "text-ink-soft")}>{body}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {proof.map((item, index) => (
            <div
              key={item}
              className={cn(
                "rounded-xl border px-4 py-3",
                inverse ? "border-white/12 bg-white/[0.08]" : "border-line bg-surface",
                index === proof.length - 1 && "gold-lock"
              )}
            >
              <span className={cn("mb-3 block h-2.5 w-2.5 rounded-full", index === proof.length - 1 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
              <p className={cn("text-sm font-bold", inverse ? "text-blue-100" : "text-ink")}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AudienceEvidenceGrid({ items }: { items: AudienceEvidence[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.audience} className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_1px_0_rgba(7,26,58,0.03)]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold-dark">{item.audience}</p>
          <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{item.body}</p>
          <p className="mt-auto pt-5 text-xs font-bold uppercase tracking-[0.12em] text-lumko-blue">{item.proof}</p>
        </article>
      ))}
    </div>
  );
}

export function GovernedLifecycleVisual() {
  const steps = [
    { label: "Request", body: "Bounded question", status: "submitted", tone: "blue" },
    { label: "Consent", body: "Scope checked", status: "verified", tone: "gold" },
    { label: "Role", body: "Access approved", status: "approved", tone: "blue" },
    { label: "k >= 5", body: "Floor enforced", status: "passed", tone: "gold" },
    { label: "Audit", body: "Event written", status: "evt_74A9", tone: "blue" },
    { label: "Response", body: "Aggregate only", status: "released", tone: "gold" }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-premium">
      <div className="absolute inset-0 atlas-grid opacity-45" />
      <div className="relative flex items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sovereign-gold-dark">Governed route</p>
          <h3 className="mt-2 text-2xl font-bold text-ink">A query earns its response.</h3>
        </div>
        <span className="hidden rounded-full bg-surface-blue px-4 py-2 text-xs font-bold text-lumko-blue sm:inline-flex">
          identityPresent: false
        </span>
      </div>
      <div className="relative mt-8">
        <div className="route-signal absolute left-8 right-8 top-10 hidden h-1 rounded-full lg:block" />
        <div className="grid gap-4 lg:grid-cols-6">
          {steps.map((step, index) => (
            <article key={step.label} className="relative rounded-2xl border border-line bg-white p-4">
              <div className={cn(
                "relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-lg font-black",
                step.tone === "gold" ? "gold-lock bg-sovereign-gold text-white" : "bg-lumko-blue text-white"
              )}>
                {index + 1}
              </div>
              <h4 className="mt-5 text-xl font-bold text-ink">{step.label}</h4>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
              <p className={cn(
                "mt-4 rounded-full px-3 py-1.5 text-xs font-bold",
                step.tone === "gold" ? "bg-sovereign-gold-soft text-sovereign-gold-dark" : "bg-surface-blue text-lumko-blue"
              )}>
                {step.status}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="relative mt-5 grid gap-3 rounded-xl border border-line bg-deep p-4 text-white sm:grid-cols-4">
        {["raw records: none", "identity fields: excluded", "members: aggregate", "audit: written"].map((item) => (
          <div key={item} className="rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-bold text-blue-100">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoleOutcomeMatrix({ items }: { items: RoleOutcome[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-calm">
      <div className="grid border-b border-line bg-deep px-5 py-4 text-xs font-bold uppercase tracking-[0.13em] text-blue-100 md:grid-cols-[0.55fr_1fr_1fr_0.72fr]">
        <span>Role</span>
        <span className="hidden md:block">Operating problem</span>
        <span className="hidden md:block">Governed answer</span>
        <span className="hidden md:block">Signal</span>
      </div>
      {items.map((item) => (
        <article key={item.role} className="grid gap-4 border-b border-line px-5 py-5 last:border-b-0 md:grid-cols-[0.55fr_1fr_1fr_0.72fr]">
          <h3 className="text-lg font-bold text-ink">{item.role}</h3>
          <p className="text-base leading-7 text-ink-soft">{item.problem}</p>
          <p className="text-base font-semibold leading-7 text-ink">{item.answer}</p>
          <p className="h-fit rounded-full bg-sovereign-gold-soft px-3 py-2 text-xs font-bold text-sovereign-gold-dark">{item.proof}</p>
        </article>
      ))}
    </div>
  );
}

export function EvaluationCTA({
  title = "Build the internal case with evidence.",
  body = "Get the market study, standards notes, governance architecture summary, and implementation brief in one review-ready knowledge set.",
  primaryLabel = "Request knowledge set",
  primaryHref = "/request-demo",
  secondaryLabel = "Talk to us",
  secondaryHref = "/request-demo"
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="grid gap-8 rounded-2xl border border-white/12 bg-white/[0.06] p-8 text-white lg:grid-cols-[1fr_auto] lg:items-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Knowledge set</p>
        <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">{body}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href={primaryHref} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sovereign-gold px-5 py-3 font-bold text-white transition hover:bg-sovereign-gold-dark">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/18 px-5 py-3 font-bold text-white transition hover:border-sovereign-gold hover:text-sovereign-gold">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

type AssuranceItem = {
  audience: string;
  title: string;
  body: string;
  proof: string;
};

const defaultAssuranceItems: AssuranceItem[] = [
  {
    audience: "Executive",
    title: "The category case",
    body: "Why the access-versus-privacy tradeoff is an infrastructure failure, not an operating inevitability.",
    proof: "Market study"
  },
  {
    audience: "Governance",
    title: "The control case",
    body: "How consent, audit, POPIA-aware governance, and the k-anonymity floor operate before any response leaves.",
    proof: "Governance note"
  },
  {
    audience: "Technical",
    title: "The implementation case",
    body: "FHIR R4 alignment, source-system authority, pseudonymous identifiers, response metadata, and audit lineage.",
    proof: "Architecture brief"
  },
  {
    audience: "Clinical",
    title: "The usefulness case",
    body: "How governed aggregate intelligence can support care, research, institutions, and public health without identity exposure.",
    proof: "Use-case brief"
  }
];

export function AssuranceLedger({ items = defaultAssuranceItems }: { items?: AssuranceItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-calm">
      <div className="grid border-b border-line bg-deep text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Evaluation ledger</p>
          <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
            Evidence that survives the room it is forwarded into.
          </h3>
        </div>
        <div className="grid gap-3 p-7 sm:grid-cols-2">
          {["Identity absent", "FHIR R4", "Consent scope", "Audit trail"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3">
              <p className="text-sm font-bold text-blue-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.audience} className="border-b border-line p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-lumko-blue">{item.audience}</p>
            <h4 className="mt-4 text-xl font-bold text-ink">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-ink-soft">{item.body}</p>
            <p className="mt-6 rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-sovereign-gold-dark">
              {item.proof}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function OperatingModelBoard() {
  const zones = [
    {
      label: "Source authority",
      title: "Identity remains local",
      body: "Names, identifiers, and local patient mappings stay with the originating institution.",
      marker: "No patient identity enters LumkoMDX"
    },
    {
      label: "LumkoMDX boundary",
      title: "Structure becomes usable",
      body: "FHIR R4 resources, pseudonymous IDs, consent scope, policy, k floor, and audit metadata form the governed layer.",
      marker: "Governance is structural"
    },
    {
      label: "Authorised use",
      title: "Insight returns safely",
      body: "Clinicians, researchers, institutions, and public health teams receive aggregate intelligence with a response record.",
      marker: "Useful answers, no raw identity"
    }
  ];

  const checks = ["Consent verified", "Role approved", "k >= 5 passed", "Audit written"];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-premium">
      <div className="grid border-b border-line bg-deep text-white lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Architectural correction</p>
          <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
            The boundary makes the old tradeoff unnecessary.
          </h3>
        </div>
        <div className="grid gap-3 p-7 sm:grid-cols-4">
          {checks.map((item, index) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3">
              <span className={cn("mb-3 block h-2.5 w-2.5 rounded-full", index === 3 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
              <p className="text-sm font-bold leading-5 text-blue-100">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid gap-0 bg-surface lg:grid-cols-3">
        <div className="absolute inset-0 atlas-grid opacity-50" />
        <div className="signal-horizontal absolute left-[14%] right-[14%] top-20 hidden h-1 rounded-full lg:block" />
        {zones.map((zone, index) => (
          <article key={zone.label} className="relative min-h-[360px] border-b border-line bg-white/72 p-6 backdrop-blur-sm last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-lumko-blue">{zone.label}</p>
              </div>
              <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sovereign-gold/45 bg-white text-sm font-black text-sovereign-gold-dark shadow-calm">
                {index + 1}
              </span>
            </div>
            <h4 className="mt-16 max-w-xs text-3xl font-bold leading-tight text-ink">{zone.title}</h4>
            <p className="mt-5 max-w-sm text-base leading-7 text-ink-soft">{zone.body}</p>
            <p className="mt-8 w-fit rounded-full bg-white px-4 py-2 text-xs font-bold text-sovereign-gold-dark shadow-[0_1px_0_rgba(7,26,58,0.06)]">
              {zone.marker}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
