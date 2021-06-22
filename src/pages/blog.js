import React from "react"
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import Card from "../components/Card"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Blog(props) {
  let title = "Articles: Written Accross The Web"
  let desc =
    "A list of curated articles both on this site and accross the web..."
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
    <div className="page">
      <Layout
        pageMeta={{
          title: "blog",
          keywords: ["cars", "cheap", "deal"],
          description: "blog posts have written across the web",
        }}
        location={props.location}
      >
        <PageHero title={`${title}`} desc={`${desc}`} />
        <div className="section-side-pad section-pad">
          <div className="flex">
            <div className="line-wrapper">
              <span className="line line-vertical">
                <span>&lt;Articles/&gt;</span>
              </span>
            </div>
            <ul className="blog-list">
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
          </div>
        </div>
      </Layout>
    </div>
  )
}
