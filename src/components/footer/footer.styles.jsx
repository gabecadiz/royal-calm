import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const FooterInfoContainerStyles = css`
  padding: 1rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px){
    margin: 0 auto;
    width: 80%;
   } 
`

const LinkStyles = css`
  text-decoration: none;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 800px){
    margin: 0 auto;
   } 

  &:hover{
    color: #F0B726;
  }
  font-size: 0.9em;
`;

const LinkContainerStyles = css`
  display:flex;
  flex-direction: column;
  padding-top: 0.5em;
`

export const FooterContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 25vh;
 width: 100vw;
 color: #fff;
 margin-top: 2rem;
 background-color:rgb(67, 67, 67);
 box-sizing: border-box
 -webkit-box-shadow: -1px -4px 10px -4px rgba(94,94,94,1);
 -moz-box-shadow: -1px -4px 10px -4px rgba(94,94,94,1);
 box-shadow: -1px -4px 10px -4px rgba(94,94,94,1);

 @media screen and (max-width: 800px){
  height: auto;
  flex-direction: column;
 } 
`

export const RoyalCalmInfoContainer = styled.div`
  padding: 1rem;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

 span {
   margin: 0 auto;
 }

 @media screen and (max-width: 800px){
  padding: 8px 4px 4px 4px;
 } 
`

export const ProjectWarning = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
`

export const CreatorInfo = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
`

export const FooterLogo = styled(Logo)`
  height: 30%;
  margin: 0 auto;
  
  @media screen and (max-width: 800px){
    padding: 5px;
   } 
  
`

export const DeveloperInfoContainer = styled.div`
  ${FooterInfoContainerStyles}
`

export const DeveloperTitleContainer = styled.div`
  font-weight:bold;
  padding-bottom: 2px;
  margin: 0 auto;
`

export const DeveloperTitle = styled.span`
  padding: 4px;
  border-bottom: 2px solid white;
`

export const DeveloperLinkContainer = styled.div`
  ${LinkContainerStyles}
`

export const DeveloperLink = styled.a`
  ${LinkStyles}
`


export const ContactInfoContainer = styled.div`
  ${FooterInfoContainerStyles};
`

export const ContactTitleContainer = styled.div`
  font-weight:bold;
  padding-bottom: 2px;
  margin: 0 auto;
`

export const ContactTitle = styled.span`
  padding: 4px;
  border-bottom: 2px solid white;
`

export const ContactSecondRow = styled.div`
  display: flex;
`

export const ContactLinkContainer = styled.div`
  ${LinkContainerStyles}
`

export const ContactLink = styled.a`
  ${LinkStyles}
`