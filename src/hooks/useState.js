import ReactDOM from 'react-dom'

export const useState = initialState => {
  let state = initialState

  const setState = nextState => {
    state = nextState
    ReactDOM.render(<MyNameHooks />, document.getElementById('root'))
  }

  return [state, setState]
}
