import { createSelector } from 'reselect';

export const cartItemsSelector = state => state.cart.cartItems;

export const totalQuantitySelector = createSelector(
  cartItemsSelector,
  cartItems =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
