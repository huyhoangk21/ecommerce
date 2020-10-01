import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOutPage from './pages/SignInOutPage/SignInOutPage';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOutPage} />
      </Switch>
    </Fragment>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
