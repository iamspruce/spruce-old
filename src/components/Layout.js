import React from "react";
import Header from "./Header";
import "../sass/main.css"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}