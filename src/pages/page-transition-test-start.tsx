import * as React from "react"
import { FastCommentsCommentWidget } from 'fastcomments-react'; // Here we include the FastComments library.
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { Link } from "gatsby"

export default function PageTransitionTestStart() {
  return <PageTransition>
    <p>
      <Link to="/page-transition-test-end">Start transition</Link>
    </p>
      <FastCommentsCommentWidget tenantId="demo" />
  </PageTransition>;
}
