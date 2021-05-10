import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"


export const BlogList = () => {
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
          excerpt
        }
      }
    }
  }
`)
      return (
            <ul className="article__list">
               {data.allMarkdownRemark.edges.map((edge) => (
            <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.id}>
              <article className="article__post">
                  <header>
                  <h2 className="text-lg">
                    {edge.node.frontmatter.title}
                  </h2>
                  <p>{edge.node.excerpt}</p>
                    
                    <p><small className="text-xsmall text-gray">
                      {edge.node.timeToRead} Minute(s) Read Time
                    </small></p>
                  </header>
                  
                  <footer>
                    <ul className="flex j-btw j-bsl">
                          <li>
                          <p className="text-small">
                      <time datetime={edge.node.date}>
                        {edge.node.frontmatter.date}
                      </time>
                    </p>
                    <small className="text-gray text-xsmall">
                      {edge.node.frontmatter.publishedAt}
                    </small>
                          </li>
                      <li>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
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
