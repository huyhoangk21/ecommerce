import { Cart } from '../types';
import { addItemToCart } from '../../utils/cartUtils';

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Cart.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case Cart.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    default:
      return state;
  }
};

export default cartReducer;
