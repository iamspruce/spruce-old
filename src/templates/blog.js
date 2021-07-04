import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      coverImage {
        description
        fixed(toFormat: WEBP, width: 600, height: 314) {
          src
        }
      }
      title
      publishedDate(formatString: "MMM Do, YYYY")
      summary
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

export default function BlogPost({ data, location }) {
  const post = data.contentfulBlogPost
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
      "hr": node => {
        return (
          <hr className="post__hr" />
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content[0].marks.type == 'code' )
         {
          return <pre><code>{node.content[0].value}</code></pre>;
        }
        return <p>{children}</p>;
      },
      
    },
  }
  return (
    <div>
      <Layout
        pageMeta={{
          title: `${post.title}`,
          description: `${post.summary}`,
          image: `${post.coverImage.fixed.src}`,
          imageDesc: `${post.coverImage.description}`,
          pageType: "article"
        }}
        location={location}
      >
          <article className="post">
            <header className="text-center">
            <a href="#0" target="_blank" rel="noopener noreferrer">Spruce</a> - <time>{post.publishedDate}</time>
              <h1 className="post-title">{post.title}</h1>
            </header>

            <div className="wrapper__inner post__body e-content" itemprop="articleBody">
              {renderRichText(data.contentfulBlogPost.body, options)}
            </div>
          </article>
      </Layout>
      </div>
  )
}
