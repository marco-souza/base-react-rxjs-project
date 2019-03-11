import Component from './component'
import styles from './styles'

import useStyles from 'react-jss'


let ComposedComponent = Component
// Apply decrators to inject data and functions to component props
ComposedComponent = useStyles(styles)(ComposedComponent)


// Export composed component
export default ComposedComponent
