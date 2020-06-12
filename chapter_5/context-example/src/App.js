import React, { createContext } from 'react'
import Header from 'components/Header'

function App() {
  return (
    <ThemeContext.Provider value={{ primaryColor: 'coral' }}>
      <Header text="Hello World" />

      <ThemeContext.Provider value={{ primaryColor: 'deeppink' }}>
        <Header text="Hello Planet" />
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App

export const ThemeContext = createContext({ primaryColor: 'deepskyblue' })

// Contexts use the default value that is passed to createContext
// when there is no provider defined.
