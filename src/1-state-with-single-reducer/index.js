import reducer from './reducer.js'

const initalState = {
  name: 'dcp',
  info: '页面仔'
}
const createStore = function(reducer, initalState) {
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

const store = createStore(reducer, initalState)

store.subcribe(() => {
  console.log('store was changed: ', store.getState())
})
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dean'
})

export default createStore