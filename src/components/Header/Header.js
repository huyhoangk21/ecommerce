import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.styles.scss';
import { auth } from '../../firebase/firebase';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser);
  const renderedAuthLinks = currentUser ? (
    <div className='option' onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  ) : (
    <Link className='option' to='/signin'>
      SIGN IN
    </Link>
  );
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/'>
          CONTACT
        </Link>
        {renderedAuthLinks}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return { currentUser, hidden };
};

export default connect(mapStateToProps)(Header);
