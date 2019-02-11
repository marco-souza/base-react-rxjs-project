/**
 * Types of actions that can be made in the store
 */
const Types = {
  'CHANGE_NAME': 'CHANGE_NAME',
  'CHANGE_PHOTO': 'CHANGE_PHOTO',
}


/**
 * Initial State
 */
const InitialState = {
  name: null,
  photo: null,
}


/**
 * Functions to create acttions that can be dispatched
 */
const ActionCreator = {
  changeName: payload => ({
    type: Types.CHANGE_NAME,
    payload,
  }),
  changePhoto: payload => ({
    type: Types.CHANGE_PHOTO,
    payload,
  }),
}


/**
 * Functions to change store when receive an action
 */
const reducer = (state = InitialState, action) => {
  switch (action.type) {
  case Types.CHANGE_NAME:
    return {
      ...state,
      name: action.payload,
    }

  case Types.CHANGE_PHOTO:
    return {
      ...state,
      photo: action.payload,
    }

  default:
    return state
  }
}


/**
 * Exports
 */
export {
  // Export action creators on root
  ActionCreator,
  // Export reducer
  reducer,
  // Export reducers
  InitialState,
}
