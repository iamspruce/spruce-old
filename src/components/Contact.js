import React from "react"
import Button from "./Button"

const Contact = () => {
  return (
    <section className="section-pad" id="contact">
      <div className="footer-contact-wrapper">
        <div className="footer-contact">
          <form
            action="https://getform.io/f/64fe76c6-b7ca-4cd6-bd9d-d14cbbc0ffbc"
            method="POST"
            className="footer-form"
          >
            <div className="input-group">
              <label className="input-label" htmlFor="name">
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
                <span className="input-label-floating">Name</span>
              </label>
              <label className="input-label" htmlFor="email">
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  required
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
                  required
                ></textarea>
                <span className="input-label-floating">Message</span>
              </label>
            </div>
            <div
              className="input-submit text-right"
              style={{ marginTop: 1 + "em" }}
            >
              <Button
                icon="caret-right"
                iconSize="26"
                label="Say Hi"
                btnSize="small"
                btnType="default"
              />
            </div>
          </form>
          <div className="footer-contact-content">
            <h6 className="h1">Get In Touch With Me</h6>
            <p>
              Either you have a project to collaborate on, or you want to say
              Hello. Feel free to email sprucekhalifa3@gmail.com or use the form
              below
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
