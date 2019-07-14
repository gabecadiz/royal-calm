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
`;

export const LogoContainer = styled(Link)`
  height: 75px;
  width: 100%;
  padding: 20px 25px;
  cursor: default;
  .logo{
    cursor: pointer;

    &:hover{
      transform: scale(1.2);
      transition: 1000ms;
    }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 20px 15px;
`;
export const OptionLink = styled(Link)`
  color: #f3f3f3;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;

  &:hover{
    color: #F0B726;
    border-bottom: 1px solid #F0B726;
  }
`;

