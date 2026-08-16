/** Signal Room design reminder: present Pirros as an independent, evidence-led prospect briefing—not client collateral. */
import { ProspectBrief } from "@/components/ProspectBrief";

export default function Pirros() {
  return <ProspectBrief config={{
    number: "02",
    company: "Pirros",
    routeTheme: "library",
    categoryLabel: "Authority-film prospect brief",
    date: "14 AUG 2026",
    titleBefore: "The detail library is not a",
    titleAccent: "folder.",
    deck: "A research-led concept for explaining how architecture and engineering firms turn past work into design-production intelligence.",
    heroSrc: "/manus-storage/pirros-prospect-hero_a89242c2.jpg",
    heroAlt: "Design professional near an abstract architecture pin-up wall",
    systemHeading: "Design knowledge has value only when it can move, be trusted, and improve inside the work.",
    observed: "Pirros publicly presents an AI project hub for architects and engineers, combining detail and family search with quality control, standards management, and implementation support.",
    analysis: "The story opportunity is not simply faster search. It is the transition from static archives and senior-memory dependency to a working system where reusable decisions can be found, reviewed, applied, and refined without flattening design judgment.",
    systemSrc: "/manus-storage/pirros-prospect-systems_83556e27.jpg",
    systemAlt: "Abstract architectural detail fragments and connected workflow markers on a studio table",
    routes: [
      { number: "01", label: "Find", note: "Past work, context, access", detail: "A useful detail starts as a discoverable operational decision—not a file remembered by the right person." },
      { number: "02", label: "Trust", note: "Standards, review, quality", detail: "Teams need to know which reusable decisions are current, approved, and appropriate before they travel into a project." },
      { number: "03", label: "Apply", note: "Workflow, adoption, project", detail: "Knowledge becomes valuable when it is available inside the production workflow, not merely stored adjacent to it." },
      { number: "04", label: "Improve", note: "Feedback, reuse, learning", detail: "Each project can return evidence to the library, turning accumulated design work into a more useful future asset." },
    ],
    sources: [
      { id: "[1]", label: "PRODUCT POSITIONING", claim: "An AI project hub spanning search, quality control, standards, and implementation.", description: "Pirros describes a unified design-production ecosystem for architects and engineers rather than a static content repository.", href: "https://www.pirros.com/" },
      { id: "[2]", label: "CURRENT NARRATIVE", claim: "Mira gives the company a timely AI story inside the Revit workflow.", description: "Pirros’ public news page identifies a May 2026 launch of Mira, an AI agent for Revit. This briefing treats the launch as a conversation signal—not a claim about capability beyond the public material.", href: "https://www.pirros.com/news" },
      { id: "[3]", label: "CUSTOMER CONTEXT", claim: "The public case-study record supports a human implementation story—with permissions still required.", description: "Pirros’ David Baker Architects case study describes a participatory detail-library workflow. Any numbers, drawings, or customer testimony would require current approval before production use.", href: "https://www.pirros.com/case-studies/david-baker-architecture-and-pirros-collaborative-content-success" },
    ],
    filmTitle: "How design firms turn past work into a competitive advantage.",
    filmCopy: "This is a proposed authority-film premise: make the hidden operational value of a detail library visible before discussing features. The film would follow the learning loop from search and standards to quality control, application, and feedback—using only cleared examples and approved customer evidence.",
    filmChecks: ["Category education without diminishing design judgment", "Customer proof only with current, written release approval", "A mechanism story that does not confuse a product claim with an outcome claim"],
    nextStep: "Pressure-test the learning loop before proposing the film.",
    constraints: "A short working conversation would establish the target audience, the Mira narrative’s approved scope, usable customer evidence, cleared visual material, and the line between a client-owned asset and independent research.",
  }} />;
}
