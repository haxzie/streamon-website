import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import YouTube from "react-youtube"

export default function VideoSection() {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  return (
    <section className={styles.videoSection}>
      <div className={styles.backgroundRibbon}></div>
      <Container>
        <div className={styles.contents}>
          <div className={styles.videoCard}>
            <YouTube
              className={styles.videoPlayer}
              videoId={"7F42Z0mBuok"}
              opts={opts}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
