import * as React from "react";
import { FastCommentsRecentCommentsWidget } from "fastcomments-react";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

const CODE = `import { FastCommentsRecentCommentsWidget } from 'fastcomments-react';

export default function RecentComments() {
  return <FastCommentsRecentCommentsWidget tenantId="demo" count={10} />;
}`;

export default function RecentComments() {
    const { isDark } = useTheme();
    return (
        <Layout active="recent-comments">
            <DemoChrome
                breadcrumb="Widgets / Recent Comments"
                title="Recent Comments"
                subtitle="A live, cross-site stream of the newest comments across every thread on your account. Ideal for a sidebar, a community landing page, or a moderation overview."
                tags={[{ label: "Tenant · demo", brand: true }, { label: "count · 10" }]}
                code={CODE}
                codeLabel="recent-comments.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsRecentCommentsWidget tenantId="demo" count={10} hasDarkBackground={isDark} />
                </div>
            </DemoChrome>
        </Layout>
    );
}
