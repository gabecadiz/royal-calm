import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCart } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors'


import {
  ShoppingCartContainer,
  CartItemsContainer,
  MessageContainer,
  TotalPriceContainer
} from './shopping-cart.styles'

const ShoppingCart = ({ cartItems, totalPrice, history, toggleCart }) => {
  return (
    <ShoppingCartContainer>
      <CartItemsContainer>
        {cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          :
          <MessageContainer>Your Cart Is <span className="empty">Empty</span></MessageContainer>
        }
      </CartItemsContainer>
      <TotalPriceContainer>
        <span>{totalPrice ? `Your cart total is $${totalPrice}` : null}</span>
      </TotalPriceContainer>
      <CustomButton onClick={() => {
        toggleCart();
        history.push('/checkout');
      }}>
        <span>CHECKOUT</span>
      </CustomButton>
    </ShoppingCartContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPriceTotal
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCart))

