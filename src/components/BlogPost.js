import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"

export default function BlogPost() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          title
          publishedDate(formatString: "DD MMMM, YYYY")
          publishedAt
          slug
        }
      }
    }
  }
`)
  return (
    <>
      <div className='article-list'>
      {data.allContentfulBlogPost.edges.map((edge) => (
            <Link to={`/blog/${edge.node.slug}`} key={edge.node.id}>
              <article className="article-card">
                <div className="article-card-content">
                  <header>
                    <p className="text-small">
                      <time datetime={edge.node.publishedDate}>
                        {edge.node.publishedDate}
                      </time>
                    </p>
                    <small className="text-gray text-xsmall">
                      {edge.node.publishedAt}
                    </small>
                    
                    
                  </header>
                  <h5 className="article-card-title text-lg">
                    {edge.node.title}
                  </h5>
                  <footer>
                    <ul className="flex">
                      <li>
                        <Link to={`/blog/${edge.node.slug}`}>
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


