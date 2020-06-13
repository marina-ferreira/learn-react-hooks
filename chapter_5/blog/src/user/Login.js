import React, { useState, useContext } from 'react'
import { StateContext } from 'contexts'

const Login = () => {
  const [username, setUsername] = useState('')
  const { dispatch } = useContext(StateContext)

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN', username })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login-username">Username</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        value={username}
        onChange={handleUsername}
      />

      <label htmlFor="login-password">Password</label>
      <input type="password" name="login-password" id="login-password" />

      <input
        type="submit"
        value="Login"
        disabled={username.length === 0}
      />
    </form>
  )
}

export default Login
