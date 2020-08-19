import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filterTodos } from 'store/actions'
import TodoFilter from 'components/TodoFilter'

const mapStateToProps = state => {
  const { filter } = state
  return { filter }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({  filterTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
