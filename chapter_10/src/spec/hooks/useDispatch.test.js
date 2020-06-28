import { renderHook } from '@testing-library/react-hooks'

import { StateContextWrapper } from 'spec/testUtils'
import { useDispatch } from 'hooks'

test('should use dispatch', () => {
  const { result } = renderHook(
    () => useDispatch(),
    { wrapper: StateContextWrapper }
  )

  expect(typeof result.current).toBe('function')
})
