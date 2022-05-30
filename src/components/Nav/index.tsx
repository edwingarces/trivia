import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Nav.scss';

const Nav = () => (
  <nav className="Nav row center-xs">
    <ul>
      <li>
        <Link to="/">
          <img className="Nav__logo" src={logo} alt="Logo" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
