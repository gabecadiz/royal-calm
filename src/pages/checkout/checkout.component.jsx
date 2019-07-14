import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  HeaderBlockText,
  PriceTotal,
  TestWarningContainer,
  StripeCheckoutButtonContainer
} from './checkout.styles'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlock>
          <HeaderBlockText>Product</HeaderBlockText>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlockText>Description</HeaderBlockText>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlockText>Quantity</HeaderBlockText>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlockText>Price</HeaderBlockText>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlockText>Remove</HeaderBlockText>
        </HeaderBlock>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem, idx) => {
        return <CheckoutItem key={idx} cartItem={cartItem} />
      })}
      <PriceTotal>Cart Total: ${totalPrice}</PriceTotal>
      <TestWarningContainer>
        <span>*Please use the following test credit card for payments*</span>
        <br />
        <span>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</span>
      </TestWarningContainer>
      <StripeCheckoutButtonContainer>
        <StripeCheckoutButton price={totalPrice} />
      </StripeCheckoutButtonContainer>
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPriceTotal
})

export default connect(mapStateToProps)(CheckoutPage);