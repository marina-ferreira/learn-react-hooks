import React, { useEffect } from 'react'
import { inject } from 'mobx-react'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import TodoFilter from 'components/TodoFilter'

const App = ({ todoStore }) => {
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

export default inject('todoStore')(App)
