import { createSelector } from 'reselect';

//input selector

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumumulatedQuantity, cartItem) => {
    return accumumulatedQuantity + cartItem.quantity
  }, 0)
)

export const selectCartItemsPriceTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumumulatedQuantity, cartItem) => {
    return accumumulatedQuantity + (cartItem.quantity * cartItem.price)
  }, 0)
)