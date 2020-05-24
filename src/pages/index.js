import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import VideoSection from "../components/VideoSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Stream live to instagram from Windows/Linux" />  
    <Hero title="Stream to Instagram live from your PC"
    description="Create one click streaming links to use in OBS studio or any broadcasting/streaming software"/>
    <VideoSection/>
  </Layout>
)

export default IndexPage
