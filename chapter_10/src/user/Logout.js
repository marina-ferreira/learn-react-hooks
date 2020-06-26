import React from 'react'

import { useUserState, useDispatch } from 'hooks'

const Logout = () => {
  const dispatch = useDispatch()
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
