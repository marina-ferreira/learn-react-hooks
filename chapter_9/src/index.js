import React from 'react'
import ReactDOM from 'react-dom'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios'

import App from './App'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})


ReactDOM.render(
  <RequestProvider value={api}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RequestProvider>,
  document.getElementById('root')
)
