
export default (posts = [], action) => {
  return action.type === 'FETCH_POSTS' ?
           [...posts, action.payload]
          : posts;
}
