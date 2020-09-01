import React from 'react'
import { useObserver } from 'mobx-react'
import { useTodoStore } from 'hooks'

const TodoItem = ({ item }) => {
  const todoStore = useTodoStore()

  const handleToggle = () => {
    todoStore.toggleTodo(item.id)
  }

  const handleRemove = () => {
    todoStore.removeTodo(item.id)
  }

  return useObserver(() => {
    const { title, completed } = item

    return (
      <div>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        {title}
        <button onClick={handleRemove}>x</button>
      </div>
    )
  })
}

export default TodoItem
