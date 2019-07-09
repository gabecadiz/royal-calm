import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'


import { auth } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    //open subscription - default persistance of user sessions
    //connection is always open, must close when unmounts
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }
  //closes subscription whenever component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
