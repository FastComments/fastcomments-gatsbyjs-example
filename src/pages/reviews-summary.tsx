import * as React from "react";
import { FastCommentsReviewsSummaryWidget } from "fastcomments-react";
import Layout from "../components/Layout";
import DemoChrome from "../components/DemoChrome";

const CODE = `import { FastCommentsReviewsSummaryWidget } from 'fastcomments-react';

export default function ReviewsSummary() {
  return <FastCommentsReviewsSummaryWidget tenantId="demo" urlId="demo-ratings" />;
}`;

export default function ReviewsSummary() {
    return (
        <Layout active="reviews-summary">
            <DemoChrome
                breadcrumb="Widgets / Reviews Summary"
                title="Reviews Summary"
                subtitle="A compact star-rating aggregate with per-rating breakdown. Drops into product pages, listing previews, and marketing components wherever sentiment beats individual comments."
                tags={[{ label: "Tenant · demo", brand: true }, { label: "urlId · demo-ratings" }]}
                code={CODE}
                codeLabel="reviews-summary.tsx"
            >
                <div className="fc-stage__panel fc-stage__panel--light">
                    <FastCommentsReviewsSummaryWidget tenantId="demo" urlId="demo-ratings" />
                </div>
            </DemoChrome>
        </Layout>
    );
}
