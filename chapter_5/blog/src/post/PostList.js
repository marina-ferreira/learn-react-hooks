import React, { useContext } from 'react'

import { StateContext } from 'contexts'
import Post from './Post'

const PostList = () => {
  const { state: { posts } } = useContext(StateContext)

  const renderPost = post => (
    <Post {...post} key={`post-${post.id}`} />
  )

  return (
    <div>
      {posts.map(renderPost)}
    </div>
  )
}

export default PostList
