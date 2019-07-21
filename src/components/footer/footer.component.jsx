import React from 'react';

import {
  FooterContainer,
  RoyalCalmInfoContainer,
  FooterLogo,
  CreatorInfo,
  ProjectWarning,
  DeveloperInfoContainer,
  DeveloperTitleContainer,
  DeveloperTitle,
  DeveloperLink,
  DeveloperLinkContainer,
  ContactInfoContainer,
  ContactLinkContainer,
  ContactTitleContainer,
  ContactTitle,
  ContactLink,
} from './footer.styles'
const Footer = () => {
  return (
    <FooterContainer>

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

      <DeveloperInfoContainer>
        <DeveloperTitleContainer>
          <DeveloperTitle>
            Website Technology
          </DeveloperTitle>
        </DeveloperTitleContainer>
        <DeveloperLinkContainer>
          <DeveloperLink href='https://reactjs.org/' target="_blank">React.js</DeveloperLink>
          <DeveloperLink href='https://firebase.google.com/' target='_blank'>Google Firebase authentication</DeveloperLink>
          <DeveloperLink href='https://stripe.com/en-ca' target='_blank'>Stripe API payment system</DeveloperLink>
          <DeveloperLink href='https://github.com/gabecadiz/royal-calm' target='_blank'>GitHub Repo</DeveloperLink>
        </DeveloperLinkContainer>

      </DeveloperInfoContainer>

      <ContactInfoContainer>
        <ContactTitleContainer>
          <ContactTitle>Customer Support</ContactTitle>
        </ContactTitleContainer>
        <ContactLinkContainer>
          <ContactLink href='https://www.linkedin.com/in/gabriel-cadiz/' target="_blank">LinkedIn</ContactLink>
          <ContactLink href='https://github.com/gabecadiz' target="_blank">GitHub</ContactLink>
          <ContactLink href='https://resume.creddle.io/resume/2ygbnncywr4' target="_blank">Resume</ContactLink>
          <ContactLink href="mailto: gabecadiz@hotmail.com" >Email Me</ContactLink>
        </ContactLinkContainer>
      </ContactInfoContainer>

    </FooterContainer>
  )
}

export default Footer;