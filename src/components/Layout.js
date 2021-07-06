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
          --primary-color-alt: ${theme.colors["primary-color-alt"]};
          --secondary-color: ${theme.colors["secondary-color"]};
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
            siteUrl
            twitterUsername
            image
          }
        }
      }
    `
  )

  const metaDescription = pageMeta.description || site.siteMetadata.description
  const metaImg =
    pageMeta.image || `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
  const metaKeywords = pageMeta.keywords || site.siteMetadata.keywords
  
  return (
    <div className="wrapper">
      <Helmet>
        <html lang="en-US" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{`${pageMeta.title} | Spruce`}</title>
        <link rel="me" href="https://twitter.com/sprucekhalifa" />
        <link rel="webmention" href="https://webmention.io/iamspruce.dev/webmention" />
        <link rel="pingback" href="https://webmention.io/iamspruce.dev/xmlrpc" />
        <meta
          name="description"
          content={metaDescription}
        />
        <meta property="og:title" content={pageMeta.title} />
        <meta
          property="og:description"
          content={metaDescription}
        />
        <meta property="og:url" content={`${site.siteMetadata.siteUrl}${location.pathname}`} />
        <meta
          property="og:image"
          content={metaImg}
        />
        <meta name="twitter:image:alt" content={pageMeta.imageDesc}></meta>
        <meta name="twitter:card" content="summary" />
        {pageMeta.pageType && 
          <meta name="twitter:card" content="summary__large" />
        }
        {pageMeta.pageType && 
          <style>{`
            .post-title {
              font-family: 'Rock Salt', sans-serif;
            }
          `}</style>
        }
        <meta name="author" content={site.siteMetadata.author} />
        <meta property="og:site_name" content={site.siteMetadata.author} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content={site.siteMetadata.twitterUsername} />
        <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
        {/* <meta property="fb:app_id" content="127677017332959" /> */}
        <link rel="canonical" href={`${site.siteMetadata.siteUrl}${location.pathname}`} />
        <script type="application/ld+json">
          {`
        "name": ${pageMeta.title},
        "description": ${metaDescription},
        "author": {
            "@type":"Person",
            "name":${site.siteMetadata.author}
        },
        "@type":"WebSite",
        "url": ${`${site.siteMetadata.siteUrl}${location.pathname}`},
        "image": ${metaImg},
        "headline": ${pageMeta.title},
        "sameAs":[
            "https://twitter.com/sprucekhalifa",
            "https://github.com/iamspruce",
            "http://www.facebook.com/spruce.emma",
            "http://instagram.com/iam_spruce"
        ],
        "@context":"http://schema.org"
    `}
    </script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png?v=1"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png?v=1"
          sizes="16x16"
        />
        
        <link
          rel="shortcut icon"
          href="/favicon.ico?v=1"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <link
          type="application/atom+xml"
          rel="alternate"
          href="https://iamspruce.dev/feed.xml"
          title={site.siteMetadata.author}
        /> */}

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
