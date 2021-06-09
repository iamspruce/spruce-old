import React, { useState } from "react"
import Icon from "./Icon"

const Msg = ({ msgTitle, msg, icon, type }) => {
      const [openMsg, setOpenMsg] = useState("on")
  function toggle() {
    setOpenMsg(openMsg === "on" ? "off" : "on");
  }
  return (
    <div className={`msg msg--${type} ${openMsg}`}>
      <div className="msg-icon-wrapper">
        <Icon name={icon} color="#ffffff" size="24px" />
      </div>
      <div className="msg-content">
        <p className="msg-content__text">
          <strong className="text-lg">{msgTitle}</strong> <br />
          {msg}
        </p>
        <button className="btn btn--small" aria-label="close message" onClick={toggle}>
          <Icon name="icon-close" color="#ffffff" size="16px" />
        </button>
      </div>
    </div>
  )
}

export default Msg
