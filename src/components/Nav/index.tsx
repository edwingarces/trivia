import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Nav.scss';

const Nav = () => (
  <nav className="Nav row center-xs">
    <ul>
      <li>
        <Link to="/">
          <img src={logo} alt="Logo" width="150" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
