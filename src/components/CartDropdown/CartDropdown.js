import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CartDropdown.styles.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { cartItemsSelector } from '../../utils/cartSelector';
import { toggleCartHidden } from '../../redux/actions/cart';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const renderedCartItems = cartItems.map(cartItem => (
    <CartItem key={cartItem.id} item={cartItem}></CartItem>
  ));
  return (
    <div className='cart-dropdown'>
      {cartItems.length ? (
        <div className='cart-items'>{renderedCartItems}</div>
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <Button
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: cartItemsSelector(state) };
};
export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
