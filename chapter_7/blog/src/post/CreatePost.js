import React, { useState, useContext } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from 'contexts'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { state: { user }, dispatch } = useContext(StateContext)
  const [, createPost] = useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))

  const handleCreate = e => {
    e.preventDefault()

    const newPost = {
      title,
      content,
      author: user
    }

    createPost(newPost)
    dispatch({ type: 'CREATE_POST', ...newPost })
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
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <input type="submit" value="Create" />
    </form>
  )
}

export default CreatePost
