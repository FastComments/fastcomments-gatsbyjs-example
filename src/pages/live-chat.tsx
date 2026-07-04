import * as React from "react";
import { FastCommentsLiveChatWidget } from "fastcomments-react"; // Here we include the FastComments library.
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

const CODE = `import { FastCommentsLiveChatWidget } from 'fastcomments-react';

export default function LiveChat() {
  return <FastCommentsLiveChatWidget tenantId="demo" urlId="gatsby-demo-live-chat" />;
}`;

export default function LiveChat() {
    const { isDark } = useTheme();
    return (
        <Layout active="live-chat">
            <DemoChrome
                breadcrumb="Widgets / Live Chat"
                title="Live Chat"
                subtitle="The streaming flavor of the core widget. Tuned for live events, launches, and broadcasts where message volume would overwhelm a threaded view."
                tags={[{ label: "Tenant · demo", brand: true }, { label: "Mode · streaming" }]}
                code={CODE}
                codeLabel="live-chat.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsLiveChatWidget tenantId="demo" urlId="gatsby-demo-live-chat" hasDarkBackground={isDark} />
                </div>
            </DemoChrome>
        </Layout>
    );
}
