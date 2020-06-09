import React, { useState, useReducer } from 'react'
import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import PostList from 'post/PostList'

import './App.css'

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username
    case 'LOGOUT':
      return ''
    default:
      throw new Error()
  }
}

function App() {
  const [user, dispatchUser] = useReducer(userReducer, '')
  const [posts, setPosts] = useState(defaultPosts)

  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatchUser} />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}

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
