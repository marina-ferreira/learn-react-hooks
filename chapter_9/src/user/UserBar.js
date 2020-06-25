import React, { useContext, lazy } from 'react'
import { StateContext } from 'contexts'

import Login from './Login'
import Register from './Register'

const Logout = lazy(() => import('./Logout'))

const UserBar = () => {
  const { state: { user } } = useContext(StateContext)

  if (user) return <Logout />

  return (
    <>
      <Login />
      <Register />
    </>
  )
}

export default UserBar
