import React, { useContext } from 'react';
import './Navbar.css';
import MapIcon from '@mui/icons-material/Map';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import LoginRegBtn from '../Buttons/LoginRegBtn';
import UserContext from '../../contexts/UserContext';

export default function HamburgerMenu() {
  const { currentUser, handleLogout } = useContext(UserContext);

  return (
    <div className="Navbar">

      <Link to="/">
        <MapIcon className="navbar-icon" fontSize="large" />
      </Link>

      {!currentUser && (
        <>
          <Link to="/login">
            <LoginRegBtn type="login" />
          </Link>

          <Link to="/register">
            <LoginRegBtn type="register" />
          </Link>
        </>
      )}

      {currentUser && (
      <Link to="/">
        <LogoutIcon onClick={handleLogout} className="navbar-icon" fontSize="large" />
      </Link>
      )}
    </div>
  );
}
