import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px){
    padding: 0 10px;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const CollectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 15px 20px;

  @media screen and (max-width: 800px){
    justify-content: space-evenly;
    align-items: center;
    padding: 8px 16px;
  }
`

export const CollectionTitle = styled.h1`
  font-size: 28px;
  margin: auto 0;
`;

export const CollectionLink = styled(Link)`
  color: rgb(67, 67, 67);
  height: 100%;
  margin: auto 0;

  @media screen and (max-width: 800px){
    font-size: 14px;
   } 

  &:hover{
    border-bottom: 1px solid #F0B726;
    font-weight: bolder;
  }
`

export const CollectionPreviewFilteredContainer = styled.div`
  display:flex;
  justify-content: space-between;

  @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

