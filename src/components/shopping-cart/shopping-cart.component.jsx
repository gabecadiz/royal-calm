import React from 'react';

import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors'


import './shopping-cart.styles.scss';

const ShoppingCart = ({ cartItems, totalPrice }) => {
  return (
    <div className="shopping-cart">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <div className='total-container'>
        <span className="price-info">
          {totalPrice ? `Your cart total is $${totalPrice}` : "Your Cart Is Empty"}
        </span>
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartItemsPriceTotal(state)
});

export default connect(mapStateToProps)(ShoppingCart)