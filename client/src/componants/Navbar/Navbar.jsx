import React from 'react';
import './Navbar.css';
import MapIcon from '@mui/icons-material/Map';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import LoginRegBtn from '../Buttons/LoginRegBtn';

export default function HamburgerMenu() {
  return (
    <div className="Navbar">

      <Link to="/">
        <MapIcon className="navbar-icon" fontSize="large" />
      </Link>

      <Link to="/login">
        <LoginRegBtn type="login" />
      </Link>

      <Link to="/register">
        <LoginRegBtn type="register" />
      </Link>

      <Link to="/logout">
        <LogoutIcon className="navbar-icon" fontSize="large" />
      </Link>

    </div>
  );
}
