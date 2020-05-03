import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import DownloadsSection from "../components/DownloadSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Downloads" />  
    <DownloadsSection/>
  </Layout>
)

export default IndexPage
