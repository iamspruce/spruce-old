import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import Card from "../components/Card"
import { graphql, useStaticQuery } from "gatsby"

export default function Projects(props) {
  let title = "Projects"
  let desc = "A list of my all my projects including personal projects..."
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
    <div className="page">
      <Layout
        pageMeta={{
          title: "Projects",
          description: desc,
        }}
        location={props.location}
      >
        <PageHero title={`${title}`} desc={`${desc}`} />
        <div className="section-side-pad section-pad">
          <div className="flex">
            <div className="line-wrapper">
              <span className="line line-vertical">
                <span>&lt;Projects/&gt;</span>
              </span>
            </div>
            <ul className="blog-list">
              {data.allContentfulProjects.edges.map(edge => (
                <li key={edge.node.id}>
                  <a href={`${edge.node.url}`}>
                    <Card
                      date={edge.node.lang}
                      desc={edge.node.lang}
                      title={edge.node.name}
                      icon="icon-star"
                      iconDesc={edge.node.star}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
