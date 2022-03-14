import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HamburgerMenu from './componants/HamburgerMenu/HamburgerMenu';
import App from './App';
import Login from './componants/UserForm/Login';
import Logout from './componants/Logout/Logout';
import Register from './componants/UserForm/Register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
