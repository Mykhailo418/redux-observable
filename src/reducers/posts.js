import {FETCH_POSTS_SUCCESS, FETCH_POSTS_START, FETCH_POSTS_ERROR} from '../actions/posts';

const initState = {
  data: {},
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
        data: null
      };
    default:
      return state;
  }
}
