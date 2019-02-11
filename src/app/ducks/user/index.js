import { connect } from 'react-redux'
import {
  reducer,
  actions,
  INITIAL_STATE,
} from './duck'


/**
 * Maps to put actions and states as props of a component
 */

// Map user slice of Store to props
const mapStateToProps = state => {
  const { user } = state
  return { ...user }
}

// Map actions to Props
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeName (data) {
    dispatch(actions.changeName(data))
  },
  changePhoto (data) {
    dispatch(actions.changePhoto(data))
  },
})


// Export binds
export default connect(mapStateToProps, mapDispatchToProps)
export {
  reducer,
  INITIAL_STATE,
}
