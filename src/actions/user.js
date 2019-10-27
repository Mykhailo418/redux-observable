export const FETCH_USER_SUCCESS = 'GET_USER_SUCCESS';

export const fecthUserAC = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});
