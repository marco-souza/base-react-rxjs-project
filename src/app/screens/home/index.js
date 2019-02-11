import Component from './component'
import userData from 'app/ducks/user'


// Apply decrators to inject data and functions to component props
let ComposedComponent = userData(Component)


// Export composed component
export default ComposedComponent
