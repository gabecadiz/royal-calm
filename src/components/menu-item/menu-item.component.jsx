import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => { history.push(`${match.url}${linkUrl}`) }}
    >
      <BackgroundImageContainer imageUrl={imageUrl} className='background-image' />
      <ContentContainer className='content'>
        <ContentTitle className='title'>{title.toUpperCase()}</ContentTitle>
        <ContentSubTitle className='subtitle'>SHOP NOW</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}
export default withRouter(MenuItem)