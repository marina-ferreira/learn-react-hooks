import React from 'react'

const TodoFilterItem = ({ name, filter = 'all', filterTodos }) => {
  const handleFilter = () => {
    filterTodos(name)
  }

  const style = {
    color: 'blue',
    cursor: 'pointer',
    margin: '0 10px',
    fontWeight: filter === name ? 'bold' : 'normal'
  }

  return <span style={style} onClick={handleFilter}>{name}</span>
}

export default TodoFilterItem
