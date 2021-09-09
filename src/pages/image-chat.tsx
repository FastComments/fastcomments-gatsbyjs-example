import * as React from "react"
import {useRef} from "react";
import { FastCommentsImageChatWidget } from 'fastcomments-react'; // Here we include the FastComments library.

export default function Home() {
  const contentRef = useRef(null);
  const wrapperStyle = {
      position: 'relative'
  }
  return (
    <div style={wrapperStyle}>
      <img ref={contentRef} src="https://fastcomments.com/images/image-chat-demo-1.jpg" alt="Demo Image"/>
      <FastCommentsImageChatWidget tenantId="demo" targetRef={contentRef} />
    </div>
  )
}
