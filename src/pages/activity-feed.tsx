import * as React from "react";
import { FastCommentsUserActivityFeedWidget } from "fastcomments-react";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

const CODE = `import { FastCommentsUserActivityFeedWidget } from 'fastcomments-react';

export default function ActivityFeed() {
  // SSO userId format: \`\${tenantId}:\${appUserId}\`
  return (
    <FastCommentsUserActivityFeedWidget
      tenantId="demo"
      userId="demo:someone@somewhere.com"
      readonly
    />
  );
}`;

export default function ActivityFeed() {
    const { isDark } = useTheme();
    const tenantId = "demo";
    const appUserId = "someone@somewhere.com";
    const fastCommentsUserId = `${tenantId}:${appUserId}`;

    return (
        <Layout active="activity-feed">
            <DemoChrome
                breadcrumb="Widgets / Activity Feed"
                title="User Activity Feed"
                subtitle="A chronological stream of a single user's comments and interactions. Perfect for profile pages, moderation views, and reputation dashboards."
                tags={[{ label: "Tenant · demo", brand: true }, { label: `userId · ${fastCommentsUserId}` }]}
                code={CODE}
                codeLabel="activity-feed.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsUserActivityFeedWidget tenantId={tenantId} userId={fastCommentsUserId} readonly={true} hasDarkBackground={isDark} />
                </div>
            </DemoChrome>
        </Layout>
    );
}
