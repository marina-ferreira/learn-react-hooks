import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ConnectedApp from 'containers/ConnectedApp'
import { Provider } from 'react-redux'
import store from 'store/config'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
