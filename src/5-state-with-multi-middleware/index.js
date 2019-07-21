import nameReducer from './reducer/name.js'
import infoReducer from './reducer/info.js'
import combineReducer from '../2-state-with-multi-reducer/combineReducer.js'
import createStore from '../3-multi-state-reducer/createStore.js'
import applyMiddleware from './applyMiddleware.js'
import loggerMiddleware from './middleware/loggerMiddleware.js'
import exceptionMiddleware from './middleware/exceptionMiddleware.js';
import timeStampMiddleware from './middleware/timeStampMiddleware.js';

const reducer = combineReducer({
  name: nameReducer,
  info: infoReducer
})

const store = createStore(reducer)

store.dispatch = applyMiddleware(store, exceptionMiddleware, timeStampMiddleware, loggerMiddleware, )

store.dispatch({
  type: 'CHANGE_VALUE',
  value: 'Dean'
})