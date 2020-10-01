import React from 'react';
import './CollectionPreview.styles.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  const renderedItems = items
    .filter((_, idx) => idx < 4)
    .map(({ id, ...itemProps }) => <CollectionItem key={id} {...itemProps} />);

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>{renderedItems}</div>
    </div>
  );
};

export default CollectionPreview;
