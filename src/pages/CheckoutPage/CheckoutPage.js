import React from 'react';
import './CheckoutPage.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsSelector, cartTotalSelector } from '../../utils/cartSelector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
const CheckoutPage = ({ cartItems, total }) => {
  const renderedCartItems = cartItems.map(cartItem => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {renderedCartItems}
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
