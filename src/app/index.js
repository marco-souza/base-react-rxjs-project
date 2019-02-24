import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import { configureStore } from 'app/ducks'
import Home from './screens/home'


// Bootstrap component
const Bootstrap = (name = 'world') => {
  // register Service Workers
  if ('serviceWorker' in navigator) {
    runtime.register()
  }

  // Setup store
  const { store, persistor } = configureStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  )
}

// Bind component to DOM
ReactDOM.render(
  Bootstrap(),
  document.getElementById('root')
)
