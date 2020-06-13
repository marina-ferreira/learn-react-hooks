import React, { useReducer, useEffect } from 'react'

import appReducer from 'reducers'
import { ThemeContext } from 'contexts'

import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import PostList from 'post/PostList'
import Header from 'ui/Header'

const App = () => {
  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state
  const theme = {
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  }

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
      return
    }

    document.title = 'React Hooks Blog'
  }, [user])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Header text="React Hooks Blog" />

        <UserBar user={user} dispatch={dispatch} />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}

        <PostList posts={posts} />
      </div>
    </ThemeContext.Provider>
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
