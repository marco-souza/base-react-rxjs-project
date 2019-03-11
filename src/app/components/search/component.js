import { Fragment } from 'react'
import PropTypes from 'prop-types'

import MultiSelector from 'app/components/multiselector'


const Component = ({
  classes,
}) => (
  <Fragment>

    Search with
    <MultiSelector />
  </Fragment>
)


// Define Props Types
Component.propTypes = {
  // ducks' data
  classes: PropTypes.object,
}


export default Component
