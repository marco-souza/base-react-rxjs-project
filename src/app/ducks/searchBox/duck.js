// #region Imports
import {
  tap,
  map,
  debounceTime,
} from 'rxjs/operators'
import {
  ofType,
  combineEpics,
} from 'redux-observable'

import {
  newState,
  actionBuilder,
} from 'app/utils/ducks'
// #endregion


// #region Consts (Initial state and Types)
// Initial State - each duck defines it`s own particular state
const INITIAL_STATE = {
  suggestions: [],
  inputValue: '',
  selectedItem: [],
}

// Types - actions that can be used to change the store
const KEY_DOWN = 'KEY_DOWN'
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM'
const DELETE_SELECTED_ITEM = 'DELETE_SELECTED_ITEM'

const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS'
const FETCH_SUGGESTIONS_DONE = 'FETCH_SUGGESTIONS_DONE'
const FETCH_SUGGESTIONS_ERROR = 'FETCH_SUGGESTIONS_ERROR'

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
  keyDown: actionBuilder(KEY_DOWN),
  changeInputValue: actionBuilder(CHANGE_INPUT_VALUE),
  addSelectedItem: actionBuilder(ADD_SELECTED_ITEM),
  deleteSelectedItem: actionBuilder(DELETE_SELECTED_ITEM),
  fetchSuggestions: actionBuilder(FETCH_SUGGESTIONS),
  fetchSuggestionsDone: actionBuilder(FETCH_SUGGESTIONS_DONE),
  fetchSuggestionsError: actionBuilder(FETCH_SUGGESTIONS_ERROR),
}
// #endregion


// #region Epics - Async Handling
const fetchSuggestions = (action$, state$) => action$.pipe(
  ofType(FETCH_SUGGESTIONS),
  debounceTime(300),
  map(item => ({
    value: state$.value.searchBox.inputValue,
    selected: state$.value.searchBox.selectedItem,
  })),
  map(({ value, selected }) => GROUP_LIST
    .filter(item =>
      item.label.includes(value) &&
      !selected.includes(item.label))
  ),
  tap(console.log),
  map(suggestions => actions.fetchSuggestionsDone(suggestions)),
)

const epics = combineEpics(
  fetchSuggestions,
)
// #endregion


// #region Reducer - Functions to change store when receive an action
const reducer = (state = INITIAL_STATE, action) => {
  const {
    inputValue,
    selectedItem,
  } = state

  switch (action.type) {
  case KEY_DOWN:
    const isBackspace = (
      selectedItem.length &&
      !inputValue.length &&
      action.payload === 'Backspace'
    )

    return isBackspace
      ? newState(
        state, 'selectedItem',
        selectedItem.slice(0, selectedItem.length - 1)
      )
      : state

  case CHANGE_INPUT_VALUE:
    return newState(state, 'inputValue', action.payload)

  case ADD_SELECTED_ITEM:
    return selectedItem.includes(action.payload)
      ? {
        ...state,
        inputValue: '',
        selectedItem,
      }
      : {
        ...state,
        inputValue: '',
        selectedItem: [
          ...selectedItem,
          action.payload,
        ],
        suggestions: [],
      }

  case DELETE_SELECTED_ITEM:
    const newSelectedItem = [...state.selectedItem]
    newSelectedItem.splice(newSelectedItem.indexOf(action.payload), 1)
    return newState(state, 'selectedItem', newSelectedItem)

  case FETCH_SUGGESTIONS_DONE:
    console.log(action.payload)
    return newState(state, 'suggestions', action.payload)

  case FETCH_SUGGESTIONS_ERROR:
    console.error(action.payload)
    return newState(state, 'suggestions', [])

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
