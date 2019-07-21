export default (store) => (next) => (action) => {
  console.log(new Date())
  next(action)
}