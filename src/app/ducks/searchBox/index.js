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
  const { searchBox } = state
  return { ...searchBox }
}

// Map actions to Props
const mapDispatchToProps = (dispatch, props) => ({

  handleKeyDown (event) {
    dispatch(actions.keyDown(
      event.target.key
    ))
  },

  handleInputChange (event) {
    dispatch(actions.changeInputValue(
      event.target.value
    ))
    dispatch(actions.fetchSuggestions())
  },

  handleChange (item) {
    dispatch(actions.addSelectedItem(item))
  },

  handleDelete (item) {
    dispatch(actions.deleteSelectedItem(item))
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
