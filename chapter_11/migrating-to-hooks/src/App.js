import React, { useEffect, useReducer, useMemo } from 'react'

import StateContext from 'contexts/StateContext'
import { fetchAPITodos } from 'services/api'
import appReducer from 'reducers'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import TodoFilter from 'components/TodoFilter'

const App = () => {
  const [state, dispatch] = useReducer(appReducer, { todos: [], filter: 'all' })

  useEffect(() => {
    fetchAPITodos().then(todos => {
      dispatch({ type: 'FETCH_TODOS', todos })
    })
  }, [])

  const filteredTodos = useMemo(() => {
    const { filter, todos } = state

    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)

      default:
      case 'all':
        return todos
    }
  }, [state])

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', id })
  }

  const addTodo = title => {
    dispatch({ type: 'ADD_TODO', title })
  }

  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', id })
  }

  const filterTodos = filter => {
    dispatch({ type: 'FILTER_TODOS', filter })
  }

  return (
    <StateContext.Provider value={filteredTodos}>
      <div>
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <TodoFilter filter={state.filter} filterTodos={filterTodos} />
      </div>
    </StateContext.Provider>
  )
}

export default App
