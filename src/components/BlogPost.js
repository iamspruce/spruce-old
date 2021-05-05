import React from "react"
import { graphgl, graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do YYYY")
            publishedAt
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="article-list" id="articles">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <Link to={`/blog/${edge.node.slug}`}>
              <article className="article-card">
                <div className="article-card-content">
                  <header>
                  <small className="text-xsmall text-bold">{edge.node.publishedAt}</small>
                <p className="text-small"><time datetime={edge.node.publishedDate}>{edge.node.publishedDate}</time></p>
                  </header>
                  <h5 className="article-card-title text-lg">{edge.node.title}</h5>
                  <footer>
                  <ul className="flex">
                    <li>
                      <Link to={`/blog/${edge.node.slug}`}>
                        <span className="text-small">Read more</span>
                        <span className="icon icon-left"><Icon name="caret-right" size="14" /></span>
                      </Link>
                    </li>
                  </ul>
                  </footer>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default BlogPost
