import React, { useContext } from 'react'
import { StateContext } from 'contexts'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

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
