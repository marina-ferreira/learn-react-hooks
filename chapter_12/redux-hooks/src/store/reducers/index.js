import { generateID } from 'services/api'
import { combineReducers } from 'redux'

const filter = (state = 'all', action) => {
  if (action.type === 'FILTER_TODOS') {
    return action.filter
  }

  return state
}

const todos = (state = [], action) => {
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

const appReducer = combineReducers({ filter, todos })

export default appReducer
