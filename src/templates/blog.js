import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import SEO from "../components/SEO"
import PageHero from "../components/PageHero"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      coverImage {
        fixed(toFormat: WEBP, width: 750) {
          src
        }
      }
      title
      publishedDate(formatString: "MMM Do, YYYY")
      summary
      postAction
      postActionLink
      body {
        raw
        references {
          title
          description
          fluid(toFormat: WEBP, maxWidth: 686) {
            src
          }
        }
      }
    }
  }
`

export default function BlogPost({ data }, props) {
  const post = data.contentfulBlogPost
  const image = post.coverImage.fixed.src
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = post.body.references[0].title
        const url = post.body.references[0].fluid.src
        const caption = post.body.references[0].description
        return (
          <figure>
            <img src={url} alt={alt} />
            <figcaption>{caption}</figcaption>
          </figure>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p style={{ marginBottom: 2 + 'em'}}>{children}</p>
    },
  }
  return (
    <div className="page">
      <Layout>
        <SEO title={post.title} description={post.summary} image={image} pageType="article" />
          <article className="post">
            <header>
              <PageHero title={post.title} desc={post.summary} time={post.publishedDate} />
            </header>

            <div className="wrapper__inner post__body e-content" itemprop="articleBody">
              {renderRichText(data.contentfulBlogPost.body, options)}
            </div>
          </article>
      </Layout>
      </div>
  )
}
