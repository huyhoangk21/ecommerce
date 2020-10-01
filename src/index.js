import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return <HomePage />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
