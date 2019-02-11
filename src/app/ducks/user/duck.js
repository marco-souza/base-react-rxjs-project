/**
 * I se this file more as a duck description. Which ations it have,
 * what is it initial state, how it reducers is made and so on.
 *
 * This file must contain/export
 * - INITIAL_STATE
 * - actions
 * - redducer
 *
 * But I still have a question about where to put my hard logic (async,
 * increments, cleaners, so on), in actions or inside maps (state and
 * dispatch)?
 *
 * I've decided to always prefer to use the **maps**, to avoid create
 * big ducks' structures and still have to repass it's structures to
 * maps. I prefere complex logic in maps than biig ducks structures,
 *
 * Maybe is a good idea put all logic in a separated file and import`s
 * it inside index.js.
 */


/**
 * Initial State - each duck defines it`s own particular state
 */
const INITIAL_STATE = {
  name: null,
  photo: null,
}


/**
 * Types of actions that can be used to change the store
 */
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_PHOTO = 'CHANGE_PHOTO'


/**
 * Functions to create acttions that can be dispatched
 */
const actionBuilder = actionType => payload => ({
  // Function which returns an action function payoad => ({ type, payload })
  type: actionType,
  payload,
})

const actions = {
  changeName: actionBuilder(CHANGE_NAME),
  changePhoto: actionBuilder(CHANGE_PHOTO),
}


/**
 * Functions to change store when receive an action
 */
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

  default:
    return state
  }
}


/**
 * Exports
 */
export {
  // Export reducer
  reducer,
  // Export action creators on root
  actions,
  // Export initial state
  INITIAL_STATE,
}
