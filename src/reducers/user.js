import {FETCH_USER_SUCCESS, USER_STATUSES, FETCH_USER_START} from '../actions/user';

const initState = {
  data: {},
  status: USER_STATUSES.init // init | pending | success | error
};

export function userReducer(state = initState, action){
  const {type, payload} = action;
  switch(type){
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        status: USER_STATUSES.success,
        data: payload
      }
    case FETCH_USER_START:
      return {
        ...state,
        status: USER_STATUSES.pending
      }
    default:
      return state;
  }
}
