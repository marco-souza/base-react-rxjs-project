/**
 * This file should setup an the redux store, so each new duck should be added
 * to **initialState** and **reducers** to allow it's actions to change state.
 */
import { createStore, combineReducers, compose } from 'redux'

// Import ducks definitions
import * as user from './user'


// Setup Store initial state
const initialState = {
  user: user.INITIAL_STATE,
}


// Compine all ducks reducers - (receive state + action, return new state)
const reducers = combineReducers({
  user: user.reducer,
})


// Create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const STORE = createStore(
  // Add reducers
  reducers,
  // Set initial state
  initialState,
  // Apply enhancements
  composeEnhancers(),
)
