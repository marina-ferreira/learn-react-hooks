import React, { useState } from 'react'
import { inject } from 'mobx-react'

const AddTodo = ({ todoStore }) => {
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

export default inject('todoStore')(AddTodo)
