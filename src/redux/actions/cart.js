import { Cart } from '../types';

export const toggleCartHidden = () => dispatch => {
  dispatch({ type: Cart.TOGGLE_CART_HIDDEN });
};

export const addItem = item => dispatch => {
  dispatch({ type: Cart.ADD_ITEM, payload: item });
};
