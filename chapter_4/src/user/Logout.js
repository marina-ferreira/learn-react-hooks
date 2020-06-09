import React from 'react'

const Logout = ({ user, setUser }) => {
  const handleSubmit = e => {
    e.preventDefault()
    setUser('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Looged in as <strong>{user}</strong>

      <input type="submit" value="Logout" />
    </form>
  )
}

export default Logout
