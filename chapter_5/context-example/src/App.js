import React, { createContext } from 'react'
import Header from 'components/Header'

function App() {
  return (
    <Header text="Hello World" />
  )
}

export default App

export const ThemeContext = createContext({ primaryColor: 'deepskyblue' })
