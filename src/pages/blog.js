import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogsList from "../components/BlogsList"

export default function Blogs({ data }) {
  const blogsData = data.allMarkdownRemark.nodes.map(item => item.frontmatter)
  return (
    <Layout>
      <BlogsList blogs={blogsData} />
    </Layout>
  )
}

export const blogsQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fileAbsolutePath: { regex: "/contents/blogs/.*/.*[.]md$/" }
      }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          slug
          title
          description
          author
          username
          date(formatString: "DD/MM/YYYY")
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
        wordCount {
          words
        }
      }
    }
  }
`
