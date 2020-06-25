import React, { useContext } from 'react'
import { StateContext } from 'contexts'

import useUserState from 'hooks/useUserState'

const Logout = () => {
  const { dispatch } = useContext(StateContext)
  const user = useUserState()

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
