import React, { useState } from 'react'
import { useLocalStore, useObserver } from 'mobx-react'

import { useTodoStore } from 'hooks'

const AddTodo = () => {
  const todoStore = useTodoStore()

  const inputStore = useLocalStore(() => ({
    value: '',
    get disabled () {
      return !this.value
    },
    updateFromInput(e) {
      this.value = e.target.value
    },
    update (value) {
      this.value = value
    }
  }))

  const handleInputChange = e => {
    inputStore.updateFromInput(e)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!inputStore.value) return

    todoStore.addTodo(inputStore.value)
    inputStore.update('')
  }

  return useObserver(() => (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={inputStore.value}
        onChange={handleInputChange}
      />
      <input
        type="submit"
        value="Add task"
        disabled={inputStore.disabled}
      />
    </form>
  ))
}

export default AddTodo
