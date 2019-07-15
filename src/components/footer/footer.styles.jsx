import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/crown.svg'


export const FooterContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 25vh;
 width: 100vw;
 color: #fff;
 background-color:rgb(67, 67, 67);
 -webkit-box-shadow: -1px -4px 10px -4px rgba(94,94,94,1);
 -moz-box-shadow: -1px -4px 10px -4px rgba(94,94,94,1);
 box-shadow: -1px -4px 10px -4px rgba(94,94,94,1);
`;

export const RoyalCalmInfoContainer = styled.div`
  padding: 1rem;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
`

export const ContactInfoContainer = styled.div`
  padding: 1rem;
  padding-right: 4rem;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const ContactTitle = styled.div`
  font-weight:bold;
`

export const ContactSecondRow = styled.div`
  display: flex;
`

export const ContactSecondRowSpacing = styled.div`
  width: 60%;
`

export const ContactLinkContainer = styled.div`
  display:flex;
  flex-direction: column;
`


export const ContactLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover{
    color: #F0B726;
  }
`