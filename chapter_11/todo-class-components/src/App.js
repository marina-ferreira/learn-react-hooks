import React, { Component } from 'react'

import Header from 'components/Header'
import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import TodoFilter from 'components/TodoFilter'

class App extends Component {
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
