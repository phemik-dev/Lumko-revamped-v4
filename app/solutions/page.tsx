import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { EditorialProofBand, ProofMetricStrip, RoleOutcomeMatrix } from "@/components/ui/ProofSystems";
import { RoleCard } from "@/components/ui/RoleCard";
import { SolutionsCompassVisual } from "@/components/visual/AtlasVisuals";

export const metadata: Metadata = {
  title: "Solutions"
};

const roles = [
  {
    role: "Clinicians",
    body:
      "The old blockage is fragmented patient journeys. The LumkoMDX resolution is governed clinical context without extracts, transfers, or identity exposure."
  },
  {
    role: "Researchers",
    body:
      "The old blockage is access to meaningful cohorts. The resolution is consent-based, FHIR-structured evidence without extraction from country or institution of origin."
  },
  {
    role: "Institutions",
    body:
      "The old blockage is siloed visibility. The resolution is network-level intelligence while each facility keeps authority over patient identity."
  },
  {
    role: "Public health teams",
    body:
      "The old blockage is delayed population signal. The resolution is aggregate surveillance, treatment gap analysis, and resource planning without centralised identity repositories."
  }
];

const roleOutcomes = [
  {
    role: "Clinicians",
    problem: "Care context is fragmented across systems and facilities.",
    answer: "Governed clinical context returns without requesting extracts or exposing identity.",
    proof: "aggregate care context"
  },
  {
    role: "Researchers",
    problem: "Meaningful cohorts are slow to access and difficult to approve.",
    answer: "Consent-based, FHIR-structured discovery works without extracting identity from origin.",
    proof: "consent + k >= 5"
  },
  {
    role: "Institutions",
    problem: "Network visibility usually requires centralising too much authority.",
    answer: "Institutional intelligence forms while each source keeps authority over identity.",
    proof: "local control"
  },
  {
    role: "Public health",
    problem: "Population signal arrives late when data must be copied into central repositories.",
    answer: "Aggregate surveillance and resource planning happen without a central identity store.",
    proof: "audited signal"
  }
];

const decisionPath = [
  {
    title: "Choose the operating context",
    body: "Start from the team that needs value: clinical, research, institutional, or public health."
  },
  {
    title: "Keep the boundary intact",
    body: "The role changes. The identity rule, consent route, k floor, and audit trail do not."
  },
  {
    title: "Map the operating signal",
    body: "Each role needs a different signal, from care context to cohort discovery and population visibility."
  }
];

const solutionMetrics = [
  { label: "Clinicians", value: "Care context" },
  { label: "Researchers", value: "Governed discovery" },
  { label: "Institutions", value: "Local control" },
  { label: "Public health", value: "Population insight" },
  { label: "Boundary", value: "Always intact" }
];

export default function SolutionsPage() {
  return (
    <>
      <SectionShell className="sovereign-halo">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Solutions"
            title="Every role sees a different problem. The boundary model stays the same."
            body="LumkoMDX is not a persona platform. It is infrastructure that adapts to clinical, research, institutional, and public health contexts without changing the privacy guarantee."
          />
          <SolutionsCompassVisual />
        </div>
        <div className="mt-10">
          <ProofMetricStrip items={solutionMetrics} />
        </div>
      </SectionShell>
      <SectionShell id="roles">
        <SectionHeader eyebrow="By role" title="Four contexts. One governed path to value." />
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {roles.map((item) => (
            <RoleCard key={item.role} role={item.role} body={item.body} />
          ))}
        </div>
      </SectionShell>
      <SectionShell tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <SectionHeader
            eyebrow="Operating fit"
            title="The practical value changes by role. The boundary does not."
            body="This is the difference between a persona page and infrastructure: LumkoMDX adapts the outcome while preserving the same governance route."
          />
          <RoleOutcomeMatrix items={roleOutcomes} />
        </div>
      </SectionShell>
      <SectionShell id="use-cases">
        <EditorialProofBand
          eyebrow="How to choose a path"
          title="Different outcomes, governed by the same architecture."
          body="Each team can recognise its operating problem, then see the boundary logic that makes its outcome possible."
          features={decisionPath}
        />
      </SectionShell>
      <SectionShell tone="dark">
        <ClosingCTA
          title="See how LumkoMDX fits your organisation."
          body="Bring your governance constraints, compliance requirements, and target outcomes. We will show you where the platform fits."
          secondaryLabel="Talk to a specialist"
          secondaryHref="/request-demo"
        />
      </SectionShell>
    </>
  );
}
