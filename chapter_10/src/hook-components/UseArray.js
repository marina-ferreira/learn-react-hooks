import React from 'react'
import { useArray } from 'react-hookedup'

const UseArray = () => {
  const array = ['one', 'two', 'three']
  const { value, add, clear, removeIndex } = useArray(array)

  return (
    <div>
      <p>Current array: {JSON.stringify(value)}</p>
      <button onClick={() => add('test')}>Add element</button>
      <button onClick={() => removeIndex(0)}>Remove first element</button>
      <button onClick={() => clear()}>Clear elements</button>
    </div>
  )
}

export default UseArray
