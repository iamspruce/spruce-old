import React from "react";
import Header from "./Header";
import "../css/main.css"
import Footer from "./Footer";
import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <div>
      <Seo />
      <Header />
      {children}
      <Footer />
    </div>
  )
}