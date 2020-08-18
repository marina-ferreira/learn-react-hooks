import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleToggle() {
    const { id, toggleTodo } = this.props
    toggleTodo(id)
  }

  handleRemove() {
    const { id, removeTodo } = this.props
    removeTodo(id)
  }

  render() {
    const { title, completed } = this.props

    return (
      <div>
        <input type="checkbox" checked={completed} onChange={this.handleToggle} />
        {title}
        <button onClick={this.handleRemove}>x</button>
      </div>
    )
  }
}

export default TodoItem
