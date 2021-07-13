import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const Comment = ({ key, url, imageUrl, authorName, authorUrl, dtPublished, dtPublishedFormated, content }) => {
  const image = getImage(imageUrl)
  return (
      <li className="webmentions__item" key={key}>
        <div className="webmentions-meta">
          <a className="webmentions-meta__head h-card u-url" href={authorUrl} target="_blank" rel="noopener noreferrer">
          <GatsbyImage image={image} alt={authorName} />
            <strong className="p-name">{authorName}</strong>
          </a>
          <div className="webmentions-meta__content">
          <p className="webmentions__content p-content" dangerouslySetInnerHTML={{ __html: content }} /> 
          </div>
          <div className="webmentions-meta__footer">
            <time class="webmentions__pubdate dt-published" datetime={dtPublished}>{dtPublishedFormated}</time>
            <span class="webmention-meta__divider" aria-hidden="true">|</span>
            <a href={url} target="_blank" rel="noopener noreferrer">VIEW REPLY</a>
          </div>
        </div>
      </li>
  )
}

export default Comment
