import { generateID } from 'services/api'

const filterReducer = (state, action) => {
  if (action.type === 'FILTER_TODOS') {
    return action.filter
  }

  return state
}

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.todos
    case 'ADD_TODO':
      const newTodo = {
        id: generateID(),
        title: action.title,
        completed: false
      }
      return [newTodo, ...state]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export const appReducer = (state, action) => {
  return {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  }
}
