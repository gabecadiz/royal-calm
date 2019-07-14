import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display:flex;
  height: 100px;
  margin-bottom: 15px;
  font-size: 1.2rem;
`;
export const CartItemImage = styled.img`
  width: 40%;
`;

export const ItemDetailsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
`;
export const NameContainer = styled.span`
  font-size: 16px;
`;

export const CartItemQuantityContainer = styled.div`
  display: flex;
  justify-content: space-evenly; 
`;

export const CartItemIncrease = styled.div`
  font-weight: bold;

  &:hover{
    cursor: pointer;
    transform: scale(1.5) translateY(-2px);
  }
`;

export const CartItemQuantity = styled.span`
  font-size: 1rem;
`;

export const CartItemDecrease = styled.div`
  font-weight: bold;

  &:hover{
    cursor: pointer;
    transform: scale(1.5) translateY(-2px);
  }
`;

export const CartRemoveButton = styled.div`
  color: red;
  align-self: center;
  justify-self: center;
  padding-right: 15px;

  &:hover{
    cursor: pointer;
    transform: scale(1.2);
  }
`;

