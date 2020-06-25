import React from 'react'

import useUserState from 'hooks/useUserState'
import useDispatch from 'hooks/useDispatch'

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
