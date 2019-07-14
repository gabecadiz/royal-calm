import React from 'react';
import { connect } from 'react-redux';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions'

import './cart-item.styles.scss';

const CartItem = ({ item, clearItem, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img className='image' src={imageUrl} alt="item" />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price} </span>
        <div className='quantity'>
          <div className='quantity-modifiers'>
            <div className='cart-item-dec' onClick={() => { removeItem(item) }} > - </div>
            <span className='quantity-text'> Quantity </span>
            <div className='cart-item-inc' onClick={() => { addItem(item) }}> + </div>
          </div>
        </div>
      </div>
      <div className='cart-remove-button' onClick={() => clearItem(item)}>
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

export default connect(null, mapDispatchToProps)(CartItem);