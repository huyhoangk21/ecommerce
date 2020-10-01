import React from 'react';
import './CartIcon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon);
