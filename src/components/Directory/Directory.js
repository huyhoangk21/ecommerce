import React from 'react';
import './Directory.styles.scss';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) => {
  const renderedSections = sections.map(({ id, ...sectionProps }) => (
    <MenuItem key={id} {...sectionProps} />
  ));

  return <div className='directory-menu'>{renderedSections}</div>;
};
const mapStateToProps = ({ directory: { sections } }) => {
  return { sections };
};

export default connect(mapStateToProps)(Directory);
