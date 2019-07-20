// 注意这里的state实际接收的是state.info
export default function infoReducer(state, action) {
  switch(action.type) {
    case 'CHANGE_POSITION':
      return  {
        ...state,
        position: action.position
      }
    case 'CHANGE_HOBBY':
      return {
        ...state,
        hobby: action.hobby
      }
    default:
      return state
  }
}