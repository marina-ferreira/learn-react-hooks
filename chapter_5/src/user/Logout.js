import React from 'react'

const Logout = ({ user, dispatch }) => {
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <form onSubmit={handleSubmit}>
      Looged in as <strong>{user}</strong>

      <input type="submit" value="Logout" />
    </form>
  )
}

export default Logout
