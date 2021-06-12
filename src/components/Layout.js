import React from "react";
import Header from "./Header";
import "../css/main.css"
import Footer from "./Footer";
import Head from "./Head";


export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Head />
      <Header />
      {children}
      <Footer />
    </div>
  )
}