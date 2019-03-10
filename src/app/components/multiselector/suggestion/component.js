import PropTypes from 'prop-types'

import MenuItem from '@material-ui/core/MenuItem'


const Component = ({
  key,
  itemProps,
  suggestion,
  selectedItem,
  highlightedIndex,
}) => {
  const isHighlighted = highlightedIndex === key
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
  key: PropTypes.number,
  itemProps: PropTypes.object,
  suggestion: PropTypes.object,
  selectedItem: PropTypes.object,
  highlightedIndex: PropTypes.number,
}


export default Component
