import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTodos } from 'store/actions'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import ConnectedTodoList from 'containers/ConnectedTodoList'
import ConnectedTodoFilter from 'containers/ConnectedTodoFilter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

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
