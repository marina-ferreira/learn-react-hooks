import React from 'react'

const TodoItem = ({ id, title, completed, toggleTodo, removeTodo }) => {
  const handleToggle = () => {
    toggleTodo(id)
  }

  const handleRemove = () => {
    removeTodo(id)
  }

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {title}
      <button onClick={handleRemove}>x</button>
    </div>
  )
}

export default TodoItem
