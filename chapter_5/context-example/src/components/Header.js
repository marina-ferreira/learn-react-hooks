import React, { useContext } from 'react'

import { ThemeContext } from 'App'

const Header = ({ text }) => {
  const theme = useContext(ThemeContext)

  return (
    <h1 style={{ color: theme.primaryColor }}>{text}</h1>
  )
}

// Traditional way
// const Header = ({ text }) => (
//   <ThemeContext.Consumer>
//     {theme => (
//       <h1 style={{ color: theme.primaryColor }}>{text}</h1>
//     )}
//   </ThemeContext.Consumer>
// )

export default Header
