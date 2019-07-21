import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')}
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  font-weight: bold;
  -webkit-box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.32);
  box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.32);

  @media screen and (max-width: 800px){
    height: 200px;
   } 

	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
    & .content{
      opacity: 1;
      border: 1px solid #f3f3f3;
      transition: 0.2s;

      & .title {
        color: #FAC94D;
      }

      & .subtitle {
       color: #FAC94D;
      }
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }


`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  min-width: 90px;
  height: 100px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  -webkit-box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.32);
  box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.32);
  background-color: rgb(67, 67, 67);
  opacity: 0.95;
  position: absolute;

  @media screen and (max-width: 800px){
    padding: 0 5px;
    min-width: 80px;
   } 
`;

export const ContentTitle = styled.h1`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 28px;
  color: #f7f7f7;

  @media screen and (max-width: 800px){
    font-size: 20px;
   } 
`;

export const ContentSubTitle = styled.span`
  font-weight: lighter;
  font-size: 20px; 
  color: #f6f6f6;

  @media screen and (max-width: 800px){
    font-size: 16px;
   } 
`;