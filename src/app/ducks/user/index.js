// #region Imports
import { connect } from 'react-redux'
import {
  reducer,
  actions,
  epics,
  INITIAL_STATE,
} from './duck'
// #endregion


// #region Maps to put actions and states as props of a component

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
  resetName () {
    dispatch(actions.changeName(null))
  },
  changePhoto (data) {
    dispatch(actions.changePhoto(data))
  },
  fetchProfile (data) {
    dispatch(actions.fetchProfile(data))
  },
})
// #endregion


// #region Export binds
export default connect(mapStateToProps, mapDispatchToProps)
export {
  reducer,
  epics,
  INITIAL_STATE,
}
// #endregion
