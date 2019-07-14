import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span className='header-block-text'>Description</span>
        </div>
        <div className='header-block'>
          <span className='header-block-text'>Quantity</span>
        </div>
        <div className='header-block'>
          <span className='header-block-text'>Price</span>
        </div>
        <div className='header-block'>
          <span className='header-block-text'>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem, idx) => {
        return <CheckoutItem key={idx} cartItem={cartItem} />
      })}
      <span className="price-total">Cart Total: ${totalPrice}</span>
      <div className="test-warning">
        <span>*Please use the following test credit card for payments*</span>
        <br />
        <span>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</span>
      </div>
      <div className="stripe-checkout-button-container">
        <StripeCheckoutButton price={totalPrice} />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPriceTotal
})

export default connect(mapStateToProps)(CheckoutPage);