import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'

import Post from 'post/Post'

const PostPage = ({ id }) => {
  const [post, getPost] = useResource(() => ({
    url: `/posts/${id}`,
    method: 'get'
  }))

  useEffect(getPost, [id])

  return (
    <div>
      <div><Link href="/">Go back</Link></div>
      {post?.data
        ? <Post {...post.data} />
        : 'Loading...'
      }
    </div>
  )
}

export default PostPage
