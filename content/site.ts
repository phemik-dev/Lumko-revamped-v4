export const proofItems = [
  { label: "Identity", value: "Remains local" },
  { label: "Structure", value: "FHIR R4 aligned" },
  { label: "Response", value: "Aggregate and audited" }
];

export const tradeoffPanels = [
  {
    eyebrow: "The old reality",
    items: [
      {
        title: "Data is moved",
        body:
          "Information leaves its origin to become usable. Every transfer creates risk, duplication, governance overhead, and institutional friction."
      },
      {
        title: "Identity is exposed",
        body:
          "Collaboration between facilities has historically meant moving records, and moving records means exposing identities."
      },
      {
        title: "Insight arrives late",
        body:
          "Ethics reviews, transfer agreements, manual anonymisation, and validation pipelines slow the moment when care and action are needed."
      }
    ]
  },
  {
    eyebrow: "The new reality",
    items: [
      {
        title: "Data can be used where it exists",
        body:
          "Queries cross systems without moving patient-level identity. The originating institution remains authoritative."
      },
      {
        title: "Identity never enters the platform",
        body:
          "Patient identifiers are stripped before any data enters LumkoMDX. The platform holds governed clinical structure, not a person."
      },
      {
        title: "Access and compliance coexist",
        body:
          "Governance is structural, not a layer applied after the fact. POPIA alignment, consent, and audit are built into the model."
      }
    ]
  }
];

export const boundarySteps = [
  {
    title: "Data stays at the source",
    body:
      "Patient identity remains inside the originating system, under full institutional control. Name, ID number, date of birth, and contact details never leave Zone One."
  },
  {
    title: "Only governed structure enters",
    body:
      "Authorised clinical data is structured to FHIR R4, stripped of personally identifiable information, and assigned a pseudonymous LumkoMDX identifier."
  },
  {
    title: "Insight flows back",
    body:
      "Authorised users receive governed answers: aggregate statistics, population patterns, cohort distributions, and a full audit trail."
  }
];

export const capabilityCards = [
  {
    eyebrow: "Federation",
    title: "Federation layer",
    body:
      "Connect clinical data across facilities, hospital groups, and institutional networks without centralising patient identity or disrupting existing governance."
  },
  {
    eyebrow: "Permissioning",
    title: "Audit and consent",
    body:
      "Every query is logged. Every access is permissioned. Consent status is tracked through grant, amendment, and withdrawal."
  },
  {
    eyebrow: "Intelligence",
    title: "Insight studio",
    body:
      "Natural-language aggregate intelligence for clinicians, researchers, and executives. No SQL. No data exports. No exposure."
  }
];

export const homeTrustItems = [
  {
    strong: "Identity never enters the platform.",
    body:
      "It is not merely encrypted, hidden, or redacted. It is architecturally absent from the LumkoMDX platform boundary."
  },
  {
    strong: "Compliance is structural.",
    body:
      "POPIA alignment, audit lineage, consent management, and k-anonymity are load-bearing elements of the architecture."
  },
  {
    strong: "FHIR R4 aligned from the source.",
    body:
      "Data entering LumkoMDX is structured to HL7 FHIR R4, supporting interoperability across systems, countries, and institutions."
  },
  {
    strong: "African-led sovereign infrastructure.",
    body:
      "The platform is built for healthcare environments where institutional accountability, patient dignity, and local governance matter."
  }
];

export const audiences = [
  {
    role: "Clinicians",
    body:
      "Access federated, governed data without requesting extracts, negotiating new sharing agreements, or waiting for manual anonymisation."
  },
  {
    role: "Researchers",
    body:
      "Work with consented, FHIR-structured, POPIA-aligned African health data that never had to leave its country of origin."
  },
  {
    role: "Institutions",
    body:
      "Enable network-level visibility while each facility retains control of identity and institutional governance."
  },
  {
    role: "Public health teams",
    body:
      "Use aggregate, governed, cross-facility intelligence for surveillance, burden mapping, and resource allocation without centralising identity."
  }
];

export const platformTrustItems = [
  {
    strong: "Identity remains local.",
    body:
      "The source organisation holds the identity mapping. That mapping never leaves Zone One, so LumkoMDX cannot re-identify a patient."
  },
  {
    strong: "POPIA-aligned by design.",
    body:
      "Under the Three-Boundary Model, no reasonably foreseeable method of re-identification exists within the LumkoMDX boundary."
  },
  {
    strong: "FHIR R4 structured.",
    body:
      "The platform is FHIR-native from ingestion to query response, aligned with the direction of African health interoperability."
  },
  {
    strong: "Auditable by default.",
    body:
      "Lineage, consent status, query history, and access records are written continuously as part of the platform operating model."
  }
];

export const platformModules = [
  {
    eyebrow: "Cohort design",
    title: "Cohort Builder",
    body:
      "Compose bounded population questions across connected facilities while policy, consent, and anonymity constraints remain visible."
  },
  {
    eyebrow: "FHIR mapping",
    title: "FHIR Mapper",
    body:
      "Translate authorised clinical structure into HL7 FHIR R4-aligned resources without importing identity fields."
  },
  {
    eyebrow: "Consent control",
    title: "Consent Registry",
    body:
      "Track grant, scope, amendment, and withdrawal so use is governed before any response can leave the platform."
  },
  {
    eyebrow: "Boundary operations",
    title: "Boundary Monitor",
    body:
      "Make the Three-Boundary Model operational: source authority, platform structure, and authorised aggregate use."
  },
  {
    eyebrow: "Audit trail",
    title: "Audit Ledger",
    body:
      "Record who asked, what was requested, which policy applied, what answer returned, and when the event occurred."
  },
  {
    eyebrow: "Response layer",
    title: "Response Console",
    body:
      "Return aggregate answers, cohort distributions, and lineage metadata without raw records or patient identity."
  }
];

export const technicalProof = [
  "Patient identity fields are stripped before platform entry.",
  "FHIR R4 structure is preserved for clinical meaning and interoperability.",
  "Consent scope and role-based access are checked before query execution.",
  "No subgroup smaller than five members can exit the platform.",
  "Every query writes an immutable audit event."
];

export const demoSeeItems = [
  {
    title: "The platform model",
    body:
      "How data stays at the source while governed structure moves through the federation layer and compliant insight flows back."
  },
  {
    title: "The Three-Boundary Model in operation",
    body:
      "The ingestion pipeline, pseudonymisation, k-anonymity enforcement, and audit trail, visible and working."
  },
  {
    title: "The intelligence layer",
    body:
      "A live query through Insight Studio. Natural language in. Governed aggregate intelligence out."
  },
  {
    title: "Your use case",
    body:
      "A conversation about the governance challenge, clinical intelligence need, or research access constraint your institution is facing."
  }
];

export const nextSteps = [
  {
    title: "We review your request",
    body:
      "We read your details before we call so the conversation reflects your institution, role, constraint, and outcome."
  },
  {
    title: "We reach out within one business day",
    body:
      "A team member with relevant clinical, technical, or operational context will schedule the walkthrough."
  },
  {
    title: "You see the platform",
    body:
      "A structured walkthrough of the architecture, governance model, intelligence layer, live query, and fit."
  }
];
