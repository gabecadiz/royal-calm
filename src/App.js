import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Footer from './components/footer/footer.component';

import { GlobalStyle } from './global.styles';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  //closes subscription whenever component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ScrollToTop>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() =>
              this.props.currentUser ?
                (<Redirect to="/" />) :
                (<SignInAndSignUpPage />)
            } />
            <Route exact path='/contact' component={ContactPage} />
          </ScrollToTop>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
