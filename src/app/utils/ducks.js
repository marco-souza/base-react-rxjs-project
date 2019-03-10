const actionBuilder = actionType => payload => ({
  // Function which returns an action function payload => ({ type, payload })
  type: actionType,
  payload,
})


const newState = (state, key, payload) => ({
  // Function to generate new changing the key with the payload
  ...state,
  [key]: payload,
})


export {
  newState,
  actionBuilder,
}
