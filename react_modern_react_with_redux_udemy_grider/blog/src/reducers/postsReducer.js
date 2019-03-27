
export default (posts = [], action) => {
  return  action.type === 'FETCH_POSTS' ?
            action.payload
        : action.type === 'BOB' ?
            posts
          : posts;
}
