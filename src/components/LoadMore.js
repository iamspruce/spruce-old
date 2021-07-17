import React, { useState, useEffect } from "react"
import Button from "./Button"
import Comment from "./Comment"
import Likes from "./Likes"



const LoadMore = ({ mentions, likes }) => {
  const replies = mentions
  const [state, setState] = useState({
    list: [...replies.slice(0, 5)],
    LoadMore: false,
    has_more: replies.length > 5,
  })
  const handleState = () => {
    state.LoadMore = true
  }
  //handle loading more mentions
  useEffect(() => {
    if (state.LoadMore && state.has_more) {
      const currentLength = state.list.length
      const is_more = currentLength < replies.length
      const new_list = is_more
        ? replies.slice(currentLength, currentLength + 10)
        : []
      setState.list = [...state.list, ...new_list]
      setState.LoadMore = false
    }
  }, [state.LoadMore, state.has_more])

  useEffect(() => {
    const is_more = state.list.length < replies.length
    setState.has_more = is_more
  }, [state.list])
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
          imageUrl={edge.node.authorImg}
          authorUrl={edge.node.authorUrl}
          authorName={edge.node.authorName}
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
        <p>no webmentions found</p>
      )}
    </div>
  )
}

export default LoadMore
