import React from 'react'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

const UserBar = () => {
  const user = 'Marina'

  if (user) {
    return <Logout user={user} />
  }

  return (
    <>
      <Login />
      <Register />
    </>
  )
}

export default UserBar
