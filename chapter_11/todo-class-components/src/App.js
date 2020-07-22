import React, { Component } from 'react'

import StateContext from 'contexts/StateContext'
import { fetchAPITodos, generateID } from 'services/api'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import TodoFilter from 'components/TodoFilter'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      filteredTodos: [],
      filter: 'all'
    }
  }

  componentDidMount() {
    this.fetchTodos()
  }

  fetchTodos() {
    fetchAPITodos().then(todos => {
      this.setState({ todos })
      this.filterTodos()
    })
  }

  toggleTodos(id) {
    const { todos } = this.state

    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }

      return todo
    }, [])

    this.setState({ todos: newTodos })
    this.filterTodos()
  }

  removeTodo(id) {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id)

    this.setState({ todos: newTodos })
    this.filterTodos()
  }

  applyFilter(todos, filter) {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)

      default:
      case 'all':
        return todos
    }
  }

  filterTodos(filterArg) {
    this.setState(({ todos, filter }) => ({
      filter: filterArg || filter,
      filteredTodos: this.applyFilter(todos, filterArg || filter)
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </div>
    )
  }
}

export default App
