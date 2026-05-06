import { cn } from "@/lib/cn";

const color = {
  background: "rgb(var(--color-background))",
  ink: "rgb(var(--color-ink))",
  inkSoft: "rgb(var(--color-ink-soft))",
  line: "rgb(var(--color-line))",
  surface: "rgb(var(--color-surface))",
  surfaceBlue: "rgb(var(--color-surface-blue))",
  blue: "rgb(var(--color-lumko-blue))",
  blueDark: "rgb(var(--color-lumko-blue-dark))",
  gold: "rgb(var(--color-sovereign-gold))",
  goldDark: "rgb(var(--color-sovereign-gold-dark))",
  goldSoft: "rgb(var(--color-sovereign-gold-soft))",
  deep: "rgb(var(--color-deep))",
  deep2: "rgb(var(--color-deep-2))",
  blue100: "#dbeafe",
  white: "#ffffff"
};

function MapNode({
  x,
  y,
  title,
  body,
  tone = "light"
}: {
  x: number;
  y: number;
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <g>
      <rect
        x={x - 58}
        y={y - 26}
        width="116"
        height="52"
        rx="14"
        fill={dark ? color.deep : color.white}
        stroke={dark ? color.deep2 : color.line}
      />
      <circle cx={x - 36} cy={y - 3} r="6" fill={dark ? color.gold : color.blue} />
      <text x={x - 22} y={y - 5} fill={dark ? color.white : color.ink} fontSize="11" fontWeight="800">
        {title}
      </text>
      <text x={x - 22} y={y + 12} fill={dark ? color.blue100 : color.inkSoft} fontSize="9.5">
        {body}
      </text>
    </g>
  );
}

export function SovereignFederationVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-premium">
      <div className="relative min-h-[420px] bg-surface p-5 sm:min-h-[530px]">
        <div className="absolute inset-0 atlas-grid opacity-70" />
        <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between rounded-full border border-line bg-white/90 px-4 py-2 text-xs font-bold">
          <span className="text-sovereign-gold-dark">Sovereign Federation Atlas</span>
          <span className="inline-flex items-center gap-2 text-lumko-blue">
            <span className="gold-lock h-2.5 w-2.5 rounded-full bg-sovereign-gold" />
            identity locked at source
          </span>
        </div>
        <svg className="relative mt-8 h-full min-h-[330px] w-full sm:min-h-[430px]" viewBox="0 0 720 500" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="atlasGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={color.white} />
              <stop offset="58%" stopColor={color.surfaceBlue} />
              <stop offset="100%" stopColor={color.surface} />
            </radialGradient>
            <linearGradient id="signalGold" x1="120" y1="78" x2="600" y2="390" gradientUnits="userSpaceOnUse">
              <stop stopColor={color.gold} stopOpacity="0.2" />
              <stop offset="0.5" stopColor={color.blue} stopOpacity="0.72" />
              <stop offset="1" stopColor={color.gold} stopOpacity="0.55" />
            </linearGradient>
            <filter id="atlasShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor={color.ink} floodOpacity="0.16" />
            </filter>
          </defs>

          <path d="M190 110C260 64 356 76 421 122C498 177 548 165 603 224C660 286 599 384 492 404C395 422 331 381 254 402C160 427 76 355 94 267C107 199 128 150 190 110Z" fill={color.white} stroke={color.line} />
          <ellipse cx="360" cy="250" rx="254" ry="158" stroke={color.line} strokeDasharray="5 14" />
          <ellipse cx="360" cy="250" rx="172" ry="106" stroke={color.goldSoft} strokeDasharray="4 12" />
          <path className="signal-line" d="M136 124C242 102 303 155 360 244C415 331 490 380 594 350" stroke="url(#signalGold)" strokeWidth="2.6" strokeLinecap="round" />
          <path className="signal-line-slow" d="M128 374C232 388 291 333 360 256C430 178 482 126 596 138" stroke={color.blue} strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
          <path d="M136 124C232 184 273 209 360 250C446 291 498 314 594 350" stroke={color.inkSoft} strokeWidth="1.1" strokeDasharray="3 10" opacity="0.45" />
          <path d="M128 374C236 315 280 288 360 250C445 210 496 184 596 138" stroke={color.inkSoft} strokeWidth="1.1" strokeDasharray="3 10" opacity="0.45" />

          <g filter="url(#atlasShadow)">
            <circle cx="360" cy="250" r="92" fill="url(#atlasGlow)" stroke={color.line} />
            <circle className="pulse-soft" cx="360" cy="250" r="58" fill={color.deep} />
            <path d="M336 238h52M336 253h38M336 268h47" stroke={color.white} strokeWidth="4.5" strokeLinecap="round" />
            <text x="360" y="203" textAnchor="middle" fill={color.goldDark} fontSize="13" fontWeight="800">
              LumkoMDX
            </text>
            <text x="360" y="317" textAnchor="middle" fill={color.inkSoft} fontSize="10" fontWeight="800" letterSpacing="1.5">
              GOVERNED STRUCTURE ONLY
            </text>
          </g>

          <MapNode x={136} y={124} title="Hospital" body="identity local" />
          <MapNode x={596} y={138} title="Lab network" body="FHIR source" />
          <MapNode x={128} y={374} title="Clinic" body="consent scope" />
          <MapNode x={594} y={350} title="Authorised use" body="aggregate only" tone="dark" />

          <g className="gold-lock">
            <circle cx="136" cy="90" r="18" fill={color.goldSoft} stroke={color.gold} />
            <path d="M128 91h16M131 91v-5a5 5 0 0 1 10 0v5M130 91v9h12v-9" stroke={color.goldDark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <g className="float-soft-delay">
            <rect x="478" y="234" width="132" height="42" rx="21" fill={color.white} stroke={color.line} />
            <circle cx="499" cy="255" r="6" fill={color.gold} />
            <text x="515" y="260" fill={color.ink} fontSize="12" fontWeight="800">
              audit written
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function SovereignFederationMini() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-calm">
      <div className="relative h-36 bg-surface">
        <div className="absolute inset-0 atlas-grid opacity-70" />
        <svg className="relative h-full w-full" viewBox="0 0 360 144" fill="none" aria-hidden="true">
          <path className="signal-line" d="M54 44C106 35 136 58 180 72C225 88 256 105 310 95" stroke={color.blue} strokeWidth="2.2" strokeLinecap="round" opacity="0.72" />
          <path className="signal-line-slow" d="M52 104C112 105 143 89 180 72C220 54 255 42 308 46" stroke={color.gold} strokeWidth="2.2" strokeLinecap="round" opacity="0.68" />
          <circle cx="180" cy="72" r="34" fill={color.white} stroke={color.line} />
          <circle className="pulse-soft" cx="180" cy="72" r="21" fill={color.deep} />
          <path d="M171 67h20M171 74h15M171 81h18" stroke={color.white} strokeWidth="2.5" strokeLinecap="round" />
          {[
            [54, 44, "source"],
            [308, 46, "FHIR"],
            [52, 104, "consent"],
            [310, 95, "insight"]
          ].map(([x, y, label]) => (
            <g key={label.toString()}>
              <rect x={Number(x) - 28} y={Number(y) - 14} width="56" height="28" rx="10" fill={color.white} stroke={color.line} />
              <circle cx={Number(x) - 16} cy={Number(y)} r="3" fill={label === "insight" ? color.gold : color.blue} />
              <text x={Number(x) - 9} y={Number(y) + 4} fill={color.inkSoft} fontSize="7.5" fontWeight="800">
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="grid grid-cols-3 border-t border-line text-center">
        {["local", "governed", "audited"].map((item) => (
          <p key={item} className="border-r border-line px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink-soft last:border-r-0">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export function BoundaryArchitectureVisual({ dark = true }: { dark?: boolean }) {
  const zones = [
    ["01", "Source systems", "Names, identifiers, and identity mapping remain under institutional authority.", "Local identity"],
    ["02", "LumkoMDX platform", "FHIR R4 structure, pseudonymous IDs, consent scope, and audit metadata.", "Governed structure"],
    ["03", "Authorised use", "Aggregate intelligence exits only after role, consent, k floor, and audit checks.", "Useful response"]
  ];

  return (
    <div className={cn("overflow-hidden rounded-2xl border p-2 shadow-calm", dark ? "border-white/12 bg-white/8" : "border-line bg-white")}>
      <div className={cn("relative overflow-hidden rounded-xl p-5", dark ? "premium-grid text-white" : "atlas-grid bg-surface text-ink")}>
        <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <p className={cn("text-xs font-bold uppercase tracking-[0.16em]", dark ? "text-sovereign-gold" : "text-sovereign-gold-dark")}>
            Three-Boundary Model
          </p>
          <p className={cn("rounded-full px-3 py-1 text-xs font-bold", dark ? "bg-white/10 text-blue-100" : "bg-white text-lumko-blue")}>
            k floor: 5
          </p>
        </div>
        <div className="relative mt-5 grid gap-4 lg:grid-cols-3">
          <div className="signal-horizontal absolute left-[12%] right-[12%] top-[4.5rem] hidden h-px bg-lumko-blue/40 lg:block" />
          {zones.map(([number, title, body, badge]) => (
            <article
              key={number}
              className={cn(
                "relative grid gap-4 rounded-xl border p-5",
                dark ? "border-white/12 bg-white/[0.07]" : "border-line bg-white"
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <div className={cn("flex h-14 w-14 items-center justify-center rounded-full border text-lg font-black", dark ? "border-sovereign-gold/40 text-sovereign-gold" : "border-sovereign-gold/45 text-sovereign-gold-dark")}>
                  {number}
                </div>
                <span className={cn("w-fit rounded-lg border px-3 py-2 text-sm font-bold", dark ? "border-white/12 text-white" : "border-line bg-surface text-ink")}>
                  {badge}
                </span>
              </div>
              <div>
                <h3 className={cn("text-2xl font-bold", dark ? "text-white" : "text-ink")}>{title}</h3>
                <p className={cn("mt-2 max-w-xl text-base leading-7", dark ? "text-blue-100" : "text-ink-soft")}>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DeveloperConsoleVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-midnight text-white shadow-calm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-sovereign-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-lumko-blue" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="ml-2 truncate text-sm font-bold text-blue-100">LumkoMDX governed query console</span>
        </div>
        <span className="rounded-full bg-lumko-blue/18 px-3 py-1 text-xs font-bold text-blue-100">FHIR R4</span>
      </div>
      <div className="grid lg:grid-cols-[1fr_0.62fr]">
        <div className="relative">
        <div className="scan-vertical absolute left-0 right-0 top-0 h-px bg-lumko-blue/70 shadow-[0_0_24px_rgb(var(--color-lumko-blue)/0.7)]" />
        <pre className="overflow-x-auto p-6 text-sm leading-7 text-blue-100"><code>{`POST /v1/cohorts/query
{
  "resource": "Observation",
  "standard": "FHIR_R4",
  "consentScope": "research",
  "kAnonymityFloor": 5,
  "identityFields": "excluded"
}

200 OK
{
  "membersReturned": 3847,
  "identityPresent": false,
  "auditEvent": "written"
}`}</code></pre>
        </div>
        <div className="border-t border-white/10 p-5 lg:border-l lg:border-t-0">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold">Consent gate</p>
          <div className="mt-4 grid gap-3">
            {["Scope: research", "Role: approved", "Identity: excluded", "Audit: evt_74A9"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3">
                <span className={cn("h-2.5 w-2.5 rounded-full", index === 3 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
                <span className="text-sm font-bold text-blue-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EvidenceRoomVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-premium">
      <div className="grid gap-0 lg:aspect-[16/10] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[330px] bg-deep p-7 text-white">
          <div className="absolute inset-0 atlas-grid opacity-20" />
          <div className="absolute left-10 top-20 h-52 w-40 rotate-[-8deg] rounded-xl border border-white/12 bg-white/[0.08]" />
          <div className="absolute left-28 top-14 h-60 w-44 rotate-[5deg] rounded-xl border border-white/14 bg-white/[0.11]" />
          <div className="absolute bottom-8 right-8 h-48 w-48 rounded-full border border-sovereign-gold/35" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.08em] text-sovereign-gold">LumkoMDX knowledge base</p>
              <h3 className="mt-8 max-w-md text-4xl font-bold leading-tight text-white">Sanitised insight for sovereign health infrastructure</h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">
                Papers first. Articles and announcements support the evaluation, not the other way around.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Market study", "White papers", "Governance notes", "Announcements"].map((item, index) => (
                <div key={item} className="proof-shimmer rounded-lg border border-white/14 bg-white/[0.07] px-4 py-3 text-sm font-bold text-blue-100">
                  <span className={cn("mr-2 inline-block h-2.5 w-2.5 rounded-full", index === 1 ? "bg-sovereign-gold" : "bg-lumko-blue")} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid content-center gap-3 bg-surface p-5 sm:grid-cols-2 lg:grid-cols-1">
          {[
            ["Executive", "Why this category exists and why now."],
            ["Governance", "Consent, POPIA, audit, and k-anonymity controls."],
            ["Technical", "FHIR R4 integration and source-system responsibilities."],
            ["Clinical", "How useful aggregate intelligence reaches care teams."]
          ].map(([title, body]) => (
            <article key={title} className="rounded-xl border border-line bg-white p-4">
              <p className="text-lg font-bold text-ink">{title}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SolutionsCompassVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-premium">
      <div className="relative mx-auto aspect-[1.18/1] max-w-xl overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="absolute inset-0 atlas-grid opacity-80" />
        <div className="route-signal absolute left-[14%] right-[14%] top-1/2 h-1 rounded-full" />
        <div className="pulse-soft absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lumko-blue/10" />
        <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-deep p-5 text-center text-sm font-bold text-white shadow-premium">
          One boundary model
        </div>
        {[
          ["Clinicians", "left-6 top-7", "care context"],
          ["Researchers", "right-6 top-7", "cohort discovery"],
          ["Institutions", "bottom-7 left-6", "local control"],
          ["Public health", "bottom-7 right-6", "population signal"]
        ].map(([label, pos, caption]) => (
          <div key={label} className={cn("absolute rounded-xl border border-line bg-white px-4 py-3 shadow-calm", pos)}>
            <p className="text-sm font-bold text-ink">{label}</p>
            <p className="mt-1 text-xs font-bold text-lumko-blue">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConvictionVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-7 text-white shadow-premium">
      <div className="absolute inset-0 premium-grid opacity-70" />
      <div className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-sovereign-gold">Founding thesis</p>
        <p className="mt-8 text-3xl font-bold leading-tight text-white">
          Healthcare data should not have to leave its origin to become useful.
        </p>
        <svg className="mt-8 h-52 w-full" viewBox="0 0 420 210" fill="none" aria-hidden="true">
          <path d="M92 72C122 42 179 30 218 52C248 69 276 92 318 78C354 66 384 88 385 124C386 166 340 187 294 173C259 162 235 181 203 184C151 190 105 168 86 132C75 110 73 90 92 72Z" fill={color.white} fillOpacity="0.08" stroke={color.gold} strokeOpacity="0.45" />
          <path className="signal-line" d="M92 120C158 87 214 90 260 126C300 158 335 156 377 128" stroke={color.blue} strokeWidth="2.4" strokeLinecap="round" />
          <path className="signal-line-slow" d="M65 82C128 131 179 143 226 119C271 96 318 92 365 104" stroke={color.gold} strokeWidth="2" strokeLinecap="round" />
          {[[92,120,"Source"],[226,119,"Boundary"],[377,128,"Useful response"],[65,82,"Local authority"],[365,104,"Institution"]].map(([x,y,label], index) => (
            <g key={label.toString()}>
              <circle cx={Number(x)} cy={Number(y)} r="18" fill={index === 1 ? color.white : color.deep} stroke={index === 1 ? color.gold : color.deep2} />
              <circle cx={Number(x)} cy={Number(y)} r="5" fill={index === 2 ? color.gold : color.blue} />
              <text x={Number(x)} y={Number(y) + 34} textAnchor="middle" fill={color.blue100} fontSize="10" fontWeight="800">{label}</text>
            </g>
          ))}
        </svg>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["African-led", "Identity absent", "Governance structural"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-bold text-blue-100">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const SovereignAtlasVisual = SovereignFederationVisual;
export const BoundaryStackVisual = BoundaryArchitectureVisual;
export const ReportCoverVisual = EvidenceRoomVisual;
