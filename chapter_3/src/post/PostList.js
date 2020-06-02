import React from 'react'
import Post from './Post'

const PostList = ({ posts = [] }) => {
  const renderPost = post => (
    <Post {...post} key={post.id} />
  )

  return (
    <div>
      {posts.map(renderPost)}
    </div>
  )
}

export default PostList
