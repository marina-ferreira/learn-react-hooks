import React from 'react'
import { useObserver } from 'mobx-react'
import { useTodoStore } from 'hooks'

const TodoFilterItem = ({ name }) => {
  const todoStore = useTodoStore()

  const handleFilter = () => {
    todoStore.filterTodos(name)
  }

  const style = useObserver(() => ({
    color: 'blue',
    cursor: 'pointer',
    margin: '0 10px',
    fontWeight: (todoStore.filter === name) ? 'bold' : 'normal'
  }))

  return <span style={style} onClick={handleFilter}>{name}</span>
}

const TodoFilter = () => {
  return (
    <div>
      <TodoFilterItem name="all" />
      <TodoFilterItem name="active" />
      <TodoFilterItem name="completed" />
    </div>
  )
}

export default TodoFilter
