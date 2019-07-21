import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px 20px 25px;
  width: 38vw;
  border: 1px solid black;

  @media screen and (max-width: 800px){
    width: 100%;
    padding: 0px 10px;
    margin: 10px;
   } 
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpCustomButton = styled(CustomButton)`
    @media screen and (max-width: 800px){
      margin: 0 auto 10px;
   } 
`