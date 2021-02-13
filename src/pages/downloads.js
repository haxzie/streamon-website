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
      version="v0.2.0"
      releaseDate="13/02/2021"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.2.0/instagram-live-streamer_0.2.0_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.2.0/instagram-live-streamer-0.2.0.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.2.0/instagram-live-streamer-Setup-0.2.0.exe",
        },
      ]}
      macos={[
        {
          type: "dmg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.2.0/instagram-live-streamer-0.2.0.dmg",
        },
        {
          type: "pkg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.2.0/instagram-live-streamer-0.2.0.pkg",
        },
      ]}
    />
    <DownloadsSection
      title="Beta Channel"
      version="v0.1.9-beta"
      releaseDate="28/09/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.9-beta/instagram-live-streamer_0.1.9-beta_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.9-beta/instagram-live-streamer-0.1.9-beta.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.9-beta/instagram-live-streamer-Setup-0.1.9-beta.exe",
        },
      ]}
      macos={[
        {
          type: "dmg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.9-beta/instagram-live-streamer-0.1.9-beta.dmg",
        },
        {
          type: "pkg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.9-beta/instagram-live-streamer-0.1.9-beta.pkg",
        },
      ]}
    />
  </Layout>
)

export default IndexPage
