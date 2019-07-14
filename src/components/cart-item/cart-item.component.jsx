import React from 'react';
import { connect } from 'react-redux';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions'

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  NameContainer,
  CartItemQuantityContainer,
  CartItemDecrease,
  CartItemQuantity,
  CartItemIncrease,
  CartRemoveButton
} from './cart-item.styles'

const CartItem = ({ item, clearItem, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer className='name'>{name}</NameContainer>
        <span>{quantity} x ${price} </span>
        <CartItemQuantityContainer>
          <CartItemDecrease onClick={() => { removeItem(item) }} > - </CartItemDecrease>
          <CartItemQuantity> Quantity </CartItemQuantity>
          <CartItemIncrease onClick={() => { addItem(item) }}> + </CartItemIncrease>
        </CartItemQuantityContainer>
      </ItemDetailsContainer>
      <CartRemoveButton className='cart-remove-button' onClick={() => clearItem(item)}>
        &#10006;
      </CartRemoveButton>
    </CartItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);