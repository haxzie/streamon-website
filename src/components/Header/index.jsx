import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import LogoRef from "../../images/logo.svg"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.contents}>
          {/* Branding area */}
          <Link to="/" className={styles.branding}>
            <img src={LogoRef} className={styles.logo} />
            <h1 className={styles.title}>Streamon</h1>
          </Link>

          {/* Navigation menu  */}
          <ul className={styles.navMenu}>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
            <li>
            <a target="_blank" rel="noopener" href="https://github.com/haxzie/instagram-live-streamer/releases">
                Changelog
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener" href="https://github.com/haxzie/instagram-live-streamer/projects/1">
                Roadmap
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener" href="https://github.com/haxzie/instagram-live-streamer">
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener" href="https://www.buymeacoffee.com/haxzie">Buy me a coffee</a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}
