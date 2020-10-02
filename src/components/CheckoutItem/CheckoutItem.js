import React from 'react';
import './CheckoutItem.styles.scss';
import { connect } from 'react-redux';
import { addItem, removeItem, decreaseItem } from '../../redux/actions/cart';

const CheckoutItem = ({ cartItem, addItem, removeItem, decreaseItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

export default connect(null, { addItem, removeItem, decreaseItem })(
  CheckoutItem
);
