import React, { Suspense } from 'react'
import useWindowSize from '@rehooks/window-size'

import useTheme from 'hooks/useTheme'
import useUserState from 'hooks/useUserState'

import UserBar from 'user/UserBar'
import CreatePost from 'post/CreatePost'
import Header from 'ui/Header'
import ChangeTheme from 'ui/ChangeTheme'

const HeaderBar = ({ setTheme }) => {
  const theme = useTheme()
  const user = useUserState()
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
