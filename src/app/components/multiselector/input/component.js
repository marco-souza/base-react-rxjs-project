import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'


const Component = ({
  ref,
  classes,
  InputProps,
  ...other
}) => (
  <TextField
    InputProps={{
      inputRef: ref,
      classes: {
        root: classes.inputRoot,
        input: classes.inputInput,
      },
      ...InputProps,
    }}
    {...other}
  />
)


// Define Props Types
Component.propTypes = {
  ref: PropTypes.object,
  // styles
  classes: PropTypes.object,
  // data
  InputProps: PropTypes.object,
}


export default Component
