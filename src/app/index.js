import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import { configureStore } from 'app/ducks'
import Home from './screens/home'


// Bootstrap component
const Bootstrap = (name = 'world') => {
  // register Service Workers
  if ('serviceWorker' in navigator) {
    runtime.register()
  }

  const store = configureStore()

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

// Bind component to DOM
ReactDOM.render(
  Bootstrap(),
  document.getElementById('root')
)
