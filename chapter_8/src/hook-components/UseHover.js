import React from 'react'
import { useHover } from 'react-hookedup'

const UseHover = () => {
  const { hovered, bind } = useHover()

  return (
    <>
      <div {...bind}>
        Hover me =] <strong>{hovered && 'Thanks!'}</strong>
      </div>
    </>
  )
}

export default UseHover
