import React, { Children } from "react"
import styles from "./styles.module.scss"
import Container from "../Container"

export default function TextContainer({ children }) {
  return (
    <Container>
      <div className={styles.textContainer} dangerouslySetInnerHTML={{__html: children}}>
      </div>
    </Container>
  )
}
