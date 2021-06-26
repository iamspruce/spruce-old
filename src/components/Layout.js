import React from "react"
import Header from "./Header"
import "../css/main.css"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import themes from "../../content/theme.json"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children, pageMeta, location }) {
  function colors(theme) {
    return `
          --primary-color: ${theme.colors["primary-color"]};
          --text: ${theme.colors["text"]};
          --text-alt: ${theme.colors["text-alt"]};
          --background: ${theme.colors["background"]};
          --background-alt: ${theme.colors["background-alt"]};
          --border: ${theme.colors["border"]};
          --shadow: ${theme.colors["shadow"]};
          color-scheme: ${theme.colors["color-scheme"]};
    `
  }
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
            twitterUsername
            image
          }
        }
      }
    `
  )

  const metaDescription = pageMeta.description || site.siteMetadata.description
  const metaImg =
    pageMeta.image || `${site.siteMetadata.url}${site.siteMetadata.image}`
  const metaKeywords = pageMeta.keywords || site.siteMetadata.keywords

  return (
    <div className="wrapper">
      <Helmet>
        <title>{`Spruce | ${pageMeta.title}`}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Spruce" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords.join(",")} />

        <meta
          property="og:url"
          content={`${site.siteMetadata.url}${location.pathname}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:image" content={metaImg} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="iamspruce.dev" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={site.siteMetadata.author} />

        <meta name="twitter:card" content="summary__large" />
        <meta
          name="twitter:site"
          content={`${site.siteMetadata.url}${location.pathname}`}
        />
        <meta name="twitter:creator" content="@sprucekhalifa" />
        <meta
          name="twitter:url"
          content={`${site.siteMetadata.url}${location.pathname}`}
        />
        <meta name="twitter:title" content={pageMeta.title} />
        <meta name="twitter:image" content={metaImg} />

        <meta name="twitter:description" content={metaDescription} />

        <script type="application/ld+json">{`
{
  "@context": "http://schema.org",
  "@type": "website",
  "address": {
  "@type": "PostalAddress",
  "addressLocality": "Nigeria",
  "addressRegion": "NG",
  "postalCode":"11340",
  "streetAddress": "jattu"
  },
  "description": "description will go here",
  "name": "iamspruce.dev",
  "telephone": "+2348137781578",
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
  "geo": {
  "@type": "GeoCoordinates",
  "latitude": "40.75",
  "longitude": "73.98"
  }, 			
  "sameAs" : ["http://www.facebook.com/spruce.emma",
  "http://www.twitter.com/sprucekhalifa",
  "http://instagram.com/iam_spruce"]
}
`}</script>
        <style type="text/css">
          {`
    ${themes
      .map(theme => {
        if (theme.id === "default") {
          return `
          :root {
            ${colors(theme)}
          }
        `
        } else if (theme.id === "dark") {
          return `
          @media (prefers-color-scheme: dark) {
            ${colors(theme)}
          }
        `
        }
      })
      .join("")}
    ${themes
      .map(theme => {
        return `
        [data-theme="${theme.id}"] {
          ${colors(theme)}
        }
      `
      })
      .join("")}
  `}
        </style>
      </Helmet>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
