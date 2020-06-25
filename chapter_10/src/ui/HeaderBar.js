import React, { useContext, Suspense } from 'react'
import useWindowSize from '@rehooks/window-size'

import { StateContext } from 'contexts'
import useTheme from 'hooks/useTheme'

import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import Header from 'ui/Header'
import ChangeTheme from 'ui/ChangeTheme'

const HeaderBar = ({ setTheme }) => {
  const theme = useTheme()
  const { state: { user } } = useContext(StateContext)
  const { innerWidth } = useWindowSize()
  const isMobilePhone = innerWidth < 640

  return (
    <div>
      <Header text="React Hooks Blog" />
      {!isMobilePhone && <ChangeTheme theme={theme} setTheme={setTheme} />}

      {!isMobilePhone && (
        <Suspense fallback={'Loading...'}>
          <UserBar />
        </Suspense>
      )}

      {user && <CreatePost />}
    </div>
  )
}

export default HeaderBar
