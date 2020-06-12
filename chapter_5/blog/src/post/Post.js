import React from 'react'

const Post = ({ title, content, author }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>

      <i>Written by <strong>{author}</strong></i>
    </div>
  )
}

export default Post
