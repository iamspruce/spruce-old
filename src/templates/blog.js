import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import LoadMore from "../components/LoadMore"

export const query = graphql`
  query($slug: String!) {
    mentions: allWebmention(filter: { wm_slug: { eq: $slug } }) {
      likes: group(field: like_of) {
        totalCount
        edges {
          node {
            authorName
            authorImg {
              childImageSharp {
                gatsbyImageData(
                  width: 38
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            } 
            authorUrl
          }
        }
      }
    
      replies: group(field: in_reply_to) {
        totalCount
        edges {
          node {
            id
            published
            publishedFormated: published(formatString: "MMM Do, YYYY")
            authorName
            authorImg {
              childImageSharp {
                gatsbyImageData(
                  width: 38
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            } 
            authorUrl
            url
            wm_id
            content {
              html
            }
          }
        }
      }
    }

    posts: contentfulBlogPost(slug: { eq: $slug }) {
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
  const post = data.posts
  const mentions = data.mentions.replies
  console.log(mentions)
  const likes = data.mentions.likes
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
      hr: node => {
        return <hr className="post__hr" />
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content[0].marks.type == "code") {
          return (
            <pre>
              <code>{node.content[0].value}</code>
            </pre>
          )
        }
        return <p>{children}</p>
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
          pageType: "article",
        }}
        location={location}
      >
        <article className="post h-entry">
          <header className="text-center">
            <a
              href="https://twitter.com/sprucekhalifa"
              className="p-author h-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spruce
            </a>{" "}
            -{" "}
            <time className="dt-published" datetime={post.publishedDate}>
              {post.publishedDate}
            </time>
            <h1 className="post-title p-name">{post.title}</h1>
            <svg
              width="300"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              className=""
            >
              <path
                d="M 8 5.3997 C 59.8848 -1.0859 51.5872 -0.1283 66.6912 6.4799 C 66.7848 6.5207 92.8152 2.7287 98.7376 2.3391 C 111.1928 1.5197 133.2752 2.9692 146.9872 2.9692 C 173.32 2.9692 185.5776 1.6976 213.96 2.7892 C 238.0408 3.7154 261.5632 3.7794 286.6944 3.7794"
                stroke="var(--primary-color)"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </header>
          <div className="wrapper__inner post__body" itemprop="articleBody">
            <p className="post-summary p-summary">{post.summary}</p>
            <p className="e-content">{renderRichText(post.body, options)}</p>
          </div>
          <footer className="post__footer">
            <p className="post__footer-text">
              Thanks For Reading, <br /> Spruce.
            </p>

            <LoadMore mentions={mentions} likes={likes} />
          </footer>
        </article>
      </Layout>
    </div>
  )
}
