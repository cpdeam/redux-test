// 注意这里的state实际接收的是state.name
export default function nameReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: action.value
      }
    case 'CHANGE_TYPE':
      return {
        ...state,
        type: action.type
      }
    default:
      return state
  }
}