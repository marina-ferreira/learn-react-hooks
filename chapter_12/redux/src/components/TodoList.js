import React, { useMemo } from 'react'

import ConnectTodoItem from 'components/ConnectTodoItem'

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
    <ConnectTodoItem {...item} key={item.id} />
  ))
}

export default TodoList
