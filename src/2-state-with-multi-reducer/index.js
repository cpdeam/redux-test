import nameReducer from './reducer/name.js'
import infoReducer from './reducer/info.js'
import combineReducer from './combineReducer.js'
import createStore from '../1-state-with-single-reducer/createStore.js'
const reducer = combineReducer({
  name: nameReducer,
  info: infoReducer
})

const initalState = {
  name: {
    value: 'dcp',
    type: 'chinese'
  },
  info: {
    position: '页面仔',
    hobby: '唱 跳 rap 篮球'
  }
}

const store = createStore(reducer, initalState)

store.subcribe(() => {
  console.log('store was changed: ', store.getState())
})

store.dispatch({
  type: 'CHANGE_VALUE',
  value: 'Dean'
})

store.dispatch({
  type: 'CHANGE_POSITION',
  position: '个人练习生'
})