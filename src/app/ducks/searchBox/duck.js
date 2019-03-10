// #region Imports
import {
  newState,
  actionBuilder,
} from 'app/utils'
// #endregion


// #region Consts (Initial state and Types)
// Initial State - each duck defines it`s own particular state
const INITIAL_STATE = {
  suggestions: [],
  inputValue: '',
  selectedItem: '',
}

// Types - actions that can be used to change the store
const CHANGE_SELECTED_ITEM = 'CHANGE_SELECTED_ITEM'
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
// const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS'
// #endregion


// #region Action Creators -  Functions to create actions that can be dispatched
const actions = {
  changeSelectedItem: actionBuilder(CHANGE_SELECTED_ITEM),
  changeInputValue: actionBuilder(CHANGE_INPUT_VALUE),
}
// #endregion


// #region Epics - Async Handling
const epics = {}
// #endregion


// #region Reducer - Functions to change store when receive an action
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_INPUT_VALUE:
    return newState(state, 'inputValue', action.payload)

  case CHANGE_SELECTED_ITEM:
    return newState(state, 'selectedItem', action.payload)

  default:
    return state
  }
}
// #endregion


// #region Exports
export {
  // Export reducer
  reducer,
  // Export action creators on root
  actions,
  // Export epics
  epics,
  // Export initial state
  INITIAL_STATE,
}
// #endregion
