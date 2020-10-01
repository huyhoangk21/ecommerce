import React from 'react';
import shopData from './ShopPage.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
  const renderedCollectionPreview = shopData.map(({ id, ...previewProps }) => (
    <CollectionPreview key={id} {...previewProps} />
  ));

  return <div className='shop-page'>{renderedCollectionPreview}</div>;
};

export default ShopPage;
