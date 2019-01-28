import ReactDOM from 'react-dom'

// Bootstrap component
const Bootstrap = (name = 'world') => {
  return (
    <h1>Hello, {name}!</h1>
  )
}

// Bind component to DOM
ReactDOM.render(
  Bootstrap('Webpack'),
  document.getElementById('root')
)
