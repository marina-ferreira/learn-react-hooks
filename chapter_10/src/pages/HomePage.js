import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from 'contexts'
import useDispatch from 'hooks/useDispatch'

import PostList from 'post/PostList'

const HomePage = () => {
  const { state: { error } } = useContext(StateContext)
  const dispatch = useDispatch()
  const [posts, getPosts] = useResource(() => ({
    url: '/posts',
    method: 'get'
  }))

  useEffect(getPosts, [])

  useEffect(() => {
    posts?.error &&
    dispatch({ type: 'POSTS_ERROR' })

    posts?.data &&
    dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() })
  }, [dispatch, posts])

  return (
    <div>
      {error && <strong>{error}</strong>}
      <PostList />
    </div>
  )
}

export default HomePage
