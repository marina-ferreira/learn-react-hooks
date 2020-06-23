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

/*
* The same can be achieved with an useEffect hook with clean up
*/

/*
const [count, setCount] = useState(0)

useEffect(() => {
  const interval = setInterval(() => setCount(count + 1), 1000)
  return () => clearInterval(interval)
})
*/
