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
      version="v0.1.8"
      releaseDate="19/09/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8/instagram-live-streamer_0.1.8_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8/instagram-live-streamer-0.1.8.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8/instagram-live-streamer-Setup-0.1.8.exe",
        },
      ]}
      macos={[
        {
          type: "dmg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8/instagram-live-streamer-0.1.8.dmg",
        },
        {
          type: "pkg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8/instagram-live-streamer-0.1.8.pkg",
        },
      ]}
    />
    <DownloadsSection
      title="Beta Channel"
      version="v0.1.8-beta"
      releaseDate="19/09/2020"
      linux={[
        {
          type: "deb",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8-beta/instagram-live-streamer_0.1.8-beta_amd64.deb",
        },
        {
          type: "AppImage",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8-beta/instagram-live-streamer-0.1.8-beta.AppImage",
        },
      ]}
      windows={[
        {
          type: "exe",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8-beta/instagram-live-streamer-Setup-0.1.8-beta.exe",
        },
      ]}
      macos={[
        {
          type: "dmg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8-beta/instagram-live-streamer-0.1.8-beta.dmg",
        },
        {
          type: "pkg",
          link:
            "https://github.com/haxzie/instagram-live-streamer/releases/download/0.1.8-beta/instagram-live-streamer-0.1.8-beta.pkg",
        },
      ]}
    />
  </Layout>
)

export default IndexPage
