import React from 'react'
import { useFocus } from 'react-hookedup'

const UseFocus = () => {
  const { focused, bind } = useFocus()

  return (
    <div>
      <input {...bind} value={focused ? 'focused' : 'not focused'} />
    </div>
  )
}

export default UseFocus
