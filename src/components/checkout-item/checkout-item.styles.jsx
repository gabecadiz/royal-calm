import styled, { css } from 'styled-components';

const containerStyles = css`
  display: flex;
  width: 23%;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 800px){
    width: 22%;
   } 
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding: 1rem;
  align-items: center;
  font-size: 1.5rem;

  @media screen and (max-width: 800px){
    font-size: 16px;
   } 
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%; 
`;

export const CheckoutItemImage = styled.img`
  width: 90%;
  height: 90%;
`;

export const NameContainer = styled.div`
  ${containerStyles}
`;
export const QuantityContainer = styled.div`
  ${containerStyles}
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
  padding: 0 0.5rem;

  &:hover{
    color: #F0B726;
  }
`;

export const PriceContainer = styled.div`
  ${containerStyles}
`;

export const CheckoutRemoveButton = styled.div`
  display: flex;
  width: 8%;
  justify-content: center;
  align-self: center;

  &:hover{
    cursor: pointer;
    color: red;
  }
`;