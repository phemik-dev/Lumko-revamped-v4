import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { CategoryClaimBand, ComparisonBand, EditorialProofBand, OperatingModelBoard, PageProofMoment, ProofMetricStrip } from "@/components/ui/ProofSystems";
import { TrustBand } from "@/components/ui/TrustBand";
import { SovereignFederationMini, SovereignFederationVisual } from "@/components/visual/AtlasVisuals";
import { PlatformInterfaceMockup } from "@/components/visual/ProductMockups";
import { homeTrustItems } from "@/content/site";

const proofMetrics = [
  { label: "Identity boundary", value: "Absent from platform" },
  { label: "Data standard", value: "FHIR R4 aligned" },
  { label: "Access trail", value: "Every access logged" },
  { label: "Anonymity floor", value: "k >= 5" },
  { label: "Regional authority", value: "African-led" }
];

const comparison = [
  {
    title: "Data marketplace",
    oldWay: "Value depends on moving, buying, or pooling data assets.",
    lumkoWay: "LumkoMDX does not sell or centralise patient identity. It makes governed use possible without identity entering the platform."
  },
  {
    title: "Analytics layer",
    oldWay: "Dashboards sit on copied datasets and inherit the exposure risk.",
    lumkoWay: "Governance is structural. Consent, role, audit, and k-anonymity shape the query before response."
  },
  {
    title: "Legacy exchange",
    oldWay: "Exchange models copy records between institutions and then manage the risk.",
    lumkoWay: "Identity stays under local authority. Only governed clinical structure enters the federation layer."
  }
];

const evaluationPath = [
  {
    title: "Executive case",
    body: "Why the access-versus-privacy tradeoff is an infrastructure failure worth correcting now."
  },
  {
    title: "Governance case",
    body: "How consent, audit, role access, and k-anonymity become structural rather than procedural."
  },
  {
    title: "Technical case",
    body: "How FHIR R4 structure and source authority support useful intelligence without identity transfer."
  }
];

export default function Home() {
  return (
    <>
      <SectionShell className="sovereign-halo">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-line bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-sovereign-gold-dark">
              Sovereign health data infrastructure
            </p>
            <div className="mb-6 lg:hidden">
              <SovereignFederationMini />
            </div>
            <h1 className="text-balance text-[2.15rem] font-bold leading-[1.06] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Healthcare data can be used without patient identity entering the platform.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl sm:leading-9">
              LumkoMDX collapses the false tradeoff between access and privacy. Identity remains
              under local authority. Governed structure moves. Audited aggregate insight returns.
            </p>
            <CTAButtons
              className="mt-8"
              primary={{ label: "Request demo", href: "/request-demo" }}
              secondary={{ label: "Explore platform", href: "/platform" }}
            />
          </div>
          <div className="hidden lg:block">
            <SovereignFederationVisual />
          </div>
        </div>
        <div className="mt-10">
          <ProofMetricStrip items={proofMetrics} />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Why this is different"
              title="The old model treats exposure as the price of usefulness."
              body="LumkoMDX treats exposure as an architectural failure, not an operating compromise. The correction is a different boundary: identity stays local while governed structure becomes useful."
            />
          </div>
          <ComparisonBand items={comparison} />
        </div>
      </SectionShell>

      <SectionShell tone="soft">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Operating model"
            title="One route from local data to trusted insight."
            body="The platform is memorable because the promise is simple: the person stays out, the structure moves, and the answer is governed before it returns."
            align="center"
          />
        </div>
        <div className="mt-10">
          <OperatingModelBoard />
        </div>
      </SectionShell>

      <SectionShell>
        <CategoryClaimBand />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow="Product surface"
            title="A real operating surface for governed healthcare intelligence."
            body="The product language is dense, auditable, and technical enough to feel like infrastructure rather than an illustration."
          />
          <PlatformInterfaceMockup />
        </div>
      </SectionShell>

      <SectionShell>
        <PageProofMoment
          eyebrow="Boundary principle"
          title="Identity is not hidden inside the platform. It is outside the platform."
          body="That distinction is the strategic difference. Encryption and access control manage exposure. LumkoMDX removes identity from the operating boundary before the question can become useful."
          proof={["Local identity authority", "Governed clinical structure", "Aggregate response only", "Audit written"]}
        />
      </SectionShell>

      <SectionShell tone="dark">
        <TrustBand statement="Trust is architectural before it is institutional." items={homeTrustItems} />
      </SectionShell>

      <SectionShell>
        <EditorialProofBand
          eyebrow="Adoption path"
          title="Built to hold up across the rooms that decide infrastructure."
          body="A serious evaluation needs more than a demo. It needs the architecture, standards story, governance model, and operational fit to hold together under scrutiny."
          features={evaluationPath}
        />
      </SectionShell>

      <SectionShell tone="dark">
        <ClosingCTA
          title="Bring your data together without giving it away."
          body="See how the boundary model works, where the product modules fit, and how LumkoMDX can support your institution's evaluation path."
          secondaryLabel="Explore resources"
          secondaryHref="/resources"
        />
      </SectionShell>
    </>
  );
}
