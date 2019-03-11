import { Fragment } from 'react'
import PropTypes from 'prop-types'

import Search from 'app/components/search'


const Component = (props) => (
  <Fragment>
    <Search />
  </Fragment>
)


// Define Props Types
Component.propTypes = {
  // App style theme
  theme: PropTypes.string, // TODO Add a duck to theme
}


export default Component
