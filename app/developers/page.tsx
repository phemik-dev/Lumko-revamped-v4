import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { EditorialProofBand, EvidencePanel, PageProofMoment, ProofMetricStrip } from "@/components/ui/ProofSystems";
import { TrustBand } from "@/components/ui/TrustBand";
import { DeveloperConsoleVisual } from "@/components/visual/AtlasVisuals";
import { DeveloperInterfaceMockup } from "@/components/visual/ProductMockups";

export const metadata: Metadata = {
  title: "Developers"
};

const cards = [
  {
    eyebrow: "API access",
    title: "Standards-ready interfaces",
    body: "Pseudonymous FHIR R4 resources through RESTful endpoints, with consent and anonymity checks before response."
  },
  {
    eyebrow: "Query builder",
    title: "Compose safely within policy",
    body: "Population criteria, clinical filters, and temporal ranges are bounded by policy at composition time."
  },
  {
    eyebrow: "Integration",
    title: "Connect systems deliberately",
    body: "Existing EMR, LIS, and hospital information systems connect through FHIR R4 export pathways."
  }
];

const trust = [
  { strong: "FHIR R4 ready.", body: "Resources, endpoints, and responses align to HL7 FHIR R4." },
  { strong: "Pseudonymised by design.", body: "The API cannot return identifiable data because the platform does not hold it." },
  { strong: "Auditable and traceable.", body: "Every API call is logged with scope, cohort size, response, and timestamp." }
];

const developerMetrics = [
  { label: "Standard", value: "FHIR R4" },
  { label: "Request", value: "Bounded" },
  { label: "Consent", value: "Checked" },
  { label: "Identity", value: "Excluded" },
  { label: "Audit", value: "Written" }
];

const implementationFlow = [
  {
    title: "Shape the request",
    body: "FHIR R4 resources, query criteria, and identity exclusion are visible before execution."
  },
  {
    title: "Pass the gates",
    body: "Consent, role, policy, and k-anonymity checks determine whether a response can leave."
  },
  {
    title: "Return the response record",
    body: "The response carries aggregate values, identity absence, and audit metadata."
  }
];

export default function DevelopersPage() {
  return (
    <>
      <SectionShell className="bg-deep text-white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Developers"
            title="Build against governed clinical structure, not exposed patient records."
            body="FHIR R4-aligned interfaces. Bounded query patterns. Consent scope, audit, and k-anonymity visible in the request and response."
          />
          <DeveloperConsoleVisual />
        </div>
        <div className="mt-10">
          <ProofMetricStrip items={developerMetrics} className="bg-white" />
        </div>
      </SectionShell>
      <SectionShell id="interfaces">
        <EditorialProofBand
          eyebrow="Interface surface"
          title="Implementation detail follows the same boundary logic."
          body="A developer sees the request shape, consent scope, response metadata, and audit lineage as one operating sequence."
          features={implementationFlow}
        />
      </SectionShell>
      <SectionShell id="response-contract" tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow="Response contract"
            title="The interface returns what governance permits."
            body="No names, ID numbers, dates of birth, addresses, or individual records. The response proves the boundary in plain language."
          />
          <DeveloperInterfaceMockup />
        </div>
      </SectionShell>
      <SectionShell>
        <PageProofMoment
          eyebrow="Response contract"
          title="The API makes refusal visible in the response."
          body="A governed response is not just a payload. It carries the operating record: identity absent, k-anonymity passed, consent checked, and audit written."
          proof={["identityPresent: false", "kAnonymity: passed", "auditEvent: written", "standard: FHIR_R4"]}
        />
      </SectionShell>
      <SectionShell tone="soft">
        <SectionHeader
          eyebrow="Implementation surfaces"
          title="The controls are not hidden behind policy language."
          body="The interface exposes where the guarantee lives: standards access, safe query composition, deliberate integration, and response metadata."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <EvidencePanel key={card.title} {...card} />
          ))}
        </div>
      </SectionShell>
      <SectionShell tone="dark">
        <TrustBand statement="Built on standards. Governed for trust." items={trust} />
      </SectionShell>
      <SectionShell tone="dark">
        <ClosingCTA
          title="Start building with confidence."
          body="Walk through the architecture, integration path, and governance model with the level of technical detail your organisation requires."
          primaryLabel="Talk to an engineer"
          primaryHref="/request-demo"
          secondaryLabel="Explore platform"
          secondaryHref="/platform"
        />
      </SectionShell>
    </>
  );
}
