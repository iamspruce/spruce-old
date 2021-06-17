import React from "react";
import Header from "./Header";
import "../css/main.css"
import Footer from "./Footer";
import SEO from "./SEO";


export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <SEO />
      <Header />
      <main id="main">
      {children}
      </main>
      <Footer />
    </div>
  )
}