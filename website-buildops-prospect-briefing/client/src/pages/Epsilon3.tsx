/** Signal Room design reminder: present Epsilon3 as an independent, public-source prospect briefing with extra care for technical and security boundaries. */
import { ProspectBrief } from "@/components/ProspectBrief";

export default function Epsilon3() {
  return <ProspectBrief config={{
    number: "03",
    company: "Epsilon3",
    routeTheme: "procedure",
    categoryLabel: "Authority-film prospect brief",
    date: "14 AUG 2026",
    titleBefore: "The procedure is not the",
    titleAccent: "plan.",
    deck: "A research-led concept for explaining how complex operations turn instructions into a live execution system without pretending complexity disappears.",
    heroSrc: "/manus-storage/epsilon3-prospect-hero_277f5f96.jpg",
    heroAlt: "Engineer reviewing an abstract procedure in a modern test and assembly environment",
    systemHeading: "A procedure stops being paperwork when it can connect the people, resources, actions, and learning around the work.",
    observed: "Epsilon3 publicly positions its software around process and resource management for advanced engineering, manufacturing, testing, and operations, including procedure execution, planning, build, test, analysis, and discovery workflows.",
    analysis: "The story opportunity is a mental-model reversal: the procedure is not a document sitting beside the operation. It is a live control surface that can connect requirements, roles, sign-offs, resources, execution history, issues, and learning—as long as the explanation stays inside approved public boundaries.",
    systemSrc: "/manus-storage/epsilon3-prospect-systems_8294adc1.jpg",
    systemAlt: "Abstract precision engineering procedure materials and connected workflow markers",
    routes: [
      { number: "01", label: "Define", note: "Requirements, resources, roles", detail: "Complex work starts with the conditions that must be understood before a procedure can be useful in execution." },
      { number: "02", label: "Execute", note: "Steps, context, evidence", detail: "The procedure becomes a shared operating surface when people can run the work with the relevant context at hand." },
      { number: "03", label: "Verify", note: "Sign-off, issues, traceability", detail: "Evidence of execution, exceptions, and review turn a completed step into an accountable operating record." },
      { number: "04", label: "Learn", note: "Analysis, feedback, iteration", detail: "The useful operational loop returns execution evidence to the next plan without claiming every variable can be controlled." },
    ],
    sources: [
      { id: "[1]", label: "PRODUCT POSITIONING", claim: "Procedure execution and resource management for advanced operations.", description: "Epsilon3’s public site frames the product around complex process and resource management across engineering, manufacturing, testing, and operations.", href: "https://www.epsilon3.io/" },
      { id: "[2]", label: "SYSTEM SCOPE", claim: "Execution, planning, build, test, analysis, and discovery form the stated workflow surface.", description: "The public product materials describe purpose-built modules across the complex-hardware operating lifecycle. This briefing does not infer unlisted integrations, performance, or security capabilities.", href: "https://www.epsilon3.io/products" },
      { id: "[3]", label: "CURRENT NARRATIVE", claim: "Epsilon3 2.0 and Connect extend the public digital-thread conversation.", description: "A June 2026 changelog announces Epsilon3 2.0 and Epsilon3 Connect. Any production scope would need to distinguish current releases from future-facing language and respect security constraints.", href: "https://www.epsilon3.io/behind-the-console/epsilon3-changelog-101" },
    ],
    filmTitle: "How high-stakes teams turn instructions into execution.",
    filmCopy: "This is a proposed authority-film premise: reveal the operating logic behind a live procedure system, then show why repeatable work depends on connecting execution to the people, resources, evidence, and learning around it. The asset should remain useful without disclosing sensitive operations or inflating reliability claims.",
    filmChecks: ["Category education without sensitive operational disclosure", "Public and approved material only—no security theatre", "Explicit separation between product logic, customer evidence, and forward-looking statements"],
    nextStep: "Confirm the public story boundary before proposing the film.",
    constraints: "A short working conversation would clarify the audience, the Epsilon3 2.0 / Connect narrative, public visual material, customer approvals, and any security, export-control, or NDA constraints that must shape the asset from day one.",
  }} />;
}
