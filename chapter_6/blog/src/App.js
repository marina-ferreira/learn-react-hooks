import React, { useReducer, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'

import appReducer from 'reducers'
import { ThemeContext, StateContext } from 'contexts'

import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import PostList from 'post/PostList'
import Header from 'ui/Header'
import ChangeTheme from 'ui/ChangeTheme'

const App = () => {
  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [] })
  const { user } = state
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })
  const [posts, getPosts] = useResource(() => ({
    url: '/posts',
    method: 'get'
  }))

  useEffect(getPosts, [])

  useEffect(() => {
    if (posts && posts.data) {
      dispatch({ type: 'FETCH_POSTS', posts: posts.data })
    }
  }, [posts])

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
      return
    }

    document.title = 'React Hooks Blog'
  }, [user])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />

          <UserBar />
          {user && <CreatePost />}

          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}

export default App
