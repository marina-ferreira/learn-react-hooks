import React, { useState } from 'react'
import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import PostList from 'post/PostList'

import './App.css'

function App() {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState(defaultPosts)

  return (
    <div className="App">
      <UserBar user={user} setUser={setUser} />
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
