import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogsList from "../components/BlogsList"
import SEO from "../../components/seo"

export default function Blogs({ data }) {
  const blogsData = data.allMarkdownRemark.nodes.map(item => item.frontmatter)
  return (
    <Layout>
      <SEO
        title="The Streamon Community Blog - Tutorials and Guides"
        description="Learn from the streamer's community on using Streamon and learn about building your brand with Instagram using live videos"
        meta={[
          {
            name: "keywords",
            content: "Instagram Live, Live Streaming, Blogs, Streamon",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />
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
