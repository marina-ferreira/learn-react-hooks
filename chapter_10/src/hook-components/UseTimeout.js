import React, { useState } from 'react'
import { useTimeout } from 'react-hookedup'

const UseTimeout = () => {
  const [ready, setReady] = useState(false)

  useTimeout(() => setReady(true), 10000)

  return (
    <div>
      {ready ? 'ready!' : 'waiting...' }
    </div>
  )
}

export default UseTimeout

/*
* The same can be achieved with an useEffect hook with clean up
*/

/*
const [ready, setReady] = useState(false)

useEffect(() => {
  const timeout = setTimeout(() => setReady(true), 10000)
  return () => clearTimeout(timeout)
})
*/
