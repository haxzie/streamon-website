import React from "react"
import styles from "./styles.module.scss"
import PlayButton from "../../images/play-button.svg"

export default function WatchOnYouTubeCard({ link }) {
  return (
    <div className={styles.watchOnYouTubeCard}>
      <img className={styles.playIcon} src={PlayButton} />
      
        <p>
          This tutorial is available as a video. <a target="_blank" rel="noopener" href={link}>Watch this tutorial on YouTube</a>
        </p>
    </div>
  )
}
