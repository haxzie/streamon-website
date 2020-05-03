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
        <p className={styles.pageDescription}>Latest Version: v0.1.0 Beta</p>

        <div className={styles.platformGrid}>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={LinuxLogo} alt="" />
              <h4 className={styles.title}>Linux</h4>
            </header>
            <ul className={styles.downloadsList}>
                <li><h4>deb</h4><a target="_blank" rel="noopener" href="https://drive.google.com/open?id=105q00pu3wTR0leWrXoZWsMakvYQ3nc9h">Download</a></li>
                <li><h4>AppImage</h4><a target="_blank" rel="noopener" href="https://drive.google.com/open?id=1ErG0NlKlBliQHm7RvnZRYNmw-XV1iMdT">Download</a></li>
            </ul>
          </div>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={WindowsLogo} alt="" />
              <h4 className={styles.title}>Windows</h4>
            </header>
            <ul className={styles.downloadsList}>
                <li><h4>exe</h4><a target="_blank" rel="noopener" href="https://drive.google.com/open?id=1NX9F8Jhn-jsNcV8UI628DLBhxoplQNDj">Download</a></li>
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
