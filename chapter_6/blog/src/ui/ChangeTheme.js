import React, { useState, useEffect } from 'react'

const ThemeItem = ({ theme, active, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
      <span style={{ color: theme.primaryColor }}>Primary</span> /
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  )
}

const ChangeTheme = ({ theme, setTheme }) => {
  const [themes, setThemes] = useState([])

  const isActive = t => (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
  )

  useEffect(() => {
    const themesEndpoint = '/api/themes'

    fetch(themesEndpoint)
      .then(response => response.json())
      .then(setThemes)
  }, [])

  return (
    <div>
      Change theme:
      {themes.map((t, i) => (
        <ThemeItem
          key={`theme-${i}`}
          theme={t}
          active={isActive}
          onClick={() => setTheme(t)}
        />
      ))}
    </div>
  )
}

export default ChangeTheme
