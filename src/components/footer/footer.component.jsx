import React from 'react';

import {
  FooterContainer,
  RoyalCalmInfoContainer,
  FooterLogo,
  CreatorInfo,
  ProjectWarning,
  ContactInfoContainer,
  ContactLinkContainer,
  ContactTitle,
  ContactSecondRow,
  ContactSecondRowSpacing,
  ContactLink,
} from './footer.styles'
const Footer = () => {
  return (
    <FooterContainer id='#footer'>
      <RoyalCalmInfoContainer>
        <FooterLogo />
        <span>Thank you for visiting</span>
        <span>
          © 2019 Royal Calm Clothing Ltd.
        </span>
        <CreatorInfo>
          Designed and developed by Gabriel Cadiz
        </CreatorInfo>
        <ProjectWarning>
          Project currently in progress and subject to change
        </ProjectWarning>
      </RoyalCalmInfoContainer>
      <ContactInfoContainer>
        <ContactTitle>Interested in working together? Don't hesitate to connect!</ContactTitle>
        <ContactSecondRow>
          <ContactSecondRowSpacing />
          <ContactLinkContainer>
            <ContactLink href='https://www.linkedin.com/in/gabriel-cadiz/' target="_blank">LinkedIn</ContactLink>
            <ContactLink href='https://github.com/gabecadiz' target="_blank">GitHub</ContactLink>
            <ContactLink href='https://resume.creddle.io/resume/2ygbnncywr4' target="_blank">Resume</ContactLink>
            <ContactLink href="mailto: gabecadiz@hotmail.com" >Email Me</ContactLink>
          </ContactLinkContainer>
        </ContactSecondRow>
      </ContactInfoContainer>
    </FooterContainer>
  )
}

export default Footer;