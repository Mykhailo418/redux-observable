export const FETCH_USER_SUCCESS = 'GET_USER_SUCCESS';
export const FETCH_USER_START = 'GET_USER_START';
export const FETCH_USER = 'FETCH_USER';
export const USER_STATUSES = {
  init: 'init',
  pending: 'pending',
  success: 'success',
  error: 'error'
}

export const runFecthUserAC = () => ({
    type: FETCH_USER,
});

export const fecthUserSuccessAC = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

export const fecthUserStartAC = () => ({
    type: FETCH_USER_START,
});
