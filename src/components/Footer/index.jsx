import React from "react"
import styles from "./styles.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Built with 💖&nbsp;
      {` `}
      <a href="https://haxzie.com">haxzie</a>&nbsp;© {new Date().getFullYear()}
    </footer>
  )
}
