import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import LinuxLogo from "../../images/linux-logo.png"
import WindowsLogo from "../../images/windows-logo.png"
import AppleLogo from "../../images/apple-logo.png"

export default function DownloadSection() {
  return (
    <section className={styles.downloadSection}>
      <Container>
        <h1 className={styles.pageTitle}>Downloads</h1>
        <p className={styles.pageDescription}>Latest Version: v0.1.1 Beta [04/05/2020]</p>

        <div className={styles.platformGrid}>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={LinuxLogo} alt="" />
              <h4 className={styles.title}>Linux</h4>
            </header>
            <ul className={styles.downloadsList}>
                <li><h4>deb</h4><a target="_blank" rel="noopener" href="https://drive.google.com/open?id=1kAEQESBHLW4ZrO0vKUc1X4dT7Wst9UpH">Download</a></li>
                <li><h4>AppImage</h4><a target="_blank" rel="noopener" href="https://drive.google.com/open?id=1iTLzFHm37Sxf33Xe97qVOsE42_0UsGIP">Download</a></li>
            </ul>
          </div>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={WindowsLogo} alt="" />
              <h4 className={styles.title}>Windows</h4>
            </header>
            <ul className={styles.downloadsList}>
                <li><h4>exe</h4><a target="_blank" rel="noopener" href="https://drive.google.com/open?id=1V6w05GB9wX1YIAWF8efm7yyN6q6kgLAA">Download</a></li>
            </ul>
          </div>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={AppleLogo} alt="" />
              <h4 className={styles.title}>Mac Os</h4>
            </header>
            <ul className={styles.downloadsList}>
                <li><h4>Coming soon...</h4></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
