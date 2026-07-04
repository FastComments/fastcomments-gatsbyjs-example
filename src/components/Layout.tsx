import * as React from "react";
import type { ReactNode } from "react";
import { Link } from "gatsby";
import { WIDGETS, FLOWS } from "./nav-data";
import type { Entry, EntryKey } from "./nav-data";
import { useTheme } from "./theme";

function NavItem({ item, active }: { item: Entry; active: boolean }) {
    return (
        <Link to={item.path} className={`fc-nav__item${active ? " is-active" : ""}`}>
            <span className="fc-nav__item-label">{item.label}</span>
            <span className="fc-nav__item-hint">{item.hint}</span>
        </Link>
    );
}

export default function Layout({ active, children }: { active?: EntryKey | "home"; children: ReactNode }) {
    const { theme, setTheme } = useTheme();

    return (
        <div className="fc-shell">
            <aside className="fc-rail">
                <Link to="/" className="fc-brand">
                    <img className="fc-brand__logo fc-brand__logo--light" src="https://fastcomments.com/images/svg/v2/logo.svg" alt="FastComments" />
                    <img className="fc-brand__logo fc-brand__logo--dark" src="https://fastcomments.com/images/svg/v2/logo_white.svg" alt="" aria-hidden />
                    <span className="fc-brand__wordmark">
                        <span className="fc-brand__name">FastComments</span>
                        <span className="fc-brand__slug">gatsby &middot; showcase</span>
                    </span>
                </Link>

                <nav className="fc-nav" aria-label="Examples">
                    <div className="fc-nav__group">
                        <div className="fc-nav__heading"><span>01</span><em>Widgets</em></div>
                        {WIDGETS.map((item) => (
                            <NavItem key={item.key} item={item} active={active === item.key} />
                        ))}
                    </div>

                    <div className="fc-nav__group">
                        <div className="fc-nav__heading"><span>02</span><em>Flows &amp; configuration</em></div>
                        {FLOWS.map((item) => (
                            <NavItem key={item.key} item={item} active={active === item.key} />
                        ))}
                    </div>
                </nav>

                <footer className="fc-rail__foot">
                    <div className="fc-theme-toggle" role="group" aria-label="Theme">
                        <button type="button" className={`fc-theme-toggle__btn${theme === "light" ? " is-active" : ""}`} onClick={() => setTheme("light")}>Light</button>
                        <button type="button" className={`fc-theme-toggle__btn${theme === "dark" ? " is-active" : ""}`} onClick={() => setTheme("dark")}>Dark</button>
                    </div>
                    <div><code>npm i fastcomments-react</code></div>
                    <a href="https://fastcomments.com" rel="noopener">fastcomments.com</a>
                </footer>
            </aside>

            <main className="fc-stage">{children}</main>
        </div>
    );
}
