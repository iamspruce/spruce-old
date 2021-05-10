import React,{useState} from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Icon from "./Icon";
import JSONData from "../../content/navLinks.json"
import Msg from "./Msg";



export default function Header() {
  const [openMenu, setOpenMenu] = useState("off")
  function toggle() {
    setOpenMenu(openMenu === "off" ? "on" : "off");
  }
  const [openTheme, setOpenTheme] = useState("off")
  function toggleTheme() {
    setOpenTheme(openTheme === "off" ? "on" : "off");
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
      <Msg msgTitle="#future Not yet Available" msg="I'm sorry but this feature is not yet available as we are still in development stage" icon="info-emoji" type="info" />
    </div>
    <header className="header wrapper">
      <div className="header-logo">
        <Link to="/">
          <img src="/img/spruce-logo1.webp" alt="spruce" width="38px" height="38px" />
          <span>{data.site.siteMetadata.author}</span>
        </Link>
      </div>
      <nav className="header-nav">
        <button className={`header-btn ${openMenu}`} onClick={toggle} hidden>
        <Icon name="icon-menu" width="20px" height="20px" className="icon-open" />
        <Icon name="icon-close" width="20px" height="20px" className={`icon-close ${openMenu} `} hidden />
        </button>
        <ul className={`list-items ${openMenu}`}>
        {JSONData.content.map((data, index) => {
          return <li key={`content_item_${index}`}>
            <Link to={data.link} activeClassName="active" onClick={toggle}>{data.name}</Link>
                </li>
        })}
        </ul>
      </nav>
      <div className="header-control">
      <button className="btn btn--primary btn--small btn--round header-btn">
        Follow Me
      </button>
      <button className="btn btn--small header-btn theme-btn stroke-text" onClick={toggleTheme}>
        Theme
      </button>
    </div>
   </header>
    </>
  )
}
