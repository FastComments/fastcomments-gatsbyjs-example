import * as React from "react";
import { FastCommentsTopPagesWidget } from "fastcomments-react";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

const CODE = `import { FastCommentsTopPagesWidget } from 'fastcomments-react';

export default function TopPages() {
  return <FastCommentsTopPagesWidget tenantId="demo" />;
}`;

export default function TopPages() {
    const { isDark } = useTheme();
    return (
        <Layout active="top-pages">
            <DemoChrome
                breadcrumb="Widgets / Top Pages"
                title="Top Pages"
                subtitle="Your pages ranked by comment activity, turning engagement into a leaderboard. Great for surfacing the liveliest content on your site."
                tags={[{ label: "Tenant · demo", brand: true }]}
                code={CODE}
                codeLabel="top-pages.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsTopPagesWidget tenantId="demo" hasDarkBackground={isDark} />
                </div>
            </DemoChrome>
        </Layout>
    );
}
