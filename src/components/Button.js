import React from "react"
import Icon from "./Icon"

const Button = ({ name, icon, label, btnSize, btnType }) => {
  return (
    <button
      aria-label={label}
      className={`btn btn--${btnSize} btn--${btnType}`}
    >
      {name && { name }}
      {icon && <Icon name={icon} />}
    </button>
  )
}

export default Button
