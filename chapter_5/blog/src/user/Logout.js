import React, { useContext } from 'react'
import { StateContext } from 'contexts'

const Logout = () => {
  const { state: { user }, dispatch } = useContext(StateContext)

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
