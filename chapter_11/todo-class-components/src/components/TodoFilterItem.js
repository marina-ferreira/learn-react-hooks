import React, { Component } from 'react'

class TodoFilterItem extends Component {
  render() {
    const { name } = this.props

    return <span style={style}>{name}</span>
  }
}

export default TodoFilterItem

const style = {
  color: 'blue',
  cursor: 'pointer',
  margin: '0 10px'
}
