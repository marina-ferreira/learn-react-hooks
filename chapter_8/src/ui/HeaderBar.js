import React, { useContext, Suspense } from 'react'

import { ThemeContext, StateContext } from 'contexts'

import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import Header from 'ui/Header'
import ChangeTheme from 'ui/ChangeTheme'

const HeaderBar = ({ setTheme }) => {
  const theme = useContext(ThemeContext)
  const { state: { user } } = useContext(StateContext)

  return (
    <div>
      <Header text="React Hooks Blog" />
      <ChangeTheme theme={theme} setTheme={setTheme} />

      <Suspense fallback={'Loading...'}>
        <UserBar />
      </Suspense>
      {user && <CreatePost />}
    </div>
  )
}

export default HeaderBar
