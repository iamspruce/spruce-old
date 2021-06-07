import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Icon from "./Icon"

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
    <section className="section section--hero">
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
                <img src="/img/spruce2.webp" alt="" width="240px" height="280px" />
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
              <Link to="/projects">Earthly Countries App</Link>
            </h2>
            <Link to="#0" className="link">
              Explore
            </Link>
          </div>
            <span className="line line-vertical">
              <span>Default</span>
            </span>
        </div>
        <div className="hero-skills slide-left">
          <ul className="">
            <span>Skills:</span>
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
