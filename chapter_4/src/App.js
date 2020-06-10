import React, { useReducer, useEffect } from 'react'

import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import PostList from 'post/PostList'
import appReducer from 'reducers'

import './App.css'

function App() {
  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
      return
    }

    document.title = 'React Hooks Blog'
  }, [user])

  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatch} />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}

      <PostList posts={posts} />
    </div>
  )
}

export default App

const defaultPosts = [
  {
    id: 1,
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl'
  },
  {
    id: 2,
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl'
  }
]
