import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description, image }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          twitterUsername
          url
        }
      }
    }
  `)
  let meta = data.site.siteMetadata
  return (
  <Helmet title={`${meta.title} | ${title}`}>
        <meta name="description" content={`${description}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={`${meta.twitterUsername}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={`${description}`} />
        <meta name="twitter:image" content={`${meta.url}/${image}`} />
        <meta property="og:url" content={meta.url} />
  </Helmet>

  )
}

export default Head
