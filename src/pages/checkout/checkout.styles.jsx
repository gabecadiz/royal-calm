import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 70vw;
  margin: 10vh auto;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  border: 1px solid black;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding: 1rem;
  .checkout-cart-item{
    height: 10vh;
  }
`;

export const HeaderBlock = styled.div`
  font-size: 1.2em;
  width: 23%;

  &:last-child{
    width: 8%;
    justify-self: end
  }
`;

export const HeaderBlockText = styled.span`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const PriceTotal = styled.span`
  align-self: flex-end;
  justify-self:end;
  padding: 1rem;
  margin: 1rem 0 0.5rem 0;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bolder;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: red;
`;

export const StripeCheckoutButtonContainer = styled.div`
  display: flex;
  justify-self: center;
  text-align: center;

  .StripeCheckout{
    margin: 1rem auto;
  }
`;