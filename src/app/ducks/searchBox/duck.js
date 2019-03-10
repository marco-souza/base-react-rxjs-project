// #region Imports
import deburr from 'lodash/deburr'

import {
  newState,
  actionBuilder,
} from 'app/utils'
// #endregion


// #region Consts (Initial state and Types)
// Initial State - each duck defines it`s own particular state
const INITIAL_STATE = {
  suggestions: [],
  inputValue: '',
  selectedItem: '',
}

// Types - actions that can be used to change the store
const CHANGE_SELECTED_ITEM = 'CHANGE_SELECTED_ITEM'
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS'

const GROUP_LIST = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
]

// #endregion


// #region Action Creators -  Functions to create actions that can be dispatched
const actions = {
  changeSelectedItem: actionBuilder(CHANGE_SELECTED_ITEM),
  changeInputValue: actionBuilder(CHANGE_INPUT_VALUE),
  fetchSuggestions: actionBuilder(FETCH_SUGGESTIONS),
}
// #endregion


// #region Epics - Async Handling
const epics = {}
// #endregion


// #region Reducer - Functions to change store when receive an action
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_INPUT_VALUE:
    return newState(state, 'inputValue', action.payload)

  case CHANGE_SELECTED_ITEM:
    return newState(state, 'selectedItem', action.payload)

  case FETCH_SUGGESTIONS:
    const inputValue = deburr(action.payload.trim()).toLowerCase()
    const inputLength = inputValue.length

    let count = 0

    const newSuggestions = inputLength === 0
      ? []
      : GROUP_LIST.filter(suggestion => {
        const keep = (
          count < 5 &&
          suggestion.label
            .slice(0, inputLength).toLowerCase() === inputValue
        )

        if (keep) {
          count += 1
        }

        return keep
      })

    return newState(state, 'suggestions', newSuggestions)

  default:
    return state
  }
}
// #endregion


// #region Exports
export {
  // Export reducer
  reducer,
  // Export action creators on root
  actions,
  // Export epics
  epics,
  // Export initial state
  INITIAL_STATE,
}
// #endregion
