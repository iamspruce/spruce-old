import React from "react";
import Header from "./Header";
import "../sass/main.css"
import Footer from "./Footer";
import SEO from "./Seo";

export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      <Header />
      {children}
      <Footer />
    </div>
  )
}