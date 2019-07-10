import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCart } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors'


import './shopping-cart.styles.scss';

const ShoppingCart = ({ cartItems, totalPrice, history, toggleCart }) => {
  return (
    <div className="shopping-cart">
      <div className="cart-items">
        {cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          :
          <span className="empty-message">Your Cart Is <span className="empty">Empty</span></span>
        }
      </div>
      <div className='total-container'>
        <span className="price-info">
          {totalPrice ? `Your cart total is $${totalPrice}` : null}
        </span>
      </div>
      <CustomButton onClick={() => {
        toggleCart();
        history.push('/checkout');
      }}>CHECKOUT</CustomButton>
    </div>
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

