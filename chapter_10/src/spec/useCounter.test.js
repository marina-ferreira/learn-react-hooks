import { renderHook, act } from '@testing-library/react-hooks'

import useCounter from 'hooks/useCounter'

test('should use counter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
  expect(typeof result.current.increment).toBe('function')
})

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => result.current.increment())

  expect(result.current.count).toBe(1)
})

test('should use initial value', () => {
  const { result } = renderHook(() => useCounter(123))

  expect(result.current.count).toBe(123)
  act(() => result.current.increment())
  expect(result.current.count).toBe(124)
})
