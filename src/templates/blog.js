import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Msg from "../components/Msg"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from "../components/Head";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")

  }
}
`

export default function BlogPost({ data, props }) {
  const post = data.contentfulBlogPost
  return (
    <>
    <Head title={post.title} />
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

