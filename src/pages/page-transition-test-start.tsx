import * as React from "react";
import { FastCommentsCommentWidget } from "fastcomments-react"; // Here we include the FastComments library.
import PageTransition from "gatsby-v2-plugin-page-transitions";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

const CODE = `import PageTransition from 'gatsby-v2-plugin-page-transitions';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { Link } from 'gatsby';

export default function Page() {
  return (
    <PageTransition>
      <Link to="/page-transition-test-end">Next</Link>
      <FastCommentsCommentWidget tenantId="demo" urlId="gatsby-demo-transition" />
    </PageTransition>
  );
}`;

export default function PageTransitionTestStart() {
    const { isDark } = useTheme();
    return (
        <Layout active="page-transitions">
            <DemoChrome
                breadcrumb="Flows / Page Transitions"
                title="Page Transitions"
                subtitle="FastComments rides along with Gatsby's client-side route transitions. The thread stays mounted and in sync as you cross-fade between statically-generated pages that share a urlId."
                tags={[{ label: "Step · 1 of 2", brand: true }, { label: "urlId · gatsby-demo-transition" }]}
                code={CODE}
                codeLabel="page-transition-test-start.tsx"
            >
                <PageTransition>
                    <div className="fc-stage__panel" style={{ padding: 20 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, boxShadow: "inset 0 -1px 0 0 var(--fc-border)", marginBottom: 20, flexWrap: "wrap" }}>
                            <Link to="/page-transition-test-end" className="fc-btn fc-btn--primary">Start transition &rarr;</Link>
                            <span style={{ fontFamily: "var(--fc-mono)", fontSize: 12, color: "var(--fc-ink-mute)", marginLeft: "auto" }}>page one</span>
                        </div>
                        <div className="fc-stage__panel fc-stage__panel--light" style={{ padding: 20 }}>
                            <FastCommentsCommentWidget tenantId="demo" urlId="gatsby-demo-transition" hasDarkBackground={isDark} />
                        </div>
                    </div>
                </PageTransition>
            </DemoChrome>
        </Layout>
    );
}
