import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { WIDGETS, FLOWS } from "../components/nav-data";
import type { Entry } from "../components/nav-data";

function Grid({ items }: { items: Entry[] }) {
    return (
        <div className="fc-grid">
            {items.map((item, i) => (
                <Link
                    key={item.key}
                    to={item.path}
                    className="fc-card"
                    style={{ animation: "fc-rise 480ms ease both", animationDelay: `${i * 40}ms` }}
                >
                    <span className="fc-card__kind">{item.kind}</span>
                    <span className="fc-card__title">{item.label}</span>
                    <span className="fc-card__hint">{item.hint}</span>
                    <span className="fc-card__cta">Open example</span>
                </Link>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <Layout active="home">
            <div className="fc-hero">
                <div>
                    <div className="fc-hero__label">fastcomments / gatsby &middot; showcase</div>
                    <h1 className="fc-hero__title">
                        Comment<br />infrastructure<br /><em>for Gatsby.</em>
                    </h1>
                    <p className="fc-hero__body">
                        Every widget the FastComments React library ships with, dropped into statically-generated Gatsby
                        pages. Running live against the public demo tenant. Use the rail to jump between examples; each
                        page is a pristine implementation you can lift directly into your own site.
                    </p>
                </div>

                <div className="fc-hero__meta">
                    <div className="fc-meta-card">
                        <div className="fc-meta-card__key">Widgets</div>
                        <div className="fc-meta-card__value fc-meta-card__value--gradient">{WIDGETS.length}</div>
                    </div>
                    <div className="fc-meta-card">
                        <div className="fc-meta-card__key">Flows</div>
                        <div className="fc-meta-card__value">{FLOWS.length}</div>
                    </div>
                    <div className="fc-meta-card">
                        <div className="fc-meta-card__key">Package</div>
                        <div className="fc-meta-card__value" style={{ fontFamily: "var(--fc-mono)", fontSize: 14, marginTop: 10 }}>fastcomments-react</div>
                    </div>
                    <div className="fc-meta-card">
                        <div className="fc-meta-card__key">Runtime</div>
                        <div className="fc-meta-card__value" style={{ fontFamily: "var(--fc-mono)", fontSize: 14, marginTop: 10 }}>Gatsby &middot; React 18</div>
                    </div>
                </div>
            </div>

            <div className="fc-section-title">
                <span>01</span>
                <h2>Widgets</h2>
                <div className="fc-rule" />
                <span>{WIDGETS.length} components</span>
            </div>
            <Grid items={WIDGETS} />

            <div className="fc-section-title">
                <span>02</span>
                <h2>Flows &amp; configuration</h2>
                <div className="fc-rule" />
                <span>{FLOWS.length} recipes</span>
            </div>
            <Grid items={FLOWS} />
        </Layout>
    );
}
