import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"

export default function BlogPost(props) {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            publishedAt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`)
  return (
    <>
      <div className="article-list" id="articles">
      {data.allMarkdownRemark.edges.map((edge) => (
            <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.id}>
              <article className="article-card">
                <div className="article-card-content">
                  <header>
                    <p className="text-small">
                      <time datetime={edge.node.date}>
                        {edge.node.frontmatter.date}
                      </time>
                    </p>
                    <small className="text-xsmall text-bold">
                      {edge.node.frontmatter.publishedAt}
                    </small>
                    <p><small className="text-xsmall text-bold">
                      {edge.node.timeToRead} Minute(s) Read Time
                    </small></p>
                    
                  </header>
                  <h5 className="article-card-title text-lg">
                    {edge.node.frontmatter.title}
                  </h5>
                  <footer>
                    <ul className="flex">
                      <li>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                          <span className="text-small">Read more</span>
                          <span className="icon icon-left">
                            <Icon name="caret-right" size="13" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </footer>
                </div>
              </article>
            </Link>
        ))}
      </div>
    </>
  )
}


