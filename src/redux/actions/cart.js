import { Cart } from '../types';

export const toggleCartHidden = () => dispatch => {
  dispatch({ type: Cart.TOGGLE_CART_HIDDEN });
};
