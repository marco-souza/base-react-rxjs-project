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
  // ducks' data
  name: PropTypes.string,
  photo: PropTypes.string,
  profile: PropTypes.object,
  // ducks' actions
  changeName: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
}


export default Component
