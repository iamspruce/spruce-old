import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Head from "../components/Head";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      summary
      coverImage {
        title
        description
        fluid(toFormat: WEBP, maxWidth: 750, resizingBehavior: SCALE) {
          src
        }
      }
      body{
        raw
        references {
          title
          description
            fixed(width: 750) {
              width
              height
              src
          }
        }
    }
  }
}
`

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  const options = {
    renderNode: {
        "embedded-asset-block": (node) => {
            const alt = post.body.references[0].title
            const url = post.body.references[0].fixed.src
            const caption = post.body.references[0].description
            return (
            <figure>
            <img src={url} alt={alt}/>
              <caption>
                {caption}
              </caption>
            </figure>
            )
        }
    }
}
  return (
    <>
    <Head title={post.title} />
    <Layout>
      <div className="wrapper">
         <h1>{post.title}</h1>
         <p>{post.publishedDate}</p>
         <img src={post.coverImage.fluid.src} />
         <p>{renderRichText(data.contentfulBlogPost.body, options)}</p>
      </div>
    </Layout>
    </>
  )
}

