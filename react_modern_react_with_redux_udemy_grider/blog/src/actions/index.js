import jsonPlaceHolder from '../apis/jsonPlaceHolder.js';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};
