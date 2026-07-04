import * as React from "react";

export { wrapRootElement } from "./src/wrap-root-element";

// Set the theme attribute before first paint so there is no light/dark flash,
// mirroring the inline script in the React/Angular showcases' index.html.
const themeInit = `(function () {
  try {
    var s = localStorage.getItem('fc-showcase-theme');
    if (s !== 'light' && s !== 'dark') {
      s = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-fc-theme', s);
  } catch (e) {}
})();`;

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" });
    setHeadComponents([
        <title key="fc-title">FastComments for Gatsby &middot; Showcase</title>,
        <script key="fc-theme-init" dangerouslySetInnerHTML={{ __html: themeInit }} />,
    ]);
};
