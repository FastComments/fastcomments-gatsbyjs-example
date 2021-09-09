import * as React from "react"
import { Link } from "gatsby"
import { navigation } from './index.module.css';

export default function Home() {
  return <div className={navigation}>
    <Link to="/commenting">Commenting Example</Link>
    <Link to="/dark-mode">Commenting Dark Mode Example</Link>
    <Link to="/page-transition-test-start">Commenting Pagination Example</Link>
    <Link to="/collab-chat">Collab Chat Example</Link>
    <Link to="/image-chat">Image Chat Example</Link>
    <Link to="/live-chat">Live Chat Example</Link>
  </div>;
}
