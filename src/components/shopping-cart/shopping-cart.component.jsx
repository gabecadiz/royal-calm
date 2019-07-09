import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './shopping-cart.styles.scss';

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <div className="cart-items">

      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}

export default ShoppingCart