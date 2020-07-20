import React, { Component } from 'react'

import TodoItem from 'components/TodoItem'

class TodoList extends Component {
  render() {
    return items.map(item => (
      <TodoItem key={item.id} {...item} />
    ))
  }
}

export default TodoList

const items = [
  { id: 1, title: 'Write React Hooks book', completed: true },
  { id: 2, title: 'Promote book', completed: false }
]
