import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px 20px 40px;
  margin-bottom: 30px;
`;

export const CollectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const CollectionTitle = styled.h1`
  font-size: 28px;
`;

export const CollectionLink = styled(Link)`
  color: rgb(67, 67, 67);
  height: 100%;
  margin: auto 0;

  &:hover{
    border-bottom: 1px solid #F0B726;
    font-weight: bolder;
  }
`

export const CollectionPreviewFilteredContainer = styled.div`
  display:flex;
  justify-content: space-between
`;

