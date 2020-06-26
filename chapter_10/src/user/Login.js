import React, { useState, useEffect } from 'react'
import { useInput } from 'react-hookedup'

import { useDispatch, useApiLogin } from 'hooks'

const Login = () => {
  const { value: username, bindToInput: bindUsername } = useInput('')
  const { value: password, bindToInput: bindPassword } = useInput('')
  const [loginFailed, setLoginFailed] = useState(false)
  const dispatch = useDispatch()
  const [user, login] = useApiLogin()

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
  }, [dispatch, user])

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
        {...bindUsername}
      />

      <label htmlFor="login-password">Password</label>
      <input
        type="password"
        name="login-password"
        id="login-password"
        value={password}
        {...bindPassword}
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
