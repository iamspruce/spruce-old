import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Icon from "./Icon"

const Likes = ({ likes }) => {
  return (
    <>
      <li className="webmention-like__img">
        {likes.length > 0 ?
          likes[0].edges.map(edge => {
            const image = getImage(edge.node.authorPhoto)
            return (
              <a
                href={edge.node.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={image} alt={edge.node.authorName} />
              </a>
            )
          }) : (
            <span>No Like for this post yet</span>
          )}
      </li>
      <li className="webmention-like__icon">
        <span className="webmention-meta__divider"></span>
        <span>
          {likes.length > 0 && likes[0].totalCount }
        </span>
        <span>
          <Icon name="icon-love" size="24" fill="red" />
        </span>
      </li>
    </>
  )
}

export default Likes
