import { renderHook } from '@testing-library/react-hooks'

import { ThemeContextWrapper } from 'spec/testUtils'
import { useTheme } from 'hooks'

test('should use theme', () => {
  const { result } = renderHook(
    () => useTheme(),
    { wrapper: ThemeContextWrapper }
  )

  expect(result.current.primaryColor).toBe('deepskyblue')
  expect(result.current.secondaryColor).toBe('coral')
})
