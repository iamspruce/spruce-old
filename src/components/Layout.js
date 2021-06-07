import React from "react";
import Header from "./Header";
import "../css/main.css"
import Footer from "./Footer";
import { Helmet } from "react-helmet"


export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Helmet htmlAttributes={{
        lang: 'en'
      }} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}