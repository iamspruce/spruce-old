import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"


export const BlogList = () => {
      const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          title
          publishedDate(formatString: "DD MMMM, YYYY")
          publishedAt
          summary
          slug
        }
      }
    }
  }
`)
      return (
            <ul className="article__list">
               {data.allContentfulBlogPost.edges.map((edge) => (
                 <li key={edge.node.id}>
            <Link to={`/blog/${edge.node.slug}`}>
              <article className="article__post">
                  <header>
                  <h2 className="text-lg">
                    {edge.node.title}
                  </h2>
                  <p>{edge.node.summary}</p>
                    
                    <p><small className="text-xsmall text-gray">
                      1 Minute Read Time
                    </small></p>
                  </header>
                  
                  <footer>
                    <ul className="flex j-btw j-bsl">
                          <li>
                          <p className="text-small">
                      <time datetime={edge.node.publishedDate}>
                        {edge.node.publishedDate}
                      </time>
                    </p>
                    <small className="text-gray text-xsmall">
                      {edge.node.publishedAt}
                    </small>
                          </li>
                      <li>
                        <Link to={`/blog/${edge.node.slug}`}>
                          <span className="icon">
                            <Icon name="caret-right" size="26" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </footer>
              </article>
            </Link>
            </li>
        ))}   
            </ul>
      )
}
