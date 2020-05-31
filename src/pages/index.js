import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import VideoSection from "../components/VideoSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Stream live to instagram from Windows/Linux" />  
    <Hero title="Engage live with your Instagram audience like never before!"
    description="Go live with high quality stream from your desktop/laptop. Creating streaming links to Instagram Live with a single click!"/>
    <VideoSection/>
  </Layout>
)

export default IndexPage
