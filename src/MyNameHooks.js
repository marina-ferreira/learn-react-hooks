import React from 'react'
import ReactDOM from 'react-dom'

const MyNameHooks = () => {
  currentHook = 0
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  return (
    <div>
      <h1>My name is: {name} {lastName}</h1>
      <input type="text" value={name} onChange={handleChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </div>
  )
}

export default MyNameHooks

// no need for constructors or dealing with this bindings
// code is more concise and easier for React to optimize

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
    // We are going to need ReactDOM in order to force
    // rerendering of the component
  }

  return [states[currentHook++], setState]
  // it uses the current value as index and currentHook will
  // be increased after returning from the function
}

// If the state is set inside the useState function, every time the component
// rerenders, the closure defined by useState gets reinitialized, and the value
// is reset

// Seeting the state variable outside the function, as a global variable, solves
// the reset problem. But create another. If you have multiple hooks, they will
// write to the same global variable.
