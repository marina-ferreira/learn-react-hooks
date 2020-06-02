import React from 'react'

const Logout = ({ user }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      Looged in as <strong>{user}</strong>

      <input type="submit" value="Logout" />
    </form>
  )
}

export default Logout
