import {FETCH_POSTS_SUCCESS, FETCH_POSTS_START, FETCH_POSTS_ERROR, CANCEL_FETCH_POSTS} from '../actions/posts';

const initState = {
  data: [],
  loading: null
};

export function postsReducer(state = initState, action){
  const {type, payload} = action;
  switch(type){
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        data: []
      };
    case CANCEL_FETCH_POSTS:
      return {
        ...state,
        data: [],
        loading: false
      };
    default: return state;
  }
}
