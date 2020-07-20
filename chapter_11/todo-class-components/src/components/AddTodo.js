import React, { Component } from 'react'

class AddTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter new task" />
        <input type="submit" value="Add task" />
      </form>
    )
  }
}

export default AddTodo
