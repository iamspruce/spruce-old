import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Specialize from "../components/Specialize"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home(props) {
  return (
    <>
    <Layout
      pageMeta={{
        title: "Homepage",
        themeColor: "#ffffff"
      }}
      location={props.location}
    >
      <Hero />
      <Specialize />
      <About />
      <Contact />
    </Layout>
    </>
  )
}
