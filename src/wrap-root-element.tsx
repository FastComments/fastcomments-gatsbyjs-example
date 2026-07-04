import * as React from "react";
import { ThemeProvider } from "./components/theme";

// Shared by gatsby-browser.js and gatsby-ssr.js so the theme context persists
// across client-side page transitions (the root element stays mounted).
export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
    <ThemeProvider>{element}</ThemeProvider>
);
