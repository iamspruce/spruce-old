import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Card from "./Card"

export default function BlogPost({openTab}) {
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
      <ul className={`article-list about-projects ${openTab}`}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/blog/${edge.node.slug}`}>
              <Card
                date={edge.node.publishedDate}
                desc={edge.node.publishedAt}
                title={edge.node.title}
                icon="caret-right"
                iconDesc="Read More"
              />
            </Link>
          </li>
        ))}
      </ul>
  )
}
