import React, { Component } from 'react'

import TodoFilterItem from 'components/TodoFilterItem'

class TodoFilter extends Component {
  render() {
    return (
      <div>
        <TodoFilterItem name="all" />
        <TodoFilterItem name="active" />
        <TodoFilterItem name="completed" />
      </div>
    )
  }
}

export default TodoFilter
