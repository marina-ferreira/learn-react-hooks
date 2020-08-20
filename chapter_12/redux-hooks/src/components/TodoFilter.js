import React from 'react'

import TodoFilterItem from 'components/TodoFilterItem'

const TodoFilter = props => {
  return (
    <div>
      <TodoFilterItem {...props} name="all" />
      <TodoFilterItem {...props} name="active" />
      <TodoFilterItem {...props} name="completed" />
    </div>
  )
}

export default TodoFilter
