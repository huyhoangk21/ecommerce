import React from 'react';
import './CartIcon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { cartItemsQuantitySelector } from '../../utils/cartSelector';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: cartItemsQuantitySelector(state),
  };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
