import React, { useState, useEffect } from "react"
import Button from "./Button"
import Comment from "./Comment"
import Likes from "./Likes"



const LoadMore = ({ mentions, likes }) => {
  const replies = mentions
  const [state, setState] = useState({
    list: [...replies.slice(0, 5)],
    Load_more: false,
    has_more: replies.length > 5,
  })
  const handleState = () => {
    state.Load_more = true
  }
  //handle loading more mentions
  useEffect(() => {
    if (state.Load_more && state.has_more) {
      const currentLength = state.list.length
      const is_more = currentLength < replies.length
      const new_list = is_more
        ? replies.slice(currentLength, currentLength + 5)
        : []
      setState.list = [...state.list, ...new_list]
      setState.Load_more = false
    }
  }, [state.Load_more, state.has_more, replies, state.list])

  useEffect(() => {
    const is_more = state.list.length < replies.length
    setState.has_more = is_more

  }, [state.list,replies.length])
  return (
    <div className="webmentions-wrapper">
      {replies.length > 0 ? (
        <>
    <h4>Comments <span className="webmentions-counter">{replies[0].totalCount}</span> </h4>
    <Likes likes={likes} />
    <ol className="webmentions__list">
      {state.list[0].edges.map(edge => (
        <Comment
          key={edge.node.wm_id}
          imageUrl={edge.node.author.photoSharp}
          authorUrl={edge.node.author.url}
          authorName={edge.node.author.name}
          dtPublished={edge.node.published}
          dtPublishedFormated={edge.node.publishedFormated}
          content={edge.node.content && edge.node.content.html}
          url={edge.node.url}
        />
      ))}
      </ol>
      <div className="webmentions-load text-center">
      {state.has_more ? (
          <Button
            event={handleState}
            name="Load More"
            label="Load More Webmentions"
            btnSize="small"
            btnType="primary"
          />
      ) : (
        <p>No More Mentions...</p>
      )}
    </div>
        </>
      ) : (
        <p>No Webmentions found</p>
      )}
    </div>
  )
}

export default LoadMore
