import React, { useState } from 'react'
import { useTodoStore } from 'hooks'

const AddTodo = () => {
  const todoStore = useTodoStore()

  const [input, setInput] = useState('')

  const handleInputChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!input) return

    todoStore.addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={input}
        onChange={handleInputChange}
      />
      <input
        type="submit"
        value="Add task"
        disabled={!input}
      />
    </form>
  )
}

export default AddTodo
