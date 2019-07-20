export default function(reducers) {
  const reducerKeys = Object.keys(reducers)

  return function(state = {}, action) {
    const next = {}
    for(let key of reducerKeys) {
      const reducer = reducers[key]
      const prevState = state[key]
      const nextStateKey = reducer(prevState, action)
      next[key] = nextStateKey
    }
    return next
  }
}