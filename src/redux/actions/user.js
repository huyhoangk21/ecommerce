import { User } from '../types';

export const setCurrentUser = user => dispatch => {
  dispatch({
    type: User.SET_CURRENT_USER,
    payload: user,
  });
};
