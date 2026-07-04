import * as React from "react";
import { FastCommentsCommentWidget } from "fastcomments-react"; // Here we include the FastComments library.
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";
import { useTheme } from "../components/theme";

/*
  Here we use the FastComments comment widget component. Pass in your tenant id instead of "demo".
  You'll find your tenant id in the vanilla js widget code here, if you're logged in to your account:
  https://fastcomments.com/auth/my-account/get-acct-code
  By default the widget uses the page URL as the identifier for how to store comments, but you can
  define your own via "urlId".
 */
const CODE = `import { FastCommentsCommentWidget } from 'fastcomments-react';

export default function CommentsPage() {
  return <FastCommentsCommentWidget tenantId="demo" urlId="gatsby-demo" />;
}`;

export default function Commenting() {
    const { isDark } = useTheme();
    return (
        <Layout active="comments">
            <DemoChrome
                breadcrumb="Widgets / Live Comment Widget"
                title="Live Comment Widget"
                subtitle="The flagship live commenting widget. Replies, voting, moderation, media attachments, and realtime sync come bundled in the default configuration."
                tags={[{ label: "Tenant · demo", brand: true }, { label: "urlId · gatsby-demo" }]}
                code={CODE}
                codeLabel="commenting.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsCommentWidget tenantId="demo" urlId="gatsby-demo" hasDarkBackground={isDark} />
                </div>
            </DemoChrome>
        </Layout>
    );
}
