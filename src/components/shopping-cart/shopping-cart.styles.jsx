import styled, { keyframes } from 'styled-components';

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-5px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

export const ShoppingCartContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-left: 1px solid black;
  border-right:1px solid black;
  border-bottom:1px solid black;
  background-color: white;
  top: 80px;
  right: 0px;
  z-index: 15;
  animation: ${moveInRight} 0.5s ease-out;    
  -webkit-box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);

  button {
    margin-top: auto;
    }

  @media screen and (max-width: 800px){
    top: 70px;
  }  
`;

export const CartItemsContainer = styled.div`
  height: auto; 
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const MessageContainer = styled.span`
  justify-self: center;
  align-self: center;
  font-weight: bold;

  .empty{
  color: red;
  }
`;

export const TotalPriceContainer = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-weight:bold;
  
`;