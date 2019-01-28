import ReactDOM from 'react-dom'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

// Bootstrap component
const Bootstrap = (name = 'world') => {
  if ('serviceWorker' in navigator) {
    runtime.register()
  }
  return (
    <h1>Hello, {name}!</h1>
  )
}

// Bind component to DOM
ReactDOM.render(
  Bootstrap('Webpack'),
  document.getElementById('root')
)
