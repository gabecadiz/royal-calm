import React from 'react';
import { connect } from 'react-redux'

import { toggleCart } from '../../redux/cart/cart.actions'

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer
}
  from './cart-icon.styles'


const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconContainer className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartIconContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)