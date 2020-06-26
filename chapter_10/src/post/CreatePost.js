import React, { useEffect } from 'react'
import { useNavigation } from 'react-navi'
import { useInput } from 'react-hookedup'

import { useUserState, useDispatch, useApiCreatePost, useDebouncedUndo } from 'hooks'

const CreatePost = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useUserState()

  const { value: title, bindToInput: bindTitle } = useInput('')
  const [post, createPost] = useApiCreatePost()
  const [content, setContent, { undo, redo, canUndo, canRedo }] = useDebouncedUndo()

  useEffect(() => {
    if (!post?.data) return

    dispatch({ type: 'CREATE_POST', ...post.data })
    navigation.navigate(`/posts/${post.data.id}`)
  }, [dispatch, navigation, post])

  const handleContent = e => {
    const { value } = e.target
    setContent(value)
  }

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
      <textarea value={content} onChange={handleContent} />
      <button type="button" onClick={undo} disabled={!canUndo}>Undo</button>
      <button type="button" onClick={redo} disabled={!canRedo}>Redo</button>

      <input type="submit" value="Create" />
    </form>
  )
}

export default CreatePost
