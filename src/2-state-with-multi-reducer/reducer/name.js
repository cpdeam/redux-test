export default function(state, action) {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        value: action.value
      }
    default: 
      return state
  }
}