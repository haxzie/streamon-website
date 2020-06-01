import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import VideoSection from "../components/VideoSection"
import HomeSection from "../components/HomeSection"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Stream live to Instagram from Windows/Linux"
        description="Go live with high quality stream from your desktop/laptop. Streamon helps you to create streaming links to Instagram Live with a single click!"
        twitterCardType={`summary_large_image`}
        meta={[
          {
            name: "keywords",
            content: "Instagram Live, Live Streaming, OBS Studio, Streamon",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />
      <Hero
        title="Engage live with your Instagram audience like never before!"
        description="Go live with high quality stream from your desktop/laptop. Streamon helps you to create streaming links to Instagram Live with a single click!"
      />
      <VideoSection />
      <HomeSection
        title="Go live with what you love to do!"
        description="Stream concerts, meetings, conferences, gaming or sports. Streamon helps you to make sure you can get it to your Instagram audience with the best setup you own."
        image={data.sectionImage3.childImageSharp.fluid}
        reverse={true}
      />
      <HomeSection
        title="Supports all major broadcasting softwares!"
        description="Choose your favorite broadcasting software and unleash your creativity. Make use of your cameras, sound systems or anything that makes your stream quality amazing."
        image={data.sectionImage1.childImageSharp.fluid}
      />
      <HomeSection
        title="Stream almost anything to your audience"
        description="YouTube Videos, Live Streams, Movies, Video Conversations, name any content. With minimal setup effort you can stream almost anything to Instagram live. "
        image={data.sectionImage2.childImageSharp.fluid}
        reverse={true}
      />
    </Layout>
  )
}

export const sectionImage = graphql`
  fragment sectionImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const HomePageDataQuery = graphql`
  {
    sectionImage1: file(relativePath: { eq: "images/broadcasters.png" }) {
      ...sectionImage
    }
    sectionImage2: file(relativePath: { eq: "images/Streamers.png" }) {
      ...sectionImage
    }
    sectionImage3: file(relativePath: { eq: "images/modes.png" }) {
      ...sectionImage
    }
  }
`
