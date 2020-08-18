import React, { Component } from 'react'

import TodoFilterItem from 'components/TodoFilterItem'

class TodoFilter extends Component {
  render() {
    return (
      <div>
        <TodoFilterItem {...this.props} name="all" />
        <TodoFilterItem {...this.props} name="active" />
        <TodoFilterItem {...this.props} name="completed" />
      </div>
    )
  }
}

export default TodoFilter
