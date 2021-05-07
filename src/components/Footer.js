import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-contact-wrapper" id="contact">
          <div className="footer-contact">
            <form action="#" className="footer-form">
              <div className="input-group">
                <label className="input-label" htmlFor="name">
                  <input className="input" type="text" name="name" id="name" />
                  <span className="input-label-floating">Name</span>
                </label>
                <label className="input-label" htmlFor="email">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <span className="input-label-floating">Email</span>
                </label>
              </div>
              <div className="input-full">
                <label className="input-label" htmlFor="textarea">
                  <textarea
                    name="textarea"
                    id="textarea"
                    className="input"
                    col="5"
                  ></textarea>
                  <span className="input-label-floating">
                        Message
                  </span>
                </label>
              </div>
              <div className="input-submit text-right">
                  <button type="submit" className="btn--mediun btn--white">
                        <Icon name="caret-right" size="26" />
                  </button>
              </div>
            </form>
            <div className="footer-contact-content">
              <h6 className="h1">
                    Get In Touch With Me
              </h6>
              <p>
              Either you have a project to collaborate on, or you want to say Hello. Feel free to email sprucekhalifa3@gmail.com or use the form below 
              </p>
            </div>
          </div>
        </div>
      <div className="footer-content">
        <div className="footer-content__copy">
          <div className="header-logo">
            <Link to="/">
              <img
                src="/img/spruce-logo1.webp"
                alt="spruce"
                width="32px"
                height="32px"
              />
            </Link>
          </div>
          <p>
             @2021, iamspruce.dev designed and developed with love and more
            of <b>GatsbyJs</b> and hosted on <b>Netlify</b>
          </p>
        </div>
      <nav className="footer-nav flex j-btw">
        <ul className="footer-nav__items">
          <li className="footer-nav__list--title">SITE LINKS</li>
          <li className="footer-nav__list">
            <Link to="/" className="footer-nav__link">
              Homepage
            </Link>
          </li>
          <li className="footer-nav__list">
            <Link to="/#about" className="footer-nav__link">
              About Me
            </Link>
          </li>
          <li className="footer-nav__list">
            <Link to="/#contact" className="footer-nav__link">
              Contact Me
            </Link>
          </li>
        </ul>
        <ul className="footer-nav__items">
          <li className="footer-nav__list--title">SOCIAL LINKS</li>
          <li className="footer-nav__list">
            <a href="https://facebook.com/spruce.emma" className="footer-nav__link">
              Facebook
            </a>
          </li>
          <li className="footer-nav__list">
            <a href="https://twitter.com/sprucekhalifa" className="footer-nav__link">
              @sprucekhalifa
            </a>
          </li>
          <li className="footer-nav__list">
            <a href="https://instagram.com/iamspruce" className="footer-nav__link">
              Instagram
            </a>
          </li>
        </ul>
      </nav>
      </div>
      </div>

    </footer>
  )
}

export default Footer
