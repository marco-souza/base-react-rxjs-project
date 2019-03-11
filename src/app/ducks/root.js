// #region Imports
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

// Import ducks definitions
import * as searchBox from './searchBox'
// #endregion


// #region Compine all ducks initial states, reducers and epics
// Initial State
export const initialState = {
  searchBox: searchBox.INITIAL_STATE,
}

// Reducers
export const rootReducer = combineReducers({
  searchBox: searchBox.reducer,
})

// Epics
export const rootEpic = combineEpics(
  searchBox.epics,
)
// #endregion
