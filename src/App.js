import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatPage = () => {
  return (
    <div>
      HAT PAGE
   </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
