import React from 'react';
import { connect } from 'react-redux';
import './CartDropdown.styles.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

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

const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};
export default connect(mapStateToProps)(CartDropdown);
