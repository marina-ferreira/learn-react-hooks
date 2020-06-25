import React from 'react'
import { useMergeState } from 'react-hookedup'

const UseMergeState = () => {
  const { state, setState } = useMergeState({ loaded: true, counter: 0 })

  const handleClick = () => {
    setState({ counter: state.counter + 1 })
  }

  return (
    <div>
      Count: {state.counter}
      <button onClick={handleClick} disabled={!state.loaded}>+1</button>
    </div>
  )
}

export default UseMergeState

/*
* useMergeState allows state set without the need to spread the current state.
*/

/*
  const { state, setState } = useMergeState({ loaded: true, counter: 0 })
  setState({ counter: state.counter + 1 })

  const [state, setState] = useState({ loaded: true, counter: 0 })
  setState({ ...state, counter: state.counter + 1 })
*/
