export type ResourceCategory = "Evaluation" | "Standards" | "Governance" | "Articles" | "Announcements";

export type ResourceKind = "paper" | "white paper" | "article" | "announcement" | "brief" | "external link";

export type ResourceItem = {
  title: string;
  kind: ResourceKind;
  category: ResourceCategory;
  audience: string;
  summary: string;
  date: string;
  href: string;
  cta: "Download" | "Read" | "Open";
  featured?: boolean;
};

export const resourceCategories: ResourceCategory[] = [
  "Evaluation",
  "Standards",
  "Governance",
  "Articles",
  "Announcements"
];

export const resourceLibrary: ResourceItem[] = [
  {
    title: "The Future of African Health Data",
    kind: "paper",
    category: "Evaluation",
    audience: "Executive and board review",
    summary:
      "A market and infrastructure study on regulation, standards, competitive pressure, and the structural case for African-led sovereign health data infrastructure.",
    date: "2026-05-01",
    href: "/resources/the-future-of-african-health-data.md",
    cta: "Download",
    featured: true
  },
  {
    title: "The structural opening",
    kind: "white paper",
    category: "Evaluation",
    audience: "Executive and board review",
    summary:
      "Competitive field, regulatory pressure, standards movement, and why sovereign African infrastructure matters now.",
    date: "2026-04-24",
    href: "/resources/structural-opening-white-paper.md",
    cta: "Download"
  },
  {
    title: "FHIR R4 alignment",
    kind: "brief",
    category: "Standards",
    audience: "Technical review",
    summary:
      "How HL7 FHIR R4 supports interoperability without turning LumkoMDX into a generic exchange layer.",
    date: "2026-04-18",
    href: "/resources/fhir-r4-alignment-brief.md",
    cta: "Read"
  },
  {
    title: "Consent, audit, and k >= 5",
    kind: "brief",
    category: "Governance",
    audience: "Legal and governance review",
    summary:
      "The control set evaluators need to understand before approving governed clinical intelligence.",
    date: "2026-04-12",
    href: "/resources/consent-audit-k-anonymity-brief.md",
    cta: "Read"
  },
  {
    title: "From source systems to response",
    kind: "brief",
    category: "Standards",
    audience: "Clinical operations review",
    summary:
      "A practical adoption path for institutions evaluating ingestion, mapping, permissions, response metadata, and audit.",
    date: "2026-04-08",
    href: "/resources/source-systems-to-response-brief.md",
    cta: "Read"
  },
  {
    title: "Why identity absence changes the buying conversation",
    kind: "article",
    category: "Articles",
    audience: "Governance, legal, and executive teams",
    summary:
      "A short explanation of why LumkoMDX belongs in sovereign infrastructure conversations rather than generic health analytics.",
    date: "2026-03-28",
    href: "/resources/identity-absence-buying-conversation.md",
    cta: "Read"
  },
  {
    title: "Evaluation knowledge set now available",
    kind: "announcement",
    category: "Announcements",
    audience: "Prospective institutional partners",
    summary:
      "The LumkoMDX knowledge set brings the market study, standards note, governance note, and implementation brief into one review set.",
    date: "2026-03-15",
    href: "/resources/evaluation-pack-announcement.md",
    cta: "Open"
  }
];
