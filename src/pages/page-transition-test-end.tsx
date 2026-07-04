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
      <Link to="/page-transition-test-start">Back</Link>
      <FastCommentsCommentWidget tenantId="demo" urlId="gatsby-demo-transition" />
    </PageTransition>
  );
}`;

export default function PageTransitionTestEnd() {
    const { isDark } = useTheme();
    return (
        <Layout active="page-transitions">
            <DemoChrome
                breadcrumb="Flows / Page Transitions"
                title="Page Transitions"
                subtitle="You just cross-faded to a second statically-generated page. Because both pages share the same urlId, the exact same discussion is here waiting. Head back and the thread persists again."
                tags={[{ label: "Step · 2 of 2", brand: true }, { label: "urlId · gatsby-demo-transition" }]}
                code={CODE}
                codeLabel="page-transition-test-end.tsx"
            >
                <PageTransition>
                    <div className="fc-stage__panel" style={{ padding: 20 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, boxShadow: "inset 0 -1px 0 0 var(--fc-border)", marginBottom: 20, flexWrap: "wrap" }}>
                            <Link to="/page-transition-test-start" className="fc-btn">&larr; Go back</Link>
                            <span style={{ fontFamily: "var(--fc-mono)", fontSize: 12, color: "var(--fc-ink-mute)", marginLeft: "auto" }}>page two</span>
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
