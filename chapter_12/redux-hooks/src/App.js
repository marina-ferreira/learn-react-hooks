import React, { useEffect } from 'react'

import Header from 'components/Header'
import ConnectedAddTodo from 'containers/ConnectedAddTodo'
import ConnectedTodoList from 'containers/ConnectedTodoList'
import ConnectedTodoFilter from 'containers/ConnectedTodoFilter'

const App = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div>
      <Header />
      <ConnectedAddTodo />
      <ConnectedTodoList />
      <ConnectedTodoFilter />
    </div>
  )
}

export default App
