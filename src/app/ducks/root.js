// #region Imports
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

// Import ducks definitions
import * as user from './user'
// #endregion


// #region Compine all ducks initial states, reducers and epics
// Initial State
export const initialState = {
  user: user.INITIAL_STATE,
}

// Reducers
export const rootReducer = combineReducers({
  user: user.reducer,
})

// Epics
export const rootEpic = combineEpics(
  user.epics,
)
// #endregion
