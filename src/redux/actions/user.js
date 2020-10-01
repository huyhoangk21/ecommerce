import { User } from '../types';

export const setCurrentUser = user => ({
  type: User.SET_CURRENT_USER,
  payload: user,
});
