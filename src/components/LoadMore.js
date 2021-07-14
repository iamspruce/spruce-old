import React, { useState, useEffect } from "react"
import Button from "./Button"
import Comment from "../components/Comment"


const LoadMore = ({ mentions }) => {
  const replies = mentions

  const [state, setState] = useState({
    list: [...replies.slice(0, 5)],
    LoadMore: false,
    has_more: replies.length > 5,
  })
  const handleState = () => {
    state.LoadMore = true
  }
  console.log(state.list)
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
    <>
    <h4>Comments {replies.length > 0 && replies[0].totalCount} </h4>
    <ol className="webmentions__list">

      {state.list.length > 0 ? state.list[0].edges.map(edge => (
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
        <p>No more Results</p>
      )}
    </div>
    </>
  )
}

export default LoadMore
