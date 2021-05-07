import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
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
