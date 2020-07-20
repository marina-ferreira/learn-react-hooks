import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { title, completed } = this.props

    return (
      <div>
        <input type="checkbox" checked={completed} />
        {title}
        <button>x</button>
      </div>
    )
  }
}

export default TodoItem
