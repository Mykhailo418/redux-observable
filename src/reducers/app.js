export const SET_TITLE = 'SET_TITLE';

const initState = {
  title: 'Redux Observable'
}

export function appReducer(state = initState, action){
  const {type, payload} = action;
  switch(type){
    case SET_TITLE:
      return {
        ...state,
        title: payload
      }
    default:
      return state;
  }
}
