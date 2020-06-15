import React, { useReducer, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'

import appReducer from 'reducers'
import { ThemeContext, StateContext } from 'contexts'

import PostList from 'post/PostList'
import HeaderBar from 'ui/HeaderBar'

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: ''
  })
  const { user, error } = state
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
    posts?.error &&
    dispatch({ type: 'POSTS_ERROR' })

    posts?.data &&
    dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() })
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
          <HeaderBar setTheme={setTheme} />

          {error && <strong>{error}</strong>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}

export default App
