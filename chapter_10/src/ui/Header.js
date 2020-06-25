import React from 'react'

import useTheme from 'hooks/useTheme'

const Header = ({ text }) => {
  const { primaryColor } = useTheme()

  return (
    <h1 style={{ color: primaryColor }}>{text}</h1>
  )
}

export default Header
