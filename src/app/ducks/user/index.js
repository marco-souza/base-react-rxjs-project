import { connect } from 'react-redux'
import {
  ActionCreator,
  reducer,
  InitialState,
} from './duck'


/**
 * Maps
 */

// Map Store to props
const mapStateToProps = state => {
  const { user } = state
  return { ...user }
}

// Map actions to Props
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeName (data) {
    dispatch(ActionCreator.changeName(data))
  },
  changePhoto (data) {
    dispatch(ActionCreator.changePhoto(data))
  },
})


// Export binds
export default connect(mapStateToProps, mapDispatchToProps)
export {
  reducer,
  InitialState,
}
