import React from "react"
import JSONData from "../../content/skills.json"

const specialize = () => {
  return (
    <>
      <section className="section-side-pad section-pad section-bg-alt">
            <div className="section-head text-center">
          <h2 className="title">Specializes In</h2>
          <p>Below are some of the services I offer.</p>
        </div>
      <ul className="flex flex-wrap j-center" style={{ marginTop: 2 + 'em', marginBottom: 2 + 'em' }}>
        {JSONData.content.map((data, index) => {
          return <li key={`content_item_${index}`} className="card skill-card">
                <h3 className="h1">{data.title}</h3>
                <p>
                  {data.item}
                </p>
                <div className="line">
                      <span>web dev</span>
                </div>
                </li>
        })}
      </ul>
      </section>
    </>
  )
}

export default specialize
