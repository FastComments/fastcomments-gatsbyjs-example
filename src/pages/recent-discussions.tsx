import * as React from "react";
import { FastCommentsRecentDiscussionsWidget } from "fastcomments-react";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

const CODE = `import { FastCommentsRecentDiscussionsWidget } from 'fastcomments-react';

export default function RecentDiscussions() {
  return <FastCommentsRecentDiscussionsWidget tenantId="demo" count={10} />;
}`;

export default function RecentDiscussions() {
    const { isDark } = useTheme();
    return (
        <Layout active="recent-discussions">
            <DemoChrome
                breadcrumb="Widgets / Recent Discussions"
                title="Recent Discussions"
                subtitle="The most active threads on your account, ranked by recent activity. A ready-made 'what's hot' module for homepages and community hubs."
                tags={[{ label: "Tenant · demo", brand: true }, { label: "count · 10" }]}
                code={CODE}
                codeLabel="recent-discussions.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsRecentDiscussionsWidget tenantId="demo" count={10} hasDarkBackground={isDark} />
                </div>
            </DemoChrome>
        </Layout>
    );
}
