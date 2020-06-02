import React from 'react'

const Register = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="register-username">Username</label>
      <input type="text" name="register-username" id="register-username" />

      <label htmlFor="register-password">Password</label>
      <input type="password" name="register-password" id="register-password" />

      <label htmlFor="register-password-confirm">Confirm Password</label>
      <input type="password" name="register-password-confirm" id="register-password-confirm" />

      <input type="submit" value="Register" />
    </form>
  )
}

export default Register
