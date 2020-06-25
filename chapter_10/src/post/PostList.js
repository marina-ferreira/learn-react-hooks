import React, { useContext } from 'react'

import { StateContext } from 'contexts'
import usePostsState from 'hooks/usePostsState'

import Post from './Post'

const PostList = () => {
  const posts = usePostsState()

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
