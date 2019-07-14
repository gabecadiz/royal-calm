import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius: 2px;

  &:hover {

    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.9;
    }
`;

export const BackgroundImage = styled.div`
  width: 95%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  -webkit-box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`}
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.8;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding-top: 10px;
  font-weight: bolder;
`;

export const NameContainer = styled.span`
  width:90%;
  margin-bottom: 15px;
`
export const PriceContainer = styled.span`
  width: 10%;
`