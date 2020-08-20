import React, { useEffect } from 'react'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import ConnectedTodoList from 'containers/ConnectedTodoList'
import ConnectedTodoFilter from 'containers/ConnectedTodoFilter'

const App = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div>
      <Header />
      <AddTodo />
      <ConnectedTodoList />
      <ConnectedTodoFilter />
    </div>
  )
}

export default App
