import React from 'react';
import './CollectionPage.styles.scss';
import { connect } from 'react-redux';
import { shopCollectionSelector } from '../../utils/shopSelector';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const renderedItems = items.map(item => (
    <CollectionItem key={item.id} item={item} />
  ));

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>{renderedItems}</div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return { collection: shopCollectionSelector(match.params.categoryId)(state) };
};

export default connect(mapStateToProps)(CollectionPage);
