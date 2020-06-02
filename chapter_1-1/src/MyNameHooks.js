import React from 'react'
import ReactDOM from 'react-dom'

const MyNameHooks = () => {
  currentHook = 0
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [enableFirstName, setEnableFirstName] = useState(false)

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  const handleEnableChange = e => {
    setEnableFirstName(!enableFirstName)
  }

  return (
    <div>
      <h1>My name is: {enableFirstName ? '' : name} {lastName}</h1>
      <input type="checkbox" value={enableFirstName} onChange={handleEnableChange} />
      <input type="text" value={name} onChange={handleChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </div>
  )
}

export default MyNameHooks

let states = []
let currentHook = 0

const useState = initialState => {
  if (typeof states[currentHook] === 'undefined') {
    states[currentHook] = initialState
  }

  let hookIndex = currentHook

  const setState = nextState => {
    states[hookIndex] = nextState
    ReactDOM.render(<MyNameHooks />, document.getElementById('root'))
  }

  return [states[currentHook++], setState]
}
