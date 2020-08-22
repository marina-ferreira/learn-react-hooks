import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import TodoItem from 'components/TodoItem'

const todosSelector = state => state.todos
const filterSelector = state => state.filter

const selectFilteredTodos = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)

      default:
      case 'all':
        return todos
    }
  }
)

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos)

  return filteredTodos.map(item => (
    <TodoItem {...item} key={item.id} />
  ))
}

export default TodoList
