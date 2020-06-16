import React, { useContext } from 'react'

import { StateContext } from 'contexts'
import Post from './Post'

const PostList = () => {
  const { state: { posts } } = useContext(StateContext)

  const renderPost = post => (
    <Post
      key={`post-${post.id}`}
      short={true}
      {...post}
    />
  )

  return (
    <div>
      {posts.map(renderPost)}
    </div>
  )
}

export default PostList
