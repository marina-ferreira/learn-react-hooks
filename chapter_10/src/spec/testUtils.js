import React from 'react'
import { ThemeContext } from 'contexts'

const ThemeContextWrapper = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ primaryColor: 'deepskyblue', secondaryColor: 'coral' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextWrapper
