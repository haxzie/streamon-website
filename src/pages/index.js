import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <Hero title="Stream to Instagram live from your PC"
    description="Create one click streaming links to use in OBS studio or any broadcasting/streaming software"/>
  </Layout>
)

export default IndexPage
