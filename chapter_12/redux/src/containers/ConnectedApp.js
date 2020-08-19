import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTodos } from 'store/actions'
import App from 'App'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({  fetchTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
