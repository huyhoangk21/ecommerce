import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/actions/user';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOutPage from './pages/SignInOutPage/SignInOutPage';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShop =>
          setCurrentUser({ id: snapShop.id, ...snapShop.data() })
        );
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOutPage} />
      </Switch>
    </Router>
  );
};

const AppRedux = connect(
  null,
  { setCurrentUser }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.querySelector('#root')
);
