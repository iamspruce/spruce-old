import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          skills {
            name
            icon
          }
          description
        }
      }
    }
  `)
  return (
    <section className="section section-border-btm section--hero">
      <div className="section-flex flex-wrap j-btw">
        <div className="section-content">
          <span className="line">
            <span>Hello I'm</span>
          </span>
          <h1 className="title">Spruce Emmanuel</h1>
          <p className="title_alt">{data.site.siteMetadata.description}.</p>
          <p className="title_sub">
            i build amazing <strong>websites</strong>
          </p>
        </div>
        <div className="section-img">
          <div className="hero-img">
            <span className="img-overlay">
              <StaticImage
                src="../img/spruce2.webp"
                alt="Spruce"
                placeholder="blurred"
              />
            </span>
            <span className="hero-img-msg" hidden>
              <p>Hey there! I make Websites, Want one?</p>
              <Link to="#contact">Contact Me</Link>
            </span>
          </div>
        </div>
        <div className="section-content">
          <span className="line">
            <span>recent projects</span>
          </span>
          <h2 className="title">
            <a href="https://earthly.vercel.app">Earthly Countries App</a>
          </h2>
          <Link to="/projects" className="link">
            Explore
          </Link>
        </div>
        <span className="line line-vertical theme-line">
          <span className="js-themeName">Default</span>
        </span>
      </div>
      <div className="hero-skills slide-left">
        <ul>
          <li style={{ display: "inline" }}>Skills:</li>
          {data.site.siteMetadata.skills.map(skill => (
            <li
              key={skill.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <Icon name={skill.icon} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
