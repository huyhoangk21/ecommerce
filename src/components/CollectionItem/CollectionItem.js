import React from 'react';
import { connect } from 'react-redux';
import './CollectionItem.styles.scss';
import { addItem } from '../../redux/actions/cart';
import Button from '../Button/Button';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
