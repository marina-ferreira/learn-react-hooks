import React, { useContext } from 'react'

import StateContext from 'contexts/StateContext'

import TodoItem from 'components/TodoItem'

const TodoList = props => {
  const items = useContext(StateContext)

  return items.map(item => (
    <TodoItem {...item} {...props} key={item.id} />
  ))
}

export default TodoList
