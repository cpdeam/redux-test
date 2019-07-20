/**初始状态 */
let initalState = {
  name: 'dcp',
  info: '页面仔'
}

let createStore = function(initalState) {
  let state = initalState
  let listenerList = []
  /**订阅事件 */
  function subcribe(listener) {
    listenerList.push(listener)
  }
  /**通知 */
  function dispatch(newState = initalState) {
    state = newState
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

let store = createStore(initalState)

store.subcribe(() => {
  console.log('store was changed,', store.getState())
})

store.dispatch({
  ...store.getState(),
  name: 'Dean'
})

store.dispatch({
  ...store.getState(),
  info: '打字员'
})