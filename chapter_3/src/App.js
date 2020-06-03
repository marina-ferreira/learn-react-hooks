import React from 'react'
import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import PostList from 'post/PostList'

import './App.css'

function App() {
  const user = 'Marina'

  return (
    <div className="App">
      <UserBar />
      <CreatePost user={user} />

      <PostList posts={posts} />
    </div>
  )
}

export default App

const posts = [
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
