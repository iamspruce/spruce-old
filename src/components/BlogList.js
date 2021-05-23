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
          slug
        }
      }
    }
  }
`)
      return (
            <ul className="article__list">
               {data.allContentfulBlogPost.edges.map((edge) => (
            <Link to={`/blog/${edge.node.slug}`} key={edge.node.id}>
              <article className="article__post">
                  <header>
                  <h2 className="text-lg">
                    {edge.node.title}
                  </h2>
                  <p>summary goes here</p>
                    
                    <p><small className="text-xsmall text-gray">
                      1 Minute(s) Read Time
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
        ))}   
            </ul>
      )
}
