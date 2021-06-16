import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Card from "./Card"

export default function Projects({openTab,props}) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(sort: { fields: name, order: DESC }) {
        edges {
          node {
            id
            name
            lang
            url
            status
            star
          }
        }
      }
    }
  `)
  return (
    <>
      <div className={`article-list about-projects ${openTab}`}>
        {data.allContentfulProjects.edges.map(edge => (
          <a href={`${edge.node.url}`} key={edge.node.id}>
            <Card
              date={edge.node.lang}
              desc={edge.node.lang}
              title={edge.node.name}
              icon="icon-star"
              iconDesc={edge.node.star}
            />
          </a>
        ))}
      </div>
    </>
  )
}
