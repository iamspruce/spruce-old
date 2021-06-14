import React from "react"

const PageHero = ({ title, desc, time }) => {
  return (
      <div className="page-wrapper section-side-pad">
        <div className="page-content">
          {time && 
           <time>Published On  {time}</time> 
          }
          <h1 className="page-title">{title}</h1>
          <p className="page-desc">{desc}</p>
        </div>
      </div>
  )
}

export default PageHero
