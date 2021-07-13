import React from "react"
import Comment from "./Comment"
import Likes from "./Likes"




export default function Comments({comment, likes}) {
  return (
    <>
    <h4>Comments {comment.length > 0 && comment[0].totalCount}</h4>
    <ol className="webmention-like text-right">
        <Likes likes={likes} />
    </ol>

    <ol className="webmentions__list">

      {comment.length > 0 ? comment[0].edges.map(edge => (
        <Comment
          key={edge.node.wm_id}
          imageUrl={edge.node.authorPhoto}
          authorUrl={edge.node.authorUrl}
          authorName={edge.node.authorName}
          dtPublished={edge.node.published}
          dtPublishedFormated={edge.node.publishedFormated}
          content={edge.node.content && edge.node.content.html}
          url={edge.node.url}
        />
        
      )) : (
        <p>No webmentions for this post</p>
      )}
      </ol>
      </>
  )
}
