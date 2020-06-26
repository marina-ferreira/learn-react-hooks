import React, { lazy } from 'react'

import { useUserState } from 'hooks'

import Login from './Login'
import Register from './Register'

const Logout = lazy(() => import('./Logout'))

const UserBar = () => {
  const user = useUserState()

  if (user) return <Logout />

  return (
    <>
      <Login />
      <Register />
    </>
  )
}

export default UserBar
