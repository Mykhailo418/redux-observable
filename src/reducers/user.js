import {FETCH_USER_SUCCESS} from '../actions/user';

const initState = {
  data: {},
  loading: true
};

export function userReducer(state = initState, action){
  const {type, payload} = action;
  switch(type){
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      }
    default:
      return state;
  }
}
