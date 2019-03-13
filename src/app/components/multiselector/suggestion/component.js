import PropTypes from 'prop-types'

import MenuItem from '@material-ui/core/MenuItem'


const Component = ({
  index,
  itemProps,
  suggestion,
  selectedItem,
  highlightedIndex,
}) => {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}


// Define Props Types
Component.propTypes = {
  index: PropTypes.number,
  itemProps: PropTypes.object,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
  selectedItem: PropTypes.string,
  highlightedIndex: PropTypes.number,
}


export default Component
