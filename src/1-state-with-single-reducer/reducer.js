export default function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name
      }
    case "CHANGE_INFO":
      return {
        ...state,
        info: action.info
      }
    default:
      return state
  }
}
