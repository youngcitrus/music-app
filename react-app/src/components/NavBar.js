import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const signUpLink = (
    <li>
      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>
    </li>
  );

  const myProfileLink = user ? (
    <li>
      <NavLink to={`/users/${user.id}`} exact={true} activeClassName="active">
        My Profile
      </NavLink>
    </li>
  ) : null

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        { !user ? signUpLink : null}
        { myProfileLink }
        
        { user ? <LogoutButton /> : null }
        
      </ul>
    </nav>
  );
}

export default NavBar;