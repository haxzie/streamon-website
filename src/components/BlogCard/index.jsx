import React from "react"
import styles from "./styles.module.scss"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

export default function BlogCard({
  slug,
  title,
  description,
  author,
  username,
  cover_image,
  date,
}) {
  return (
    <div className={styles.blogCard}>
      <Link to={slug}>
        <div className={styles.imageWrapper}>
          <GatsbyImage
            className={styles.blogCover}
            fluid={cover_image.childImageSharp.fluid}
          />
        </div>
      </Link>
      <div className={styles.texts}>
        <Link to={slug}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <p className={styles.description}>{description}</p>
      </div>

      {/* <div className={styles.profileDetails}>
        <img
          className={styles.profilePic}
          src={`https://github.com/${username}.png`}
        />
        <div className={styles.profileTexts}>
          <h4 className={styles.author}>{author}</h4>
          <p className={styles.date}>{date}</p>
        </div>
      </div> */}
    </div>
  )
}
