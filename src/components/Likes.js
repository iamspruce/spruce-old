import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Icon from "./Icon"

const Likes = ({ likes }) => {
  return (
    <div className="webmention-like">
    {likes.length > 0 ? (
      <>
        <div className="webmention-like__img">
          
          {likes[0].edges.map(edge => {
          const image = getImage(edge.node.authorImg)
            return (
              <a href={edge.node.authorUrl} target="_blank" rel="noopener noreferrer">
              <GatsbyImage image={image} alt={edge.node.authorName} />
            </a>
            )})}
        </div>
        <div className="webmention-like__meta flex j-bsl">
          {likes[0].totalCount > 3 ? (
            <>
            <span className="webmention-meta__divider">+</span>
            <span>{likes[0].totalCount - 3} Others</span> 
            </>
          ) : ""}
          <span className="webmention-meta__divider">Liked This</span>
          <Icon name="icon-love" size="24" fill="red" />
        </div>
        </>
    ) : (
      <p>0 likes</p>
    )}
    </div>
  )
}

export default Likes
