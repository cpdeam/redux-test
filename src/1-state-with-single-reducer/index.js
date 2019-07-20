import reducer from './reducer.js'
import createStore from './createStore.js'

const initalState = {
  name: 'dcp',
  info: '页面仔'
}

const store = createStore(reducer, initalState)

store.subcribe(() => {
  console.log('store was changed: ', store.getState())
})
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dean'
})