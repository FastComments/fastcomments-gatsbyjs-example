import * as React from "react"
import {useRef} from "react";
import { FastCommentsCollabChatWidget } from 'fastcomments-react'; // Here we include the FastComments library.

export default function Home() {
  const contentRef = useRef(null);
  return (
    <div>
      <div ref={contentRef}>This is some text that will have collab chat enabled.</div>
      <FastCommentsCollabChatWidget tenantId="demo" targetRef={contentRef}/>
    </div>
  )
}
