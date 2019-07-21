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

   @media screen and (max-width: 800px){
    width: 45vw;
    height: 400px;
    

    &:hover {
      .image {
        opacity: unset;
      }
  
      button {
        opacity: unset;
      }
    }
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.9;
    }
  }


`;

export const BackgroundImage = styled.div`
  width: 90%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  -webkit-box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.75);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  
  @media screen and (max-width: 800px){
    width: 100%;
    height: 80%;
  }
  
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.8;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px){
    display: block;
    opacity: 0.9;
    min-width: 60%;
    padding: 0 10px;
    font-size: 0.8em;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding-top: 10px;
  font-weight: bolder;

  @media screen and (max-width: 800px){
    flex-direction: column;
    padding-top: 0;
    text-align: center;
  }
`;

export const NameContainer = styled.span`
  width:90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px){
    margin-bottom: 0px;
    width: 100%;
  }
`
export const PriceContainer = styled.span`
  width: 10%;

  @media screen and (max-width: 800px){
    margin-bottom: 0px;
    width: 100%;
  }

`