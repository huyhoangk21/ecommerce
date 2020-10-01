import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import HomePage from './pages/HomePage/HomePage';

const Hat = props => {
  console.log(props);
  return <div>i'm hat</div>;
};

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats/' component={Hat} />
      <Route path='/shop/jackets' />
      <Route path='/shop/sneakers' />
      <Route path='/shop/mens' />
      <Route path='/shop/womens' />
    </Switch>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
