import React, { useContext } from 'react'
import { ThemeContext } from 'contexts'

const Post = ({ title, content, author }) => {
  const { secondaryColor } = useContext(ThemeContext)

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <p>{content}</p>

      <i>Written by <strong>{author}</strong></i>
    </div>
  )
}

export default Post
