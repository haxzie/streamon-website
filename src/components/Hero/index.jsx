import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import Button from "../Button"
import { Link } from "gatsby"

export default function Hero({ title, description }) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.contents}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <Link to="/downloads">
            <Button className={styles.downloadButton} iconLeft="get_app">
              Download
            </Button>
          </Link>
          <span className={styles.helpText}>
            Available for Windows and Linux
          </span>
        </div>
      </Container>
    </section>
  )
}
