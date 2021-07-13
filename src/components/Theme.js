import React, { useState, useEffect } from "react"
import theme from "../../content/theme.json"
import Button from "./Button"

const Theme = ({ toggleTheme }) => {
  const [state, setState] = useState(() => {
    const localVal =
      typeof window !== "undefined" && window.localStorage.getItem("theme")

    let obj = {
      font: 15,
      scheme: "default",
    }
    return localVal !== null ? JSON.parse(localVal) : obj
  })

  const update = e => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(state))
    if (document.querySelector(".js-themeName") !== null) {
      let themeName = document.querySelector(".js-themeName")
      themeName.innerHTML = state.scheme
    }
    let schemes = document.querySelectorAll(".js-scheme-btn")
    schemes.forEach(item => {
      item.value === state.scheme
        ? item.classList.add("active")
        : item.classList.remove("active")
    })
    let root = document.documentElement
    root.setAttribute("data-theme", state.scheme)
    root.style.setProperty("--font-size", `${state.font}px`)
    let themeColor = document.querySelector('meta[name="theme-color"]')

    theme.map(color => {
      if (color.id === state.scheme) {
        if (themeColor) {
        themeColor.setAttribute("content", color.colors["background"])
        }
      }
    })
  }, [state])

  return (
    <div className="theme">
      <div className="theme-close text-right">
        <Button
          icon="icon-close"
          iconSize="16"
          label="close theme switcher"
          btnSize="small"
          btnType="default btn--close"
          event={toggleTheme}
        />
      </div>
      <div className="theme-wrapper__inner">
        <div className="theme-header text-center">
          <strong className="theme-title">Select Theme</strong>
          <p>
            Please Note that Changes made here will affect other pages across
            the entire site.
          </p>
        </div>
        <div className="theme-content">
          <ul className="schemes">
            {theme.map(data => {
              return (
                <li className="scheme">
                  <button
                    onClick={update}
                    className="scheme-btn js-scheme-btn"
                    aria-label={`${data.id}`}
                    name="scheme"
                    value={`${data.id}`}
                    style={{ backgroundColor: `${data.colors["background"]}` }}
                  ></button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="theme-content">
          <div className="theme-range">
            <label htmlFor="font" title={state.font}>
              <span className="text-xsmall">Aa</span>
              <input
                type="range"
                name="font"
                min="10"
                max="20"
                step="2"
                className="theme-range__slider"
                onChange={update}
                value={state.font}
              />
              <span className="text-large">Aa</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme
