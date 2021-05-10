import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Msg from "../components/Msg"



export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <>
    <Msg msgTitle="#Oopsie!" msg="you seems to have stumbled on a page still under development, please check back later" icon="sad-emoji" type="warning" />
    <Layout>
      <div className="wrapper">
        {/* <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </div>
    </Layout>
    </>
  )
}

