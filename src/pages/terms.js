import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import TextContainer from "../components/TextContainer"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function TermsAndPrivacy({ data }) {
  return (
    <Layout>
      <SEO
        title="Terms and Privacy Policy - Streamon"
        description="Read our Terms and Privacy policy. We are transparent and we donot collect any sensitive information, we donot store your credentials or share your data with others"
      />
      <TextContainer>{data.markdownRemark.html}</TextContainer>
    </Layout>
  )
}

export const privacyQuery = graphql`
  {
    markdownRemark(
      fileAbsolutePath: { regex: "/contents/files/privacy[.]md/" }
    ) {
      html
    }
  }
`
