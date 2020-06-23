import React, { useState } from 'react'
import { useInterval } from 'react-hookedup'

const UseInterval = () => {
  const [count, setCount] = useState(0)

  useInterval(() => setCount(count + 1), 1000)

  return (
    <div>
      {count} seconds passed.
    </div>
  )
}

export default UseInterval
