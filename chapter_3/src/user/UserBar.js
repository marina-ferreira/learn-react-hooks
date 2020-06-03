import React from 'react'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

const UserBar = ({ user, setUser }) => {
  if (user) {
    return <Logout user={user} setUser={setUser} />
  }

  return (
    <>
      <Login setUser={setUser} />
      <Register setUser={setUser} />
    </>
  )
}

export default UserBar
