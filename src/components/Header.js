import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Icon from "./Icon"
import JSONData from "../../content/navLinks.json"
import Theme from "./Theme"
import Button from "./Button"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  const [openMenu, setOpenMenu] = useState("off")
  function toggle() {
    setOpenMenu(openMenu === "off" ? "on" : "off")
  }
  const [openTheme, setOpenTheme] = useState("off")
  function toggleTheme() {
    setOpenTheme(openTheme === "off" ? "on" : "off")
  }
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
      <div className={`theme-wrapper ${openTheme}`} hidden>
        <Theme toggleTheme={toggleTheme} />
      </div>
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <StaticImage
              src="../img/spruce-logo1.webp"
              alt="Spruce"
              placeholder="blurred"
              layout="fixed"
              width={38}
              height={38}
            />
            <span>{data.site.siteMetadata.author}</span>
          </Link>
        </div>
        <nav className="header-nav">
          <button
            aria-label="toggle Navigation Menu"
            className={`header-btn ${openMenu}`}
            onClick={toggle}
            hidden
          >
            <Icon
              name="icon-menu"
              width="20px"
              height="20px"
              className="icon-open"
            />
            <Icon
              name="icon-close"
              width="20px"
              height="20px"
              className={`icon-close ${openMenu} `}
              hidden
            />
          </button>
          <ul className={`list-items ${openMenu}`}>
            <li className="list-items__btn" hidden>
              <a
                href="https://twitter.com/sprucekhalifa"
                className={`btn btn--primary btn--small list-items__btn`}
              >
                Follow Me
              </a>
            </li>
            {JSONData.content.map((data, index) => {
              return (
                <li key={`content_item_${index}`}>
                  <Link
                    to={data.link}
                    activeClassName="active"
                    onClick={toggle}
                  >
                    {data.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="header-control">
          <a
            href="https://twitter.com/sprucekhalifa"
            className={`btn btn--primary btn--small header-btn`}
          >
            Follow Me
          </a>
          <Button
            name="Theme"
            label="open theme switcher"
            btnSize="small"
            btnType="default"
            className="header-btn theme-btn"
            event={toggleTheme}
          />
        </div>
      </header>
    </>
  )
}
