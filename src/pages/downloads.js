import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import DownloadsSection from "../components/DownloadSection"
import NoteView from "../components/NoteView"

const IndexPage = () => (
  <Layout>
    <SEO title="Downloads" />
    <NoteView />
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
          type: "Stable version coming soon, use the beta channel below.",
         }
      ]}
    />
    <DownloadsSection
      title="Beta Channel"
      version="v0.1.4-beta"
      releaseDate="10/06/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/untagged-2aca8763a66d3190fc96/instagram-live-streamer_0.1.4_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/untagged-2aca8763a66d3190fc96/instagram-live-streamer-0.1.4.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/untagged-2aca8763a66d3190fc96/instagram-live-streamer-Setup-0.1.4.exe",
        },
      ]}
      macos={[
        {
          type: "dmg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/untagged-2aca8763a66d3190fc96/instagram-live-streamer-0.1.4.dmg",
        },
        {
          type: "pkg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/untagged-2aca8763a66d3190fc96/instagram-live-streamer-0.1.4.pkg",
        },
      ]}
    />
  </Layout>
)

export default IndexPage
