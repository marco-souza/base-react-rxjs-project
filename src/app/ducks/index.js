import { createStore, combineReducers, compose } from 'redux'

// Import reducers
import {
  reducer as user,
  InitialState as UserInitialState,
} from 'app/ducks/user'


// Set general initial state
const InitialState = {
  user: UserInitialState,
}


// Compine all reducers
const reducers = combineReducers({
  user,
})


// Create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const STORE = createStore(
  // Add reducers
  reducers,
  // Set initial state
  InitialState,
  // Apply enhancements
  composeEnhancers(),
)
