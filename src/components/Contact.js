import React from 'react'
import Icon from "./Icon"


const Contact = () => {
      return (
            <section className="section-pad" id="contact">
            <div className="footer-contact-wrapper">
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
          </section>
      )
}

export default Contact
