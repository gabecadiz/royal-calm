import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './menu-container.styles.scss';

import { connect } from 'react-redux'
import { selectMenuSections } from '../../redux/menu/menu.selectors'
import { createStructuredSelector } from 'reselect';

const MenuContainer = ({ sections }) => (
  <div className="menu-container">
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections
})

export default connect(mapStateToProps)(MenuContainer);