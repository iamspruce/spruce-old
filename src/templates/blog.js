import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Msg from "../components/Msg"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
  }
}
`

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  return (
    <>
    <Msg msgTitle="#Oopsie!" msg="you seems to have stumbled on a page still under development, please check back later" icon="sad-emoji" type="warning" />
    <Layout>
      <div className="wrapper">
         <h1>{post.title}</h1>
         <p>{post.publishedDate}</p>
      </div>
    </Layout>
    </>
  )
}

