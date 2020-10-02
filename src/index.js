import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/actions/user';
import { currentUserSelector } from './utils/userSelector';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOutPage from './pages/SignInOutPage/SignInOutPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const App = ({ currentUser, setCurrentUser }) => {
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
    <PersistGate persistor={persistor}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInOutPage />
            }
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </Router>
    </PersistGate>
  );
};

const mapStateToProps = state => {
  return { currentUser: currentUserSelector(state) };
};

const AppConnect = connect(mapStateToProps, { setCurrentUser })(App);

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.querySelector('#root')
);
