import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Icon from "./Icon";


export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <>
    <header className="header wrapper">
      <div className="header-logo">
        <Link to="/">
          <img src="/img/spruce-logo1.webp" alt="spruce" width="38px" height="38px" />
          <span>{data.site.siteMetadata.author}</span>
        </Link>
      </div>
      <nav className="header-nav">
        <button className="header-btn" hidden>
        <Icon name="icon-menu" width="26px" height="26px" />
        </button>
        <ul className="list-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="header-control">
      <button className="btn btn--primary btn--small btn--round header-btn">
        Follow Me
      </button>
      <button className="btn btn--small header-btn theme-btn stroke-text">
        Theme
      </button>
    </div>
   </header>
    </>
  )
}
