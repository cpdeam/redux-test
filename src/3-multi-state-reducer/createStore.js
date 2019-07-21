export default function createStore(reducer, initalState) {
  let state = initalState
  let listenerList = []
  /**订阅事件 */
  function subcribe(listener) {
    listenerList.push(listener)
  }
  /**通知 */
  function dispatch(action) {
    state = reducer(state, action)
    for(let listener of listenerList) {
      listener()
    }
  }

  function getState() {
    return state
  }
  // 传入一个type不为任何类型的随机数,用于初始化整个state
  dispatch({ type: Math.random() + new Date() }) 
  return {
    subcribe,
    dispatch,
    getState
  }
}