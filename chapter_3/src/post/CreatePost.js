import React from 'react'

const CreatePost = ({ user }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <p>Author <strong>{user}</strong></p>

      <div>
        <label htmlFor="create-title">Title</label>
        <input type="text" name="create-title" id="create-title" />
      </div>
      <textarea />

      <input type="submit" value="Create" />
    </form>
  )
}

export default CreatePost
