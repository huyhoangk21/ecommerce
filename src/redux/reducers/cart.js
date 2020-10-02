import { Cart } from '../types';
import { addItemToCart, decreaseItemFromCart } from '../../utils/cartUtils';

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Cart.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case Cart.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case Cart.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        ),
      };
    case Cart.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
