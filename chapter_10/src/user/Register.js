import React, { useEffect } from 'react'
import { useInput } from 'react-hookedup'

import { useDispatch, useApiRegister } from 'hooks'

const useRegisterEffect = (user, dispatch) => {
  useEffect(() => {
    user?.data &&
    dispatch({ type: 'REGISTER', username: user.data.username })
  }, [dispatch, user])
}

const Register = () => {
  const { value: username, bindToInput: bindUsername } = useInput('')
  const { value: password, bindToInput: bindPassword } = useInput('')
  const { value: passwordConfirm, bindToInput: bindPasswordConfirm } = useInput('')

  const dispatch = useDispatch()
  const [user, register] = useApiRegister()

  useRegisterEffect(user, dispatch)

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
        {...bindUsername}
      />

      <label htmlFor="register-password">Password</label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={password}
        {...bindPassword}
      />

      <label htmlFor="register-password-confirm">Confirm Password</label>
      <input
        type="password"
        name="register-password-confirm"
        id="register-password-confirm"
        value={passwordConfirm}
        {...bindPasswordConfirm}
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
