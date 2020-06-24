import React, { useReducer, useEffect, useState } from 'react'
import { Router, View } from 'react-navi'
import { mount, route } from 'navi'

import appReducer from 'reducers'
import { ThemeContext, StateContext } from 'contexts'

import HomePage from 'pages/HomePage'
import PostPage from 'pages/PostPage'
import HeaderBar from 'ui/HeaderBar'
import Footer from 'ui/Footer'

import UseMergeState from 'hook-components/UseMergeState'
import UsePrevious from 'hook-components/UsePrevious'
import UseInterval from 'hook-components/UseInterval'
import UseTimeout from 'hook-components/UseTimeout'
import UseOnlineStatus from 'hook-components/UseOnlineStatus'
import UseBoolean from 'hook-components/UseBoolean'
import UseArray from 'hook-components/UseArray'
import UseCounter from 'hook-components/UseCounter'

const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/posts/:id': route(req => ({ view: <PostPage id={req.params.id} /> }))
})

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: ''
  })
  const { user } = state
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

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
        <Router routes={routes}>
          <div className="App">
            <HeaderBar setTheme={setTheme} />

            <View />
            <Footer />

            <UseMergeState />
            <UsePrevious />
            <UseInterval />
            <UseTimeout />
            <UseOnlineStatus />
            <UseBoolean />
            <UseArray />
            <UseCounter />
          </div>
        </Router>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}

export default App
