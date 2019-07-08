import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Header from './components/header/header.component'
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

