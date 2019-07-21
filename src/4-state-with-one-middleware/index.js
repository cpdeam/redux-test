import nameReducer from './reducer/name.js'
import infoReducer from './reducer/info.js'
import combineReducer from '../2-state-with-multi-reducer/combineReducer.js'
import createStore from '../3-multi-state-reducer/createStore.js'
const reducer = combineReducer({
  name: nameReducer,
  info: infoReducer
})

const store = createStore(reducer)

const next = store.dispatch // 保留当前dispatch的引用

const loggerMiddleware = (action) => { // 重写dispatch方法
  console.log('previous state: ', store.getState())
  console.log('action: ', action)
  next(action) // 执行原来的dispatch
  console.log('current state: ', store.getState())
}

store.dispatch = loggerMiddleware

store.subcribe(() => {
  // console.log('store was changed: ', store.getState())
})

store.dispatch({
  type: 'CHANGE_VALUE',
  value: 'Dean'
})

store.dispatch({
  type: 'CHANGE_POSITION',
  position: '个人练习生'
})