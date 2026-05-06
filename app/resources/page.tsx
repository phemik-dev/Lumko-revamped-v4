import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { AudienceEvidenceGrid, EditorialProofBand, EvaluationCTA, ProofMetricStrip } from "@/components/ui/ProofSystems";
import { EvidenceRoomVisual } from "@/components/visual/AtlasVisuals";
import { resourceCategories, resourceLibrary, type ResourceItem } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources"
};

const resourceMetrics = [
  { label: "Knowledge", value: "Papers first" },
  { label: "Regulation", value: "POPIA-aware" },
  { label: "Data standard", value: "FHIR R4" },
  { label: "Governance", value: "Consent and audit" },
  { label: "Updates", value: "Articles and news" }
];

const forwardAudiences = [
  {
    audience: "Executive",
    title: "Why this category exists",
    body: "The market and infrastructure case for sovereign health data use without identity exposure.",
    proof: "market study"
  },
  {
    audience: "Governance",
    title: "What controls must hold",
    body: "Consent, POPIA-aware governance, audit, and k-anonymity framed for institutional review.",
    proof: "governance note"
  },
  {
    audience: "Technical",
    title: "How it can be built",
    body: "FHIR R4 alignment, source-system responsibility, and response metadata for implementation teams.",
    proof: "standards brief"
  },
  {
    audience: "Clinical",
    title: "Where usefulness shows up",
    body: "Care, research, institutional visibility, and public health use cases without identity transfer.",
    proof: "use-case brief"
  }
];

const knowledgeFlow = [
  {
    title: "Featured knowledge asset",
    body: "Lead with the strongest paper or report, not a stream of equal posts."
  },
  {
    title: "Curated categories",
    body: "Let evaluators move from standards to governance to articles without losing the thesis."
  },
  {
    title: "Review pathways",
    body: "Executive, governance, technical, and clinical teams each get a clear route into the material."
  }
];

const featuredResource = resourceLibrary.find((item) => item.featured) ?? resourceLibrary[0];

function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_1px_0_rgba(7,26,58,0.03)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-surface-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-lumko-blue">
          {resource.kind}
        </span>
        <span className="rounded-full bg-sovereign-gold-soft px-3 py-1 text-xs font-bold text-sovereign-gold-dark">
          {resource.category}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-ink">{resource.title}</h3>
      <p className="mt-4 text-base leading-7 text-ink-soft">{resource.summary}</p>
      <div className="mt-auto pt-6">
        <p className="text-sm font-bold text-ink">{resource.audience}</p>
        <p className="mt-1 text-sm text-ink-soft">{resource.date}</p>
        <a
          href={resource.href}
          download={resource.cta === "Download" ? true : undefined}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-lumko-blue hover:text-lumko-blue"
        >
          {resource.cta}
        </a>
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <SectionShell className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <SectionHeader
            eyebrow="Resources"
            title="A sanitised knowledge base for teams evaluating sovereign healthcare infrastructure seriously."
            body="Curated papers, standards notes, governance briefs, articles, and announcements for institutions reviewing the infrastructure gap."
          />
          <EvidenceRoomVisual />
        </div>
        <div className="mt-10">
          <ProofMetricStrip items={resourceMetrics} />
        </div>
      </SectionShell>
      <SectionShell id="featured-report">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="grid gap-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-sovereign-gold-dark">Featured report</p>
            <h2 className="text-4xl font-bold text-ink">{featuredResource.title}</h2>
            <p className="text-lg leading-8 text-ink-soft">
              {featuredResource.summary}
            </p>
            <div className="mt-8 grid gap-3 rounded-2xl border border-line bg-surface p-4 sm:grid-cols-2">
              {["Executive case", "Governance case", "Standards case", "Implementation path"].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-bold text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-calm">
            {resourceLibrary.slice(1, 5).map((item) => (
              <div key={item.title} className="grid gap-4 border-b border-line p-5 last:border-b-0 md:grid-cols-[0.56fr_1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-lumko-blue">{item.kind}</p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
                </div>
                <p className="text-sm leading-6 text-ink-soft">{item.summary}</p>
                <a
                  href={item.href}
                  download={item.cta === "Download" ? true : undefined}
                  className="inline-flex min-h-10 items-center justify-center rounded-lg border border-line px-4 py-2 text-sm font-bold text-ink transition hover:border-lumko-blue hover:text-lumko-blue"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
      <SectionShell tone="soft">
        <EditorialProofBand
          eyebrow="Knowledge flow"
          title="More depth appears as the evaluator keeps reading."
          body="The library starts with the strongest materials, then opens into categories and pathways for each team."
          features={knowledgeFlow}
        />
      </SectionShell>
      <SectionShell id="library">
        <SectionHeader
          eyebrow="Resource library"
          title="Papers, briefs, articles, and announcements in one governed library."
          body="Start with evaluation material, then move into standards notes, governance briefs, articles, and announcements as the institution needs more depth."
        />
        <nav className="mt-8 flex flex-wrap gap-3" aria-label="Resource categories">
          {resourceCategories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-lumko-blue hover:text-lumko-blue"
            >
              {category}
            </a>
          ))}
        </nav>
        <div className="mt-10 grid gap-10">
          {resourceCategories.map((category) => {
            const items = resourceLibrary.filter((item) => item.category === category);
            if (!items.length) return null;
            return (
              <section key={category} id={category.toLowerCase()} className="scroll-mt-28">
                <div className="mb-4 flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-bold text-ink">{category}</h3>
                  <p className="text-sm font-bold text-ink-soft">{items.length} resource{items.length === 1 ? "" : "s"}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((item) => (
                    <ResourceCard key={item.title} resource={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </SectionShell>
      <SectionShell>
        <SectionHeader
          eyebrow="Forward this to"
          title="Knowledge organised for the teams that decide infrastructure."
          body="A serious evaluation moves through executive, governance, technical, and clinical review. Each team needs different material, but the thesis stays intact."
        />
        <div className="mt-10">
          <AudienceEvidenceGrid items={forwardAudiences} />
        </div>
      </SectionShell>
      <SectionShell id="evaluation-pack" tone="dark">
        <EvaluationCTA />
      </SectionShell>
      <SectionShell tone="dark">
        <ClosingCTA
          title="Find the right resource for your team."
          body="Support an evaluation, executive review, or procurement case at the level of depth it requires."
          primaryLabel="Get the report"
          primaryHref="/request-demo"
          secondaryLabel="Talk to us"
          secondaryHref="/request-demo"
        />
      </SectionShell>
    </>
  );
}
