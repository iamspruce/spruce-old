import React, { useState,useEffect } from "react"
import theme from "../../content/theme.json"
import Icon from "./Icon"

const localFontSize = localStorage.getItem('font-size') || '15';
const localScheme = localStorage.getItem('scheme') || 'default';

const Theme = () => {
  const [font, setFont] = useState(localFontSize);
  const [scheme, setScheme] = useState(localScheme); 

  useEffect(() => {
    localStorage.setItem('scheme', scheme)
    let root = document.documentElement;
    root.setAttribute('data-theme', `${scheme}`)

    
  }, [scheme])
  useEffect(() => {
    localStorage.setItem('font-size', font)
    let root = document.documentElement;
    let fontSlider = document.querySelector('.theme-range__slider');
    root.style.setProperty('--font-size', `${font}px`);
    fontSlider.style.setProperty('--color-stop', `calc(((${font} / 20) * 100%) - 60%)`);
  }, [font]);


  return (
    <div className="theme" aria-modal="true">
      <div className="theme-wrapper__inner wrapper">
        <div className="theme-header">
        <strong className="theme-title textlarge">Customize Theme</strong>
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
              <input type="range" name="font" id="font-size" min="10" max="20" className="theme-range__slider" onChange={e => setFont(e.target.value)} value={font} />
                  <span className="text-large">Aa</span>
              </label>
        </div>
      </div>
      <div className="theme-content">
        <small>Color Schemes</small>
        <div className="schemes">
          {theme.map((data) => {
            return (
            <button onClick={e => setScheme(e.target.value)} className="scheme js-scheme" aria-label={`${data.id}`} value={`${data.id}`} style={{ backgroundColor: `${data.colors["bg"]}`, border: `1px solid ${data.colors["color-primary"]}`}}>
              <span className="scheme__pallete">
              <span style={{ backgroundColor: `${data.colors["color-primary"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["text"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["text-alt"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["border"]}`}}></span>
              <span style={{ backgroundColor: `${data.colors["bg-alt"]}`}}></span>
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
