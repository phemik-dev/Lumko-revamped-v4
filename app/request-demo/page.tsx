import type { Metadata } from "next";
import { FormSection } from "@/components/form/FormSection";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { EditorialProofBand, ProofMetricStrip } from "@/components/ui/ProofSystems";
import { DemoPathVisual } from "@/components/visual/ProductMockups";
import { demoSeeItems, nextSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Request Demo"
};

const demoMetrics = [
  { label: "Architecture", value: "Boundary model" },
  { label: "Product", value: "Operating surface" },
  { label: "Governance", value: "Consent and audit" },
  { label: "Privacy", value: "Identity absent" },
  { label: "Fit", value: "Your use case" }
];

const demoFlow = [
  {
    title: "What you will see",
    body: "The platform model, Three-Boundary Model, intelligence layer, and your use case."
  },
  {
    title: "Your details",
    body: "The form gives enough context to prepare a serious walkthrough rather than a generic sales call."
  },
  {
    title: "What happens next",
    body: "A structured follow-up maps your governance constraints to the platform operating model."
  }
];

export default function RequestDemoPage() {
  return (
    <>
      <SectionShell className="sovereign-halo">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-sovereign-gold-dark">
              Request demo
            </p>
            <h1 className="text-balance text-[2.15rem] font-bold leading-[1.06] tracking-normal text-ink sm:text-6xl">
              See the boundary model in action.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-soft sm:text-xl sm:leading-9">
              The demo is not a sales presentation. It is a structured walkthrough of a working
              platform: the architecture, the governance model, and the intelligence that flows when
              both are in place.
            </p>
          </div>
          <div className="mt-10">
            <ProofMetricStrip items={demoMetrics} />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="h-full rounded-xl border border-line bg-white p-6 shadow-calm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-sovereign-gold-dark">
                What you will see
              </p>
              <div className="mt-6 grid gap-5">
                {demoSeeItems.map((item) => (
                  <article key={item.title} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                    <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                    <p className="mt-2 text-base leading-7 text-ink-soft">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
            <FormSection />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <EditorialProofBand
          eyebrow="Demo sequence"
          title="The walkthrough follows the same logic as the product."
          body="A good demo moves from architecture to query to response record to institutional fit, in that order."
          features={demoFlow}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <SectionHeader title="What happens next" />
            <div className="mt-8 grid gap-4">
              {nextSteps.map((step, index) => (
                <article key={step.title} className="rounded-xl border border-line bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-blue text-base font-bold text-lumko-blue">
                    {index + 1}
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-ink">{step.title}</h2>
                  <p className="mt-3 text-base leading-7 text-ink-soft">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
          <DemoPathVisual />
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white">Your privacy matters.</h2>
          <p className="mt-5 text-xl leading-9 text-blue-100">
            We will use your contact details only to respond to your demo request. No automated
            marketing sequences. No third-party data sharing. The same commitment we make for patient
            data, we make for yours.
          </p>
        </div>
      </SectionShell>
    </>
  );
}
