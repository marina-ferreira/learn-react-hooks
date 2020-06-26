import React, { memo } from 'react'
import { Link } from 'react-navi'

import { useTheme } from 'hooks'
import UseLifeCycles from 'hook-components/UseLifeCycles'

const Post = ({ id, title, content, author, short = false }) => {
  const { secondaryColor } = useTheme()
  let processedContent = content

  if (short && content.length > 30) {
    processedContent = content.substring(0, 30) + '...'
  }

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <p>{processedContent}</p>
      {short &&
        <div>
          <Link href={`/posts/${id}`}>View full post</Link>
        </div>
      }

      <i>Written by <strong>{author}</strong></i>
      <UseLifeCycles />
    </div>
  )
}

export default memo(Post)
