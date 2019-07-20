export default function(reducer, initalState) {
  let state = initalState
  let listenerList = []
  /**订阅事件 */
  function subcribe(listener) {
    listenerList.push(listener)
  }
  /**通知 */
  function dispatch(action) {
    state = reducer(initalState, action)
    for(let listener of listenerList) {
      listener()
    }
  }

  function getState() {
    return state
  }

  return {
    subcribe,
    dispatch,
    getState
  }
}