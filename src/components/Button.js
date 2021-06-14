import React from "react"
import Icon from "./Icon"

const Button = ({ event, name, icon, iconSize, label, btnSize, btnType, btnAction }) => {
  return (
    <button
      onClick={event}
      type={btnAction && {btnAction}}
      aria-label={label}
      className={`btn btn--${btnSize} btn--${btnType}`}
    >
      {name && `${name}`}
      {icon && <Icon name={icon} size={iconSize} />}
    </button>
  )
}

export default Button
