import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';


export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 12px;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 35px;
  height:35px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bolder;
  bottom:18px;
  color: #F3F3F3
`;