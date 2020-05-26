import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import DownloadsSection from "../components/DownloadSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Downloads" />
    <DownloadsSection
      title="Downloads [Stable]"
      version="v0.1.1"
      releaseDate="04/05/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://drive.google.com/open?id=1kAEQESBHLW4ZrO0vKUc1X4dT7Wst9UpH",
        },
        {
          type: "AppImage",
          link:
            "https://drive.google.com/open?id=1iTLzFHm37Sxf33Xe97qVOsE42_0UsGIP",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://drive.google.com/open?id=1V6w05GB9wX1YIAWF8efm7yyN6q6kgLAA",
        },
      ]}
      macos={[
        {
          type: "coming soon...",
          link: null,
        },
      ]}
    />
    <DownloadsSection
      title="Beta Channel"
      version="v0.1.2-beta"
      releaseDate="26/05/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.2-beta/streamon_0.1.2_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.2-beta/streamon-0.1.2.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.2-beta/streamon.Setup.0.1.2.exe",
        },
      ]}
    />
  </Layout>
)

export default IndexPage
