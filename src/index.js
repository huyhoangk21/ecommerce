import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import { auth, createUserProfileDocument } from './firebase/firebase';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOutPage from './pages/SignInOutPage/SignInOutPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

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
  }, []);

  return (
    <Provider store={store}>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOutPage} />
      </Switch>
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
