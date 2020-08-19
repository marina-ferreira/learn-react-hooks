import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodo, removeTodo } from 'store/actions'
import TodoItem from 'components/TodoItem'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({  toggleTodo, removeTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
