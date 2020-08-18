import React, { Component } from 'react'

import StateContext from 'contexts/StateContext'

import TodoItem from 'components/TodoItem'

class TodoList extends Component {
  static contextType = StateContext

  render() {
    const items = this.context

    return items.map(item => (
      <TodoItem key={item.id} {...item} {...this.props} />
    ))
  }
}

export default TodoList
