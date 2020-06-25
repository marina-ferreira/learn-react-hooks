import React from 'react'
import { useBoolean } from 'react-hookedup'

const UseBoolean = () => {
  const { value, toggle } = useBoolean()

  return (
    <div>
      <button onClick={toggle}>{value ? 'on' : 'off'}</button>
    </div>
  )
}

export default UseBoolean
