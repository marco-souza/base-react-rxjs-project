// #region Imports
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
// Redux Persist
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// RxJS - Async actions
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
  // Setup redux persisst
  const persistCofig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistCofig, rootReducer)

  // Setup store
  const epicMiddleware = createEpicMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    // Add reducers
    persistedReducer,
    // Set initial state
    initialState,
    // Apply enhancements
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  )
  const persistor = persistStore(store)

  // Run
  epicMiddleware.run(rootEpic)

  return { store, persistor }
}
// #endregion
