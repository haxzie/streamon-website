/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import streamonCoverImg from "../images/streamon-cover.png"


function SEO({ description, lang, meta, title, image, author, twitterCardType }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const coverImage = image || streamonCoverImg;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `https://getstreamon.com`
        },
        {
          property: `og:site_name`,
          content: `Streamon`
        },
        {
          property: `og:type`,
          content: `object`,
        },
        {
          name: `twitter:card`,
          content: twitterCardType || `summary`,
        },
        {
          name: `twitter:creator`,
          content: author || site.siteMetadata.author,
        },
        {
          name: `author`,
          content: author || site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: coverImage
        },
        {
          name: `twitter:site`,
          content: `@streamonhq`
        },
        {
          name: `twitter:creator`,
          content: `@streamonhq`
        },
        {
          name: `image`,
          content: coverImage
        },
        {
          name: `og:image`,
          content: coverImage
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
