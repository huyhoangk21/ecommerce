import React from 'react';
import { connect } from 'react-redux';
import './CartDropdown.styles.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { cartItemsSelector } from '../../utils/cartSelector';
const CartDropdown = ({ cartItems }) => {
  const renderedCartItems = cartItems.map(cartItem => (
    <CartItem key={cartItem.id} item={cartItem}></CartItem>
  ));
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{renderedCartItems}</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: cartItemsSelector(state) };
};
export default connect(mapStateToProps)(CartDropdown);
