import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"

export default function NoteView() {
  return (
    <Container>
      <div className={styles.noteView}>
        <h3 className={styles.title}>Note</h3>
        <p className={styles.description}>
          Reach out to us via our community channels for support, news and updates regarding Streamon.
        </p>
        <ul className={styles.links}>
          <li>
            <a target="_blank" rel="noopener" href="https://twitter.com/streamonhq">Twitter</a>
          </li>
          <li>
            <a target="_blank" rel="noopener" href="https://t.me/streamonhq">Telegram</a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
