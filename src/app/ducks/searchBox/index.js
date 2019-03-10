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
    const { inputValue, selectedItem } = props
    if (selectedItem.length && !inputValue.length && event.key === 'Backspace') {
      dispatch(actions.changeSelectedItem(
        selectedItem.slice(0, selectedItem.length - 1)
      ))
    }
  },

  handleInputChange (event) {
    dispatch(actions.changeInputValue(
      event.target.value
    ))
  },

  handleChange (item) {
    const { selectedItem } = props
    if (selectedItem.indexOf(item) === -1) {
      dispatch(actions.changeSelectedItem([...selectedItem, item]))
    }
    dispatch(actions.changeInputValue(''))
  },

  handleDelete (item) {
    const selectedItem = [...props.selectedItem]
    selectedItem.splice(selectedItem.indexOf(item), 1)
    dispatch(actions.changeSelectedItem(selectedItem))
  },

  fetchSuggestions (value) {
    dispatch(actions.fetchSuggestions(value))
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
