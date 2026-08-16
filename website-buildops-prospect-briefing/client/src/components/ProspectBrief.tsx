/**
 * Signal Room design reminder: this reusable component preserves an evidence-first editorial
 * briefing. Every route must distinguish public observations, a film hypothesis, and boundaries.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  FileSearch,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Source = { id: string; label: string; claim: string; description: string; href: string };
type RoutePoint = { number: string; label: string; note: string; detail: string };

export type BriefConfig = {
  number: string;
  company: string;
  routeTheme: "flow" | "library" | "procedure";
  categoryLabel: string;
  date: string;
  titleBefore: string;
  titleAccent: string;
  deck: string;
  heroSrc: string;
  heroAlt: string;
  systemHeading: string;
  observed: string;
  analysis: string;
  systemSrc: string;
  systemAlt: string;
  routes: RoutePoint[];
  sources: Source[];
  filmTitle: string;
  filmCopy: string;
  filmChecks: string[];
  nextStep: string;
  constraints: string;
};

const sectionNames = ["Brief", "System", "Evidence", "Film angle", "Boundary"] as const;

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><i /><p>{children}</p></div>;
}

function SourceChip({ children }: { children: React.ReactNode }) {
  return <span className="source-chip"><FileSearch size={12} strokeWidth={1.8} />{children}</span>;
}

export function ProspectBrief({ config }: { config: BriefConfig }) {
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
    <div className={`site-shell brief-${config.routeTheme}`}>
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Return to BuildOps briefing">
          <span className="brand-route-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>EVOLVE HUMAN</span><b>/</b><em>FIELD NOTE</em>
        </a>
        <div className="topbar-meta"><span>RESEARCH DRAFT</span><span className="meta-dot" /><span>{config.date}</span></div>
      </header>

      <div className="brief-grid">
        <aside className="index-rail" aria-label={`${config.company} briefing sections`}>
          <div className="rail-stamp"><span>FIELD NOTE</span><strong>{config.number}</strong><p>PROSPECT<br />BRIEFING</p></div>
          <nav>
            {sectionNames.map((label, index) => (
              <button className={active === label ? "rail-link active" : "rail-link"} key={label} onClick={() => scrollTo(label)}>
                <small>0{index + 1}</small><span>{label}</span>
              </button>
            ))}
          </nav>
          <div className="rail-foot"><span className="status-light" /><p>PRE-SEND<br />ONLY</p></div>
        </aside>

        <main>
          <section id="brief" data-section="Brief" className="hero-section section-anchor">
            <div className="hero-copy">
              <div className="eyebrow"><span /> {config.categoryLabel}</div>
              <h1>{config.titleBefore} <span>{config.titleAccent}</span></h1>
              <p className="hero-dek">{config.deck}</p>
              <div className="hero-actions">
                <button onClick={() => scrollTo("System")} className="primary-action">Read the mechanism <ArrowDownRight size={17} /></button>
                <span className="read-time">04 MIN READ<br />PUBLIC SOURCES ONLY</span>
              </div>
            </div>
            <div className="hero-visual" aria-label={`${config.company} story context`}>
              <img src={config.heroSrc} alt={config.heroAlt} />
              <div className="visual-caption"><span>01 / FIELD CONTEXT</span><i /><span>EDITORIAL CONCEPT</span></div>
            </div>
            <div className="relationship-notice"><ShieldCheck size={15} /><p><strong>Independent research draft.</strong> Prepared by Evolve Human from public {config.company} materials. It does not imply authorization, partnership, sponsorship, or client status.</p></div>
          </section>

          <section id="system" data-section="System" className={`system-section section-anchor ${config.routeTheme}-system`}>
            <div className="thread-marker" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="section-intro">
              <SectionLabel number="02">Observed system</SectionLabel>
              <div><p className="kicker">THE PUBLIC POSITIONING</p><h2>{config.systemHeading}</h2></div>
            </div>
            <div className="system-layout">
              <article className="system-essay">
                <p className="lead-copy">{config.observed} <a href="#evidence">[1]</a></p>
                <p>{config.analysis}</p>
                <div className="classification-row"><SourceChip>Observed public positioning</SourceChip><span className="hypothesis-chip"><Sparkles size={12} /> Proposed narrative lens</span></div>
              </article>
              <figure className="systems-figure"><img src={config.systemSrc} alt={config.systemAlt} /><figcaption><span>RESEARCH VISUAL / NOT {config.company.toUpperCase()} PRODUCT UI</span><ArrowUpRight size={13} /></figcaption></figure>
            </div>
          </section>

          <section className={`route-section ${config.routeTheme}-route`} aria-labelledby="route-heading">
            <div className="route-heading-row"><div><p className="kicker">THE EXPLANATION MAP</p><h2 id="route-heading">One system. Four decisions. A story worth following.</h2></div><p>Choose a point to inspect the proposed causal flow.</p></div>
            <div className="route-map">
              <div className="route-line" aria-hidden="true" />
              {config.routes.map((point, index) => (
                <button className={selectedRoute === index ? "route-node selected" : "route-node"} key={point.number} onClick={() => setSelectedRoute(index)} aria-pressed={selectedRoute === index}>
                  <span className="route-number">{point.number}</span><i /><strong>{point.label}</strong><small>{point.note}</small>
                </button>
              ))}
            </div>
            <div className="route-detail"><Route size={18} /><div><span>PROPOSED STORY BEAT / {config.routes[selectedRoute].number}</span><p>{config.routes[selectedRoute].detail}</p></div><ChevronRight className="route-chevron" size={20} /></div>
          </section>

          <section id="evidence" data-section="Evidence" className={`evidence-section section-anchor ${config.routeTheme}-evidence`}>
            <div className="section-intro compact"><SectionLabel number="03">Evidence ledger</SectionLabel><div><p className="kicker">WHAT THE RECORD SUPPORTS</p><h2>Three public signals. One story worth pressure-testing.</h2></div></div>
            <div className="evidence-list">
              {config.sources.map((source, index) => (
                <article className={index === 0 ? "evidence-card evidence-card-featured" : "evidence-card"} key={source.id}>
                  <div className="evidence-topline"><SourceChip>Source {source.id}</SourceChip><span>{source.label}</span></div>
                  <h3>{source.claim}</h3><p>{source.description}</p>
                  <a href={source.href} target="_blank" rel="noreferrer">Read the public source <ExternalLink size={14} /></a>
                </article>
              ))}
            </div>
          </section>

          <section id="film-angle" data-section="Film angle" className={`film-section section-anchor ${config.routeTheme}-film`}>
            <div className="film-grid">
              <div className="film-copy"><SectionLabel number="04">Authority-film angle</SectionLabel><p className="kicker">WORKING CONCEPT / NOT A PRODUCTION COMMITMENT</p><h2>{config.filmTitle}</h2><p>{config.filmCopy}</p><div className="film-checks">{config.filmChecks.map((check) => <div key={check}><Check size={16} /><span>{check}</span></div>)}</div></div>
              <div className="concept-slate" aria-label="Abstract concept route visual"><span>CONCEPT ROUTE</span><div className="concept-grid"><i /><i /><i /><i /></div><strong>{config.number}—04</strong><p>MECHANISM<br />BEFORE<br />MARKETING</p></div>
            </div>
          </section>

          <section id="boundary" data-section="Boundary" className="boundary-section section-anchor">
            <div className="boundary-top"><SectionLabel number="05">Relationship boundary</SectionLabel><div><p className="kicker">WHAT THIS PAGE IS / IS NOT</p><h2>Preparation is not presumption.</h2></div></div>
            <div className="boundary-grid"><article><span className="boundary-tag yes">THIS IS</span><p>An independent, public-source research concept prepared by Evolve Human to support a possible first conversation.</p></article><article><span className="boundary-tag no">THIS IS NOT</span><p>A {config.company} property, public campaign, performance guarantee, product endorsement, or representation of any existing relationship.</p></article></div>
            <div className="next-step"><div><span>PROPOSED NEXT STEP</span><h3>{config.nextStep}</h3><p>{config.constraints}</p></div><button onClick={() => scrollTo("evidence")} className="outline-action">Revisit source ledger <ArrowUpRight size={16} /></button></div>
          </section>

          <footer className="site-footer"><div><span className="brand-route-mark footer-mark" aria-hidden="true"><i /><i /><i /><i /></span><span>EVOLVE HUMAN / FIELD NOTE {config.number}</span></div><p>Public-source research. No affiliation represented.</p><div className="note-links"><a href="/">BuildOps</a><a href="/pirros">Pirros</a><a href="/epsilon3">Epsilon3</a></div></footer>
        </main>
      </div>
    </div>
  );
}
