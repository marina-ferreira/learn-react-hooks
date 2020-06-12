import React, { createContext } from 'react'
import Header from 'components/Header'
import Page from 'components/Page'

function App() {
  return (
    <ThemeContext.Provider value={{ primaryColor: 'coral' }}>
      <Header text="Hello World" />

      <ThemeContext.Provider value={{ primaryColor: 'deeppink' }}>
        <Header text="Hello Planet" />
        <Page headerColor="violet" />
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App

export const ThemeContext = createContext({ primaryColor: 'deepskyblue' })

// Contexts use the default value that is passed to createContext
// when there is no provider defined.
