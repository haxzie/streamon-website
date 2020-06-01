import React from "react"
import Layout from "../../components/Layout"
import styles from "./styles.module.scss"
import GatsbyImage from "gatsby-image"
import SEO from "../../components/seo"

export default function BlogTemplate({ data }) {
  const { html: contents, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.cover_image.publicURL}
        author={frontmatter.author}
        twitterCardType={`summary_large_image`}
        meta={
          [
            {
              name: "keywords",
              content: frontmatter.keywords.join(',')
            },
            {
              name: "robots",
              content: "index, follow"
            }
          ]
        }
      />
      <div className={styles.blogContainer}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <p className={styles.description}>{frontmatter.description}</p>
        <GatsbyImage
          className={styles.cover}
          fluid={frontmatter.cover_image.childImageSharp.fluid}
        />
        <div
          className={styles.blogContents}
          dangerouslySetInnerHTML={{ __html: contents }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogDataQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      wordCount {
        words
      }
      frontmatter {
        slug
        title
        description
        date(formatString: "DD / MM / YYYY")
        author
        keywords
        cover_image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              srcSet
              tracedSVG
            }
          }
        }
      }
    }
  }
`
