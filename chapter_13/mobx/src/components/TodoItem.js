import React from 'react'
import { inject, observer } from 'mobx-react'

const TodoItem = ({ item: { id, title, completed }, todoStore }) => {
  const handleToggle = () => {
    todoStore.toggleTodo(id)
  }

  const handleRemove = () => {
    todoStore.removeTodo(id)
  }

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {title}
      <button onClick={handleRemove}>x</button>
    </div>
  )
}

export default inject('todoStore')(observer(TodoItem))
