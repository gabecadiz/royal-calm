import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

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
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPriceTotal
})

export default connect(mapStateToProps)(CheckoutPage);