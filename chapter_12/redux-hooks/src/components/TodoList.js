import React, { useMemo } from 'react'

import TodoItem from 'components/TodoItem'

const TodoList = ({ filter, todos }) => {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)

      default:
      case 'all':
        return todos
    }
  }, [filter, todos])

  return filteredTodos.map(item => (
    <TodoItem {...item} key={item.id} />
  ))
}

export default TodoList
