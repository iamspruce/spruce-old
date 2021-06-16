import React from "react"
import Icon from "./Icon"

const Card = ({ date, desc, title, icon, iconDesc }) => {
  return (
    <article className="card">
          <div className="card-wrapper">
          <header className="card-header">
        <p className="text-small">
          <time datetime={date}>{date}</time>
        </p>
        <small className="text-alt text-xsmall">{desc}</small>
      </header>
      <h5 className="card-title text-lg">{title}</h5>
      <footer className="card-footer">
        <span>{iconDesc}</span>
        <span className="icon icon-left">
          <Icon name={icon} size="13" />
        </span>
      </footer>
          </div>
      
    </article>
  )
}

export default Card
