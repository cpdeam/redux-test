export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers) // ['name', 'info']
  return function(state = {}, action) {
    const nextState = {}
    /**遍历执行所有reducer，并将变更后的state依次设置进next中，最终返回一个完整的变更后的state */
    for(let key of reducerKeys) {
      const reducer = reducers[key] // 获取当前key对应的reducer
      const prevState = state[key] // 获取当前key对应的的state
      // 执行当前reducer，传入的prevState此时变成了state.name/state.info
      const nextStateForKey = reducer(prevState, action)
      nextState[key] = nextStateForKey // 设置当前key对应的state
    }
    return nextState // 最终返回一个完整的新的state
  }
}

