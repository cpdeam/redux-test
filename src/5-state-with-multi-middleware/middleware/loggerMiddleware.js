export default (store) => (next) => (action) => {
  console.log('previous state: ', store.getState())
  console.log('action: ', action)
  next(action)
  console.log('current state: ', store.getState())
}