import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem';
import sections from './Directory.data';

const Directory = () => {
  const renderedSections = sections.map(({ id, title, imageUrl, linkUrl }) => (
    <MenuItem key={id} title={title} imageUrl={imageUrl} />
  ));

  return <div className='directory-menu'>{renderedSections}</div>;
};

export default Directory;
