import React, { useEffect } from 'react'
import { useOnlineStatus, usePrevious } from 'react-hookedup'

const UseOnlineStatus = () => {
  const { online } = useOnlineStatus()
  const prevOnline = usePrevious(online)

  useEffect(() => {
    if (prevOnline === false && online === true) {
      console.log('syncing data...')
    }
  }, [prevOnline, online])

  return (
    <p>
      You are {online ? 'online' : 'offline'}
    </p>
  )
}

export default UseOnlineStatus
