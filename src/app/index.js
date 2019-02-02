import ReactDOM from 'react-dom'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import Home from './screens/home'


// Bootstrap component
const Bootstrap = (name = 'world') => {
  // register Service Workers
  if ('serviceWorker' in navigator) {
    runtime.register()
  }

  return (
    <div>
      <Home name={name} />
    </div>
  )
}

// Bind component to DOM
ReactDOM.render(
  Bootstrap('Webpack'),
  document.getElementById('root')
)
