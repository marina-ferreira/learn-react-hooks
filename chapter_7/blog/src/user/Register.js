import React, { useState, useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from 'contexts'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const { dispatch } = useContext(StateContext)
  const [user, register] = useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password }
  }))

  useEffect(() => {
    user?.data &&
    dispatch({ type: 'REGISTER', username: user.data.username })
  }, [user])

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    register(username, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="register-username">Username</label>
      <input
        type="text"
        name="register-username"
        id="register-username"
        value={username}
        onChange={handleUsername}
      />

      <label htmlFor="register-password">Password</label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={password}
        onChange={handlePassword}
      />

      <label htmlFor="register-password-confirm">Confirm Password</label>
      <input
        type="password"
        name="register-password-confirm"
        id="register-password-confirm"
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
      />

      <input
        type="submit"
        value="Register"
        disabled={
          username.length === 0 ||
          password.length === 0 ||
          password !== passwordConfirm
        }
      />
    </form>
  )
}

export default Register
