import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import 'mobx-react-lite/batchingForReactDom'

import TodoStore from 'store'

import App from './App'
import './index.css'

const store = new TodoStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
