import React, { useState } from 'react'
import { usePrevious } from 'react-hookedup'

const UsePrevious = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      Count was {prevCount} and is {count} now.
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default UsePrevious
