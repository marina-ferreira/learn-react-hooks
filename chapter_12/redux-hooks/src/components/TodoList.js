import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import TodoItem from 'components/TodoItem'

const TodoList = () => {
  const filter = useSelector(state => state.filter)
  const todos = useSelector(state => state.todos)

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
