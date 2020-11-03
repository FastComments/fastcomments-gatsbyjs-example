// noinspection ES6UnusedImports
import React from "react"
import { FastCommentsCommentWidget } from 'fastcomments-react'; // Here we include the FastComments library.
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { Link } from "gatsby"

export default function PageTransitionTestEnd() {
  return <PageTransition>
    <p>
      Go <Link to="/page-transition-test-start">back</Link>
    </p>
      <FastCommentsCommentWidget tenantId="demo" />
  </PageTransition>;
}
