import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Specialize from "../components/Specialize"
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Specialize />
      <About />
    </Layout>
  )
}
