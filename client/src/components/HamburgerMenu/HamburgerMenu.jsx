import React from 'react';
import './HamburgerMenu.css';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span />
      </label>

      <ul className="menu__box">
      <li><Link className="menu__item" to="/">Login</Link></li>

        <li><Link className="menu__item" to="/login">Login</Link></li>
        <li><Link className="menu__item" to="/register">Register</Link></li>
        <li><Link className="menu__item" to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}
