import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color:rgb(67, 67, 67);
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.32);
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.32);
  z-index: 10;

  @media screen and (max-width: 800px){
    height: 70px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-content: center;
  height: 75px;
  width: 100%;
  padding: 20px 25px;
  cursor: pointer;

  @media screen and (max-width: 800px){
    width: 20%;
    height: 60px;
    padding: 0px;
    justify-content: center;
    margin: auto 0;
  } 

  @media screen and (min-width: 801px){    
    .logo{
      &:hover{
        transform: scale(1.2);
        transition: 1000ms;
      }
    }
  }

`;

export const LogoTitle = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight:bold;
  padding: 10px 15px;

  @media screen and (max-width: 800px){
    display: none;
  } 
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding: 20px 15px;

  @media screen and (max-width: 800px){
    width: 80%;
    padding: 0;
  }  
`;
export const OptionLink = styled(Link)`
  color: #f3f3f3;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;

  @media screen and (max-width: 800px){
    padding: 2px 4px;
    margin: auto 0;
  } 

  @media screen and (min-width: 801px){
    &:hover{
      color: #F0B726;
      border-bottom: 1px solid #F0B726;
    }
  } 
`;

