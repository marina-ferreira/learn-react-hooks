import React, { useState } from 'react'

const CreatePost = ({ user, posts, setPosts }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleCreate = e => {
    e.preventDefault()

    const newPost = {
      id: posts.length + 1,
      title, content,
      author: user
    }

    setPosts([newPost, ...posts])
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
