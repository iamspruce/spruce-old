import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Icon from "./Icon"

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
            <article className="article-card">
              <div className="article-card-content">
                <header>
                  <p className="text-small">{edge.node.lang}</p>
                  <h5 className="text-lg">
                    {edge.node.name}
                  </h5>
                </header>
                <p className="text-medium">{edge.node.status}</p>
                <footer>
                  <div className="flex j-bsl" >
                    <div style={{ marginRight:8 + 'px'}}>
                     <Icon name="icon-star" size="14px" />
                    </div>
                    <span className="text-small">
                    {edge.node.star}
                      <span className="sr-only">stars</span>
                    </span>
                  </div>
                </footer>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  )
}
