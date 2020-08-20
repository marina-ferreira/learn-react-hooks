import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo } from 'store/actions'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo(id))
  }

  const handleRemove = () => {
    dispatch(removeTodo(id))
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
