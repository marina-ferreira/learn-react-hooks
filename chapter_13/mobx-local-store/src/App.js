import React, { useEffect } from 'react'

import { useTodoStore } from 'hooks'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import TodoFilter from 'components/TodoFilter'

const App = () => {
  const todoStore = useTodoStore()

  useEffect(() => {
    todoStore.fetch()
  }, [todoStore])

  return (
      <div>
        <Header />
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </div>
  )
}

export default App
