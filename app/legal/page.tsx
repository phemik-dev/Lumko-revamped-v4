import type { Metadata } from "next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";

export const metadata: Metadata = {
  title: "Legal"
};

const legalSections = [
  {
    id: "copyright",
    label: "Copyright",
    title: "Copyright and permitted use",
    body:
      "The LumkoMDX name, visual identity, interface concepts, diagrams, written content, and related materials are owned by LumkoMDX or used with permission. Site content may be referenced for internal evaluation, procurement, governance, or technical review when LumkoMDX is clearly attributed and the material is not altered in a misleading way.",
    points: [
      "No part of this site may be copied, republished, or presented as another organisation's work.",
      "Screenshots, extracts, and brief quotations may be used for legitimate evaluation or briefing purposes.",
      "Product concepts and visual mockups are protected as LumkoMDX intellectual property."
    ]
  },
  {
    id: "privacy",
    label: "Privacy",
    title: "Privacy notice",
    body:
      "LumkoMDX collects only the information needed to respond to enquiries, operate this website, and support legitimate institutional evaluation. We do not sell personal information, and demo-request information is used only to respond to the request and related evaluation conversations.",
    points: [
      "Contact details submitted through forms are used for direct response and relationship management.",
      "Operational website data may be used to improve reliability, security, and usability.",
      "Personal information is handled with access control, retention discipline, and security safeguards."
    ]
  },
  {
    id: "popia",
    label: "POPIA",
    title: "POPIA-aware governance",
    body:
      "LumkoMDX is designed for environments where privacy, institutional accountability, and lawful processing must be operationally visible. The platform thesis is that patient identity should remain under local authority and should not enter the LumkoMDX platform boundary.",
    points: [
      "Governance controls are designed around consent scope, role access, audit lineage, and k-anonymity.",
      "Patient identity is treated as protected information that remains outside the platform boundary.",
      "Institutional implementation should include local legal, clinical, and governance review."
    ]
  },
  {
    id: "terms",
    label: "Terms",
    title: "Website terms",
    body:
      "This website provides information for prospective partners, evaluators, institutions, and implementation teams. It does not create a service agreement, clinical instruction, legal opinion, or procurement commitment.",
    points: [
      "Information on this site may change as the platform, policies, and materials evolve.",
      "Any production implementation is governed by written agreements between LumkoMDX and the relevant institution.",
      "Visitors should not rely on website content as a substitute for legal, regulatory, clinical, or technical review."
    ]
  },
  {
    id: "cookies",
    label: "Cookies",
    title: "Cookies and site telemetry",
    body:
      "LumkoMDX may use essential cookies and limited site telemetry to keep the website secure, measure performance, and understand how visitors navigate core pages. Any analytics configuration should remain proportionate to the seriousness of the site and the expectations of institutional visitors.",
    points: [
      "Essential cookies support security, session integrity, and basic site operation.",
      "Analytics should be limited to aggregate usage patterns and should avoid unnecessary personal profiling.",
      "Visitors may manage cookie preferences through browser settings."
    ]
  }
];

export default function LegalPage() {
  return (
    <>
      <SectionShell className="sovereign-halo">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Legal"
            title="Legal, privacy, and governance information."
            body="Policies for institutions, evaluators, and partners reviewing LumkoMDX as sovereign healthcare data infrastructure."
          />
          <nav className="grid gap-3 rounded-2xl border border-line bg-white p-4 shadow-calm sm:grid-cols-5" aria-label="Legal sections">
            {legalSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line bg-surface px-3 py-2 text-center text-sm font-bold text-ink transition hover:border-lumko-blue hover:bg-white hover:text-lumko-blue"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto grid max-w-5xl gap-6">
          {legalSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 rounded-2xl border border-line bg-white p-7 shadow-calm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-lumko-blue">{section.label}</p>
              <h2 className="mt-4 text-3xl font-bold text-ink">{section.title}</h2>
              <p className="mt-4 text-lg leading-8 text-ink-soft">{section.body}</p>
              <ul className="mt-6 grid gap-3">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-ink-soft">
                    <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sovereign-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
