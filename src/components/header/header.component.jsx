import React from 'react';
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component'
import ShoppingCart from '../shopping-cart/shopping-cart.component'

import {
  HeaderContainer,
  LogoContainer,
  LogoTitle,
  OptionsContainer,
  OptionLink
} from './header.styles'

// import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
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
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN </OptionLink>
        }
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

export default connect(mapStateToProps)(Header)