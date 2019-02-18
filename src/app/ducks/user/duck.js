// #region Imports
import {
  debounceTime,
  map,
  mergeMap,
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ofType, combineEpics } from 'redux-observable'
// #endregion


// #region Consts (Initial state and Types)
// Initial State - each duck defines it`s own particular state
const INITIAL_STATE = {
  name: null,
  photo: null,
  profile: null,
}

// Types - actions that can be used to change the store
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_PHOTO = 'CHANGE_PHOTO'
const FETCH_PROFILE = 'FETCH_PROFILE'
const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED'
// #endregion


// #region Action Creators -  Functions to create actions that can be dispatched
const actionBuilder = actionType => payload => ({
  // Function which returns an action function payoad => ({ type, payload })
  type: actionType,
  payload,
})

const actions = {
  changeName: actionBuilder(CHANGE_NAME),
  changePhoto: actionBuilder(CHANGE_PHOTO),
  fetchProfile: actionBuilder(FETCH_PROFILE),
  fetchProfileFufilled: actionBuilder(FETCH_PROFILE_FULFILLED),
}
// #endregion


// #region Epics - Async Handling
const fetchProfileEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_PROFILE),
  debounceTime(1000), // debounce to avoid multiple loads
  mergeMap(action =>
    ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
      map(response => actions.fetchProfileFufilled(response))
    )
  ),
)

const epics = combineEpics(
  fetchProfileEpic,
)
// #endregion


// #region Reducer - Functions to change store when receive an action
const newState = (state, key, payload) => ({
  // Function to generate new changinng the key with the payload
  ...state,
  [key]: payload,
})

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_NAME:
    return newState(state, 'name', action.payload)

  case CHANGE_PHOTO:
    return newState(state, 'photo', action.payload)

  case FETCH_PROFILE_FULFILLED:
    return newState(state, 'profile', action.payload)

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
