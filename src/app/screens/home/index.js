import Component from './component'
import userData from 'app/ducks/user'


let ComposedComponent = Component
// Apply decrators to inject data and functions to component props
ComposedComponent = userData(ComposedComponent)


// Export composed component
export default ComposedComponent
