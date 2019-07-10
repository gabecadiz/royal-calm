import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => {
  return (
    <div className='checkout-item'>
      <div className='checkout-item-image-container'>
        <img className='checkout-item-image' alt='checkout-item' src={imageUrl}></img>
      </div>
      <div className='name'>
        {name}
      </div>
      <div className='quantity'>
        - {quantity} +
      </div>
      <div className='price'>
        {price}
      </div>
      <div className='remove-button'>
        &#10006;
      </div>
    </div>
  )
}

export default CheckoutItem;