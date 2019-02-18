// #region Imports
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'

// Import roots
import {
  initialState,
  rootEpic,
  rootReducer,
} from './root'
// #endregion


// #region Create store
export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    // Add reducers
    rootReducer,
    // Set initial state
    initialState,
    // Apply enhancements
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  )

  // Run
  epicMiddleware.run(rootEpic)

  return store
}
// #endregion
