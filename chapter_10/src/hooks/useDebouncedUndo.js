import { useState, useEffect, useCallback } from 'react'
import useUndo from 'use-undo'
import { useDebouncedCallback } from 'use-debounce'

const useDebouncedUndo = (timeout = 200) => {
  const [content, setInput] = useState('')
  const [undoContent, { set: setContent, ...undoRest }] = useUndo('')
  const [setDebounce, cancelDebounce] = useDebouncedCallback(
    value => setContent(value),
    timeout
  )

  useEffect(() => {
    cancelDebounce()
    setInput(undoContent.present)
  }, [cancelDebounce, undoContent])

  const setter = useCallback(value => {
    setInput(value)
    setDebounce(value)
  }, [setInput, setDebounce])

  return [content, setter, undoRest]
}

export default useDebouncedUndo
