import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import { Link } from "gatsby"

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
            <Link to="/terms">Terms and Privacy Policy</Link>
          </span>
        </div>
      </Container>
    </footer>
  )
}
