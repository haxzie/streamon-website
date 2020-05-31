import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContents}>
          <span>
            <a href="https://getstreamon.com">Streamon</a>&nbsp;©{" "}
            {new Date().getFullYear()}
          </span>
          <span>
            <a href="https://twitter.com/streamonhq">Contact us</a>&nbsp;•&nbsp;
            <a href="https://getstreamon.com/terms">Terms and Privacy Policy</a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
