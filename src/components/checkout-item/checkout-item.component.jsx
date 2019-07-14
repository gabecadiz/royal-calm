import React from 'react';
import { connect } from 'react-redux';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemImage,
  NameContainer,
  QuantityContainer,
  QuantityArrow,
  PriceContainer,
  CheckoutRemoveButton
} from './checkout-item.styles'


const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer >
        <CheckoutItemImage alt='checkout-item' src={imageUrl} />
      </CheckoutItemImageContainer>
      <NameContainer>
        <span>{name}</span>
      </NameContainer>
      <QuantityContainer>
        <QuantityArrow onClick={() => { removeItem(cartItem) }} >
          &#10094;
        </QuantityArrow>
        <span>{quantity}</span>
        <QuantityArrow className='arrow' onClick={() => { addItem(cartItem) }}>
          &#10095;
        </QuantityArrow>
      </QuantityContainer>
      <PriceContainer>
        <span>${price}</span>
      </PriceContainer>
      <CheckoutRemoveButton onClick={() => clearItem(cartItem)}>
        &#10006;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);