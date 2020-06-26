import React, { useState, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { useNavigation } from 'react-navi'
import { useInput } from 'react-hookedup'
import useUndo from 'use-undo'
import { useDebouncedCallback } from 'use-debounce'

import { useUserState, useDispatch, useApiCreatePost } from 'hooks'

const CreatePost = () => {
  const navigation = useNavigation()
  const { value: title, bindToInput: bindTitle } = useInput('')
  const [content, setInput] = useState('')
  const [undoContent, {
    set: setContent,
    undo,
    redo,
    canUndo,
    canRedo
  }] = useUndo('')
  const [setDebounce, cancelDebounce] = useDebouncedCallback(
    value => setContent(value),
    200
  )
  const dispatch = useDispatch()
  const user = useUserState()

  const [post, createPost] = useApiCreatePost()

  useEffect(() => {
    if (!post?.data) return

    dispatch({ type: 'CREATE_POST', ...post.data })
    navigation.navigate(`/posts/${post.data.id}`)
  }, [dispatch, navigation, post])

  useEffect(() => {
    cancelDebounce()
    setInput(undoContent.present)
  }, [cancelDebounce, undoContent])

  const handleContent = e => {
    const { value } = e.target

    setInput(value)
    setDebounce(value)
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
