import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container"
import BlogCard from "../BlogCard"

export default function BlogsList({ blogs }) {
  console.log({ blogs })
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.blogsList}>
          {blogs.map(blog => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </Container>
    </div>
  )
}
