import React from "react"
import theme from "../../content/theme.json"
import Icon from "./Icon"


const Theme = () => {
  return (
    <div className="theme" aria-modal="true">
      <div className="theme-wrapper__inner wrapper">
        <div className="theme-header">
        <strong className="theme-title text--large">Customize Theme</strong>
          <button aria-label="close theme switcher" className="btn">
            <Icon name="icon-close" size="16" />
          </button>
        </div>
      <div className="theme-content">
      <p>
          Please Note that Changes made here will affect other pages across the entire site.
        </p>
        <small>Font Size</small>
        <div className="theme-range">
              <label htmlFor="font">
            <span className="text-xsmall">Aa</span>
              <input type="range" name="font" id="font-size" min="15" max="22" className="theme-range__slider" />
                  <span className="text-large">Aa</span>
              </label>
        </div>
      </div>
      <div className="theme-content">
        <small>Color Schemes</small>
        <div className="schemes">
          {theme.map((data) => {
            return (
            <button className="scheme" aria-label={`${data.id}`} style={{ backgroundColor: `${data.colors["--bg"]}`, border: `1px solid ${data.colors["--color-primary"]}`}}>
              <span className="scheme__pallete">
              <span style={{ backgroundColor: `${data.colors["--color-primary"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["--text"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["--text-alt"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["--border"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["--bg-alt"]}`}}></span>
              </span>
            </button>
            )
          })}
        </div>
      </div>
    </div>
    </div>

  )
}

export default Theme
