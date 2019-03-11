import PropTypes from 'prop-types'

import Downshift from 'downshift'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

import Input from './input'
import Suggestion from './suggestion'


const Component = ({
  classes,

  suggestions,
  inputValue,
  selectedItem,

  handleKeyDown,
  handleInputChange,
  handleChange,
  handleDelete,
}) => (
  <Downshift
    id="downshift-multiple"
    inputValue={inputValue}
    onChange={handleChange}
    selectedItem={selectedItem}
  >
    {({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue: inputValue2,
      selectedItem: selectedItem2,
      highlightedIndex,
    }) => (
      <div className={classes.container}>

        {/* Data Input */}
        <Input
          classes={classes}
          fullWidth={true}
          InputProps={getInputProps({
            startAdornment: selectedItem.map(item => (
              <Chip
                key={item}
                tabIndex={-1}
                label={item}
                className={classes.chip}
                onDelete={() => handleDelete(item)}
              />
            )),
            onChange: handleInputChange,
            onKeyDown: handleKeyDown,
            placeholder: 'Select multiple countries',
          })}
          label="Label"
        />

        {/* Suggestions */}
        {isOpen ? (
          <Paper className={classes.paper} square>
            {suggestions.map((suggestion, index) => (
              <Suggestion
                key={index}
                suggestion={suggestion}
                selectedItem={selectedItem2}
                highlightedIndex={highlightedIndex}
                itemProps={getItemProps({ item: suggestion.label })}
              />
            ))}
          </Paper>
        ) : null}
      </div>
    )}
  </Downshift>
)


// Define Props Types
Component.propTypes = {
  // styles
  classes: PropTypes.object,
  // ducks' data
  inputValue: PropTypes.string,
  suggestions: PropTypes.array,
  selectedItem: PropTypes.array,
  // ducks' actions
  handleKeyDown: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
}


export default Component
