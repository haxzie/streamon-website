import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import LinuxLogo from "../../images/linux-logo.png"
import WindowsLogo from "../../images/windows-logo.png"
import AppleLogo from "../../images/apple-logo.png"

export default function DownloadSection({
  title,
  version,
  releaseDate,
  windows,
  linux,
  macos,
}) {
  return (
    <section className={styles.downloadSection}>
      <Container>
        <h1 className={styles.pageTitle}>{title}</h1>
        <p
          className={styles.pageDescription}
        >{`Latest Version: ${version} [${releaseDate}]`}</p>

        <div className={styles.platformGrid}>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={LinuxLogo} alt="" />
              <h4 className={styles.title}>Linux</h4>
            </header>
            <ul className={styles.downloadsList}>
              {linux.map(item => (
                <li>
                  <h4>{item.type}</h4>
                  <a target="_blank" rel="noopener" href={item.link}>
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.platformCard}>
            <header>
              <img className={styles.platformIcon} src={WindowsLogo} alt="" />
              <h4 className={styles.title}>Windows</h4>
            </header>
            <ul className={styles.downloadsList}>
              {windows.map(item => (
                <li>
                  <h4>{item.type}</h4>
                  <a target="_blank" rel="noopener" href={item.link}>
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {macos ? (
            <div className={styles.platformCard}>
              <header>
                <img className={styles.platformIcon} src={AppleLogo} alt="" />
                <h4 className={styles.title}>Mac Os</h4>
              </header>
              <ul className={styles.downloadsList}>
                {macos.map(item => (
                  <li>
                    <h4>{item.type}</h4>
                    {item.link ? (
                      <a target="_blank" rel="noopener" href={item.link}>
                        Download
                      </a>
                    ) : (
                      <></>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </section>
  )
}
