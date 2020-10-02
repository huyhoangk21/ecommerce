import React from 'react';
import { connect } from 'react-redux';
import { shopCollectionsSelector } from '../../utils/shopSelector';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = ({ shopData }) => {
  const renderedCollectionPreview = shopData.map(({ id, ...previewProps }) => (
    <CollectionPreview key={id} {...previewProps} />
  ));

  return <div className='shop-page'>{renderedCollectionPreview}</div>;
};

const mapStateToProps = state => {
  return { shopData: shopCollectionsSelector(state) };
};

export default connect(mapStateToProps)(ShopPage);
