import * as React from "react";
import { FastCommentsCommentCountWidget } from "fastcomments-react";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";

const CODE = `import { FastCommentsCommentCountWidget } from 'fastcomments-react';

export default function CommentCount() {
  return <FastCommentsCommentCountWidget tenantId="demo" urlId="gatsby-demo" />;
}`;

export default function CommentCount() {
    return (
        <Layout active="comment-count">
            <DemoChrome
                breadcrumb="Widgets / Comment Count"
                title="Comment Count"
                subtitle="A low-weight count badge for article listings, cards, and feeds. The number stays live as new comments come in."
                tags={[{ label: "Tenant · demo", brand: true }, { label: "urlId · gatsby-demo" }]}
                code={CODE}
                codeLabel="comment-count.tsx"
            >
                <div className="fc-stage__panel" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontFamily: "var(--fc-mono)", fontSize: 12, color: "var(--fc-ink-mute)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                        Count rendered &rarr;
                    </span>
                    <div style={{ fontFamily: "var(--fc-body)", fontSize: 14, color: "var(--fc-ink)" }}>
                        <FastCommentsCommentCountWidget tenantId="demo" urlId="gatsby-demo" />
                    </div>
                </div>
            </DemoChrome>
        </Layout>
    );
}
