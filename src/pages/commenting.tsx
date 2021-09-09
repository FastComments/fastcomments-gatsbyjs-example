import * as React from "react"
import { FastCommentsCommentWidget } from 'fastcomments-react'; // Here we include the FastComments library.

export default function Home() {
  /*
    Here we use the FastComments comment widget component. Pass in your tenant id instead of "demo".
    You'll find your tenant id in the vanilla js widget code here, if you're logged in to your account: https://fastcomments.com/auth/my-account/get-acct-code
    By default the widget will uses the page URL as the identifier for how to store comments, but you can define your own via "urlId". See here: https://github.com/FastComments/fastcomments-react/blob/master/src/index.tsx#L21
   */
  return <FastCommentsCommentWidget tenantId="demo" />;
}
