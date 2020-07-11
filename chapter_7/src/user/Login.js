import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from 'contexts'
import { useResource } from 'react-request-hook'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginFailed, setLoginFailed] = useState(false)
  const { dispatch } = useContext(StateContext)
  const [user, login] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
  }))

  useEffect(() => {
    if (user?.data) {
      if (user.data.length > 0) {
        setLoginFailed(false)
        dispatch({ type: 'LOGIN', username: user.data[0].username })
        return
      }

      setLoginFailed(true)
    }

    user?.error &&
    setLoginFailed(true)
  }, [user])

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password)
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
      <input
        type="password"
        name="login-password"
        id="login-password"
        value={password}
        onChange={handlePassword}
      />

      <input
        type="submit"
        value="Login"
        disabled={username.length === 0}
      />

      {loginFailed &&
      <span style={{ color: 'red' }}>Invalid username or password</span>}
    </form>
  )
}

export default Login
