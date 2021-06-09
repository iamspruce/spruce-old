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
      postAction
      postActionLink
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
              <figcaption>
                {caption}
              </figcaption>
            </figure>
            )
        }
    }
}
  return (
    <>
    <Head title={post.title} />
    <Layout>
      <section className="section-side-pad">
        <article className="post">
          <header className="post-header">
          <h1 className="post-header__title">{post.title}</h1>
          <time>{post.publishedDate}</time> • <a className="btn btn--primary btn--small" href={`${post.postActionLink}`} target="__blank">{`${post.postAction}`}</a>

          <p>{post.summary}</p>
          </header>

         <p>{renderRichText(data.contentfulBlogPost.body, options)}</p>

        </article>
         {/* <img src={} /> */}
      </section>
    </Layout>
    </>
  )
}

