export default (store) => (next) => (action) => {
  try {
    next(action)
    console.log('exception')
  } catch (error) {
    console.error('error: ', error)
  }
}