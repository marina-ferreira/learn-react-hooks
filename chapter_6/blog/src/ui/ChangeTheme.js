import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'

const ThemeItem = ({ theme, active, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
      <span style={{ color: theme.primaryColor }}>Primary</span> /
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  )
}

const ChangeTheme = ({ theme, setTheme }) => {
  const [themes, getThemes] = useResource(() => ({
    url: '/themes',
    mothod: 'get'
  }))
  const { data, isLoading } = themes

  useEffect(getThemes, [])

  const isActive = t => (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
  )

  return (
    <div>
      Change theme:
      {isLoading && 'Loading themes...'}
      {data && data.map((t, i) => (
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
