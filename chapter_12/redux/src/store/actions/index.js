import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, FILTER_TODOS, FETCH_TODOS } from 'store/types'
import { fetchAPITodos } from 'services/api'

export const addTodo = title => ({
  type: ADD_TODO, title
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO, id
})

export const removeTodo = id => ({
  type: REMOVE_TODO, id
})

export const filterTodos = filter => ({
  type: FILTER_TODOS, filter
})

export const fetchTodos = () => {
  return async (dispatch) => {
    const todos = await fetchAPITodos()
    dispatch({ type: FETCH_TODOS, todos })
  }
}
