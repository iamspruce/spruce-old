import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      coverImage {
        fluid(toFormat: WEBP, maxWidth: 750) {
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
          fluid(toFormat: WEBP, maxWidth: 750) {
            src
          }
        }
      }
    }
  }
`

export default function BlogPost({ data }, props) {
  const post = data.contentfulBlogPost
  const image = post.coverImage.fluid.src
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
    },
  }
  return (
      <Layout>
        <SEO title={post.title} description={post.summary} image={image} />
        <section className="section-side-pad">
          <article className="post">
            <header className="post-header">
              <h1 className="post-header__title p-name" itemprop="headline">
                {post.title}
              </h1>
              <div className="post__meta">
                <time
                  className="post-header__time dt-published"
                  itemprop="datePublished"
                  datetime="2018-06-14T00:00:00"
                >
                  {post.publishedDate}
                </time>{" "}
                •{" "}
                <a
                  className="btn btn--primary btn--small"
                  href={`${post.postActionLink}`}
                  target="__blank"
                  rel="noopener noreferrer"
                >{`${post.postAction}`}</a>
              </div>
            </header>

            <div className="post__body e-content" itemprop="articleBody">
              <p className="post__summary">{post.summary}</p>
              {renderRichText(data.contentfulBlogPost.body, options)}
            </div>
          </article>
        </section>
      </Layout>
  )
}
