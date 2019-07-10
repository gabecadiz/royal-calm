import React from 'react';
import { connect } from 'react-redux';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='checkout-item-image-container'>
        <img className='checkout-item-image' alt='checkout-item' src={imageUrl}></img>
      </div>
      <div className='name'>
        {name}
      </div>
      <div className='quantity'>
        <div className='arrow' onClick={() => { removeItem(cartItem) }} >&#10094; </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => { addItem(cartItem) }}>&#10095; </div>
      </div>
      <div className='price'>
        {price}
      </div>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);