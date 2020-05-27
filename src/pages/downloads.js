import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import DownloadsSection from "../components/DownloadSection"
import NoteView from "../components/NoteView";

const IndexPage = () => (
  <Layout>
    <SEO title="Downloads" />
    <NoteView/>
    <DownloadsSection
      title="Downloads [Stable]"
      version="v0.1.3"
      releaseDate="28/05/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/v0.1.3/streamon_0.1.3_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/v0.1.3/streamon-0.1.3.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/v0.1.3/streamon.Setup.0.1.3.exe",
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
      version="v0.1.3-beta"
      releaseDate="28/05/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/v0.1.3/streamon_0.1.3_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/v0.1.3/streamon-0.1.3.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/v0.1.3/streamon.Setup.0.1.3.exe",
        },
      ]}
    />
  </Layout>
)

export default IndexPage
