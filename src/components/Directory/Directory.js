import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem';
import sections from './Directory.data';

const Directory = () => {
  const renderedSections = sections.map(
    ({ id, title, imageUrl, linkUrl, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    )
  );

  return <div className='directory-menu'>{renderedSections}</div>;
};

export default Directory;
