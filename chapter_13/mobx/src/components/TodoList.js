import React from 'react'
import { inject, observer } from 'mobx-react'

import TodoItem from './TodoItem'

const TodoList = ({ todoStore }) => {
  if (!todoStore.filteredTodos) return <div>Loading...</div>

  return todoStore.filteredTodos.map(item =>
    <TodoItem key={item.id} item={item} />
  )
}

export default inject('todoStore')(observer(TodoList))
