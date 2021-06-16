import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Specialize from "../components/Specialize"
import About from "../components/About"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
    <Layout>
    <SEO title="Homepage" image="https://iamspruce.dev/img/spruce.webp" />
      <Hero />
      <Specialize />
      <About />
      <Contact />
    </Layout>
    </>
  )
}
