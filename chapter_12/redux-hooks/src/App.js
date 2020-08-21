import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTodos } from 'store/actions'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import TodoFilter from 'components/TodoFilter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

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
