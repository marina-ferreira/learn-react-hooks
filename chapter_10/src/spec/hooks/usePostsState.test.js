import { renderHook, act } from '@testing-library/react-hooks'
import { StateContextWrapper } from 'spec/testUtils'

import useDispatch from 'hooks/useDispatch'
import usePostsState from 'hooks/usePostsState'

test('should use posts state', () => {
  const { result } = renderHook(
    () => usePostsState(),
    { wrapper: StateContextWrapper }
  )

  expect(result.current).toEqual([])
})

test('should update posts state on fetch action', () => {
  const { result } = renderHook(
    () => ({ state: usePostsState(), dispatch: useDispatch() }),
    { wrapper: StateContextWrapper }
  )

  const samplePosts = [{ id: 'test' }, { id: 'test_2' }]
  act(() => result.current.dispatch({ type: 'FETCH_POSTS', posts: samplePosts }))
  expect(result.current.state).toEqual(samplePosts)
})

test('should update user state on register', () => {
  const { result } = renderHook(
    () => ({ state: usePostsState(), dispatch: useDispatch() }),
    { wrapper: StateContextWrapper }
  )

  const post = { title: 'Hello World', content: 'This is a test', author: 'Test User' }
  act(() => result.current.dispatch({ type: 'CREATE_POST', ...post }))
  expect(result.current.state[0]).toEqual(post)
})
