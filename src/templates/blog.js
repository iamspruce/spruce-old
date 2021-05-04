import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate
  }
}
`
const blog = (props) => {
  return (
    <Layout>
      <h1>{props.data}</h1>
    </Layout>
  )
}

export default blog
