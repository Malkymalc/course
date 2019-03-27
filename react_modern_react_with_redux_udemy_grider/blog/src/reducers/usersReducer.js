
export default (users = [], action) => {
  return action.type === 'FETCH_USER' ?
      [...users, action.payload]
    : users;
}
