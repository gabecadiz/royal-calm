import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux'
import { selectMenuSections } from '../../redux/menu/menu.selectors'
import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './menu-container.styles'



const MenuContainer = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections
})

export default connect(mapStateToProps)(MenuContainer);