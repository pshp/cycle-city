import React from 'react';
import './Navbar.css';
import MapIcon from '@mui/icons-material/Map';
import LoginIcon from '@mui/icons-material/Login';

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
  return (
    <div className="Navbar">

      <Link to="/">
        <MapIcon fontSize="large" />
      </Link>

      <Link alt="login" to="/login">
        <LoginIcon fontSize="large" />
      </Link>

    </div>
  );
}
