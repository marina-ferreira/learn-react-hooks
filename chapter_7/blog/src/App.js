import React, { useReducer, useEffect, useState } from 'react'

import appReducer from 'reducers'
import { ThemeContext, StateContext } from 'contexts'

import HomePage from 'pages/HomePage'
import HeaderBar from 'ui/HeaderBar'

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
        <div className="App">
          <HeaderBar setTheme={setTheme} />

          <HomePage />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}

export default App
