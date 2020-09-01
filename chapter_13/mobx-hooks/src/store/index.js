import { observable, action, computed, decorate } from 'mobx'

import { fetchAPITodos, generateID } from 'services/api'

class TodoStore {
  todos = []
  filter = 'all'

  get filteredTodos () {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(todo => !todo.completed)
      case 'completed':
        return this.todos.filter(todo => todo.completed)

      default:
      case 'all':
        return this.todos
    }
  }

  fetch() {
    fetchAPITodos().then(fetchedTodos => {
      this.todos = fetchedTodos
    })
  }

  addTodo(title) {
    this.todos.push({ id: generateID(), title, completed: false })
  }

  toggleTodo(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.completed = !todo.completed
        break
      }
    }
  }

  removeTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1)
  }

  filterTodos(filterName) {
    this.filter = filterName
  }
}

export default TodoStore

decorate(TodoStore, {
  todos: observable,
  filter: observable,
  filteredTodos: computed,
  fetch: action,
  addTodo: action,
  toggleTodo: action,
  removeTodo: action,
  filterTodos: action
})
