import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';


import CartIcon from '../cart-icon/cart-icon.component'
import ShoppingCart from '../shopping-cart/shopping-cart.component'

import {
  HeaderContainer,
  LogoContainer,
  LogoTitle,
  OptionsContainer,
  OptionLink
} from './header.styles'

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
        <LogoTitle><span>Royal Calm Clothing Ltd.</span></LogoTitle>
      </LogoContainer>
      <OptionsContainer >
        <OptionLink to='/shop'>
          SHOP ALL
        </OptionLink>
        {
          currentUser
            ?
            <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN </OptionLink>
        }
        <OptionLink to='/checkout'>
          CHECKOUT
        </OptionLink>
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <ShoppingCart />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);