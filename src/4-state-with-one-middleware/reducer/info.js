const initalState = {
  position: '页面仔',
  hobby: '唱 跳 rap 篮球'
}

// 注意这里的state实际接收的是state.info
export default function infoReducer(state = initalState, action) {
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