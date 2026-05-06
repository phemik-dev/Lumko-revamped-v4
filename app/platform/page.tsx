import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { DesktopProofRail, EvidencePanel, GovernedLifecycleVisual, ModuleSystemPanel, PageProofMoment, ProofMetricStrip } from "@/components/ui/ProofSystems";
import { TrustBand } from "@/components/ui/TrustBand";
import { BoundaryArchitectureVisual } from "@/components/visual/AtlasVisuals";
import { PlatformInterfaceMockup } from "@/components/visual/ProductMockups";
import { boundarySteps, platformModules, platformTrustItems, technicalProof } from "@/content/site";

export const metadata: Metadata = {
  title: "Platform"
};

const platformMetrics = [
  { label: "Boundary one", value: "Source authority" },
  { label: "Boundary two", value: "Governed structure" },
  { label: "Boundary three", value: "Authorised use" },
  { label: "Anonymity floor", value: "k >= 5" },
  { label: "Data standard", value: "FHIR R4" }
];

const platformRail = [
  { label: "Identity status", body: "Patient identity is kept at the originating source." },
  { label: "Query permission", body: "Consent, role, and policy are checked before response." },
  { label: "Response record", body: "Audit metadata and k >= 5 travel with the answer." }
];

export default function PlatformPage() {
  return (
    <>
      <SectionShell className="bg-deep text-white">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-sovereign-gold">
              Platform
            </p>
            <h1 className="text-balance text-[2.15rem] font-bold leading-[1.06] tracking-normal text-white sm:text-6xl lg:text-7xl">
              The Three-Boundary Model, made operational.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl sm:leading-9">
              LumkoMDX is the infrastructure layer where identity remains local, clinical structure
              becomes usable, and every permitted response carries a governance record.
            </p>
            <CTAButtons
              className="mt-8"
              primary={{ label: "Request demo", href: "/request-demo" }}
              secondary={{ label: "View modules", href: "/platform#modules" }}
              inverse
            />
          </div>
          <BoundaryArchitectureVisual />
        </div>
        <div className="mt-10">
          <ProofMetricStrip items={platformMetrics} className="bg-white" />
        </div>
      </SectionShell>

      <SectionShell id="product-surface">
        <SectionHeader
          align="center"
          eyebrow="Operating surface"
          title="The product starts with governed questions, not exported records."
          body="The operating surface brings module rail, query canvas, governance rail, and auditable response table into one contained product view."
        />
        <div className="mx-auto mt-12 max-w-6xl">
          <PlatformInterfaceMockup />
        </div>
      </SectionShell>

      <SectionShell id="three-boundary-model" tone="soft">
        <SectionHeader
          align="center"
          eyebrow="Three-Boundary Model"
          title="Three zones. Three responsibilities. One non-negotiable boundary."
          body="The model is simple enough to explain in a boardroom and precise enough to guide implementation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {boundarySteps.map((step, index) => (
            <EvidencePanel
              key={step.title}
              eyebrow={["Source boundary", "Platform boundary", "Use boundary"][index]}
              title={step.title}
              body={step.body}
              meta={["Local authority", "Governed structure", "Useful response"][index]}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="modules">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div className="grid gap-6">
            <SectionHeader
              eyebrow="Module system"
              title="Six modules define the operating language."
              body="Each module exists to keep the boundary visible: source authority, consent, standards, k-anonymity, audit, and aggregate response."
            />
            <DesktopProofRail title="Module operating rail" items={platformRail} />
          </div>
          <ModuleSystemPanel modules={platformModules} />
        </div>
      </SectionShell>

      <SectionShell id="query-lifecycle" tone="soft">
        <div className="grid gap-10">
          <SectionHeader
            eyebrow="Governed query lifecycle"
            title="Governance is the route a query travels."
            body="A response is only useful if it proves what was checked before it left the platform."
          />
          <GovernedLifecycleVisual />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Technical controls"
            title="Concrete controls, not broad privacy claims."
            body="The guarantee has to be visible in implementation. These controls are the minimum bar for institutional trust."
          />
          <div className="rounded-xl border border-line bg-white p-8 shadow-calm">
            <ul className="grid gap-4">
              {technicalProof.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-8 text-ink-soft">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-lumko-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="soft">
        <PageProofMoment
          eyebrow="Boundary controls"
          title="The model is technical because the promise is technical."
          body="No patient identity enters LumkoMDX. The product makes that visible in its modules, response metadata, governance rail, and audit trail."
          proof={["FHIR R4 structure", "Consent registry", "Boundary monitor", "Audit ledger"]}
        />
      </SectionShell>

      <SectionShell id="standards" tone="dark">
        <TrustBand statement="Trust is architectural here, not promotional." items={platformTrustItems} />
      </SectionShell>

      <SectionShell tone="dark">
        <ClosingCTA
          title="Ready to inspect the operating model?"
          body="The demo walks through the boundary architecture, the modules, and the governed response path in sequence."
          secondaryLabel="View resources"
          secondaryHref="/resources"
        />
      </SectionShell>
    </>
  );
}
