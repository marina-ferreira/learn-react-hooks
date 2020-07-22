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

    this.fetchTodos = this.fetchTodos.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.filterTodos = this.filterTodos.bind(this)
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

  toggleTodo(id) {
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

  addTodo(title) {
    const { todos } = this.state
    const newTodo = { id: generateID(), title, completed: false }

    this.setState({ todos: [newTodo, ...todos] })
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
    const { filter, filteredTodos } = this.state

    return (
      <StateContext.Provider value={filteredTodos}>
        <div>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <TodoList toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
          <TodoFilter filter={filter} filterTodos={this.filterTodos} />
        </div>
      </StateContext.Provider>
    )
  }
}

export default App
