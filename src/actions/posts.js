export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const FETCH_POSTS_START = 'GET_POSTS_START';
export const FETCH_POSTS_ERROR = 'GET_POSTS_ERROR';

export const runFecthPostsAC = () => ({
    type: FETCH_POSTS,
});

export const fecthPostsStartAC = () => ({
  type: FETCH_POSTS_START
});

export const fecthPostsSuccessAC = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fecthPostsErrorAC = () => ({
  type: FETCH_POSTS_ERROR
});
