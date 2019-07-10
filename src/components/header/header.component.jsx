import React from 'react';
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import ShoppingCart from '../shopping-cart/shopping-cart.component'

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
          SHOP
        </Link>
        <Link className="option" to='/shop'>
          CONTACT
        </Link>
        {
          currentUser
            ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN </Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <ShoppingCart />}
    </div>
  )
}
//destructure currentUser from user and hidden from cart
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden
})

export default connect(mapStateToProps)(Header)