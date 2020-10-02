import React from 'react';
import './CollectionOverview.styles.scss';
import { connect } from 'react-redux';
import { shopCollectionsSelector } from '../../utils/shopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = ({ collections }) => {
  const renderedCollectionPreview = collections.map(
    ({ id, ...previewProps }) => (
      <CollectionPreview key={id} {...previewProps} />
    )
  );
  return (
    <div className='collections-overview'>{renderedCollectionPreview}</div>
  );
};

const mapStateToProps = state => {
  return { collections: shopCollectionsSelector(state) };
};

export default connect(mapStateToProps)(CollectionOverview);
