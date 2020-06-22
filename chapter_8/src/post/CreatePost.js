import React, { useState, useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { useNavigation } from 'react-navi'
import { useInput } from 'react-hookedup'

import { StateContext } from 'contexts'

const CreatePost = () => {
  const { value: title, bindToInput: bindTitle } = useInput('')
  const { value: content, bindToInput: bindContent } = useInput('')
  const navigation = useNavigation()
  const { state: { user }, dispatch } = useContext(StateContext)
  const [post, createPost] = useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))

  useEffect(() => {
    if (!post?.data) return

    dispatch({ type: 'CREATE_POST', ...post.data })
    navigation.navigate(`/posts/${post.data.id}`)
  }, [post])

  const handleCreate = e => {
    e.preventDefault()

    const newPost = {
      title,
      content,
      author: user
    }

    createPost(newPost)
  }

  return (
    <form onSubmit={handleCreate}>
      <p>Author <strong>{user}</strong></p>

      <div>
        <label htmlFor="create-title">Title</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          {...bindTitle}
        />
      </div>
      <textarea value={content} {...bindContent} />

      <input type="submit" value="Create" />
    </form>
  )
}

export default CreatePost
