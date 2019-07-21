import React from 'react';

import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

import { withRouter } from "react-router";


import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  //stripe wants price in cents and USD
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Cs8H9ipLhFjoatE9YWuyZc2O00AXCxO9Yi';

  //normally pass token to backend and process charge, not implented yet;
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
    clearCart();
    history.push('/')
  }

  return (
    <StripeCheckout
      label='Pay Now With Stripe'
      name='Royal Calm Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));