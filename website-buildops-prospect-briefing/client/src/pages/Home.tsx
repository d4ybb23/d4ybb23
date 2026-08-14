/**
 * Signal Room design reminder: Swiss information design + industrial wayfinding.
 * Separate source-backed observations, the film hypothesis, and all relationship boundaries.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  FileSearch,
  Layers3,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const sections = [
  ["01", "Brief"],
  ["02", "System"],
  ["03", "Evidence"],
  ["04", "Film angle"],
  ["05", "Boundary"],
] as const;

const sourceLinks = [
  {
    id: "[1]",
    title: "BuildOps — Mission Control for Commercial Contractors",
    note: "Product positioning and connected-workflow claims.",
    href: "https://buildops.com/",
  },
  {
    id: "[2]",
    title: "Your AI Playbook for Field Service Contractors & Teams",
    note: "AI and field-service workflow framing, April 2026.",
    href: "https://buildops.com/resources/ai-for-contractors",
  },
  {
    id: "[3]",
    title: "BuildOps Names Dzmitry Markovich CTO",
    note: "Company growth, leadership, and OpsAI narrative, May 2026.",
    href: "https://buildops.com/resources/welcome-dzmitry",
  },
];

const routePoints = [
  {
    number: "01",
    label: "Field signal",
    detail: "A job begins where work is physical, mobile, and time-sensitive.",
    note: "Service, crews, assets",
  },
  {
    number: "02",
    label: "Shared record",
    detail: "The useful handoff is not another status update; it is a record that stays intact across the operation.",
    note: "Dispatch, project, context",
  },
  {
    number: "03",
    label: "Margin signal",
    detail: "Labor, materials, and progress become visible early enough to inform an operating decision.",
    note: "Time, purchasing, cost",
  },
  {
    number: "04",
    label: "Customer closeout",
    detail: "The job leaves the field with a documented outcome and a path to the invoice.",
    note: "Report, invoice, trust",
  },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

function SourceChip({ children }: { children: React.ReactNode }) {
  return <span className="source-chip"><FileSearch size={12} strokeWidth={1.8} /> {children}</span>;
}

export default function Home() {
  const [active, setActive] = useState("Brief");
  const [selectedRoute, setSelectedRoute] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.getAttribute("data-section") ?? "Brief");
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0.04 },
    );

    document.querySelectorAll<HTMLElement>("[data-section]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (label: string) => {
    document.getElementById(label.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#brief" aria-label="Return to briefing start">
          <img src="/manus-storage/evolve-human-field-note-mark_172cc064.png" alt="" />
          <span>EVOLVE HUMAN</span>
          <b>/</b>
          <em>FIELD NOTE</em>
        </a>
        <div className="topbar-meta">
          <span>RESEARCH DRAFT</span>
          <span className="meta-dot" />
          <span>14 AUG 2026</span>
        </div>
      </header>

      <div className="brief-grid">
        <aside className="index-rail" aria-label="Briefing sections">
          <div className="rail-stamp">
            <span>FIELD NOTE</span>
            <strong>01</strong>
            <p>PROSPECT<br />BRIEFING</p>
          </div>
          <nav>
            {sections.map(([number, label]) => (
              <button
                className={active === label ? "rail-link active" : "rail-link"}
                key={label}
                onClick={() => scrollTo(label)}
              >
                <small>{number}</small>
                <span>{label}</span>
              </button>
            ))}
          </nav>
          <div className="rail-foot">
            <span className="status-light" />
            <p>PRE-SEND<br />ONLY</p>
          </div>
        </aside>

        <main>
          <section id="brief" data-section="Brief" className="hero-section section-anchor">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Authority-film prospect brief</div>
              <h1>The operating story beneath <span>“one system.”</span></h1>
              <p className="hero-dek">
                A research-led concept for explaining why commercial work becomes harder to run when the field, office, finance, and customer experience lose the same thread.
              </p>
              <div className="hero-actions">
                <button onClick={() => scrollTo("System")} className="primary-action">
                  Read the mechanism <ArrowDownRight size={17} />
                </button>
                <span className="read-time">04 MIN READ<br />PUBLIC SOURCES ONLY</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Commercial technician overlooking rooftop equipment">
              <img src="/manus-storage/buildops-prospect-hero_e3daadc8.jpg" alt="Technician on a commercial rooftop near mechanical equipment" />
              <div className="visual-caption"><span>01 / FIELD CONTEXT</span><i /> <span>EDITORIAL CONCEPT</span></div>
            </div>
            <div className="relationship-notice">
              <ShieldCheck size={15} />
              <p><strong>Independent research draft.</strong> Prepared by Evolve Human from public BuildOps materials. It does not imply authorization, partnership, sponsorship, or client status.</p>
            </div>
          </section>

          <section id="system" data-section="System" className="system-section section-anchor">
            <div className="section-intro">
              <SectionLabel number="02">Observed system</SectionLabel>
              <div>
                <p className="kicker">THE PUBLIC POSITIONING</p>
                <h2>Commercial work does not break because people stop working. It breaks when the record of the work fractures.</h2>
              </div>
            </div>
            <div className="system-layout">
              <article className="system-essay">
                <p className="lead-copy">BuildOps publicly positions its platform around connecting projects, service, and financials for commercial contractors. The useful narrative opportunity is the causal chain beneath that claim—not a louder product tour. <a href="#evidence">[1]</a></p>
                <p>In this briefing, the central mechanism is a shared operational record: a job’s state moves from dispatch and field execution to purchasing, cost visibility, customer communication, and invoice. When those handoffs remain connected, decisions arrive closer to the work itself. That is the story a serious buyer can evaluate.</p>
                <div className="classification-row">
                  <SourceChip>Observed public positioning</SourceChip>
                  <span className="hypothesis-chip"><Sparkles size={12} /> Proposed narrative lens</span>
                </div>
              </article>
              <figure className="systems-figure">
                <img src="/manus-storage/buildops-prospect-systems_3f985894.jpg" alt="Abstract connected route map with technical materials" />
                <figcaption><span>RESEARCH VISUAL / NOT BUILDOPS PRODUCT UI</span><ArrowUpRight size={13} /></figcaption>
              </figure>
            </div>
          </section>

          <section className="route-section" aria-labelledby="route-heading">
            <div className="route-heading-row">
              <div>
                <p className="kicker">THE EXPLANATION MAP</p>
                <h2 id="route-heading">One job. Four handoffs. One record worth following.</h2>
              </div>
              <p>Choose a point to inspect the proposed causal flow.</p>
            </div>
            <div className="route-map">
              <div className="route-line" aria-hidden="true" />
              {routePoints.map((point, index) => (
                <button
                  className={selectedRoute === index ? "route-node selected" : "route-node"}
                  key={point.number}
                  onClick={() => setSelectedRoute(index)}
                  aria-pressed={selectedRoute === index}
                >
                  <span className="route-number">{point.number}</span>
                  <i />
                  <strong>{point.label}</strong>
                  <small>{point.note}</small>
                </button>
              ))}
            </div>
            <div className="route-detail">
              <Route size={18} />
              <div>
                <span>PROPOSED STORY BEAT / {routePoints[selectedRoute].number}</span>
                <p>{routePoints[selectedRoute].detail}</p>
              </div>
              <ChevronRight className="route-chevron" size={20} />
            </div>
          </section>

          <section id="evidence" data-section="Evidence" className="evidence-section section-anchor">
            <div className="section-intro compact">
              <SectionLabel number="03">Evidence ledger</SectionLabel>
              <div>
                <p className="kicker">WHAT THE RECORD SUPPORTS</p>
                <h2>Three public signals. One story worth pressure-testing.</h2>
              </div>
            </div>
            <div className="evidence-list">
              <article className="evidence-card evidence-card-featured">
                <div className="evidence-topline"><SourceChip>Source [1]</SourceChip><span>PRODUCT POSITIONING</span></div>
                <h3>A connected operation: service, projects, and financials in one platform.</h3>
                <p>BuildOps describes a commercial-contractor platform connecting workflows across the job lifecycle. The briefing translates that claim into a narrative question: what actually changes when the work record does not break between departments?</p>
                <a href={sourceLinks[0].href} target="_blank" rel="noreferrer">Read the public source <ExternalLink size={14} /></a>
              </article>
              <article className="evidence-card">
                <div className="evidence-topline"><SourceChip>Source [2]</SourceChip><span>WORKFLOW CONTEXT</span></div>
                <h3>AI becomes useful only where the operating context is already connected.</h3>
                <p>BuildOps’ field-service materials frame AI around dispatch, field reporting, scheduling, purchasing, invoicing, and other workflow handoffs—not an isolated chatbot.</p>
                <a href={sourceLinks[1].href} target="_blank" rel="noreferrer">Read the public source <ExternalLink size={14} /></a>
              </article>
              <article className="evidence-card">
                <div className="evidence-topline"><SourceChip>Source [3]</SourceChip><span>CURRENT NARRATIVE</span></div>
                <h3>OpsAI and enterprise-scale reliability are part of the company’s current operating story.</h3>
                <p>In its May 2026 CTO announcement, BuildOps describes an expansion of OpsAI and a new engineering phase. That creates a timely, bounded reason to ask whether the category needs a mechanism-led explanation.</p>
                <a href={sourceLinks[2].href} target="_blank" rel="noreferrer">Read the public source <ExternalLink size={14} /></a>
              </article>
            </div>
          </section>

          <section id="film-angle" data-section="Film angle" className="film-section section-anchor">
            <div className="film-grid">
              <div className="film-copy">
                <SectionLabel number="04">Authority-film angle</SectionLabel>
                <p className="kicker">WORKING CONCEPT / NOT A PRODUCTION COMMITMENT</p>
                <h2>The data thread that lets commercial contractors run the work instead of chase it.</h2>
                <p>This is a proposed authority-film premise: reveal the decision loop beneath a contractor’s operating system, then let customer evidence and product truth carry the argument. The asset should explain a mechanism well enough to be useful even before anyone books a demo.</p>
                <div className="film-checks">
                  <div><Check size={16} /><span>Category education without competitor theatre</span></div>
                  <div><Check size={16} /><span>Operational specificity without unsupported claims</span></div>
                  <div><Check size={16} /><span>Client-owned story, separate from independent editorial work</span></div>
                </div>
              </div>
              <div className="film-visual-wrap">
                <img src="/manus-storage/buildops-prospect-evidence_0971c427.jpg" alt="Hands reviewing engineering documents at a commercial mechanical workbench" />
                <div className="film-index"><span>CONCEPT ROUTE</span><b>01—04</b></div>
              </div>
            </div>
          </section>

          <section id="boundary" data-section="Boundary" className="boundary-section section-anchor">
            <div className="boundary-top">
              <SectionLabel number="05">Relationship boundary</SectionLabel>
              <div>
                <p className="kicker">WHAT THIS PAGE IS / IS NOT</p>
                <h2>Preparation is not presumption.</h2>
              </div>
            </div>
            <div className="boundary-grid">
              <article>
                <span className="boundary-tag yes">THIS IS</span>
                <p>An independent, public-source research concept prepared by Evolve Human to support a possible first conversation.</p>
              </article>
              <article>
                <span className="boundary-tag no">THIS IS NOT</span>
                <p>A BuildOps property, public campaign, performance guarantee, product endorsement, or representation of any existing relationship.</p>
              </article>
            </div>
            <div className="next-step">
              <div>
                <span>PROPOSED NEXT STEP</span>
                <h3>Pressure-test the story before proposing the film.</h3>
                <p>A 20-minute working conversation would clarify the audience, evidence, approved claims, security constraints, and whether a client-owned authority asset is strategically useful.</p>
              </div>
              <button onClick={() => scrollTo("evidence")} className="outline-action">Revisit source ledger <ArrowUpRight size={16} /></button>
            </div>
          </section>

          <footer className="site-footer">
            <div><Layers3 size={17} /><span>EVOLVE HUMAN / FIELD NOTE 01</span></div>
            <p>Public-source research. No affiliation represented.</p>
            <a href="#brief">Back to top <ArrowUpRight size={13} /></a>
          </footer>
        </main>
      </div>
    </div>
  );
}
