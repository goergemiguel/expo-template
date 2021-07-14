export default function reducer(state, action) {
  console.groupCollapsed(
    `%c Store Updated`,
    "padding: 1px 6px 1px 0px; background: blue; color: white"
  )
  console.log("Action Type")
  console.log(action?.type)
  console.log("Action Payload")
  console.log(action?.payload)
  console.groupEnd()
  switch (action.type) {
    case "SET_LOGGED_IN_USER":
      return {
        ...state,
        loggedInUser: action.payload,
      }
    default:
      return state
  }
}
