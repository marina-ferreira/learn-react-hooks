import React from 'react'
import { useCounter } from 'react-hookedup'

const UseCounter = () => {
  const { value, increase, decrease } = useCounter(0, {
    upperLimit: 3, lowerLimit: 0, loop: true
  })

  return (
    <div>
      <p>{value}</p>
      <button onClick={increase}>[+]</button>
      <button onClick={decrease}>[-]</button>
    </div>
  )
}

export default UseCounter
