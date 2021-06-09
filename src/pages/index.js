import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Specialize from "../components/Specialize"
import About from "../components/About"
import Contact from "../components/Contact"
import Msg from "../components/Msg"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
    <SEO title="Homepage" image="/img/spruce.webp" />
    <Msg msgTitle="#EndPoliceBrutality" msg="You can't be the Judge, the jailor and executioner at the same time, #EndSars" icon="sad-emoji" type="info" />
    <Layout>
      <Hero />
      <Specialize />
      <About />
      <Contact />
    </Layout>
    </>
  )
}
