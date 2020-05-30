import React, { useState } from 'react'

const MyNameHooks = () => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default MyNameHooks

// no need for constructors or dealing with this bindings
// code is more concise and easier for React to optimize
