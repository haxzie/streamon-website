import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"

export default function NoteView() {
  return (
    <Container>
      <div className={styles.noteView}>
        <h3 className={styles.title}>Note</h3>
        <p className={styles.description}>
          We are releasing new version of the app every week with bug fixes,
          features and security patches. Keep the app updated with the latest
          version to enjoy uninterrupted streaming. Join our community channels
          for news and updates regarding support, releases, fixes and security
          updates.
        </p>
        <ul className={styles.links}>
          <li>
            <a target="_blank" rel="noopener" href="https://twitter.com/streamonhq">Twitter</a>
          </li>
          <li>
            <a target="_blank" rel="noopener" href="https://t.me/streamonhq">Telegram</a>
          </li>
          <li>
            <a target="_blank" rel="noopener" href="https://github.com/haxzie/instagram-live-streamer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
