import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { input } = this.state
    const { addTodo } = this.props

    if (!input) return

    addTodo(input)
    this.setState({ input: '' })
  }

  render() {
    const { input } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter new task" value={input} onChange={this.handleInputChange} />
        <input type="submit" value="Add task" disabled={!input} />
      </form>
    )
  }
}

export default AddTodo
