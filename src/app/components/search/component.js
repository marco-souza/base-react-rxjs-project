import { Fragment } from 'react'
import PropTypes from 'prop-types'

import Sample from './sample'


const Component = ({
  classes,
}) => (
  <Fragment>

    Search with
    <Sample />
  </Fragment>
)


// Define Props Types
Component.propTypes = {
  // ducks' data
  classes: PropTypes.object,
}


export default Component
