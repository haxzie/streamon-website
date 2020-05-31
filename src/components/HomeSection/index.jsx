import React from "react"
import Container from "../Container"
import styles from "./styles.module.scss"
import GatsbyImage from "gatsby-image";

export default function HomeSection({ title, description, image, reverse }) {
  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <div className={`${styles.sectionContents} ${reverse? styles.reverse: ''}`}>
          <div className={styles.texts}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desscription}>{description}</p>
          </div>
          <div className={styles.image}>
              <GatsbyImage className={styles.sectionImage} fluid={image} alt="broadcasters"/>
          </div>
        </div>
      </Container>
    </section>
  )
}
