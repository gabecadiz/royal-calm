import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 38vw;
  padding: 0px 25px 20px 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  @media screen and (max-width: 800px){
    width: 100%;
    padding: 0px 10px;
    margin: 10px;
   } 
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display:flex;
  justify-content: space-evenly;

  @media screen and (max-width: 800px){
    flex-direction: column;
    padding: 10px 0;
  }
`;