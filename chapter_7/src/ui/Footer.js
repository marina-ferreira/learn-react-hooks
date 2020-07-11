import React from 'react'
import { useCurrentRoute } from 'react-navi'

const Footer = () => {
  const { url } = useCurrentRoute()

  return (
    <div>
      <a href={url.href}>{url.href}</a>
    </div>
  )
}

export default Footer
