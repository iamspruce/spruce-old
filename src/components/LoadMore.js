import React, { useState, useEffect } from "react"
import Button from "./Button"

const LoadMore = ({ mentions }) => {
  const [state, setState] = useState({
    list: [...mentions.slice(0, 5)],
    LoadMore: false,
    has_more: mentions.length > 5,
  })
  const handleState = () => {
    state.LoadMore = true
  }
  //handle loading more mentions

  useEffect(() => {
    if (state.LoadMore && state.has_more) {
      const currentLength = state.list.length
      const is_more = currentLength < mentions.length
      const new_list = is_more
        ? mentions.slice(currentLength, currentLength + 10)
        : []
      setState.list = [...state.list, ...new_list]
      setState.LoadMore = false
    }
  }, [state.LoadMore, state.has_more])

  useEffect(() => {
    const is_more = state.list.length < mentions.length
    setState.has_more = is_more
  }, [state.list])
  return (
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
  )
}

export default LoadMore
