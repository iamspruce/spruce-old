import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../../content/theme.json"


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
  let meta = data.site.siteMetadata;
  let JsonData = theme
  return (
  <Helmet title={`${meta.title} | ${title}`}>
    <script type="application/ld+json">
    {`
        {
          "@context": "https://schema.org",
          "@type": "website",
          "url": "https://iamspruce.dev",
          "name": "Spruce",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+2348137781578",
            "contactType": "Customer Support" 
          }
        }
      `}
  </script>
 
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
