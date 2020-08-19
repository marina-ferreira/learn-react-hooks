import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from 'store/actions'
import AddTodo from 'components/AddTodo'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
