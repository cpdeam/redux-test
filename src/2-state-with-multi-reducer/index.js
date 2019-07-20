import changeName from './reducer/name.js'
import changeInfo from './reducer/info'
import combineReducer from './combineReducer.js'
import createStore from '../1-state-with-single-reducer/index.js'
const reducer = combineReducer({
  name: changeName,
  info: changeInfo
})

const initalState = {
  name: {
    value: 'dcp'
  },
  info: {
    infoName: '页面仔'
  }
}

const store = createStore(reducer, initalState)

store.subcribe(() => {
  console.log('store was changed: ', store.getState())
})

store.dispatch({
  type: 'CHANGE_NAME',
  value: 'Dean'
})