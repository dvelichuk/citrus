import {
  apiGetListAsync
} from '../api/api';

export function setDate(title) {
    return (dispatch) => {
        return dispatch({
            type: 'SET_TITLE',
            title
        })
    };
}
export function getPending() {
    return (dispatch) => {
        return dispatch({
            type: 'GET_PENDING',
            pending
        })
    };
}
export function getSuccess(data) {
    return (dispatch) => {
        return dispatch({
            type: 'GET_SUCCESS',
            data
        })
    };
}
export function getError(error) {
    return (dispatch) => {
        return dispatch({
            type: 'GET_ERROR',
            error
        })
    };
}

export function getListAsync(skip) {
  return async (dispatch, getState) => {
    try {
      const response = await apiGetListAsync(skip);
      if (!response) {
        dispatch(getError('Something went wrong with call'));
        return;
      }
      dispatch(getSuccess(response));
    }
    catch (err) {
      dispatch(getError(err));
    }
  };
};
