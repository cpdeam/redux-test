import nameReducer from './reducer/name.js'
import infoReducer from './reducer/info.js'
import combineReducer from '../2-state-with-multi-reducer/combineReducer.js'
import createStore from './createStore.js'
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

const store = createStore(reducer)
console.log(store.getState()) // 此时已经是完成了初始化的state了

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