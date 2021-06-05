import React from "react";
import Header from "./Header";
import "../css/main.css"
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}