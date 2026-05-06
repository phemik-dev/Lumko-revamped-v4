import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { EditorialProofBand, EvidencePanel, PageProofMoment, ProofMetricStrip } from "@/components/ui/ProofSystems";
import { LeadershipCard } from "@/components/ui/LeadershipCard";
import { BoundaryArchitectureVisual, ConvictionVisual } from "@/components/visual/AtlasVisuals";

export const metadata: Metadata = {
  title: "Company"
};

const values = [
  {
    eyebrow: "Data sovereignty",
    title: "Sovereignty",
    body: "African health data should be governed in Africa, by African institutions, for African communities."
  },
  {
    eyebrow: "Patient dignity",
    title: "Trust",
    body: "Patient identity is a human dignity issue, not a compliance checkbox."
  },
  {
    eyebrow: "Operational trust",
    title: "Usability",
    body: "Doing the consented, audited, k-anonymity-enforced thing should also be the straightforward thing."
  },
  {
    eyebrow: "Open standards",
    title: "Interoperability",
    body: "Built to HL7 FHIR R4 standards and designed for multi-system, multi-facility operation."
  }
];

const companyMetrics = [
  { label: "Led from", value: "Africa" },
  { label: "Built for", value: "Institutions" },
  { label: "Protects", value: "Patient identity" },
  { label: "Enforces", value: "Governance" },
  { label: "Aligns to", value: "FHIR R4" }
];

const leadershipStructure = [
  {
    title: "Institutional anchor",
    body: "The chairman brings global digital health, policy, and health information systems credibility."
  },
  {
    title: "Strategy and adoption",
    body: "Leadership translates the thesis into partnerships, evaluation pathways, and market relevance."
  },
  {
    title: "Technology execution",
    body: "The platform turns the boundary model into product architecture, integration patterns, and controls."
  }
];

const leaders = [
  {
    name: "Prof. Yunkap Kwankam",
    role: "Non-Executive Chairman",
    body:
      "A global digital health authority whose work spans WHO eHealth leadership, telemedicine policy, health information systems, and international digital health governance. He brings the board-level perspective required for infrastructure that must satisfy policy, clinical, technical, and institutional scrutiny."
  },
  {
    name: "Phemi Kgomongwe",
    role: "Managing Director",
    body:
      "An AI strategy leader and venture builder working across healthcare AI, cultural intelligence, and emerging-market innovation. He leads LumkoMDX with a focus on institutional trust, practical adoption, and technology that respects local context."
  },
  {
    name: "Sima Kobo",
    role: "Head of Strategy",
    body:
      "A strategy and operations lead focused on venture execution, partnership pathways, and institutional adoption. Her role is to translate the sovereign-health infrastructure thesis into a practical route for organisations evaluating governance, rollout, and value."
  },
  {
    name: "Leroy Ngoma",
    role: "Head of Technology",
    body:
      "A technology leader with software architecture, IT leadership, and AI implementation experience across healthcare and governance-oriented systems. He focuses on turning the Three-Boundary Model into dependable product architecture, integration patterns, and operating controls."
  }
];

export default function CompanyPage() {
  return (
    <>
      <SectionShell id="conviction" className="bg-deep text-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <SectionHeader
            eyebrow="Company"
            title="A company built around a boundary, not a feature set."
            body="LumkoMDX was founded to solve a structural problem: African health data exists, but the infrastructure to use it safely has not."
          />
          <ConvictionVisual />
        </div>
        <div className="mt-10">
          <ProofMetricStrip items={companyMetrics} className="bg-white" />
        </div>
      </SectionShell>
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow="Institutional thesis"
            title="Sovereignty is not a brand mood. It is an operating requirement."
            body="LumkoMDX exists for environments where data usefulness, institutional accountability, patient dignity, and local governance must all be true at the same time."
          />
          <BoundaryArchitectureVisual dark={false} />
        </div>
      </SectionShell>
      <SectionShell tone="soft">
        <PageProofMoment
          eyebrow="Institutional conviction"
          title="LumkoMDX is necessary where usefulness, dignity, and sovereignty must all be true."
          body="The company exists because the usual infrastructure choices ask health systems to surrender too much: identity, local authority, or time. The boundary model is our answer."
          proof={["African-led infrastructure", "Local identity authority", "Patient dignity", "Useful governed intelligence"]}
        />
      </SectionShell>
      <SectionShell id="values">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="What we stand for"
              title="Sovereignty. Trust. Usability. Interoperability."
              body="These are architectural commitments. They decide what the platform may hold, what it must refuse, and what it can return."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((item) => (
              <EvidencePanel key={item.title} {...item} />
            ))}
          </div>
        </div>
      </SectionShell>
      <SectionShell id="leadership" tone="soft">
        <EditorialProofBand
          eyebrow="Leadership structure"
          title="The team is organised around conviction, adoption, and execution."
          body="The leadership structure supports the thesis: this category needs institutional credibility, strategic adoption, and technical discipline."
          features={leadershipStructure}
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {leaders.map((leader) => (
            <LeadershipCard key={leader.name} {...leader} />
          ))}
        </div>
      </SectionShell>
      <SectionShell tone="dark">
        <ClosingCTA
          title="Let us build this together."
          body="Partnership starts with your institution's needs, governance constraints, and the outcomes your existing data could enable."
          primaryLabel="Contact us"
          primaryHref="/request-demo"
          secondaryLabel="Talk to an expert"
          secondaryHref="/request-demo"
        />
      </SectionShell>
    </>
  );
}
