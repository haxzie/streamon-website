import React, { useState } from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import LogoRef from "../../images/logo.svg"
import { Link } from "gatsby"
import MenuIcon from "../../images/open-menu.svg"
import CloseIcon from "../../images/close.svg"


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/haxzie/instagram-live-streamer/releases"
              >
                Changelog
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/haxzie/instagram-live-streamer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.buymeacoffee.com/haxzie"
              >
                Buy me a coffee
              </a>
            </li>
          </ul>

          {/* Mobile navigation dropdown */}
          <div className={styles.mobileDropDown}>
           { !showMenu? <img src={MenuIcon} className={styles.menuToggle} onClick={() => setShowMenu(!showMenu)}/>:
            <img src={CloseIcon} className={styles.menuToggle} onClick={() => setShowMenu(!showMenu)}/>}
            {showMenu ? (
              <ul className={styles.menuOptions}>
                <li>
                  <Link to="/downloads">Downloads</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/haxzie/instagram-live-streamer/releases"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/haxzie/instagram-live-streamer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.buymeacoffee.com/haxzie"
                  >
                    Buy me a coffee
                  </a>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}
